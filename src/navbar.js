import Blog from './Blog.png';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
                <div className="logo">
                     <li><img src={Blog} alt="blog" style={{width:'65px'}}/> </li> 
                </div>
                <div className="links">
                    <ul>
                        <li><a className="link" href="/">UNLOCK</a></li>
                        <li><a className="link" href="/CHALLENGES">CHALLENGES</a></li>
                        <li><a className="link" href="/SOLUTIONS">SOLUTIONS</a></li>
                        <li><a className="link" href="/RESOURCE">RESOURCE</a></li>
                        <li><a className="linker" href="/MORE">MORE</a></li>
                    </ul>  
                </div>
            </nav>
           <hr/>
        </div>
    );
}
export default Navbar;