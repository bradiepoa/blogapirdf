import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import BlogList from './components/pages/BlogList';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <BlogList />
    </div>
  );
}

export default App;
