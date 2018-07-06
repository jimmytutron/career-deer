

export default function chartReducer(state = '', { type, payload }) {
  return {
    ...state, chartData: {
      title: {
        display: true,
        text: 'Current Employment Progress'
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
            20,
            10,
            5,
            1
          ],
          backgroundColor: [
            'rgba(225,225,225, 0.8)',
            'rgba(200,200,200, 0.8)',
            'rgba(150,150,150, 0.8)',
            'rgba(100,100,100, 0.8)',
            'rgba(50,50,50, 0.8)'
          ]
        }
      ]
    }
  }
}


// export default chartReducer;
