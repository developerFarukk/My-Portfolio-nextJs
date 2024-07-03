import Banner from "./Banner/Banner";
import MyAchivment from "./MyAchiv/MyAchivment";
import Education from "./MyEducation/Education";
import Projects from "./Projects/Projects";
import Messege from "./SendMessege/Messege";
import Skills from "./Skills/Skills";
import State from "./StateSection/State";




const HomePage = () => {
    return (
        <div>

            {/* Banner section */}
            <div>
                <Banner></Banner>
            </div>

            {/* Status section  */}
            <div>
                <State></State>
            </div>

            {/* Skills Section */}
            <div>
                <Skills></Skills>
            </div>

            {/* My Recent Project */}
            <div>
                <Projects></Projects>
            </div>

            {/* My Achivment section */}
            <div>
                <MyAchivment></MyAchivment>
            </div>

            {/* My Education */}
            <div>
                <Education></Education>
            </div>

            {/* Messege Contact section of Home */}
            <div>
                <Messege></Messege>
            </div>

        </div>
    );
};

export default HomePage;