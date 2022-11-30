import React from 'react'
import { Rectangle, Union } from '../../utils/constants/images'
import {Song} from '../../components'
import "./style.scss"

const PlayList = () => {
    return (
    <div className='list'>
        <div className='list__menu'>
        </div> 
            

        <p>Cardi B</p>
        <p>Invasion Of Privacy</p>

            <div className='list__header__img'>
                <img src={Union} alt="Login" />
                <img src={Rectangle} alt="Login" />
            </div>
            
        <div className='list__list'> 
            <p>My PlayList</p>
            <div className='list__list__song'>
                <Song />
            </div>  

            </div>
            </div>

  )
}

export default PlayList