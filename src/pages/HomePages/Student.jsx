/* eslint-disable no-unused-vars */
import React from "react";
import "../../fonts/fonts.css";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Student = () => {
  const cardDetails = [
    {
      title: "Attendance",
      imgSrc: "../../../src/assets/calendar.png",
      path: "attendance"
    },
    {
      title: "Absence Reporting",
      imgSrc: "../../../src/assets/report.png",
      path: ""
    },
    {
      title: "Leave Request",
      imgSrc: "../../../src/assets/clipboard.png",
      path: ""
    },
  ];

  const handleCardClick = () => {};
  return (
    <Box>
      <Box position="relative">
        <NavBar navHeading="Homepage" iconSrc={FaUserCircle} showProfile={true}/>
      </Box>
      <Flex minH="80vh" justify="center" align="center" gap={5}>
        {cardDetails.map((cardDetails, index) => (
          <>
            <Flex
              key={index}
              flexDir="column"
              align="center"
              w="15rem"
              p={4}
              rounded="xl"
              shadow="2xl"
              border="2px"
              borderColor="gray.400"
              fontWeight="bold"
              gap={5}
              cursor="pointer"
              as={Link}
              to={cardDetails.path}
            >
              <Img src={cardDetails.imgSrc} />
              <Text>{cardDetails.title}</Text>
            </Flex>
          </>
        ))}
      </Flex>

      <div className="footer">
        <p>Copyright © 2023 | Ahaa Llc.</p>
      </div>
    </Box>
  );
};

export default Student;
