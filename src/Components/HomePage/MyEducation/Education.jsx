import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import Image from "next/image";
import Link from "next/link";
import { EducationScrollRevealDemo } from "./EducationScrollRevealDemo";


const Education = () => {
    return (
        <div>
            <div>
                {/* <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">My Education</h2>
                </div> */}
                {/*Project Title Button */}
                <div>
                    <MobingBorderButton title="My Education" />
                </div>
            </div>

            <div>
                <EducationScrollRevealDemo />
            </div>

            {/* <div className="mt-6 mb-4 lg:p-0 p-2">
                <section className="overflow-hidden text-white sm:grid sm:grid-cols-2 sm:items-center">
                    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-2xl font-bold  md:text-3xl">
                                I am currently studying in <Link href="https://www.sugc.edu.bd/" target="blank" className="text-yellow-200 hover:text-yellow-600">Sunamganj Government College</Link>
                            </h2>

                            <p className="">
                                My journey to college started with higher secondary education. Currently, I am a fourth-year student in the Mathematics Department of this college. One of my favorite subjects is mathematics and computer science. Therefore, I am working on programming alongside my studies.
                            </p>
                        </div>
                    </div>

                    <Image
                        alt=""
                        src="https://sugc.edu.bd/storage/content-images/1646984167_ZXKofBQ_content_image.jpeg"
                        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                        layout="responsive"
                        width={300}
                        height={300}
                    />

                </section>
            </div> */}

        </div>
    );
};

export default Education;