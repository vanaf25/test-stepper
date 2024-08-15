"use client"
import React, {useEffect} from 'react';
import styles from './ThirdStep.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {defaultData, NextStepHandle} from "@/app/types/stepperTypes";
import InputField from "@/app/Stepper/ThirdStep/InputField/InputField";
interface Props{
    nextStepHandle:NextStepHandle
    defaultData:defaultData
}
type Inputs = {
    anrede:"Herr" | "Frau",
    telefonNummer:string,
    Postleitzahl:string,
    Ort:string,
    Straße:string,
    Hausnummer:string
     Name: string }
const inputData=[{
    name:"Name",
    id:1,
    placeholder:"Vor- und Nachname"
},{name:"telefonNummer",id:2,placeholder: "+49 123 456 789"},
    {name:"Postleitzahl",placeholder: "12277",id:3},{id:4,name:"Ort",placeholder: "Berling"},
    ]
const ThirdStep:React.FC<Props> = ({defaultData}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        fetch("https://65590262e93ca47020a9fce8.mockapi.io/insert",
            {method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...data,...defaultData})}).then(()=>{
            console.log('Form sucessfully submitted!!!');
                alert("Form submitted!")
                reset();
        }).catch(()=>{
            console.log('some error occured!');
        })
    }
    useEffect(()=>console.log(errors),[errors]);
    return (
        <div className={"cardContainer"}>
            <p className={"text-[#0A2742] text-center leading-6 text-[26px] mb-2 "}>Gratulation, das Angebot ist in Ihrer
                Region noch verfügbar! Wir senden Ihnen gerne kostenlose
                Informationen zu.</p>
            <div className={styles.step}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="on"
                                   data-ripple-dark="true">
                                <input value={"Herr"}  type="radio"
                                       {...register("anrede",{required:true})}
                                       className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="on"/>
                                <span
                                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
                            </label>
                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="on">
                                Herr
                            </label>
                        </div>
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="off">
                                <input value={"Frau"} {...register("anrede",{required:true})} type="radio"
                                       className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                       id="off"/>
                                <span
                                    className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
                            </label>
                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="off">
                                Frau
                            </label>
                        </div>
                    </div>
                    {errors["anrede"] && <p className={"text-red-800"}>Bitte Anrede angeben!</p> }
                    {/*@ts-ignore*/}
                    {inputData.map(el=><InputField name={el.name} placeholder={el.placeholder} key={el.id} register={register} isError={!!errors[el.name]}/>)}
                    <div className={"grid grid-cols-3 "}>
                        <div className={"mr-1 grid col-span-2"}>
                            <InputField   name={"Straße"} placeholder={"Straße"} register={register} isError={!!errors["Straße"]}/>
                        </div>
                        <div className={"grid col-span-1"}>
                            <InputField name={"Hausnummer"} placeholder={"Nr."} register={register} isError={!!errors["Hausnummer"]}/>
                        </div>
                    </div>
                    <button className="bg-[#02FF83] block w-full   py-2 px-4 rounded">
                        Button
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ThirdStep;