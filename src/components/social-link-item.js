import React from 'react'

const SocialLinkItem = props => {
  return (
    <li className="list-inline-item">
      <a
        href={props.url}
        aria-label={props.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {React.createElement(props.logo, { size: '4em' })}
      </a>
    </li>
  )
}

export default SocialLinkItem
