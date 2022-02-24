import './App.css';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import DoughnutChart from './components/DoughnutChart';
import ApiBarChart from './components/ApiBarChart';

function App() {
  return (
    <div>
      <h1>Chart For Employee's Performance</h1>
      <BarChart />
      <LineChart />
      <DoughnutChart />
      <ApiBarChart />
    </div>
  );
}

export default App;