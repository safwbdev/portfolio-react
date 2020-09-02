import React from "react";
import { db } from "../../firebase";
import Skills from "./Skills2";
import WOW from "wowjs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class SkillsIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      basicSkills: [],
    };
  }
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    db.collection("skills")
      .orderBy("skill_name", "asc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({
          basicSkills: this.state.basicSkills.concat(data),
        });
      });
  }

  render() {
    const basicSkills = this.state.basicSkills;
    const skillDetails = [
      { title: "Essentials", type: "Essentials", style: "indigo lighten-4" },
      { title: "Technical", type: "Technical", style: "blue lighten-3" },
      { title: "Frameworks & Libraries", type: "Framework", style: "lime" },
      { title: "Database", type: "Database", style: "yellow" },
      {
        title: "Content Mangement Systems",
        type: "CMS",
        style: "orange lighten-2",
      },
      { title: "Operating Systems", type: "OS", style: "red lighten-2" },
      { title: "Tools", type: "Tools", style: "purple lighten-4" },
      { title: "Design", type: "Design", style: "purple lighten-3" },
    ];

    return (
      <Container maxWidth="lg">
        <Typography variant="h4" align="center">
          Skills
        </Typography>

        {skillDetails.map(function (item, key) {
          return (
            <Skills
              title={item.title}
              type={item.type}
              style={item.style}
              array={basicSkills}
              key={key}
            />
          );
        })}
      </Container>
    );
  }
}
export default SkillsIndex;
