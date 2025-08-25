'use server';

/**
 * @fileOverview A personalized study plan generator for Mat Digital courses.
 *
 * - generatePersonalizedStudyPlan - A function that generates a personalized study plan.
 * - PersonalizedStudyPlanInput - The input type for the generatePersonalizedStudyPlan function.
 * - PersonalizedStudyPlanOutput - The return type for the generatePersonalizedStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedStudyPlanInputSchema = z.object({
  courses: z
    .array(
      z.object({
        name: z.string().describe('The name of the course.'),
        description: z.string().describe('A brief description of the course.'),
        modules: z.array(
          z.object({
            name: z.string().describe('The name of the module.'),
            duration: z.number().describe('The estimated duration of the module in hours.'),
            deadline: z.string().optional().describe('The deadline for completing the module (ISO date).'),
            completed: z.boolean().default(false).describe('Whether the module has been completed.'),
          })
        ),
      })
    )
    .describe('The list of courses the student is enrolled in.'),
  availableHoursPerWeek: z
    .number()
    .describe('The number of hours the student has available for studying each week.'),
  startDate: z
    .string()
    .describe('The start date for the study plan (ISO date).'),
});

export type PersonalizedStudyPlanInput = z.infer<typeof PersonalizedStudyPlanInputSchema>;

const PersonalizedStudyPlanOutputSchema = z.object({
  studyPlan: z
    .array(
      z.object({
        courseName: z.string().describe('The name of the course.'),
        moduleName: z.string().describe('The name of the module.'),
        estimatedCompletionDate: z
          .string()
          .describe('The estimated completion date for the module (ISO date).'),
        weeklyHours: z.number().describe('The number of hours to spend on this module each week.'),
      })
    )
    .describe('The personalized study plan.'),
});

export type PersonalizedStudyPlanOutput = z.infer<typeof PersonalizedStudyPlanOutputSchema>;

export async function generatePersonalizedStudyPlan(
  input: PersonalizedStudyPlanInput
): Promise<PersonalizedStudyPlanOutput> {
  return personalizedStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStudyPlanPrompt',
  input: {schema: PersonalizedStudyPlanInputSchema},
  output: {schema: PersonalizedStudyPlanOutputSchema},
  prompt: `You are an AI-powered study plan generator for Mat Digital courses.

  You will generate a personalized study plan for a student enrolled in multiple courses, taking into account their progress, deadlines, and available study time.

  The study plan should be optimized to help the student complete all courses successfully and on time.

  Consider the course descriptions, module durations, deadlines, and completion status when creating the study plan.

  The study plan should include the course name, module name, estimated completion date, and the number of hours to spend on each module each week.

  Courses: {{{courses}}}
  Available Hours Per Week: {{{availableHoursPerWeek}}}
  Start Date: {{{startDate}}}

  Output the study plan in JSON format.
`,
});

const personalizedStudyPlanFlow = ai.defineFlow(
  {
    name: 'personalizedStudyPlanFlow',
    inputSchema: PersonalizedStudyPlanInputSchema,
    outputSchema: PersonalizedStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt({...input, courses: JSON.stringify(input.courses) as any});
    return output!;
  }
);
