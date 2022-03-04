import React, { useState } from 'react';
import VerifyPersonnel from './VerifyPersonnel';
import styles from './index.module.css';
import ViewPersonnel from './ViewPersonnel';

const Personnel = () => {
    const [option, setOption] = useState(1)

    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.options} flex flex-row gap-x-16 font-semibold justify-center items-center`}>
                <div onClick={()=>setOption(1)} className={`cursor-pointer`}>View Personnel</div>
                <div onClick={()=>setOption(2)} className={`cursor-pointer`}>Verify Personnel</div>
                <div className={`cursor-pointer`}>Update Personnel</div>
            </div>
            <div  className={`${styles.content} flex`}>
                 {option === 1 &&
                    <ViewPersonnel/>
                 }
                 {option === 2 &&
                    <VerifyPersonnel/>
                 }

            </div>
        </div>
    )
}

export default Personnel;