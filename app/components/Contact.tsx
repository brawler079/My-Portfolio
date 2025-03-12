import React from "react";

const Contact = () => {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "59778faa-7100-42cd-8af0-20c3f2f8d179");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    });

    const result = await response.json();
    console.log(result); // Logs response (optional)
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-36 sm:px-12 lg:px-16">
      <header className="text-center mb-10">
        <h1 className="text-green-500 text-4xl font-bold">Get in Touch</h1>
        <p className="text-gray-400 mt-2">Eager to Learn, Ready to Code—Let&apos;s Connect!</p>
      </header>

      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              name="message" 
              required 
              rows={4} 
              className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400 resize-none"
            ></textarea>
          </div>

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
