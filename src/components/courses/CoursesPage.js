import React from 'react';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: "" },
        };
    }
    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course:course});
    }

    onClickSave(e) {
        alert(`Saving ${this.state.course.title}`);
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

export default CoursesPage;