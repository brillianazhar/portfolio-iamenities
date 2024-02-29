import { motion } from "framer-motion";

export default function Client() {
  return (
    <>
      <section
        id="client"
        className="client flex h-screen w-full flex-col items-center justify-around bg-black p-[25px] px-6 py-16 md:h-full"
      >
        <motion.div
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-10 text-center text-base font-bold text-primary">
            OUR CLIENTS
          </h1>
          <div className="main-clients flex w-72 flex-wrap items-center justify-center gap-x-12 gap-y-3 md:w-[500px] xl:w-[700px]">
            <img
              className="h-[100px] w-[100px] xl:h-[150px] xl:w-[150px]"
              src="./img/Azana.png"
              alt=""
            />
            <img
              className="h-[100px] w-[100px] xl:h-[150px] xl:w-[150px]"
              src="./img/Braga.png"
              alt=""
            />
            <img
              className="h-[100px] w-[100px] xl:h-[150px] xl:w-[150px]"
              src="./img/Owabong.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 mt-10 text-center text-xs text-white">Others :</p>
          <div className="other-clients flex w-52 flex-wrap items-center justify-center gap-x-10">
            <img
              className="h-[60px] w-[60px] xl:h-[75px] xl:w-[75px]"
              src="./img/Aston.png"
              alt=""
            />
            <img
              className="h-[60px] w-[60px] xl:h-[75px] xl:w-[75px]"
              src="./img/Elsotel.png"
              alt=""
            />
            <img
              className="h-[60px] w-[60px] xl:h-[75px] xl:w-[75px]"
              src="./img/JavaHeritage.png"
              alt=""
            />
            <img
              className="h-[60px] w-[60px] xl:h-[75px] xl:w-[75px]"
              src="./img/Cadaka.png"
              alt=""
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
