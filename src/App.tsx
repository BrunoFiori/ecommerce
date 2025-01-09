import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import useAxiosLoader from "./app/hooks/useAxiosLoader";
import Router from "./router";
import LoadingOverlay from "./view/components/LoadingOverlay";

const queryClient = new QueryClient();

function App() {
  useAxiosLoader();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <LoadingOverlay />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
