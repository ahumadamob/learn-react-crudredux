import { ALERT_SHOW, ALERT_HIDE } from '../types';

export function alertShowAction (alert){
    return (dispatch) => {
        dispatch( alertShow(alert) );
    }
}

const alertShow = alert => ({
    type: ALERT_SHOW,
    payload: alert
});

export function alertHideAction(){
    return (dispatch) => {
        dispatch( alertHide() );
    }
}

const alertHide = () => ({
    type: ALERT_HIDE
})