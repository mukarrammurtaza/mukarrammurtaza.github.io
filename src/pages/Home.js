import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "./../components/HomeComponents/HeroSection";
import CaseStudiesSection from "../components/HomeComponents/CaseStudiesSection";
import OurCapabilitiesSection from "./../components/HomeComponents/OurCapabilitiesSection";
import ImageParallel from "./../components/HomeComponents/ImageParallel";
import ExperienceSection from "./../components/HomeComponents/ExperienceSection";
import GetInTouchSection from "./../components/HomeComponents/GetInTouchSection";
import ImageHero from "./../components/HomeComponents/ImageHero";
import "./../styles/Home.css";
import Industry from './../components/HomeComponents/Industry';

const Home = ({moveToEle, setMoveToEle}) => {


  //animations
  React.useEffect(() => {
    if(moveToEle === 'home'){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }else if(moveToEle != null){
      const offsetTop = document.getElementById(moveToEle).offsetTop;
      window.scrollTo({
        top: offsetTop - 70,
        behavior: 'smooth',
      });
    }
    return () => {
      setMoveToEle(null);
    }
  }
  , [moveToEle, setMoveToEle]);
  React.useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, []);
  const scrollRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })
  const positionParralelImg = useTransform(scrollYProgress, [0, 0.6 , 0.9,  1], [ 1000, 500, 100, 0])
  const [exRef, exInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [gtRef, gtInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const sectionVariants = {
    hidden: { opacity: 0, y : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      },
    },
  };
  

  return (
    <motion.main
      className="bodyContent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ImageHero />
      <HeroSection />
      <CaseStudiesSection/>
      <OurCapabilitiesSection/>
      {/* <Industry/> */}
      <Industry/>
      <ImageParallel position={positionParralelImg}/>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={exInView ? "visible" : "hidden"}
        ref={exRef}
      >
        <ExperienceSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={gtInView ? "visible" : "hidden"}
        ref={gtRef}
        id={'contact'}
      >
        <GetInTouchSection />
      </motion.div>

    </motion.main>
  );
};

export default Home;
