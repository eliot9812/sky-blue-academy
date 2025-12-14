import { BookOpen, GraduationCap, Users, Lightbulb, Target, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';

const levels = [
  {
    id: 'primary',
    name: 'Primary Level',
    grades: 'Grades 1-5',
    icon: BookOpen,
    color: 'primary',
    description: 'Building strong foundations through interactive learning and creative exploration.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Nepali', 'Art & Craft', 'Physical Education', 'Computer Basics'],
    features: ['Interactive learning methods', 'Play-based activities', 'Reading and literacy programs', 'Basic numeracy skills', 'Creative expression', 'Character development'],
  },
  {
    id: 'lower-secondary',
    name: 'Lower Secondary',
    grades: 'Grades 6-8',
    icon: GraduationCap,
    color: 'secondary',
    description: 'Expanding horizons with advanced concepts and skill development.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Nepali', 'Health & Physical Education', 'Computer Science', 'Optional Languages'],
    features: ['Subject specialization begins', 'Laboratory experiments', 'Project-based learning', 'Critical thinking development', 'Leadership opportunities', 'Sports and extracurriculars'],
  },
  {
    id: 'secondary',
    name: 'Secondary Level',
    grades: 'Grades 9-10',
    icon: Award,
    color: 'primary',
    description: 'Preparing students for higher education and future success.',
    subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Nepali', 'Computer Science', 'Optional Mathematics', 'Accountancy'],
    features: ['SEE examination preparation', 'Career guidance', 'Advanced laboratory work', 'Research projects', 'Mock examinations', 'University preparation'],
  },
];

const methodologies = [
  { icon: Lightbulb, title: 'Interactive Learning', description: 'Engaging students through discussions, activities, and hands-on experiences.' },
  { icon: Target, title: 'Goal-Oriented', description: 'Clear learning objectives with measurable outcomes for every lesson.' },
  { icon: Users, title: 'Collaborative', description: 'Group projects and peer learning to develop teamwork skills.' },
  { icon: BookOpen, title: 'Research-Based', description: 'Encouraging independent research and critical analysis.' },
];

const Academics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Academic <span className="text-secondary">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive education from primary to secondary level, designed to build a strong foundation for lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1">
              {levels.map((level) => (
                <TabsTrigger
                  key={level.id}
                  value={level.id}
                  className="py-4 px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <level.icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{level.name}</span>
                  <span className="sm:hidden">{level.grades}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {levels.map((level) => (
              <TabsContent key={level.id} value={level.id}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Overview */}
                  <Card variant="elevated">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-${level.color}/10 flex items-center justify-center mb-4`}>
                        <level.icon className={`w-7 h-7 text-${level.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{level.name}</CardTitle>
                      <p className="text-primary font-medium">{level.grades}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{level.description}</p>
                      <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {level.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Subjects */}
                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle className="text-xl">Subjects Offered</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {level.subjects.map((subject) => (
                          <div
                            key={subject}
                            className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                          >
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Teaching <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-muted-foreground">
              We employ modern, research-backed teaching methods to ensure effective learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <Card key={method.title} variant="feature" className="group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <method.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Curriculum <span className="text-secondary">Overview</span>
              </h2>
            </div>

            <div className="grid gap-6">
              <Card variant="elevated">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">National Curriculum Framework</h3>
                  <p className="text-muted-foreground mb-4">
                    Our curriculum follows the national education framework while incorporating international best practices. We ensure that students are well-prepared for national examinations while developing skills that are relevant in the modern world.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {['Aligned with national standards', 'Regular curriculum updates', 'Integration of technology', 'Focus on practical skills'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-4">Co-Curricular Activities</h3>
                  <p className="text-muted-foreground mb-4">
                    Beyond academics, we offer a wide range of co-curricular activities to ensure holistic development of our students.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {['Sports & Games', 'Music & Dance', 'Art & Craft', 'Debate & Public Speaking', 'Science Club', 'Community Service'].map((activity) => (
                      <div key={activity} className="p-3 bg-muted rounded-lg text-center">
                        <span className="text-sm font-medium text-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;