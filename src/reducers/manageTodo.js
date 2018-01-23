
let counter=0;
export default function manageTasks( state = {
  tasks: [],
}, action){
  switch (action.type) {

  case 'ADD_TASK':
    counter++;
    return Object.assign({}, state, {
      tasks: state.tasks.concat({task: action.task, id: counter })
    });

  case "DELETE_TODO":
     return Object.assign({}, state, {
       tasks: state.tasks.filter((task) => task.id !== action.id)
     });

    case 'UPDATE_TODO':
    return {
      ...state,
      tasks: state.tasks.map(todo => todo.id === action.id ? {  id: action.id, task: action.task } : todo )}

    default:
      return state;
  }
};
