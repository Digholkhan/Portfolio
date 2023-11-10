import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Project from '../../Components/Projects/Project'
import Heading from '../../Components/Heading'
import ecommerce from '../../assets/projects/Ecommerce.png'
import avada from '../../assets/projects/avada.png'
import finsweet from '../../assets/projects/Finsweet.png'
import PDFTool from '../../assets/projects/PDFTools.png'
import Innovate from '../../assets/projects/innovate.png'
import Qurier from '../../assets/projects/qurierbox.png'

const MyProjects = () => {
  return (
    <div className='bg-ProjectBg bg-cover bg-fixed relative after:absolute after:top-0 after:left-0  after:bg-black after:w-full after:h-full  after:opacity-90 pt-40 pb-64 '>
        <Container>
        <Heading Headerp1='My Projects' className='mb-10'/>
            <Flex className='flex-wrap gap-x-16 gap-y-10 justify-center relative z-10'>
             <div>
                <Project ImgSrc={ecommerce} PName='Orebi E commerce'/>
            </div> 
            <div>
                <Project ImgSrc={avada} PName='Avada Extreme Sports'/>
            </div>  
            <div>
                <Project ImgSrc={PDFTool} PName='PDF Tools'/>
            </div>    
            <div>
                <Project ImgSrc={finsweet} PName='Finsweet'/>
            </div>
            <div>
                <Project ImgSrc={Qurier} PName='Qurier Box'/>
            </div> 
            <div>
                <Project ImgSrc={Innovate} PName='Innovate'/>
            </div>
            <div>
                <Project ImgSrc={ecommerce} PName='Orebi E commerce'/>
            </div> 
            <div>
                <Project ImgSrc={avada} PName='Avada Extreme Sports'/>
            </div>  
            <div>
                <Project ImgSrc={PDFTool} PName='PDF Tools'/>
            </div>   
            </Flex>
        </Container>
    </div>
  )
}

export default MyProjects