import AllJobs from "../Components/AllJobs/AllJobs";
import Banner from "../Components/Banner/Banner";
import Process from "../Components/Process";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner />
            <AllJobs />
            <Process />
        </div>
    );
};

export default Home;
