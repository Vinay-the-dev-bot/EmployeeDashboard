import { useState } from "react";
import { green, url } from "../App";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  TagLabel,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    if (email && password && confirmPassword) {
      if (
        (password != "" || confirmPassword != "") &&
        confirmPassword === password
      ) {
        const res = await fetch(`${url}/users/register`, {
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
        if (data.USER) {
          toast({
            title: "Account created.",
            description: "Please login to start adding Tasks ",
            status: "success",
            duration: 1000,
            isClosable: true,
          });

          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast({
            title: "Account already in Use.",
            status: "error",
            duration: 1000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Passwords are Not Matching.",
          description: "Please Check both passwords once",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Enter All Fields.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    //     display: flex;
    // flex-direction: column;
    // width: 40%;
    // margin: auto;
    // border-radius: 10px;
    // padding: 50px 0;
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
      {/* display: flex; justify-content: left; align-items: center; border-bottom:
      1px solid black; border-radius: 5px; background-color: #f0f0f0; margin:
      auto; width: 80%; margin-bottom: 20px; */}
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        borderRadius={"5px"}
        backgroundColor={"#f0f0f0"}
        margin={"auto"}
        width={"80%"}
        marginBottom={"20px"}
      >
        <Input
          // className="passwordInp inpt p-2"
          type="email"
          placeholder="Enter User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>

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
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        borderRadius={"5px"}
        backgroundColor={"#f0f0f0"}
        margin={"auto"}
        width={"80%"}
        marginBottom={"20px"}
      >
        <Input
          className="passwordInp inpt p-2"
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <FormLabel
        border={"none"}
        width={"80%"}
        margin={"auto"}
        marginBottom={"5px "}
        borderRadius={"5px"}
      >
        Confirm Password
        <Text padding={"0 5px"} color={"red"} as="span">
          *
        </Text>
      </FormLabel>
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        borderRadius={"5px"}
        backgroundColor={"#f0f0f0"}
        margin={"auto"}
        width={"80%"}
        marginBottom={"20px"}
      >
        <Input
          className="inpt passwordInp p-2"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          id="confirmpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Box>
      <Button
        id="regButton"
        className="m-auto w-4/5 "
        onClick={(e) => handleRegister(e)}
      >
        Register
      </Button>
    </FormControl>
  );
}

export default SignupForm;
