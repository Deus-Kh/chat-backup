import React, { useEffect} from 'react';
import {connect} from 'react-redux'

import {messagesActions} from '../../redux/actions'
import {Messages as BaseMessage} from '../../components'
// import dialogs from '../../utils/api/dialogs';



function Messages({items, currentDialogId, fetchMessages, isLoading }) {

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId)
        }
        
    }, [currentDialogId, fetchMessages])
    return ( 
        <BaseMessage
        items={Array.isArray(items) ? items : []} isLoading={isLoading}
        />
     );
}
export default connect(
    ({dialogs,messages})=>{
        return({
            currentDialogId:dialogs.currentDialogId,
            items: Array.isArray(messages.items) ? messages.items : [],
            isLoading: messages.isLoading
        })
    }, 
     messagesActions
    
)(Messages);

