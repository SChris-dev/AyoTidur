const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-600 text-sm mt-16 border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold text-blue-700 mb-2">AyoTidur</h2>
            <p>Your trusted place to find modern, cozy, and curated homes.</p>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Navigation</h3>
            <ul className="space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About</li>
              <li className="hover:text-blue-500 cursor-pointer">Listings</li>
              <li className="hover:text-blue-500 cursor-pointer">Testimonials</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Get in Touch</h3>
            <ul className="space-y-1">
              <li>Email: AyoTidursupport@gmail.com</li>
              <li>Phone: 0899-9999-9999</li>
              <li>Hours: Mon–Fri 9am–5pm</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
              <a href="#" className="hover:text-blue-500">Facebook</a>
            </div>
          </div>
        </div>
  
        <div className="text-center border-t border-gray-200 py-4 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} <a href="https://schris.vercel.app" target="_blank">SChris</a>. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  