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
} from "@chakra-ui/react";

function DeleteButton({ employee }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDelete = () => {
    console.log("DELETE");
    onClose();
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
