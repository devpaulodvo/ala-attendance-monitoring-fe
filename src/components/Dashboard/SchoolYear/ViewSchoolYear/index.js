import React, { useEffect } from 'react'
import Axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';
import { selectSchoolYearList, setSchoolYearList } from '../../../../slice/SchoolYearSlice';

const ViewSchoolYear = () => {
    const sy = useSelector(selectSchoolYearList);
    const dispatch = useDispatch();

    const mydata = [].concat(sy).sort((a,b)=>a.yearstart > b.yearstart ? 1 : -1).map((result, index)=>{
        return(
            <tr key={index}>
                <td className={`border-collapse border border-slate-400 capitalize`}>{result.yearstart.slice(0,4)} - {result.yearend.slice(0,4)}</td>
                <td className="border-collapse border border-slate-400">{result.status ? <span>Active</span>: <span>Not Active</span>}</td>
            </tr>
            )
    })

    const fetchSchoolYear = async () => {
        const result = await Axios.get("http://localhost:3001/get/schoolyear");
        dispatch(setSchoolYearList(result.data.data))
    }

    useEffect(() =>{
        fetchSchoolYear();
    }, [])

    return(
        <div className={`flex`}>
            <table className="w-full border-collapse border-slate-400 table-fixed">
                <thead className={`bg-gray-300`}>
                <tr className={`font-semibold`}>
                    <th className="border-collapse border border-slate-400">School Year</th>
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

export default ViewSchoolYear;