import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 gap-4 opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="h-32 bg-blue-500/20 backdrop-blur-sm rounded-lg" />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              John Doe
            </h1>
            <p className="text-2xl text-gray-300 mb-8">Full Stack Developer & UI/UX Designer</p>
            <div className="flex justify-center gap-4">
              <a href="https://github.com" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-900/30 rounded-full text-sm text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="mt-4 inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-2">
            <User className="text-blue-400" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm a passionate full-stack developer with 5+ years of experience in building modern web applications.
                I specialize in React, Node.js, and cloud technologies, with a keen eye for design and user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-400">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-gray-400">Node.js, Python, PostgreSQL</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cloud</h4>
                  <p className="text-gray-400">AWS, Docker, Kubernetes</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <p className="text-gray-400">Git, Figma, VS Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics platform with machine learning capabilities for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Python", "TensorFlow"],
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Node.js", "Stripe"],
    link: "#"
  },
  {
    title: "Social Media Analytics Tool",
    description: "Analytics tool for tracking and analyzing social media engagement metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "GraphQL", "AWS"],
    link: "#"
  }
];

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead developer for enterprise-scale applications, managing a team of 5 developers and implementing modern development practices."
  },
  {
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description: "Developed responsive web applications using React and TypeScript, improving user engagement by 40%."
  },
  {
    role: "Software Engineer",
    company: "StartUp Hub",
    period: "2017 - 2019",
    description: "Full-stack development of various client projects using modern web technologies and cloud services."
  }
];

export default App;