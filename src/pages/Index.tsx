import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, FileText, Award, Briefcase, Book } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Alex Thompson</h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
              <a href="#freelance" className="hover:text-primary transition-colors">Freelance</a>
              <a href="#certificates" className="hover:text-primary transition-colors">Certificates</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-foreground">Data Analyst & Insights Specialist</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforming complex data into actionable insights through advanced analytics, 
              visualization, and statistical modeling. Passionate about driving data-driven decisions.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With over 5 years of experience in data analysis, I specialize in extracting meaningful 
                  insights from complex datasets using Python, R, SQL, and advanced visualization tools.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My expertise spans across statistical analysis, machine learning, business intelligence, 
                  and data storytelling, helping organizations make informed strategic decisions.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="bg-muted/50 p-8 rounded-lg">
                <h4 className="font-semibold mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Projects Completed</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Years Experience</span>
                    <span className="font-semibold">5+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Satisfied Clients</span>
                    <span className="font-semibold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Certifications</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">R</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">MATLAB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Data Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Tableau</Badge>
                    <Badge variant="secondary">Power BI</Badge>
                    <Badge variant="secondary">Excel</Badge>
                    <Badge variant="secondary">Jupyter</Badge>
                    <Badge variant="secondary">Apache Spark</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Scikit-learn</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">Seaborn</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Education</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Book className="h-5 w-5 text-primary" />
                        Master of Science in Data Science
                      </CardTitle>
                      <CardDescription>Stanford University</CardDescription>
                    </div>
                    <Badge>2019-2021</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialized in statistical modeling, machine learning algorithms, and big data analytics. 
                    Thesis: "Predictive Analytics in Healthcare Using Deep Learning"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Book className="h-5 w-5 text-primary" />
                        Bachelor of Science in Statistics
                      </CardTitle>
                      <CardDescription>University of California, Berkeley</CardDescription>
                    </div>
                    <Badge>2015-2019</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Magna Cum Laude. Focus on applied statistics, probability theory, and statistical computing. 
                    Minor in Computer Science.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Customer Churn Prediction",
                  description: "ML model predicting customer churn with 94% accuracy using ensemble methods",
                  tech: ["Python", "Scikit-learn", "Tableau"]
                },
                {
                  title: "Sales Forecasting Dashboard",
                  description: "Interactive dashboard for sales team with real-time forecasting capabilities",
                  tech: ["Power BI", "SQL", "Azure"]
                },
                {
                  title: "A/B Test Analysis Platform",
                  description: "Statistical analysis framework for marketing campaign optimization",
                  tech: ["R", "Shiny", "ggplot2"]
                },
                {
                  title: "Supply Chain Optimization",
                  description: "Data-driven approach reducing operational costs by 15%",
                  tech: ["Python", "Pandas", "Plotly"]
                },
                {
                  title: "Market Sentiment Analysis",
                  description: "NLP-based sentiment analysis for cryptocurrency market trends",
                  tech: ["Python", "NLTK", "TensorFlow"]
                },
                {
                  title: "Healthcare Analytics",
                  description: "Patient outcome prediction model for hospital resource planning",
                  tech: ["R", "Caret", "Tableau"]
                }
              ].map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h3>
            <div className="space-y-6">
              {[
                {
                  title: "The Future of Predictive Analytics in E-commerce",
                  excerpt: "Exploring how machine learning is revolutionizing customer behavior prediction...",
                  date: "March 15, 2024",
                  readTime: "5 min read"
                },
                {
                  title: "Building Effective Data Visualization Dashboards",
                  excerpt: "Best practices for creating dashboards that drive business decisions...",
                  date: "March 8, 2024",
                  readTime: "7 min read"
                },
                {
                  title: "Statistical Significance vs Practical Significance",
                  excerpt: "Understanding the difference and why both matter in data analysis...",
                  date: "February 28, 2024",
                  readTime: "6 min read"
                }
              ].map((post, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
                      <div className="text-sm text-muted-foreground text-right">
                        <div>{post.date}</div>
                        <div>{post.readTime}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Freelance Work Section */}
      <section id="freelance" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Freelance Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  company: "TechCorp Solutions",
                  role: "Senior Data Analyst",
                  duration: "6 months",
                  description: "Led data transformation project resulting in 30% improvement in reporting efficiency"
                },
                {
                  company: "RetailMax Inc.",
                  role: "Business Intelligence Consultant",
                  duration: "4 months", 
                  description: "Developed customer segmentation model increasing targeted marketing ROI by 25%"
                },
                {
                  company: "HealthTech Startup",
                  role: "Data Science Advisor",
                  duration: "8 months",
                  description: "Built predictive models for patient risk assessment with regulatory compliance"
                },
                {
                  company: "FinanceFlow Ltd.",
                  role: "Analytics Specialist",
                  duration: "3 months",
                  description: "Created automated fraud detection system reducing false positives by 40%"
                }
              ].map((work, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {work.role}
                        </CardTitle>
                        <CardDescription>{work.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{work.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{work.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Google Data Analytics Professional",
                  issuer: "Google",
                  year: "2023"
                },
                {
                  name: "AWS Certified Data Analytics",
                  issuer: "Amazon Web Services",
                  year: "2023"
                },
                {
                  name: "Tableau Desktop Specialist",
                  issuer: "Tableau",
                  year: "2022"
                },
                {
                  name: "Microsoft Power BI Expert",
                  issuer: "Microsoft",
                  year: "2022"
                },
                {
                  name: "Python for Data Science",
                  issuer: "IBM",
                  year: "2021"
                },
                {
                  name: "Machine Learning Engineer",
                  issuer: "Coursera",
                  year: "2021"
                },
                {
                  name: "R Programming Specialist",
                  issuer: "Johns Hopkins",
                  year: "2020"
                },
                {
                  name: "SQL Database Expert",
                  issuer: "Oracle",
                  year: "2020"
                }
              ].map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge>{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your data into actionable insights? Let's discuss your next project.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                alex@example.com
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Thompson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
