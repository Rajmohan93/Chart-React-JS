import './App.css';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

function App() {
  return (
    <div>
      <h1>Chart For Employee's Performance</h1>
      <BarChart />
      <LineChart />
    </div>
  );
}

export default App;