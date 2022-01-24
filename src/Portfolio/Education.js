
import { Fragment } from "react/cjs/react.production.min";
const Education = () => {
    return (
        <>
        <div>            
            <fieldset className="font-serif border-2 border-double rounded-lg border-black ml-[10px] sm:ml-[20%] mr-[20px] sm:mr-[20%]">
                <legend class="text-lg font-bold text-blue-800">ACADEMIC BACKGROUND</legend>
                <table className="table-auto mx-1 sm:mx-[10%] my-5">
                    <tr className= "bg-blue-800 text-white"><th>S.no</th><th>Course</th><th>Institution</th><th>Year of passing</th><th>Percentage of marks | Grade</th></tr>
                    <tr className="bg-gray-300"><td>1</td><td>B.C.A</td><td>The M.D.T Hindu college, Tirunelveli -Pettai</td><td class="text-center">2019</td><td class="text-center">72%</td></tr>
                    <tr className="bg-gray-100"><td>2</td><td>H.D.C.P</td><td>Computer Software College, Tirunelveli -Town</td><td class="text-center">2017</td><td class="text-center">A</td></tr>
                    <tr className="bg-gray-300"><td>3</td><td>H.S.C</td><td>Schaffter Higher Secondry School, Tirunelveli -Town</td><td class="text-center">2016</td><td class="text-center">76%</td></tr>
                    <tr className="bg-gray-100"><td>4</td><td>S.S.L.C</td><td>Schaffter Higher Secondry School, Tirunelveli -Town</td><td class="text-center">2014</td><td class="text-center">89%</td></tr>               
                </table>
            </fieldset>
        </div>  
        </>
    )
}

export default Education
