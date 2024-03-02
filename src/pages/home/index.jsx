import userImage from '../../img/user.jpg';
import githubImage from '../../img/github.png';
import linkedinImage from '../../img/linkedin.png';
import whatsappImage from '../../img/whatsapp.png';


const Home = () => {
  return (
    <div className='block bg-inherit w-full h-full pt-0 pb-12'>
      <figure className="relative m-0  flex ">
        <img src={userImage} alt='user' className='rounded-full h-60 mx-auto shadow-custom' />
      </figure>
      <h1 className="relative top-8 flex items-center justify-center  text-3xl font-poppins font-bold text-amber-300 ">
       Software engineer
      </h1>
      <h2 className='relative top-8 flex items-center justify-center  text-lg font-poppins font-bold text-stone-500 '>
      Passionate About: Web Development (Front-End & Back-End)
      </h2>

      <div className=' mx-auto relative top-8 flex items-center justify-between rounded-3xl p-4 bg-slate-500 h-12 w-60 mt-6 shadow-custom-inset'>
        <a className='ml-4 mr-4' href='https://github.com/PUJCMJ'><img src={githubImage}/></a>
        <a className='ml-4 mr-4'href='https://linkedin.com'><img src={linkedinImage}/></a>
        <a className='ml-4 mr-4' href='https://whatsapp.com'><img src={whatsappImage}/></a>
      </div>
    </div>
  );
};

export default Home;
