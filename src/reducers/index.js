/** combines all reducers into a single file */
import {combineReducers} from 'redux';
import courses from './courseReducer';

/** the names of the properties here is how you will call this.state.{} */
const rootReducer = combineReducers({
    courses
});

export default rootReducer;

