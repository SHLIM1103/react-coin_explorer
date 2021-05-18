import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import InnerRouter from "../../Components/InnerRouter";

const Container = styled.div``;

const Name = styled.h1``;

const Desc = styled.div`
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Item = styled.div`
  margin-top: 5px;
`;

const ItemTitle = styled.span`
  font-weight: 600;
`;

const CoinDetailPresenter = ({ loading, coin }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <Name>{coin.name}</Name>
        <Desc>{coin.description}</Desc>
        <Item>
          <ItemTitle>Rank: </ItemTitle>
          {coin.rank}
        </Item>
        <Item>
          <ItemTitle>Open Source: </ItemTitle>
          {coin.open_source ? "Yes" : "No"}
        </Item>
        <Item>
          <ItemTitle>Proof Type: </ItemTitle>
          {coin.proof_type}
        </Item>
        <Item>
          <ItemTitle>Structure: </ItemTitle>
          {coin.org_structure}
        </Item>
        <InnerRouter id={coin.id} />
      </Container>
    </>
  );

CoinDetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number.isRequired,
      open_source: PropTypes.bool.isRequired,
      proof_type: PropTypes.string.isRequired,
      org_structure: PropTypes.string.isRequired
    }).isRequired
  )
};

export default CoinDetailPresenter;
