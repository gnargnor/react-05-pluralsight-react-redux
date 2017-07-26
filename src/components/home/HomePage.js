/** Home / Default page */
import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React / Redux - Demo Project</h1>
                <p>You're Gonna Learn Today</p>
                <Link to="about" className="btn btn-lg">Learn more</Link>Check out the <a href="https://www.pluralsight.com">Pluralsight</a> course and the repository.
            </div>
        );
    }
}

export default HomePage;