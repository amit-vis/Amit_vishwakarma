import { Modal } from "react-bootstrap"
import { useForm } from "../context/formcontext"
import { SiTicktick } from "react-icons/si";
import { MdCancel } from "react-icons/md";

export const NotificationModal = ()=>{
    const {showModal, isSuccess, modalMessage,handlecloseModal} = useForm();
    return(
        <Modal show={showModal} onHide={handlecloseModal} centered>
            <Modal.Header closeButton>
                <Modal.Title className={isSuccess?"text-success":"text-danger"}>{isSuccess? 'Success':'Error'}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign:'center', fontFamily:"fantasy", color:"green"}}>
                    {isSuccess?<SiTicktick style={{fontSize:"5rem"}} className="text-success"/>:
                    <MdCancel style={{fontSize:"5rem"}} className="text-danger"/>}
                    <h4 style={{marginTop:"5%"}}>{modalMessage}</h4>
            </Modal.Body>
        </Modal>
    )
}