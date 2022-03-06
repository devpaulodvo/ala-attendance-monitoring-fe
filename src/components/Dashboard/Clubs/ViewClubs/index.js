import React from 'react'
import { useSelector } from 'react-redux';
import { selectClubs } from '../../../../slice/ClubSlice';

const ViewClubs = () => {

    const clubs = useSelector(selectClubs)

    //sort clubs by clubname
    const mydata = [].concat(clubs).sort((a,b)=>a.clubname > b.clubname ? 1 : -1).map((result, index)=>{
        return(
            <tr key={index}>
                <td className={`border-collapse border border-slate-400 capitalize`}>{result.clubname}</td>
                <td className="border-collapse border border-slate-400">{result.status ? <span>Active</span>: <span>Not Active</span>}</td>
            </tr>
            )
    })

    return(
        <div className={`flex`}>
            <table className="w-full border-collapse border-slate-400 table-fixed">
                <thead className={`bg-gray-300`}>
                <tr className={`font-semibold`}>
                    <th className="border-collapse border border-slate-400">Club Name</th>
                    <th className="border-collapse border border-slate-400">Status</th>
                </tr>
                </thead>
                <tbody className={`text-center`}>
                {mydata}
                </tbody>
            </table>
        </div>
    )
}

export default ViewClubs;