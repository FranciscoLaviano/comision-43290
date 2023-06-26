import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className={"containerNavbar"}>
      <h4>Comision 43290</h4>

      <ul className="categories">
        <li>Todas</li>
        <li>Deportivas</li>
        <li>Urbanas</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
