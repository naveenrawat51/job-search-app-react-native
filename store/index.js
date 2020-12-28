import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../store/reducers/auth.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
