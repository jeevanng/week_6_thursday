import {Component} from "react";

export default class BusinessCardForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email
        }
    }

    render(){
        return(
            <form>
                {/* htmlFor instead of for */}
                <label htmlFor="nameInput">Name:</label>
                <input type="text" name="nameInput" id="nameInput" />
            </form>
        )
    }
}