import React, { Component } from 'react'

import PropTypes from 'prop-types'

import './List.css'

import Item from '../Item/Item'

export default class List extends Component {

    // 对传入的props进行类型以及必要性的限制
    static propTypes = {
        updateTodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }

    render() {
        const {todos} = this.props;
        // console.log(this.props.todos);
        return (
            <ul className="todo-main">
                {
                    // 遍历todos列表，有多少项，就用Item组件渲染多少项
                    todos.map(todo=>{
                        return(<Item key={todo.id} {...todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>)
                    })
                }
            </ul>
        )
    }
}
