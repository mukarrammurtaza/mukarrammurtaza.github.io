import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';





const Navigation = () => {
  
const items = [{ link: "Home" }, { link: "Work" }, { link: "Contact" }];
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
};

  const itemAnim = {
  hidden: { x: -40, opacity: 0 },
  visible: {  
    x: 0,
    opacity: 1
  }
};

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <motion.ul className="noListStyle navigationList"
        variants={container}
        initial="hidden"
        animate="visible"      
      >
        {items.map((item, index) => (
          // use 'active' for active li
          <motion.li key={index} variants={itemAnim}><Link className='colorlessLink' to={`/${item.link}`}>{item.link}</Link></motion.li>
        ))}
      </motion.ul>

      <label className='navigationListHamburger'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
      </label>
    </nav>
  )
}

export default Navigation