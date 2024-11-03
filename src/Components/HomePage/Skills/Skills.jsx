import MobingBorderButton from "@/components/Sheard/MobingBorderButton";
import MobingCard from "./MobingCard";


const Skills = () => {

    return (
        <div className="mt-12">

            {/* Skills Button */}
            <div>
                <MobingBorderButton title="My Skills" />
            </div>

            {/* skills Moviing Card */}
            <div>
                <MobingCard></MobingCard>
            </div>

            {/* Card */}
            {/* <div className="justify-center items-center text-center flex">
                <div className="grid lg:grid-cols-5 md:grid-cols-3  gap-10 items-center justify-center mt-12">
                    {
                        skillIcon.map(sk => <>
                            <div key={sk.id}
                                className="group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_15deg)] duration-500 overflow-hidden  h-[12em] w-[12em]  border-[rgba(152,151,152,1)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col  hover:shadow-yellow-700 hover:shadow-xl backdrop-filter backdrop-blur-md border border-yellow-800"
                            >
                                <div className="p-2">

                                    <div className="avatar grid justify-center">
                                        <div className=" shadow-2xl shadow-yellow-700 rounded-3xl bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]">
                                            {sk.icon}


                                        </div>
                                        <p className="text-xl  font-semibold text-yellow-600 pacifico-regular">{sk.title}</p>
                                    </div>
                                </div>

                            </div>
                        </>)
                    }
                </div>
            </div> */}

        </div>
    );
};

export default Skills;