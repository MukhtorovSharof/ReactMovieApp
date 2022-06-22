import React, { Component } from "react";
import { Button, Input, InputGroup } from "reactstrap";

class Search extends Component {
  state = {
    inpValue: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.inpValue, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        this.props.searchMovie(this.state.inpValue, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <div className="col-8 mx-auto">
          <InputGroup>
            <Input
              placeholder="Search..."
              type="search"
              value={this.state.value}
              onChange={(e) => this.setState({ inpValue: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <Button
              onClick={() => this.props.searchMovie(this.state.inpValue, this.state.type)}
              className="bg-success"
            >
              Search Recept
            </Button>
          </InputGroup>
        </div>
        <div className="col-8 mt-3">
          <div className="form-check">
            <input
              className="me-1"
              type="radio"
              name="type"
              value="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            All
            <input
              className="ms-2 me-1"
              type="radio"
              name="type"
              value="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            Movies only
            <input
              className="ms-2 me-1"
              type="radio"
              name="type"
              value="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            Series only
          </div>
        </div>
      </>
    );
  }
}

export default Search;
