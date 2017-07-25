/** Home / Default page */
import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React / Redux / React Router</h1>
                <p>Stater template for  a React application with Redux and React Router</p>
                <Link to="about" className="btn btn-lg">About this template</Link>
            </div>
        );
    }
}

export default HomePage;