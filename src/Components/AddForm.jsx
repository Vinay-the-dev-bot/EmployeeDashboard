import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { url } from "../App";
import { useDispatch } from "react-redux";
import { addEmployee } from "../Strore/actions";

function AddForm({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(0);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleAdd = async () => {
    if (firstName && lastName && email && department && salary) {
      const emp = {
        firstName,
        lastName,
        email,
        department,
        salary,
      };
      const res = await fetch(`${url}/employee`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(emp),
      });
      const data = await res.json();
      if (data.msg == "EMPLOYEE ADDED") {
        toast({
          title: "Employee Updated.",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        dispatch(addEmployee({ data: data.employee }));
        onClose();
      } else {
        toast({
          title: `${data.msg}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please Provide All Details",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <FormControl>
        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          First Name
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          Last Name
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          Email
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel border="none" width="80%" borderRadius="5px">
          Department
        </FormLabel>
        <Select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">H.R</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </Select>

        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          Salary
        </FormLabel>
        <Input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <Button
          colorScheme="green"
          margin={"20px 0"}
          w={"100%"}
          onClick={handleAdd}
        >
          Add Employee
        </Button>
      </FormControl>
    </>
  );
}

export default AddForm;
