import styled from 'styled-components'
import {CgProfile} from 'react-icons/cg'
import {SiSpeedtest} from 'react-icons/si'
import {CgFileDocument} from 'react-icons/cg'
import {BsBriefcase} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {BiMessageAltDetail} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

import { IconContext } from 'react-icons'
const Sidebar = () => {
  const Iconclr = '#fff';
  return (
    <Container>
      <Top>
        <IconContext.Provider value={{ color: `${Iconclr}` }}>
          <a href="#"><CgProfile ></CgProfile></a>
          <a href="#"><SiSpeedtest></SiSpeedtest></a>
          <a href="#">
            <CgFileDocument></CgFileDocument>
          </a>
          <a href="#">
            <BsBriefcase></BsBriefcase>
          </a>
          <a href="#"><BsPeople></BsPeople></a>
          <a href="#"><FiSettings></FiSettings></a>  
        </IconContext.Provider>
      </Top>
      <Bottom>
        <IconContext.Provider value={{ color: `${Iconclr}` }}>
          <a href="#"><BsQuestionCircle></BsQuestionCircle></a>
          <a href="#"><BiMessageAltDetail></BiMessageAltDetail></a>        
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#cfdbb1" }}>
          <a href="#"><BsGrid3X3GapFill></BsGrid3X3GapFill></a>
          
        </IconContext.Provider>        
      </Bottom>
    </Container>
  );
}


export default Sidebar;


const Container = styled.nav`
`;

const Top = styled.div`
 height:50vh;
  display:flex;
  flex-direction: column;
  justify-content:flex-start ;
  align-items:center ;
  padding: 2rem 0 0 0;

  

  & svg {
    cursor: pointer;
    width: 2.5rem;
    height: 5rem;

  }
`;

const Bottom = styled.div`
 height:50vh;
  display:flex;
  flex-direction: column;
  justify-content:flex-end ;
  align-items:center ;
  padding: 0 0 2rem 0;
  & svg {
    cursor: pointer;
    width: 2.5rem;
    height: 5rem;
  }
`;