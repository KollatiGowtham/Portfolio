import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const About = () => {
  const education = [
    { degree: 'B.Tech Computer and Communication [CCE]', institution: 'Sri Manakula Vinayagar Engineering College', score: 'CGPA: 8.96', year: '2023-2027' },
    { degree: 'Class XII', institution: 'Jawahar Navodaya Vidyalaya', score: '78.9%', year: '2023' },
    { degree: 'Class X', institution: 'Jawahar Navodaya Vidyalaya', score: '88.8%', year: '2021' },
  ];

  const experience = {
    title: 'Associate Trainee',
    company: 'TechnoSprint Info Solutions',
    period: 'Dec 2024 – Jun 2025',
    responsibilities: [
      'Developed and maintained full-stack web applications using modern technologies',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented RESTful APIs and integrated third-party services',
      'Participated in code reviews and agile development processes',
      'Contributed to the design and optimization of database schemas',
    ],
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* About Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle title="About Me" subtitle="Get to know me better" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A highly motivated and detail-oriented software developer seeking to leverage 
                  my technical skills and passion for innovation in a challenging role. I aim to 
                  contribute to cutting-edge projects while continuously expanding my expertise 
                  in cloud computing, blockchain technology, and full-stack development.
                </p>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h4 className="font-medium text-foreground">{edu.degree}</h4>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-primary font-medium">{edu.score}</span>
                            <p className="text-sm text-muted-foreground">{edu.year}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section-padding">
          <div className="container-custom">
            <SectionTitle title="Experience" subtitle="My professional journey" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {experience.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>


      </div>
    </Layout>
  );
};

export default About;
