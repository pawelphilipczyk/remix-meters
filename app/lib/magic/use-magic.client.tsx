import type { MagicUserMetadata } from "magic-sdk";
import { useCallback, useEffect, useMemo } from "react";
import React from "react";
import { magic } from "~/lib/magic";

const MagicContext = React.createContext<MagicValue>(null);

type MagicValue = {
  isLoading?: boolean;
  user?: MagicUserMetadata | null;
} | null;

export const MagicProvider = ({
  children,
}: Omit<React.ProviderProps<MagicValue>, "value">) => {
  const [state, setState] = React.useState<MagicValue>(null);

  const loginWithEmail = useCallback(async function (email: string) {
    try {
      console.log('document', document);
      if (typeof document !== "undefined") {
        // Trigger Magic link to be sent to user
        let token = await magic.auth.loginWithMagicLink({
          email,
          // redirectURI: new URL("/", window.location.origin).href, // optional redirect back to your app after magic link is clicked
        });
  
        // Validate token with server
        const res = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
  
        if (res.status === 200) {
          // Set the UserContext to the now logged in user
          let user = await magic.user.getMetadata();
          setState({ user });
        }
      }
    } catch (error) {
      console.debug(error);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    setState({ isLoading: true });
    magic.user.isLoggedIn().then(function (isLoggedIn) {
      isLoggedIn
        ? setState({ user: { email: "pawel.philipczyk@me.com", issuer: '', publicAddress: '', phoneNumber: ''} }) // magic.user.getMetadata().then((user) => setState({ user }))
        : setState({ user: null });
    });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      loginWithEmail,
    }),
    [state, loginWithEmail]
  );

  return (
    <MagicContext.Provider value={value}>{children}</MagicContext.Provider>
  );
};

export const useMagic = () => {
  const context = React.useContext(MagicContext);
  if (!context)
    throw new Error("useMagicUser must be used within a MagicUserProvider");
  return context;
};
