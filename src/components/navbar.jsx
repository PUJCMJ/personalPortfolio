import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between mt-10 mr-60 ml-60 text-white ">
        <li className="flex-1 ml-10 mr-10 rounded-3xl">
          <NavLink to="/contact" className="block  p-4 rounded-3xl text-center  shadow-slate-600">Contact</NavLink>
        </li>
        <li className="flex-1 ml-10 mr-10  rounded-3xl">
          <NavLink to="/" className="block  p-4 rounded-3xl text-center shadow-slate-600">Resume</NavLink>
        </li>
        <li className="flex-1 ml-10 mr-10  rounded-3xl">
          <NavLink to="/about" className="block  p-4 rounded-3xl text-center  shadow-slate-600">About</NavLink>
        </li>
        <li className="flex-1 ml-10 mr-10  rounded-3xl ">
          <NavLink to="/certificates" className="block  p-4 rounded-3xl text-center shadow-slate-600">Certificates</NavLink>
        </li>
        <li className="flex-1 ml-10 mr-10  rounded-3xl shadow-lg shadow-slate-600 ">
          <NavLink to="/projects" className="block  p-4 rounded-3xl text-center  shadow-slate-600 ">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;