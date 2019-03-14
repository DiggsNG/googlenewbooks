class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      text: 'Harry Potter'
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(text) {
    this.setState({text: text}, this.getBooks());
  }
}