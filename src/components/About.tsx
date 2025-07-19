
import { User, Code, Coffee } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating
                innovative web solutions. With expertise in modern JavaScript
                frameworks and a keen eye for design, I bring ideas to life
                through clean, efficient code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while planning my next project.
              </p>
              
              <div className="flex space-x-8">
                <div className="flex items-center space-x-2">
                  <User className="text-primary" size={20} />
                  <span className="text-muted-foreground">Creative Thinker</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="text-primary" size={20} />
                  <span className="text-muted-foreground">Problem Solver</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee className="text-primary" size={20} />
                  <span className="text-muted-foreground">Coffee Lover</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
