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
  const position = useTransform(scrollYProgress, [0, 0.05 , 0.09,  1], [ 500, 400, 350, 0])
  const positionParralelImg = useTransform(scrollYProgress, [0, 0.05 , 0.09,  1], [ -500, -450, -420, 0])

  const [csRef, csInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [ocRef, ocInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [exRef, exInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [gtRef, gtInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: 0.2,
      },
    },
  };
  const heroVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: 1,
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
      <ImageHero position={position}/>

      <motion.div variants={heroVariants} initial="hidden" animate="visible">
        <HeroSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={csInView ? "visible" : "hidden"}
        ref={csRef}
      >
        <CaseStudiesSection position={position}/>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={ocInView ? "visible" : "hidden"}
        ref={ocRef}
      >
        <OurCapabilitiesSection />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" animate="visible">
        <ImageParallel position={positionParralelImg}/>
      </motion.div>

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
