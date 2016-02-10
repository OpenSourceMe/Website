/* ********
  AUTHOR: breezykermo
  DATE: 10 February 2016 (Wednesday)
  DESCRIPTION:  class that makes calls to backend
  NOTES:
    follow normal style guide.

******** */
import Promise from 'bluebird';

export default class Backend {

  constructor() {
    // console.log('constructing instance');
    /* INITIALIZE*/
    // Parse.initialize(
    //  "application id",
    //  "javascript key"
    // )
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        console.log('logging in');
        resolve('success, logged in');
      } else {
        console.log('bad creds');
        reject('username and password are "admin" & "admin". hooked up to a mock backend at the moment, see ./src/backend.js');
      }
    });
  }
}
