import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! Bye!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello World! Silky
        </a>
      </header>
    </div>
  );
}

/**
 * When running this we used 
 * docker run -p 3000:3000 -v /app/node_modules -v $(pwd):app f7d582b7eba9
 * we want it to reference the files from the container to the local folder but we want
 * to still keep the node modules in the app folder as that is where the dependencies are.
 * We don't have the node modules folder in the local folder to avoid duplicates.
 */

/**
 * To run tests on the app we used:
 * docker run -it 7d2585f30b5ed553bc053360aa48478d411ffa749244e9600b0b19f1ca622 npm run test
 */

/**
 * For the production run we created a 'Dockerfile' to copy over the build folder
 * Then we ran
 * docker build .
 * To officially run it we ran
 * docker run -p 8080:80 f75ee5c7c3ba8f81f40f841380fd4ade009811a602eeb330514eb5db782 
 * Then you can open up browser to localhost:8080
 */

export default App;
