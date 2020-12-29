import { jobs } from '../../api_data/jobs';
import { FETCH_JOBS } from './types';
import axios from '../../api/jobs.api';

export const fetchJobs = async (dispatch, region, callback) => {
    const response = await axios.get(
        '/jobapi/v3/search?noOfResults=20&urlType=search_by_key_loc&searchType=adv&keyword=javascript&location=new%20york&sort=p&k=javascript&l=new%2520york&seoKey=javascript-jobs-in-new-york&src=jobsearchDesk&latLong=28.2936975_77.2519989&sid=1609215822496702'
    );
    dispatch({ type: FETCH_JOBS, jobs: response.data.jobDetails });
    callback();
    console.log('naveen: ', response.data.jobDetails[0]);
};
