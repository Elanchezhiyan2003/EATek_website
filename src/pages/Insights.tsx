import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  TrendingUp, 
  FileText, 
  Newspaper,
  ArrowRight,
  Calendar,
  User,
  Eye,
  Download,
  ExternalLink,
  Clock,
  Tag,
  BarChart3,
  Lightbulb,
  Sparkles,
  Mail
} from 'lucide-react';

const blogPosts = [
  {
    title: 'Beyond the Binary: Redefining Education in the Digital Age',
    excerpt: 'How we\'re bridging the gap between traditional learning and modern skill development through community-driven education.',
    author: 'Elanchezhiyan Mahendiran',
    date: '2024-12-15',
    readTime: '8 min read',
    views: '2.3k',
    tags: ['Education', 'Innovation', 'Community'],
    category: 'Thought Leadership',
    image: '/api/placeholder/400/240',
  },
  {
    title: 'The Art of SaaS: Building Products with Soul',
    excerpt: 'Why successful SaaS products need more than just features — they need emotional connection and meaningful user experiences.',
    author: 'Asmiya Bincy',
    date: '2024-12-10',
    readTime: '6 min read',
    views: '1.8k',
    tags: ['SaaS', 'Design', 'Product'],
    category: 'Product',
    image: '/api/placeholder/400/240',
  },
  {
    title: 'Open Source as a Learning Philosophy',
    excerpt: 'How contributing to open source projects accelerates learning and builds stronger developer communities.',
    author: 'Dev Team',
    date: '2024-12-05',
    readTime: '5 min read',
    views: '1.5k',
    tags: ['Open Source', 'Learning', 'Community'],
    category: 'Technology',
    image: '/api/placeholder/400/240',
  },
  {
    title: 'AI in Education: Human-Centric Automation',
    excerpt: 'Exploring how AI can enhance learning experiences without replacing the human element in education.',
    author: 'Research Team',
    date: '2024-11-28',
    readTime: '10 min read',
    views: '3.1k',
    tags: ['AI', 'Education', 'Automation'],
    category: 'Research',
    image: '/api/placeholder/400/240',
  },
];

const caseStudies = [
  {
    title: 'Transforming Rural Education with Custom LMS',
    client: 'Vidya Foundation',
    challenge: 'Reaching 10,000+ students across remote villages with limited internet connectivity',
    solution: 'Custom offline-first LMS with mobile-responsive design and local language support',
    results: [
      '95% student engagement rate',
      '40% improvement in learning outcomes',
      '60% reduction in dropout rates'
    ],
    timeline: '6 months',
    category: 'Education',
    image: '/api/placeholder/300/200',
  },
  {
    title: 'Scaling Creative Commerce Platform',
    client: 'ArtisanHub',
    challenge: 'Building a marketplace for 5,000+ artists to sell digital and physical artwork',
    solution: 'Full-stack marketplace with payment integration, NFT support, and community features',
    results: [
      '₹50L+ in artist earnings',
      '25,000+ active buyers',
      '99.9% platform uptime'
    ],
    timeline: '8 months',
    category: 'Commerce',
    image: '/api/placeholder/300/200',
  },
  {
    title: 'Enterprise Automation Success',
    client: 'TechCorp Industries',
    challenge: 'Automating complex workflows across 15 departments with 500+ employees',
    solution: 'Custom automation platform with AI-powered decision making and real-time analytics',
    results: [
      '70% reduction in manual tasks',
      '₹2Cr+ annual cost savings',
      '85% employee satisfaction'
    ],
    timeline: '12 months',
    category: 'Enterprise',
    image: '/api/placeholder/300/200',
  },
];

const whitepapers = [
  {
    title: 'The Future of Creative Commerce: NFTs and Digital Ownership',
    description: 'A comprehensive analysis of how blockchain technology is reshaping creative industries and empowering artists.',
    pages: '32 pages',
    downloads: '1.2k',
    category: 'Research',
    publishDate: '2024-11-15',
  },
  {
    title: 'Community-Driven Learning: A New Educational Paradigm',
    description: 'Research on peer-to-peer learning models and their effectiveness in skill development and knowledge retention.',
    pages: '28 pages',
    downloads: '890',
    category: 'Education',
    publishDate: '2024-10-20',
  },
  {
    title: 'Human-Centric AI: Building Technology That Serves People',
    description: 'Guidelines and frameworks for developing AI systems that enhance rather than replace human capabilities.',
    pages: '24 pages',
    downloads: '756',
    category: 'Technology',
    publishDate: '2024-09-30',
  },
];

const newsUpdates = [
  {
    title: 'EAtek Launches ELAN 20\' BuildVerse Fellowship',
    summary: 'New 20-week program designed to bridge the gap between learning and real-world building for students.',
    date: '2024-12-01',
    type: 'Program Launch',
  },
  {
    title: 'Portli Reaches 10,000+ Active Users',
    summary: 'Our portfolio SaaS platform celebrates a major milestone with growing creator community.',
    date: '2024-11-25',
    type: 'Product Milestone',
  },
  {
    title: 'FlowBox Beta Opens to Public',
    summary: 'Automation platform now available for beta testing with enhanced workflow builder and integrations.',
    date: '2024-11-20',
    type: 'Product Update',
  },
  {
    title: 'EAtek Contributes to React Open Source',
    summary: 'Our team contributes significant improvements to React ecosystem, benefiting millions of developers.',
    date: '2024-11-15',
    type: 'Community',
  },
];

export default function Insights() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-background dark:to-purple-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 sm:py-32 text-center">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 px-6 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-8">
              <BookOpen className="mr-2 h-4 w-4" />
              Knowledge That Transforms
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Ideas That Shape</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Tomorrow
              </span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Articles, essays, and stories that go beyond trends — exploring the intersection of Education, Art, Technology, and Emotion. 
              Knowledge grows when shared, and every insight becomes a stepping stone for innovation.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Explore Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                👉 Insights isn't just content — it's the evolving voice of EAtek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Thought Leadership */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Blog & Thought Leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Not just tech updates — but soulful narratives that inspire learners, creators, and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-indigo-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-indigo-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-2 w-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{post.author}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                          <Clock className="h-3 w-3 ml-2 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Real-world stories of how EAtek solutions empower education, commerce, and communities. 
              From fellowship projects to SaaS deployments — every success becomes a shared blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900/20 dark:to-blue-900/20 flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-blue-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{study.category}</Badge>
                    <div className="text-xs text-muted-foreground">{study.timeline}</div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{study.title}</CardTitle>
                  <p className="text-sm font-medium text-blue-600">{study.client}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Challenge</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Solution</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-center text-sm">
                          <TrendingUp className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Read Full Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Whitepapers */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Research & Whitepapers
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              In-depth explorations of emerging technologies, creative commerce, and educational innovation. 
              EAtek research is where academic depth meets practical application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whitepapers.map((paper) => (
              <Card key={paper.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{paper.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Download className="h-3 w-3 mr-1" />
                      {paper.downloads}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 leading-tight">{paper.title}</h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{paper.pages}</span>
                    <span>{new Date(paper.publishDate).toLocaleDateString()}</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              News & Updates
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The latest from our ecosystem — product launches, fellowship highlights, and community milestones. 
              Every update is an invitation to grow with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsUpdates.map((news) => (
              <Card key={news.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{news.type}</Badge>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{news.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{news.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Newspaper className="mr-2 h-4 w-4" />
              View All Updates
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 sm:py-32 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm text-white">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Stay Updated
                </div>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Never Miss an Insight
              </h2>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
                Subscribe to our newsletter and get the latest articles, case studies, and research 
                delivered directly to your inbox. Join thousands of learners and innovators.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe to Newsletter
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Archive
                </Button>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-indigo-100">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-400 mr-2" />
                  Weekly insights
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                  No spam, ever
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-400 mr-2" />
                  Unsubscribe anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}