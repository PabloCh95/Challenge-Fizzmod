import React from 'react'
import { RiFacebookFill , RiTwitterFill, RiYoutubeFill} from 'react-icons/ri'

import './SocialLinks.scss'

export default function SocialLinks() {
    return (
        <div className="sociallinks">
            <a href="https://www.facebook.com">
            <RiFacebookFill color="#fff" size="1.5rem"/>
            </a>
            <a href="https://www.twitter.com">
            <RiTwitterFill color="#fff" size="1.5rem"/>
            </a>
            <a href="https://www.youtube.com">
            <RiYoutubeFill color="#fff" size="1.5rem"/>
            </a>
        </div>
    )
}
