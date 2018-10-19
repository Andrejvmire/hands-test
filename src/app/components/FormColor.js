import React from 'react'
import Helmet from 'react-helmet'
import FormHeader from './FormHeader'
import InputColor from './InputColor'
import ButtonGo from './ButtonGo'

let input_type = {
    "up": {
        "id": "leftSide",
        "header": "Цвет слева",
        "color": "555555"
    },
    "down": {
        "id": "rigthSide",
        "header": "Цвет справа",
        "color": "222222"
    }
};


export default class FormColor extends React.Component {
    render() {
        return (
            <form className="form-palette">
                <Helmet
                    style={[{
                        "cssText": `
                            body {
                                background: -webkit-linear-gradient(left, #${input_type.up.color} 50%, #${input_type.down.color} 50%);
                                background: -o-linear-gradient(left, #${input_type.up.color} 50%, #${input_type.down.color} 50%);
                                background: -moz-linear-gradient(left, #${input_type.up.color} 50%, #${input_type.down.color} 50%);
                            }
                        `
                    }]}
                />
                <FormHeader/>
                <InputColor data={input_type.up}/>
                <InputColor data={input_type.down}/>
                <ButtonGo/>
            </form>
        );
    }
}