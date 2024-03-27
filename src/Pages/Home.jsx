import { Box, Text, Button } from "@chakra-ui/react";
import Login from "./Login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HOME() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        fontFamily="Poppins, sans-serif"
      >
        {!isLoggedIn ? (
          <Button colorScheme="green">
            <Link colorScheme="blue" to="/login">
              Login
            </Link>
          </Button>
        ) : (
          <Button>
            <Link colorScheme="blue" to="/dashboard">
              DashBoard
            </Link>
          </Button>
        )}
      </Box>
    </>
  );
}

export default HOME;
