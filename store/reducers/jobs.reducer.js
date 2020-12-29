import { FETCH_JOBS, JOB_LIKED, JOB_LIKED_CLEAR } from '../actions/types';

const intialState = {
    jobs: [],
    likedJobs: [],
};

export default function jobsReducer(state = intialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                jobs: action.jobs,
            };
        case JOB_LIKED:
            return {
                ...state,
                likedJobs: [...state.likedJobs, action.job],
            };
        case JOB_LIKED_CLEAR:
            return {
                ...state,
                likedJobs: [],
            };
    }

    return state;
}
