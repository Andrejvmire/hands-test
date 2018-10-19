import React from 'react'

export default class InputColor extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="rigthDownConor" className="sr-only">{this.props.data.header}</label>
                <div className="input-group mb-3 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">#</div>
                    </div>
                    <input id="rigthDownConor" className="form-control" placeholder="rrggbb" defaultValue={this.props.data.color} required />
                </div>
            </div>
        );
    }
}