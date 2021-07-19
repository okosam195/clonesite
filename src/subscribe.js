import Sub from './sub.jpg';
const Subscribe = () => {
    return ( 
        <div className="sub">
           <div className="sub1">
              <div className="subs">
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <span>Stay up-to-date with new challenges, featured solutions, selected articles and Frontend latest news</span>
                    </div>
                    <div className="check">
                    <input type="checkbox" className="checkbox"/><span>I am happy for houzz to contact me by email</span>
                    </div>
                    <div>
                    <input type="text" placeholder={'email@example.com'} className="emails"/>
                    <button className="email">SUBSCRIBE</button>
                </div>
           </div>
           <div className="sub2">
              <img src={Sub} alt="logo" style={{width:"450px"}}/>
           </div>
        </div>
     );
}
 
export default Subscribe;