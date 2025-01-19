import './App.css'
import NavbarLogo from "./assets/logo.svg"
import ProfileImg from "./assets/personal-profile-img.jpg"
import cardImg1 from "./assets/personal-portfolio-img-3.jpg"
import cardImg2 from "./assets/personal-portfolio-img-2.jpg"
import cardImg3 from "./assets/personal-portfolio-img-1.jpg"
import html from "./assets/html5.svg"
import react from "./assets/react.svg"
import figma from "./assets/figma.svg"
import nodejs from "./assets/nodejs.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import rocket from "./assets/Rocket.svg"
import purpleLump from "./assets/LightbulbFilament.svg"
import BracketsCurly from "./assets/BracketsCurly.svg"
import PencilCircle from "./assets/PencilCircle.svg"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


function App() {




  return (
    <>
      {/* nav start */}
      <header className='navbar'>
        <div className='navbar-container container'>
          <img src={NavbarLogo} alt="" />

          <div className='navbar-list'>
            <ul>
              <li><a href="#">Landings</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blocks</a></li>
              <li><a href="#">Accounts</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
          </div>
          <div className='navbar-btn-container'>
            <button className='btn-light'>Login
            </button>
            <button className='btn-purple'>Create account</button>
          </div>
        </div>
      </header>
      {/* nav end */}

      {/* hero start */}
      <section className='hero'>
        <p className='hero-heading'>Hi there, my name is</p>
        <h1>Lee Robinson</h1>
        <p className='hero-description'>i'm the Vp of Developer Experince ar Vercel where my team helps developers  build a faster web. I'm an advisor and investor in early stage startups.</p>

        <img className='hero-avatar-image' src={ProfileImg} alt="" />
      </section>
      {/* hero end */}


      {/* portfolio start */}
      <section className='portfolio-section'>
        <p className='portfolio-text gray-text'>PORTFOLIO</p>
        <h2 className='my-protfolio black-text'>Handful of items from <span className='span-purple-text'>my protfolio</span></h2>
        <p className='experience-text'><span className='experience-span opacity-text'>Here are handful of itmes from my portfolio over the </span>last 13 years</p>
      </section>
      {/* portfolio end */}


      {/* portfolio cars start */}
      <section className='portfolio-cards-section'>
        <div className='container portfolio-cards-section-container'>
          <div className='portfolio-card'>
            <h2>JAMstack & Headless web development agency</h2>
            <div className='badge-container'>
              <span className='badge'>Figma</span>
              <span className='badge'>Bootstrap</span>
            </div>
            <img src={cardImg1} alt="" />
          </div>

          <div className='portfolio-card'>
            <h2>Banking and Finance landing page design</h2>
            <div className='badge-container'>
              <span className='badge'>UI Design</span>
              <span className='badge'>Next.js</span>
            </div>
            <img src={cardImg2} alt="" />
          </div>

          <div className='portfolio-card'>
            <h2>Accounting software web app development</h2>
            <div className='badge-container'>
              <span className='badge'>Web Development</span>
              <span className='badge'>React JS</span>
            </div>
            <img src={cardImg3} alt="" />
          </div>
        </div>
        {/* portfolio cars end */}
      </section>


      {/* Knowledge-programming-languages-section start */}
      <section className='programming-section container'>

        <div className='programing-text-content'>
          <p className='my-skills gray-text'>MY SKILLS</p>
          <h2 className='expertise black-text'>My areas of <span className='span-purple-text'>expertise</span></h2>
          <p className='expertise-text opacity-text'>Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis elit interdum. Duis mollis, ligula magna mollis.</p>
          <button className='btn-purple'>View More Details</button>
        </div>

        <div className='programing-cards-contianer'>
          {/* card 1 */}
          <div className='programing-card programing-card-html'>
            <img src={html} alt="" />
            <h2 className='black-text'>HTML & CSS</h2>
            <p className='opacity-text'>Nulla vitae elit libero, a pharetra auguc id elit non mi porta gravida.</p>
            <p className='link-red link-text'>Link Text <FaArrowRightLong /></p>
          </div>

          {/* card 2 */}
          <div className='programing-card programing-card-react '>
            <img src={react} alt="" />
            <h2 className='black-text'>React</h2>
            <p className='opacity-text'>Nulla vitae elit libero, e pharetra auguc id elit non mi porta gravida.</p>
            <p className='link-light-blue link-text'>Link Text <FaArrowRightLong /></p>
          </div>

          {/* card 3 */}
          <div className='programing-card programing-card-figma '>
            <img src={figma} alt="" />
            <h2 className='black-text'>Figma UI Design</h2>
            <p className='opacity-text'>Nulla vitae elit libero, a pharetra auguc id elit non mi porta gravida.</p>
            <p className='link-yellow link-text'>Link Text <FaArrowRightLong /></p>
          </div>

          {/* card 4 */}
          <div className='programing-card programing-card-nodejs'>
            <img src={nodejs} alt="" />
            <h2 className='black-text'>Node.js</h2>
            <p className='opacity-text'>Nulla vitae elit libero, a pharetra auguc id elit non mi porta gravida.</p>
            <p className='link-green link-text'>Link Text <FaArrowRightLong /></p>
          </div>
        </div>

      </section>
      {/* Knowledge-programming-languages-section end */}

      {/* about me start */}
      <section className='aboutme-section container'>
        <div className='about-me-text'>
          <p className=' gray-text'>ABOUT ME</p>
          <h2 className=' black-text'>Hey, I'm Lee. Most folks know me as <span className='span-purple-text'>leerob</span> online.</h2>
        </div>

        <div className='text-container'>
          <p className='first-text opacity-text'>I'm currently the VP of Developer Experience at Vercel, where I lead our Developer Relations and Documentation teams. I focus on educating and growing the Vercel and Next.js communities.</p>
          <p className='second-text opacity-text'>I love building for the web. From something as simple as a single HTML file–all the way to large Next.js applications. The web is incredible.</p>
        </div>
      </section>
      {/* about me end */}


      {/* my procces start */}
      <section className='engagement-section container'>
        <div className='engagement-card-left'>
          <h2 className='black-text'>My process of Engagement</h2>
          <p className='opacity-text'>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus. Aenean eu leo quam.</p>
        </div>

        <div className='engagement-cards-section'>

          <div className='engagement-card'>
            <img src={purpleLump} alt="" />
            <h3 className='black-text'>Ideation</h3>
            <p className='opacity-text'>We craft a plan aligned with your business objectives, submit a comprehensive proposal.</p>
          </div>

          <div className='engagement-card'>
            <img src={PencilCircle} alt="" />
            <h3 className='black-text'>Ideation</h3>
            <p className='opacity-text'>We craft a plan aligned with your business objectives, submit a comprehensive proposal.</p>
          </div>

          <div className='engagement-card'>
            <img src={BracketsCurly} alt="" />
            <h3 className='black-text'>Ideation</h3>
            <p className='opacity-text'>We craft a plan aligned with your business objectives, submit a comprehensive proposal.</p>
          </div>

          <div className='engagement-card'>
            <img src={rocket} alt="" />
            <h3 className='black-text'>Ideation</h3>
            <p className='opacity-text'>We craft a plan aligned with your business objectives, submit a comprehensive proposal.</p>
          </div>
        </div>
      </section>
      {/* my procces end */}


      {/* testimoniol start */}

      <section className='testimonial-section container'>
        <h2 className='testimonial-text'>TESTIMONIAL</h2>
        <div className='testimonial-container'>

          <div className='proud-of-results'>
            <h2 className=' black-text'>I am proud of <span className='span-purple-text'>my results</span></h2>
            <p className='opacity-text'>I bring solutions to make life easier for our customers</p>
          </div>

          <div className='achievements-container'>

            <div className='Achievement-card'>
              <h2 className='black-text'>236</h2>
              <p className='black-text'>awards one</p>
            </div>

            <div className='Achievement-card'>
              <h2 className='black-text'>200+</h2>
              <p className='black-text'>Completed Projects</p>
            </div>

            <div className='Achievement-card'>
              <h2 className='black-text'>10Y</h2>
              <p className='black-text'>Customer Satisfaction</p>
            </div>

          </div>

        </div>


        <div className='testimonial-box-section container'>
          {/* card-1 */}
          <div className='testimonial-box'>
            <p className='opacity-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui dolores laborum, maiores harum a?</p>

            <h3>Lorem, ipsum.</h3>
            <p className='opacity-text'>Lorem, ipsum.</p>
          </div>

          <div className='testimonial-box'>
            <p className='opacity-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui dolores laborum, maiores harum a?</p>

            <h3>Lorem, ipsum.</h3>
            <p className='opacity-text'>Lorem, ipsum.</p>
          </div>

          <div className='testimonial-box'>
            <p className='opacity-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui dolores laborum, maiores harum a?</p>

            <h3>Lorem, ipsum.</h3>
            <p className='opacity-text'>Lorem, ipsum.</p>
          </div>

          <div className='testimonial-box'>
            <p className='opacity-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui dolores laborum, maiores harum a?</p>

            <h3>Lorem, ipsum.</h3>
            <p className='opacity-text'>Lorem, ipsum.</p>
          </div>
        </div>
      </section>

      {/* testimoniol end */}



      {/* Contacts start */}

      <section className='contacts'>

        <div className='contacts-container container'>

          <div className='send-contacts'>
            <h3 className='black-text'>Interested in working together? Let’s talk. Just Say Hi!</h3>

            <div className='input-container your-name-input'>
              <label className='opacity-text' htmlFor="">What’s your name</label>
              <input placeholder='Name' type="text" />
            </div>

            <div className='input-container your-email-input'>
              <label className='opacity-text' htmlFor="">Email Address</label>
              <input placeholder='Email' type="email" />
            </div>

            <div className='input-container your-describe-input'>
              <label className='opacity-text' htmlFor="">Describe your project</label>
              <textarea placeholder='Write the infotmation about your project.' name="" id="" rows={4}></textarea>
              <button className='btn-purple'>Contact me</button>
            </div>

          </div>



          <div className='main-contacts'>
            <img className='main-contacts-avatar-img' src={ProfileImg} alt="" />

            <div className='contacts-avatar-name'>
              <h3 className='black-text'>John Carter</h3>
              <p className='opacity-text'>Head of Engineering at Google</p>
            </div>

            {/* ------------------------- */}

            <div className='contacts-location contacts-card'>
              <FaLocationDot className='opacity-text' />

              <div className='contacts-content '>
                <p className='contacts-black-text'>Address</p>
                <p className='opacity-text'>1802 Ruckman RoadOklahoma City, OK 73116</p>
              </div>
            </div>


            <div className='contacts-number contacts-card' >
              <FaPhoneAlt className='opacity-text' />


              <div className='contacts-content '>
                <p className='contacts-black-text'>Phone</p>
                <p className='opacity-text'>00 (123) 456 78 90 00 (987) 654 32 10</p>
              </div>
            </div>



            <div className='contacts-email contacts-card'>
              <MdOutlineMarkEmailRead className='opacity-text' />


              <div className='W '>
                <p className='contacts-black-text'>E-mail:</p>
                <p className='opacity-text'>blocktheme@example.com helloteam@example.com</p>
              </div>
            </div>


            <div className='contact-apps-container'>

              <a href=""><FaInstagram /></a>
              <a href=""><FaTwitter /></a>
              <a href="https://www.youtube.com/"><FaYoutube /></a>
              <a href=""><FaLinkedin /></a>

            </div>

          </div>

        </div>
      </section>
      {/* Contacts end */}


      <footer>

        {/* info start */}
        <section className='information'>
          <div className='information-container container'>

            <div className='info-card'>
              <h2 className='black-text'>Service</h2>
              <ul>
                <li><a href="">Web App Development</a></li>
                <li><a href="">Front End Development</a></li>
                <li><a href="">MVP Development</a></li>
                <li><a href="">MVP Development</a></li>
                <li><a href="">Digital Marketing</a></li>
              </ul>
            </div>

            <div className='info-card'>
              <h2 className='black-text'>About us</h2>
              <ul>
                <li><a href="">Case studies</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Career</a></li>
              </ul>

            </div>

            <div className='info-card'>
              <h2 className='black-text'>Technology</h2>
              <ul>
                <li><a href="">Next-js</a></li>
                <li><a href="">Sanity</a></li>
                <li><a href="">Content ful</a></li>
                <li><a href="">Vercel</a></li>
                <li><a href="">Netlify</a></li>
              </ul>

            </div>

            <div className='info-card'>
              <h2 className='black-text'>Locations</h2>

              <ul>
                <li><a href="#">India</a></li>
                <li><a href="#">Australia</a></li>
                <li><a href="#">Brazil</a></li>
                <li><a href="#">Canada</a></li>
              </ul>

            </div>

            <div className='info-card'>
              <h2 className='black-text'>Headquarters</h2>
              <p className='info-card-p'>Codescandy, 412, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India 560025</p>
            </div>

          </div>
        </section>
        {/* info end */}


        {/* footer end start */}

        <section className='footer-end-section'>


          <div className='footer-end-container container'>
            <img src={NavbarLogo} alt="" />
            <p>Copyright © 2024 <span className='span-purple-text'> Block Bootstrap 5 Theme</span> | Designed by <span className='span-purple-text'> CodesCandy</span></p>


            <div className='contact-apps-container'>
              <a href=""><FaInstagram /></a>
              <a href=""><FaTwitter /></a>
              <a href="https://www.youtube.com/"><FaYoutube /></a>
              <a href=""><FaLinkedin /></a>
            </div>
          </div>

        </section>

        {/* footer-end end */}


      </footer>
    </>
  )
}

export default App
