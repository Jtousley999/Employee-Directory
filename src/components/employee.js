import React, { Component } from "react";
import Searchbar from "./searchbar";
import Jumbotron from "./jumbotron";
import Result from "./result";
import Table from "./table";
import Header from "./header";
import Body from "./body";
import Container from "./container";
import axios from "axios";

class Employee extends Component {
  state = { users: [], store: [] };

  componentDidMount() {
    axios
      .get(
        "https://randomuser.me/api/?results=50&inc=picture,name,phone,email,dob,registered"
      )
      .then((json) =>
        json.data.results.map((result) => ({
          id: result.registered.date,
          image: result.picture.thumbnail,
          name: `${result.name.first} ${result.name.last}`,
          phone: result.phone,
          email: result.email,
          birthday: result.dob.date,
        }))
      )
      .then((data) => this.setState({ users: data, store: data }))
      .catch((err) => alert(err));
  }

  handleInput = (event) => {
    let value = event.target.value.toLowerCase().trim();
    const newArr = this.state.store.filter((result) => {
      return result.name.toLowerCase().trim().includes(value);
    });
    this.setState({ store: newArr });
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron />
          <Searchbar search={this.handleInput} />
          <Table>
            <Header />
            <Body>
              {this.state.store.map((data) => (
                <Result
                  id={data.id}
                  image={data.image}
                  name={data.name}
                  phone={data.phone}
                  email={data.email}
                  birthday={data.birthday.substring(0, 10)}
                />
              ))}
            </Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Employee;
