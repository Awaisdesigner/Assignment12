
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nav from "./Components/Navbar"
import Header from "./Components/Header"
import Work from "./Components/straightimage"
import What from "./Components/Whatcan"
import Test from "./Components/Testimonial"
import Talks from "./Components/Talk"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Work />
      <What />
      <Test />
      <Talks />
      <Footer />

    </div>
  );
}

export default App;
