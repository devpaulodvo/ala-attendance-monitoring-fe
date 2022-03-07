import React, { useEffect } from 'react'
import Axios from "axios";
import { useSelector, useDispatch} from 'react-redux';
import { selectPersonnelList, setPersonnelList } from '../../../../slice/PersonnelSlice';
import styles from './index.module.css'

const AddPersonnel = () => {
    const dispatch = useDispatch();
    
    const personnel = useSelector(selectPersonnelList);
    const unverifiedPersonnel = personnel.filter((result)=>{
        return result.verified === false &&
                result.role !== 'admin' ;
    })

    useEffect(() =>{
        const fetchMyApi = async () =>{
            const result = await Axios.get("http://localhost:3001/get/personnel");
            dispatch(setPersonnelList(result.data.data))
        }
        fetchMyApi()
    },[dispatch])

    const editStatus = async (email, status) => {
        const data = await Axios.post("http://localhost:3001/verify/personnel", {
            email: email,
            status: status
        });
        if(data.data.data.acknowledged){
            const result = await Axios.get("http://localhost:3001/get/personnel");
            console.log(result.data.data)
            dispatch(setPersonnelList(result.data.data))
            alert(`${email} Status Updated!`)
        }

        console.log(data)
    }

    return(
        <div>
            <div className={`flex`}>
            <table className="w-full border-collapse border-slate-400 table-fixed">
                <thead className={`bg-gray-300`}>
                <tr className={`font-semibold`}>
                    <th className="border-collapse border border-slate-400">Faculty Name</th>
                    <th className="border-collapse border border-slate-400">Email</th>
                    <th className="border-collapse border border-slate-400">Edit Status</th>
                </tr>
                </thead>
                <tbody className={`text-center`}>
                {unverifiedPersonnel.map((result, index) =>{
                return(
                <tr key={index}>
                    <td className={`${styles.td} border-collapse border border-slate-400 capitalize`}>{result.given_name} {result.family_name}</td>
                    <td className={`${styles.td} border-collapse border border-slate-400`}>{result.email}</td>
                    <td className={`${styles.td} border-collapse border border-slate-400 cursor-pointer hover:bg-green-200 ${!result.verified ? 'bg-orange-200': null}`}
                    onClick={()=>{
                        editStatus(result.email, result.verified)
                    }}
                    >
                    {result.verified ? <span>Verified</span> : <span>Unverified</span>}</td>
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