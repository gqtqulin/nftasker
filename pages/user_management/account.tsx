import { getAccounts } from "../api/ethereumRequests";
import { useToast } from '@chakra-ui/react'

export const login = () => {
    const accounts = getAccounts();
    if (accounts) {
        console.log(accounts);
    } else {
        const toast = useToast();
        return toast({
            title: 'Login is failed.',
            description: "Please, make sure Metamask is installed",
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
    }
};