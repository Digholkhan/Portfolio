import React from 'react'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import MySkills from '../Components/MySkills/MySkills'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
   
      <Banner></Banner>
      <About></About>
      <MySkills></MySkills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Home