const About = () => {
    return (
      <section className="bg-gray-50 py-20" id="about">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Why AyoTidur Feels Like Home
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              AyoTidur isn’t just about places to stay — it’s about where your life happens.
              We create environments that inspire comfort, connection, and calm.
            </p>
            <ul className="space-y-3 text-gray-600 text-base mb-8">
              <li>🏠 Curated listings that blend style and function</li>
              <li>🧑‍🤝‍🧑 Friendly, human-first service</li>
              <li>🌍 Prime neighborhoods near everything you love</li>
              <li>⚡ Seamless experience, from browse to move-in</li>
            </ul>
            <a href="#featured">
                <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 cursor-pointer">
                Discover Our Spaces
                </button>
            </a>
          </div>
  
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://blog.canadianloghomes.com/wp-content/uploads/2024/04/cozy-country-cottage.jpg"
              alt="Cozy home interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  