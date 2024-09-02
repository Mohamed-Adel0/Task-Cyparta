import React from 'react';
import Image from 'next/image';
import Profile from "../Pictures/profilex.jpg"
import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
    return (
        <div>
            {/* Here for Header To See Notification & Image Profile */}
            <div className="w-ful h-16">
                <div className="w-full h-full flex justify-end items-center">
                   <div className="w-1/4 flex justify-center items-center gap-5">
                    <button className='btn-notification'><IoIosNotificationsOutline/></button>
                    <Image className='w-11 cursor-pointer' src={Profile} alt=''/>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
