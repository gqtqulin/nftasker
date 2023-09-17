import { getAccountAddress } from "../api/ethereumRequests";
import { addUser } from '../api/firebaseRequests';
import { useToast } from '@chakra-ui/react'


export const login = async () => {
    const account = await getAccountAddress();
    if (account) {
        console.log(account);
        addUser(account, 'name', '123');
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