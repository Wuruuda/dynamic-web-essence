
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(0.6)' }}
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <span className="inline-block animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-sm font-medium mb-6 border border-white/20">
          Web Designer & Developer
        </span>
        <h1 className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] text-5xl md:text-7xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
          Creating Digital Experiences
        </h1>
        <p className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] text-xl md:text-2xl mb-10 text-white/90">
          I craft beautiful, intuitive websites that connect with your audience
        </p>
        <a
          href="#projects"
          className="animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards] inline-block bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          View My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/80" size={32} />
      </div>
    </section>
  );
};

export default Hero;
