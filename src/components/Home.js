import Cards from "./Card";
import Register from "./Register";
import Header from "./Header";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="App">
            <Header />
            <Register />
            <Cards />
            <Footer />
        </div>
    );
}
export default Home;
