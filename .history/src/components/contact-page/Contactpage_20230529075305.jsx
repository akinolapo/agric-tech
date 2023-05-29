import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ContactPage = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col md:flex-row py-20 px-5 sm:px-32">
      <div className="w-full md:w-1/2 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6">Leave a Message</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
              Subject:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
              Mobile:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200 p-6 border-t-4 border-green-500">
        <iframe
          className="w-full h-64 md:h-full"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!4m5!3m4!1s0x0:0x0!8m2!3dYOUR_LATITUDE!4https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659043.982291233!2d23.59146645!3d2.265532400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10a06c0a948cf5d5%3A0x108270c99e90f0b3!2sAfrica!5e0!3m2!1sen!2sng!4v1685343139492!5m2!1sen!2sngdYOUR_LONGITUDE"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
