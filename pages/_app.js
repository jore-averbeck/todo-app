import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import useSWR from "swr";

import Layout from "../components/Layout.js";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [done, setDone] = useLocalStorageState("favourites", {
    defaultValue: [],
  });
  const {
    data: todos,
    isLoading,
    error,
  } = useSWR("/api/ideas", fetcher, {
    fallbackData: [],
  });

  function handleToggleDone(id, event) {
    event.preventDefault();
    if (done.includes(id)) {
      setDone(done?.filter((favourite) => favourite !== id));
    } else {
      setDone([...done, id]);
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
          done={done}
          todos={todos}
          onToggleDone={handleToggleDone}
        />
      </Layout>
    </SWRConfig>
  );
}
