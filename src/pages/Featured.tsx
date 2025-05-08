import { FaMapMarkerAlt } from "react-icons/fa";

const listings = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "San Francisco, CA",
    price: "$2,500 / month",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "New",
  },
  {
    id: 2,
    title: "Urban Apartment Loft",
    location: "New York, NY",
    price: "$3,200 / month",
    image:
      "https://cdn-blog.zameen.com/blog/wp-content/uploads/2022/11/Loft-Apartment-Cover.jpg",
    badge: "Popular",
  },
  {
    id: 3,
    title: "Beachside Villa",
    location: "Malibu, CA",
    price: "$4,800 / month",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200824472.jpg?k=a0dba5d0bf699fdb8c8af470a345efaced9ed82ab4a6e62f4cf9a02ba7f4fd89&o=&hp=1",
    badge: "Luxury",
  },
];

const Featured = () => {
  return (
    <section className="py-20 bg-white" id="featured">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Featured Listings
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {listings.map((home) => (
            <div
              key={home.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide shadow">
                  {home.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {home.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>{home.location}</span>
                </div>
                <p className="text-blue-700 font-bold text-lg mb-4">
                  {home.price}
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-200 cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
