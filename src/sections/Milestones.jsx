import { Award, ExternalLink, BadgeCheck } from "lucide-react";

const milestones = [
  {
    title: "AI Internship Completion",
    issuer: "1Stop.ai",
    description:
      "Completed AI internship with mentorship, working on ML models and text classification.",
    link: "https://drive.google.com/file/d/1k1CwUQiJb-84_VWIuRYcR75LWmOOBpXu/view?usp=drivesdk",
    type: "internship",
  },
  {
    title: "Introduction to Computer Science",
    issuer: "Udemy",
    description: 
      "Completed introduction to computer science course, gaining foundational knowledge in programming and algorithms.",
    link: "https://www.udemy.com/certificate/UC-5cc55d72-94e3-4aed-96b9-1c4cd91cbbe7/",
    type: "certificate",
  },
  {
    title: "C++ Course",
    issuer: "GeeksforGeeks",
    description:
      "Completed C++ course, mastering syntax, OOP concepts, and data structures for competitive programming.",
    link: "https://drive.google.com/file/d/110e6Cvw1BGr6ljTdje7sAq_G7RjpD4gv/view?usp=drivesdk",
    type: "certificate",
  },
  {
    title: "Hackathon Participation",
    issuer: "College",
    description: "Worked in team to build real-world solutions and improve problem-solving and collaboration skills.",
    link: "https://www.linkedin.com/posts/ishika-banga_hackkrmu-hackathon-teamwork-activity-7302303202752843776-_1bi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIt4_kB0AVvuyYgqO5fFKYyMa1DcMGi4dA",
    type: "experience",
  },
  {
    title: "Tailwind CSS Bootcamp",
    issuer: "LinkedIn",
    description: "Designed and built a responsive portfolio using Tailwind CSS and modern UI practices.",
    link: "https://www.linkedin.com/posts/ishika-banga_tailwindcss-portfolio-webdevelopment-activity-7354440192998445056-0xbD",
    type: "bootcamp",
  },
  {
    title: "50 Days LeetCode Streak",
    issuer: "LeetCode",
    description: "Solved problems consistently for 50 days, improving DSA and problem-solving skills.",
    link: "https://leetcode.com/medal/?showImg=0&id=8747738&isLevel=false",
    type: "achievement",
  },
];

export const Milestones = () => {
  return (
    <section id="milestones" className="py-32 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm uppercase tracking-wider">
            Milestones
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
           Turning effort
           <span className="font-serif italic font-normal text-white "> 
            {" "}
            into real progress.</span> 
          </h2>

          <p className="text-muted-foreground">
            A journey of continuous learning, hands-on experience, and growth in
            development and technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                {item.type === "internship" || item.type === "experience" ? (
                  <BadgeCheck className="text-primary w-6 h-6" />
                ) : (
                  <Award className="text-primary w-6 h-6" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-primary mb-2">
                {item.issuer}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Link */}
              {item.link !== "#" && (
                <a
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};