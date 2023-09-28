/* eslint-disable no-unused-vars */
import React from "react";
import attendance from "../../assets/calendar.png";
import absence from "../../assets/report.png";
import request from "../../assets/clipboard.png";
import "../../fonts/fonts.css";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import {FaUserCircle} from "react-icons/fa"

const Student = () => {
  return (
    <Box>
      <Box position="relative">
          <NavBar navHeading="Homepage" iconSrc={FaUserCircle}/>
      </Box>
      <Flex minH="80vh" justify="center" align="center">
        <Box border>
          <Img src={attendance} />
          <Text>Attendance</Text>
        </Box>
        
      </Flex>

      <div className="footer">
        <p>Copyright © 2023 | Ahaa Llc.</p>
      </div>
    </Box>
  );
};

export default Student;
