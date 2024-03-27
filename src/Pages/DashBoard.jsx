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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { empData } from "../Strore/actions";
import { url } from "../App";
function DashBoard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedin = useSelector((state) => state.isLoggedIn);
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await fetch(`${url}/employee/?page=${page}`);
      const data = await res.json();
      dispatch(empData(data));
    };
    fetchEmployees();
  }, []);
  const handlePagination = async (dire) => {
    if (dire == "prev") {
      setPage(page - 1);
      const res = await fetch(`${url}/employee?page=${page - 1}`);
      const data = await res.json();
      console.log(data);
      dispatch(empData(data));
    } else {
      setPage(page + 1);
      const res = await fetch(`${url}/employee?page=${page + 1}`);
      const data = await res.json();
      console.log(data);
      dispatch(empData(data));
    }
  };
  return (
    <>
      {isLoggedin ? (
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
                {employees.length > 0 &&
                  employees.map((employee, index) => (
                    <Tr key={employee._id}>
                      <Td>{index + 1}</Td>
                      <Td>{employee.firstName}</Td>
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
          <Box
            display={"flex"}
            justifyContent={"center"}
            fontFamily="Poppins, sans-serif"
          >
            {page != 1 && (
              <Button onClick={() => handlePagination("prev")}>Prev</Button>
            )}
            {employees.length == 5 && (
              <Button onClick={() => handlePagination("next")}>Next</Button>
            )}
          </Box>
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
      ) : (
        <Text textAlign={"center"}>Please Login to View Dashboard</Text>
      )}
    </>
  );
}

export default DashBoard;
