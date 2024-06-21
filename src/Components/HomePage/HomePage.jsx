import Banner from "./Banner/Banner";
import State from "./StateSection/State";




const HomePage = () => {
    return (
        <div>

            {/* Banner section */}
            <div>
                <Banner></Banner>
            </div>

            {/* State section  */}
            <div>
                <State></State>
            </div>

        </div>
    );
};

export default HomePage;