import { FaLinkedin,  FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-16 bg-white text-black animate-slideIn">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Contact</h2>
        <p className="text-lg mb-6">Feel free to reach out via any platform below:</p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://www.linkedin.com/in/zarlish-abbasi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-black transition duration-300">
            <FaLinkedin />
          </a>
          
          <a href="mailto: zarlixhabbasi@gmail.com " className="hover:text-red-400 text-black transition duration-300">
            <FaEnvelope />
          </a>
          <a href="tel:+923170501897" className="hover:text-green-400 text-black transition duration-300">
            <FaPhone />
          </a>
          <a href="https://wa.me/923170501897" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-black transition duration-300">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}