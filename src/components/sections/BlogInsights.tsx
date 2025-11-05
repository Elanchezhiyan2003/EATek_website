import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of EdTech: Beyond Traditional Learning',
    excerpt: 'Exploring how technology is reshaping education and creating new opportunities for personalized learning experiences.',
    category: 'Education',
    readTime: '5 min read',
    date: '2024-01-15',
    image: '/api/placeholder/400/200',
    trending: true,
  },
  {
    title: 'Building Scalable SaaS: Lessons from FlowBox',
    excerpt: 'Technical insights and architectural decisions that helped us build a robust automation platform.',
    category: 'Technology',
    readTime: '8 min read',
    date: '2024-01-10',
    image: '/api/placeholder/400/200',
    trending: false,
  },
  {
    title: 'Design Thinking in Creative Commerce',
    excerpt: 'How we approach user experience design for creative platforms and the importance of emotional connection.',
    category: 'Design',
    readTime: '6 min read',
    date: '2024-01-05',
    image: '/api/placeholder/400/200',
    trending: true,
  },
];

const categories = ['All', 'Technology', 'Education', 'Design', 'Innovation'];

export function BlogInsights() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Insights & Blog
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Thoughts, insights, and stories from our journey in technology, 
            education, and innovation.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className={category === 'All' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20" />
                {post.trending && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
                <Badge variant="secondary" className="absolute top-3 right-3">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="font-semibold text-lg leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full justify-between group">
                  Read More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
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
  );
}