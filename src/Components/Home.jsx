import React ,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { VscAccount } from 'react-icons/vsc'
import { BsBriefcase } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosGlobe } from 'react-icons/io'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsFunnel } from 'react-icons/bs'
import { BsUpload } from 'react-icons/bs'
import { HiOutlinePlus } from 'react-icons/hi'
import { GoGift } from 'react-icons/go'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import { MdOutlineSignalWifiOff } from 'react-icons/md';
import { IconContext } from 'react-icons';


import { DragDropContext, Droppable ,Draggable} from 'react-beautiful-dnd';


import { Offline, Online } from 'react-detect-offline';
import axios from "axios";


const Home = () => {

  const [list, setList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const coln = [
    {id:'1', name: 'Open'},
    {id:'2', name: 'Contacted'},
    {id:'3', name: 'Written Test'},
    {id:'4', name: 'Technical Round'},
    {id:'5', name: 'Culture Fit Round'}
  ];
 
  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=5");
        setList(response.data.results);
      } catch (err) {
        console.log(err)
      }
    }
    getProductData();
  },[])


  const onChangeHandler = e => {
    setSearchVal(e.target.value);
  }
  
  
  const onDragEng = (result) => {
    //
  }

  return (
    <Container>
      <Header>
        <Logo>
          <IconContext.Provider value={{ color: "#6E56C9" }}>
            <VscAccount></VscAccount>
          </IconContext.Provider>
          <p>iamneo.ai Talent Center</p>
        </Logo>
        <SearchItems>
          <IconContext.Provider value={{ color: "#193f5b" }}>
            <AiOutlineSearch></AiOutlineSearch>
            </IconContext.Provider>
          <SearchField
            placeholder='Search'
            type="text"
            onChange={onChangeHandler}
          ></SearchField>
          <AddNew>
            <IconContext.Provider value={{ color: "#fff" }}>
            <HiOutlinePlus></HiOutlinePlus></IconContext.Provider>
            <a href="#">Add New</a>
          </AddNew>
          <GiftBox>
            <IconContext.Provider value={{ color: "#949494e3" }}>
            <GoGift></GoGift></IconContext.Provider>
            <span>1</span>
          </GiftBox>
          <Profile src='https://images.pexels.com/photos/11567527/pexels-photo-11567527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></Profile>
        </SearchItems>
      </Header>
      <Board>
        <BreadCrumbs>
          <Crumbs>
            <Jobs>
              <BsBriefcase></BsBriefcase>
              <a href="#">jobs</a>
            </Jobs>
            <Wrap>
              <IoIosArrowForward></IoIosArrowForward>
            </Wrap>
            <a href="#">Full-stack Engineer</a>
            <Badge>View Job Details</Badge>
          </Crumbs>
          <CTA>
            <BadgeDrop>
              <a href="#">Add Candidate</a>
              <IoIosArrowDown></IoIosArrowDown>
            </BadgeDrop>
            <Published>
              <IconContext.Provider value={{ color: "#fff" }}>
              <IoIosGlobe></IoIosGlobe>
              <a href="#">Published</a>
                <IoIosArrowDown></IoIosArrowDown>
              </IconContext.Provider>
            </Published>
          </CTA>
        </BreadCrumbs>
        <Actions>
          <ListBox>             
            <Candidates>
              <IconContext.Provider value={{ color: "#949494f8" }}>
              <span>All Candidates -</span>
              <a href="#">Active (48)</a>
              <IoIosArrowDown></IoIosArrowDown>
            </IconContext.Provider>
            </Candidates>
            <SortBy>
               <span>Sort by</span>
              <a href="#">Last Updated </a>
              <IconContext.Provider value={{ color: "#193f5b" }}>
                <IoIosArrowDown></IoIosArrowDown>
                </IconContext.Provider>
            </SortBy>
          </ListBox>
          <Filter>
            <IconContext.Provider value={{ color: "##225b83" }}>
            <AiOutlineUnorderedList></AiOutlineUnorderedList>
            <BsFunnel></BsFunnel>
              <BsUpload></BsUpload>
              </IconContext.Provider>
          </Filter>
        </Actions>
        <Online>
          <DragDropContext onDragEnd={onDragEng}>
            <Droppable droppableId={`dropIN-${(list.length) + 1}`} >
              {(provided) => {
                return( 
                <DropDown
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                > {/*DrapDraopContext wrap below*/}
                

              {
                coln.map((col, inx) => (
                   <DDWrapper>{/*Droppable wrap below*/}
                  <Draggable key={inx} draggableId={(inx + 1).toString()} index={inx + 1}>
                    {(provided) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                       
                          <HeadCard  className={`hc-${inx + 1}`} key={inx}>
                            <h1>{col['name']}- </h1>
                            <p>{list.length}</p> {/*No. of list in col*/}
                          </HeadCard>

                          {
                            list
                              .filter((val) => {
                                if (searchVal == "") {
                                  
                                  return val
                                }
                                else if (val.email.toLowerCase().includes(searchVal.toLowerCase())) { 
                                  
                                  return val;
                                }
                              }).map((li,inx) => {
                                return (
                                  <BodyCard key={li.login.uuid}  >
                                    <Up className={`bc-${inx + 1}`}>
                                      <h3>{li.name.title}.{li.name.first} {li.name.last} </h3>
                                      <p>{ li.email}</p>
                                    </Up>
                                    <Down>
                                      <IconContext.Provider value={{ color: "#15334b" }}>
                                        <StarWrap>                        
                                          <AiOutlineStar></AiOutlineStar>
                                          <AiOutlineStar></AiOutlineStar>
                                          <AiOutlineStar></AiOutlineStar>
                                          <AiOutlineStar></AiOutlineStar>
                                          <AiOutlineStar></AiOutlineStar>
                                        </StarWrap>   
                                        <ProfileWrap>
                                            <ProfileImage src={li.picture.large}></ProfileImage>
                                            <HiDotsVertical></HiDotsVertical>
                                        </ProfileWrap>
                                      </IconContext.Provider>
                                    </Down>
                                  </BodyCard>
                                )

                              })
                          }
              
                        
                      </div>
                      )
                    }}

                    </Draggable> 
                    </DDWrapper>
              ))
            }
           
            
         
         {provided.placeholder}
        </DropDown>)               
              }}
            </Droppable>
            </DragDropContext>
         </Online>
      </Board>
      
      <Offline>
        <Model>
          <IconContext.Provider value={{ color: "#15334b" }}>
              <MdOutlineSignalWifiOff></MdOutlineSignalWifiOff></IconContext.Provider>
              <p>You're offline right now. Check your connection.</p>
            </Model>
        </Offline>
      
      <Footer>
        <p>HR Software by Freshworks <span>|</span> Knowledge Base</p>
      </Footer>
    </Container>
  );
};


export default Home;

const Model = styled.div`
background-color: #ffffffbd;
  position:absolute;
  width:calc(100vw / 5);
  height:calc(100vh / 5);
  top:48%;
  left:48%;
  padding:2rem;
  display: flex;
  flex-direction:column ;
  justify-content:space-evenly ;
  align-items:center ;
  border-radius:.5rem;
  transition:all 250ms ease-in-out ;
  & > svg {    
    width:4rem;
    height:4rem;
    
  }

  & > p {    
    font-size: 2rem;
    color:#193f5b ;
  }
   &:hover {
    background-color: #f7f7f757;
    box-shadow: 6px 6px 12px -1px #52525233;
  }

`;

const Container = styled.section`
  display :grid;
  grid-template-rows: 5rem 1fr  ;
`;


const Header = styled.header`
  background-color: #FFFFFE;
  grid-column: 1/-1;
  grid-row:1/2;
  display: flex;
  align-items:center ;
  justify-content:space-between ;

`;

const Logo = styled.div`
  
  display:flex;
  align-items: center;
  margin:0 0 0 2rem;
  
  & svg {
    width:3.2rem;
    height:3.2rem ;
    cursor: pointer;

    &+p {
    padding:0 0 0 1.5rem;
    font-size:1.9rem ;
    color:#193f5b;
    }
  }

`;

const SearchItems = styled.div`
  margin:0 2rem 0 0;
  padding: 2rem;
  display: flex;
  align-items:center ;

  & > svg {
    width:1.8rem;
    height:1.8rem;
    margin: 0 .5rem 0 0;
  }
  
`;

const SearchField = styled.input`
  margin: 0 4rem 0 0;
  border:none;
  height:calc(5rem / 1.8);
  transition:all 250ms ease-in-out ;
  

  &:focus {
    outline:none;
    border-bottom : 1.8px solid #193f5b;
    
  }
`;

const AddNew = styled.div`
background-color: #193f5b;
  padding: .5rem 2rem;
  display: flex;
  justify-content:space-between ;
  align-items:center ;
  font-size : 1.3rem;
  border-radius:2px ;
  cursor: pointer;
  & > a {
    margin: 0 0 0 .8rem;
    color:white;
  }
   &:hover {
    background-color: #225b83;
    box-shadow: 3px 3px 6px -3px #303030b2;
  }
`;

const GiftBox = styled.div`
   padding: 0 1.62rem;
  align-self: flex-end;
  position:relative ;
  
  & > svg {
    width:2.8rem;
    height:2.8rem;
    margin: 0 .5rem ;
    cursor: pointer;
  }
  & > span { 
    text-align :center;
    color:white;
    width:15px;
    height:15px;  
    background-color: #FF5555;
    border-radius:50% ;
    position:absolute ;
    top:-6px;
    bottom:0;
    right:0;
    left:45px;
  }
`;

const Profile = styled.img`
  width:30px;
  height:30px;
  object-fit:cover ;
  border-radius:50%;
  cursor: pointer;
  margin: 0 0 0 1.4rem;
`;



const BreadCrumbs = styled.div`
  background-color: #fff;
  display: flex;
  align-items:center ;
  justify-content:space-between ;
  padding: 0 2rem;
  font-size:1.39rem ;
  padding: 1rem .9rem;
`;

const Crumbs = styled.div`
  
  display: flex;
  justify-content:center ;
  align-items:center ;
  color:#193f5b;
`;

const Jobs = styled.div`
  
  display: flex;
  justify-content:center ;
  align-items:center ;
  margin: 0 .4rem 0 2.3rem;
  border-radius:2px;
  & svg {
    width:1.5rem;
    height:1.5rem;
    margin:0 .6rem 0 0;
    cursor: pointer;
  }
   
  & a {
    &:hover {
      color:#225b83;
    }
  }

`;
const Wrap = styled.div`
  display: flex;
  justify-content:center ;
  align-items:center ;
  margin: 0 .4rem 0 0 ;
  transition: all 280ms ease-in-out;
  & svg {
    width:1.6rem;
    height:1.6rem;
  }

  &+a {
    margin: 0 1.2rem 0 0 ;
    &:hover {
      color:#225b83;
    }
  }
`;
const Badge = styled.a`
  border: 1.25px solid #8fabc188;
  cursor:pointer;
  padding:.135rem;
  border-radius:2px;

  &:hover {
    border-color:#193f5b;
    color:#3d3f41d9;
  }

`;

const CTA = styled.div`
  display: flex;
  justify-content:center ;
  align-items:center ;
`;

const BadgeDrop = styled.div`
  margin:0 2rem 0 0;
  border: 1.25px solid #8fabc188;
  cursor:pointer;
  padding:.125rem;
  border-radius:2px;
  display: flex;
  justify-content:center ;
  align-items:center ;
  padding:.5rem;
  transition: all 250ms ease-in-out;
  & > a {
    margin :0 .8rem 0 0;
    padding:0 .4rem 0 0;
    border-right:1.25px solid #8fabc188;
  }

  &:hover {
    border-color:#193f5b;

  }

`;

const Published = styled.div`
  border: 1.25px solid #8fabc188;
  display: flex;
  justify-content:center ;
  align-items:center;
  padding:.5rem;
  background-color: #193f5b;
  border-radius:2px;
  cursor:pointer;
  transition: all 250ms ease-in-out;
  
  & > svg{
   width:2rem;
   height:2rem;
  }

  & > a {
    margin:0 1rem  ;
    color:white;
  }

  &:hover {
    background-color: #225b83;
    box-shadow: 3px 3px 6px -3px #303030b2;
  }
`;

const Actions = styled.div`
background-color: #ECEFF2;

  font-size:1.39rem ;
  display:flex;
  justify-content:space-between ;
  align-items :center;
`;

const ListBox = styled.div`
  padding:1.13rem 0;
  display: flex;
  justify-content:space-between ;
  align-items: center;
  padding: 1rem 3rem;
  width:calc((100vw - 5rem)*0.55);
`;

const Candidates = styled.div`
  display: flex;
  justify-content: center;
  align-items:center ;
  & > span {
    color:#193f5b;
    font-size:1.44rem;
    margin: 0 1.5rem 0 0 ;

    & + a{
      color:#949494f8;
      margin: 0 .6rem 0 0;

      & + svg {
        cursor:pointer;
      }
    }

  }
`;

const SortBy = styled.div`
  display: flex;
  justify-content: center;
  align-items:center ;
  & > span {
    color:#949494f8;
    
    font-size:1.44rem;
    margin: 0 1.5rem 0 0 ;

    & + a{
      color:#193f5b;
      margin: 0 .6rem 0 0;
      & + svg {
        cursor:pointer;
      }
    }
  }
`;

const Filter = styled.div`
  width:calc(90vw - calc((100vw - 5rem)*0.55));
  display: flex;
  justify-content: flex-end;
  align-items:center;

   & > svg {
     cursor:pointer;
    width:1.83rem ;
    height: 1.83rem;
    margin:1.13rem 2.5rem 1.13rem 0 ;
   }
`;

const DropDown = styled.div`
  background-color: #eceff2c9;
  height:83vh;
  display: flex;
  align-items:center ;
  /* justify-content:space-between ; */
`;

const Footer = styled.footer`
  background-color: seashell;
  grid-column: 1/-1;
  grid-row:3/-1;
  color:#000000d9;
  text-align :center;  
  letter-spacing:0.1618rem;
  
    &  span {
    color:#FF5555 !important;
  
  }
`;
const Board = styled.main`

`;
const DDWrapper = styled.div`
  margin:2rem;
  height:100%; /* Important */
  /* width:calc(calc(100vw -  5rem) / 4); */


`;
const HeadCard = styled.div`
background-color: #fff;
width:100%;
margin:0 0 3rem 0;
font-size: 1.8rem;
display: flex;
justify-content:flex-start ;
align-items:center;
padding:1.3rem 1.5rem;

border-radius :2px;



& > h1{
  color:#15334b;
  font-weight:400 ;
}
& > p {
  margin:0 0 0 1.2rem;
  align-self:flex-end ;
}

`;
const BodyCard = styled.div`
padding:.82rem;
  cursor: pointer;
`;
const Up = styled.div`
font-size: 1.4rem;
  background-color: #fff;
  padding: 1rem 2rem;
  
  & > h3 {
    color:#15334b;
  }

  & > p {
    color:#225b83;
  }
  
`;

const Down = styled.div`
 background-color: #FCFDFC;
  padding:1rem 2rem;
  display: flex;
  justify-content:space-between ;
  align-items:center ;
`;

const StarWrap = styled.div`
display: flex;
justify-content: center;
align-items:center;
  & > svg {
     width:1.7rem;
    height:1.7rem;
    cursor: pointer;
    margin: .5rem .8rem .5rem 0;
  }
`;

const ProfileWrap = styled.div`
 display: flex;
  justify-content: space-between;
  align-items:center;

  & svg {
    width:1.6rem;
    height:1.6rem;
    cursor: pointer;
  }
`;

const ProfileImage = styled.img`
 margin: 0 1rem 0 0;
  width:30px;
  height:30px;
  object-fit:cover ;
  border-radius:50%;
  cursor: pointer;
   
  
`;


//looping code
