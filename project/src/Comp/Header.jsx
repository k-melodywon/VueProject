import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <h1>
                <Link to={"/"}>Yeowon Portfolio</Link>
            </h1>
        </header>
    );
}
export default Header;