/* global document */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as idyllComponents from 'idyll-components';
import * as customComponents from './components/index';
import idyllMarkup from './app.idyll';
import IdyllContent from './containers/idyll_content';

import Spinner from './containers/spinner';

import fetchData from './data/fetchData';

class App extends Component {
  state = {
    loading: false,
    loadingMessage: 'loading story...',
    data: {},
  };

  async componentWillMount() {
    this.setState({ loading: true });
  }

  async componentDidMount() {
    this.setState({ data: await fetchData() });
    this.setState({ loading: false });
  }

  render() {
    const { state: { data, loading, loadingMessage } } = this;

    if (loading) {
      return (<Spinner message={loadingMessage} />);
    }

    return (
      <IdyllContent
        markup={idyllMarkup}
        components={{ ...idyllComponents, ...customComponents }}
        data={data}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('idyll-content'));
