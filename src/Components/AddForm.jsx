import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function AddForm({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(0);

  const handleAdd = () => {
    console.log("ADD");
    onClose();
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
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </Select>

        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          Salary
        </FormLabel>
        <Input
          type="text"
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
