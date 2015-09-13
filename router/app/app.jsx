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

class Message extends React.Component {

  getPage(name) {
    let pages = [
      {name: 'index', title: 'ホーム', body: 'ホームの内容'},
      {name: 'about', title: '自己紹介', body: '自己紹介の内容'},
      {name: 'contact', title: '問い合わせ', body: '問い合わせの内容'}
    ]

    for (let page of pages) {

      if (name === page.name) {
        return page
      }
    }

    return {
      name: name,
      title: 'エラー',
      body: 'ページは存在しません。'
    }
  }

  render() {
    let name = this.props.params.name

    if (typeof name === 'undefined') {
      name = 'index'
    }

    let page = this.getPage(name)

    return <div>
             <h3>{page.title}</h3>
             <p>{page.body}</p>
           </div>
  }
}

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="react-example/router" component={App}>
      <IndexRoute component={Message}/>
      <Route path=":name" component={Message} />
    </Route>
  </Router>
), document.getElementById('container'))

