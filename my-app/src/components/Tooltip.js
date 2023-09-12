import React, { Component } from "react";
import "../tooltip.css";
// import css file in react 

export default class Tooltip extends Component {

    // create state for this constructor class
    constructor() {
        super();
        this.state = {
            direction: "my-tooltiptext t-top",
            content: "Hover Content",
        };
    }

    // function change values data change 
    hanldeTooltip = () => {
        // setting content
        this.setState({
            content: this.props.content,
        });

        // set direction acc. to direction

        if (this.props.direction === "top") {
            this.setState({
                direction: "my-tooltiptext t-top",
            });
        } else if (this.props.direction === "right") {
            this.setState({
                direction: "my-tooltiptext t-right",
            });
        } else if (this.props.direction === "left") {
            this.setState({
                direction: "my-tooltiptext t-left",
            });
        } else {
            this.setState({
                direction: "my-tooltiptext t-bottom",
            });
        }
    };

    render() {
        return (

            // using div binding component for tooltip
            <div className="my-tooltip" onMouseEnter={this.hanldeTooltip}>
                {/* span for tooltip text */}
                <span className={this.state.direction}>{this.state.content}</span>
                {/* component fetching data from where is called */}
                {this.props.children}
            </div>
        );
    }
}