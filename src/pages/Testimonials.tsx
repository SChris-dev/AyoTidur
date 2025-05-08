import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    title: "Happy Renter",
    quote:
      "“AyoTidur was a game-changer. The listing quality, the team, the ease of process — absolutely top-tier.”",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Rodriguez",
    title: "New Homeowner",
    quote:
      "“I’ve bought my first home with AyoTidur. The experience was seamless, and the support team? Amazing.”",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Investor",
    quote:
      "“Best investment platform I’ve used so far. Everything is curated, modern, and intuitive.”",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">
          Hear From Our Clients
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg px-8 py-10 mx-auto max-w-xl"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-md object-cover"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-900">
                {testimonials[index].name}
              </h3>
              <p className="text-blue-500 text-sm mb-2">
                {testimonials[index].title}
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
              </div>
              <p className="text-gray-700 italic">{testimonials[index].quote}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition cursor-pointer"
            >
              ⬅️
            </button>
            <button
              onClick={next}
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition cursor-pointer"
            >
              ➡️
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
