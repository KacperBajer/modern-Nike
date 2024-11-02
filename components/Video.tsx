import React from 'react'

type Props = {
  href: string
}

const Video = ({href}: Props) => {
  return (
    <video width="320" height="240" className='w-full h-fit' muted autoPlay loop>
      <source src={href} type="video/mp4" />
      Your browser does not support the video tag.
    </video>    
  )
}

export default Video