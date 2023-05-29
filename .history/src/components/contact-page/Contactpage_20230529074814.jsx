import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </div>
      <div className="w-full md:w-1/2 bg-gray-200 p-6 border-t-4 border-green-500">
        <iframe
          className="w-full h-64 md:h-full"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!4m5!3m4!1s0x0:0x0!8m2!3dYOUR_LATITUDE!4dYOUR_LONGITUDE"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
