
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="section-title">Join Our Dance Family</h2>
        <p className="text-lg text-gray-700">
          Take the first step on your dance journey with Akshaya. Reach out to us for registrations, inquiries, or to schedule a visit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="font-playfair text-2xl font-bold mb-6 text-akshaya-purple">Get in Touch</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-akshaya-purple focus:border-akshaya-purple"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-akshaya-purple focus:border-akshaya-purple"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-akshaya-purple focus:border-akshaya-purple"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                Interested in
              </label>
              <select
                id="class"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-akshaya-purple focus:border-akshaya-purple"
              >
                <option value="">Select a dance style</option>
                <option value="bharatanatyam">Bharatanatyam</option>
                <option value="kathak">Kathak</option>
                <option value="contemporary">Contemporary</option>
                <option value="odissi">Odissi</option>
                <option value="folk">Folk Dance</option>
                <option value="bollywood">Bollywood</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-akshaya-purple focus:border-akshaya-purple"
                placeholder="Additional information or questions..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <div className="bg-akshaya-purple text-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="font-playfair text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-akshaya-gold mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-white/80">123 Dance Avenue, Creative District</p>
                  <p className="text-white/80">Bangalore, Karnataka 560001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-akshaya-gold mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-white/80">+91 98765 43210</p>
                  <p className="text-white/80">+91 91234 56789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-akshaya-gold mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-white/80">info@akshayadance.com</p>
                  <p className="text-white/80">classes@akshayadance.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-akshaya-gold mr-3 mt-1" />
                <div>
                  <h4 className="font-medium">Hours</h4>
                  <p className="text-white/80">Monday - Friday: 9am - 8pm</p>
                  <p className="text-white/80">Saturday: 10am - 6pm</p>
                  <p className="text-white/80">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden h-64">
            {/* Map Placeholder - In a real site, you would embed a Google Map or similar here */}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <p className="text-gray-500 font-medium">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
