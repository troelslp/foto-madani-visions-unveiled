
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally here you would send the form data to your backend
    console.log("Form submitted:", formData);
    // Simulate success for demo purposes
    setFormStatus('success');
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding bg-fotomadani-cream/50">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="heading-lg mb-4">Get In Touch</h2>
            <p className="text-fotomadani-slate mb-8">
              Ready to capture your special moments? Contact us to discuss your photography needs or to schedule a session.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-fotomadani-navy/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-fotomadani-navy" />
                </div>
                <div>
                  <h3 className="font-serif font-medium">Email Us</h3>
                  <p className="text-fotomadani-slate">hello@fotomadani.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fotomadani-navy/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-fotomadani-navy" />
                </div>
                <div>
                  <h3 className="font-serif font-medium">Call Us</h3>
                  <p className="text-fotomadani-slate">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fotomadani-navy/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-fotomadani-navy" />
                </div>
                <div>
                  <h3 className="font-serif font-medium">Visit Our Studio</h3>
                  <p className="text-fotomadani-slate">
                    123 Photography St<br />
                    Anytown, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-6">Send Us a Message</h3>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 text-green-700">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-fotomadani-slate">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-fotomadani-beige/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fotomadani-navy/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-fotomadani-slate">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-fotomadani-beige/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fotomadani-navy/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-fotomadani-slate">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-fotomadani-beige/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fotomadani-navy/30"
                  >
                    <option value="">Select a subject</option>
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Portrait Session">Portrait Session</option>
                    <option value="Landscape Photography">Landscape Photography</option>
                    <option value="Commercial Photography">Commercial Photography</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-fotomadani-slate">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-fotomadani-beige/50 rounded-md focus:outline-none focus:ring-2 focus:ring-fotomadani-navy/30"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-fotomadani-navy hover:bg-opacity-90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
