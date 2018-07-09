import { getJobDataAll, getJobDataUser } from '../../utils/API';

export const CHART_ALL = 'CHART_ALL';
export const CHART_USER = 'CHART_USER';

export function getChartAllData() {
  return async (dispatch, getState) => {
    try {
      const apiResponseAll = await (getJobDataAll());
      dispatch(jobData(apiResponseAll.data));

    } catch (err) {
      dispatch(noData(err))
    }
  }
}

export function jobData(data) {
  const organizedData = {
    'Saved': 0,
    'Applied': 0,
    'Phone Interview': 0,
    'On-site Interview': 0,
    'Offer': 0
  }

  //Sorting requested data into organized object.
  for (let i = 0; i < data.length; i++) {
    switch (data[i]['_id']) {
      case 'saved':
        organizedData['Saved'] = data[i].count;
        break;
      case 'applied':
        organizedData['Applied'] = data[i].count;
        break;
      case 'phone':
        organizedData['Phone Interview'] = data[i].count;
        break;
      case 'on-site':
        organizedData['On-site Interview'] = data[i].count;
        break;
      case 'offer':
        organizedData['Offer'] = data[i].count;
        break;
      default:
        break;
    }
  }

  for (let keys in organizedData) {
    //Removing progress stages that are 0 to clean graph.
    if (organizedData[keys] === 0) {
      delete organizedData[keys]
    }
  }

  const labels = Object.keys(organizedData);
  const dataArray = [];

  for (let keys in organizedData) {
    dataArray.push(organizedData[keys])
  }

  return {
    type: CHART_ALL,
    payload: {
      all: {
        title: {
          display: true,
          text: 'Current Employment Progress'
        },
        legend: {
          display: true,
          position: 'right'
        },
        labels: labels,
        data: dataArray,
      }
    }
  }
}

export function getChartUserData() {

  return async (dispatch, getState) => {
    try {
      const apiResponseUser = await (getJobDataUser());
      dispatch(jobDataUser(apiResponseUser.data));

    } catch (err) {
      dispatch(noData(err))
    }
  }
}

export function jobDataUser(data) {
  const organizedData = {
    'Saved': 0,
    'Applied': 0,
    'Phone Interview': 0,
    'On-site Interview': 0,
    'Offer': 0
  }

  //Sorting requested data into organized object.
  for (let i = 0; i < data.length; i++) {
    switch (data[i]['_id']) {
      case 'saved':
        organizedData['Saved'] = data[i].count;
        break;
      case 'applied':
        organizedData['Applied'] = data[i].count;
        break;
      case 'phone':
        organizedData['Phone Interview'] = data[i].count;
        break;
      case 'on-site':
        organizedData['On-site Interview'] = data[i].count;
        break;
      case 'offer':
        organizedData['Offer'] = data[i].count;
        break;
      default:
        break;
    }
  }

  for (let keys in organizedData) {
    //Removing progress stages that are 0 to clean graph.
    if (organizedData[keys] === 0) {
      delete organizedData[keys]
    }
  }

  const labels = Object.keys(organizedData);
  const dataArray = [];

  for (let keys in organizedData) {
    dataArray.push(organizedData[keys])
  }

  console.log(labels, dataArray);

  return {
    type: CHART_USER,
    payload: {
      user: {
        title: {
          display: true,
          text: 'Current Employment Progress'
        },
        legend: {
          display: true,
          position: 'right'
        },
        labels: labels,
        data: dataArray,
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

