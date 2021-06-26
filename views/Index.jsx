const React = require('react');

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div title={'Logs Index Page'}>
        <h1>The Captain's Logs</h1>
        <button><a href="/logs/new">Create a new log</a></button>
        <ul>
          {
            logs && logs.map((logs, i) => {
              return(
                <li>
                  <h2>{logs.title}</h2>
                  <h3>{logs.entry}</h3>
                  <button><a href={`/logs/${logs._id}`}>click</a></button>
                  <form method="POST" action={`/logs/${logs._id}?_method=DELETE`}>
                    <input type="submit" value="DELETE"/>
                  </form>
                  <button><a href={`/logs/${logs._id}/edit`}>Edit This Log</a></button>
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
