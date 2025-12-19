"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* ✅ Full screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/zarlishhh.jpeg"   // 👈 image from public folder
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>

      {/* ✅ Optional overlay for readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* ✅ Content */}
      <div className="relative z-10 text-black px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Zarlish Abassi
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Spoken English Teacher | Communication Coach | Language Enthusiast
        </p>
        <a

          href="/Zarlish Abbasi CV --1.pdf"
          download
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
