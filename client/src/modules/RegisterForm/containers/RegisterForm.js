import {withFormik} from 'formik';
import RegisterForm from '../components/RegisterForm';
import Validation from '../../../utils/validation'

export default withFormik({
    mapPropsToValues:()=>({ 
        email:'',
        username:'',
        password:'',
        repeatPassword:''
    }),
    validate: values =>{
        let errors = {};
        Validation({isAuth:false,values,errors})
        return errors;
    },

    handleSubmit:(values, {setSubmitting})=>{
        setTimeout(() => {
            alert(JSON.stringify(values,null, 2));
            setSubmitting(false)
        }, 1000);
    },
    displayName:'RegisterForm'
})(RegisterForm);