import React, { useState } from 'react';
import VerifyPersonnel from './VerifyPersonnel';
import styles from './index.module.css';
import ViewPersonnel from './ViewPersonnel';

const Personnel = () => {
    const [option, setOption] = useState(1);

    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.options} flex flex-row gap-x-16 font-semibold justify-center items-center`}>
                <div onClick={()=>setOption(1)} 
                className={`cursor-pointer w-36 h-full flex justify-center ${option === 1 ? 'bg-sky-700': null}`}><span className={`self-center`}>View Personnel</span></div>
                <div onClick={()=>setOption(2)} 
                className={`cursor-pointer w-36 h-full flex justify-center ${option === 2 ? 'bg-sky-700': null}`}><span className={`self-center`}>Verify Personnel</span></div>
                <div onClick={()=>setOption(3)} 
                className={`cursor-pointer w-36 h-full flex justify-center ${option === 3 ? 'bg-sky-700': null}`}><span className={`self-center`}>Update Personnel</span></div>
            </div>
            <div  className={`${styles.content} flex`}>
                 {option === 1 &&
                    <ViewPersonnel/>
                 }
                 {option === 2 &&
                    <VerifyPersonnel/>
                 }
                 
                 {option === 3 &&
                    <div>Assign Personnel</div>
                 }

            </div>
        </div>
    )
}

export default Personnel;