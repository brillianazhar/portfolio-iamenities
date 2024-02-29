export default function Footer() {
  return (
    <>
      <footer className="footer flex h-full w-full justify-between bg-black">
        {/* <h1 className="font-bold text-primary text-base lg:text-lg">
          iAMENITIES
        </h1> */}
        <p className="copyright mx-auto items-center py-2 text-[8px] font-light text-white xl:text-xs">
          ©️{new Date().getFullYear()} iAMENITIES. All rights reserved
        </p>
        <div className="right w-6 basis-1/12 bg-primary"></div>
      </footer>
    </>
  );
}
