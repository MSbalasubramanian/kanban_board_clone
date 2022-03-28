
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Home></Home>
      <Sidebar></Sidebar>
    </Container>
  );
}

export default App;


const Container = styled.section`
  display : grid;
  grid-template-columns: 5rem calc(100vw - 5rem);
  grid-template-rows:100vh ;

  & nav {
    grid-column:1/2;
    grid-row:1/-1;
   background-color: #15334b;

  }

  & section {
    grid-column:2/-1;
    grid-row:1/-1;
    background-color: #EDEDF8;
  }

`;


