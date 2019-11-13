class Header extends React.Component {
  render() {
    return (
      <div id="myDIV" className="header">
        <div className="container">
          <h2 className="container-item">Verificador de Palíndromo</h2>
          <button className="container-item addBtn">Apagar Histórico</button>
        </div>
        <input type="text" id="myInput" placeholder="Texto..." onKeyUp = {(event) => {
                                                                            event.preventDefault()
                                                                            if(event.key === 'Enter'){
                                                                              this.props.addFunc(event.target.value)
                                                                              event.target.value = ""}}} />

      </div>
    );
  }
}
