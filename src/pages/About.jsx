import Card from "../Components/shared/Card";
import { Link } from "react-router-dom";
function About() {
  return (
    <Card>
      <h1>About Me</h1>
      <p>Hello From Nayan</p>
      <p>This a feedback form</p>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}

export default About;
