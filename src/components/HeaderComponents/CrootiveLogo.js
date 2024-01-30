import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

function CrootiveLogo() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      }
    }
  };
  
    const itemAnim = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const brandName = 'crootive'
  return (
    <motion.span className='crootiveLogoContainer' 
    variants={container}
    initial="hidden"
    animate="visible"      
    >
    <Link className="colorlessLink crootiveLogo" to={'/'}>{/* colorlessLink removes all color */}
    {brandName.split("").map((letter, index) => (
      <motion.span
        key={index}
        className={
          index > 0 && index < 5 ? "crootiveColorLetter" : "crootiveLetter"
        }
        variants={itemAnim}
      >
        {letter}
      </motion.span>
    ))}
  </Link>
  </motion.span>
  );
}

export default CrootiveLogo;