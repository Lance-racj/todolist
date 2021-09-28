import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Item.css'

export default class Item extends Component {

    // 初始化状态，鼠标状态
    state={leaveorenter:false};

    // 鼠标离开
    leave=()=>{
        this.setState({leaveorenter:false});
    }

    // 鼠标移入
    enter=()=>{
        this.setState({leaveorenter:true});
    }

    // 改变这件事的完成状态，调用了App组件传入的方法
    change=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked);
        }
    }
    
    // 删除事情(不使用delete是因为delete是个关键字，如果想传给其他组件就会出错)
    deleteit=(id)=>{
        return ()=>{
            if(window.confirm('Are you sure?')===true){
                this.props.deleteTodo(id);
            }
        }
    }

    render() {
        const {id,name,done} = this.props;
        return (
            <div>
                <li style={{backgroundColor:this.state.leaveorenter?'#ddd':'#fff'}} onMouseEnter={this.enter} onMouseLeave={this.leave}>
                    <label>
                        {/* defaultChecked表示一上来默认的选择值 */}
                        <input type="checkbox" checked={done} onChange={this.change(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={this.deleteit(id)} className="btn btn-danger" style={{display:this.state.leaveorenter?'block':'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
