import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface ResumeItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

const education: ResumeItem[] = [
  {
    title: "Master of Computer Science",
    subtitle: "University of XYZ",
    date: "2015 - 2016",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla.",
  },
  {
    title: "Bachelor of Computer Science",
    subtitle: "University of ABC",
    date: "2010 - 2014",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla.",
  },
  {
    title: "Diploma in Computer Science",
    subtitle: "XYZ Institution",
    date: "2006 - 2010",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla.",
  },
];

const experience: ResumeItem[] = [
  {
    title: "Senior UX/UI Designer",
    subtitle: "Bergnaum, Hills and Howe",
    date: "Jan 2020 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla.",
  },
  {
    title: "Product Designer",
    subtitle: "Langosh, Sipes and Raynor",
    date: "Jan 2016 - Dec 2019",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla.",
  },
  {
    title: "UI/UX Designer",
    subtitle: "Strosin, Maggio and Homenick",
    date: "Jan 2014 - Dec 2015",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla.",
  },
];

const Resume: React.FC = () => {
  return (
    <section id="resume" className="bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm uppercase text-yellow-400 font-semibold tracking-wide mb-2">Resume</h2>
        <h3 className="text-4xl font-bold mb-12 text-white/10 relative inline-block">
          <span className="absolute top-0 left-0 text-white text-lg font-bold tracking-wide underline decoration-yellow-400 decoration-4">
            RESUME
          </span>
        </h3>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-yellow-400" />
            <h4 className="text-xl font-semibold">Education</h4>
          </div>
          <div className="space-y-10 border-l border-gray-600 pl-4">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[9px] top-1 w-3 h-3 bg-yellow-400 rounded-full" />
                <h5 className="text-yellow-400 font-semibold">{item.title}</h5>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-white text-sm">{item.subtitle}</p>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-yellow-400" />
            <h4 className="text-xl font-semibold">Experience</h4>
          </div>
          <div className="space-y-10 border-l border-gray-600 pl-4">
            {experience.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[9px] top-1 w-3 h-3 bg-yellow-400 rounded-full" />
                <h5 className="text-yellow-400 font-semibold">{item.title}</h5>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-white text-sm">{item.subtitle}</p>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
