import "./App.css";
import { Component } from "react";
import { PostCard } from "./components/PostCard";

class App extends Component {
  state = {
    photos: [],
    posts: [],
  };

  timeoutUpdate = null;

  //lifecycle methods//
  componentDidMount() {
    this.loadPosts();
  }
  //lifecycle methods//

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    //como tem mais photos do que posts, retorna a quantidade exata
    const photosAndPosts = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: photosAndPosts });

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(posts => this.setState({ posts }))
  };

  render() {
    //destructuring
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
              id={post.id}
              />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
