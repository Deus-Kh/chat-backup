import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {withFormik} from 'formik';
import LoginFormBase from '../components/LoginForm';
import Validation from '../../../utils/validation'
import axios from '../../../core/axios'
import {userActions} from '../../../redux/actions'
import store from '../../../redux/store';

// export default withFormik({
    
//     // enableReinitialize:true,
//     mapPropsToValues:()=>({ 
//         email:'',
//         password:'',
        
//     }),
//     validate: values =>{
//         let errors = {};
//         Validation({isAuth:true,values,errors})
//         console.log(errors);
//         return errors;
//     },

//     handleSubmit: (values, {setSubmitting})=>{

//         // const data = await axios.post('/user/signin', values);
//         // console.log("Login Res:", data.data);
//         store
//         .dispatch(userActions.fetchUserSignIn(values)).then(data=>{
//             if (data.status==='success') {
//                 useNavigate('/')
//             }
//         })
//         setSubmitting(false)
//         console.log("test",values);
        


//         // setTimeout(() => {
//         //     alert(JSON.stringify(values,null, 2));
//         //     setSubmitting(false)
//         // }, 1000);
//     },
//     displayName:'LoginForm'
// })(LoginFormBase);

const LoginForm=(props)=>{
    const navigate = useNavigate();

    const FormikEnhanced = withFormik({
    
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

    handleSubmit: async (values, {setSubmitting})=>{

        // const data = await axios.post('/user/signin', values);
        // console.log("Login Res:", data.data);
        const data =await store.dispatch( userActions.fetchUserSignIn(values))
        // .then(data=>{
        console.log("DATA:",data);
        
        if (data.status==='success') {
                navigate('/')
                
            }
        // })
        
        setSubmitting(false)
        console.log("test",values);
        


        // setTimeout(() => {
        //     alert(JSON.stringify(values,null, 2));
        //     setSubmitting(false)
        // }, 1000);
    },
    displayName:'LoginForm'
})(LoginFormBase)

return<FormikEnhanced/>
}

export default LoginForm