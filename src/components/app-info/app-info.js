import "./app-info.css";

const AppInfo = ({employees, employeesAward}) => {
    return (
        <div className="app-info">
            <h1>Кадровый учет</h1>
            <h3>Общее число сотрудников: {employees}</h3>
            <h3>Премию получат: {employeesAward}</h3>
        </div>
    )
}

export default AppInfo;