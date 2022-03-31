
import React from 'react'
import styled from 'styled-components'
import { AiOutlineStar } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { Draggable } from 'react-beautiful-dnd';

function Task({task , index}) {
  return (
    <Draggable
      draggableId={task.id}
      index={index}
    >
      {
        (provided,snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging = {snapshot.isDragging}
          >        
           <BodyCard>
              <Up className={`bc-${index + 1}`}>
                <h3>{task.name}</h3>
                <p>{task.email}</p>
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
                      <ProfileImage src={task.pic}></ProfileImage>
                      <HiDotsVertical></HiDotsVertical>
                  </ProfileWrap>
                </IconContext.Provider>
              </Down>
            </BodyCard>
          </Container>
        )
      }
    </Draggable>
  )
}

const Container = styled.div`

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

export default Task;