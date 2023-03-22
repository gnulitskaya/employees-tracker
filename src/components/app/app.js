import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {id: 1, employeName: 'Valera', employeSalary: 800, increaseSalary: false},
    {id: 2, employeName: 'Ivan', employeSalary: 700, increaseSalary: true},
    {id: 3, employeName: 'Bob', employeSalary: 300, increaseSalary: false},
    {id: 4, employeName: 'Kiril', employeSalary: 900, increaseSalary: false},
  ]
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
