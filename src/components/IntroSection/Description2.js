import React from "react";
import desc_image from "./../../assets/desc_bg.jpeg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

var descbgStyle = { backgroundImage: `url(${desc_image})` };

const Description = (props) => (
  <Box
    display="flex"
    flexWrap="wrap"
    alignItems="center"
    justifyContent="center"
    p={0}
    m={0}
    className="desc-box"
    style={descbgStyle}
  >
    <Container maxWidth="lg" disableGutters={true}>
      <Typography variant="h6" align="center">
        {props.desc}
      </Typography>
    </Container>
  </Box>
);

export default Description;
