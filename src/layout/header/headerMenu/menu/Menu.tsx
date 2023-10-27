import React from "react";
import { Stl } from "../allMenu_Stl";

export const Menu: React.FC<{menuItems:Array<string>}> = (props:{menuItems:Array<string>}) => {
    return (
        <ul>
            {props.menuItems.map((item:string, index:number)=>{
                return (
                    <Stl.ListItem key={index}>
                        <Stl.Link href="#">{item}
                            <Stl.Mask>
                                <span>{item}</span>
                            </Stl.Mask>
                            <Stl.Mask>
                                <span>{item}</span>
                            </Stl.Mask>
                        </Stl.Link>                        
                    </Stl.ListItem>
                )
            })}
        </ul>
    );
}