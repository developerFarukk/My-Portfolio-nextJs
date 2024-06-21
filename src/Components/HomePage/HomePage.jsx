import Banner from "./Banner/Banner";
import MyAchivment from "./MyAchiv/MyAchivment";
import Messege from "./SendMessege/Messege";
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

            {/* My Achivment section */}
            <div>
                <MyAchivment></MyAchivment>
            </div>

            {/* Messege Contact section of Home */}
            <div>
                <Messege></Messege>
            </div>

        </div>
    );
};

export default HomePage;