"use client"
import answerImage from './../../icons/Slider_Icons_Anderes.png'
import Flachdach from './../../icons/Flachdach.png'
import Pultdach from "./../../icons/Slider_Icons_Pultdach.svg.png"
import Sattledach from "./../../icons/Slider_Icons_Satteldach.svg fill.png"
import Card from "@/app/Stepper/Card/Card";
import React from "react";
import {NextStepHandle} from "@/app/types/stepperTypes";
interface Props{
    nextStepHandle:NextStepHandle,
    defaultData:any
}
const data=[{
    id:1,
    imageUrl:Sattledach,
    text:"Satteldach"
    },
    {id:2,imageUrl: Flachdach,text:"Flachdach"},
    {id:3,imageUrl:Pultdach,text:"Pultdach"},
    {id:4,imageUrl: answerImage,text:"Anderes"}
]
const CURRENT_KEY="dachform"
const FirstStep:React.FC<Props> = ({nextStepHandle,defaultData}) => {
    return (
        <div className={"cardContainer"}>
            <p className={"text-[#5F5F68] mb-2"}>Kostenloser Solarstrom-Check in einer Minute.</p>
            <p className={"text-xl mb-5 text-[#0A2742] font-medium"}>Besitzt Ihr Haus Gauben oder Dachfenster?</p>
            <div className="grid  md:grid-cols-4 sm:grid-cols-2  xs:grid-cols-1 gap-2">
                {data.map(el => <Card
                    isSelected={defaultData[CURRENT_KEY] === el.text}
                    {...el} type={CURRENT_KEY}
                    nextStepHandle={nextStepHandle} key={el.id}/>)}
            </div>
        </div>

    );
};
export default FirstStep;