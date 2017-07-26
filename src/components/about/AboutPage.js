/** About / Content page */
import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents"><strong>React Redux Router</strong></a>
                <p>Annotated project demo based on the <a href="https://www.pluralsight.com">Pluralsight</a> course created by <a href="github.com/coryhouse">Cory House</a></p>
                <p>Check out my <a href="github.com/gnargnor/react-05-pluralsight-react-redux">repository</a> for additional <a href="https://github.com/gnargnor/react-05-pluralsight-react-redux/notes.md">notes</a></p>
                <p>Logan Kelly - <a href="https://www.bizzeytech.com">Bizzey Tech</a> 2017</p>
            </div>
        );
    }
}

export default AboutPage;