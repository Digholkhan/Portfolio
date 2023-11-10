import React from 'react';
import Container from '../Container'
import Particle from '../Particle';
import Flex from '../Flex';
import TypeWriter from '../TypeWriter';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import Button from '../Button';
import { Link } from 'react-router-dom';


const Banner = () => {


  return (
    <>
    <div className='relative bg-BannerImg bg-cover lg:h-screen bg-center'>
    <div className=''><Particle/></div>
        <Container>
            <Flex>
            <div className='w-80 lg:w-[550px] py-24 lg:py-48 relative'>
                <p className='text-sec font-bold text-sm lg:text-xl font-yellowtail'>Hi, I'm</p>
                <h1 className='text-3xl lg:text-6xl font-bold text-white py-2'>Dighol khan</h1>
                <h2 className='text-xl lg:text-3xl font-bold pb-2 lg:py-2'><span className='text-white '>I'm a </span><TypeWriter className='text-primary inline-block'/></h2>
                <p className=' text-white text-xs lg:text-lg text-justify'>I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with good knowledge and proficiency HTML, CSS, Bootstrap,Tailwind CSS, Javascript, React Js, Vite Js and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.</p>
                <Flex className='gap-x-4 py-3'>
                  <a href="https://github.com/Digholkhan"> <AiFillGithub className='text-white text-2xl lg:text-4xl hover:scale-110  hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://www.linkedin.com/in/dighol-khan-25675b245/"><AiFillLinkedin className='text-white text-2xl lg:text-4xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://wa.me/qr/5FEIT3T6EKBAA1"><IoLogoWhatsapp className='text-white text-2xl lg:text-4xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://www.facebook.com/Dighol.00imi"><BiLogoFacebookCircle className='text-white text-2xl lg:text-4xl hover:scale-110  hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                  <a href="https://www.instagram.com/dighol_khan/"><AiFillInstagram className='text-white text-2xl lg:text-4xl hover:scale-110 hover:drop-shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>
                </Flex>
              <Link to='/contact'><Button  BtnName='Hire Me 'className='mt-4 lg:mt-8 px-[20px] lg:px-[40px] py-[6px] lg:py-[12px] text-xs lg:text-lg text-primary font-bold rounded-[5px] lg:rounded-[10px] border lg:border-2 border-primary hover:scale-[.98] hover:shadow-none shadow-[2px_02px_3px_rgba(0,149,180)] lg:shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></Link>
              <a href="https://drive.google.com/file/d/1IFGhqCIoc4ydOYyQ91yQ19OX0WWoc2-L/view?usp=sharing"><Button BtnName='My Resume' className='ml-2 lg:ml-6 lg:mt-8 px-[20px] lg:px-[40px] py-[6px] lg:py-[12px] text-xs lg:text-lg text-primary font-bold rounded-[5px] lg:rounded-[10px] border lg:border-2 border-primary hover:scale-[.98] hover:shadow-none shadow-[2px_02px_3px_rgba(0,149,180)] lg:shadow-[2px_04px_5px_rgba(0,149,180)] duration-200 ease-linear'/></a>

            </div>
            </Flex>
            
        </Container>
    </div>
    </>
  )
}

export default Banner