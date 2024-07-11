import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NotificationModal } from '../componentes/notification';

const FormContext = createContext();

export const useForm = () => {
    return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [addFormData, setAddFormData] = useState({ address1: '', address2: '', city: '', state: '', zip: '' });
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const personalData = localStorage.getItem('formData');
        if (personalData) {
            setFormData(JSON.parse(personalData));
        }

        const addressData = localStorage.getItem('addFormData');
        if (addressData) {
            setAddFormData(JSON.parse(addressData));
        }
    }, []);

    const saveData = (data, type) => {
        if (type === 'personal') {
            setFormData(prev => ({ ...prev, ...data }));
            localStorage.setItem('formData', JSON.stringify({ ...formData, ...data }));
        } else if (type === 'address') {
            setAddFormData(prev => ({ ...prev, ...data }));
            localStorage.setItem('addFormData', JSON.stringify({ ...addFormData, ...data }));
        }
    }

    const simulateApiCall = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.2) {
                    resolve({ success: true });
                } else {
                    reject({ success: false, message: 'Network Error, please try again' });
                }
            }, 2000);
        });
    }

    const nextStep = async (values, type) => {
        try {
            await simulateApiCall();
            saveData(values, type);
            setStep(prev => prev + 1);
            setIsSuccess(true);
            setModalMessage(type === 'personal' ? 'Your personal details submitted' : 'Your address details submitted');
            setShowModal(true);
        } catch (error) {
            setModalMessage(error.message);
            setIsSuccess(false);
            setShowModal(true);
        }
    }

    const prevStep = () => {
        setStep(prev => prev - 1);
    }

    const handleSelect = (selectedKey) => {
        const newValue = parseInt(selectedKey, 10);
        if (newValue < step) setStep(newValue);
    };

    const handleSubmit = async () => {
        try {
            await simulateApiCall();
            localStorage.removeItem('formData');
            localStorage.removeItem('addFormData');
            setFormData({ name: '', email: '', phone: '' });
            setAddFormData({ address1: '', address2: '', city: '', state: '', zip: '' });
            setStep(1);
            setIsSuccess(true);
            setModalMessage('Your details submitted successfully!');
            setShowModal(true);
        } catch (error) {
            setIsSuccess(false);
            setModalMessage(error.message);
            setShowModal(true);
        }
    }

    const formik = useFormik({
        initialValues: formData,
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            phone: Yup.string().required('Phone is required'),
        }),
        onSubmit: values => nextStep(values, 'personal'),
    });

    const formikAdd = useFormik({
        initialValues: addFormData,
        validationSchema: Yup.object({
            address1: Yup.string().required('Address Line 1 is required'),
            address2: Yup.string(),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            zip: Yup.string().required('Zip code is required'),
        }),
        onSubmit: values => nextStep(values, 'address'),
    });

    const handleCloseModal = () => setShowModal(false);

    return (
        <FormContext.Provider value={{
            step, formik, nextStep, prevStep, handleSelect, formikAdd, formData, addFormData, handleSubmit,
            showModal, isSuccess, modalMessage, handleCloseModal
        }}>
            {children}
            <NotificationModal />
        </FormContext.Provider>
    );
}
