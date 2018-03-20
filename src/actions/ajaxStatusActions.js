import * as CONSTANTS from '../lib/constants';

export function beginAjaxCall() {
    return { type: CONSTANTS.BEGIN_AJAX_CALL };
}