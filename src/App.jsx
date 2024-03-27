import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";
import { Provider } from "react-redux";
import store from "./Strore/Store";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
export const url = "local";
export const green = "#34D399";
function App() {
  return (
    <>
      <ChakraProvider>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
            <MainRoute />
          </BrowserRouter>
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
