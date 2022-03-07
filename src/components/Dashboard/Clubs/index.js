import React, { useState } from 'react';
import AddClub from './AddClub';
import styles from './index.module.css';
import UpdateClubs from './UpdateClubs';
import ViewClubs from './ViewClubs';

const Clubs = () => {
    const [option, setOption] = useState(1);

    return(
        <div className={`${styles.container}`}>
             <div className={`${styles.options} flex flex-row gap-x-16 font-semibold justify-center items-center`}>
                <div onClick={()=>setOption(1)} className={`cursor-pointer w-36 h-full flex justify-center ${option === 1 ? 'bg-sky-700': null}`}><span className={`self-center`}>View Clubs</span></div>
                <div onClick={()=>setOption(2)} className={`cursor-pointer w-36 h-full flex justify-center ${option === 2 ? 'bg-sky-700': null}`}><span className={`self-center`}>Add Clubs</span></div>
                <div onClick={()=>setOption(3)} className={`cursor-pointer w-36 h-full flex justify-center ${option === 3 ? 'bg-sky-700': null}`}><span className={`self-center`}>Update Clubs</span></div>
            </div>
            <div  className={`${styles.content} flex`}>
                 {option === 1 &&
                    <ViewClubs/>
                 }
                 {option === 2 &&
                    <AddClub/>
                 }
                 
                 {option === 3 &&
                    <UpdateClubs/>
                 }

            </div>
        </div>
    );
}

export default Clubs;