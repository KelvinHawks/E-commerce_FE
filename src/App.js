import "./App.css";
import Products from "./products/Products";
import Recommended from "./recommended/pages/Recommended";
import MainNavigation from "./shared/navigation/MainNavigation";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
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
}

export default App;
