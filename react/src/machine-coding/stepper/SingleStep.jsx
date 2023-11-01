import React, { useEffect } from 'react'
import styles from './Stepper.module.css'
const SingleStep = ({step,activecomponent}) => {
   
  return (
    <div className={styles.singlestep}>
        <div className={styles.steplabel}>
      <h6 className={styles.stepnum}>{step.id<activecomponent?"✔️":step.id+1}</h6>
      <span>{step.text}</span>
      </div>
      {step.id!==2&&<div className={styles.stepline}>

      </div>
}
    </div>
  )
}

export default SingleStep