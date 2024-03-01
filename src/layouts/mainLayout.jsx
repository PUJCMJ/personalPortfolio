import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return ( 
  <div className="mt-12 ml-40 p-10 mr-40 font-poppins grid-rows-1 rounded-3xl h-[500px] w-[1200px] bg-slate-900 shadow-lg  text-white">
    {children}
  </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;