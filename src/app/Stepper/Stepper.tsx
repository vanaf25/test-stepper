"use client"
import React, {useEffect, useState} from "react";
import FirstStep from "@/app/Stepper/FirstStep/FirstStep";
import ThirdStep from "@/app/Stepper/ThirdStep/ThirdStep";
import SecondStep from "@/app/Stepper/SecondStep/SecondStep";
import BackComponent from "@/app/Stepper/BackComponent/BackComponent";
import {set, useForm} from "react-hook-form"
import OkIcon from './../icons/OK.png'
import {defaultData} from "@/app/types/stepperTypes";
import Image from "next/image";
const COMPONENTS=[FirstStep,SecondStep,ThirdStep]
export default function Stepper() {
    const [data, setData] = useState<defaultData>({
        dachform: "",
        dachfenster: ""
    });
    const [activeStep, setActiveStep] = useState(0);
    const [percentOfCompleted, setPercentOfCompleted] =
        useState(10);
    const changePercentOfCompleted=(type:"increase" | "decrease")=>{
        const percents=[10,50,95];
        setPercentOfCompleted(percents[type==="increase" ? activeStep+1:activeStep-1]);
    }
    const STEP = COMPONENTS[activeStep];
    const nextStepHandle = (e:any ,key: string, savedValue: string) => {
        const el=e.target.closest(".cardContainer");
      el.classList.add("animation");
        changePercentOfCompleted("increase");
        setTimeout(()=>{
            setData(data => ({...data, [key]: savedValue}))
            setActiveStep(prevState => prevState + 1);
        },450);
    }
    const previousStepHandle=(e: any)=>{
        changePercentOfCompleted("decrease");
        const el=e.target.parentElement.querySelector(".cardContainer");
        el.classList.add("animationRight");
        setTimeout(()=>{
            setActiveStep(prevState => prevState - 1);
        },450)
    }
        return (
        <div>
            <div className={`${activeStep === 2 ? 'bg-[#000D19]':"" } ${activeStep===2 ? 'text-white':""} mb-3`}>
                <div className={"my-container h-[64px] pt-1 "}>
                    <div
                        className={` ${activeStep == 1 ? "text-center" : activeStep == 2 ? "text-right" : "text-left"}
            ${activeStep === 0 ? "pl-[10%]" : ""} mb-1
             text-base `}>{percentOfCompleted}%
                        {activeStep === 2 ? " Fast geschafft" : " geschafft"}
                    </div>
                    <div className="height-64 bg-gray-200 centered rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="transition-width ease-in-out duration-400 bg-[#02FF83] h-2.5 rounded-full flex items-center justify-end"
                            style={{width: `${percentOfCompleted}%`}}
                        >
                            <Image src={OkIcon} alt={"ok"} width={20} height={20} />
                        </div>
                    </div>
                </div>
                {activeStep == 2 && <div className="h-[112px] flex items-center	 justify-center	  text-white ">
                    <div>
                        <p className={"text-center"}>Eine Solaranlage spart Ihnen ca.</p>
                        <p className={"text-2xl text-center"}>25.000-30.000€ Stromkosten</p>
                    </div>

                </div>}
            </div>
            <div className={"my-container  mb-1"}>
                <STEP defaultData={data} nextStepHandle={nextStepHandle}/>
                {activeStep !== 0 && <BackComponent onClick={previousStepHandle}/>}
            </div>
        </div>
        );
        }