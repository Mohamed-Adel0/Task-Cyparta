"use client";
import React, { useState } from "react";
import { MdSpaceDashboard, MdOutlineEventAvailable ,MdOutlineGroups2} from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { CiUser , CiDollar } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../Pictures/logo.jpg";
import Link from "next/link";
import { usePathname } from 'next/navigation'
const NavBar = () => {
  // State to manage open/close of dropdowns
  const [isOpen, setIsOpen] = useState({});
  const pathname = usePathname()
  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <div>
      <div className="parent-navbar">
        <div className="container-navbar">
          <div className="img w-full h-1/4">
            <Image src={logo} className="w-full h-full object-fill" alt="Image Not Found"></Image>
          </div>
          <ul className="w-full h-2/3 flex flex-col gap-4 ">
          {/* Here for DashBord */}
            <li className={`li-navbar ${pathname === '/dashbord' ? 'active' : ''}`}>
              <Link href="" className={`a-link`}><span className="icon-navbar"><MdSpaceDashboard /></span> Dashboard </Link>
            </li>
          {/* Here for Toggel Employees */}
            <li className={`li-navbar ${pathname === '/employees' ? 'active' : ''}`} onClick={()=> toggleDropdown("Employees")}>
              <Link href="" className="a-link"><span className="icon-navbar"><MdOutlineGroups2 /></span> Employees <span className="icon-navbar pl-4"><IoIosArrowDown /></span></Link>
            </li>
            <ul className={`${isOpen.Employees ? "block" : "hidden"} `}>
                <div className="toggle-ul flex flex-col items-end ">
                <li className="p-1 w-2/3"><Link href="/pay" className="toggle-a-link"><span className="toggle-icon"><CiUser/></span> Profile</Link></li>
                <li className="p-1 w-2/3"><Link href="/attendance" className="toggle-a-link"><span className="text-xl toggle-icon"><BiTask/></span> Attendance</Link></li>
                <li className="p-1 w-2/3"><Link href="/tasks" className="toggle-a-link"><span className="text-xl toggle-icon"><CiUser/></span> Tasks</Link></li>
                </div>
            </ul>
            {/* Here for Payroll */}
            <li className={`li-navbar ${pathname === '/payroll' ? 'active' : ''}`}>
              <Link href="" className="a-link"><span className="icon-navbar"><CiDollar /></span> Payroll </Link>
            </li>
             {/* Here for Toggel Holidays */}
             <li className={`li-navbar ${pathname === '/holidays' ? 'active' : ''}`} onClick={()=> toggleDropdown("Holidays")}>
              <Link href="" className="a-link"><span className="icon-navbar"><MdOutlineEventAvailable /></span> Holidays <span className="icon-navbar pl-8"><IoIosArrowDown /></span></Link>
            </li>
            <ul className={`${isOpen.Holidays ? "block" : "hidden"} `}>
                <div className="toggle-ul flex flex-col items-end ">
                <li className="p-1 w-2/3"><Link href="" className="toggle-a-link"><span className="toggle-icon"><CiUser/></span> Profile</Link></li>
                <li className="p-1 w-2/3"><Link href="" className="toggle-a-link"><span className="text-xl toggle-icon"><BiTask/></span> Attendance</Link></li>
                <li className="p-1 w-2/3"><Link href="" className="toggle-a-link"><span className="text-xl toggle-icon"><CiUser/></span> Tasks</Link></li>
                </div>
            </ul>
            {/* Here for Advanced Payment */}
            <li className={`li-navbar ${pathname === '/payment' ? 'active' : ''}`}>
              <Link href="" className="a-link"><span className="icon-navbar"><IoWalletOutline /></span> Advanced Payment </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
