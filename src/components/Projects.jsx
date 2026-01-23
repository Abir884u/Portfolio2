import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Klobostha: Your Ultimate Price Comparison Platform",
      description: "Klobostha is an online platform dedicated to helping people in Bangladesh find the best products at competitive prices. The platform offers detailed price comparisons, comprehensive product information, and reliable user reviews to assist users in making informed shopping decisions.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tags: ["React.js", "Node.js", "MongoDB"]
    },
    {
      title: "IntrLab: Digital It Agency in Europe",
      description: "An end-to-end digital solutions, from stunning designs and seamless development to scalable cloud and DevOps services. Our goal is to deliver fast, powerful, secure, and cost-effective technology.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["React.js", "Node.js", "TailwindCSS"]
    },
    {
       title: "Ride-Sharing App",
      description: "A ride-sharing app is a mobile platform that connects passengers with nearby drivers using their personal vehicles. It offers a convenient and cost-effective alternative way to book rides on demand, utilizing GPS and real-time data for efficient matching and navigation.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
      tags: ["React Native", "TypeScript", "TailwindCSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0f1729] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}