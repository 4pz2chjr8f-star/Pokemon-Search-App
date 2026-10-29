import { Header } from "./components/header/Header";
import { Search } from "./components/search/Search";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Search />
      </div>
    </>
  );
}

export default App;
