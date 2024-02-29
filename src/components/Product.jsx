import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Product() {
  const imgSlider = [
    {
      src: "./img/regular.jpeg",
      title: "Regular",
      desc: "Made with a 4mm thick sponge material for comfortable wear. Recommended for indoor use.",
      price: "2500/pcs",
    },
    {
      src: "./img/slop.jpeg",
      title: "Slop",
      desc: "Made from a 4mm thick sponge base, wrapped in towel fabric for extra comfort and warmth. Perfect for indoor use.",
      price: "3000-6000/pcs",
    },
    {
      src: "./img/embos.jpeg",
      title: "Embos",
      desc: "Made with 6mm thick embossed sponge material, creating an exclusive design yet ensuring comfort during use. Ideal for indoor wear.",
      price: "3000/pcs",
    },
  ];

  return (
    <>
      <section
        id="product"
        className="flex h-screen flex-col items-center gap-y-5 px-6 py-16 dark:bg-slate-900"
      >
        <h1 className="border-b-2 border-b-primary p-1 text-base font-bold dark:text-white lg:text-lg">
          Product
        </h1>
        <p className="text-center text-xs dark:text-white md:text-sm xl:text-base">
          Here are some of the products we manufacture.
        </p>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          className="max-w-[80%] lg:max-w-[50%] xl:max-w-[40%]"
        >
          {imgSlider.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  className="relative h-[350px] w-[200px] flex-col bg-cover bg-center lg:h-[400px] lg:w-[500px] xl:w-[600px]"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <div className="absolute bottom-0 left-0 flex w-full flex-col bg-black bg-opacity-20 p-2 text-white backdrop-blur-sm">
                    <span className="text-sm font-bold lg:text-base">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-white lg:text-xs">
                      {item.desc}
                    </span>
                    <div className="mt-2 flex items-center justify-end text-xs font-bold text-primary lg:text-sm">
                      <span>Rp {item.price}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-custom-pagination text-center" />
      </section>
    </>
  );
}
