
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-green-50 text-green-600 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:hello@warda.dev" className="text-gray-600 hover:text-blue-600 transition-colors">
                      hello@warda.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-purple-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
