import { Code } from "lucide-react";
import exampleImageDua from "@/public/image-1.svg";
import Image from "next/image";

export default function ProductPage() {
    return (
        <div className="px-5 lg:px-10 xl:px-20 py-10">
            <h1 className="text-2xl font-bold">Products</h1>
            <div className="my-5">
                <div className="flex snap-mandatory overflow-auto">
                    <div className="flex shrink-0 gap-5">
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-gray-300 p-2 rounded-full">
                                <Code />
                            </div>
                            <div className="">
                                <p className="">HTML</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-gray-300 p-2 rounded-full">
                                <Code />
                            </div>
                            <div className="">
                                <p className="">CSS</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="bg-gray-300 p-2 rounded-full">
                                <Code />
                            </div>
                            <div className="">
                                <p className="">JavaScript</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">

                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300 rounded-2xl">
                        <Image src={exampleImageDua} width={0} height={0} alt="" className="w-full" />
                        <div className="p-2">
                            <div className="">
                                <h1 className="">Hello World!</h1>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-5">
                                    <p className="">IDR 500.000</p>
                                    <button className="bg-green-600 text-white px-7 py-1 rounded">Order</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}