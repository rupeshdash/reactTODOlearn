//react snippets
//rcc
import React, { Component } from 'react'
import InputContainer from './InputContainer';
import TaskList from './TaskList';

export default class Todo extends Component {

    state = {
        taskList: []
    }
    deleteTask = (id) => {
        // current - rest of the task 
        let filteredtasks = this.state.taskList.filter(function (task) { return task.id !== id; })
        this.setState({
            taskList: filteredtasks
        });
    }
    addTask = (currTask) => {
        // let currTask = this.state.currTask;
        // let tempArr = [];
        // for (let i = 0; i < this.state.taskList.length; i++) {
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);
        let tempArr = [...this.state.taskList, 
            { task: currTask, id: this.state.taskList.length }]
        this.setState({
            taskList: tempArr 
        })
    }
    render() {
        return (
            <div>
                {/* passing props to children component */}
    <InputContainer addTask={this.addTask}></InputContainer>
<TaskList taskList={this.state.taskList} deleteTask={this.deleteTask}>
    
</TaskList>
            </div>
        )
    }
}
