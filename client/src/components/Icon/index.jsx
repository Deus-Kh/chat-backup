import React from 'react';
import './Icon.css'
import { generateAvatarFromHash } from '../../utils/helpers';


const Icon = ({ user }) => {
    let {color, colorLighten} = generateAvatarFromHash(user._id);
    return (
        <>{user?.avatar ?
            <img className='icon' src={user.avatar} alt={`${user.avatar} Avatar`} /> :
            <div className='icon' style={{ background: `linear-gradient(135deg, ${color}, ${colorLighten} `}}>
                <b>{user.username[0]}</b>
            </div>}</>
    )
}
export default Icon



