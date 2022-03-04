import React, { useState } from 'react';
import AddClub from './AddClub';
import styles from './index.module.css';

const Clubs = () => {
    const [option, setOption] = useState(1);

    return(
        <div className={`${styles.container}`}>
             <div className={`${styles.options} flex flex-row gap-x-16 font-semibold justify-center items-center`}>
                <div onClick={()=>setOption(1)} className={`cursor-pointer`}>View Clubs</div>
                <div onClick={()=>setOption(2)} className={`cursor-pointer`}>Add Club</div>
                <div className={`cursor-pointer`}>Update Clubs</div>
            </div>
            <div  className={`${styles.content} flex`}>
                 {option === 1 &&
                    <></>
                 }
                 {option === 2 &&
                    <AddClub/>
                 }

            </div>
        </div>
    );
}

export default Clubs;