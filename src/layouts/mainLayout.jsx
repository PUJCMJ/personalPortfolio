import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return ( 
  <div className="mt-12 ml-40 p-10 mr-40 flex rounded-3xl h-[700px] w-[1600px]  shadow-slate-600 shadow-inner  text-white">
    {children}
  </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;