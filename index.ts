import express from 'express';

// create express application
const app = express();

// register a sample "hello world" endpoint for testing the application with an initial call
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});


// register forward auth endpoint
app.get('/auth', (req: express.Request, res: express.Response) => {
  console.log('hello from auth middleware')

  // retrieve authorization header from original request
  const authorizationHeader = req.headers.authorization;

  // error out if no authorization header is presented
  if (!authorizationHeader) {
    console.log('no authorization header presented')
    res.status(401).end();
    return;
  }

  // error out if authorization header is not "foobar"
  // FIXME: don't try this on PROD :)
  if(authorizationHeader !== "foobar") {
    console.log('invalid authorization header presented')
    res.status(403).end();
    return;
  }

  // inject the user groups into the response header
  const userGroups = ['fizz', 'buzz'];
  res.setHeader('X-User-Groups', JSON.stringify(userGroups));

  // return successfully
  console.log('valid authorization header. authorized')
  res.status(200).end();
});

// start the express application on port 3000
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});