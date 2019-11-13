class List extends React.Component {
  render() {
    return (
      <div className="rowItem">
   
          <div className="container">
            <div className="container-item">Frase</div>
            <div className="container-item">Palíndromo</div>
          </div>
        {this.props.data.map((el, idx) => (
          <Item key={idx} data={el}/>
        ))}
 
      </div>
    );
  }
}
