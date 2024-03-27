import { Box } from "@chakra-ui/react";
import Login from "./Login";

function HOME() {
  return (
    <>
      <Box fontFamily="Poppins, sans-serif">
        {false ? <p>Home</p> : <Login />}
      </Box>
    </>
  );
}

export default HOME;
