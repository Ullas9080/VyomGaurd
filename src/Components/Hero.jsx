import { useEffect, useState } from "react";


const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fade = Math.max(1 - scrollY / 400, 0);
  const move = Math.min(scrollY / 5, 80);



  return (
    <section className="relative h-screen w-full overflow-hidden text-white font-[Poppins]">

      <video
        autoPlay
        loop
        muted
        playsInline
        src="/36579-360.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0" />


      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 sm:px-16">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-wide transition-all duration-300 ease-out"
          style={{
            opacity: fade,
            transform: `translateY(-${move}px)`,
          }}
        >
          Vyom<span className="text-[#ff7b00]">Garud</span>
        </h1>

        <div
          className="flex flex-col text-[#ff7b00] text-2xl sm:text-3xl md:text-5xl font-semibold gap-3 uppercase leading-tight transition-all duration-500 ease-out"
          style={{ opacity: fade }}
        >
          <p>Precision.</p>
          <p>Power.</p>
          <p>Autonomy.</p>
        </div>
      </div>

 
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
