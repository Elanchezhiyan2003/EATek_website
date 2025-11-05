import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Patel',
    role: 'ELAN 20 Alumni',
    company: 'Software Engineer at TechCorp',
    image: '/api/placeholder/40/40',
    content: 'The ELAN fellowship transformed my understanding of technology. The mentorship and real-world projects prepared me for my career in ways I never expected.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Startup Founder',
    company: 'CEO at InnovateLab',
    image: '/api/placeholder/40/40',
    content: 'EAtek\'s approach to bridging education and technology is revolutionary. Their programs don\'t just teach skills - they inspire innovation.',
    rating: 5,
  },
  {
    name: 'Rahul Kumar',
    role: 'Design Student',
    company: 'BuildVerse Participant',
    image: '/api/placeholder/40/40',
    content: 'The hands-on experience and mentorship I received helped me land my dream internship. EAtek truly cares about student success.',
    rating: 5,
  },
];

const impactStats = [
  { label: 'Students Mentored', value: '500+', description: 'Across various programs' },
  { label: 'Projects Completed', value: '150+', description: 'Real-world applications' },
  { label: 'Partner Institutions', value: '25+', description: 'Educational collaborations' },
  { label: 'Success Stories', value: '200+', description: 'Career transformations' },
];

export function CommunityImpact() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Community & Impact
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Building a community of innovators, creators, and changemakers who are 
            shaping the future of technology and education.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <Card key={stat.label} className="text-center border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-medium">{stat.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-12">What Our Community Says</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted-foreground/20" />
                    <p className="text-muted-foreground italic pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 mt-6">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}