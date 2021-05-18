import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const SMarket = styled.div`
  line-height: 30px;
  text-decoration: underline;
`;

const CoinMktPresenter = ({ loading, markets }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        {markets.map((market, index) => (
          <SMarket key={index}>{market.exchange_name}</SMarket>
        ))}
      </Container>
    </>
  );

CoinMktPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_name: PropTypes.string.isRequired
    }).isRequired
  )
};

export default CoinMktPresenter;
