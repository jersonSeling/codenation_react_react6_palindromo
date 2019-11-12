class Header extends React.Component {
  render() {
    return (
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>

        <input type="text" id="myInput" placeholder="Texto..." onKeyUp = {(event) => {
                                                                            event.preventDefault()
                                                                            if(event.key === 'Enter'){
                                                                              this.props.addFunc(event.target.value)
                                                                              event.target.value = ""}}} />

      </div>
    );
  }
}
