import React from 'react'
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
const linkClass ='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
export default function Sidebar() {
  return ( 
  //  first div is the parent div

   <div className='flex flex-col w-60 p-3  bg-neutral-900 text-white'>
{/* icondiv start*/} <div className='flex items-center gap-2 px-1 py-3'> 
                      <FcBullish fontSize={24}/>
                        <span className='text-neutral-100'>Open Shop</span>
{/* icondiv end*/}    </div>
        
        <div className='flex-1 flex flex-col py-8 gap-0.5'>
        
          {DASHBOARD_SIDEBAR_LINKS.map((item)=>( 
            <SidebarLink key={item.key} items={item}/>
        
        ))}
        </div> 
        <div className='flex flex-col gap-0.5 pt-3 border-t border-neutral-400'>{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>
        ( 
          <SidebarLink key={item.key} items ={item}/>
        )
        )}
        </div>
      <div className=
    {classNames
    
    ('text-red-400 cursor-pointer ',linkClass)}>
     
    <span className='text-xl'><HiOutlineLogout/></span>
      Logout

</div>
    </div>
  )
}

function SidebarLink({items}){
  const {pathname} = useLocation()
  return(
    <Link to={items.path} className=
    {classNames
    (pathname === items.path ?
    ' bg-neutral-700 text-white':'text-neutral-400',linkClass)}>
     
    <span className='text-xl'>{items.icon}</span>
    {items.label}

</Link> 
  )
}

