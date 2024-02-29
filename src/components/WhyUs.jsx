import {
  AiFillTag,
  AiFillCustomerService,
  AiFillMessage,
} from "react-icons/ai";
import { IoEarth } from "react-icons/io5";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const items = [
    {
      icon: <AiFillTag />,
      name: "Affordable Prices",
      desc: "The prices we offer are affordable.",
    },
    {
      icon: <AiFillCustomerService />,
      name: "Customer Support",
      desc: "Our customer support is ready to assist in case of any issues regarding orders.",
    },
    {
      icon: <AiFillMessage />,
      name: "Quick Response",
      desc: "We strive to respond to every inquiry as quickly as possible.",
    },
    {
      icon: <IoEarth />,
      name: "Eco-friendly",
      desc: "The products we produce are environmentally friendly as they can be used multiple times.",
    },
  ];

  return (
    <>
      <section
        id="why-us"
        className="why-us flex h-screen w-full flex-col items-center justify-evenly bg-gray-100 px-6 py-5 dark:bg-black"
      >
        <motion.h1
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="border-b-2 border-b-primary p-1 text-base font-bold dark:text-white lg:text-lg"
        >
          WHY US
        </motion.h1>
        <div className="why-items flex flex-col gap-y-5 md:gap-y-10 lg:w-[900px] lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-5 lg:gap-y-28">
          {items.map((item, index) => {
            return (
              <Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, translateX: -50 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="item flex items-center lg:w-[350px]"
                >
                  <div className="item-icon flex h-10 w-10 basis-2/12 items-center justify-center text-2xl text-primary lg:text-4xl">
                    {item.icon}
                  </div>
                  <div className="item-text basis-10/12 dark:text-white">
                    <p className="text-sm font-bold lg:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs leading-loose lg:text-sm">
                      {item.desc}
                    </p>
                  </div>
                  <hr />
                </motion.div>
                {index !== items.length - 1 && (
                  <>
                    <hr />
                  </>
                )}
              </Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
}

{
  /* <div className="item flex items-center gap-x-7">
            <div className="item-icon">
              <AiFillTag className="w-12 h-12 text-primary" />
            </div>
            <div className="item-text">
              <p className="font-bold text-sm">Affordable Prices</p>
              <p className="text-10px">The prices we offer are affordable</p>
            </div>
          </div>
          <hr />
          <div className="item flex items-center gap-x-7">
            <div className="item-icon">
              <AiFillCustomerService className="w-12 h-12 text-primary" />
            </div>
            <div className="item-text">
              <p className="font-bold text-sm">Customer Support</p>
              <p className="text-10px">
                Our customer support is ready to assist in case of any issues
                regarding orders.
              </p>
            </div>
          </div>
          <hr />
          <div className="item flex items-center gap-x-7">
            <div className="item-icon">
              <AiFillMessage className="w-12 h-12 text-primary" />
            </div>
            <div className="item-text">
              <p className="font-bold text-sm">Quick Response</p>
              <p className="text-10px">
                We strive to respond to every inquiry as quickly as possible.
              </p>
            </div>
          </div>
          <hr />
          <div className="item flex items-center gap-x-7">
            <div className="item-icon">
              <IoEarth className="w-12 h-12 text-primary" />
            </div>
            <div className="item-text">
              <p className="font-bold text-sm">Eco-friendly</p>
              <p className="text-10px">
                The products we produce are environmentally friendly as they can
                be used multiple times.
              </p>
            </div>
          </div> */
}
