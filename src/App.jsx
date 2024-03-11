import Navbar from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
function App() {
  return (
    <div>
      <Navbar />
      <div className=" container mx-auto px-2 sm:px-8">
        <RoutePath />
      </div>
    </div>
  );
}

export default App;
