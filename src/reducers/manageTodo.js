
export default function manageTasks( state = {
  tasks: [],
}, action){
  switch (action.type) {
    case 'ADD_TASK':
      return Object.assign({}, state, {
        users: state.tasks.concat(action.task)
      });
    default:
      return state;
  }
}
