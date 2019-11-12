class Item extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <li>
        {children}
      </li>
    );
  }
}
