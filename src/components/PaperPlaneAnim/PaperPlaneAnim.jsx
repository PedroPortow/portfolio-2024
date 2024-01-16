import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import paperplaneAnimation from '../../assets/paperplane.json';

function PaperPlaneAnim() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: paperplaneAnimation,
    });
  
    return () => anim.destroy(); // Cleanup function
  }, []);
  

  return (
    <>
      <div className="container"  ref={container} />
    </>
  );
}

export default PaperPlaneAnim;
