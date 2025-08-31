import CardTestimoni from "./landingPages/CardTestimoni";
import HeroSection from "./landingPages/HeroSection";
import PopularProduct from "./landingPages/PopularProduct";


export default function Home() {
  return (
    <div className="px-5 lg:px-10 xl:px-20 py-10">

      {/* Hero Section */}
      <HeroSection />

      {/* Card */}
      <CardTestimoni />

      {/* Popular Product */}
      <PopularProduct />

      {/*  */}
      <div className="my-10">
        <div className="bg-green-500 p-10 rounded-2xl">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-5">
              <div className="bg-gray-300 px-7 py-1 rounded-full">
                <p className="">Programming</p>
              </div>
              <div className="bg-gray-300 px-7 py-1 rounded-full">
                <p className="">Graphic Design</p>
              </div>
              <div className="bg-gray-300 px-7 py-1 rounded-full">
                <p className="">Graphic Design</p>
              </div>
              <div className="bg-gray-300 px-7 py-1 rounded-full">
                <p className="">Graphic Design</p>
              </div>
              <div className="bg-gray-300 px-7 py-1 rounded-full">
                <p className="">Graphic Design</p>
              </div>
            </div>
            <div className="my-3">
              <p className="text-white text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Product */}
      <PopularProduct />
    </div>
  );
}
