"use server";

import { z } from "zod";
import { generatePersonalizedStudyPlan, PersonalizedStudyPlanOutput } from "@/ai/flows/personalized-study-plan";
import { COURSES_DATA } from "@/lib/constants";

const formSchema = z.object({
  availableHoursPerWeek: z.coerce.number().min(1, "Veuillez entrer un nombre d'heures valide.").max(100),
  selectedCourses: z.array(z.string()).min(1, "Veuillez sélectionner au moins une formation."),
});

export type StudyPlanState = {
    plan: PersonalizedStudyPlanOutput | null;
    error: string | null;
}

export async function getPersonalizedStudyPlan(
  prevState: StudyPlanState,
  formData: FormData
): Promise<StudyPlanState> {
  
  const validatedFields = formSchema.safeParse({
    availableHoursPerWeek: formData.get('availableHoursPerWeek'),
    selectedCourses: formData.getAll('selectedCourses'),
  });

  if (!validatedFields.success) {
    return {
      plan: null,
      error: validatedFields.error.flatten().fieldErrors.selectedCourses?.[0] || validatedFields.error.flatten().fieldErrors.availableHoursPerWeek?.[0] || 'Erreur de validation.',
    };
  }
  
  const { availableHoursPerWeek, selectedCourses } = validatedFields.data;

  try {
    const coursesForAI = COURSES_DATA
      .filter(course => selectedCourses.includes(course.id))
      .map(course => ({
        name: course.title,
        description: course.description,
        modules: course.modules.map(module => ({ ...module, completed: false })),
      }));

    if (coursesForAI.length === 0) {
        return { plan: null, error: "Aucune formation valide sélectionnée." };
    }

    const plan = await generatePersonalizedStudyPlan({
      courses: coursesForAI,
      availableHoursPerWeek,
      startDate: new Date().toISOString(),
    });

    return { plan, error: null };
  } catch (e) {
    console.error(e);
    return { plan: null, error: "Une erreur est survenue lors de la génération du plan. Veuillez réessayer." };
  }
}
