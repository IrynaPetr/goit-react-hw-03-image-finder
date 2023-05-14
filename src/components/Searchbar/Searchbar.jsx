import { HeaderSearchBar, FormSearchBar, BtnSearch,BtnLabel, Input } from "components/Searchbar/Searchbar.styled";
import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    input: '',
  };

  render() {
    return (
      <HeaderSearchBar>
        <FormSearchBar>
          <BtnSearch type="submit">
            <BtnLabel>Search</BtnLabel>
          </BtnSearch>
          <Input
          type="text"
          autocomplete="off"
          autofocus
      placeholder="Search images and photos"
          />
        </FormSearchBar>
      </HeaderSearchBar>
    )
  }
}

export default Searchbar;