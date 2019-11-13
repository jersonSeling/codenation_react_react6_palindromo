class Item extends React.Component {
  render() {
    console.log(this.props.data)

    let resultPalindromo = ""
    if (this.props.data.isPalindromo === "sim")	
      resultPalindromo = "positivo"
    else
      resultPalindromo = "negativo"


    return (
      <div className="container">
        <div className="container-item" data-verificado={resultPalindromo}>{this.props.data.item}</div>
        <div className="container-item">{this.props.data.isPalindromo}</div>        
      </div>
    );
  }
}
