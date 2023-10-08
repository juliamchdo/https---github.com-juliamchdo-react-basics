import "./App.css";
import { Component } from "react";
import { loadPosts } from "./utils/load-posts"
import { Posts } from "./components/Posts";

class App extends Component {
  state = {
    photos: [],
    posts: [],
  };

  //lifecycle methods//
  async componentDidMount() {
    await this.loadPosts();
  }
  //lifecycle methods//

  loadPosts = async () => {
    const photosAndPosts = await loadPosts();
    this.setState({ posts: photosAndPosts });
  };

  render() {
    //destructuring
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>
    );
  }
}

export default App;
