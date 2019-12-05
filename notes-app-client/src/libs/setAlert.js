import React from 'react'
import Alert from '../components/Alert'

export const setAlert =(msg, type, timeOut =5000) => {
    return(
        setTimeout(() => <Alert alet={msg, type} /> , timeOut)
    )
}