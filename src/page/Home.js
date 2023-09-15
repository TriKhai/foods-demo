import Slider from "./Homepage/Slider";
import Infor from "./Homepage/Infor";
import AboutP from "./Homepage/AboutP"
import Footer from "./Homepage/Footer";

function Home () {
    return (
        <div style={{marginTop: "100px"}}>
            <Slider />
            <Infor />
            <AboutP />
            <Footer />
        </div>

    );
}
export default Home;