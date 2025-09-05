import Image from "next/image";
import { FaHeart, FaShareAlt, FaShoppingCart, FaCheck, FaClock } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Breadcrumb */}
      <div className="px-4 md:px-6 py-3 text-xs md:text-sm text-gray-500 border-b">
        Grafik & design / Design situs web / Design UI/UX situs web
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Title & action */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-1">Design UI/UX</h1>
            <p className="text-gray-600 text-sm md:text-base">Design Genshin UI/UX</p>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border hover:bg-gray-100">
              <FaHeart className="text-gray-600 text-sm md:text-base" />
            </button>
            <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full border hover:bg-gray-100">
              <FaShareAlt className="text-gray-600 text-sm md:text-base" />
            </button>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left (Image + Profile + About) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Preview */}
            <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow">
              <Image
                src="/image-2.svg"
                alt="Design Preview"
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />

              {/* arrows */}
              <button className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-50">
                ←
              </button>
              <button className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-50">
                →
              </button>
            </div>

            {/* Profile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border rounded-lg p-4 shadow-sm">
              <Image
                src="/profil.svg"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full border flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Kipin Sadbor</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 flex-wrap">
                  <span className="text-green-600 font-semibold">4.8</span>
                  <span>(1500)</span>
                  <span className="px-3 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    Top Rate
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Hai saya kipin dari Team Thokk
                </p>
              </div>
              <button className="bg-green-500 text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 transition w-full sm:w-auto">
                Contact
              </button>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold text-lg mb-3">About this service</h4>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Hai</p>
                <p>
                  Saya seorang desainer situs web dan halaman arahan PSD/XD profesional. 
                  Saya dapat mendesain segala jenis Situs Web PSD/XD. Tetapi, PSD/XD halaman web PSD/XD. 
                  Saya bertanggung jawab kepada pelanggan dengan memenuhi komitmen dan mengutamakan kualitas terbaik. 
                  Motto utama saya adalah jika pelanggan senang, saya akan senang selamanya.
                </p>
              </div>
            </div>
          </div>

          {/* Right (Pricing) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-300 rounded-lg shadow-md sticky top-4">
              {/* Tabs */}
              <div className="flex rounded-t-lg overflow-hidden text-sm">
                <button className="flex-1 py-3 font-medium text-gray-600 bg-gray-50 hover:bg-gray-100">
                  Basic
                </button>
                <button className="flex-1 py-3 font-medium text-gray-600 bg-gray-50 hover:bg-gray-100">
                  Standard
                </button>
                <button className="flex-1 py-3 font-medium text-white bg-green-500">
                  Premium
                </button>
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-5 space-y-4 md:space-y-5">
                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-red-500">📌</span>
                    Desain situs web Beranda + 5 Halaman Dalam di Figma (desktop
                    + seluler) | Lebih banyak halaman? Mari kita bicarakan!
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-500" /> Gaya desain
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-500" /> 2 Revisi
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-500" /> Responsive design
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheck className="text-green-500" /> Sumber file
                    </li>
                  </ul>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                    <FaClock className="text-gray-500" />
                    5-day delivery
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                  <div className="text-xl md:text-2xl font-bold">Rp. 430.000</div>
                  <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2">
                    <FaShoppingCart /> Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
