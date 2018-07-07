import { getJobById } from '../../utils/API';

export const DATA_AVAIL = 'DATA_AVAIL';

export function selectJob(job) {
  return async (dispatch, getState) => {
    try {
      //TODO: DISABLED for testing.
      // const apiResponse = await (getJobById(job));
      const apiResponse={data: 'lots of data'};
      dispatch(jobData(apiResponse.data));

    } catch (err) {
      dispatch(noData(err))
    }
  }
}

export function jobData(data){
  return {
    type: DATA_AVAIL,
    payload: {
      chartData: {
        title: {
          display: true,
          text: 'Current Employment Progress'
        },
        legend: {
          display: true,
          position: 'right'
        },
        labels: [
          'Saved', 'Applied', 'Phone Interview'
        ],
        datasets: [
          {
            label: 'Users',
            data: [
              50,
              20,
              10
            ],
            backgroundColor: [
              'rgba(0,47,178, 0.7)',
              'rgba(255,0,0, 0.7)',
              'rgba(0,255,0, 0.7)'
            ]
          }
        ]
      }
    }
  }
}


export function noData(err) {
  console.log("error no data")
  return {
    type: 'NO_DATA',
    payload: {
      chartData: null,
      error: err
    }
  }
}

