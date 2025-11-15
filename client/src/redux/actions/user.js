import axios from "../../core/axios";
import { userApi } from "../../utils/api";

const actions = {
    setUserData: data =>({
        type:'USER:SET_DATA',
        payload:data,
    }),
    setIsAuth: bool => (  {
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserData: () => async (dispatch) => {
  try {
    const { data } = await userApi.getMe();
    console.log("Get Me", data);

    dispatch(actions.setUserData(data));
    dispatch(actions.setIsAuth(true));
  } catch (err) {
    if (err.response?.status === 403) {
      dispatch(actions.setIsAuth(false));
      delete window.localStorage.token;
    } else {
      console.error("Error fetching user data:", err);
    }
  }
} 
,
    fetchUserSignIn: (postData)=> async dispatch =>{
        try {
            const { data } = await userApi.signIn(postData);
            console.log("ACt", data);
            
            axios.defaults.headers.common.Authorization=`Bearer ${data.token}`;
            window.localStorage.setItem('token',data.token)
             await dispatch(actions.fetchUserData())
            // .then(()=>{
              
            // })
            
            
        return data
        } catch (error) {
            console.error(error)
        }
        
    },
    fetchUserSignUp: postData => () => {
    return userApi.signUp(postData);
  },
}

export default actions;