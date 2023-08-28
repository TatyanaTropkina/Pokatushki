function TableHead () {
    return (
        <thead className="tableHead">
        <tr >
            <th className="tableSeil" rowSpan={2}>№</th>
            <th className="tableSeil" rowSpan={2}>Маршрут</th>
            <th className="tableSeil" rowSpan={2}>Скриншот</th>
            <th className="tableSeil" rowSpan={2}>Трек</th>
            <th className="tableSeil" rowSpan={2}>Км</th>
            <th className="tableSeil" rowSpan={2}>Станция</th>
            <th className="tableSeil" colSpan={2}>Туда</th>
            <th className="tableSeil" colSpan={2}>Обратно</th>
            <th className="tableSeil" rowSpan={2}>Комментарии</th>

        </tr>
        <tr>
            <th className="tableSeil">Время</th>
            <th className="tableSeil">Стоимость</th>
            <th className="tableSeil">Время</th>
            <th className="tableSeil">Стоимость</th>
        </tr>
        </thead>
    );
}
export default TableHead;