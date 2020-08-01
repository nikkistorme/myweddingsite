import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const isCurrentPage = (pathname, link_name) => pathname === link_name ? true : false

export default function() {
  const router = useRouter();
  return (
    <header>
      <h1>
        nikki & alison
        <span className="big-ol-asterisk">*</span>
      </h1>
      <nav>
        <ul className="nav">
          <li className={isCurrentPage(router.pathname, "/") ? "active" : null}><Link href="/"><a>You're Invited!</a></Link></li>
          <li className={isCurrentPage(router.pathname, "/details") ? "active" : null}><Link href="/details"><a>Wedding Details</a></Link></li>
          <li className={isCurrentPage(router.pathname, "/our-story") ? "active" : null}><Link href="/our-story"><a>Our Story</a></Link></li>
          <li className={isCurrentPage(router.pathname, "/registry") ? "active" : null}><Link href="/registry"><a>Registry</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}