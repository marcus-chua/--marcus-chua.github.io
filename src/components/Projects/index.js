import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Work</Title>
        <Desc>
          I write a little! Check out some of my pieces below:
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Case Studies' ?
            <ToggleButton active value="web app" onClick={() => setToggle('Case Study')}>Case Studies</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('Case Study')}>Case Studies</ToggleButton>
          }
          <Divider />
          {toggle === 'Essays' ?
            <ToggleButton active value="Essays" onClick={() => setToggle('Essay')}>Essays</ToggleButton>
            :
            <ToggleButton value="Essays" onClick={() => setToggle('Essay')}>Essays</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('Research')}>Research</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('Research')}>Research</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects