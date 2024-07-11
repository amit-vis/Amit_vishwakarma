import { useForm } from "../context/formcontext"
import { Step1 } from "./step/step1";
import { Step2 } from "./step/step2";
import { Step3 } from "./step/step3";

export const MultiStep = ()=>{
    const {step} = useForm();
    switch(step){
        case 1:
            return <Step1 />
        case 2:
            return <Step2/>
        case 3:
            return <Step3/>
        default:
            return <Step1/>
    }
}