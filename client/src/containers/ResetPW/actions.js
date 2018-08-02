import { resetPW } from '../../utils/API';

export const PASSWORD_RESET = 'PASSWORD_RESET';

export function postResetPassword() {
    return async (dispatch, getState) => {
        try {
            console.log("entered pwReset")
            dispatch(resetConfirmed('ok'));
        } catch(err){
            dispatch(noData(err))
        }
    }
}

function resetConfirmed(){
    console.log('entered resetConfirmed function');
    return {
        type: PASSWORD_RESET,
        payload: {
            email: 'test@careerdeer.com',
            pwReset: true
        }
    }
}

function noData(err){
    console.log("error - no data")
    return {
        type: 'NO_DATA',
        payload: {
            pwReset : null,
            error: err
        }
    }
}