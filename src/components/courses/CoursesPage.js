import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: { title: "" },
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course:course});
    }

    /** this call to actions is made possible by the connect function below */
    onClickSave(e) {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
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

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

/** makes courses available as a property of this.props */
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

/** makes createCourse available as a method of this.props in this function rather than generically calling the action in the class method with dispatch */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

/** connect connects the save event listener to the createCourse action */
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);