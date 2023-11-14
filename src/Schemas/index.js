import * as yup from 'yup';

const dates = new Date();
const currentYear = dates.getFullYear();

export const basicSchema = yup.object().shape({
    cardnumber: yup.number().positive().integer().required('Required'),
    month: yup.number().positive().integer().min(1).max(12).required('Required'),
    year: yup.number().positive().integer().min(currentYear).required('Required'),
    cvv: yup.number().positive().integer().required('Required'),
    holderName:yup.string().required('required'),
    
})
