import React from 'react';
const Navigation = ({setMoveToEle}) => {




  //edit items to change navigation bar
  const items = [
    { name: "Home", link: 'home' },
    { name: "Work", link: 'work' }, 
    { name: "Industry", link: 'industries' },
    { name: "Contact", link: 'contact' },
  ];


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
            <button className='noStyleButtons' to={item.link} onClick={()=>{setMoveToEle(item.link)}}>
              {item.name}
            </button>
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
