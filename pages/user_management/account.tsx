import { getAccountAddress } from "../api/ethereumRequests";
import { useToast } from '@chakra-ui/react'


export const login = async () => {
    const account = await getAccountAddress();
    if (account) {
        console.log(account);
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