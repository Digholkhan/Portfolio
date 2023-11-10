import React from 'react'
import ProgressBars from '../ProgressBars/ProgressBars'
import SkillItems from './SkillItems'
import Img from '../../assets/profile.gif'
import Heading from '../Heading'
import Particle from '../Particle'

const MySkills = () => {
  return (
    <div className='py-10 lg:py-20 bg-black'>
      <div>
        <Heading Headerp1='My' Headerp2='Skills'></Heading>
      </div>
      <ProgressBars className='relative pb-20'/>
      <SkillItems></SkillItems>  
    </div>
  )
}

export default MySkills