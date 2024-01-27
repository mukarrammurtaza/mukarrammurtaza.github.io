const BackgroundBlurSvg = () => {
  return (
    <div className='blurSvgContainer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" opacity="1">
          <ellipse rx="148.5" ry="147.5" cx="222.4" cy="270.2" fill="hsla(182, 54%, 36%, .3)"></ellipse>
          <ellipse rx="148.5" ry="147.5" cx="481.5" cy="657.4" fill="hsla(180, 3%, 93%, 0.1)"></ellipse>
          <ellipse rx="148.5" ry="147.5" cx="122.4" cy="570.2" fill="hsla(182, 54%, 36%, .4)"></ellipse>
          <ellipse rx="148.5" ry="147.5" cx="522.4" cy="330.2" fill="hsla(182, 54%, 36%, .5)"></ellipse>
          <ellipse rx="148.5" ry="147.5" cx="485.3" cy="231.5" fill="hsla(180, 3%, 19%, .3)"></ellipse>
          <ellipse rx="148.5" ry="147.5" cx="381.5" cy="457.4" fill="hsla(180, 3%, 93%, 0.1)"></ellipse>
        </svg>
    </div>
  )
}

export default BackgroundBlurSvg