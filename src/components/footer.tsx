import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[rgb(33,37,41)] py-24 ">
      <div className="grid grid-cols-1 text-center sm:text-start sm:grid-cols 2 md:grid-cols-4  container mx-auto px-4 md:px-10 text-white/80 gap-8 sm:gap-4">


        <div className="space-y-2">
          <h3 className="text-lg text-white font-semibold">
            Contact the Publisher
          </h3>
          <p>lorem@teste.com</p>
          <p>+55 11 99999999</p>
        </div>
        {/* Explore */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-white font-semibold">Explorate</h3>
          <a href="">About</a>
          <a href="">Partners</a>
          <a href="">Job Opportunities</a>
          <a href="">Advertise</a>
          <a href="">Membership</a>
        </div>
        {/* Headquarter */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-white font-semibold">Headquarter</h3>
          <a href="">Lorem, ipsum</a>
        </div>
        {/* Social */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h3 className="text-lg text-white font-semibold">Connections</h3>
          <div className="flex gap-4">
            <a href="">
              <FaFacebook className="size-5 hover:text-red-500" />
            </a>
            <a href="">
              <FaTwitter className="size-5 hover:text-red-500" />
            </a>
            <a href="">
              <FaYoutube className="size-5 hover:text-red-500" />
            </a>
            <a href="">
              <FaPinterest className="size-5 hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
