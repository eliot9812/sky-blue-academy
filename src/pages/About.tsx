import { Eye, Target, Heart, Users, Award, BookOpen, Shield, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const values = [
  { icon: BookOpen, title: 'Academic Excellence', description: 'Striving for the highest standards in education' },
  { icon: Heart, title: 'Moral Values', description: 'Building character through ethics and integrity' },
  { icon: Shield, title: 'Discipline', description: 'Cultivating self-discipline and responsibility' },
  { icon: Users, title: 'Respect', description: 'Fostering mutual respect and understanding' },
  { icon: Star, title: 'Innovation', description: 'Encouraging creative thinking and problem-solving' },
  { icon: Award, title: 'Leadership', description: 'Developing future leaders with confidence' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Sunrise Academy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Since 1995, we have been committed to providing quality education that nurtures the mind, body, and spirit of every student.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sunrise Academy was founded in 1995 with a vision to create an educational institution that goes beyond textbooks. Our founders believed that true education encompasses not just academic knowledge, but also moral values, discipline, and life skills.
                </p>
                <p>
                  Over the years, we have grown from a small school with just 50 students to a thriving community of over 500 learners. Our dedicated faculty, modern facilities, and innovative teaching methods have made us one of the most respected institutions in the region.
                </p>
                <p>
                  Today, we continue to uphold the same principles that guided our founding: excellence in education, strong moral foundation, and holistic development of every child who walks through our doors.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-xl p-6 shadow-md text-center">
                    <div className="text-4xl font-bold text-primary font-heading">25+</div>
                    <div className="text-muted-foreground text-sm mt-1">Years of Excellence</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-md text-center">
                    <div className="text-4xl font-bold text-secondary font-heading">500+</div>
                    <div className="text-muted-foreground text-sm mt-1">Happy Students</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-md text-center">
                    <div className="text-4xl font-bold text-primary font-heading">50+</div>
                    <div className="text-muted-foreground text-sm mt-1">Expert Teachers</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-md text-center">
                    <div className="text-4xl font-bold text-secondary font-heading">98%</div>
                    <div className="text-muted-foreground text-sm mt-1">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" className="group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Eye className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a leading educational institution that inspires students to become confident, responsible, and compassionate global citizens who make meaningful contributions to society.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" className="group">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <Target className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide quality education in a nurturing environment that fosters academic excellence, moral values, critical thinking, and a lifelong love for learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground">
              These values guide everything we do at Sunrise Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} variant="feature" className="group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Message from the Principal
              </h2>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg italic mb-6 text-secondary-foreground/90">
                    "At Sunrise Academy, we believe that every child has unique potential waiting to be unlocked. Our role as educators is to provide the right environment, guidance, and opportunities for each student to discover their strengths and grow into their best selves. We are committed to nurturing not just brilliant minds, but also kind hearts and strong character."
                  </blockquote>
                  <div>
                    <p className="font-semibold">Dr. Sarah Johnson</p>
                    <p className="text-secondary-foreground/70">Principal, Sunrise Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;