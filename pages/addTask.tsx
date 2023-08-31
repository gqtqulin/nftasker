import {
  FormControl,
  NumberInput,
  NumberInputField,
  FormLabel,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Input,
  FormErrorMessage,
  FormHelperText,
  ChakraProvider,
  Link,
  Button,
} from "@chakra-ui/react";

const AddTask = () => {
  return (
    <ChakraProvider>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input variant="flushed" size="xs" />
        <FormHelperText>helper title text</FormHelperText>

        <FormLabel>Desc</FormLabel>
        <Input size="lg" variant="filled" />
        <FormHelperText>helper desc text</FormHelperText>

        <Input placeholder="Deadline" type="datetime-local" />

        <FormLabel>Crypto reward</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button type="submit">Submit</Button>
        <Link href="/"><Button colorScheme="teal" variant="solid">Back</Button></Link>
      </FormControl>
    </ChakraProvider>
  );
};

export default AddTask;
