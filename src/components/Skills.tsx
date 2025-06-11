import React, { useEffect, useState } from "react";

interface Skill {
  name: string;
  percent: number;
}

const skills: Skill[] = [
  { name: "JavaScript", percent: 95 },
  { name: "React", percent: 90 },
  { name: "TypeScript", percent: 85 },
  { name: "TailwindCSS", percent: 90 },
  { name: "WordPress", percent: 80 },
  { name: "PHP / Laravel", percent: 75 },
];

const Skills: React.FC = () => {
  const [animatedPercents, setAnimatedPercents] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    skills.forEach((skill, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimatedPercents((prev) => {
            const updated = [...prev];
            updated[index] = skill.percent;
            return updated;
          });
        }, 300 + index * 200)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Texto a la izquierda */}
        <div>
          <h2 className="text-sm uppercase text-yellow-400 font-semibold tracking-wide mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            All the skills that I have in that field of work are mentioned.
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et dolore magna aliqua. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Skills a la derecha */}
        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-yellow-400">{animatedPercents[index] || 0}%</span>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded">
                <div
                  className="h-1 bg-yellow-400 rounded transition-all duration-700"
                  style={{ width: `${animatedPercents[index] || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
