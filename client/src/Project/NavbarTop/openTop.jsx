import React,{ useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import { Item,ItemText } from "./styles";
import { ItemNav } from "./openTopStyle"


const OpenTop = (obj,ind) =>{
    const[click,setClick] = useState(false)
    const HandleClick = () => {
        setClick(!click)
    }

    return(
        <ItemNav>
        <Item onClick={HandleClick}>
            <ItemText>{obj[ind].nome}</ItemText>
            <AiOutlineDown color="#CECECE" fontSize={12}/>
        </Item>
            <nav className={click ? "menu menu-open" : "menu menu-close"}>
            <ul>
                <li>{obj[ind].elements[1]}</li>
                <li>{obj[ind].elements[2]}</li>
                <li>{obj[ind].elements[3]}</li>
                <li>{obj[ind].elements[4]}</li>
                <li>{obj[ind].elements[5]}</li>
            </ul>
          </nav>
        </ItemNav>
    )
}
export default OpenTop;