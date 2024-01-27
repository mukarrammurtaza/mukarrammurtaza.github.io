import HeroSection from './../components/HomeComponents/HeroSection';
import CaseStudiesSection from '../components/HomeComponents/CaseStudiesSection';
import OurCapabilitiesSection from './../components/HomeComponents/OurCapabilitiesSection';
import ImageParallel from './../components/HomeComponents/ImageParallel';
import ExperienceSection from './../components/HomeComponents/ExperienceSection';
import GetInTouchSection from './../components/HomeComponents/GetInTouchSection';
import './../styles/Home.css'
import ImageHero from './../components/HomeComponents/ImageHero';

const Home = () => {
  return (
    <main className="bodyContent">
      {/* <ImageHero/> */}
      <HeroSection/>
      <CaseStudiesSection/>
      <OurCapabilitiesSection/>
      {/* <ImageParallel/> */}
      <ExperienceSection/> 
      <GetInTouchSection/>
    </main>
  )
}

export default Home