import { updatePW } from '../../utils/API';

export const PASSWORD_UPDATE = 'PASSWORD_UPDATE';

export function updatePassword(userInfo) {
    return async (dispatch, getState) => {
        try {
            userInfo.email = userInfo.email.toLowerCase();
            console.log("entered updatePassword")
            console.log("--------------------")
            console.log(userInfo)
            // const apiResponse = await(updatePW(userInfo));
            dispatch(resetConfirmed('ok'));
        } catch(err){
            dispatch(noData(err))
        }
    }
}

function resetConfirmed(){
    return {
        type: PASSWORD_UPDATE,
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