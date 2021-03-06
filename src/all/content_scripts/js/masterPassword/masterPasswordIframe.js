/**
 * Master password iframe control.
 *
 * It has for aim to control the master password dialog iframe.
 * 	- Add the iframe to the application page. The masterPasswordDialogPagemod
 * 	  will detect it and will control it.
 * 	- Close the iframe.
 *
 * @copyright (c) 2017 Passbolt SARL
 * @licence GNU Affero General Public License http://www.gnu.org/licenses/agpl-3.0.en.html
 */
$(function () {
  /**
   * Open the master password dialog.
   * @listens passbolt.master-password.open-dialog
   */
  passbolt.message.on('passbolt.master-password.open-dialog', function () {
    // Add the master password iframe to the application page.
    const iframeId = 'passbolt-iframe-master-password';
    const className = 'passbolt-plugin-dialog loading';
    const appendTo = '#container';
    passbolt.html.insertThemedIframe(iframeId, appendTo, className);
  });

  /**
   * Close the master password dialog.
   * @listens passbolt.master-password.close-dialog
   */
  passbolt.message.on('passbolt.master-password.close-dialog', function () {
    $('#passbolt-iframe-master-password').remove();
  });
});
undefined; // result must be structured-clonable data