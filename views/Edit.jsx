const React = require('react');

class Edit extends React.Component{
  render() {
    return(
      <div title="Edit Log">
      <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={this.props.logs.title}/><br/>
        Entry: <input type="text" name="entry"  defaultValue={this.props.logs.entry}/><br/>
        Ship Is Broken:
            { this.props.logs.shipIsBroken?
            <input type="checkbox" name="shipIsBroken" defaultChecked />
            : <input type="checkbox" name="shipIsBroken"/> }
        <br/>
        <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports = Edit;
