import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  Text,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import EditButton from "../Components/EditButton";
import DeleteButton from "../Components/DeleteButton";
import AddForm from "../Components/AddForm";
function DashBoard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const employees = [
    {
      firstName: "VINAY",
      lastName: "Meti",
      email: "vinay@gmail.com",
      department: "MECH",
      salary: 45000,
    },
    {
      firstname: "VINAY 2",
      lastName: "Meti  2",
      email: "vinay2@gmail.com",
      department: "IEM",
      salary: 18000,
    },
    {
      firstname: "VINAY 3",
      lastName: "Meti 3",
      email: "vinay2@gmail.com",
      department: "ICS",
      salary: 65444,
    },
  ];
  return (
    <>
      <Box
        width={"95%"}
        margin={"auto"}
        display={"flex"}
        padding={"0 50px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={"30px"}>Employee Data</Text>
        <Button colorScheme="green" onClick={onOpen} margin={"20px 0"}>
          Add Employee
        </Button>
      </Box>

      <TableContainer>
        <Table width={"95%"} margin={"auto"} variant="striped">
          <TableCaption>Employee Data</TableCaption>
          <Thead textAlign={"center"}>
            <Tr>
              <Th>Sl.No</Th>
              <Th>FirstName</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Department</Th>
              <Th>Salary</Th>
              <Th textAlign={"center"} width={"10%"} colSpan={2}>
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee, index) => (
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{employee.firstname}</Td>
                <Td>{employee.lastName}</Td>
                <Td>{employee.email}</Td>
                <Td>{employee.department}</Td>
                <Td>{employee.salary}</Td>
                <Td>
                  <EditButton employee={employee} />
                </Td>
                <Td>
                  <DeleteButton employee={employee} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DashBoard;
