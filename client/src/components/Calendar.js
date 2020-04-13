import React from "react";
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";
import moment from 'moment'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: new Date().toString(),
      dateTime: "",
      datesRange: new Date().toString()
    };
  }
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
      console.log(value);
    }
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.dateTime);
  };

  render() {
    const today = moment().format("MM-DD-YYYY")
    console.log(today)
    return (
      <form onSubmit={this.onSubmit}>
        <DateTimeInput
          inline
          dateFormat="MM-DD-YYYY"
          timeFormat="ampm"
          disableMinute
          minDate={today}
          name="dateTime"
          pickerWidth="100%"
        //   pickerStyle={{color: "red"}}
          placeholder="Date Time"
          value={this.state.dateTime}
          iconPosition="left"
          onChange={this.handleChange}
        />
        <button className="ui button primary" onClick={this.onSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Calendar;
