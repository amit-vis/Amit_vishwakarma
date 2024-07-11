import { Container } from "react-bootstrap";
import { ReviewData } from "./ReviewData";
import {motion} from "framer-motion";


export const Step3 = ()=>{
    return(
        <>
        <motion.div initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
                
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"95vh"
        }}>
            <Container
                style={{width:"50%",
                    backgroundColor:"darkviolet",
                    padding:"2%",
                    borderRadius:"10px",
                    boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
                }} 
            >
            <ReviewData/>
            </Container>
        </div>
        </motion.div>
        </>
    )
}