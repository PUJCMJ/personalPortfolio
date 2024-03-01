import userImage from '../../img/user.jpg';
import githubImage from '../../img/github.png';
import linkedinImage from '../../img/linkedin.png';
import whatsappImage from '../../img/whatsapp.png';


const Home = () => {
  return (
    <div className='block bg-inherit'>
      <figure className="relative m-2 flex ">
        <img src={userImage} alt='user' className='rounded-full h-40 mx-auto shadow-lg shadow-slate-500' />
      </figure>
      <h1 className="relative top-14 flex items-center justify-center  text-3xl font-poppins font-bold text-amber-300 ">
       Software engineer
      </h1>
      <h2 className='relative top-14 flex items-center justify-center  text-lg font-poppins font-bold text-stone-500 '>
      Passionate About: Web Development (Front-End & Back-End)
      </h2>

      <div className=' mx-auto relative top-14 flex items-center justify-between rounded-3xl p-4 bg-slate-500 h-12 w-60 mt-10 '>
        <a className='ml-4 mr-4' href='https://github.com/PUJCMJ'><img src={githubImage}/></a>
        <span className='ml-4 mr-4'><img src={linkedinImage}/></span>
        <span className='ml-4 mr-4'><img src={whatsappImage}/></span>
      </div>
    </div>
  );
};

export default Home;
