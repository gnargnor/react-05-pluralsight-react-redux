/** About / Content page */
import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <a href="https://github.com/gnargnor/react-04-react-with-routing-starter">View Source Code - Github Repository</a>
                <p>The source code for this application will help create a starter skeleton for a React and Redux application with preconfigured webpack instructions and routing examples.</p>
                <p>Check the package.json for all included libraries</p>
            </div>
        );
    }
}

export default AboutPage;