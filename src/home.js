import coding from './coding.jpg';

const Home = () => {
    return ( 
        <div className="homepage">
            <div className="h2">
               <h2>Improve your coding skills by building real projects</h2>
               <p>Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 93,350 developers building projects, reviewing code, and helping each other get better.</p>
               <button><h1>signup</h1></button>
            </div>
            <div className="img">
                 <img src={coding} alt="coding" style={{width:'500px'}}/>
            </div> 
        </div>
       
     );
}
 
export default Home;