
// TODO: Change the progress_stage stings to constants to avoid mis-spellings?

/**
 * Takes an array of objects and maps the values to the corresponding inital state's
 * jobs arrays. We never mutate the original input here.
 * @param  {Array} jobs is an array of job objects
 * @returns {Object} An object of the job objects sorted into their correct places
 */
const mapData = jobs => {
  const positions = ['saved', 'applied', 'on_phone', 'on_site', 'offer'];
  const mappedData = {
    saved: [],
    applied: [],
    on_phone: [],
    on_site: [],
    offer: [],
  };
  // This is same amount of possible operations as my original
  // forEach using switch case. We use a traditional for loop here to still have
  // access for a way to use break
  jobs.forEach( el => {
    for (let i = 0; i < positions.length; i++) {
      if (el.progress_stage === positions[i]) {
        mappedData[positions[i]].push(el);
        break;
      }
    }
  });
  
  // console.log(mappedData);
  return mappedData;
}

export default mapData;
