import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="about flex h-screen w-full flex-col items-center justify-evenly px-6 pb-5 pt-10 dark:bg-slate-900 md:px-36 lg:pb-8 xl:px-52"
      >
        <motion.h1
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mb-5 border-b-2 border-b-primary p-1 text-base font-bold dark:text-white xl:text-lg"
        >
          ABOUT US
        </motion.h1>
        <div className="flex gap-x-5 xl:gap-x-10">
          <div className="about-img group relative hidden h-[400px] w-[550px] overflow-hidden rounded-md transition-all duration-300 hover:scale-95 lg:block xl:h-[500px]">
            <img
              src="./img/about-image.jpg"
              alt=""
              className="absolute h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center justify-between gap-y-5">
            <motion.p
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-justify text-xs leading-10 dark:text-white lg:text-sm lg:leading-10 xl:text-base xl:leading-10"
            >
              <span className="font-bold">iAmenities</span> is a production
              label specializing in hotel room amenities, particularly slippers.
              Despite being home-based, we uphold high quality standards. To
              compete in the market, we offer competitive pricing. By relying on
              local talent, we aim to create job opportunities for the
              community.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="mb-5 text-center text-sm font-bold italic leading-loose dark:text-white lg:text-base xl:text-lg"
            >
              “ We grow with customer trust, aiming to continuously enhance our
              products even further. ”
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-green-500 xl:text-base"
            >
              Since 2020
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
