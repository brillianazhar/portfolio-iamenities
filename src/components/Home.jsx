import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="home hero-img flex h-screen w-full flex-col justify-center bg-cover bg-fixed bg-left p-6 md:bg-center"
      >
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="hero-text flex flex-col gap-y-3 xl:gap-y-8"
        >
          <p className="text-xs text-white lg:text-base xl:text-lg">
            Late delivery ?
          </p>
          <p className="text-lg font-bold text-white lg:text-2xl xl:text-3xl">
            <span className="text-primary">iAMENITIES</span> ready as backup
          </p>
          <p className="pr-16 text-xs text-white md:w-6/12 lg:w-5/12 lg:text-sm xl:w-4/12 xl:text-base">
            iAmenities is all set to help you get some temporary stock for your
            hotel slippers
          </p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.2 }}
          whileHover={{ transition: { duration: 0.2 } }}
          viewport={{ once: true }}
          href="#contact"
          className="mt-10 flex h-8  w-24 items-center justify-center rounded-full border-2 border-primary px-3 py-1 text-xs font-bold text-primary hover:bg-primary hover:text-white xl:h-9 xl:w-40"
        >
          <span className="">Contact Us</span>
        </motion.a>
      </section>
    </>
  );
}
