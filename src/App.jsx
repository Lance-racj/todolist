
import React, { Component } from 'react'

import Header from './Component/Header/Header'

import List from './Component/List/List'

import Footer from './Component/Footer/Footer'

import './App.css'

import {nanoid} from 'nanoid'

export default class App extends Component {

    // 初始化事情列表
    state={todos:[
        {id:nanoid(),name:'eat',done:true},
        {id:nanoid(),name:'sleep',done:false},
        {id:nanoid(),name:'play',done:true}
    ]};

    // 传给Header组件用，用来添加事请
    addTodo=(todo)=>{
        let {todos} = this.state;
        let newtodos = [todo,...todos];
        this.setState({todos:newtodos});
    }

    // 传给Item用，更新事情的完成情况，通过唯一id进行查找
    updateTodo=(id,done)=>{
        let {todos} = this.state;
        let newtodos = todos.map((todo)=>{
            if(todo.id === id){
                // 找到后更改它的完成状态
                return {...todo,done:done};
            }
            else{
                return todo;
            }
        })
        this.setState({todos:newtodos});
    }

    // 删除一件事情
    deleteTodo=(id)=>{
        let {todos} = this.state;
        let newtodos=todos.filter((todo)=>{
            if(todo.id!==id){
                return todo;
            }
            else{
                return null;
            }
        })
        this.setState({todos:newtodos});
    }

    // 全选或全不选 done为全选框此时的状态，让所有的事情都跟随它
    changeall=(done)=>{
        let {todos} = this.state;
        let newtodos = todos.map((todo)=>{
            return {...todo,done:done}
        })
        this.setState({todos:newtodos});

    }


    // 清除所有已完成任务
    clear=()=>{
        let {todos} = this.state;
        const donetodo = todos.filter((todo)=>{
            if(todo.done===true){
                return todo;
            }
            else{
                return null;
            }
        })
        if(todos.length===0||donetodo.length===0){
            alert('当前无已完成任务');
        }
        else{
            let newtodos=todos.filter((todo)=>{
                if(todo.done===true){
                    return null;
                }
                else{
                    return todo;
                }
            })
            this.setState({todos:newtodos});
        }
    }

    

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} clear={this.clear} changeall={this.changeall}/>
                </div>
            </div>
           
        )
    }
}
