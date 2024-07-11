import { Button } from "react-bootstrap";
import { useForm } from "../../context/formcontext";
import {motion} from "framer-motion";

export const ReviewData = () => {
    const {formData,addFormData,prevStep,handleSubmit} = useForm();
    return (
        <>
            <motion.div initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            >

            <div style={{color:"white"}}>
                <h2 style={{color:"white", marginBottom:"5%"}}>Confirm your Details</h2>
                <div style={{marginTop:"1%"}}>
                    <strong>Name:</strong> 
                    {formData.name}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>Email:</strong> {formData.email}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>Phone:</strong> {formData.phone}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>Address Line 1:</strong> {addFormData.address1}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>Address Line 2:</strong> {addFormData.address2}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>City:</strong> {addFormData.city}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>State:</strong> {addFormData.state}
                </div>
                <div style={{marginTop:"1%"}}>
                    <strong>Zip Code:</strong> {addFormData.zip}
                </div>
                <div className="mt-5" style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                <Button type="button" className="bg-success w-25" style={{border:"none"}} onClick={prevStep}>Prev</Button>
                <Button type="button" className="bg-success w-25" style={{border:"none"}} onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
            </motion.div>
        </>
    )
}