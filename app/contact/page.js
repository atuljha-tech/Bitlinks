"use client";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side - Info */}
        <div className="lg:w-1/2 bg-purple-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question or just want to say hi, send us a message.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>support@bitlinks.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+91 123 456 7890</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Main Street, Jharkhand, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 p-10 bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Form</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
