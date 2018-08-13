
// TODO: Change the progress_stage stings to constants to avoid mis-spellings?

/**
 * Takes an array of objects and maps the values to the corresponding inital state's
 * jobs arrays. We never mutate the original input here.
 * @param  {Array} jobs is an array of job objects
 * @returns {Object} An object of the job objects sorted into their correct places
 */
const mapData = jobs => {
  const mappedData = {
    saved: [], 
    applied: [],
    phone: [],
    'on-site': [],
    offer: [],
  };

  jobs.forEach( el => {
    mappedData[el.progress_stage].push(el); 
  });
  
  // console.log(mappedData);
  return mappedData;
}

export default mapData;
