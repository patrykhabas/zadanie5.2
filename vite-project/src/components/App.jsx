import { Header } from './Headers';
import { Months } from './Months';
import { Users } from './Users';

function App() {
  return (
    <div className='App'>
      <Header text='miesiące' />
      <Months />
      <hr />
      <Header text='użytkownicy' />
      <Users />
    </div>
  );
}

export default App;
