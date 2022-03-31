import React from 'react'

import { Droppable,Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'
import Task from './Task';
function Column({column , tasks , index ,searchVal}) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {
        provided => (
          <DDWrapper
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <HeadCard className={`hc-${index + 1}`} key={index} {...provided.dragHandleProps}>
              <h1 >{column.title}</h1>
              <p>{index}</p>
            </HeadCard>
            <Droppable
              droppableId={column.id}
              type="task"
            >
              {
                (provided,snapshort) => (
                  
                    <TaskList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshort.isDraggingOver}
                    >
                    {tasks ?.filter((val) => {
                        if (searchVal == "") {
                          
                          return val
                        }
                        else if (val.email.toLowerCase().includes(searchVal.toLowerCase())) { 
                          
                          return val;
                        }
                      })
                      ?.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                      {provided.placeholder}
                    </TaskList>
                  
                )
              }
            </Droppable>
            
          </DDWrapper>
        )
      }
    </Draggable>
  )
}




const DDWrapper = styled.div`
  margin:2rem;
  min-height:78vh; /* Important */
  display:flex;
  flex-direction:column ;

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
const TaskList = styled.div`
  width:17vw; /* important */
  display: flex;
  flex-direction:column ;
  flex-grow:1;
  transition: background-color 250ms ease-in-out;
  background-color: ${props => props.isDraggingOver ? '#bdceda41' : '#eaebecda'};
`;
export default Column;