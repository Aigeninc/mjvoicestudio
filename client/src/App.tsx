import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Strip trailing slash from Vite's BASE_URL for wouter's base prop
const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={baseUrl}>
        <Routes />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
