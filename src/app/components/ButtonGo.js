import React from 'react'

export default class ButtonGo extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.props.onClick}>Go</button>
            </div>
        );
    }
}