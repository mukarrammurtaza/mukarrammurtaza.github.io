import HeroSection from './../components/HomeComponents/HeroSection';
import CaseStudiesSection from '../components/HomeComponents/CaseStudiesSection';
import './../styles/Home.css'
import OurCapabilitiesSection from './../components/HomeComponents/OurCapabilitiesSection';

const Home = () => {
  return (
    <main className="bodyContent">
      <HeroSection/>
      <CaseStudiesSection/>
      <OurCapabilitiesSection/>
    </main>
  )
}

export default Home