"use client"

import Container from "./Container";

const footerData = [
  {
    _id: 2221,
    title: "Links",
    listItem: [
      {
        _id: "001",
        listData: ["Home", "Shop", "About", "Contact", "FAQs"],
      },
    ],
  },
  {
    _id: 2222,
    title: "Help",
    listItem: [
      {
        _id: "002",
        listData: ["Payment Options", "Returns", "Privacy Policies"],
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-accentWhite text-gray-800 py-10">
      <Container>
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-8 sm:gap-10">
          {/* Company Info */}
          <div className="w-full sm:w-auto">
            <h3 className="text-black text-2xl font-bold mb-6 sm:mb-10">Funiro.</h3>
            <address className="text-sm not-italic">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
            </address>
          </div>

          {/* Links and Help Sections */}
          {footerData.map((item) => (
            <div
              key={item._id}
              className="w-full sm:w-auto"
            >
              <h3 className="text-gray-400 hover:text-gray-500 text-lg font-semibold mb-6 sm:mb-10">
                {item.title}
              </h3>
              <div className="flex flex-col space-y-2">
                {item.listItem.map((list) =>
                  list.listData.map((data) => (
                    <a
                      href="#"
                      key={data}
                      className="text-black font-semibold hover:text-gray-500 transition-colors text-sm"
                    >
                      {data}
                    </a>
                  ))
                )}
              </div>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="w-full sm:w-auto">
            <h3 className="text-gray-400 hover:text-gray-500 text-lg font-semibold mb-6 sm:mb-10">Newsletter</h3>
            <form className="flex flex-col sm:flex-row items-center gap-2 w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="underline rounded px-3 py-2 text-sm focus:outline-none w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-accentWhite text-black underline px-5 py-2 rounded text-sm hover:bg-black hover:text-white transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-10 pt-5 text-center sm:text-start">
          <p className="text-sm text-gray-600 font-semibold">2023 Funiro. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;