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
        <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto gap-10">
       
          <div className="min-w-[200px] w-full sm:w-auto">
            <h3 className="text-black text-2xl font-bold mb-10">Funiro.</h3>
            <address className="text-sm not-italic">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
            </address>
          </div>

         
          {footerData.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-start min-w-[200px] w-full sm:w-auto"
            >
              <h3 className="text-gray-400 hover:text-gray-500 text-lg font-semibold mb-10">
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

       
          <div className="min-w-[200px] w-full sm:w-auto">
            <h3 className="text-gray-400 hover:text-gray-500 text-lg font-semibold mb-10">Newsletter</h3>
            <form className="flex items-center w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="underline rounded-l px-3 py-2 text-sm focus:outline-none w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-accentWhite text-black underline px-5 py-2 rounded-r text-sm hover:bg-black hover:text-white 800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      
        <div className="border-t border-gray-300 mt-10 pt-5 text-center">
          <p className="text-sm text-gray-600 text-start font-semibold">2023 Funiro. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
