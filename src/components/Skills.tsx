
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express.js"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"]
    },
    {
      title: "Tools & Others",
      icon: Code2,
      skills: ["Git", "Docker", "AWS", "Firebase", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
