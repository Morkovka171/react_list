import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: this.props?.user?.first_name || "",
            last_name: this.props?.user?.last_name || "",
            email: this.props?.user?.email || "",
            age: this.props?.user?.age || null,
            isHappy: this.props?.user?.isHappy || false
        }
    }

    render() {
        return(
            <form ref={(el) => this.myForm = el} >
                <input placeholder="Имя" value={this.state.first_name} onChange={(e) =>this.setState({ first_name:e.target.value })} />
                <input placeholder="Фамилия" value={this.state.last_name} onChange={(e) =>this.setState({ last_name:e.target.value })} />
                <textarea placeholder="E-mail" value={this.state.email} onChange={(e) =>this.setState({ email:e.target.value })} ></textarea>
                <input placeholder="Возраст" value={this.state.age} onChange={(e) =>this.setState({ age:e.target.value })} />
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" checked={this.state.isHappy} onChange={(e) =>this.setState({ isHappy:e.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                        this.userAdd.avatar = this.props.user.avatar
                        // this.userAdd.isHappy = this.props.user.isHappy
                    }
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
    
}

export default AddUser