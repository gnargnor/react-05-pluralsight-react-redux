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
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                
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