import useAuth from "@/hooks/useAuth";
import { ProfileProvider } from "@/profileContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  );

  // return <Component {...pageProps} />;
}
