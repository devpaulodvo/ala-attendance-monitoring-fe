import React, { useEffect } from 'react'
import Axios from "axios";
import { useSelector, useDispatch} from 'react-redux';
import { selectPersonnelList, setPersonnelList } from '../../../../slice/PersonnelSlice';
import styles from './index.module.css'

const AddPersonnel = () => {

    const personnel = useSelector(selectPersonnelList);
    const unverifiedPersonnel = personnel.filter((result)=>{
        return result.verified === false &&
                result.role !== 'admin' ;
    })
    const dispatch = useDispatch();
    useEffect( async () =>{
        const result = await Axios.get("http://localhost:3001/get/personnel");
        dispatch(setPersonnelList(result.data.data))
    },[])

    return(
        <div>
            <div className={`flex`}>
            <table className="w-full border-collapse border-slate-400 table-fixed">
                <thead className={`bg-gray-300`}>
                <tr className={`font-semibold`}>
                    <th className="border-collapse border border-slate-400">Faculty Name</th>
                    <th className="border-collapse border border-slate-400">Email</th>
                    <th className="border-collapse border border-slate-400">Verified</th>
                </tr>
                </thead>
                <tbody className={`text-center`}>
                {unverifiedPersonnel.map((result, index) =>{
                return(
                <tr key={index}>
                    <td className={`border-collapse border border-slate-400 capitalize`}>{result.given_name} {result.family_name}</td>
                    <td className="border-collapse border border-slate-400">{result.email}</td>
                    <td className="border-collapse border border-slate-400">{result.verified.toString()}</td>
                </tr>
                )
                })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default AddPersonnel;