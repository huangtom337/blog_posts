import { Link } from 'react-router-dom'

const DNE = () => {
    return (
        <div className="dne">
            <h2>Page Does Not Exist</h2>
            <Link to='/'>Back to Home</Link>
        </div>
    );
}
 
export default DNE;