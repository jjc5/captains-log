const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};
const caseStyle = {
  textTransform: 'capitalize'
}

class Show extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div style={myStyle}>
        <h1 style={caseStyle}>{logs.title}</h1>
        <h2 style={caseStyle}>{logs.entry}</h2>
        <br/>
        <a href='/logs'>BACK</a>
      </div>
    )
  }
}
module.exports = Show;
