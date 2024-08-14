"use client"
import React from 'react';
import Card from "@/app/Stepper/Card/Card";
import {defaultData} from "@/app/types/stepperTypes";
import Ja from './../../icons/Slider_Icons_keine_Gauben_B.png'
import Nein from "./../../icons/Slider_Icons_keine_Gauben_B.png"
import nicht from './../../icons/Slider_Icons_Anderes.png'
interface Props{
    nextStepHandle:(e:any,key:string,value:string)=>void,
    defaultData:defaultData
}
const cards=[{
    id:1,
    imageUrl:Ja,
    text:"Ja"
},
    {id:2,imageUrl: Nein,text:"Nein"},
    {id:3,imageUrl: nicht,text:"Weiß nicht"},
]
const CURRENT_KEY="dachfenster"
const SecondStep:React.FC<Props> = ({nextStepHandle,defaultData}) => {
    return (
        <div className={"cardContainer"}>
            <p className={"text-[#5F5F68] mb-2"}>Kostenloser Solarstrom-Check in einer Minute.</p>
            <p className={"text-xl mb-5 text-[#0A2742] font-medium"}>Besitzt Ihr Haus Gauben oder Dachfenster?</p>
            <div className="grid  sm:grid-cols-3 xs:grid-cols-1 gap-2">
                {cards.map(el => <Card
                    type={CURRENT_KEY} isSelected={defaultData[CURRENT_KEY] === el.text}
                    {...el} nextStepHandle={nextStepHandle} key={el.id}/>)}
            </div>
        </div>

    );
};
export default SecondStep;