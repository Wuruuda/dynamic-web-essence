
const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate about creating beautiful digital experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a web designer and developer with a passion for creating beautiful, functional websites. With expertise in modern web technologies and design principles, I help businesses and individuals establish a strong online presence.
            </p>
            <p className="text-lg text-gray-600">
              My approach combines creative design with clean, efficient code to deliver exceptional user experiences. I believe in the power of thoughtful design to solve problems and create meaningful connections.
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'UI/UX Design'].map((skill) => (
                <span
                  key={skill}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Warda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
