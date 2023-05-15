import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { GalleryList } from "./ImageGallery.styled";
import PropTypes from "prop-types";

export const ImageGallery = ({ data = [], onClick = () => { } }) => {
  return (
    <GalleryList>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
        alt={tags}
        onClick={onClick}        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  )
}