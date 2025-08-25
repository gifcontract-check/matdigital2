"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getPersonalizedStudyPlan, StudyPlanState } from "./actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { COURSES_DATA } from "@/lib/constants";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bot, CheckCircle, Clock, FileText, Loader2, Send, Terminal, Zap } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Génération en cours...
        </>
      ) : (
        <>
          Générer mon plan <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function StudyPlanPage() {
  const initialState: StudyPlanState = { plan: null, error: null };
  const [state, formAction] = useFormState(getPersonalizedStudyPlan, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: state.error,
      });
    }
  }, [state.error, toast]);


  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline flex items-center justify-center gap-4">
            <Bot className="w-10 h-10 text-primary" />
            Votre Plan d'Étude Personnalisé
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
            L'IA de Mat Digital organise votre apprentissage pour une efficacité maximale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card>
            <CardHeader>
                <CardTitle>Configurez votre plan</CardTitle>
                <CardDescription>Indiquez vos disponibilités et les formations que vous suivez.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="space-y-6">
                    <div>
                        <Label htmlFor="availableHoursPerWeek">Heures disponibles par semaine</Label>
                        <Input id="availableHoursPerWeek" name="availableHoursPerWeek" type="number" placeholder="Ex: 10" required min="1" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label>Vos formations</Label>
                        <div className="space-y-2">
                            {COURSES_DATA.map(course => (
                                <div key={course.id} className="flex items-center space-x-2 p-3 rounded-md border bg-background/50">
                                    <Checkbox id={course.id} name="selectedCourses" value={course.id} />
                                    <Label htmlFor={course.id} className="font-normal flex-1 cursor-pointer">{course.title}</Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <SubmitButton />
                </form>
            </CardContent>
        </Card>

        <div className="space-y-6">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-3"><CheckCircle className="text-primary"/> Votre programme</h2>
            {state.plan ? (
                <div className="space-y-4">
                {state.plan.studyPlan.map((item, index) => (
                    <Card key={index} className="bg-card">
                    <CardHeader>
                        <CardTitle className="text-lg">{item.moduleName}</CardTitle>
                        <CardDescription>{item.courseName}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{item.weeklyHours}h / semaine</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-muted-foreground" />
                            <span>Fin estimée: {new Date(item.estimatedCompletionDate).toLocaleDateString('fr-FR')}</span>
                        </div>
                    </CardContent>
                    </Card>>
                ))}
                </div>
            ) : (
                <Card className="flex flex-col items-center justify-center p-8 text-center border-dashed">
                    <Zap className="w-12 h-12 text-muted-foreground/50 mb-4"/>
                    <CardTitle className="text-muted-foreground">Votre plan apparaîtra ici.</CardTitle>
                    <CardDescription className="mt-2">Remplissez le formulaire pour commencer.</CardDescription>
                </Card>
            )}
        </div>
      </div>
    </div>
  );
}
