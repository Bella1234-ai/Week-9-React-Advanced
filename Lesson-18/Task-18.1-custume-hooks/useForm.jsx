import { useState } from 'react';

function useForm(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        
        setValues(prev => ({ ...prev, [name]: newValue }));
        
        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };
    
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        
        // Validate field on blur if validator exists
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
        }
    };
    
    const handleSubmit = async (onSubmit) => {
        setIsSubmitting(true);
        
        // Run validation if provided
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
            setTouched(
                Object.keys(values).reduce((acc, key) => {
                    acc[key] = true;
                    return acc;
                }, {})
            );
            
            // If there are errors, don't submit
            if (Object.keys(validationErrors).length > 0) {
                setIsSubmitting(false);
                return;
            }
        }
        
        try {
            await onSubmit(values);
            // Reset form after successful submission if needed
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };
    
    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
        setValues
    };
}

export default useForm;