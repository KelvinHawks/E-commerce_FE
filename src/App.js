import "./App.css";
import Recommended from "./recommended/pages/Recommended";
import MainNavigation from "./shared/navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <main>
        <MainNavigation />
        <Recommended />
      </main>
    </div>
  );
}

export default App;
