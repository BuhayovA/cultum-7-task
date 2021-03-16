import * as NS from 'nookies';
// types
import { NextPageContext } from 'next';
import { CookieSerializeOptions } from 'cookie';
// constants
import { AUTH_TOKEN_FIELD } from '@md-constants/common';

const COOKIES_OPTIONS: CookieSerializeOptions = {
  maxAge: 30 * 24 * 60 * 60,
  path: '/'
};

const cookiesManager = (ctx?: NextPageContext) => ({
  // TOKEN
  getToken: (): string | undefined => {
    const { token } = NS.parseCookies(ctx);

    return token;
  },
  setToken: (token: string, options?: CookieSerializeOptions): void => {
    NS.setCookie(ctx, AUTH_TOKEN_FIELD, token, { ...COOKIES_OPTIONS, ...options });
  },
  removeToken: (): void => {
    NS.destroyCookie(ctx, AUTH_TOKEN_FIELD);
  }
});

export { cookiesManager };
