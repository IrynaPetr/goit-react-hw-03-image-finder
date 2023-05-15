import { BtnLoadMore } from "./Button.styled";
import PropTypes from "prop-types";

export const ButtonLoadMore = ({ onClick, isLoading, pictures }) => {
  if (isLoading !== false || pictures.length <= 0) return;
  else return (
    <BtnLoadMore onClick={onClick}>Load more</BtnLoadMore>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonLoadMore;