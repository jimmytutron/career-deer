import { getJobDataAll, getJobDataUser, getUserPercentile } from '../../utils/API';

export const CHART_ALL = 'CHART_ALL';

export function getChartAllData() {
  return async (dispatch, getState) => {
    try {
      const data = await getDBData();

      const apiResAll = data[0];
      const apiResUser = data[1];

      const percentile = await getPercentile(apiResUser.data);

      dispatch(jobData(apiResAll.data, apiResUser.data, percentile[0].data));

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

function getPercentile(dataUser) {
  const organizedDataUser = organizeData(dataUser);

  const percData = getUserPercentile(organizedDataUser["Saved"],
    organizedDataUser["Applied"],
    organizedDataUser["Phone Interview"],
    organizedDataUser["On-site Interview"],
    organizedDataUser["Offer"]
  );

  return Promise.all([percData])
}

export function jobData(dataAll, dataUser, percentile) {
  const organizedDataAll = organizeData(dataAll);
  const organizedDataUser = organizeData(dataUser);
  const percentileStage = organizePercentile(percentile);

  //Getting percentages for each category.
  const percentAll = percentages(organizedDataAll);
  const percentUser = percentages(organizedDataUser);

  //The below variables for updating state.
  const labels = Object.keys(organizedDataAll);
  const dataArrAll = valuesToArray(organizedDataAll);
  const dataArrUser = valuesToArray(organizedDataUser);

  const percArrAll = valuesToArray(percentAll);
  const percArrUser = valuesToArray(percentUser);

  const percentileSavedArr = valuesToArray(percentileStage.saved);
  const percentileAppliedArr = valuesToArray(percentileStage.applied);
  const percentilePhoneArr = valuesToArray(percentileStage.phone);
  const percentileOnSiteArr = valuesToArray(percentileStage.onSite);
  const percentileOfferArr = valuesToArray(percentileStage.offer);

  const percentileSaved = calcPercentile(percentileSavedArr);
  const percentileApplied = calcPercentile(percentileAppliedArr);
  const percentilePhone = calcPercentile(percentilePhoneArr);
  const percentileOnSite = calcPercentile(percentileOnSiteArr);
  const percentileOffer = calcPercentile(percentileOfferArr);

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
        percentage: percArrUser,
        percentile: {
          saved: percentileSaved,
          savedArr: percentileSavedArr,
          applied: percentileApplied,
          appliedArr: percentileAppliedArr,
          phone: percentilePhone,
          phoneArr: percentilePhoneArr,
          onSite: percentileOnSite,
          onSiteArr: percentileOnSiteArr,
          offer: percentileOffer,
          offerArr: percentileOfferArr
        }
      }
    }
  }
}

//Converts list of document objects to an organized object by progress stage.
function organizePercentile(percentile) {
  //Example of how data should be returned.
  const objData = {
    "saved": {
      "aboveUser": 0,
      "belowUser": 0
    },
    "applied": {
      "aboveUser": 0,
      "belowUser": 0
    },
    "phone": {
      "aboveUser": 0,
      "belowUser": 0
    },
    "onSite": {
      "aboveUser": 0,
      "belowUser": 0
    },
    "offer": {
      "aboveUser": 0,
      "belowUser": 0
    },
  }

  //Assigning values to objData from percentile
  for (let i = 0; i < percentile.length; i++) {
    for (let aboveBelowKey in percentile[i]) {
      switch (percentile[i][aboveBelowKey]['_id']) {
        case 'saved':
          objData['saved'][aboveBelowKey] = percentile[i][aboveBelowKey].uniqueUsers;
          break;
        case 'applied':
          objData['applied'][aboveBelowKey] = percentile[i][aboveBelowKey].uniqueUsers;
          break;
        case 'phone':
          objData['phone'][aboveBelowKey] = percentile[i][aboveBelowKey].uniqueUsers;
          break;
        case 'on-site':
          objData['onSite'][aboveBelowKey] = percentile[i][aboveBelowKey].uniqueUsers;
          break;
        case 'offer':
          objData['offer'][aboveBelowKey] = percentile[i][aboveBelowKey].uniqueUsers;
          break;
        default:
          break;
      }
    }
  }

  return objData;
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

function calcPercentile(array) {
  //NOTE: array index 0 = aboveUser, index 1 = belowUser 
  const percentile = parseFloat((array[1] / (array[0] + array[1])) * 100).toFixed(1);
  return percentile;
}


export function noData(err) {
  // console.log("error no data")
  return {
    type: 'NO_DATA',
    payload: {
      chartData: null,
      error: err
    }
  }
}

