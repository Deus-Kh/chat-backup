 const validation =({isAuth,values,errors})=>{
    const rules ={
        email: value=>{
            if(!value){
                errors.email = "Required";
            }else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)) {
                errors.email = "Invalid email address";
            }
        },
        password: value =>{
            if(!value){
                errors.password = "Input a Password";
            }else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)
            ) {
                errors.password = "Invalid Password. \n Password must be contain letters and numbers";
            }
        },
        repeatPassword: value=>{
            if(!value||value===''){
                errors.repeatPassword = "Required";
            }
            else if(!isAuth && value !== values.password){
                errors.repeatPassword = "Passwords Mismatch";
            }
        },
        username: value=>{
            if(!isAuth&&!value){
                errors.username = "Required";
            }else if (!/^[a-zA-Z0-9._]{2,30}$/i.test(value)) {
                errors.username = "Invalid Username";
            }
        }
    }
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
}

export default validation;