
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
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-gray-400" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@warda.dev" className="text-gray-600 hover:text-gray-900">
                      hello@warda.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-gray-400" size={24} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-gray-400" size={24} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
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
