const Contact = () => {
    return (
      <section className="relative bg-white" id="contact">
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80"
              alt="Contact background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/70 to-blue-500/60 flex items-center justify-center p-8">
              <div className="text-white max-w-sm">
                <h2 className="text-3xl font-bold mb-4">Let’s Talk Homes</h2>
                <p className="text-lg">
                  Want to book a visit, ask about listings, or just chat with our
                  team? We’re ready when you are.
                </p>
                <p className="mt-4 italic text-sm">
                  *Response time under 24 hours.
                </p>
              </div>
            </div>
          </div>
  
          <div className="p-10 md:p-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact AyoTidur
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-1 text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-600">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
export default Contact;
  