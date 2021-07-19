import slacks from './slack.png';
const Slack = () => {
    return (
        <div className="slack">
            <div className="logos">
                <img src={slacks} alt="logo" style={{width:'50px'}}/>
                <h1>slack</h1>
            </div>
            <div className="contents">
                <h3>JOIN OUR SLACK COMMUNITY</h3>
                <h2>Join over 50,000 people taking the challenges, talking about their code, helping each other, and chatting about all things front-end!</h2>
            </div>
           <div>
               <input type="text" placeholder={'email@example.com'} className="controls"/>
               <button className="button">REQUEST INVITE</button>
           </div>
        </div>
    );
}
 
export default Slack;