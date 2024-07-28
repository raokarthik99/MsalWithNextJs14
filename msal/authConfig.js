const CLIENT_ID = "e3aadd03-79d2-4f6e-af0f-4606e1ee3758";
export const API_SCOPE = CLIENT_ID + "/.default";

export const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority:
      "https://login.microsoftonline.com/4e206573-d2b2-43e2-8958-ef4cdbd26f7f",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    scope: API_SCOPE,
    domain: "karthikraodevoutlook.onmicrosoft.com",
  },
  cache: {
    // Optional
    cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const loginRequest = {
  scopes: [API_SCOPE],
};

export const userDataLoginRequest = {
  scopes: ["user.read"],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
