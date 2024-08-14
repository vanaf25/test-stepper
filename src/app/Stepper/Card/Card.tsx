import React from 'react';
import Image from "next/image";
import styles from './Card.module.css'
import {NextStepHandle} from "@/app/types/stepperTypes";
interface CardProps{
    imageUrl:any,
    text:string,
    id:number,
    type:string
    nextStepHandle:NextStepHandle
    isSelected:boolean
}
const Card:React.FC<CardProps> = ({imageUrl,text,nextStepHandle,type,isSelected}) => {
    return (
        <div
            onClick={(e)=>nextStepHandle(e,type,text)}
            className={`${styles.card} ${isSelected ? styles.active:""}   
                   content-center bg-white
                    border border-gray-200
                     rounded-lg
                     flex
                     justify-center
                        items-center
                     sm:flex-col
                     p-0
                     sm:h-[220px]
                     xs:h-[64px]
                      shadow-[-3px 5px 40px -7px #0000004D] dark:bg-gray-800 dark:border-gray-700`}>
            <Image
                src={imageUrl}
                width={120}
                height={108}
                alt="Picture of the author"
            />
            <p className="mb-3 text-xl text-black-800 content-center dark:text-gray-400">
                {text}
            </p>
        </div>
    );
};

export default Card;