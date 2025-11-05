import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Heart, 
  GitBranch, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Code,
  Lightbulb,
  Target,
  Star,
  ExternalLink,
  Github,
  UserPlus,
  Handshake,
  Rocket,
  Award
} from 'lucide-react';

const communityFeatures = [
  {
    icon: Users,
    title: 'Fellowship Network',
    intro: 'Every EAtek fellow joins a thriving peer-to-peer ecosystem that grows beyond the program.',
    why: 'True learning happens in communities, not in isolation.',
    positioning: 'A lifelong network of learners, builders, and creators who support each other.',
    features: ['Peer-to-peer learning', 'Alumni network', 'Collaborative projects', 'Lifetime access'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Mentorship Circle',
    intro: 'Fellows are guided by mentors and industry experts who bring real-world insights.',
    why: 'Classrooms often miss practical perspectives — mentorship fills that gap.',
    positioning: 'A bridge between ambition and industry reality.',
    features: ['1-on-1 mentoring', 'Industry experts', 'Career guidance', 'Real-world insights'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: GitBranch,
    title: 'Open Source First',
    intro: 'EAtek actively contributes to open source and encourages fellows to build in public.',
    why: 'Collaboration accelerates innovation and keeps knowledge accessible.',
    positioning: 'We don\'t just consume tech — we give back to the ecosystem.',
    features: ['Open source projects', 'Public building', 'Knowledge sharing', 'Community contributions'],
    color: 'from-green-500 to-emerald-500',
  },
];

const impactStories = [
  {
    icon: Rocket,
    title: 'Students Launching Startups',
    name: 'Arjun & Team',
    story: 'Three ELAN fellows co-founded a EdTech startup that now serves 10,000+ students across India.',
    achievement: 'Raised ₹50L in seed funding',
    category: 'Entrepreneurship',
    image: '/api/placeholder/60/60',
  },
  {
    icon: Heart,
    title: 'Learners Becoming Mentors',
    name: 'Priya Sharma',
    story: 'From BuildVerse participant to leading mentor, now guiding 20+ fellows in their tech journey.',
    achievement: 'Mentored 50+ students',
    category: 'Leadership',
    image: '/api/placeholder/60/60',
  },
  {
    icon: TrendingUp,
    title: 'Creators Monetizing Art',
    name: 'Rahul Creative',
    story: 'Used Stasis Artis to build a thriving digital art business, earning ₹2L+ monthly from creative work.',
    achievement: '₹2L+ monthly revenue',
    category: 'Creative Business',
    image: '/api/placeholder/60/60',
  },
  {
    icon: Code,
    title: 'Open Source Contributors',
    name: 'Dev Community',
    story: 'EAtek fellows have contributed to 100+ open source projects, impacting millions of developers.',
    achievement: '100+ OSS contributions',
    category: 'Technology',
    image: '/api/placeholder/60/60',
  },
];

const communityStats = [
  { label: 'Active Fellows', value: '500+' },
  { label: 'Mentors & Experts', value: '50+' },
  { label: 'Open Source Projects', value: '25+' },
  { label: 'Success Stories', value: '100+' },
];

const openSourceProjects = [
  {
    name: 'EAtek UI Kit',
    description: 'React component library used by 1000+ developers',
    stars: '2.3k',
    language: 'TypeScript',
  },
  {
    name: 'BuildVerse CLI',
    description: 'Command-line tool for rapid project scaffolding',
    stars: '890',
    language: 'JavaScript',
  },
  {
    name: 'Learning Tracker',
    description: 'Open source LMS for educational institutions',
    stars: '1.5k',
    language: 'React',
  },
];

export default function Community() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950/20 dark:via-background dark:to-blue-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 px-6 py-2 text-sm font-medium text-green-700 dark:text-green-300 mb-8">
              <Users className="mr-2 h-4 w-4" />
              A Thriving Community of Builders
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Build, Learn,</span>
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Belong
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Join a vibrant ecosystem of learners, creators, and innovators who support each other's growth. 
              At EAtek, community isn't just a network — it's the foundation of transformation.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Join Our Community
                <UserPlus className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Stories
              </Button>
            </div>

            {/* Community Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {communityStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Community Pillars
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Three core elements that make our community a place where everyone thrives and grows together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Intro */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">What We Offer</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.intro}</p>
                    </div>
                    
                    {/* Why */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Why It Matters</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.why}</p>
                    </div>

                    {/* Positioning */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium text-sm mb-2">Our Vision</h4>
                      <p className="text-sm font-medium">{feature.positioning}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {feature.features.map((item) => (
                          <div key={item} className="flex items-center text-sm">
                            <Sparkles className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open Source Contributions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe in giving back to the community. Here are some of our popular open source projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openSourceProjects.map((project) => (
              <Card key={project.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <h3 className="font-semibold">{project.name}</h3>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {project.stars}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.language}</Badge>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Impact Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Community is measured by transformation, not just participation. 
              Here are real stories of growth, success, and impact from our fellows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {impactStories.map((story) => {
              const Icon = story.icon;
              return (
                <Card key={story.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-600">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{story.title}</h3>
                        <Badge variant="outline">{story.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{story.story}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {story.name.split(' ')[0][0]}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{story.name}</div>
                          <div className="text-xs text-muted-foreground">EAtek Fellow</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">{story.achievement}</div>
                        <div className="text-xs text-muted-foreground">Key Achievement</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 px-6 py-3">
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Community is our foundation, and impact is our proof.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
              <CardContent className="pt-12 pb-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                    What Makes Our Community Special
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're more than just a network — we're a family of builders who believe in lifting each other up.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 mb-4">
                      <Handshake className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Collaborative</h3>
                    <p className="text-sm text-muted-foreground">We believe in the power of working together and sharing knowledge.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 mb-4">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Innovative</h3>
                    <p className="text-sm text-muted-foreground">We encourage experimentation and pushing the boundaries of what's possible.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Supportive</h3>
                    <p className="text-sm text-muted-foreground">Every member's success is celebrated and supported by the entire community.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-green-800">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Join 500+ Active Fellows
                </div>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to Join Our Community?
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
                Become part of a thriving ecosystem where learners become leaders, ideas become reality, 
                and individual growth contributes to collective impact.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 text-lg"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Join the Community
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Connect with Fellows
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-green-100">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                  Free to join
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-400 mr-2" />
                  Lifetime access
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                  Global network
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}