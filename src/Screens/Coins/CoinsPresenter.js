import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";

const Container = styled.div`
  text-decoration: underline;
  line-height: 30px;
`;

const CoinsPresenter = ({ loading, coins }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {coins
        .filter((coin) => coin.rank !== 0)
        .sort((first, second) => first.rank - second.rank)
        .map((coin) => (
          <Coin key={coin.id} {...coin} />
        ))}
    </Container>
  );

CoinsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default CoinsPresenter;
