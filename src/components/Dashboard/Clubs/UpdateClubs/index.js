import React from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectClubs, setClubs } from '../../../../slice/ClubSlice';

import styles from './index.module.css';

const UpdateClubs = () => {
    const clubs = useSelector(selectClubs)
    const dispatch = useDispatch();

    //sort clubs by clubname
    const mydata = [].concat(clubs).sort((a,b)=>a.clubname > b.clubname ? 1 : -1).map((result, index)=>{
        return(
            <tr key={index}>
                <td className={`border-collapse border border-slate-400 capitalize`}>{result.clubname}</td>
                <td onClick={ async ()=>{
                    const data = await Axios.post("http://localhost:3001/update/club", {
                        clubname: result.clubname,
                        status: result.status
                    });
                    if(data.data.data.acknowledged){
                        const resultclub = await Axios.get("http://localhost:3001/get/clubs");
                        dispatch(setClubs(resultclub.data.data))
                        alert(`${result.clubname} Status Updated!`)
                    }
                }} className={`border-collapse border border-slate-400 cursor-pointer ${!result.status ? 'bg-red-200': 'bg-green-200'}`}>{result.status ? <span>Active</span>: <span>Not Active</span>}</td>
            </tr>
            )
    })

    return(
        <div>
            <div className={`flex`}>
            <table className="w-full border-collapse border-slate-400 table-fixed">
                <thead className={`bg-gray-300`}>
                <tr className={`font-semibold`}>
                    <th className="border-collapse border border-slate-400">Club Name</th>
                    <th className="border-collapse border border-slate-400">Edit Status</th>
                </tr>
                </thead>
                <tbody className={`text-center`}>
                    {mydata}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default UpdateClubs;