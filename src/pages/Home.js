import MainNavigation from "../shared/navigation/MainNavigation";
import Recommended from "../recommended/pages/Recommended";
import Products from "../products/Products";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
    return(
        <div className="App">
            <main>
                <MainNavigation />
                <Recommended />
            </main>
            <div className="flex" style={{ display: "flex" }}>
                <Sidebar />
                <Products />
            </div>
      </div>
    );

};

export default Home;