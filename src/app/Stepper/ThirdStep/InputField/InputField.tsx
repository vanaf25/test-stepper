import React from 'react';
interface InputField{
    name:string,
    placeholder:string,
    register:any,
    isError:boolean
    }
const InputField:React.FC<InputField> = ({name,placeholder,register,isError,...rest}) => {
    return (
        <div className={"mb-2"} {...rest}>
            <label htmlFor={name}
                   className="block mb-2 text-sm font-medium text-[#5F5F68] dark:text-white">
                <span>{name}</span>
                <span className={"text-[#CD4218] pl-1 inline-block"}>{isError ? `Bitte ${name} angeben `:''}</span>
                 </label>
            <input type="text" id={name}
                   className={`
                   bg-gray-50 border ${isError ? "border-red-500":"border-gray-300"}
                    text-gray-900 text-sm rounded-lg
                    ${isError ? "focus:border-red-500":"focus:border-blue-500" }
                     block w-full p-2.5`}
                   placeholder={placeholder}  {...register(name,{required:true})}/>
        </div>
    );
};

export default InputField;