import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const ViewSchoolYear = () => {
    const [sy, setSy] = useState({})

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
                {/* {mydata} */}
                </tbody>
            </table>
        </div>
    )

}

export default ViewSchoolYear;