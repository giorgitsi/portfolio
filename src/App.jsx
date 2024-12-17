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

    </>
  )
}

export default App
