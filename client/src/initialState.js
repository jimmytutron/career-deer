// this is in a seperate file both for accessibility and to make the index.js much cleaner
export default {
  loggedIn: {
    status: false,
    error: null
  },
  signedUp: {
    status: false,
    error: null
  },
  addJob: {
    status: false,
    error: null
  },
  updateJob: {
    status: false,
    error: null,
    job: null
  },
  viewJobs: {
    data: [],
    edit: null
  },
  searchData: {
    data: [],
    saved: []
  },
  chartData: {
    all: {
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
      data: [50, 30, 20, 10, 5]
    },
    user: {
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
      data: [50, 30, 20, 10, 5]
    }
  },
  boards: {
      // Think of progress_stage as an id here.
      saved: {
        jobs: []
      },

      applied: {
        jobs: []
      },

      on_phone: {
        jobs: []
      },

      on_site: {
        jobs: []
      },

      offer: {
        jobs: []
      }
  },
  burgerMenu: {
    isOpen: false
  }
};
