import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: 'email', label: 'Email', value: 'manojprajapati5410@gmail.com', href: 'mailto:manojprajapati5410@gmail.com' },
    { icon: 'phone', label: 'Phone', value: '+91 7224883185', href: 'tel:+917224883185' },
    { icon: 'location_on', label: 'Location', value: 'Indore, India', href: '#' },
  ];

  const socialLinks = [
    { icon: 'code', href: 'https://github.com', label: 'GitHub' },
    { icon: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'flutter_dash', href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 padding leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="card-gradient padding">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                <div className="w-20 h-20 mb-4 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <span className="material-icons text-white text-4xl">check_circle</span>
                </div>
                <p className="text-xl font-semibold text-white mb-2">Message Sent!</p>
                <p className="text-gray-400">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass-input resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-2"
                >
                  <span className="material-icons">send</span>
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Contact Details */}
            <div className="card-gradient padding">
              <h3 className="text-2xl font-semibold padding-bottom">Contact Info</h3>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl card-gradient hover:bg-linear-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12  rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <span className="material-icons text-blue-400">{info.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white text-xs sm:text-base font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-gradient padding">
              <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
              <p className="text-gray-400 padding-bottom">
                Connect with me on social media.
              </p>

              <div className="flex gap-4 ">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl card-gradient flex items-center justify-center text-gray-400 hover:text-white hover:bg-linear-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="material-icons w-5">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="card-gradient padding">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <p className="text-white font-semibold">Available for Work</p>
                  <p className="text-gray-400 text-sm">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

