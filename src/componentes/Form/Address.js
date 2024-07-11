import { Button, Col, Form, Row } from "react-bootstrap";
import "./personal.css";
import { useForm } from "../../context/formcontext";
import {motion} from "framer-motion";


export const AddressSection = () => {
    const {formikAdd,prevStep} = useForm();
    return (
        <>
        <motion.div initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
                
            <Form style={{ color: "white" }}>
                <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm={3}>
                        Address 1:-
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter address Line1"
                            name="address1"
                            value={formikAdd.values.address1}
                            onChange={formikAdd.handleChange}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "2px solid #fff",
                                borderRadius: "0",
                                color: "white",
                                caretColor: "white"
                            }}
                            className="placeholder-white"
                        />
                        {formikAdd.errors.address1 && <div>{formikAdd.errors.address1}</div>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formName" className="mt-4">
                    <Form.Label column sm={3}>
                        Address 2:-
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter address Line 2"
                            name="address2"
                            value={formikAdd.values.address2}
                            onChange={formikAdd.handleChange}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "2px solid #fff",
                                borderRadius: "0",
                                color: "white",
                                caretColor: "white"
                            }}
                            className="placeholder-white"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formName" className="mt-4">
                    <Form.Label column sm={3}>
                        City:-
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter city name"
                            name="city"
                            value={formikAdd.values.city}
                            onChange={formikAdd.handleChange}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "2px solid #fff",
                                borderRadius: "0",
                                color: "white",
                                caretColor: "white"
                            }}
                            className="placeholder-white"
                        />
                        {formikAdd.errors.city && <div>{formikAdd.errors.city}</div>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formName" className="mt-4">
                    <Form.Label column sm={3}>
                        State:-
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            placeholder="Enter state name"
                            name="state"
                            value={formikAdd.values.state}
                            onChange={formikAdd.handleChange}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "2px solid #fff",
                                borderRadius: "0",
                                color: "white",
                                caretColor: "white"
                            }}
                            className="placeholder-white"
                        />
                        {formikAdd.errors.state && <div>{formikAdd.errors.state}</div>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formName" className="mt-4">
                    <Form.Label column sm={3}>
                        Zip:-
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="number"
                            placeholder="Enter zip code"
                            name="zip"
                            value={formikAdd.values.zip}
                            onChange={formikAdd.handleChange}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "2px solid #fff",
                                borderRadius: "0",
                                color: "white",
                                caretColor: "white"
                            }}
                            className="placeholder-white"
                        />
                        {formikAdd.errors.zip && <div>{formikAdd.errors.zip}</div>}
                    </Col>
                </Form.Group>
                <div className="mt-5" style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                    <Button type="button" className="bg-success w-25" style={{border:"none"}} 
                    onClick={prevStep}>Prev</Button>
                    <Button type="submit" className="bg-success w-25" style={{border:"none"}}
                    onClick={formikAdd.handleSubmit}>Next</Button>
                </div>
            </Form>
            </motion.div>
        </>
    )
}