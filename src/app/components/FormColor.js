import React from 'react'
import Helmet from 'react-helmet'
import FormHeader from './FormHeader'
import InputColor from './InputColor'
import ButtonGo from './ButtonGo'

let input_type = {
    "left": {
        "id": "left",
        "header": "Цвет слева",
        "color": ""
    },
    "right": {
        "id": "right",
        "header": "Цвет справа",
        "color": ""
    }
};


export default class FormColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "left": input_type.left.color,
            "right": input_type.right.color
        };
        this.confirm_color = this.confirm_color.bind(this);
        this.change_color = this.change_color.bind(this);
    }

    render() {
        return (
            <form className="form-palette">
                <Helmet
                    style={[{
                        "cssText": `
                            body {
                                background: -webkit-linear-gradient(left, #${this.state.left} 50%, #${this.state.right} 50%);
                                background: -o-linear-gradient(left, #${this.state.left} 50%, #${this.state.right} 50%);
                                background: -moz-linear-gradient(left, #${this.state.left} 50%, #${this.state.right} 50%);
                            }
                        `
                    }]}
                />
                <FormHeader/>
                <InputColor data={input_type.left} onkeyup={this.change_color}/>
                <InputColor data={input_type.right} onkeyup={this.change_color}/>
                <ButtonGo onClick={this.confirm_color}/>
            </form>
        );
    }

    change_color(e) {
        let reg = /^[0-9A-F]{6}$/i;
        let value = e.target.value;
        let id = e.target.id;
        if (reg.test(value)) {
            input_type[id].color = value;
        } else {
            input_type[id].color = this.state[id];
        }
    }

    confirm_color(e) {
        e.preventDefault();
        this.setState({
            "left": input_type.left.color,
            "right": input_type.right.color
        });
    }
}