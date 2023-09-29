/* eslint-disable no-unused-vars */
import React from "react";
import "../fonts/fonts.css";
import { 
    Box,
    Flex,
    Button,
    FormLabel,
    Input,
    InputGroup,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import {AiFillHome} from "react-icons/ai";

const AttendanceQuestion = () => {
  return (
    <Box>
      <Box position="relative">
        <NavBar navHeading="Attendance Question" iconSrc={AiFillHome} />
      </Box>

      <Flex minH="50vh" justify="center" align="center">
        <Box boxShadow='xl' p='6' rounded='md' bg='white'>
            <Box as="form">
            <FormLabel color="gray.600" fontWeight='bold' textTransform='uppercase' textAlign='center' mb='5'>Type the Question</FormLabel>
            <InputGroup>
              <Input
                padding='10'
                type="text"
                name="question"
                placeholder="Default Question in"
                borderColor="gray.300"
                shadow="lg"
                _placeholder={{ fontSize: "md" }}
              />
            </InputGroup>

            <Button
              variant="solid"
              bg="#1E63E1"
              color="#fff"
              w="full"
              my={5}
              _hover={{ bg: "#1E63E1" }}
            >
              Send
            </Button>
            </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AttendanceQuestion;
