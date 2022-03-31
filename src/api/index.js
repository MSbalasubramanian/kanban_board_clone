const initialData = {

  tasks: {
    'task-1': { id: 'task-1', name: 'Mr.Brad Gibson', email: 'brad.gibson@example.com',pic : "https://randomuser.me/api/portraits/men/82.jpg" },
    'task-2': { id: 'task-2', name: 'Mrs.Erica Froshaug', email: 'erica.froshaug@example.com',pic : 'https://randomuser.me/api/portraits/women/29.jpg' },
    'task-3': { id: 'task-3', name: 'Mr.Mario Garza', email: 'mario.garza@example.com',pic : "https://randomuser.me/api/portraits/men/91.jpg" },
    'task-4': { id: 'task-4', name: 'Mr.Arno Kauer', email: 'arno.kauer@example.com',pic : "https://randomuser.me/api/portraits/men/12.jpg" },
    'task-5': { id: 'task-5', name: 'Ms.Maya Adam', email: 'maya.adam@example.com',pic : "https://randomuser.me/api/portraits/women/40.jpg" },
    
  },

  columns: {
    'column-1': {
      id: 'column-1',
      title: 'open',
      taskIds : ['task-1','task-2','task-3','task-4','task-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Contacted',
      taskIds : [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Written Test',
      taskIds : [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Technical Round',
      taskIds : [],
    },
    'column-5': {
      id: 'column-5',
      title: 'Culture Fit Round',
      taskIds : [],
    },

  },

  columnOrder:['column-1','column-2','column-3','column-4','column-5'],

  taskOrder:['task-1','task-2','task-3','task-4','task-5'],

};

export default initialData;