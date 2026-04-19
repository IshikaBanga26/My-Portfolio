import { Button } from "@/components/Button";
import {ArrowRight,Download,Github,Linkedin,ChevronDown} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Python",
  "C++",
  "Java",
  "HTML",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "AWS",
  "Git",
  "GitHub",
  "Wordpress",
]

export const Hero = () => {
  return(
   <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="inset-0 absolute">
      <img src="hero-bg.png" alt="Hero image" className="w-full h-full object-cover opacity-40"/>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/20 via-[var(--color-background)]/80 to-[var(--color-background)]"></div>
    </div>

    {/*Blue Dots*/}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `hsla(204, 100%, 53%, 0.98)`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

    {/*Content*/}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/*Left Side*/}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full"/>
              Web Developer 
            </span>
          </div>

          {/*Title*/}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
              Turning curiosity into <span className="text-primary glow-text">code</span>, 
              <br/>
              and dreams into
              <br/>
              <span className="font-serif italic font-normal text-white">digital reality.</span>
            </h1>
             <p className="text-xl text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Ishika Banga — a passionate BTech CSE student with a keen interest in web development, AI, and backend technologies.
              </p>
          </div>

          {/*CTA Buttons*/}
          <div className="animate-fade-in animation-delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href = "#contact">
            <Button size="lg" className="group !flex !flex-row !items-center !gap-2">
              Contact Me 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
            </Button>
            </a>

            {/* Download Resume Button */}
            <AnimatedBorderButton>
              <a href = "/Ishika_Banga_Resume.pdf" download className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
              </a>
            </AnimatedBorderButton>
          </div>
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400 px-4">
            <span className="text-sm text-muted-foreground">Follow Me:</span>
            {[
              {icon : Github, href: "https://github.com/IshikaBanga26"},
              {icon : Linkedin, href: "https://www.linkedin.com/in/ishika-banga"},
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
            ))}
          </div>

        </div>

        {/*Right Side*/}
        <div className="relative animate-fade-in animation-delay-300">
          {/* Profile Image */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src="profile-photo.jpg"
                alt="Ishika Banga"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"/>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    {/* Skills Section */}
    <div className="mt-20 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with:</p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div key ={index} className="flex-shrink-0 px-8 py-4">
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
  </section>
  );
};

