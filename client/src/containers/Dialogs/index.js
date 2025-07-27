import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

import {dialogsActions} from '../../redux/actions'
import {Dialogs as BaseDialogs} from '../../components'
import dialogs from '../../utils/api/dialogs';


function Dialogs({items, userId, fetchDialogs, setCurrentDialogId, currentDialogId}) {
    const [inputValue, setInputValue] = useState('');
    const [filteredItems, setFilteredItems] = useState(Array.from(items));
    
    const onChangeInput = value =>{
        setFilteredItems(
            items.filter(
                dialog =>
                    dialog.user.username.toLowerCase().indexOf(value.toLowerCase()) >= 0
            )
        );
        setInputValue(value);
    };


    useEffect(() => {

      if (items.length>0) {
        setFilteredItems(items)
      } else {
        fetchDialogs()
      }
    
    }, [items])
    
    return ( 
        <BaseDialogs
            userId={userId}
            items={filteredItems}
            onSearch={onChangeInput}
            inputValue={inputValue}
            onSelectDialog={setCurrentDialogId}
            currentDialogId={currentDialogId}
        />
     );
}

// export default Dialogs;
export default connect(({dialogs})=>dialogs, dialogsActions)(Dialogs);