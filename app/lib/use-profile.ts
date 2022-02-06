import React from "react";
import type { GitHubProfile } from "remix-auth-github";

const ProfileContext = React.createContext<GitHubProfile | null>(null);

export const ProfileProvider = ProfileContext.Provider;

export const useProfile = () => {
  const context = React.useContext(ProfileContext);
  if (!context)
    throw new Error("useProfileUser must be used within a ProfileUserProvider");
  return context;
};
