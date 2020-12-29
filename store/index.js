import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../store/reducers/auth.reducer';
import jobsReducer from '../store/reducers/jobs.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
