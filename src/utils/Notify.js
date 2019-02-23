/* eslint-disable no-undef */
import swal from 'sweetalert';
import 'babel-polyfill';
/**
* @description class notifies users using alerts
*
* @class Notify
*/
class Notify {
  /**
  * @method notifyError
  * @memberof Notify
  * @static
  * @param {string} error
  *
  * @returns {void}
  */
  static notifyError(error) {
    swal('', error, 'error');
  }

  /**
  * @method notifySuccess
  * @memberof Notify
  * @static
  * @param {string} message
  *
  * @returns {void}
  */
  static async notifySuccess(message) {
    await swal('', message, 'success');
    window.location.reload();
  }
}

export default Notify;
