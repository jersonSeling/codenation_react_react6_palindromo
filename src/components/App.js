class App extends React.Component {

  constructor(props) {
    super(props)
    this.adicionarItem = this.adicionarItem.bind(this)
    this.limparItens = this.limparItens.bind(this) 

    this.state = {items: []}
  }

  adicionarItem = (item) => {

    if(!item || item.trim().length <= 0){
      console.log("valor inválido");
      return
    } 

    let {items} = this.state
    items.push({item: item, isPalindromo: EhPalindromo(item)})
    this.setState({items})
  }

  limparItens = () => {
    this.setState({items: []})
  }

      // o Header precisa alterar o estado da List!!!
  render() {
    return (

        <div className="conteudo">
          <Header addFunc = {this.adicionarItem} clearFunc = {this.limparItens}/>
          <List data = {this.state.items}/>
        </div>

    );
  }
}
