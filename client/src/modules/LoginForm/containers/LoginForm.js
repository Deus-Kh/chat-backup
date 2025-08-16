import {connect} from 'react-redux';
import {withFormik} from 'formik';
import LoginForm from '../components/LoginForm';
import Validation from '../../../utils/validation'
import axios from '../../../core/axios'
import {userActions} from '../../../redux/actions'

export default withFormik({
    // enableReinitialize:true,
    mapPropsToValues:()=>({ 
        email:'',
        password:'',
        
    }),
    validate: values =>{
        let errors = {};
        Validation({isAuth:true,values,errors})
        console.log(errors);
        return errors;
    },

    handleSubmit:async (values, {setSubmitting})=>{

        // const data = await axios.post('/user/signin', values);
        // console.log("Login Res:", data.data);

        setSubmitting(false)


        // setTimeout(() => {
        //     alert(JSON.stringify(values,null, 2));
        //     setSubmitting(false)
        // }, 1000);
    },
    displayName:'RegisterForm'
})(LoginForm);
