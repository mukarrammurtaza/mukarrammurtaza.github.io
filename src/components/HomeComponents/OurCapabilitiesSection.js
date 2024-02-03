import React from 'react';
import PlusSvg from './PlusSvg';

const OurCapabilitiesSection = () => {


  const [openIndex, setOpenIndex] = React.useState(null);  
  const capabilities = [
    {
      title: 'UX & Product Design',
      description: 'Crafting user experiences that leave a lasting impression. Our designs focus on simplicity, functionality, and elegance.'
    },
    {
      title: 'Product Development',
      description: 'Turning ideas into reality. From conceptualization to delivery, we handle every step of the product development process.'
    },
    {
      title: 'Award-winning Design',
      description: 'Recognized for excellence. Our designs have received awards for their innovation, creativity, and impact on the user experience.'
    },
    {
      title: 'Communication Design',
      description: 'Effective visual communication. We specialize in conveying your message through compelling and visually appealing design elements.'
    },
  ];

  const handleLiClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
    console.log(openIndex, index);
  };

  return (
    <div className="section sectionOurCapabilities" >
      <aside className="csAside ocAside">
        <p>*</p>
        <h2>Our Capabilities</h2>
      </aside>
      <ul className="noListStyle ocList"
      >
        {capabilities.map((capability, index) => (
          <li key={index} onClick={() => handleLiClick(index)} className={index === openIndex ? 'liOpen': ''}
          >
            <div className="ocHead" >
              <p>{capability.title}</p>
              <PlusSvg />
            </div>
              <div className='ocDescription'
              >
                <p>{capability.description !== null ? capability.description : "no description found"}</p>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurCapabilitiesSection;
