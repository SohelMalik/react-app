import Navbar from "../Components/Navbar"; // ✅ Default import — NO curly braces
import Footer from "../Components/Footer"; 

const HomePage = () => {
  // state variables
  // get categories list from API
  //render data on screen
  return (
    <div>
      <Navbar />
      <main>
        <p>Home Page</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; // ✅ Ye bhi sahi karo — object mat export karo
