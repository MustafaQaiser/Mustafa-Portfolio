import { Profile,  ProjectOne, ProjectThree, ProjectTwo } from '../utils/image'
import { ProgreeBar } from '../components'
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import FileUrl from "../file/MustafaQaiser(Cs - Software Engineer).pdf"
import "../assets/css/home.css"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Home = () => {



  return (
    <div className='main-home'>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-sm-12">
            <div className="left-sidebar">
              <div className="image">
                <img src={Profile} alt="" />
              </div>
              <h4 className='name text-white' style={{ fontSize: "24px" }}>Muhammad Mustafa Qaiser</h4>
              <h5 className="designation" style={{ color: "#b4b4b4", fontSize: "20px" }}>MERN Stack Developer</h5>
              <div className="d-flex gap-3 mt-2 justify-content-center">
                <a href='https://www.linkedin.com/in/mustafa-qaiser-1bbb4a247/' target='_blank'>
                  <CiLinkedin color='#fff' fontSize={30} />
                </a>
                <a href='https://github.com/MustafaQaiser' target='_blank'>
                  <FaGithub color='#fff' fontSize={30} />
                </a>
                {/* <a href='https://www.behance.net/umaramjad4' target='_blank'>  
              <FaBehance color='#fff' fontSize={30}/>
              </a> */}
                {/* <a href='https://www.fiverr.com/s/mPGyaz' target='_blank'>
              <TbBrandFiverr color='#fff' fontSize={30}/>
              </a> */}

              </div>
              <div className="d-flex flex-column gap-2 mt-4">
                {/* <div className="d-flex justify-content-between align-items-center">
                <div className="p-detail">Age:</div>
                <p className="mb-0 text-white">28</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="p-detail">Residence:</div>
                <p className="mb-0 text-white">LP</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="p-detail">Freelance:</div>
                <p className="mb-0" style={{color:"green"}}>Available</p>
              </div> */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="p-detail">Address:</div>
                  <p className="mb-0 text-white">Lahore, pakistan</p>
                </div>
              </div>


              <div className="d-flex flex-column gap-2 mt-4 text-white">
                <h5>Contact :</h5>
                <div className='d-flex gap-2'>
                  <p>Phone No : </p>
                  <p>0370-4879105</p>
                </div>
                <div className='d-flex gap-2'>
                  <p>Email : </p>
                  <p>mustafaqaiser78@gmail.com</p>
                </div>

                {/* <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>HTML</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Css</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>JavaScript</p>
                    </div>
                  </div>
                  <div className='row'>
                  <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Scss</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Bootstrap</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Mui</p>
                    </div>
                  <No/div>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>React js</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Next js</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Node js</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Sockets</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>Redux</p>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-4'>
                      <p>MQTT</p>
                    </div>
                  </div> */}




                <div className="downloadcv">
                  <button> <a href={FileUrl} download style={{ textDecoration: "none", color: "#000" }}>Download CV</a></button>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-8 col-sm-12" style={{ height: "100vh", overflowY: "auto" }}>
            <div className="header">
              <div className="row">
                <div className="col-lg-7 col-sm-12 d-flex align-items-center">
                  <div className="content">
                    <h4>I'm Muhammad Mustafa Qaiser <span>MERN Stack</span> Developer </h4>
                    <p className="mb-0 text-white fs-5">Expert React JS Developer | Bootstrap | <br /> Material UI | MongoDB | Node JS | Next JS | HTML/CSS | Saas </p>
                    {/* <div className="btn d-flex justify-content-start">
                <button style={{background:"#ffffff"}}>Hire Me</button>
                </div> */}

                  </div>
                </div>
                <div className="col-lg-5 col-sm-12 position-relative d-flex justify-content-center">
                  <div className="image d-flex justify-content-center text-center align-items-center" >
                    <IoLogoReact fontSize={300} color='rgb(217 217 217)' />
                    {/* <img src={Profile} alt="" className='w-100' style={{borderRadius:"8px" , border:"3px solid yellow"}}  /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="services mt-5 text-center">
              {/* <h4>My Services</h4>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. lorem ipsum</p> */}
              <div className="row mb-3 mt-3">
                <div className="col-lg-4 col-sm-12 mt-3">
                  <div className="service-box d-flex w-100 align-items-center">
                    <IoLogoReact fontSize={100} color='rgb(0 227 255)' />
                    <h5>React Js</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-3">
                  <div className="service-box d-flex w-100 align-items-center">
                    <SiNextdotjs fontSize={100} color='#FFFFFF' />
                    <h5>Next Js</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-3">
                  <div className="service-box d-flex w-100 align-items-center">
                    <FaNodeJs fontSize={100} color='rgb(202 255 99)' />
                    <h5>Node Js</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-3">
                  <div className="service-box d-flex w-100 align-items-center">
                    <SiExpress fontSize={100} color='rgb(165 255 150)' />
                    <h5>Express Js</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-3">
                  <div className="service-box d-flex w-100 align-items-center">
                    <FaHtml5 fontSize={100} color='rgb(255 163 163)' />
                    <h5>Html Css Design</h5>
                  </div>
                </div>



                <div className="col-lg-4 col-sm-12 mt-3">
                  <div className="service-box d-flex w-100 align-items-center">
                    <FaBootstrap fontSize={100} color='rgb(198 169 230)' />
                    <h5>Bootstrap</h5>
                  </div>
                </div>

              </div>
            </div>
            <div className="education mt-5 text-center">
              <h4>Education</h4>
              {/* <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. lorem ipsum</p> */}
              <div className="education-content p-4">
                <div className="d-flex gap-5">
                  <div className="d-flex flex-column gap-2 w-25">
                    <h4 className='text-left'>Lahore Garrison University</h4>
                    <div className="d-flex gap-3 align-items-center">
                      <h5 className='mb-0'>Student</h5>
                      <h6 className='mb-0'>{"2019 - 2023"}</h6>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2 w-75">
                    <h4>Computer Science</h4>
                    <div className="d-flex gap-3 align-items-center">
                      <h5 className='mb-0'>**Bachelor's in Computer Science** – Focused on programming, algorithms, databases, and software development, with hands-on experience in modern technologies.</h5>
                    </div>
                  </div>

                </div>


           

              </div>
            </div>
            <div className="services mt-5 text-center">
              <h4>Live Projects</h4>
              {/* <p className='mb-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. lorem ipsum</p> */}
              <div className="row mb-3 mt-3">
              <div className="col-lg-6 col-sm-12 mt-3">
                  <a href='https://carvonix.com/' target='_blank'>
                    <div className="service-box d-flex w-100 align-items-center" style={{ position: "relative", background: "orange" }}>
                      <img src={ProjectOne} alt="" className='w-100' style={{ height: "300px" ,objectFit:"cover"}} />
                      <h5 className="mb-0" style={{ position: "absolute", top: "0px", left: "0px", background: "#fff", cursor: "pointer", padding: "10px 30px", color: "#000", fontWeight: "bold" }}>Carvonix</h5>
                    </div>
                  </a>

                </div>
                <div className="col-lg-6 col-sm-12 mt-3" >
                  <a href='https://dancefrance.com/' target='_blank'>
                    <div className="service-box d-flex w-100 align-items-center" style={{ position: "relative", background: "#ff00b8" }}>
                      <img src={ProjectTwo} alt="" className='w-100' style={{ height: "300px" ,objectFit:"cover"}} />
                      <h5 className="mb-0" style={{ position: "absolute", top: "0px", left: "0px", background: "#fff", cursor: "pointer", padding: "10px 30px", color: "#000", fontWeight: "bold" }}>dancefrance</h5>
                    </div>
                  </a>

                </div>
                <div className="col-lg-6 col-sm-12 mt-3">
                  <a href='https://weship.com/' target='_blank'>
                    <div className="service-box d-flex w-100 align-items-center" style={{ position: "relative", background: "blue" }}>
                      <img src={ProjectThree} alt="" className='w-100' style={{ height: "300px" , objectFit:"cover" }} />
                      <h5 className="mb-0" style={{ position: "absolute", top: "0px", left: "0px", background: "#fff", cursor: "pointer", padding: "10px 30px", color: "#000", fontWeight: "bold" }}>Weship</h5>
                    </div>
                  </a>

                </div>
                
        
              </div>
            </div>
          </div>
          {/* <div className="col-lg-1 col-sm-12">umar</div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
