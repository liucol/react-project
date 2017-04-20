/**
 * Created by yangliu on 2017/4/19.
 */
import React, {Component} from 'react';
import './TodoItem.css'

export default class TodoItem extends Component {
    render() {
        return (
           <div className="TodoItem">
                <input type="checkbox" checked={this.props.todo.status === 'completed'}
                       onChange={this.toggle.bind(this)}/>
                <span className="title">{this.props.todo.title}</span>
                <div className="delet" onClick={this.delete.bind(this)}>删除</div>
            </div>
        )

    }

    toggle(e) {
        this.props.onToggle(e, this.props.todo)
    }

    delete(e) {
        this.props.onDelete(e, this.props.todo)
    }
}