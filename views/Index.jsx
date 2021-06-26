const React = require('react');

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div title={'Logs Index Page'}>
        <h1>Logs Index Page</h1>
        <nav><a href="/logs/new">Create a new log</a></nav>
        <ul>
          {
            logs && logs.map((logs, i) => {
              return(
                <li>
                  <h2>{logs.title}</h2>
                  <h3>{logs.entry}</h3>
                  <a href={`/logs/${logs._id}`}>click</a>
                  <form method="POST" action={`/logs/${logs._id}?_method=DELETE`}>
                    <input type="submit" value="DELETE"/>
                  </form>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
module.exports = Index;
