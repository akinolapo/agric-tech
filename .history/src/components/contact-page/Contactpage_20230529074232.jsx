import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Google Map embed */}
      <div className="w-full md:w-1/2 p-4 md:border-t-4 md:border-green-500">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI4JzIxLjAiTiA3NMKwMTgnMDIuNiJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
          title="Google Map"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact form */}
      <div className="w-full md:w-1/2 p-4">
        <form className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 px-3 py-2 rounded"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 px-3 py-2 rounded"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 px-3 py-2 rounded"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
