import { DescriptionList, ScrollButton } from '../components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React 컴포넌트 &amp; Props</h1>

      <hr />

      <DescriptionList />

      <ScrollButton.Group>
        <ScrollButton mode="down" label="App 영역 끌어 내리기" />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
