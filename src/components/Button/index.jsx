import './style.css'
import { Component } from "react";

export class Button extends Component{
    render (){
        const {text, loadMorePosts, disabled} = this.props;
        return (
            <button 
                className='button' 
                onClick={loadMorePosts}
                disabled={disabled}
            >
                {text}
            </button>
        )
    }
}