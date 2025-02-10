
const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Passionate about creating beautiful digital experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a web designer and developer with a passion for creating beautiful, functional websites. With expertise in modern web technologies and design principles, I help businesses and individuals establish a strong online presence.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              My approach combines creative design with clean, efficient code to deliver exceptional user experiences. I believe in the power of thoughtful design to solve problems and create meaningful connections.
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'UI/UX Design'].map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/placeholder.svg"
                alt="Warda"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-blue-50 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
