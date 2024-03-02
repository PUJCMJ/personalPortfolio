import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='mx-auto mt-6 relative top-4 flex items-center shadow-custom-inset justify-center rounded-full h-26 mr-80 ml-80 p-4 bg-slate-600'>
       <nav>  
      <ul className="flex mx-auto w-10 text-white font-poppins justify-center align-middle ">
        <li className="flex ml-10 mr-10  rounded-3xl  shadow-custom2 ">
          <NavLink to="/contact" className="block  p-4 rounded-3xl text-center  bg-slate-900 hover:bg-blue-950">Contact</NavLink>
        </li>
        <li className="flex ml-10 mr-10  rounded-3xl shadow-custom2 bg-slate-900 ">
          <NavLink to="/" className="block  p-4 rounded-3xl text-center  hover:bg-blue-950">Resume</NavLink>
        </li>
        <li className="flex ml-10 mr-10  rounded-3xl shadow-custom2 bg-slate-900 ">
          <NavLink to="/about" className="block  p-4 rounded-3xl text-center  hover:bg-blue-950" >About</NavLink>
        </li>
        <li className="flex ml-10 mr-10  rounded-3xl shadow-custom2 bg-slate-900  ">
          <NavLink to="/certificates" className="block  p-4 rounded-3xl text-center  hover:bg-blue-950" >Certificates</NavLink>
        </li>
        <li className="flex ml-10 mr-10  rounded-3xl shadow-custom2 bg-slate-900 ">
          <NavLink to="/projects" className="block  p-4 rounded-3xl text-center  hover:bg-blue-950">Projects</NavLink>
        </li>
      </ul>
    </nav>
    </div>

   
  );
};

export default Navbar;