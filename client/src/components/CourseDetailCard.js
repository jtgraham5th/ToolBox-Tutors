import React from "react";
import { Link } from "react-router-dom";

class ClassDetailCard extends React.Component {
  iconConfig(subject) {
    switch (subject) {
      case "Math":
        return "calculator";
      case "Science":
        return "dna icon";
      case "Social Studies":
        return "globe icon";
      case "English/Language Arts":
        return "edit icon";
      case "Test Prep":
        return "tasks icon";
      default:
        return "book icon";
    }
  }
  render() {
    const { subject, price, description } = this.props.course;
    return (
      <div className="card">
        <div className="content">
          <i
            className={`icon big left floated ${this.iconConfig(`${subject}`)}`}
          ></i>
          <div className="header">{subject}</div>
          <div className="meta">{price}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <Link to={`/course/${subject}`}>
              <button className="ui primary button">Sign Up</button>
            </Link>
            <Link to={`/course/${subject}`}>
              <button className="ui secondary button">More Info</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassDetailCard;
