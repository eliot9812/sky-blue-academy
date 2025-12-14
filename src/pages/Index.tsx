import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Calendar, ArrowRight, GraduationCap, Shield, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import heroImage from '@/assets/hero-students.jpg';

const features = [
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed for academic excellence and practical knowledge.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Dedicated and experienced teachers committed to nurturing young minds.',
  },
  {
    icon: Award,
    title: 'Holistic Development',
    description: 'Focus on academics, sports, arts, and character building.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Secure and nurturing campus for every student to thrive.',
  },
];

const programs = [
  {
    level: 'Primary Level',
    grades: 'Grades 1-5',
    description: 'Building strong foundations through interactive learning and creative exploration.',
    color: 'bg-primary',
  },
  {
    level: 'Lower Secondary',
    grades: 'Grades 6-8',
    description: 'Expanding horizons with advanced concepts and skill development.',
    color: 'bg-secondary',
  },
  {
    level: 'Secondary Level',
    grades: 'Grades 9-10',
    description: 'Preparing students for higher education and future success.',
    color: 'bg-primary',
  },
];

const notices = [
  { date: 'Dec 15', title: 'Winter Break Announcement', type: 'Holiday' },
  { date: 'Dec 10', title: 'Annual Sports Day Registration', type: 'Event' },
  { date: 'Dec 05', title: 'Parent-Teacher Meeting Schedule', type: 'Meeting' },
];

const stats = [
  { value: '500+', label: 'Students' },
  { value: '50+', label: 'Teachers' },
  { value: '25+', label: 'Years' },
  { value: '98%', label: 'Pass Rate' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Students at Sunrise Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        {/* Content */}
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium text-card">Admissions Open 2024-25</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-card mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Shaping Future Leaders Through{' '}
              <span className="text-primary">Quality Education</span>
            </h1>

            <p className="text-lg text-card/80 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              At Sunrise Academy, we nurture young minds with academic excellence, moral values, and discipline to prepare them for a successful future.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/admission">
                  Apply for Admission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary font-heading">{stat.value}</div>
                  <div className="text-card/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-card/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-card/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-sky">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Sunrise Academy</span>?
            </h2>
            <p className="text-muted-foreground">
              We provide a nurturing environment where students excel academically while developing strong character and values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                variant="feature"
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Academic <span className="text-secondary">Programs</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive education from primary to secondary level, designed to build a strong academic foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={program.level}
                variant="elevated"
                className="overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${program.color} h-2`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className={`w-6 h-6 ${program.color === 'bg-primary' ? 'text-primary' : 'text-secondary'}`} />
                    <span className="text-sm font-medium text-muted-foreground">{program.grades}</span>
                  </div>
                  <CardTitle className="text-2xl">{program.level}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/academics">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notices & CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Notices */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Latest <span className="text-primary">Notices</span>
              </h2>
              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <Card key={index} variant="default" className="group cursor-pointer">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <span className="text-xs text-primary group-hover:text-primary-foreground transition-colors">
                          {notice.date.split(' ')[0]}
                        </span>
                        <span className="font-bold text-primary group-hover:text-primary-foreground transition-colors">
                          {notice.date.split(' ')[1]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium text-secondary">{notice.type}</span>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {notice.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card variant="elevated" className="bg-secondary text-secondary-foreground p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8" />
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                Join Our School Family
              </h3>
              <p className="text-secondary-foreground/80 mb-8">
                Give your child the gift of quality education. Admissions are now open for the academic year 2024-25. Limited seats available.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/admission">Apply Now</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  asChild
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                >
                  <Link to="/contact">Schedule Visit</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;