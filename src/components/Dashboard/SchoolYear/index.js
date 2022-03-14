import React, { useState } from 'react';
import AddSchoolYear from './AddSchoolYear';
import styles from './index.module.css';
import ViewSchoolYear from './ViewSchoolYear';

const SchoolYear = () => {
    const [option, setOption] = useState(1);
    return(
        <div className={`${styles.container}`}>
             <div className={`${styles.options} flex flex-row gap-x-16 font-semibold justify-center items-center`}>
                <div onClick={()=>setOption(1)} className={`cursor-pointer w-36 h-full flex justify-center ${option === 1 ? 'bg-sky-700': null}`}><span className={`self-center`}>View School Year</span></div>
                <div onClick={()=>setOption(2)} className={`cursor-pointer w-36 h-full flex justify-center ${option === 2 ? 'bg-sky-700': null}`}><span className={`self-center`}>Add School Year</span></div>
                <div onClick={()=>setOption(3)} className={`cursor-pointer w-36 h-full flex justify-center ${option === 3 ? 'bg-sky-700': null}`}><span className={`self-center`}>Update Clubs</span></div>
            </div>
            <div  className={`${styles.content} flex`}>
                 {option === 1 &&
                    <ViewSchoolYear/>
                 }
                 {option === 2 &&
                    <AddSchoolYear/>
                 }
                 {option === 3 &&
                  //   <UpdateClubs/>
                  null
                 }

            </div>
        </div>
    )
}

export default SchoolYear;