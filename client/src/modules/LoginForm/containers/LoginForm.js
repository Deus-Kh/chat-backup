import {withFormik} from 'formik';
import LoginForm from '../components/LoginForm';
import Validation from '../../../utils/validation'
export default withFormik({
    // enableReinitialize:true,
    mapPropsToValues:()=>({ 
        username:'',
        password:'',
        
    }),
    validate: values =>{
        let errors = {};
        Validation({isAuth:true,values,errors})
        console.log(errors);
        return errors;
    },

    handleSubmit:(values, {setSubmitting})=>{
        setTimeout(() => {
            alert(JSON.stringify(values,null, 2));
            setSubmitting(false)
        }, 1000);
    },
    displayName:'RegisterForm'
})(LoginForm);
