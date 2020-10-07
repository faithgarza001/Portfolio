/**This Node.js app uses environment variable which allow the behavior to change based on the environment. You can make your app run anywhere (environment) wise, because the environment variable can be modified to tailor environment without having to change code and rebuild it.Example: (Change or port to listen on, or perhaps change of database)
 *
 */
/**DO NOT TOUCH THE CODE BELOW IT IS CONFIGURATIONS OF API KEY*/
//Video Code







// import { createRequire } from './module';
// const require = createRequire(import.meta.url);
// require('dotenv').config();
// console.log(process.env);





//The code below should out put all variables that this Node.js is aware of to access a specific variable, access it like any property of an object.
// console.log('The value of PORT is:', process.env.PORT);


/**You should see that the value of PORT is undefined on your computer. Cloud hosts like Heroku or Azure, however, use the PORT variable to tell you on which port your server should listen for the routing to work properly. Therefore, the next time you set up a web server, you should determine the port to listen on by checking PORT first and giving it a default value otherwise:
 * for this example we will be using port 8080**/

// let apiCall = require('http').createServer((req, res)=> res.end('Hey there'));
// let port = process.env.PORT || 8080;
//
// apiCall.listen(port,()=>{
//
//     console.log(`server is listening port ${port}`);
// });