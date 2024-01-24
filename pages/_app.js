import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import useSWR from "swr";

import Layout from "../components/Layout.js";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [favourites, setFavourites] = useLocalStorageState("favourites", {
    defaultValue: [],
  });
  const {
    data: todos,
    isLoading,
    error,
  } = useSWR("/api/ideas", fetcher, {
    fallbackData: [],
  });

  function handleToggleFavourites(id, event) {
    event.preventDefault();
    if (favourites.includes(id)) {
      setFavourites(favourites?.filter((favourite) => favourite !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  }

  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          favourites={favourites}
          todos={todos}
          onToggleFavourites={handleToggleFavourites}
        />
      </Layout>
    </SWRConfig>
  );
}
