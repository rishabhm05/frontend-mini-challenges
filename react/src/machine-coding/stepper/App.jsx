import React, { useState } from 'react'
import SingleStep from './SingleStep'
import styles from './Stepper.module.css'
import ActiveComponent from './ActiveComponent'
const App = () => {
    const steplist =[
        {"id":0,
         "text" : "Select step 1"
    },
    {"id":1,
    "text" :"Select step 2"     
},
{
    "id" :2,
    "text" : "Select step 3"
},

    ]
    const component =[
    <div>Component1</div>,
    <div>Component2</div>,
    <div>Component3</div>
    ]
    const[activecomponent,setActiveComponent] =useState(0);
    const handleNext = ()=>{
        if(activecomponent===component.length){
            return;
        }
        setActiveComponent((activecomponent)=>activecomponent+1)
    }
    const handleprev =()=>{
        if(activecomponent===0){
            return;
        }
        setActiveComponent((activecomponent)=>activecomponent-1)
    }
    const [steps,setSteps] = useState(steplist)
  return (
    <>
    <div className={styles.stepper}>
    {steplist.map((step)=>{
        return <SingleStep step={step} activecomponent={activecomponent} />
    })}
    </div>
    <div className={styles.btn}>
    <button onClick={handleprev}>Prev</button>
    <button onClick={handleNext}>Next</button>
    </div>
    <ActiveComponent component={component[activecomponent]} />
    </>
  )
}

export default App