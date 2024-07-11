import { Button, Col, Form, Row } from "react-bootstrap";
import "./personal.css";
import { useForm } from "../../context/formcontext";
import {motion} from 'framer-motion'

export const PersonalSection = () => {
    const { formik } = useForm();
    return (
        <>
        <motion.div initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}>
            <Form style={{ color: "white" }}>
                <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm={2}>
                        Name:-
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
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
                        {formik.errors.name && <div>{formik.errors.name}</div>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formEmail" className="mt-5">
                    <Form.Label column sm={2}>
                        Email:-
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
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
                        {formik.errors.email && <div>{formik.errors.email}</div>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPhone" className="mt-5">
                    <Form.Label column sm={2}>
                        Phone:-
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            placeholder="Enter phone number"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
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
                        {formik.errors.phone && <div>{formik.errors.phone}</div>}
                    </Col>
                </Form.Group>
                <div className="mt-5">
                    <Button type="button" className="bg-success w-25" style={{ border: "none" }}
                        onClick={()=>formik.handleSubmit()}
                    >Next</Button>
                </div>
            </Form>
            </motion.div>
        </>
    );
}
