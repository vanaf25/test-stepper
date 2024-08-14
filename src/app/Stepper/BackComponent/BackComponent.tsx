import React from 'react';
import Image from "next/image";
import imageUrl from './back_icon.png'
interface BackComponentProps{
    onClick:(e:any)=>void
}
const BackComponent:React.FC<BackComponentProps> = ({onClick}) => {
    return (
        <div className={"flex mt-3 cursor-pointer hover:opacity-7 transition opacity duration-300  "}
             onClick={onClick}>
            <Image
                className={"mr-1"}
                src={imageUrl}
                   height={22}
                   width={22}
                   alt={"back icon "}/>
            Zuruck
        </div>
    );
};
export default BackComponent;