import { BrowserRouter as Router } from "react-router-dom";
// React Query
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// contexts
import { AppContextProvider } from "contexts/AppContext";

export const queryConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
};

export const queryClient = new QueryClient(queryConfig);

function AppProviders({ children }) {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          {children}
          <ReactQueryDevtools />
        </AppContextProvider>
      </QueryClientProvider>
    </Router>
  );
}

export { AppProviders };
