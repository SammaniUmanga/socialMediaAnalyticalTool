import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("641548850286-e620ge0e2f3egn3bddcdrfqrnuf95obu.apps.googleusercontent.com")
      }
    ]);
  
    return config;
    }