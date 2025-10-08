import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900  to-black text-gray-300 py-10 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10 md:mb-0">
            <div>
              <h3 className="text-white font-bold mb-3 ">Company</h3>
              <ul className="space-y-2 text-sm font-semibold">
                <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
                <li><NavLink to="/jobs" className="hover:text-white">Jobs</NavLink></li>
                <li><NavLink to="/record" className="hover:text-white">For the Record</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3 ">Communities</h3>
              <ul className="space-y-2 text-sm font-semibold">
                <li><NavLink to="/artists" className="hover:text-white">For Artists</NavLink></li>
                <li><NavLink to="/developers" className="hover:text-white">Developers</NavLink></li>
                <li><NavLink to="/advertising" className="hover:text-white">Advertising</NavLink></li>
                <li><NavLink to="/investors" className="hover:text-white">Investors</NavLink></li>
                <li><NavLink to="/vendors" className="hover:text-white">Vendors</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3 ">Useful Links</h3>
              <ul className="space-y-2 text-sm font-semibold">
                <li><NavLink to="/support" className="hover:text-white">Support</NavLink></li>
                <li><NavLink to="/mobile-app" className="hover:text-white">Free Mobile App</NavLink></li>
                <li><NavLink to="/popular" className="hover:text-white">Popular by Country</NavLink></li>
                <li><NavLink to="/import" className="hover:text-white">Import your music</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-3 ">Moody Plans</h3>
              <ul className="space-y-2 text-sm font-semibold">
                <li><NavLink to="/plans/individual" className="hover:text-white">Premium Individual</NavLink></li>
                <li><NavLink to="/plans/duo" className="hover:text-white">Premium Duo</NavLink></li>
                <li><NavLink to="/plans/family" className="hover:text-white">Premium Family</NavLink></li>
                <li><NavLink to="/plans/student" className="hover:text-white">Premium Student</NavLink></li>
                <li><NavLink to="/plans/free" className="hover:text-white">Moody Free</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 justify-center md:justify-end">
            <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full">
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-3 md:mb-0">
            <NavLink to="/legal" className="hover:text-white">Legal</NavLink>
            <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
            <NavLink to="/cookies" className="hover:text-white">Cookies</NavLink>
            <NavLink to="/about-ads" className="hover:text-white">About Ads</NavLink>
            <NavLink to="/accessibility" className="hover:text-white">Accessibility</NavLink>
          </div>
          <p>© {new Date().getFullYear()} Moody Player</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
