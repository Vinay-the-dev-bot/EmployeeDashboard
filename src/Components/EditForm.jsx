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
import { editEmployee } from "../Strore/actions";

function EditForm({ employee, onClose }) {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);
  const [department, setDepartment] = useState(employee.department);
  const [salary, setSalary] = useState(employee.salary);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  console.log(employee._id);
  const handleEdit = async () => {
    setIsLoading(true);
    const _id = employee._id;
    if (firstName && lastName && email && department && salary) {
      const emp = {
        _id,
        firstName,
        lastName,
        email,
        department,
        salary,
      };
      const res = await fetch(`${url}/employee/${employee._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(emp),
      });
      const data = await res.json();
      if (data.msg == "EMPLOYEE EDITED") {
        setIsLoading(false);
        toast({
          title: "Employee Updated.",
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        dispatch(editEmployee({ data: emp }));
        onClose();
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
        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          Department
        </FormLabel>
        {/*  <Input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        /> */}
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
          Employee Name
        </FormLabel>
        <Input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <Button
          colorScheme="blue"
          margin={"20px 0"}
          w={"100%"}
          onClick={handleEdit}
        >
          Edit Employee
        </Button>
      </FormControl>
    </>
  );
}

export default EditForm;
