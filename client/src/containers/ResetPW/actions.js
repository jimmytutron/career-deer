import { resetPW } from '../../utils/API';

export const PASSWORD_RESET = 'PASSWORD_RESET';
export const RESET_PASSWORD_RESET = 'RESET_PASSWORD_RESET';

export function postResetPassword(userInfo) {
    return async (dispatch, getState) => {
        try {
            userInfo.email = userInfo.email.toLowerCase();
            const apiResponse = await(resetPW(userInfo));
            dispatch(resetConfirmed('ok'));
        } catch(err){
            dispatch(noData(err))
        }
    }
}

export function resetPasswordReset() {
    return {
        type: RESET_PASSWORD_RESET,
        payload: {
            status: false,
            error: null
        }
    }
}

function resetConfirmed(){
    return {
        type: PASSWORD_RESET,
        payload: {
            status: true,
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