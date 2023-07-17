import styles from './App.module.css';
import { ScrollButton, DescriptionList } from '@/components';

function App() {
  return (
    <div className={styles.container}>
      <h1>React 이펙트</h1>
      <hr />
      <DescriptionList />
      <ScrollButton.Group>
        <ScrollButton />
        <ScrollButton mode="up" />
      </ScrollButton.Group>
    </div>
  );
}

export default App;
