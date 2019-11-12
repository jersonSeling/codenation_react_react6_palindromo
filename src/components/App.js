class App extends React.Component {

  constructor(props) {
    super(props)
    this.adicionarItem = this.adicionarItem.bind(this)

    this.state = {items: []}
  }

  adicionarItem = (item) => {
    let {items} = this.state
    items.push({item: item, isPalindromo: "???"})
    this.setState({items})
  }

      // o Header precisa alterar o estado da List!!!
  render() {
    return (
      <React.Fragment>
        <Header addFunc = {this.adicionarItem} />
        <List data = {this.state.items}/>
      </React.Fragment>
    );
  }
}
