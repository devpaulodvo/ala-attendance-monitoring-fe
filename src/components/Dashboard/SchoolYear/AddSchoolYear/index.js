import React, { useState } from 'react';
import Axios from 'axios';
import TextBox from '../../../../UI/TextBox';
import styles from './index.module.css';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.schoolyearstart) {
        errors.schoolyearstart = 'Required';
    }
    if (!values.schoolyearend) {
        errors.schoolyearend = 'Required';
    }else if(values.schoolyearend < values.schoolyearstart){
        errors.schoolyearend = 'Year End must be greater than Year Start';
    }
    return errors;
  };

const AddSchoolYear = () => {

    const addSYHandler = async (schoolyearstart, schoolyearend) => {

        const result = await Axios.post("http://localhost:3001/schoolyear/add", {
            yearstart: schoolyearstart,
            yearend: schoolyearend
        });
        if(result.data.exist){
            return alert(result.data.message)
        }
        if(!result.data.exist){
            alert(result.data.message)
        }
        console.log(schoolyearstart)
        console.log(schoolyearend)
    }

    const formik = useFormik({
        initialValues: {
          schoolyearstart: '',
          schoolyearend: '',
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            addSYHandler(values.schoolyearstart, values.schoolyearend)
            resetForm({schoolyearstart: "", schoolyearend:""})
        },
        // validateOnBlur: false,
        // validateOnChange: false,
      });

      return(
        <div className={`${styles.container} flex justify-center`}>
            <form onSubmit={formik.handleSubmit} className={`${styles.addform} flex flex-col`}>
                <TextBox id={"schoolyearstart"} name={"schoolyearstart"} type={"month"} 
                value={formik.values.schoolyearstart} 
                onChange={formik.handleChange} 
                label={"Year Start"} 
                className={`${formik.errors.schoolyearstart ? styles.centertexterror: styles.centertext}`}/>
                {formik.errors.schoolyearstart ? <div className={`text-rose-600 text-center`}>{formik.errors.schoolyearstart}</div>:null}

                <TextBox id={"schoolyearend"} name={"schoolyearend"} type={"month"} 
                value={formik.values.schoolyearend} 
                onChange={formik.handleChange} 
                label={"Year End"} 
                className={`${formik.errors.schoolyearend ? styles.centertexterror: styles.centertext}`}/>
                {formik.errors.schoolyearend ? <div className={`text-rose-600 text-center`}>{formik.errors.schoolyearend}</div>:null}
                <button type="submit" className={`${styles.addbutton}`}>
                    Add School Year
                </button>
            </form>
        </div>
    )

}

export default AddSchoolYear;