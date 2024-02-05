import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const items = [
    { name: "Home", link: '/' },
    { name: "Work", link: '#work' }, 
    { name: "Industry", link: '#industries' },
    { name: "Contact", link: '#contact' },
  ];

  const location = useLocation();
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <ul className="noListStyle navigationList">
        {items.map((item, index) => (
          <li key={index} >
            {/* className={location.pathname === item.link ? 'active' : ''} addthis to make it active*/}
            <Link className='colorlessLink' to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <label className='navigationListHamburger'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
      </label>
    </nav>
  );
};

export default Navigation;
