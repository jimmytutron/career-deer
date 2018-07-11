import { getJobDataAll, getJobDataUser, getUserPercentile } from '../../utils/API';

export const CHART_ALL = 'CHART_ALL';

export function getChartAllData() {
  return async (dispatch, getState) => {
    try {
      const data = await getDBData();

      const apiResAll = data[0];
      const apiResUser = data[1];

      // console.log(apiResUser.data);

      //TODO: correct chartController before enabling.
      const percentile = await getPercentile(apiResUser.data);

      // console.log("percentile data", percentile.data);

      dispatch(jobData(apiResAll.data, apiResUser.data));

    } catch (err) {
      dispatch(noData(err))
    }
  }
}

//Get all database info and return as an array.
function getDBData() {
  const dataAll = getJobDataAll();
  const dataUser = getJobDataUser();

  return Promise.all([dataAll, dataUser])
}

export function jobData(dataAll, dataUser) {
  const organizedDataAll = organizeData(dataAll);
  const organizedDataUser = organizeData(dataUser);

  //Getting percentages for each category.
  const percentAll = percentages(organizedDataAll);
  const percentUser = percentages(organizedDataUser);

  const labels = Object.keys(organizedDataAll);
  const dataArrAll = valuesToArray(organizedDataAll);
  const dataArrUser = valuesToArray(organizedDataUser);

  const percArrAll = valuesToArray(percentAll);
  const percArrUser = valuesToArray(percentUser);

  return {
    type: CHART_ALL,
    payload: {
      sample: {
        title: ''
      },
      all: {
        labels: labels,
        data: dataArrAll,
        percentage: percArrAll
      },
      user: {
        labels: labels,
        data: dataArrUser,
        percentage: percArrUser
      }
    }
  }
}

function valuesToArray(obj) {
  const dataArray = [];
  for (let keys in obj) {
    dataArray.push(obj[keys])
  }
  return dataArray;
}

//Organize input data and return an object.
function organizeData(data) {
  const objData = {
    'Saved': 0,
    'Applied': 0,
    'Phone Interview': 0,
    'On-site Interview': 0,
    'Offer': 0
  }

  for (let i = 0; i < data.length; i++) {
    switch (data[i]['_id']) {
      case 'saved':
        objData['Saved'] = data[i].count;
        break;
      case 'applied':
        objData['Applied'] = data[i].count;
        break;
      case 'phone':
        objData['Phone Interview'] = data[i].count;
        break;
      case 'on-site':
        objData['On-site Interview'] = data[i].count;
        break;
      case 'offer':
        objData['Offer'] = data[i].count;
        break;
      default:
        break;
    }
  }

  return objData;
}

function percentages(countDataObj) {
  const percentObj = {
    'Saved': 0,
    'Applied': 0,
    'Phone Interview': 0,
    'On-site Interview': 0,
    'Offer': 0
  }

  let sumCount = 0;

  for (let keys in countDataObj) {
    sumCount += countDataObj[keys];
  }

  for (let keys in countDataObj) {
    percentObj[keys] = Math.round((countDataObj[keys] / sumCount) * 100);
  }

  return percentObj;
}

function getPercentile(dataUser) {
  const organizedDataUser = organizeData(dataUser);

  const percData = getUserPercentile(organizedDataUser["Saved"], organizedDataUser["Applied"], organizedDataUser["Phone Interview"], organizedDataUser["On-site Interview"], organizedDataUser["Offer"], );

  return Promise.all([percData])
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

