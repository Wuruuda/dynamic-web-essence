
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
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <span className="inline-block animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium mb-4">
          Web Designer & Developer
        </span>
        <h1 className="animate-fade-in opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] text-4xl md:text-6xl font-bold mb-6">
          Creating Digital Experiences
        </h1>
        <p className="animate-fade-in opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards] max-w-2xl mx-auto text-lg md:text-xl mb-8">
          I craft beautiful, intuitive websites that connect with your audience
        </p>
        <a
          href="#projects"
          className="animate-fade-in opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards] inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
        >
          View My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default Hero;
