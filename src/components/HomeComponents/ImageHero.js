import { motion } from 'framer-motion'
 
const ImageHero = ({position}) => {
  return (
    <motion.div className='heroImage' style={{ height: position,transition: `transform 0.2s ease`}}>
        <img src="https://fffuel.co/images/dddepth/dddepth-239.jpg" alt="temp" />
    </motion.div>
  )
}

export default ImageHero