
import React, {useState} from "react";

const RUbuttonComp = (props) => {
    // Use console.log() for debugging
    const [content, setContent] = useState("")
    
    const btnClicked = (e) => {
        debugger;
        setContent(e.child.props.children);
    }
    return <div className="tabs">
        <ul>
            {
                props.children.map((child, index)=>{
                    return(<li key={index} onClick={()=>btnClicked({child})} style={{ display: "inline"}}>
                        <button>{child.props.title}</button>
                    </li>)
                })
            }
        </ul>
        <div class="view">
            {content}
        </div>
    </div>;
};

export default RUbuttonComp;