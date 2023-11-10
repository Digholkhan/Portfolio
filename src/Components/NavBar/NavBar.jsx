import React, { useState } from 'react'
import Flex from '../Flex'
import Container from '../Container'
import logo from '../../assets/react.svg'
import List from '../List'
import ListItem from '../ListItem'
import Button from '../Button'
import '../../App.css'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'



const Navbar = () => {
  const [show,setShow] = useState(false);
  const handleClick = () => {
    setShow (!show);
  }
  return (
    <div className='absolute w-full z-10 py-4 lg:py-10'>
       <Container>
       <Flex className=''>
            <div className='w-3/12 flex items-center gap-x-2'>
                <img src={logo} className="App-logo w-14 h-14"/>
                <p className='text-white text-4xl font-D-font drop-shadow-3xl'>Dighol</p>
            </div>
            <Flex className='justify-center w-9/12 items-center overflow-y-hidden'>
            <div onClick={handleClick} className='absolute right-4 '>
              {
                show == true ? <RxCross2 className='text-white'/> : <FaBars className="lg:hidden text-white "/> 
              }
            </div>
              <nav className=''>
              <List className={`z-[999] bg-black bg-opacity-95 w-full text-center  lg:bg-transparent lg:flex  gap-x-8 text-lg font-bold text-white absolute lg:static duration-300  lg:gap-x-10  ${show ? 'top-20 left-0': '-top-60 left-0'}`}>
                <NavLink to='/'>
                <ListItem ItemName='Home' className='hover:bg-primary hover:text-white  py-2.5 lg:hover:bg-transparent lg:after:content-[" "] lg:after:absolute relative lg:after:bottom-0 lg:after:left-0 lg:after:border-b-4 lg:after:border-white lg:after:w-0  lg:hover:after:w-full hover:after:duration-300 lg:pb-1.5 lg:hover:text-sec duration-300'/>
                </NavLink>

                <NavLink to='/About'>
                <ListItem ItemName='About Me' className='hover:bg-primary hover:text-white py-2.5 lg:hover:bg-transparent lg:after:content-[" "] lg:after:absolute relative lg:after:bottom-0 lg:after:left-0 lg:after:border-b-4 lg:after:border-white lg:after:w-0  lg:hover:after:w-full hover:after:duration-300 lg:pb-1.5 lg:hover:text-sec duration-300'/>
                </NavLink>
                <NavLink to='/projects'>
                <ListItem ItemName='Projects' className='hover:bg-primary hover:text-white py-2.5 lg:hover:bg-transparent lg:after:content-[" "] lg:after:absolute relative lg:after:bottom-0 lg:after:left-0 lg:after:border-b-4 lg:after:border-white lg:after:w-0  lg:hover:after:w-full hover:after:duration-300 lg:pb-1.5 lg:hover:text-sec duration-300'/>
                </NavLink>  
                <NavLink to='/MySkills'>
                <ListItem ItemName='My Skills' className='hover:bg-primary hover:text-white py-2.5 lg:hover:bg-transparent lg:after:content-[" "] lg:after:absolute relative lg:after:bottom-0 lg:after:left-0 lg:after:border-b-4 lg:after:border-white lg:after:w-0  lg:hover:after:w-full hover:after:duration-300 lg:pb-1.5 lg:hover:text-sec duration-300'/>
                </NavLink>  
                <NavLink to='/Contact'>
                <ListItem ItemName='Contact' className='hover:bg-primary hover:text-white py-2.5 lg:hover:bg-transparent lg:after:content-[" "] lg:after:absolute relative lg:after:bottom-0 lg:after:left-0 lg:after:border-b-4 lg:after:border-white lg:after:w-0  lg:hover:after:w-full hover:after:duration-300 lg:pb-1.5 lg:hover:text-sec duration-300'/>
                </NavLink>
                
               
              </List>
              </nav>
            </Flex>
            <div className='w-1/5 flex justify-end'>
            <Button />
            </div>
         </Flex>
       </Container>
    </div>
  )
}

export default Navbar