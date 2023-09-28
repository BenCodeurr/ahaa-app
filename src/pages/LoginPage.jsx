/* eslint-disable no-unused-vars */
import React from "react";
// import "./style.css";
import logo from "../assets/logo_white.png";
import "../fonts/fonts.css";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GoPasskeyFill } from "react-icons/go";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Flex
      bgGradient="linear(to-r, #1E63E1 50%, #fff 50%)"
      minH="100vh"
      justify="center"
      align="center"
    >
      <Flex rounded="xl" shadow="dark-lg" padding={5} width={980}>
        <Flex
          w="50%"
          align="start"
          justify="center"
          flexDir="column"
          color="#fff"
        >
          <Box mx="auto">
            <Flex align="center" gap={10}>
              <Heading textTransform="uppercase">Log in</Heading>
              <Icon as={BsArrowRight} fontSize="2xl" />
            </Flex>
            <Text fontSize="xl">Your favorite attendance management system</Text>
          </Box>
        </Flex>
        <Flex flexDir="column" className="right-side" mx="auto" my={5} gap={5}>
          <Box className="logo" textAlign="center">
            <Img src={logo} alt="Ahaa Logo" />
            <Text fontSize="sm" fontWeight="semibold" color="gray.400">
              Hello! Welcome back.
            </Text>
          </Box>
          <Box as="form">
            <FormLabel color="gray.600">Email address</FormLabel>
            <InputGroup mb={5}>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdEmail} color="#1E63E1" />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                borderColor="gray.300"
                shadow="lg"
                _placeholder={{ fontSize: "xs" }}
              />
            </InputGroup>
            <FormLabel color="gray.600">Password</FormLabel>
            <InputGroup mb={5}>
              <InputLeftElement pointerEvents="none">
                <Icon as={GoPasskeyFill} color="#1E63E1" />
              </InputLeftElement>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                borderColor="gray.300"
                shadow="lg"
                _placeholder={{ fontSize: "xs" }}
              />
            </InputGroup>
            <Flex fontSize="sm" justify="space-between">
              <HStack>
                <Checkbox defaultChecked size="sm">
                  Remember me
                </Checkbox>
              </HStack>
              <Text as={Link} color="#1E63E1" fontWeight="bold">
                Reset Password
              </Text>
            </Flex>
            <Button
              variant="solid"
              bg="#1E63E1"
              color="#fff"
              w="full"
              my={5}
              _hover={{ bg: "#1E63E1" }}
            >
              Log in
            </Button>
            <Text>
              {"Don't have an account? "}
              <Text as={Link} to="signup" color="#1E63E1" fontWeight="bold">
                Sign Up
              </Text>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;