import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-28 mx-auto md:mx-0"
            />

            <p className="text-sm text-gray-400 leading-5 mt-4 max-w-xs mx-auto md:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4 mt-5 text-sm text-gray-600">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-800">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-500">
                Home
              </a>

              <a href="#" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-800">
              COMPANY
            </h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-500">
                About
              </a>

              <a href="#" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-800">
              LEGAL
            </h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-12 pt-7 flex items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;