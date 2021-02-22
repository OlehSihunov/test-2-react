import React from 'react'
import Button from '@material-ui/core/Button';
import './step.scss'

const Step = ({number,text,holder}) => {
    return(
        <div className = 'step'>
            <h3>{number}</h3>
            <p>{text}</p>
            <Button  className = 'step-button'>{holder}</Button>
        </div>
    )
}
export default Step