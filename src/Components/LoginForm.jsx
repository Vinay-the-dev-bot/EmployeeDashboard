import { useState } from "react";
import { green, url } from "../App";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  useToast,
} from "@chakra-ui/react";
// import LoadingToast from "./LoadingToast";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email && password) {
      const res = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      if (data.token) {
        setIsLoading(false);
        toast({
          title: "Successfully Logged In.",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        console.log(data.user.username);
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("token", data.token);
        dispatch({
          type: "LOGIN",
          payload: { username: data.user.username, token: data.token },
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setIsLoading(false);
        toast({
          title: `${data.msg}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please Provide both email and password",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {/* {isLoading && <LoadingToast message={"Logging in"} />} */}
      <Box width={"80%"} margin={"auto"}>
        <FormControl
          display={"flex"}
          flexDirection={"column"}
          width={"40%"}
          margin={"auto"}
          borderRadius={"10px"}
          padding={"50px 0"}
          backgroundColor={green}
        >
          <FormLabel
            border={"none"}
            width={"80%"}
            margin={"auto"}
            marginBottom={"5px "}
            borderRadius={"5px"}
          >
            Enter Email
            <Text padding={"0 5px"} color={"red"} as="span">
              *
            </Text>
          </FormLabel>
          <Input
            backgroundColor={"#f0f0f0"}
            padding={"5px"}
            width={"80%"}
            margin={"auto"}
            marginBottom={"20px"}
            borderRadius={"5px"}
            type="email"
            placeholder="Enter User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel
            border={"none"}
            width={"80%"}
            margin={"auto"}
            marginBottom={"5px "}
            borderRadius={"5px"}
          >
            Enter Password
            <Text padding={"0 5px"} color={"red"} as="span">
              *
            </Text>
          </FormLabel>
          <Input
            padding={"5px"}
            width={"80%"}
            margin={"auto"}
            backgroundColor={"#f0f0f0"}
            marginBottom={"20px"}
            borderRadius={"5px"}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button width={"80%"} margin={"auto"} onClick={(e) => handleLogin(e)}>
            Login
          </Button>
        </FormControl>
      </Box>
    </>
  );
}
export default LoginForm;
