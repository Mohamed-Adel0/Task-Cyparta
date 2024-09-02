"use client"
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Profile from "../Picture/bg.jpg"
import { IoBriefcaseOutline ,IoDocumentTextOutline } from "react-icons/io5";
import { CiUnlock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";
import { DataUser } from "@/app/API/API";
import { usePathname } from 'next/navigation'
const Employees = () => {
  const pathname = usePathname()
  return (
    <div>
    <div className="parent-employess ">
      <div className="container-employess">
      {/* Header For Desgin Profile */}
        <header className="header-profile">
        {/* Here for Path Page Employess */}
          <div className="paragprah flex justify-start items-center gap-1">
            <h3 className="text-xs font-semibold">Employees </h3>
            <span><IoIosArrowForward/></span>
            <h3 className="text-xs font-semibold">Profile</h3>
          </div>
          {/* This Card for detalis Profile */}
          <div className="card-profile">
          {/* Here for Info Profile */}
          <div className="img w-1/2 h-full flex gap-3">
            <Image className="w-24 h-full" src={Profile} alt="Page Not Found" />
          {/* Here for Detalis User */}
          <div className="info flex flex-col justify-center gap-1">
            <h3 className="font-semibold text-xl">Mariam Aly</h3>
            <p className="flex justify-start items-center gap-3 text-xs"><span className="icon-info"><IoBriefcaseOutline/></span> UX/UI DESIGNER</p>
            <p className="flex justify-start items-center gap-3 text-xs"><span className="icon-info"><CiMail/></span> mariam@gmail.com</p>
          </div>
          </div>
          <div className="btn w-1/4 h-full flex justify-start items-end">
          <button><span className="text-xl"><AiOutlineEdit/></span> Edit Profile</button></div>
          </div>
        </header>
        <div className="info-user">
          {/* Here for Path Layout */}
          <nav>
            <ul className="flex gap-6 h-10 layout">
              <li className={`info-li p-1 ${pathname === '/dashbord' ? 'active' : ''}`}><Link className="flex justify-center items-center gap-2 text-x" href=""><span className="text-xl"><FaUser/></span> Personal Information</Link></li>
              <li className={`info-li p-1 ${pathname === '/professional' ? 'active' : ''}`}><Link className="flex justify-center items-center gap-2 text-x" href=""><span className="text-xl"><IoBriefcaseOutline/></span> Professional Information</Link></li>
              <li className={`info-li p-1 ${pathname === '/documents' ? 'active' : ''}`}><Link className="flex justify-center items-center gap-2 text-x" href=""><span className="text-xl"><IoDocumentTextOutline/></span> Documents</Link></li>
              <li className={`info-li p-1 ${pathname === '/account' ? 'active' : ''}`}><Link className="flex justify-center items-center gap-2 text-x" href=""><span className="text-xl"><CiUnlock/></span> Account Access</Link></li>
            </ul>
          </nav>
          {/* Here for information User */}
          <div className="cards w-full h-full flex flex-col justify-between items-center gap-3 px-1">
            {
              DataUser?.map((e,index)=>
              <div className="card w-full h-14 flex justify-start items-center gap-10" key={index}>
              <div className="card-detalis-user">
                <p className="opacity-60 text-xs">{e.Frist}</p>
                <h3 className="font-light">{e.Two}</h3>
                </div>
                <div className="card-detalis-user">
                <p className="opacity-60 text-xs">{e.Three}</p>
                <h3 className="font-light">{e.Four}</h3>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Employees;
