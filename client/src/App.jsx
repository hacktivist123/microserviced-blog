import PostCreate from "./components/PostCreate"
import PostList from "./components/PostList"

function App() {

  return (
    <div className="App">
      <div className="container mx-auto">
      <h1 className="text-4xl py-3"> Create New Post</h1>
      <PostCreate/>
      <hr className=" mt-5 px-3"/>
      <h1 className="text-3xl py-3">Posts</h1>
      <PostList/>
      </div>

    </div>
  )
}

export default App
