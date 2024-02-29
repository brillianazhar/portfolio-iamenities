import { BsWhatsapp } from "react-icons/bs";

export default function FloatingContact() {
  return (
    <>
      <button className="btn float-contact fixed bottom-0 right-0 m-3 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-[#25D366] transition-all duration-200 hover:opacity-80 md:m-5 lg:h-14 lg:w-14">
        <BsWhatsapp className="text-2xl text-white lg:text-3xl" />
      </button>
    </>
  );
}
