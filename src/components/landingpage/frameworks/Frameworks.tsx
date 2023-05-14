import React from "react";
import { Box, Container, styled, Stack } from "@mui/material";
import FrameworksTitle from "./FrameworksTitle";

// images
import sliderImg from "public/images/landingpage/background/slider-group.png";
import Image from "next/image";

const SliderBox = styled(Box)(() => ({
  "@keyframes slide": {
    "0%": {
      transform: "translate3d(0, 0, 0)",
    },
    "100% ": {
      transform: "translate3d(-100%, 0, 0)",
    },
  },
  animation: "slide 45s linear infinite",
}));

const Frameworks = () => {
  return (
    <Box
      bgcolor="action.hover"
      sx={{
        py: {
          xs: "70px",
          lg: "120px",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <FrameworksTitle />
      </Container>
      <Stack overflow="hidden" mt={6} direction={"row"}>
        <Box>
          <SliderBox>
            <Image src={sliderImg} alt="slide" style={{ height: "100%" }} />
          </SliderBox>
        </Box>
        <Box>
          <SliderBox>
            <Image src={sliderImg} alt="slide" style={{ height: "100%" }} />
          </SliderBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Frameworks;
