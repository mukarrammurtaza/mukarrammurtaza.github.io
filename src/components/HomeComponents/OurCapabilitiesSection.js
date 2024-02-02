import React from 'react';
import { MotionConfig, motion } from 'framer-motion';
import PlusSvg from './PlusSvg';

const OurCapabilitiesSection = () => {


  const [openIndex, setOpenIndex] = React.useState(null);  
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  // const ocRef = React.useRef(null);
  // const [elementHeight, setElementHeight] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    if(viewportWidth < 565){
      // setElementHeight(40);
    }
    console.log(viewportWidth)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  const capabilities = [
    {
      title: 'UX & Product Design',
      description: 'Crafting user experiences that leave a lasting impression. Our designs focus on simplicity, functionality, and elegance.'
    },
    {
      title: 'Product Development',
      description: 'Turning ideas into reality. From conceptualization to delivery, we handle every step of the product development process.'
    },
    {
      title: 'Award-winning Design',
      description: 'Recognized for excellence. Our designs have received awards for their innovation, creativity, and impact on the user experience.'
    },
    {
      title: 'Communication Design',
      description: 'Effective visual communication. We specialize in conveying your message through compelling and visually appealing design elements.'
    },
  ];

  const handleLiClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const sectionVariants = {
    hidden: {  height : "15vh" },
    visible: {
      height: viewportWidth < 610 ? '50vh': '35vh' ,
      transition: {
        type: "linear",
        duration: 0.2,
      },
    },
  };
  const ocVariants = {
    hidden: { opacity: 0, y : -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "linear",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  return (
    <MotionConfig transition={{ duration: 1 }}>
    <div className="section sectionOurCapabilities" >
      <aside className="csAside ocAside">
        <p>*</p>
        <h2>Our Capabilities</h2>
      </aside>
      <ul className="noListStyle ocList"
      >
        {capabilities.map((capability, index) => (
          <motion.li key={index} onClick={() => handleLiClick(index)} className={index === openIndex ? 'liOpen': ''}
          variants={sectionVariants}
          initial="hidden"
          animate={index === openIndex ? "visible" : "hidden"}
          >
            <div className="ocHead" >
              <p>{capability.title}</p>
              <PlusSvg />
            </div>
            {openIndex === index && (
              <motion.div className='ocDescription'
              variants={ocVariants}
              initial="hidden"
              animate={index === openIndex ? "visible" : "hidden"}
              >
                {capability.description !== null ? capability.description : "no description found"}
              </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
    </MotionConfig>
  );
};

export default OurCapabilitiesSection;
