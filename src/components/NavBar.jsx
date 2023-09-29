/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo_white.png";
import { Box, Flex, Icon, Img, Link, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NavBar({iconSrc, navHeading, showProfile, navigatePage}) {
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

    const navigate = useNavigate();

    const handleClick=()=> {
        navigate({navigatePage});
    }
  return (
    <>
      <Flex bg="#1E63E1" _after={after} align="center" px={5}>
        <Img src={logo} alt="Ahaa logo" m={2}/>
        <Text mx="auto" color="#fff" fontSize="5xl" fontWeight="bold">{navHeading}</Text>
        <Stack color="#fff" _hover={{textDecoration: "none"}} onClick={handleClick} cursor="pointer">
            <Icon as={iconSrc} boxSize="3.5rem"/>
          {showProfile && <Text textAlign="center" fontWeight="bold">Profile</Text>}
        </Stack>
      </Flex>
    </>
  );
}

export default NavBar;
