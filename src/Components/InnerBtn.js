import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Container = styled.div``;

const Btn = styled.button`
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 15px;
  background-color: ${(props) => (props.selected ? "green" : "white")};
  text-transform: uppercase;
  color: ${(props) => (props.selected ? "white" : "black")};
  font-size: 18px;
  font-weight: 600;
  border: solid 4px green;
  border-radius: 5px;
`;

const InnerBtn = ({ id, location: { pathname } }) => (
  <Container>
    <Btn selected={pathname === `/coins/${id}/markets`}>
      <Link to={`/coins/${id}/markets`}>Markets</Link>
    </Btn>
    <Btn selected={pathname === `/coins/${id}/exchanges`}>
      <Link to={`/coins/${id}/exchanges`}>Excahnges</Link>
    </Btn>
  </Container>
);

InnerBtn.propTypes = {
  id: PropTypes.string.isRequired
};

export default withRouter(InnerBtn);
