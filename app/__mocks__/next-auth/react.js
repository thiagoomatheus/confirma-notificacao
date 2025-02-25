// __mocks__/next-auth/react.js

export const getProviders = jest.fn(async () => {
  console.log("Mocked getProviders called");
  return {
    google: {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      signinUrl: 'https://example.com/signin/google',
      callbackUrl: 'https://example.com/callback/google',
    },
  };
});

export const getCsrfToken = jest.fn(async () => {
  console.log("Mocked getCsrfToken called");
  return 'mock-csrf-token';
});

export const __NEXTAUTH = {
  _getSession: jest.fn(async (options) => {
    console.log("Mocked __NEXTAUTH._getSession called", options);
    return {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        image: 'https://example.com/image.jpg',
      },
      expires: '2024-12-31T23:59:59.000Z',
    };
  }),
};

global.fetch = jest.fn(async (url, options) => {
  console.log("Mocked fetch called", url, options);
  return {
    ok: true,
    status: 200,
    json: async () => ({
      url: 'https://example.com/dashboard',
    }),
  };
});

export const signIn = jest.fn(async (provider, options, authorizationParams) => {
  console.log("Mocked signIn called");
  try {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken();

    // Mock da chamada fetch
    const res = await global.fetch(
      `${providers[provider].signinUrl}?${new URLSearchParams(authorizationParams)}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Auth-Return-Redirect": "1",
        },
        body: new URLSearchParams({
          ...options,
          csrfToken,
          callbackUrl: options?.redirectTo ?? options?.callbackUrl ?? window.location.href,
        }),
      }
    );

    const data = await res.json();

    // Mock da chamada __NEXTAUTH._getSession
    await __NEXTAUTH._getSession({ event: "storage" });

    return {
      error: undefined,
      code: undefined,
      status: res.status,
      ok: res.ok,
      url: data.url,
    };
  } catch (error) {
    console.error("Erro no mock do signIn:", error);
    return {
      error: 'Erro no mock',
      code: undefined,
      status: 500,
      ok: false,
      url: null,
    };
  }
});

export const signOut = jest.fn(async (options) => {
  console.log("Mocked signOut called");
  return {
    error: undefined,
    url: 'https://example.com/login',
  };
});

export const useSession = jest.fn(() => {
  console.log("Mocked useSession called");
  return {
    data: {
      user: {
        name: 'Test User',
        email: 'test@example.com',
        image: 'https://example.com/image.jpg',
      },
      expires: '2024-12-31T23:59:59.000Z',
    },
    status: 'authenticated',
    update: jest.fn(),
  };
});

export const getToken = jest.fn(async () => {
  console.log("Mocked getToken called");
  return 'mock-token';
});

jest.mock("next-auth/react", () => ({
  signIn: signIn,
}));