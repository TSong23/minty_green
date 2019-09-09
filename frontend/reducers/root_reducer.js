//currently(sept. 9, 2019) state shape has entities(users), session, errors
import { combineReducers } from "redux";

//slices of state reducers import
import errors from './errors_reducer';
import session from './session_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors
});

export default rootReducer;