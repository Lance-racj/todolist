import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './Header.css'

export default class Header extends Component {

    // 对传入的props进行类型以及必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    // 初始化状态，输入框里面的值
    state = {value:''};

    // 按下回车获取数据到状态里
    hander=(event)=>{
        // 回车键为13
        if(event.keyCode === 13){
            // 去掉空格后输入不能为空
            if(event.target.value.trim()===''){
                alert('输入不能为空');
            }
            else{
                let todo = {id:nanoid(),name:event.target.value,done:false}
                // 调用App组件的方法，更改它里面的状态（事情列表）
                this.props.addTodo(todo);
            }
            // 每次提交后，输入框里面的值都会清空
            event.target.value = null;
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.hander} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
