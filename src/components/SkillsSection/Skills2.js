import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Skills = (props) => (
  <div>
    <Box mt={5} mb={1}>
      <Typography variant="h6" align="center">
        {props.title}
      </Typography>
    </Box>
    <Box mb={2}>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {props.array.map(function (item, key) {
          if (item.skill_type === props.type) {
            return (
              <span className={props.style + " chip"} key={key}>
                <FontAwesomeIcon
                  icon={[item.skill_icon[0], item.skill_icon[1]]}
                />
                &nbsp;&nbsp;{item.skill_name}
              </span>
            );
          } else {
            return "";
          }
        })}
      </Grid>
    </Box>
  </div>
);

export default Skills;
