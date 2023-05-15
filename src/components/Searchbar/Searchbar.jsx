import { HeaderSearchBar, FormSearchBar, BtnSearch, BtnLabel, Input } from "./Searchbar.styled";
import React, { Component } from "react";
import searchIcon from '../../search_icon/searh_icon.png'

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.input.length) return;
    this.props.onFind(this.state.input);
  };


  render() {
    return (
      <HeaderSearchBar>
        <FormSearchBar onSubmit={this.onSubmit}>
          <BtnSearch type="submit"
          style={{ backgroundImage: `url(${searchIcon})` }}>
            <BtnLabel>Search</BtnLabel>
          </BtnSearch>
          <Input
          name="input"
          type="text"
          autocomplete="off"
          autoFocus
      placeholder="Search images and photos"
          value={this.state.input}
          onChange={this.onChange}/>
        </FormSearchBar>
      </HeaderSearchBar>
    )
  }
}
