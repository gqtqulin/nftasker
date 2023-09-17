import { getAccountAddress } from "../api/ethereumRequests";
import { addUser, findUserByAddress } from '../api/firebaseRequests';
import { useToast } from '@chakra-ui/react'


export const login = async () => {
    const account = await getAccountAddress();
    if (account) {
        const user = await findUserByAddress(account);
        console.log(user);
        if (user) {
            //сменить на вид страницы на залогиненного
            console.log('уже заходил, логин')
        } else {
            //показать форму для заполнения имени
            
            addUser(account, 'name', '1234');
        }
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