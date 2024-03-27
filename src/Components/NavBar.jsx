import { Box, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    console.log("ashds");
    localStorage.removeItem("token");
  };
  return (
    <>
      <Box
        margin={"50px auto"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Link to="/">HOME</Link>
        {!isLoggedIn ? (
          <Link to="/login">
            <Button colorScheme="blue">Login</Button>
          </Link>
        ) : (
          <Link to="/dashboard">
            <Button colorScheme="green">DashBoard</Button>
          </Link>
        )}
        {isLoggedIn && (
          <Button colorScheme="red" onClick={handleLogout}>
            LOGOUT
          </Button>
        )}
      </Box>
    </>
  );
}

export default NavBar;
