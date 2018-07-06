// import { data } from '../../utils/API';

export function selectJob(job){
  
  return{
    type: 'JOB_SELCETED',
    payload: job
  }
}