import { Link } from 'react-router-dom';
import { FileText, Calendar, CheckCircle, ArrowRight, ClipboardList, Users, GraduationCap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const steps = [
  { step: 1, title: 'Inquiry', description: 'Visit our campus or contact us for information about admissions.', icon: Users },
  { step: 2, title: 'Application', description: 'Complete and submit the admission application form.', icon: ClipboardList },
  { step: 3, title: 'Assessment', description: 'Student appears for the entrance assessment test.', icon: FileText },
  { step: 4, title: 'Interview', description: 'Parents and student attend an interview with the admission committee.', icon: Users },
  { step: 5, title: 'Admission', description: 'Upon selection, complete the enrollment process and fee payment.', icon: GraduationCap },
];

const documents = [
  'Birth Certificate (original and photocopy)',
  'Previous school leaving certificate / Transfer Certificate',
  'Mark sheet of the previous class',
  'Character certificate from previous school',
  '4 recent passport-size photographs',
  'Parent/Guardian ID proof (photocopy)',
  'Address proof (utility bill or similar)',
];

const eligibility = [
  { level: 'Grade 1', age: '5+ years as of admission date', requirement: 'Must have completed KG/LKG' },
  { level: 'Grades 2-5', age: 'Age appropriate', requirement: 'Transfer from recognized school' },
  { level: 'Grades 6-8', age: 'Age appropriate', requirement: 'Passed previous grade with minimum 50%' },
  { level: 'Grades 9-10', age: 'Age appropriate', requirement: 'Passed Grade 8 with minimum 55%' },
];

const calendar = [
  { event: 'Admission Forms Available', date: 'December 1, 2024' },
  { event: 'Application Deadline', date: 'March 15, 2025' },
  { event: 'Entrance Test', date: 'March 25, 2025' },
  { event: 'Results Announcement', date: 'April 1, 2025' },
  { event: 'New Session Begins', date: 'April 15, 2025' },
];

const Admission = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Admissions Open for 2024-25</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-primary">School Family</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Begin your child's journey towards academic excellence and holistic development at Sunrise Academy.
            </p>
            <Button variant="maroon" size="xl" asChild>
              <a href="#apply">
                Apply for Admission
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Admission <span className="text-secondary">Process</span>
            </h2>
            <p className="text-muted-foreground">
              Follow these simple steps to enroll your child at Sunrise Academy.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <Card key={step.step} variant="feature" className="group animate-fade-up relative" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 relative z-10">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Eligibility */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eligibility.map((item) => (
                    <div key={item.level} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{item.level}</span>
                        <span className="text-sm text-primary font-medium">{item.age}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="w-6 h-6 text-secondary" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Academic <span className="text-primary">Calendar</span>
              </h2>
              <p className="text-muted-foreground">
                Important dates for the admission process 2024-25.
              </p>
            </div>

            <div className="space-y-4">
              {calendar.map((item, index) => (
                <Card key={item.event} variant="default" className="group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Calendar className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.event}</h4>
                      <p className="text-muted-foreground text-sm">{item.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 text-lg">
              Take the first step towards giving your child the best education. Our admissions team is here to help you through every step of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                asChild
              >
                <a href="tel:+1234567890">Call: +1 234 567 890</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;