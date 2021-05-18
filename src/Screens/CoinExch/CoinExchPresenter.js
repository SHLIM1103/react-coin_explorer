import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;

const StyleExch = styled.div`
  margin-bottom: 15px;
`;

const ItemExch = styled.div`
  font-weight: 600;
`;
const ItemPay = styled.div``;

const CoinExchPresenter = ({ exchanges, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges.map((exchange, index) => (
        <StyleExch key={index}>
          <ItemExch> {exchange.name}</ItemExch>
          <ItemPay>
            {exchange.fiats.length !== 0
              ? `Pay On` + exchange.fiats.map((fiat) => ` ${fiat.symbol}`)
              : ""}
          </ItemPay>
        </StyleExch>
      ))}
    </Container>
  );

CoinExchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fiats: PropTypes.array
    }).isRequired
  )
};

export default CoinExchPresenter;
