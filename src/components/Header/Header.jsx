import { Link } from "react-router-dom";


const Header = () => {
     return (
          <div className="">
               <Link className="text-xl mr-4" to="/">Home</Link>
               <Link className="text-xl" to="/login">Login</Link>
          </div>
     );
};

export default Header;