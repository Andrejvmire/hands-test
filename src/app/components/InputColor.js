import React from 'react'

export default class InputColor extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.data.id} className="sr-only">{this.props.data.header}</label>
                <div className="input-group mb-3 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">#</div>
                    </div>
                    <input id={this.props.data.id} className="form-control" placeholder="rrggbb" defaultValue={this.props.data.color} onKeyUp={this.props.onkeyup} required />
                </div>
            </div>
        );
    }
}