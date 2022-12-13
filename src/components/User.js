import React from "react"
import AddUser from "./AddUser";
import { IoCloseCircleSharp } from 'react-icons/io5'
import { AiFillEdit } from "react-icons/ai";


class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return(
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                <AiFillEdit onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon" />
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <img src={this.user.avatar} />
                <p>{this.user.email}</p>
                {this.user.age && <p>Возраст: {this.user.age}</p>}
                <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :(' }</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
    
}

export default User