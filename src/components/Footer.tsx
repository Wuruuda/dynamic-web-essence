
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-8 mb-8">
            {[
              { icon: Github, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Created with <Heart size={16} className="text-red-500 animate-pulse" /> by Warda © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
