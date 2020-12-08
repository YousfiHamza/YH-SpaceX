import "./App.css";
import logo from "./spacex-logo.png";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Launches from "./components/launches.jsx";
import Launch from "./components/launch.jsx";

const client = new ApolloClient({
  uri: "/graphql", // ON Prod cauz the proxy was added in the client package.json
  // uri: "http://localhost:4000/graphql", ONLY ON LOCAL
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="Space X"
            style={{ width: 300, display: "block", margin: "auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
