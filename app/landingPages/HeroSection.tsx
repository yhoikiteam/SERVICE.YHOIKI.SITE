import Image from "next/image"
import ButtonPrimary from "../components/ButtonPrimary"
import Link from "next/link"
import imageHero from "./../../public/image-1.svg"

export default function HeroSection() {
    return (
        <div className="">
            <div className="flex snap-mandatory overflow-auto">
                <div className="flex shrink-0 gap-5">
                    <p className="">Programming</p>
                    <p className="">Tech</p>
                    <p className="">Grapich & Design</p>
                    <p className="">Digital Marketing</p>
                </div>

            </div>
            <div className="grid lg:grid-cols-2 items-center justify-between gap-5">
                <div className="">
                    <h1 className="text-2xl font-bold">
                        Looking for <span className="text-green-400">Digital</span> Needs
                        from <span className="text-green-400">Technology</span> and Also{" "}
                        <span className="text-green-400">Learning</span> Technology.
                    </h1>
                    <p className="">
                        At Yhoiki you can find all your digital needs. Come on, start
                        searching now and see the prices and discounts! Want to learn about
                        technology now? visit the course menu
                    </p>
                    <div className="flex gap-5 mt-5">
                        <ButtonPrimary>
                            <Link href="">Get Started</Link>
                        </ButtonPrimary>
                        <ButtonPrimary>
                            <Link href="">Help</Link>
                        </ButtonPrimary>
                    </div>
                    <p className="text-gray-400 mt-2">
                        &copy; Copyright Yhoiki 2024. All right reveserd.
                    </p>
                </div>

                <div className="flex relative h-96 p-2">
                    <Image
                        src={imageHero}
                        width={0}
                        height={0}
                        alt=""
                        className="flex justify-self-center"
                    />

                    <div className="bg-white/30 backdrop-blur-sm absolute top-0 right-0 text-right p-2 shadow-2xl border border-gray-400 rounded-2xl">
                        <p className="bg-green-600 text-white inline-block rounded-2xl px-7 py-1">
                            Course
                        </p>
                        <p className="w-[300px] mt-2 text-sm">
                            Yhoiki Team also provides courses to train your skills, which are
                            trained by experienced mentors
                        </p>
                    </div>

                    <div className="bg-white/30 backdrop-blur-sm absolute bottom-0 left-0 text-left p-2 shadow-2xl border border-gray-400 rounded-2xl">
                        <p className="bg-green-600 text-white inline-block rounded-2xl px-7 py-1">
                            Freelance
                        </p>
                        <p className="w-[300px] mt-2 text-sm">
                            Yhoiki Team also provides courses to train your skills, which are
                            trained by experienced mentors
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}