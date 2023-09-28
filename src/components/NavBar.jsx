/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo_white.png";
import { Box, Flex, Icon, Img, Link, Stack, Text } from "@chakra-ui/react";

function NavBar({iconSrc, navHeading}) {
    const after = {
        content: '""',
        position:'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "200px",
        backgroundColor : "#D2E0F9",
        borderBottomRadius: "100%",
        zIndex: -1,
    }
  return (
    <>
      <Flex bg="#1E63E1" _after={after} align="center" px={5}>
        <Img src={logo} alt="Ahaa logo" m={2}/>
        <Text mx="auto" color="#fff" fontSize="5xl" fontWeight="bold">{navHeading}</Text>
        <Stack as={Link} color="#fff" _hover={{textDecoration: "none"}}>
            <Icon as={iconSrc} boxSize="3.5rem"/>
          <Text textAlign="center" fontWeight="bold">Profile</Text>
        </Stack>
      </Flex>
    </>
  );
}

export default NavBar;
