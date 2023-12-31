import Link from "next/link";
import Layout from "../components/Layout";
import PopularTasksList from "./components/PopularTasksList";
import NewTasksList from "./components/NewTasksList";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { login } from "./user_management/account";
import ModalDialogRegister from "./components/ModalDialogRegister";

const IndexPage = () => {
  return (
    <ChakraProvider>
      <ModalDialogRegister />

      <Heading fontSize="2xl">NFTasker</Heading>
      <Text fontSize="2xl"></Text>

      <PopularTasksList />
      <NewTasksList />

      <Button colorScheme="teal" variant="solid" onClick={login}>
        MetaMask
      </Button>

      <Link href="/addTask">
        <Button colorScheme="teal" variant="solid">
          Add NFTask
        </Button>
      </Link>

      <Link href="/about">
        <Button colorScheme="teal" variant="solid">
          About
        </Button>
      </Link>
    </ChakraProvider>
  );
};

export default IndexPage;
