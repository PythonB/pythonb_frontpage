import React from "react";
import Image from 'next/image'

export function Waypoint(props){
    return(
        <a id="waypoint" name={props.name}>&nbsp;</a>
    )
};

export class Screenshot extends React.Component {
    constructor(props){
        super(props);
        this.src = this.props.src;
        this.alt = this.props.alt;
        this.state = {expanded: false};
        this.toggleExpand = this.toggleExpand.bind(this);
    }
    toggleExpand(){
        this.state.expanded = !this.state.expanded;
        this.forceUpdate()
    }
    render(){
        return (
            <div id="expandable-screenshot" className={this.state.expanded ? "expanded" : "compact"}>
                <div id="image-wrapper">
                    <Image src={this.src} layout='fill' objectFit={this.state.expanded ? "contain" : "cover"}/>
                    <div id="expand-button" onClick={this.toggleExpand}>
                        <div id="text" className={this.state.expanded ? "expanded" : "compact"}>
                            <div id="icon"><Image src="/images/chevron_up.png" width="12pt" height="12pt"/></div> View full image
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export class StackBar extends React.Component {
    constructor(props){
        super(props);
        this.technologies = this.props.stack.split(';');
    }
    render(){
        return (
            <div id="stack-bar">
                {this.technologies.map(function(item){
                    var src = `/images/icons/${item.toLowerCase()}.png`;
                    return <div id="image-wrapper"><Image width="24pt" height="24pt" src={src} alt={item}/></div>
                })}
            </div>
        )
    }
}