import { Box } from "./Container.styled";
import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return (
  <Box>
    {children}
  </Box>
  );
};

Container.propTypes = {
  children: PropTypes.node,
}