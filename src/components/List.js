class List extends React.Component {
  render() {
    return (
      <ul id="myUL">
        {this.props.data.map((el, idx) => (
          <Item key={idx}>{el.item}</Item>
        ))}
      </ul>
    );
  }
}
