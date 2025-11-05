import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Users, Rocket, Award, ArrowRight, Calendar } from 'lucide-react';

const phases = [
  {
    name: 'Ignition',
    description: 'Foundation building and skill development',
    duration: '2 weeks',
  },
  {
    name: 'Cohort',
    description: 'Collaborative learning and project work',
    duration: '4 weeks',
  },
  {
    name: 'BuildVerse',
    description: 'Real-world project development',
    duration: '6 weeks',
  },
  {
    name: 'Internship',
    description: 'Professional experience and mentorship',
    duration: '8 weeks',
  },
];

const benefits = [
  'Industry-standard project experience',
  'One-on-one mentorship',
  'Certificate of completion',
  'Internship opportunities',
  'Alumni network access',
  'Portfolio development',
];

export function ProgramsFellowships() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Programs & Fellowships
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Empowering the next generation through structured learning, mentorship, 
            and real-world project experience.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          {/* ELAN 20 Fellowship */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">ELAN 20' BuildVerse Fellowship</CardTitle>
              <p className="text-muted-foreground">
                A comprehensive 20-week program designed for students in grades 9-12 and college freshers
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Phases */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Rocket className="mr-2 h-5 w-5" />
                  Program Phases
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {phases.map((phase, index) => (
                    <div key={phase.name} className="relative">
                      <div className="rounded-lg border bg-background p-4 text-center">
                        <div className="mb-2 text-sm font-medium text-blue-600">
                          Phase {index + 1}
                        </div>
                        <h4 className="font-semibold">{phase.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {phase.description}
                        </p>
                        <Badge variant="outline" className="mt-2">
                          <Calendar className="mr-1 h-3 w-3" />
                          {phase.duration}
                        </Badge>
                      </div>
                      {index < phases.length - 1 && (
                        <div className="absolute top-1/2 -right-2 hidden lg:block">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    What You'll Gain
                  </h3>
                  <div className="space-y-2">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Eligibility
                  </h3>
                  <div className="space-y-3">
                    <Badge variant="secondary" className="mr-2">
                      Grades 9-12 Students
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      College Freshers
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-3">
                      Open to passionate learners ready to dive into the world of 
                      technology, design, and innovation.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Apply for ELAN 20'
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="mt-2 text-sm text-muted-foreground">
                  Applications open for the next cohort
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}