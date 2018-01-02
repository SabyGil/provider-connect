import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Tasks extends Component {
  render(){
    const tasks = this.props.tasks.map((task, index) => <li key={index}>{task}</li>)
    return (
      <div>
        <ul>
          {tasks}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

// export default connect(mapStateToProps)(Tasks);
export const AllTasks = connect(mapStateToProps)(Tasks);

/*mapStateToProps turns state into a prop then Tasks is the class that
receieves it */
