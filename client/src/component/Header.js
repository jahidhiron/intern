import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const[open ,setOpen]=useState(false)
    return (
       <section>
                <section className='z-50 header bg-white'>          
        <div className='first-header shadow-xl '>
         <div className='container mx-auto flex justify-between pb-5 pt-5'>
               <div className="logo">
               <span className='text-[#145A32] text-xl font-bold pr-2 pl-2'>To Do List</span>
               </div>
               <div className="">
                    <div onClick={()=>setOpen(!open)} className='md:hidden pr-2'>
                       {open?<i class="fa fa-times text-[green] text-2xl" aria-hidden="true"></i>
                       :<i class="fa fa-bars text-[green] text-2xl" aria-hidden="true"></i>}
                    </div>
                    <ul className={`md:flex font-sans font-medium duration-500 
                    ease-in md:static w-full absolute ${open?'top-[72px] right-0 bg-white':'top-[-300px] right-0 bg-white'}`}>
                       <Link to="/"> <li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-[green] border-y-2 md:border-y-0'>SignUp</li></Link>
                       <Link to="/signin"><li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-[green] border-y-2 md:border-y-0'>SignIn</li></Link>
                       <Link to="/addTodo"><li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-[green] border-y-2 md:border-y-0'>AddTodo</li></Link>
                       <Link to="/categoryAdd"><li className='md:mr-5 md:text-xl text-center md:py-0 p-3 text-[green] border-y-2 md:border-y-0'>category</li></Link>

                    </ul>  
                </div>
            </div>
         </div>
         </section>
       </section>
    );
};

export default Header;