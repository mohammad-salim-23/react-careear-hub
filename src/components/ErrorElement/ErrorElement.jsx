
import { Link } from 'react-router-dom';
const ErrorElement = () => {
    return (
        <div>
            <p>OOPS!!!</p>
            <Link to='/'>Go back to Home</Link>
        </div>
    );
};

export default ErrorElement;