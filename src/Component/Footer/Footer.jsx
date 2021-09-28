import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {


    changeall=(event)=>{
        this.props.changeall(event.target.checked);
    }

    clear=()=>{
        if(window.confirm('Are you sure?')===true){
            this.props.clear();
        }
    }

    render() {
        const {todos} = this.props;

        // 已完成的事情数量
        const donetodo = todos.filter((todo)=>{
            if(todo.done===true){
                return todo;
            }
            else{
                return null;
            }
        })

        

        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked={donetodo.length === todos.length && todos.length!==0 ?true:false} onChange={this.changeall}/>
                </label>
                <span>
                <span>已完成{donetodo.length}</span> / 全部{todos.length}
                </span>
                <button onClick={this.clear} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
