const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;
const USE_INTERACTION_CODE = process.env.USE_INTERACTION_CODE || false;

export default {
  oidc: {
    clientId: '0oa2o1eskh3FnX8XZ5d7',
    issuer: 'https://dev-76512594.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: `${OKTA_TESTING_DISABLEHTTPSCHECK}`
    },
  },
  widget: {
    useInteractionCodeFlow: `${USE_INTERACTION_CODE}`,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
