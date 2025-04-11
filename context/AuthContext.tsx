import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useSegments, useRootNavigationState } from "expo-router";

const ASYNC_STORAGE_AUTH_KEY = "userAuthToken";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem(ASYNC_STORAGE_AUTH_KEY);
        console.log("AuthProvider: Loaded token from storage:", storedToken);
        if (storedToken) {
          setAuthState({
            token: storedToken,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setAuthState({
            token: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } catch (e) {
        console.error("AuthProvider: Failed to load auth data", e);
        setAuthState({ token: null, isAuthenticated: false, isLoading: false });
      }
    };

    loadAuthData();
  }, []);

  const signIn = async (token: string) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_AUTH_KEY, token);
      setAuthState({
        token: token,
        isAuthenticated: true,
        isLoading: false,
      });
      console.log("AuthProvider: Signed in, token saved:", token);
    } catch (e) {
      console.error("AuthProvider: Failed to save auth data", e);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem(ASYNC_STORAGE_AUTH_KEY);
      setAuthState({
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log("AuthProvider: Signed out, token removed.");
    } catch (e) {
      console.error("AuthProvider: Failed to remove auth data", e);
    }
  };

  const value = {
    ...authState,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function useProtectedRoute(auth: AuthContextType) {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState(); // Ensure nav state is ready

  useEffect(() => {
    if (!navigationState?.key || auth.isLoading) {
      console.log(
        "useProtectedRoute: Navigation not ready or Auth loading, skipping effect."
      );
      return; // Ensure navigation is ready and auth state is loaded
    }
    console.log(
      "useProtectedRoute: Auth loaded, checking routes. IsAuthenticated:",
      auth.isAuthenticated
    );

    const inAuthGroup = segments[0] === "(auth)"; // Assuming auth routes are in (auth) group
    console.log("segments123", segments);

    if (!auth.isAuthenticated && !inAuthGroup) {
      // Redirect to login/register if not authenticated and not in auth group.
      console.log("useProtectedRoute: Not authenticated, redirecting to auth.");
      router.replace("/(auth)/login"); // Or your primary auth route
    } else if (auth.isAuthenticated && inAuthGroup) {
      // Redirect to main app if authenticated and tries to access auth group.
      console.log(
        "useProtectedRoute: Authenticated, redirecting from auth group to app."
      );
      router.replace("/(tabs)/questions"); // Redirect to your main app route (e.g., tabs)
    } else {
      console.log("useProtectedRoute: Route access is appropriate.");
    }
    // Depend on auth state, loading status, segments and navigation readiness
  }, [
    auth.isAuthenticated,
    auth.isLoading,
    segments,
    navigationState?.key,
    router,
  ]);
}
