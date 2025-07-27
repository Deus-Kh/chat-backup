import React, {useRef, useEffect} from "react";
import './ScrollTo.css'
import {Button} from 'antd'
import {UpOutlined} from '@ant-design/icons'

function ScrollTo({coord}) {
    const containerRef = useRef(null)
    useEffect(() => {
        const parent = containerRef.current?.closest('div');
        if (parent) {
            parent.style.position = 'relative';
        }
        
      
    }, [])


    return (
        <button 
            ref={containerRef}
            className='ScrollTo' 
            onClick={(e) => {  e.target.closest('div').scrollTo({top: coord, behavior: 'smooth'}) ;}}
            
            ><UpOutlined />
                 </button>
                //  <UpOutlined 
                //  className='ScrollTo' 
                //  onClick={(e) => {  e.target.closest('div').scrollTo({top: coord, behavior: 'smooth'}) ;}}
            
                //  />
        
         );
}

export default ScrollTo;