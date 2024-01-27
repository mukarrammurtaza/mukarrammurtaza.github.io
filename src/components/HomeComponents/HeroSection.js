const HeroSection = () => {
  return (
    <div className='section heroSection'>
        <aside className='heroAside'>
            <p>We are here to make world a better place for you</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="7" y1="7" x2="17" y2="17" ></line><polyline points="17 7 17 17 7 17"></polyline></svg>
        </aside>
        <div className='heroMain'>
            <h1>You Bring <span className='heroMainHead'>Problems.</span> <br/>We Provide <span className='heroMainHead'>Solutions.</span> </h1>
        </div>
    </div>
  )
}

export default HeroSection