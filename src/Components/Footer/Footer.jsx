
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import logo from '../../assets/react.svg'
import List from '../List'
import ListItem from '../ListItem'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black relative z-20">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid  px-4 py-6 lg:py-8 md:grid-cols-4">
            <div className="flex justify-center md:flex-none md:justify-normal ">
              <div className="w-1/5  flex  items-center gap-x-2 col-span-1">
                <img src={logo} className="App-logo w-14 h-14" />
                <p className="text-white text-4xl font-D-font drop-shadow-3xl">
                  Dighol
                </p>
              </div>
            </div>
            <div className="text-center col-span-2">
              <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold uppercase text-white pt-4 md:pt-8">
                Thanks for visit
              </h2>
              <nav>
                <List className="flex justify-center gap-x-2.5 md:gap-x-4 text-sm md:text-lg md:font-bold text-white ">
                  <NavLink to="/">
                    <ListItem
                      ItemName="Home"
                      className='after:content-[" "] after:absolute relative after:bottom-0 after:left-0 after:border-b-4 after:border-white after:w-0  hover:after:w-full hover:after:duration-300 pb-1.5 hover:text-sec duration-300'
                    />
                  </NavLink>

                  <NavLink to="/About">
                    <ListItem
                      ItemName="About Me"
                      className='after:content-[" "] after:absolute relative after:bottom-0 after:left-0 after:border-b-4 after:border-white after:w-0  hover:after:w-full hover:after:duration-300 pb-1.5 hover:text-sec duration-300'
                    />
                  </NavLink>
                  <NavLink to="/projects">
                    <ListItem
                      ItemName="Projects"
                      className='after:content-[" "] after:absolute relative after:bottom-0 after:left-0 after:border-b-4 after:border-white after:w-0  hover:after:w-full hover:after:duration-300 pb-1.5 hover:text-sec duration-300'
                    />
                  </NavLink>
                  <NavLink to="/MySkills">
                    <ListItem
                      ItemName="My Skills"
                      className='after:content-[" "] after:absolute relative after:bottom-0 after:left-0 after:border-b-4 after:border-white after:w-0  hover:after:w-full hover:after:duration-300 pb-1.5 hover:text-sec duration-300'
                    />
                  </NavLink>
                  <NavLink to="/Contact">
                    <ListItem
                      ItemName="Contact"
                      className='after:content-[" "] after:absolute relative after:bottom-0 after:left-0 after:border-b-4 after:border-white after:w-0  hover:after:w-full hover:after:duration-300 pb-1.5 hover:text-sec duration-300'
                    />
                  </NavLink>
                </List>
              </nav>
            </div>

            <div className="col-span-2 md:col-span-1  md:pl-20 md:text-justify text-center  pt-5 md:pt-0">
              <ul className="text-gray-400 font-medium text-xs md:text-base">
                <h2 className="mb-2 md:mb-6 text-sm font-bold uppercase text-primary">
                  Contact
                </h2>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    01518683742 (whatsapp)
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Digholkhan@gmail.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mirpur Dhaka 1216
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 bg-gray-700 text-center md:text-justify md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-300 sm:text-center">
              © 2023{" "}
              <a href="#" className="text-primary font-bold">
                Dighol khan
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 justify-center md:mt-0">
              <a href="https://github.com/Digholkhan">
                {" "}
                <AiFillGithub className="text-white text-xl hover:scale-110  hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear" />
              </a>
              <a href="https://www.linkedin.com/in/dighol-khan-25675b245/">
                <AiFillLinkedin className="text-white text-xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear" />
              </a>
              <a href="https://wa.me/qr/5FEIT3T6EKBAA1">
                <IoLogoWhatsapp className="text-white text-xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563956560010">
                <BiLogoFacebookCircle className="text-white text-xl hover:scale-110  hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear" />
              </a>
              <a href="https://www.instagram.com/dighol_khan/">
                <AiFillInstagram className="text-white text-xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer