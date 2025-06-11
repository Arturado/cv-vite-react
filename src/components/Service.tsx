import React from "react";
import { PenTool, LayoutDashboard, Package, Smartphone, Film, MonitorSmartphone } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Sketches",
    description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod tempor sittem elit inuning utsed sittem.",
    icon: <PenTool size={32} className="text-yellow-400" />,
  },
  {
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod tempor sittem elit inuning utsed sittem.",
    icon: <LayoutDashboard size={32} className="text-yellow-400" />,
  },
  {
    title: "Product Design",
    description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod tempor sittem elit inuning utsed sittem.",
    icon: <Package size={32} className="text-yellow-400" />,
  },
  {
    title: "App Design",
    description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod tempor sittem elit inuning utsed sittem.",
    icon: <Smartphone size={32} className="text-yellow-400" />,
  },
  {
    title: "Motion Graphics",
    description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod tempor sittem elit inuning utsed sittem.",
    icon: <Film size={32} className="text-yellow-400" />,
  },
  {
    title: "Responsive Design",
    description: "Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod tempor sittem elit inuning utsed sittem.",
    icon: <MonitorSmartphone size={32} className="text-yellow-400" />,
  },
];

const Service: React.FC = () => {
  return (
    <section id="services" className="bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm uppercase text-yellow-400 font-semibold tracking-wide mb-2">Service</h2>
        <h3 className="text-4xl font-bold mb-12 text-white/10 relative inline-block">
          <span className="absolute top-0 left-0 text-white text-lg font-bold tracking-wide underline decoration-yellow-400 decoration-4">
            SERVICE
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-zinc-700 p-8 rounded-lg text-center hover:border-yellow-400 transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">{service.title}</h4>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
