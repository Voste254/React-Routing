import '../App.css';
import { Link } from 'react-router-dom';
export default function Notfound(){
    return(
        <div className="notfound">
        <h1>ERROR 404</h1>
        <p>Page not found</p>
        <Link to="/">Go back to Home page</Link>        
        </div>
    )
}