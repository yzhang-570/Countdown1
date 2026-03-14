import './App.css'

function App() {

  // 12:40
  /*
  differences:
  class -> className
  inline styling
    - HTML: style="propertyName: value"
    - React: style={{propertyName: value}}
  */

  return (
    <>
      <div className="main">

        {/* Heading */}
        <h1 style={{color: "#000000"}}> Yuwen Zhang</h1>
        <div className="links-div">
          <a href="https://github.com/yzhang-570" target="_blank">
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/yuwen-zhang28/" target="_blank">
            <p>LinkedIn</p>
          </a>
        </div>
        <p>Hi, my name is Yuwen Zhang, and I go to San Jose State University. I'm a 2nd year majoring in Computer Science.</p>
        
        {/* About */}
        <p><span>Year:</span> 2nd year</p>
        <p><span>Major:</span> Computer Science</p>
        <p><span>Interests:</span> SWE, UI/UX Design</p>

        {/* Hometown */}
        <h2>Hometown</h2>
        <p>Cupertino</p>

        {/* Hobbies */}
        <h2>Here are some of my hobbies: </h2>
        <ol>
          <li>Watching cdramas</li>
          <li>Playing soccer</li>
          <li>Drawing</li>
        </ol>

        {/* Image */}
        <div className="cat-img-card">
          <img id="cat-img" src="https://i.pinimg.com/736x/47/d5/3b/47d53b895b64497082800efd19950c5b.jpg" alt="Cute Cat" width="150px"/>
        </div>

      </div>
    </>
  )
}

export default App
