import React ,{useEffect, useState } from 'react'
import './customers.scss'
import phoneImg from '../../img/l-phone.png'
import leftPhoneImg from '../../img/m-left-phone.png'
import rightPhoneImg from '../../img/m-right-phone.png'
import {FormControlLabel,Switch} from '@material-ui/core'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

const Customers = () => {
    const [switchActive, setSwitch] = useState(true);
    const {  width } = useWindowDimensions();
    

    return(
        <section className = 'customers'>
                <h2>Don't lose your customers to Google search</h2>
                <p>They might go elsewhere</p>
                {width>680 ? <img src ={phoneImg}></img> : <React.Fragment>
                    <img src = {switchActive ? rightPhoneImg : leftPhoneImg}></img>
                    <FormControlLabel
                        control={
                        <Switch
                            checked={switchActive}
                            onChange={()=>setSwitch(!switchActive)}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label=""
                    />
                    </React.Fragment>}

                
        </section>
    )
}

export default Customers