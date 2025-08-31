import Image from "next/image";
import exampleImageSatu from "./../favicon.ico"

export default function CardTestimoni() {
    return (
        <div className="my-10">
            <div className="flex snap-mandatory overflow-auto gap-5">
                <div className="flex shrink-0 gap-5">

                    <div className="bg-gray-200 border border-gray-300 p-5 shadow-xl w-[500px] rounded-2xl">
                        <div className="flex gap-5 items-center">
                            <Image src={exampleImageSatu} width={0} height={0} className="w-20 h-20" alt="" />
                            <div className="">
                                <h3 className="bg-green-600 inline-block text-white px-7 py-1 rounded-full">John Doe</h3>
                                <div className="">
                                    <p className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam itaque, eos, at quo ab numquam vero distinctio harum commodi modi, quam molestiae earum architecto ad non? Excepturi, quis. Sequi!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}