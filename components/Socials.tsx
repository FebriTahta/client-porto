import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faThreads } from '@fortawesome/free-brands-svg-icons';

type SocialsProps = {
    icon: string | JSX.Element;
    url: string;
}

export function Socials({icon, url}: SocialsProps) {
    return (
        <a href={url} target='_blank' className="text-foreground hover:text-primary transition-all">
            {typeof icon === 'string' ? (
                <FontAwesomeIcon icon={
                    icon === 'faInstagram' ? faInstagram :
                    icon === 'faLinkedin' ? faLinkedin :
                    icon === 'faThreads' ? faThreads : faThreads
                } className="mr-1" />
            ) : (
                icon
            )}
        </a>
    )
}   
