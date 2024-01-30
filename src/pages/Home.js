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

const Home = () => {

  const scrollRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })
  const positionParralelImg = useTransform(scrollYProgress, [0, 0.05 , 0.09,  1], [ -500, -450, -420, 0])


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
        delay: 0.5,
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
      <CaseStudiesSection />
      <OurCapabilitiesSection />
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
      >
        <GetInTouchSection />
      </motion.div>
      
    </motion.main>
  );
};

export default Home;
