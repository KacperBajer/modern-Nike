import React from 'react'

const HeroVideo = () => {
  return (
    <video width="320" height="240" className='w-full h-fit' muted autoPlay loop>
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  )
}

export default HeroVideo