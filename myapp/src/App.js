
const App = () => {

  const city = "Paris"

  let styles

  if (city === 'Paris') {
    styles = {
      width: '350px',
      border: "10px solid red"
    }
  } else {
    styles = {
      width: '200px',
      border: "10px solid black"
    }
  }

  const handler = () => {
    console.log("I was clicked")
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="container">
        <h3>{city}</h3>
        {/* <img style={{ width: "500px", border: "10px solid red" }} src="https://media.istockphoto.com/photos/silhouette-action-sport-picture-id1272269793?b=1&k=20&m=1272269793&s=170667a&w=0&h=xie_NP8GQ6LFpiA0WLqoVUF7y2wyebpCJDQ4wJwPy40="></img>
         */}
        <img style={styles} src="https://media.istockphoto.com/photos/silhouette-action-sport-picture-id1272269793?b=1&k=20&m=1272269793&s=170667a&w=0&h=xie_NP8GQ6LFpiA0WLqoVUF7y2wyebpCJDQ4wJwPy40="></img>

        {/* <button onClick={handler}>CLICKME</button> */}
        <button onMouseMove={handler}>CLICKME</button>

      </div>

      <footer>
        <a href="#">Github</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </footer>
    </div >
  );
}

export default App;