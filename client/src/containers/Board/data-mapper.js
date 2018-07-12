
// TODO: Change the progress_stage stings to constants to avoid mis-spellings?

/**
 * Takes an array of objects and maps the values to the corresponding inital state's
 * jobs arrays. We never mutate the original input here.
 * @param  {Array} jobs is an array of job objects
 * @returns {Object} An object of the job objects sorted into their correct places
 */
const mapData = jobs => {
  const positions = ['saved', 'applied', 'phone', 'on-site', 'offer'];
  const mappedData = {
    saved: [], 
    applied: [],
    phone: [],
    ['on-site']: [],
    offer: [],
  };
  // This is same amount of possible operations as my original
  // forEach using switch case. We use a traditional for loop here to still have
  // access for a way to use break
  jobs.forEach( el => {
    for (let i = 0; i < positions.length; i++) {
      if (el.progress_stage === positions[i]) {
        // push [ el._id, el ] instead and then change it across all 
        // steps of the logic. This will make updating data by id easier in the 
        // move logic for the drag-n-drop, since we don't have access to the 
        // objects values, only its unique ID within the onDragEnd functionality.
        mappedData[positions[i]].push(el);
        break;
      }
    }
  });
  
  // console.log(mappedData);
  return mappedData;
}

export default mapData;
