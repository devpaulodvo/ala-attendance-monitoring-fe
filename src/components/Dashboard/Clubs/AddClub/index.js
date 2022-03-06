import React, { useState } from 'react';
import Axios from 'axios';
import TextBox from '../../../../UI/TextBox';
import styles from './index.module.css';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.club) {
      errors.club = 'Required';
    } else if (values.club.length > 21) {
      errors.club = 'Must be 15 characters or less';
    }
    return errors;
  };

const AddClub = () =>{
    const [clubName, setClubName] = useState("");
    const addClubHandler = async (club) => {

        const result = await Axios.post("http://localhost:3001/club/addclub", {
            clubName: club,
        });
        if(result.data.exist){
            return alert(result.data.message)
        }
        if(!result.data.exist){
            alert(result.data.message)
        }
    }
    const formik = useFormik({
        initialValues: {
          club: '',
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            addClubHandler(values.club)
            resetForm({club: ""})
        },
      });

    return(
        <div className={`${styles.container} flex justify-center`}>
            <form onSubmit={formik.handleSubmit} className={`${styles.addform} flex flex-col`}>
                <TextBox id={"club"} name={"club"} type={"text"} 
                value={formik.values.club} 
                onChange={formik.handleChange} 
                label={"Club Name"} 
                className={`${formik.errors.club ? styles.centertexterror: styles.centertext}`}/>
                {formik.errors.club ? <div className={`text-rose-600 text-center`}>{formik.errors.club}</div>:null}
                <button type="submit" className={`${styles.addbutton}`}>
                    Add Club
                </button>
            </form>
        </div>
    )
}

export default AddClub;