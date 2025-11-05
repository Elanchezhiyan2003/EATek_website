import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Twitter, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Visionary leader bridging education and technology with 8+ years in EdTech innovation.',
    image: '/api/placeholder/80/80',
    skills: ['Leadership', 'EdTech', 'Strategy'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Priya Gupta',
    role: 'CTO & Co-founder',
    bio: 'Full-stack architect passionate about scalable solutions and mentoring young developers.',
    image: '/api/placeholder/80/80',
    skills: ['Full-Stack', 'Architecture', 'Mentoring'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Head of Design',
    bio: 'Creative director focused on human-centered design and emotional user experiences.',
    image: '/api/placeholder/80/80',
    skills: ['UI/UX', 'Branding', 'Creative Direction'],
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Programs',
    bio: 'Education specialist designing transformative learning experiences for the next generation.',
    image: '/api/placeholder/80/80',
    skills: ['Education', 'Curriculum', 'Mentorship'],
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export function TeamHighlight() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Passionate innovators, educators, and creators working together to build 
            the future of technology and education.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <Avatar className="mx-auto h-20 w-20 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center rounded-full bg-muted px-6 py-3">
            <span className="text-sm font-medium">
              Want to join our team? 
              <a href="/careers" className="ml-2 text-blue-600 hover:text-blue-700 font-semibold">
                View Open Positions →
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}