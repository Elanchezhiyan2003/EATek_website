import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Wrench, GraduationCap, ArrowRight } from 'lucide-react';

const offerings = [
  {
    icon: Package,
    title: 'Products',
    description: 'Innovative SaaS solutions that transform how you work and create.',
    items: ['Portli - Portfolio SaaS', 'FlowBox - Automation Platform', 'Stasis Artis - Creative Commerce', 'BrandOS - Service Suite'],
    color: 'from-blue-500 to-cyan-500',
    href: '/products',
  },
  {
    icon: Wrench,
    title: 'Services',
    description: 'End-to-end development and design services for your digital transformation.',
    items: ['Web & App Development', 'SaaS Development', 'Branding & Design', 'AI Integration'],
    color: 'from-purple-500 to-pink-500',
    href: '/services',
  },
  {
    icon: GraduationCap,
    title: 'Programs',
    description: 'Educational initiatives that nurture the next generation of innovators.',
    items: ['ELAN 20 Fellowship', 'BuildVerse Program', 'Workshops & Bootcamps', 'Mentorship Circle'],
    color: 'from-green-500 to-emerald-500',
    href: '/programs',
  },
];

export function Offerings() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Offerings
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive solutions spanning products, services, and educational programs 
            designed to accelerate your digital journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <Card key={offering.title} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-5`} />
                <CardHeader>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${offering.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{offering.description}</p>
                  <div className="space-y-2">
                    {offering.items.map((item) => (
                      <Badge key={item} variant="secondary" className="mr-2 mb-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}