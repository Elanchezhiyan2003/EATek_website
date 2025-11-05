import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  Workflow,
  Palette,
  Settings,
  Check,
  X,
  ExternalLink,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  Star
} from 'lucide-react';
import ProjectsSuperScroll from '@/components/sections/ProjectsSuperScroll';

const products = [
  {
    icon: Briefcase,
    name: 'Portli',
    tagline: 'Portfolio SaaS',
    headline: 'Showcase Your Work, Attract Opportunities',
    description: 'Create stunning, professional portfolios with our drag-and-drop builder. Custom domains, analytics, and SEO optimization included.',
    features: ['Drag & Drop Builder', 'Custom Domains', 'Analytics Dashboard', 'SEO Optimized', 'Template Library'],
    color: 'from-blue-500 to-cyan-500',
    status: 'Live',
    price: 'Starting at $9/month',
  },
  {
    icon: Workflow,
    name: 'FlowBox',
    tagline: 'Automation SaaS',
    headline: 'Streamline Workflows, Amplify Productivity',
    description: 'Intelligent automation platform with visual workflow builder, API integrations, and real-time monitoring for seamless operations.',
    features: ['Visual Workflow Builder', 'API Integrations', 'Real-time Monitoring', 'Team Collaboration', 'Custom Triggers'],
    color: 'from-purple-500 to-pink-500',
    status: 'Beta',
    price: 'Starting at $19/month',
  },
  {
    icon: Palette,
    name: 'Stasis Artis',
    tagline: 'Creative Commerce',
    headline: 'Monetize Creativity, Build Communities',
    description: 'Empower artists and creators with tools to sell their work, build communities, and create sustainable creative businesses.',
    features: ['Creator Marketplace', 'NFT Support', 'Community Tools', 'Revenue Analytics', 'Commission Management'],
    color: 'from-green-500 to-emerald-500',
    status: 'Coming Soon',
    price: 'Starting at $15/month',
  },
  {
    icon: Settings,
    name: 'BrandOS',
    tagline: 'Service Suite',
    headline: 'Complete Brand Management Platform',
    description: 'Comprehensive brand management solution for agencies and enterprises with guidelines, asset management, and client portals.',
    features: ['Brand Guidelines', 'Asset Management', 'Team Workflows', 'Client Portals', 'Version Control'],
    color: 'from-orange-500 to-red-500',
    status: 'Development',
    price: 'Starting at $29/month',
  },
];

const comparisonFeatures = [
  'Custom Domains',
  'Analytics Dashboard',
  'Team Collaboration',
  'API Integrations',
  'Mobile Responsive',
  'SEO Optimization',
  'White Label',
  'Priority Support',
];

const featureMatrix = {
  'Portli': [true, true, false, false, true, true, true, false],
  'FlowBox': [false, true, true, true, true, false, false, true],
  'Stasis Artis': [true, true, true, false, true, true, false, true],
  'BrandOS': [true, true, true, true, true, true, true, true],
};

const useCases = [
  {
    title: 'Creative Agency Transformation',
    company: 'DesignCo Studio',
    challenge: 'Streamlined portfolio management and client workflows',
    solution: 'Portli + FlowBox integration',
    results: ['50% faster project delivery', '3x more client inquiries', '90% client satisfaction'],
    icon: Users,
  },
  {
    title: 'E-learning Platform Scale',
    company: 'EduTech Solutions',
    challenge: 'Automated course delivery and student engagement',
    solution: 'FlowBox automation workflows',
    results: ['10,000+ students onboarded', '80% completion rate', '40% cost reduction'],
    icon: TrendingUp,
  },
  {
    title: 'Artist Community Growth',
    company: 'Creative Collective',
    challenge: 'Monetizing digital art and building community',
    solution: 'Stasis Artis marketplace',
    results: ['500+ active creators', '$100K+ in sales', '95% creator retention'],
    icon: Palette,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaS with Soul
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Our product suite bridges technology and creativity, delivering solutions that don't just function —
              they inspire, connect, and transform how you work and create.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Super Scroll Section */}
      <ProjectsSuperScroll />

      {/* Product Cards */}
      <section className="py-24 sm:py-32 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Product Suite
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Four powerful SaaS solutions designed to transform how you work, create, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.name} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{product.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{product.tagline}</p>
                        </div>
                      </div>
                      <Badge
                        variant={product.status === 'Live' ? 'default' : 'secondary'}
                        className={product.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : ''}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.headline}</h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-medium">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Pricing</p>
                        <p className="font-semibold">{product.price}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                        {product.status === 'Live' && (
                          <Button size="sm" className={`bg-gradient-to-r ${product.color} hover:opacity-90`}>
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Try Now
                          </Button>
                        )}
                        {product.status !== 'Live' && (
                          <Button size="sm" variant="secondary">
                            Get Notified
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Comparison Grid */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Product Comparison
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Compare features across our product suite to find the perfect fit for your needs.
            </p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Features</th>
                    {products.map((product) => (
                      <th key={product.name} className="text-center p-4 font-semibold min-w-[120px]">
                        <div className="flex flex-col items-center">
                          <span>{product.name}</span>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {product.status}
                          </Badge>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature} className={`border-b ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                      <td className="p-4 font-medium">{feature}</td>
                      {products.map((product) => (
                        <td key={product.name} className="p-4 text-center">
                          {featureMatrix[product.name][index] ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies / Use Cases */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how our products are transforming businesses and empowering creators worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <Card key={useCase.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{useCase.title}</h3>
                        <p className="text-sm text-muted-foreground">{useCase.company}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Challenge:</p>
                      <p className="text-sm">{useCase.challenge}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Solution:</p>
                      <Badge variant="secondary">{useCase.solution}</Badge>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Results:</p>
                      <div className="space-y-1">
                        {useCase.results.map((result) => (
                          <div key={result} className="flex items-center text-sm">
                            <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to Transform Your Workflow?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Join thousands of creators, businesses, and innovators who are building beyond the binary with EAtek's SaaS solutions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}