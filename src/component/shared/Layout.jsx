import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
export default function Layout(){
   return( 
<div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <Sidebar/>
    <div className="flex-1">
        <Header/>
        <div ><Outlet></Outlet></div>
    </div>
</div>

    
   )
}