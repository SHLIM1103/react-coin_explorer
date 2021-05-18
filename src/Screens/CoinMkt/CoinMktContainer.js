import React from "react";
import { getMarketsByCoinId } from "../../api";
import CoinMktPresenter from "./CoinMktPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: null,
      loading: true
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let markets = null;
    try {
      ({ data: markets } = await getMarketsByCoinId(id));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false, markets });
    }
  }

  render() {
    const { loading, markets } = this.state;
    return <CoinMktPresenter loading={loading} markets={markets} />;
  }
}
