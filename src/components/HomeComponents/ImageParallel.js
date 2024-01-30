import { motion } from 'framer-motion'
import Img from '../../assets/ParrallelImage.png'

const ImageParallel = ({position}) => {
  return (
    <motion.div className='scrollBackgroundImage'>
      <motion.img src={Img} alt="parralel" style={{translateY: position}} />
      </motion.div>
  )
}

export default ImageParallel