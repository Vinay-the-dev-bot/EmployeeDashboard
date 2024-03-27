import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import { deleteEmployee } from "../Strore/actions";
import { url } from "../App";
import { useDispatch } from "react-redux";

function DeleteButton({ employee }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`${url}/employee/${employee._id}`, {
      method: "DELETE",
      // headers: {
      //   "content-type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
    });

    const data = await res.json();

    if (data.msg == "Employee Deleted") {
      dispatch(deleteEmployee(employee));

      toast({
        title: "Emmployee Deleted",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });

      onClose();
    } else {
      toast({
        title: "Emmployee Couldn't be  Deleted due to some error",
        status: "warning",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme="red">
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>First Name : {employee.firstName}</Text>
            <Text>Last Name : {employee.lastName}</Text>
            <Text>Email : {employee.email}</Text>
            <Text>Department Name : {employee.department}</Text>
            <Text>Salary : {employee.salary}</Text>
          </ModalBody>

          <ModalFooter margin={"auto"} w={"100%"}>
            <Button colorScheme="red" w={"100%"} onClick={handleDelete}>
              Delete Employee
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteButton;
