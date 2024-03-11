import Link from 'next/link'
import React from 'react'

import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = () => {
  return <nav>
    <div>
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
