import React, { useState } from 'react';
import Axios from 'axios';
import TextBox from '../../../../UI/TextBox';
import styles from './index.module.css';

const AddClub = () =>{

    const [clubName, setClubName] = useState("")

    const addClubHandler = async () => {
        if(clubName === ""){
            alert("Club name required!")
        }
        else{
        const result = await Axios.post("http://localhost:3001/club/addclub", {
            clubName: clubName,
        });
        if(result.data.exist){
            alert(result.data.message)
            setClubName("")
        }
        else{
            alert(result.data.message)
            setClubName("")
        }
        }
    }

    return(
        <div className={`${styles.container} flex justify-center`}>
            <div className={`${styles.addform} flex flex-col`}>
                <TextBox id={"clubname"} name={"clubname"} type={"text"} value={clubName} onChange={(e)=>setClubName(e.target.value)} label={"Club Name"} className={`${styles.centertext}`}/>
                <button onClick={addClubHandler} className={`${styles.addbutton}`}>
                    Add Club
                </button>
            </div>
        </div>
    )
}

export default AddClub;