// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 's4m0nikl8c'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-0fti505k7c33a1jl.us.auth0.com',            // Auth0 domain
  clientId: 'h8xHi8FWZOQ2J0bF3TOPuGaq9ua213hv',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
