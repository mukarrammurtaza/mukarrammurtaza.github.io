import { Link } from 'react-router-dom';

function CrootiveLogo() {
  const brandName = 'crootive'
  return (
    <span className='crootiveLogoContainer'>
    <Link className="colorlessLink crootiveLogo" to={'/'}>{/* colorlessLink removes all color */}
    {brandName.split("").map((letter, index) => (
      <span
        key={index}
        className={
          index > 0 && index < 5 ? "crootiveColorLetter" : "crootiveLetter"
        }
      >
        {letter}
      </span>
    ))}
  </Link>
  </span>
  );
}

export default CrootiveLogo;