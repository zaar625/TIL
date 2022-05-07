import './App.scss'
import Kanban from './components/kanban/index';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <h1 style={{ marginBottom: '20px' }}>
        Kanban UI
      </h1>
      <Kanban></Kanban>
    </div >
  );
}

export default App;
