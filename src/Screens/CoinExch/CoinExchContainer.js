import React from "react";
import { getExchangesByCoinId } from "../../api";
import CoinExchPresenter from "./CoinExchPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchanges: null,
      loading: true
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let exchanges = null;
    try {
      ({ data: exchanges } = await getExchangesByCoinId(id));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false, exchanges });
    }
  }

  render() {
    const { exchanges, loading } = this.state;
    return <CoinExchPresenter exchanges={exchanges} loading={loading} />;
  }
}
