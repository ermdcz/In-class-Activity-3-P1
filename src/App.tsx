import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Globe, Coffee, Code, Palette } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  specialty: React.ReactNode;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Darwin Cabrera",
      role: "Member",
      bio: "Passionate about creating beautiful, accessible web experiences. Coffee enthusiast and open source contributor.",
      skills: ["React", "TypeScript", "TailwindCSS", "Next.js"],
      image: "https://i.postimg.cc/90CwpKLz/image.png",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://example.com"
      },
      specialty: <Coffee className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Gabriela Ayres",
      role: "Leader",
      bio: "Design systems enthusiast. Bringing creativity and user-centered thinking to every project.",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      image: "https://i.postimg.cc/g2Sy0zNs/image.png",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      specialty: <Palette className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Eunice Dela Cruz",
      role: "Member",
      bio: "Problem solver and tech enthusiast. Always learning and sharing knowledge with the community.",
      skills: ["Node.js", "React", "PostgreSQL", "AWS"],
      image: "https://i.postimg.cc/BQRwnCbt/image.png",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      },
      specialty: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Cloud Computing (CSD 4553) 2025W Group 8</h1>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group"
              onMouseEnter={() => setActiveId(member.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Base Card - Always Visible */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                  </div>
                </div>
              </div>

              {/* Details Card - Shown on Hover */}
              <div className="absolute inset-0 bg-gray-900/95 rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{member.name}</h2>
                    <div className="bg-gray-800/80 p-2 rounded-full">
                      {member.specialty}
                    </div>
                  </div>
                  
                  <p className="text-emerald-400 mb-3">{member.role}</p>
                  <p className="text-gray-400 mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm text-gray-500 mb-2">SKILLS</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-800 text-emerald-400 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-4 text-gray-400">
                    {member.social.github && (
                      <a href={member.social.github} className="hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.website && (
                      <a href={member.social.website} className="hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;