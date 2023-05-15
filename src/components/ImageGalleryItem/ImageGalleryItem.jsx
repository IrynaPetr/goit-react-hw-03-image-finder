import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL = "",
  largeImageURL = "",
  tags = "",
  onClick = () => { },
}) => {
  return (
    <GalleryItem>
      <GalleryImage
          src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};


ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};