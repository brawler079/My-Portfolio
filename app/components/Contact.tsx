import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "59778faa-7100-42cd-8af0-20c3f2f8d179");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setMessage("Thank you! Your message has been sent.");
      event.target.reset();
    } else {
      setMessage("Oops! Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-36 sm:px-12 lg:px-16">
      <header className="text-center mb-10">
        <h1 className="text-green-500 text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-400 mt-2">I'd love to hear from you. Fill out the form below and I'll get back to you soon!</p>
      </header>

      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              name="message" 
              required 
              rows={4} 
              className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-green-500 hover:opacity-80 text-black font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
