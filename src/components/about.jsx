import userImage from "../assets/img/user.jpg";
import download from "../assets/img/download.png";
import cv from '../assets/cv/cvsamples.pdf';
import puj from '../assets/img/PUJ.png';
import githubImage from "../assets/img/github.png";
import linkedinImage from "../assets/img/linkedin.png";
import whatsappImage from "../assets/img/whatsapp.png";
import instagramImage from "../assets/img/instagram.png";

const About = () => {
  return (
    <>
      <div className=" border-slate-100 border-2xl bg-blue-500/10 rounded-3xl items-center shadow-xl w-[700px] h-[400px] relative flex p-10">
        <div className=" absolute top-12 mr-10 ml-5 text-slate-300/70">
          <p></p>
        </div>
      </div>
      <div className=" border-slate-100 border-2xl bg-slate-500 rounded-full  shadow-xl w-[350px] h-[50px] absolute top-[203px] left-[960px]  p-10">
        <img
          src={userImage}
          className="rounded-full w-[60px] h-[60px] absolute top-2.5 left-3.5 shadow-custom2"
        />
        <div className="block absolute left-[98px] items-center justify-center top-3 align-middle bg-slate-600 w-[230px] h-[55px] rounded-full">
          <h2 className="mb-1 top-2 relative text-center font-bold">
            Carlos Mejia
          </h2>
          <h3 className="text-center text-sm">Software engineer</h3>
        </div>
      </div>
      <div className="border-slate-100 border-2xl bg-slate-500 rounded-full shadow-xl w-[350px] h-[50px] absolute top-[313px] left-[960px] p-10">
        <img
          src={download}
          className="w-10 absolute top-5 left-7 rounded-sm p-0"
        />
        <div className="block absolute left-[98px] items-center justify-center top-3 align-middle bg-slate-600 w-[230px] h-[55px] rounded-full transform transition-transform duration-300 hover:scale-110">
          <a href={cv} download>
            <button className="mb-1 relative flex items-center justify-center text-center font-bold p-2 h-full left-14">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="bg-slate-400 p-4 rounded-3xl left-[960px] top-[350px] shadow-xl w-[350px] h-[170px] fixed mt-[165px] transform -translate-y-1/2 right-60">
          <div className="text-lg font-medium">
          </div>
          <div>
            <img className="rounded-2xl h-[70px] w-[150px] items-center justify-center relative left-20 bg-slate-300 p-0" src={puj} />
            <div className=" mx-auto relative top-2 flex items-center justify-between rounded-3xl p-4 bg-slate-500 h-14 w-[280px] mt-2 ">
        <a
          className="ml-4 mr-4 transform transition-transform duration-300 hover:scale-125"
          href="https://github.com/PUJCMJ"
        >
          <img src={githubImage} />
        </a>
        <a
          className="ml-4 mr-4 transform transition-transform duration-300 hover:scale-125"
          href="https://linkedin.com"
        >
          <img src={linkedinImage} />
        </a>
        <a
          className="ml-4 mr-4 transform transition-transform duration-300 hover:scale-125"
          href="https://whatsapp.com"
        >
          <img src={whatsappImage} />
        </a>
        <a
          className="ml-4 mr-4 transform transition-transform duration-300 hover:scale-125"
          href="https://www.instagram.com/mejiaesteban10/"
        >
          <img src={instagramImage} />
        </a>
      </div>
          </div>
        </div>
    </>
  );
};

export default About;
