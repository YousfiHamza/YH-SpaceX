import "./App.css";
import logo from "./spacex-logo.png";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Launches from "./components/launches.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="Space X"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
