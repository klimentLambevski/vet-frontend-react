import Header from './common/heder';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header/>
        {this.props.children}
      </section>
    );
  }
}

export default App;
