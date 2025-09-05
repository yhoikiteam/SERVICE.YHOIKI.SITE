import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import exampleImageSatu from "./../favicon.ico";
import exampleImageDua from "./../../public/image-1.svg";
import ButtonPrimary from "../components/ButtonPrimary";

export default function PopularProduct() {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold">
        <span className="text-green-500">Popular</span> And{" "}
        <span className="text-green-500">Newest</span> Products
      </h1>
      <p>Look for the products you need here and see competitive prices</p>

      <div className="flex flex-col lg:flex-row gap-10 my-5">
        {/* Sidebar kategori */}
        <div>
          <ul className="flex flex-row lg:flex-col flex-wrap gap-2">
            <li>
              <button className="bg-gray-300 px-7 py-1 rounded-full w-[170px]">
                Populer
              </button>
            </li>
            <li>
              <button className="bg-gray-300 px-7 py-1 rounded-full w-[170px]">
                Programming
              </button>
            </li>
            <li>
              <button className="bg-gray-300 px-7 py-1 rounded-full w-[170px]">
                Graphic Design
              </button>
            </li>
          </ul>
        </div>

        {/* Card product */}
        <div className="flex snap-mandatory overflow-auto">
          <div className="flex shrink-0 gap-5">
            {/* Card satu contoh */}
            <div className="bg-gray-300 max-w-[400px] rounded-2xl">
              <Image
                src={exampleImageDua}
                width={0}
                height={0}
                alt=""
                className="w-full"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Image
                      src={exampleImageSatu}
                      height={0}
                      width={0}
                      alt=""
                      className="w-5 h-5"
                    />
                    <p>John Doe</p>
                  </div>
                  <div className="bg-green-600 text-white inline-block px-7 py-1 rounded-full">
                    <p>Top Rate</p>
                  </div>
                </div>

                <div className="my-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores molestiae quod consequatur perspiciatis natus
                    dicta, provident explicabo fugit maxime velit officia?
                  </p>
                </div>

                <div>
                  <p>4.9 (1995)</p>
                  <div>
                    <div className="flex items-center gap-2">
                      {/* ✅ Button diarahkan ke halaman /KelasPages */}
                      <Link href="/KelasPages">
                        <ButtonPrimary classNames="w-full">
                          From 25$
                        </ButtonPrimary>
                      </Link>

                      <div className="border border-gray-300 shadow-xl p-2 rounded-full">
                        <ShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card satu contoh */}
            <div className="bg-gray-300 max-w-[400px] rounded-2xl">
              <Image
                src={exampleImageDua}
                width={0}
                height={0}
                alt=""
                className="w-full"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Image
                      src={exampleImageSatu}
                      height={0}
                      width={0}
                      alt=""
                      className="w-5 h-5"
                    />
                    <p>John Doe</p>
                  </div>
                  <div className="bg-green-600 text-white inline-block px-7 py-1 rounded-full">
                    <p>Top Rate</p>
                  </div>
                </div>

                <div className="my-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores molestiae quod consequatur perspiciatis natus
                    dicta, provident explicabo fugit maxime velit officia?
                  </p>
                </div>

                <div>
                  <p>4.9 (1995)</p>
                  <div>
                    <div className="flex items-center gap-2">
                      {/* ✅ Button diarahkan ke halaman /KelasPages */}
                      <Link href="/KelasPages">
                        <ButtonPrimary classNames="w-full">
                          From 25$
                        </ButtonPrimary>
                      </Link>

                      <div className="border border-gray-300 shadow-xl p-2 rounded-full">
                        <ShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card satu contoh */}
            <div className="bg-gray-300 max-w-[400px] rounded-2xl">
              <Image
                src={exampleImageDua}
                width={0}
                height={0}
                alt=""
                className="w-full"
              />
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Image
                      src={exampleImageSatu}
                      height={0}
                      width={0}
                      alt=""
                      className="w-5 h-5"
                    />
                    <p>John Doe</p>
                  </div>
                  <div className="bg-green-600 text-white inline-block px-7 py-1 rounded-full">
                    <p>Top Rate</p>
                  </div>
                </div>

                <div className="my-4">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores molestiae quod consequatur perspiciatis natus
                    dicta, provident explicabo fugit maxime velit officia?
                  </p>
                </div>

                <div>
                  <p>4.9 (1995)</p>
                  <div>
                    <div className="flex items-center gap-2">
                      {/* ✅ Button diarahkan ke halaman /KelasPages */}
                      <Link href="/KelasPages">
                        <ButtonPrimary classNames="w-full">
                          From 25$
                        </ButtonPrimary>
                      </Link>

                      <div className="border border-gray-300 shadow-xl p-2 rounded-full">
                        <ShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
