import { Link } from "react-router-dom";

export default function Dashboard(){
   return( 
    <div>
    This is Dashboard
    <Link to= './products'><p className="underline">Go to Products</p></Link>
    </div>
    
   )
}