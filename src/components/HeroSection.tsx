import profileImage from "@/assets/ISOTECH_PROFILE.jpg";

const topSkills = [
  {
    category: "Full Stack",
    tools: "React, Express, Node.js, Neon PostgreSQL",
    colorClass: "text-[#00ffff] bg-[#00ffff]/10 border-[#00ffff]/20",
  },
  {
    category: "IoT & Hardware",
    tools: "ESP32, Arduino, Raspberry Pi, Firebase",
    colorClass: "text-[#ff6b6b] bg-[#ff6b6b]/10 border-[#ff6b6b]/20",
  },
  {
    category: "Languages",
    tools: "C++, Python, PHP, JavaScript",
    colorClass: "text-[#d1a6ff] bg-[#d1a6ff]/10 border-[#d1a6ff]/20",
  },
  {
    category: "Tools",
    tools: "VS Code, Git, Postman",
    colorClass: "text-[#8c9eff] bg-[#8c9eff]/10 border-[#8c9eff]/20",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Profile and Name Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 animate-fade-in">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
            <img
              src={profileImage}
              alt="Gielo Mar Bandoy"
              className="w-full h-full object-cover rounded-full border-4 border-background shadow-lg shadow-black/50"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
              Gielo Mar Bandoy
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Software Engineer & IoT Developer
            </h2>
          </div>
        </div>

        {/* Short Bio / Stats Line */}
        <div className="max-w-3xl mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Delivered fully functional systems for varied clients | Implemented advanced IoT Data logging & Automations
            <br className="hidden md:block" />
            Specialist in connecting software logic with hardware operations
          </p>
        </div>

        {/* Top Skills Card */}
        <div 
          className="w-full max-w-xl bg-[#111111]/80 backdrop-blur-md rounded-2xl border border-white/5 p-6 md:p-8 animate-fade-up text-left shadow-2xl"
          style={{ animationDelay: '0.4s' }}
        >
          <h3 className="text-xl font-bold text-white mb-6">Top Skills</h3>
          <div className="flex flex-col gap-3">
            {topSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`inline-flex items-center text-sm px-4 py-2 rounded-full border ${skill.colorClass} w-fit transition-transform hover:scale-[1.02]`}
              >
                <span className="font-semibold mr-1">{skill.category}</span>
                <span className="opacity-80">[{skill.tools}]</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
