import CrootiveLogo from './HeaderComponents/CrootiveLogo';
import Navigation from './HeaderComponents/Navigation';


const Header = ({setMoveToEle}) => {
  return (
    <header>
      <CrootiveLogo/>
      <Navigation setMoveToEle={setMoveToEle}/>
    </header>
  )
}

export default Header