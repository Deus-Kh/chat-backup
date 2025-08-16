import { userApi } from "../../utils/api";

const actions = {
    setUserData: items =>({
        type:'USER:SET_DATA',
        payload:items,
    }),
    setIsLoading: bool =>({
        type:'MESSAGES:SET_IS_LOADING',
        payload:bool,
    }),
    fetchUserSignIn: (postData)=> dispatch =>{

        return userApi.signIn(postData).then(({data})=>{
            dispatch(actions.setUserData(data))
        })
        // dispatch(actions.setIsLoading(true))
        // messagesApi.getAllByDialogId(dialogId).then(({data})=>{
        //     dispatch(actions.setMessages(data));
            
        // }).catch(()=>{dispatch(actions.setIsLoading(false))})
    }
}

export default actions;