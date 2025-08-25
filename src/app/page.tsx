
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, BookOpen, Target, Brain, Lightbulb, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { COURSES_DATA, TESTIMONIALS_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-5 h-5 ${
          i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    );
  }
  return <div className="flex gap-1">{stars}</div>;
};

const SalarySimulator = () => {
    const [hours, setHours] = useState(10);
    const [salaryRange, setSalaryRange] = useState("1 500€ - 2 500€");

    const handleHoursChange = (value: number) => {
        setHours(value);
        if (value <= 5) {
            setSalaryRange("500€ - 1 000€");
        } else if (value <= 10) {
            setSalaryRange("1 500€ - 2 500€");
        } else if (value <= 20) {
            setSalaryRange("2 500€ - 4 000€");
        } else if (value <= 35) {
            setSalaryRange("4 000€ - 6 000€");
        } else {
            setSalaryRange("6 000€+");
        }
    };

    return (
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline flex items-center justify-center gap-2"><DollarSign className="w-8 h-8 text-primary"/>Estimez votre potentiel de revenus</CardTitle>
                <CardDescription>Indiquez le nombre d'heures que vous pouvez consacrer par semaine pour voir ce que vous pourriez atteindre.</CardDescription>
            </CardHeader>
            <CardContent className="px-8 py-6">
                <div className="space-y-6">
                    <div className="text-center">
                        <Label htmlFor="hours-slider" className="text-lg font-medium">Heures par semaine : <span className="text-primary font-bold">{hours}h</span></Label>
                        <Slider
                            id="hours-slider"
                            min={1}
                            max={50}
                            step={1}
                            value={[hours]}
                            onValueChange={(value) => handleHoursChange(value[0])}
                            className="mt-4"
                        />
                    </div>
                    <div className="text-center pt-4">
                        <p className="text-muted-foreground mb-2">Votre estimation de revenus mensuels :</p>
                        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            {salaryRange}
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="text-center text-xs text-muted-foreground p-4 border-t">
                <p>Cette estimation est basée sur les résultats moyens de nos étudiants et ne constitue pas une garantie de revenus. Votre succès dépend de votre implication, de votre niche et de votre capacité à appliquer les stratégies enseignées.</p>
            </CardFooter>
        </Card>
    );
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 text-accent border-accent py-1 px-3">
                <Star className="w-4 h-4 mr-2" />
                N°1 des formations business en ligne
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Devenez un expert du digital.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Accédez à des formations de pointe pour maîtriser le marketing digital, la création de business en ligne et booster votre productivité.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="#courses">
                    Découvrir nos formations <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Pourquoi nous choisir ?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Nous nous engageons à votre réussite. Voici ce qui nous différencie.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center text-center p-6 rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <BookOpen className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Contenu d'Expert</h3>
                    <p className="text-muted-foreground">
                        Nos formations sont créées par des experts du secteur pour vous garantir un contenu à jour et pertinent.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Approche Pratique</h3>
                    <p className="text-muted-foreground">
                        Mettez en pratique ce que vous apprenez avec des projets concrets et des études de cas réels.
                    </p>
                </div>
                 <div className="flex flex-col items-center text-center p-6 rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <Brain className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Pédagogie Active</h3>
                    <p className="text-muted-foreground">
                       Une approche qui vous implique activement pour une mémorisation et une compréhension profondes.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                    <Lightbulb className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Projets Concrets</h3>
                    <p className="text-muted-foreground">
                       Appliquez vos connaissances sur des projets réels pour construire un portfolio solide.
                    </p>
                </div>
            </div>
          </div>
        </section>

        <section id="courses" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Nos formations phares</h2>
              <p className="mt-4 text-muted-foreground">
                Des programmes conçus pour vous donner des compétences concrètes et applicables immédiatement.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {COURSES_DATA.map((course) => (
                <Card key={course.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={course.dataAiHint}
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="font-headline text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex-col items-start space-y-4">
                    <p className="text-2xl font-bold text-primary">{course.price}€</p>
                    <Button asChild className="w-full group">
                      <Link href="#">Voir la formation <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="simulator" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <SalarySimulator />
            </div>
        </section>


        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Les avis de nos étudiants</h2>
              <p className="mt-4 text-muted-foreground">
                La réussite de nos étudiants est notre plus grande fierté.
              </p>
            </div>
            <Carousel opts={{ loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between p-6">
                        <CardContent className="p-0 flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            <Avatar>
                              <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                                {testimonial.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                {renderStars(testimonial.rating)}
                            </div>
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
