import Link from 'next/link'
import React from 'react'

import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = () => {
  return <nav classname="flex justify-between bg-nav p-4">
    <div className='flex items-center space-x-4'>
        <Link href="/">
            <FontAwesomeIcon icon={faHome} className='icon'/>
        </Link>

        <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faTicket} className='icon'/>
        </Link>

    </div>
    <div>
        <p className='text-default-text'>Email</p>
    </div>
  </nav>
}

export default Nav
