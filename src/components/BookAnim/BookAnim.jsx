import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import emojiAnim from '../../assets/book.json';

function BookAnim() {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: emojiAnim,
    });
  
    return () => anim.destroy(); // Cleanup function
  }, []);
  

  return (
    <>
      <div className="container" style={{ zIndex: '2', height: "150px" }} ref={container} />
    </>
  );
}

export default BookAnim;
