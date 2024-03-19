import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu, IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
      ];

      const [open,setOpen] = useState (false)
   
    return (
       
        <nav className="bg-yellow-300 p-6 ">
            <div className="md:hidden text-3xl" onClick={() => setOpen (!open)}>
                {
                    open === true ? <IoMdCloseCircleOutline>

                    </IoMdCloseCircleOutline> : <IoIosMenu></IoIosMenu>
                }
            
            </div>
             <ul className={`md:flex absolute md:static bg-yellow-300 px-6
             duration-1000
             ${open ? 'top-16' : '-top-60'}
             `}>
             {
                routes.map (route => <Link key={route.id} route={route}> </Link>)
             }
             </ul>
        </nav>
       
    );
};

export default Navbar;