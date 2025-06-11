import React from "react";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, PhoneCall } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Just say Hello</h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#1a2238] text-white border border-[#2e3650] p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#1a2238] text-white border border-[#2e3650] p-3 rounded"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full bg-[#1a2238] text-white border border-[#2e3650] p-3 rounded"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-[#1a2238] text-white border border-[#2e3650] p-3 rounded resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact Info</h2>
          <p className="text-sm text-gray-300 mb-8">
            Puedes escribirme directamente por correo o contactarme a través de mis redes sociales.
          </p>
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 mt-1 text-yellow-400" />
              <div>
                <p className="text-white">Email</p>
                <p className="text-gray-400">arturo.dev@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneCall className="w-5 h-5 mt-1 text-yellow-400" />
              <div>
                <p className="text-white">Phone</p>
                <p className="text-gray-400">+56 9 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 text-yellow-400" />
              <div>
                <p className="text-white">Address</p>
                <p className="text-gray-400">Santiago, Chile</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="mt-12 flex gap-4">
            <a href="https://github.com/Arturado" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Github />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Linkedin />
            </a>
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
