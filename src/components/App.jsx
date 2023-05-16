import React, { Component } from "react";
import  Searchbar  from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { ButtonLoadMore } from "./Button/Button";
import { ModalWindow } from "./Modal/Modal";
import { getDataByName } from "./services/api";
import { Container } from "./Container/Container";


export class App extends Component {
  state = {
    pictures: [],
    input: '',
    page: 1,
    isLoading: false,
    error: '',
    modalImg: '',
    totalHits: null,
  };

  componentDidUpdate(_, prevState,) {
    const getApiByName = async (input, page) => {
      try {
        this.setState({ isLoading: true });
        const data = await getDataByName(input, page);
        this.setState({ isLoading: false });
        const arr = data.hits;
        const totalHits = data.totalHits;
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...arr],
          totalHits: totalHits,
        }));
       
      } catch (err) {
        this.setState({ 
          error: err.message,
        });
      } finally {
        this.setState({ isLoading: false })
      }
    }
    if (prevState.input !== this.state.input) return getApiByName(this.state.input, this.state.page);
    if (prevState.page !==this.state.page) return getApiByName(this.state.input, this.state.page);
    else return;
  };

  onFind = (search) => {
    this.setState({ input: search, pictures: [], page: 1 });
  };

  onClick = () => {
    this.setState({ page: this.state.page + 1});
  };

  onModalOpen = url => {
    this.setState({ modalImg: url });
  };

  onModalClose = () => {
    this.setState({ modalImg: '' });
  };

  render () {
    let isLoading = this.state.isLoading;
    let hasMorePictures = this.state.hasMorePictures;
    return (
      <div>
        <Searchbar
        onFind={this.onFind} />
        <Container>
        <ImageGallery
        data={this.state.pictures}
        onClick={this.onModalOpen}
        />
        {isLoading && <Loader/>}
        {this.state.modalImg && (
          <ModalWindow
          closeModal={this.onModalClose}
          url={this.state.modalImg}/>
        )}
        {this.state.totalHits / 12 > this.state.page && (<ButtonLoadMore
        onClick={this.onClick}
        isLoading={isLoading}
        pictures={this.state.pictures}
        />
        )}
        </Container>
      </div>
    )
  }
}