import * as CONSTANTS from '../lib/constants';

export function beginAjaxCall() {
    return { type: CONSTANTS.BEGIN_AJAX_CALL };
}

export function ajaxCallError(){
    return { type: CONSTANTS.AJAX_CALL_ERROR };
}