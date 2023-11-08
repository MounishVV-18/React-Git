import './Asset/css/grid.css';
import {Activity,User,Contact,Award,Accessibility} from 'lucide-react';
import {Headphones,Battery,Plug,Computer,Pi,Diameter,Plus,Pencil,Pen} from 'lucide-react';
const Hello= () =>
{
    return(
        <>
            <h1 style={{textAlign:'center'}}>Table</h1>
        <table border={2} style={{justifyContent:'center',alignItems:'center'}}>
            <tr>
                <td><Activity size={20} color='skyblue' strokeWidth={1}/></td>
                <td><User size={20} color='yellow' strokeWidth={1}/></td>
                <td><Contact size={20} color='seagreen' strokeWidth={1}/></td>
                <td><Award size={20} color='brown' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Accessibility size={20} color='red' strokeWidth={1}/></td>
                <td><Headphones size={20} color='violet' strokeWidth={1}/></td>
                <td><Battery size={20} color='black' strokeWidth={1}/></td>
                <td><Pi size={20} color='darkblue' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Plug size={20} color='purple' strokeWidth={1}/></td>
                <td><Computer size={20} color='orange' strokeWidth={1}/></td>
                <td><Diameter size={20} color='gold' strokeWidth={1}/></td>
                <td><Plus size={20} color='grey' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Pencil size={20} color='brown' strokeWidth={1}/></td>
                <td><Pen size={20} color='lightpink' strokeWidth={1}/></td>
                <td><Contact size={20} color='darkgreen' strokeWidth={1}/></td>
                <td><Award size={20} color='darkred' strokeWidth={1}/></td>
            </tr>
        </table>
        </>
    )
}
export default Hello;