import { DATA_AVAIL } from './actions';

//For testing default output.
// const DATA_AVAIL = undefined;

export default function chartReducer(state = '', { type, payload }) {

  switch (type) {
    case DATA_AVAIL:
      return {
        ...state,
        ...payload
      }
    default:
      console.log('Reducer: No data input, will use default sample data.');
      // return state
      return {
        ...state,
        chartData: {
          title: {
            display: true,
            text: 'Current Employment Progress (SAMPLE)'
          },
          legend: {
            display: true,
            position: 'right'
          },
          labels: [
            'Saved', 'Applied', 'Phone Interview', 'On-site Interview', 'Offer'
          ],
          datasets: [
            {
              label: 'Users',
              data: [
                50,
                30,
                20,
                10,
                5
              ],
              backgroundColor: [
                'rgba(0,47,178, 0.7)',
                'rgba(255,0,0, 0.7)',
                'rgba(0,255,0, 0.7)',
                'rgba(255,255,0, 0.7)',
                'rgba(40,40,40, 0.7)'
              ]
            }
          ]
        }
      }
    }
  }


