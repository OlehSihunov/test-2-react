import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import '../step/step.scss'

const InputStep = ({number,text,holder}) => {
    return(
        <div className = 'step'>
            <h3>{number}</h3>
            <p>{text}</p>
            <TextField
                className = "step-input"
                id="outlined-secondary"
                label={holder}
                variant="outlined"
                size = "small"
            />
        </div>
    )
}
export default InputStep