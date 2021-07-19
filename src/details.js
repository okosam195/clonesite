import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';


const Details = () => {
    return ( 
        <div className="details">
             <h3>HOW IT WORKS</h3>
             <div className="boxes">
                <div className="box1">
                    <img src={image1} alt="img" style={{width:'170px'}}/>
                    <h2>Choose your course</h2>
                    <p>Have a look through our collection of web designs. Pick one that you feel will be a nice challenge for you at this stage.</p>
                </div>
                <div className="box2">
                    <img src={image2} alt="img" style={{width:'170px'}}/>
                    <h2>Code the design</h2>
                    <p>Start the challenge and download all the starter files. We provide all the files you'll need to complete the challenge. Building it is up to you!</p>
                </div>
                <div className="box3">
                    <img src={image3} alt="img" style={{width:'170px'}}/>
                    <h2>Work with team</h2>
                    <p>Thinking critically with other people's code is a crucial skill. Help others while deepening your own knowledge by giving feedback on solutions.</p>
                </div>
                <div className="box4">
                    <img src={image4} alt="img" style={{width:'170px'}}/>
                    <h2>Submit your solution</h2>
                    <p>Post your solution on the platform for everyone to see and get feedback on your code from other developers in the community.</p>
                </div>
             </div>   
       </div>
     );
}
 
export default Details;