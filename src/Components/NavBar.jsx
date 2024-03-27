import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Box
        margin={"50px auto"}
        display={"flex"}
        justifyContent={"space-around"}
      >
        <Link to="/">HOME</Link>
        <Link to="/dashboard">DashBoard</Link>
      </Box>
    </>
  );
}

export default NavBar;
