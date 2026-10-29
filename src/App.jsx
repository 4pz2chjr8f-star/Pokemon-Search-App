import { Header } from "./components/header/Header";
import { RandomButton } from "./components/randomButton/RandomButton";
import { Search } from "./components/search/Search";
import { SearchButton } from "./components/searchButton/SearchButton";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Search />
        <div className="btn-wrapper">
          <SearchButton />
          <RandomButton />
        </div>
      </div>
    </>
  );
}

export default App;
