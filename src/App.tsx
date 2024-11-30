import { Router } from "./routes/Router.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.ts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
