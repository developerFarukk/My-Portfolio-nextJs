import About from "./AboutMe/About";
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import MyAchivment from "./MyAchiv/MyAchivment";
import Education from "./MyEducation/Education";
import Projects from "./Projects/Projects";
import Message from "./SendMessege/Messege";
import Skills from "./Skills/Skills";
import State from "./StateSection/State";





const HomePage = () => {
    return (
        <div>

            {/* Banner section */}
            <div >
                <Banner className=""></Banner>
            </div>

            {/* About Me Section */}
            <div id="about">
                <About></About>
            </div>

            {/* Status section  */}
            <div>
                <State></State>
            </div>

            {/* Skills Section */}
            <div id="skills">
                <Skills></Skills>
            </div>

            {/* My Recent Project */}
            <div id="projects">
                <Projects></Projects>
            </div>

            {/* Blogs */}
            <div id="blogs">
                <Blogs />
            </div>

            {/* My Achivment section */}
            <div id="service">
                <MyAchivment></MyAchivment>
            </div>

            {/* My Education */}
            <div id="education">
                <Education></Education>
            </div>

            {/* Messege Contact section of Home */}
            <div id="contact">
                <Message />
            </div>

        </div>
    );
};

export default HomePage;