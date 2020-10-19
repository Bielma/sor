import React from 'react'
import { FooterDiv, PoweredBy, Icons } from '../styles/components'


export default function Footer() {
  
  const copyright = "Antonio Bielma";
  const sourceNote = 'This site is open <a href=\"https://github.com/Bielma/sor\">source</a>';
  const poweredBy = [
    {
        url: 'https://gatsbyjs.org',
        title: 'Gatsby',
    },
    {
        url: 'https://github.com/Bielma/',
        title: 'Github',
    }
    
  ]; 

  return (
    <FooterDiv>
      <span>
        © {new Date().getFullYear()} - {copyright}
      </span>
      <span dangerouslySetInnerHTML={{ __html: sourceNote }} />
      <PoweredBy>
        Powered by&ensp;
        {poweredBy.map(({ url, title }) => {
          const Icon = Icons[title]
          return (
            <a key={title} href={url} aria-label={title}>
              <Icon size="1.4em" />
            </a>
          )
        })}
      </PoweredBy>
    </FooterDiv>
  )
}
