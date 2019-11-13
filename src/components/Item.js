class Item extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div className="container">
        <div className="container-item">{this.props.data.item}</div>
        <div className="container-item">{this.props.data.isPalindromo}</div>        
      </div>
    );
  }
}
