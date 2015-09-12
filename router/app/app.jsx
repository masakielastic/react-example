import { Router, Route, IndexRoute, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ホーム</h1>
        <ul>
          <li><Link to="/react-example/router/">ホーム</Link></li>
          <li><Link to="/react-example/router/about">自己紹介</Link></li>
          <li><Link to="/react-example/router/contact">問い合わせ</Link></li>
          <li><Link to="/react-example/router/test">存在しないページ</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return <h3>ホーム</h3>
  }
}

class About extends React.Component {
  render() {
    return <h3>自己紹介</h3>
  }
}

class Contact extends React.Component {
  render() {
    return <h3>問い合わせ</h3>
  }
}

class NoMatch extends React.Component {
  render() {
    return <h3>存在しないページです。</h3>
  }
}

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path="/react-example/router" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
, document.getElementById('container'))

