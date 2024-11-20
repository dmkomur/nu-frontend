import Welcome from "../components/Welcome/Welcome";
import NewLive from "../components/NewLife/NewLife";
import Community from "../components/Community/Community";
import Work from "../components/Work/Work";
import News from "../components/News/News";

const HompePage = () => {
    return (
        <>
            <News />
            <Welcome />
            <NewLive />
            <Community />
            <Work />
        </>
    );
};

export default HompePage;
