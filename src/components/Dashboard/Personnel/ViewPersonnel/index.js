import React, { useEffect } from 'react'
import Axios from "axios";
import { useSelector, useDispatch} from 'react-redux';
import { selectPersonnelList, setPersonnelList } from '../../../../slice/PersonnelSlice';
import styles from './index.module.css'

const ViewPersonnel = () => {
    const personnel = useSelector(selectPersonnelList);
    const verifiedPersonnel = personnel.filter((result)=>{
        return result.verified === true&&
                result.role !== 'admin' ;
    });
    
    const dispatch = useDispatch();
    
    useEffect( async () =>{
        const result = await Axios.get("http://localhost:3001/get/personnel");
        dispatch(setPersonnelList(result.data.data))

    },[])

    return(
        <div className={`flex`}>
            <table className="w-full border-collapse border-slate-400 table-fixed">
                <thead className={`bg-gray-300`}>
                <tr className={`font-semibold`}>
                    <th className="border-collapse border border-slate-400">Faculty Name</th>
                    <th className="border-collapse border border-slate-400">Email</th>
                    <th className="border-collapse border border-slate-400">Actions</th>
                </tr>
                </thead>
                <tbody className={`text-center`}>
                {verifiedPersonnel.map((result, index) =>{
                return(
                <tr key={index}>
                    <td className={`${styles.td} border-collapse border border-slate-400 capitalize`}>{result.given_name} {result.family_name}</td>
                    <td className={`${styles.td} border-collapse border border-slate-400`}>{result.email}</td>
                    <td className={`${styles.td} border-collapse border border-slate-400`}>{}</td>
                </tr>
                )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default ViewPersonnel;