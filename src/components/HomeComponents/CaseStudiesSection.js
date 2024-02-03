import SwiftImg from '../../assets/SwiftImg.JPG'
import { Link } from 'react-router-dom';
const CaseStudiesSection = () => {
    // Array of objects representing data for each csCarasolItem
    const caseStudiesData = [
      {
        imageUrl: SwiftImg,
        itemText: "HRMS",
        itemCompany: "Swift Delivery",
        link: '/Work/SwiftDelivery' 
      },
      {
        imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        itemText: "PROMO PAGE",
        itemCompany: "Polestar",
        link: '/Work/SwiftDelivery' 
      },
      {
        imageUrl: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        itemText: "PROMO PAGE",
        itemCompany: "Polestar",
        link: '/Work/SwiftDelivery' 
      },
    ];
  
    return (
      <div className='section sectionCaseStudies' >
        <aside className='csAside'>
          <p>1 <span className='setGreen'>&mdash;</span> 5 &nbsp;</p>
          <h2>Case Studies</h2>
        </aside>
        <div className='csCarasol' >
          {caseStudiesData.map((item, index) => (
            <div key={index} className='csCarasolItem'>
              <Link to={item.link} className='csImgContainer'>
                <img src={item.imageUrl} alt={item.itemCompany} />
              </Link>
              <div className='itemInfo'>
                <p className='fadeItemText'>{item.itemText}</p>
                <h3 className='itemCompany'>{item.itemCompany}</h3>
              </div>
            </div>
          ))}
        </div>
          {/* <button className='buttons' onClick={()=>{}}>&gt;</button>
          <button className='buttons' onClick={()=>{}}>&lt;</button> */}
      </div>
    );
  }
  
  export default CaseStudiesSection;
  