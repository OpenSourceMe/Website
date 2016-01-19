/* Backend Factory
*  NOTE: all methods return promises.
*/
import Promise from 'bluebird'
import Parse from 'parse/node'

//Parse example if you had these classes in parse

//let Numb = Parse.Object.extend('Numb')
//let allNumbs = new Parse.Query(Numb)

//helper functions! these are used inside the backend class only, so I seperated them from the class.

//Parse cloud code push notification example (needs cloud code)

// const sendPushNotification = (preview) => {
// 	return new Promise((resolve, reject) => {
// 		var query = new Parse.Query(Parse.Installation);

// 		Parse.Cloud.run("sendPushNotification", { message:"hello"}).then(function(result) {
// 		    console.log(result)
// 		}, function(error) {
// 		    // error
// 		    console.log(error)
// 		});
// 	})
// }

/* getStateFromBackend (eg. Parse) */
/* ******************************************** */
const getState = () => {

  return new Promise((resolve, reject) => {

  	//example retrieving state from parse backend

    // let server = {}

    // allNumbs.find().then((serverNumbs) => {
    //   server.numbs = serverNumbs
    //   return allNumbs.find()
    // }).then((success) => {
    //   // transform to state
    //   let state = {
    //     numbs: numbs
    //   }
    //   resolve(state)
    // }, (error) => {
    //   // error
    //   resolve(error)
    // })
    // transform to state
    let state = {}
  	console.log("getting state from backend")
  	resolve(state)
  })

}
/* ******************************************** */

export default class Backend {

	constructor() {
		/* PARSE CREDS */
		// Parse.initialize(
		// 	"application id",
		// 	"javascript key"
		// )

	}

	login(username, password) {
		return new Promise((resolve, reject) => {
		 //Again, Parse API example:

		 //  Parse.User.logIn(username, password).then(
		 //    success => {
			// return this.getState()
		 //    },
		 //    error => reject(error.message)
		 //  ).then(state => {
		 //  	resolve(state)
		 //  })
		if(username==="dan" && password==="dan")
		{
			getState()
			console.log("logging in")
			resolve("numbs")
		}
		else
		{	
			console.log("bad creds")
			reject("username and password are incorrect. get them right.")
		}
		})
	}



}