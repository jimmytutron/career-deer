import { resetPW } from '../../utils/API';

export const PASSWORD_RESET = 'PASSWORD_RESET';

export function postResetPassword(userInfo) {
    return async (dispatch, getState) => {
        try {
            userInfo.email = userInfo.email.toLowerCase();
            console.log("entered pwReset")
            console.log("--------------------")
            console.log(userInfo)
            const apiResponse = await(resetPW(userInfo));
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
            status: false,
            error: null
        }
    }
}

function noData(err){
    console.log("error - no data")
    return {
        type: 'NO_DATA',
        payload: {
            status : null,
            error: err
        }
    }
}