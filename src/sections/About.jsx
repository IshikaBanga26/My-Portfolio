import {Code2,Lightbulb,Users,MessageCircle} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing clean, readable code with a focus on logic clarity, reusability, and continuous improvement as I grow as a developer."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring new technologies through hands-on projects, hackathons, and experimentation—learning by building, not just reading."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Collaborating with peers in team projects, learning how ideas evolve better through discussion and teamwork."
  },
  {
    icon: MessageCircle,
    title : "Communication",
    description : "Explaining ideas, code, and project decisions clearly while learning to communicate better in team environments."
  },
];

export const About = () => {
  return (
    <section id = "about" className="py-28 relative overflow-hidden ">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center"/>
        <div className="space-y-8">
          <div className="text-center mx-auto max-w-3xl">
            <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[var(--color-secondary-foreground)]">
           Just learning
           <span className="font-serif italic font-normal text-white "> 
            {" "}
            and finding my path.</span> 
          </h2>
          </div>
          <div className="space-y-4 text-[var(--color-muted-foreground)] animate-fade-in animation-delay-200">
            <p>
              I’m a BTech CSE student who enjoys learning by building real-world applications. My journey started with curiosity about how websites and applications work, and over time, it has grown into hands-on experience with frontend, backend, and beginner-level AI projects.
            </p>
            <p>
              I’ve worked with technologies like HTML, CSS, JavaScript, React, Python, C++, Java building projects that range from simple interfaces to full-stack applications. I focus on writing clean logic, improving user experience, and understanding how different parts of an application work together.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-[var(--color-foreground)]">
              Driven by curiosity and consistency, I build real-world projects that help me learn deeply and improve with every iteration.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 py-8">
          {highlights.map((item, index) => (
            <div 
              key={index} className = "glass p-6 rounded-2xl animate-fade-in"
              style = {{animationDelay: `${(1 + index) * 100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 hover:bg-[var(--color-primary)]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">{item.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>

  );
};

