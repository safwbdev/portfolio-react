import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import profile_img from "./../../assets/profile.jpg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const Profile = (props) => {
  const name = props.fName;
  const designation = props.designation;
  const tel = props.tel;
  const email = props.email;
  const github = props.github;
  const linkedin = props.linkedin;
  const address = props.address;

  console.log(props);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        p={0}
        m={0}
        className="profile2-box"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={3}>
            <Avatar alt={name} src={profile_img} />
          </Grid>
          <Grid item container direction="row" xs={12} sm={9} md={9}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h2" component="h1">
                {name}
              </Typography>
              <Typography variant="h4" component="h4">
                {designation}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={"tel:" + tel}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PhoneIcon />}
                >
                  <Hidden mdDown>{tel}</Hidden>
                </Button>
              </a>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={"mailto:" + email}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<MailOutlineIcon />}
                >
                  <Hidden mdDown>{email}</Hidden>
                </Button>
              </a>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={github} target="_blank">
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHubIcon />}
                >
                  <Hidden mdDown>Check out my Github</Hidden>
                </Button>
              </a>
            </Grid>
            <Grid item xs={3} sm={6} md={6}>
              <a href={linkedin} target="_blank">
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LinkedInIcon />}
                >
                  <Hidden mdDown>Visit my linkedIn</Hidden>
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Hidden mdDown>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LocationOnIcon />}
                >
                  {address}
                </Button>
              </Hidden>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
