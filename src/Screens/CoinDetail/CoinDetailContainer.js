import React from "react";
import { getCoinById } from "../../api";
import CoinDetailPresenter from "./CoinDetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      loading: true
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let coin = null;
    try {
      ({ data: coin } = await getCoinById(id));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false, coin });
    }
  }

  render() {
    const { loading, coin } = this.state;
    return <CoinDetailPresenter loading={loading} coin={coin} />;
  }
}
