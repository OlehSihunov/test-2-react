import React from 'react'
import Step from '../step/step'
import InputStep from '../inputStep/inputStep'
import './stepper.scss'

const Stepper = () => {
    return(
        <div className = 'content'>
             <h2>Simple as:</h2>
        <section className = 'stepper'>
            <InputStep number='1' text = 'Enter your business name' holder = 'Business name'></InputStep>
            <Step number='2' text = 'Start rewarding your customers ' holder = 'create  template'></Step>
            <Step number='3' text = 'Final step' holder = 'start now'></Step>
        </section>
        </div>
    )
}
export default Stepper