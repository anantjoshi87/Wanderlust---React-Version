import { footerLinks } from "@/constants";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="py-16">
        <div className="max-w-[1360px] mx-auto px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={"#"}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                {footerLinks.support.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={"#"}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hosting */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                {footerLinks.hosting.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.hosting.links.map((link) => (
                  <li key={link}>
                    <Link
                      to={"#"}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Social</h3>
              <div className="flex gap-4">
                <Link
                  to={"#"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Facebook className="w-5 h-5 text-gray-700" />
                </Link>
                <Link
                  to={"#"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Twitter className="w-5 h-5 text-gray-700" />
                </Link>
                <Link
                  to={"#"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Instagram className="w-5 h-5 text-gray-700" />
                </Link>
                <Link
                  to={"#"}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col sm:flex-row lg:justify-between">
            <p className="text-gray-600">
              © 2026 Wanderlust. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to={"#"}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Privacy
              </Link>
              <Link
                to={"#"}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Terms
              </Link>
              <Link
                to={"#"}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
