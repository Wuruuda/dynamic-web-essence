
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-6">
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
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Created with love by Warda © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
