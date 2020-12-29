import { FETCH_JOBS } from '../actions/types';

const intialState = {
    jobs: [],
};

export default function jobsReducer(state = intialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                jobs: action.jobs,
            };
    }

    return state;
}
