import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

function EditForm({ employee, onClose }) {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);
  const [department, setDepartment] = useState(employee.department);
  const [salary, setSalary] = useState(employee.salary);

  const handleEdit = () => {
    console.log("EDIT");
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
        <FormLabel border={"none"} width={"80%"} borderRadius={"5px"}>
          Department
        </FormLabel>
        <Input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
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
