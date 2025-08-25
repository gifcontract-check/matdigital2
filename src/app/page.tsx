import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Code, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { COURSES_DATA, TESTIMONIALS_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

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
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Devenez un expert du <span className="text-primary">digital</span>.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Accédez à des formations de pointe pour maîtriser le marketing digital, la création de business en ligne et booster votre productivité.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="#courses">
                    Découvrir nos formations <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/study-plan">
                    Plan d'étude IA <Bot className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <CardFooter className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link href="#">Voir la formation</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative w-full max-w-md mx-auto">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full -rotate-12 blur-3xl opacity-30"></div>
                <Image
                  src="https://picsum.photos/500/500"
                  alt="Mat, fondateur de Mat Digital"
                  width={500}
                  height={500}
                  className="rounded-full object-cover aspect-square relative"
                  data-ai-hint="portrait man"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Qui est Mat ?</h2>
                <p className="text-muted-foreground">
                  Entrepreneur passionné du web depuis plus de 10 ans, Mat a accompagné des centaines de personnes dans la création et le développement de leur business en ligne. 
                </p>
                <p className="text-muted-foreground">
                  Sa mission ? Rendre accessible les stratégies qui fonctionnent et vous donner les clés pour atteindre l'indépendance financière et géographique grâce au digital. Son approche est pragmatique, orientée résultats et sans bullshit.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Ce que nos étudiants disent</h2>
              <p className="mt-4 text-muted-foreground">
                La réussite de nos étudiants est notre plus grande fierté.
              </p>
            </div>
            <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between p-6">
                        <CardContent className="p-0">
                          <Quote className="w-8 h-8 text-primary mb-4" />
                          <p className="text-muted-foreground">{testimonial.comment}</p>
                        </CardContent>
                        <div className="flex items-center gap-4 mt-6">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="rounded-full"
                            data-ai-hint="avatar person"
                          />
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
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
