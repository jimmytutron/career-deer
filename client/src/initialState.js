// this is in a seperate file both for accessibility and to make the index.js much cleaner
export default {
  app: {
    loading: true,
    user: null
  },
  loggedIn: {
    error: null,
  },
  signedUp: {
    error: null,
  },
  pwReset: {
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
  searchData: {
    loading: false,
    data: [],
    saved: []
  },
  chartData: {
    sample: {
      title: ' (SAMPLE)'
    },
    all: {
      labels: [
        'Saved', 'Applied', 'Phone Interview', 'On-site Interview', 'Offer'
      ],
      data: [50, 30, 20, 10, 5],
      percentage: [44, 26, 17, 9, 4]
    },
    user: {
      labels: [
        'Saved', 'Applied', 'Phone Interview', 'On-site Interview', 'Offer'
      ],
      data: [50, 30, 20, 10, 5],
      percentage: [44, 26, 17, 9, 4],
      percentile: {
        saved: 50,
        savedArr: [1, 1],
        applied: 50,
        appliedArr: [1, 1],
        phone: 50,
        phoneArr: [1, 1],
        onSite: 50,
        onSiteArr: [1, 1],
        offer: 50,
        offerArr: [1, 1]
      }
    }
  },
  boards: {
    // Think of progress_stage as an id here.
    saved: [],
    applied: [],
    phone: [],
    ['on-site']: [],  
    offer: [],   
  },
  burgerMenu: {
    isOpen: true
  }
};
