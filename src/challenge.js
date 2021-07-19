import Landing from './landing.jpg';
import Landing2 from './landing2.jpg';
import Landing3 from './landing3.jpg';
import Landing4 from './landing4.jpg';
import Landing5 from './landing5.jpg';
import Landing6 from './landing6.jpg';


const Challenge = () => {
    return (
        <div className="layout">
            <h3>LATEST CHALLENGES</h3>
            <div className="containers">
                <div className="container">
                    <img src={Landing} alt="img" style={{width:'350px'}}/>
                    <h2>COMPANY WEBSITE</h2>
                    This small site is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!
                </div>
                <div className="container">
                    <img src={Landing2} alt="img" style={{width:'300px'}}/>
                    <h2>COMPANY WEBSITE</h2>
                    This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS.                </div>
                <div className="container">
                    <img src={Landing3} alt="img" style={{width:'300px'}}/>
                    <h2>FOOD DELIVERY</h2>
                    This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS.
                </div>
                <div className="container">
                    <img src={Landing4} alt="img" style={{width:'300px'}}/>
                    <h2>FOOD DELIVERY</h2>
                    This will be a perfect portfolio piece! You'll be working with JSON, managing state, and building like a real-world app. You can even create it as a full-stack project!
                </div>
                <div className="container">
                    <img src={Landing5} alt="img" style={{width:'300px'}}/>
                    <h2>PAYMENT WEBSITE</h2>
                    This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!
                </div>
                <div className="container">
                    <img src={Landing6} alt="img" style={{width:'300px'}}/>
                    <h2>ONLINE PAYMENT</h2>
                    This huge e-commerce challenge will provide an incredible test for your front-end skills. Once you're done, you'll have an amazing project to add to your portfolio!
                </div>
            </div>
        </div>
        
     );
}
 
export default Challenge;