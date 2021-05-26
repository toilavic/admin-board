import { Link } from 'react-router-dom';

const NotFound: React.FC<void> = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Error: 404 page not found</h2>
            <p>Sorry, the page you're looking for cannot be accessed</p>
            <Link to="/">
                Click here to go back to home
            </Link>
        </div >
    );
}

export default NotFound;