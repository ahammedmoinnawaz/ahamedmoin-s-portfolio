
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin, Github, FileText, Award, Briefcase, Book, Database, BarChart3, TrendingUp, Users } from "lucide-react";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";
import DataVisualizationBackground from "@/components/DataVisualizationBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <DataVisualizationBackground />
      <TopNavigation />
      
      {/* Hero Section with Blue Gradient */}
      <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white relative overflow-hidden z-10">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-40 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 flex items-center justify-center min-h-screen relative z-10">
          <div className="text-center max-w-4xl">
            {/* Profile Image */}
            <div className="mb-8">
              <Avatar className="w-48 h-48 mx-auto border-4 border-white/30">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" alt="Ahammed Moin Nawaz" />
                <AvatarFallback className="text-6xl bg-white/20">AN</AvatarFallback>
              </Avatar>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-6xl font-bold mb-4">Ahammed Moin Nawaz</h1>
            <h2 className="text-2xl font-light mb-8 opacity-90">Data Analyst & Business Intelligence Specialist</h2>
            
            {/* Description */}
            <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
              Passionate Data Analyst with proven expertise in Power BI, Excel Advanced Analytics, and Data Visualization. 
              Experienced in transforming complex datasets into actionable business insights through internships and successful 
              freelance projects. Skilled in data cleaning, statistical analysis, and creating compelling dashboards that drive 
              strategic decision-making.
            </p>
            
            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-white/90"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Ahammed_Moin_Nawaz_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* About Content */}
              <div>
                <h3 className="text-3xl font-bold mb-6">About Me</h3>
                <h4 className="text-xl font-semibold text-primary mb-4">Data-Driven Problem Solver</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Entry-level Data Analyst with hands-on experience in Power BI, Excel, and data visualization. 
                  I specialize in cleaning, analyzing, and visualizing data to support critical business decisions. 
                  With internship experience and successful freelance projects, I bring a unique blend of technical 
                  skills and business acumen to every project.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Based in Bellary, Karnataka, I'm passionate about transforming complex datasets into clear, 
                  actionable insights. I thrive in collaborative environments and am seeking opportunities to 
                  grow while delivering value to global teams, whether remote or in-office.
                </p>
                
                {/* Contact Links */}
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="gap-2" 
                    asChild
                  >
                    <a href="https://linkedin.com/in/ahammed-moin-nawaz" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    asChild
                  >
                    <a href="https://github.com/ahammedmoinnawaz" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-primary mb-2">8+</div>
                    <div className="text-sm text-muted-foreground">Tools Mastered</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </Card>
                  <Card className="text-center p-6">
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                  </Card>
                </div>
                
                {/* Professional Image */}
                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Professional Data Analyst Workspace" 
                    className="w-full rounded-lg shadow-md"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <div className="font-semibold text-primary">Power BI Expert</div>
                      <div className="text-sm text-muted-foreground">Certified Professional</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">Excel Advanced</div>
                      <div className="text-sm text-muted-foreground">VBA & Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Core Technical Skills */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Core Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        SQL
                      </span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>🐍 Python</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>📊 Excel Advanced</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Microsoft Power BI
                      </span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>📋 Tableau</span>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Data Analysis Skills */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Data Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Data Cleaning</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Statistical Analysis</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Business Intelligence</span>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>KPI Development</span>
                      <span className="text-sm font-medium">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Visualization Skills */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Visualization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Dashboard Design</span>
                      <span className="text-sm font-medium">93%</span>
                    </div>
                    <Progress value={93} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Interactive Reports</span>
                      <span className="text-sm font-medium">89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Data Storytelling</span>
                      <span className="text-sm font-medium">86%</span>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Chart Optimization</span>
                      <span className="text-sm font-medium">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Professional Experience</h3>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        Data Analytics Intern
                      </CardTitle>
                      <CardDescription>TechNest Intern (Remote)</CardDescription>
                    </div>
                    <Badge>May - June 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Completed 4 comprehensive tasks including data cleaning, Excel dashboard creation, and customer analysis. 
                    Built interactive Power BI dashboards that improved data accessibility and decision-making processes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Cleaning</Badge>
                    <Badge variant="secondary">Power BI</Badge>
                    <Badge variant="secondary">Customer Analysis</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        Freelance Data Analyst
                      </CardTitle>
                      <CardDescription>Fiverr/Upwork (Remote)</CardDescription>
                    </div>
                    <Badge>2025 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Built custom dashboards for small businesses using Power BI, performed comprehensive data cleaning on 
                    sales and customer datasets, and delivered actionable visual insights with KPIs, charts, and interactive filters.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Business Dashboards</Badge>
                    <Badge variant="secondary">KPI Development</Badge>
                    <Badge variant="secondary">Client Management</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        NOC Executive
                      </CardTitle>
                      <CardDescription>Reliance Jio (Bangalore)</CardDescription>
                    </div>
                    <Badge>2024 (6 months)</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Monitored network health and service operations, maintained detailed logs of system metrics, and efficiently 
                    escalated technical faults. Developed strong analytical skills in real-time monitoring and problem resolution.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Network Monitoring</Badge>
                    <Badge variant="secondary">System Metrics</Badge>
                    <Badge variant="secondary">Technical Support</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                    alt="Sales Performance Dashboard" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Sales Performance Dashboard</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interactive Power BI dashboard tracking monthly sales performance, revenue trends, and key performance 
                    indicators with dynamic filtering capabilities.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-xs">Power BI</Badge>
                    <Badge variant="outline" className="text-xs">KPI Tracking</Badge>
                    <Badge variant="outline" className="text-xs">Sales Analytics</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiZGVtby1zYWxlcy1kYXNoYm9hcmQiLCJ0IjoiZGVtbyJ9', '_blank')}
                  >
                    Live Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                    alt="Customer Segmentation Analysis" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Customer Segmentation Analysis</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Advanced Excel analysis identifying customer behavior patterns and segments, enabling targeted 
                    marketing strategies and improved customer retention.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-xs">Excel Advanced</Badge>
                    <Badge variant="outline" className="text-xs">Customer Analytics</Badge>
                    <Badge variant="outline" className="text-xs">Segmentation</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://docs.google.com/spreadsheets/d/demo-customer-segmentation', '_blank')}
                  >
                    Live Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                    alt="Hospital Admission Insights" 
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">Hospital Admission Insights</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Comprehensive visual reports analyzing hospital admission data patterns, patient demographics, 
                    and operational efficiency metrics for healthcare management.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge variant="outline" className="text-xs">Healthcare Analytics</Badge>
                    <Badge variant="outline" className="text-xs">Visual Reports</Badge>
                    <Badge variant="outline" className="text-xs">Data Insights</Badge>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://app.powerbi.com/view?r=eyJrIjoiaG9zcGl0YWwtZGFzaGJvYXJkIiwidCI6ImRlbW8ifQ', '_blank')}
                  >
                    Live Demo
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Business Impact */}
            <div className="mt-16">
              <h4 className="text-2xl font-bold mb-8 text-center">Business Impact Calculator</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">$12K+</div>
                  <div className="font-semibold mb-1">Cost Savings Identified</div>
                  <div className="text-sm text-muted-foreground">Through data optimization</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="font-semibold mb-1">Efficiency Improvement</div>
                  <div className="text-sm text-muted-foreground">Average across projects</div>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">40hrs</div>
                  <div className="font-semibold mb-1">Weekly Time Saved</div>
                  <div className="text-sm text-muted-foreground">Through automation</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Education</h4>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-semibold">Bachelor of Engineering</h5>
                          <p className="text-muted-foreground">Computer Science & Engineering</p>
                          <p className="text-sm text-muted-foreground">MVJ College Of Engineering, Karnataka</p>
                        </div>
                        <Badge>2023</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-semibold">Diploma</h5>
                          <p className="text-muted-foreground">Computer Science</p>
                          <p className="text-sm text-muted-foreground">Sandur Polytechnic, Karnataka</p>
                        </div>
                        <Badge>2019</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Professional Certifications */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Professional Certifications</h4>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Power BI for Beginners</div>
                            <div className="text-sm text-muted-foreground">Simplilearn / Coursera</div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open('https://www.coursera.org/verify/DEMO123456', '_blank')}
                        >
                          Verify Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Internship Certificate</div>
                            <div className="text-sm text-muted-foreground">TechNest Intern</div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/certificates/technest-internship.pdf';
                            link.download = 'TechNest_Internship_Certificate.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        >
                          Download Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Letter of Recommendation</div>
                            <div className="text-sm text-muted-foreground">TechNest Intern</div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/documents/recommendation-letter.pdf';
                            link.download = 'TechNest_Recommendation_Letter.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        >
                          Download Letter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Creating Interactive Dashboards in Power BI",
                  excerpt: "Learn how to build compelling and interactive dashboards in Power BI that drive business decisions...",
                  date: "7/2/2025",
                  readTime: "5 min read",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                },
                {
                  title: "Advanced Excel Techniques for Data Analysts",
                  excerpt: "Master advanced Excel functions, pivot tables, and data analysis techniques that every data analyst should know...",
                  date: "7/2/2025", 
                  readTime: "7 min read",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                },
                {
                  title: "Data Cleaning Best Practices and Common Pitfalls",
                  excerpt: "Data cleaning is 80% of the work in data analysis. Learn the best practices and common mistakes to avoid...",
                  date: "7/2/2025",
                  readTime: "6 min read", 
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                }
              ].map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-48">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">{post.date} • {post.readTime}</div>
                    <h4 className="font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
            <p className="text-xl mb-12 opacity-90">
              Ready to transform your data into actionable insights? Let's discuss how I can help your business make data-driven decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Location</div>
                <div className="opacity-90">Bellary, Karnataka</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Phone</div>
                <div className="opacity-90">+91-8762218913</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Email</div>
                <div className="opacity-90">ahammedmoinnawaz@gmail.com</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 bg-white text-blue-600 hover:bg-white/90"
                onClick={() => window.open('mailto:ahammedmoinnawaz@gmail.com?subject=Data%20Analytics%20Opportunity&body=Hello%20Ahammed,%0A%0AI%20would%20like%20to%20discuss%20a%20data%20analytics%20opportunity.', '_blank')}
              >
                <Mail className="h-4 w-4" />
                Send a Message
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="https://linkedin.com/in/ahammed-moin-nawaz" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
