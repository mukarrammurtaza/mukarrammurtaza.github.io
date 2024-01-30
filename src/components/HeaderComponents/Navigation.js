import React from 'react';
import { Link } from 'react-router-dom';





const Navigation = () => {
  
const items = [{ link: "Home" }, { link: "Work" }, { link: "Contact" }];


  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <ul className="noListStyle navigationList">
        {items.map((item, index) => (
          // use 'active' for active li
          <li key={index} ><Link className='colorlessLink' to={`/${item.link}`}>{item.link}</Link></li>
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
  )
}

export default Navigation