import React, { useEffect, useState } from 'react'

type WindowSize = {
  width: number,
  height: number
}

const UseWindowSize = () => {
  
    const [size, setSize] = useState<WindowSize>({
        width: 0,
        height: 0,
      });
    
      useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
         
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []); // Empty array ensures that effect is only run on mount    

  return size

}

export default UseWindowSize