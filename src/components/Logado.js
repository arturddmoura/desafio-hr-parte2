import Cards from "./Card";
import Register from "./Register";
import HeaderLogado from "./HeaderLogado";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Logado() {
    return (
        <div className="App">
            <HeaderLogado />
            <Register />
            <Cards />
            <Footer />
        </div>
    );
}
export default Logado;
