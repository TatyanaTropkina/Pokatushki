import TableHead from "./TableHead";

function TableLayout (props) {
    const filteredRoutesTable = props.state.filter(item => {
        if (props.showType === 1 && !item.isTrain) {
            return true; // Показать маршруты без электричек
        } else if (props.showType === 2 && item.isTrain) {
            return true; // Показать маршруты с электричками
        } else if (props.showType === 0) {
            return true; // Показать все маршруты
        }

        return false; // Скрыть остальные маршруты
    }).map(item => (
        <tbody>
        <tr key={item.id} className={`table-row ${props.zoomedCardId === item.id ? 'zoomed' : ''}`}>

            <td className="tableSeil">{item.id}</td>
            <td className="tableSeil">{item.path}</td>
            <td className="tableSeil seilImg">
                <img  className="tableImg" src={item.screenshot} alt="Route Screenshot" onClick={() => props.toggleZoom(item.id)} />
            </td>
            {props.zoomedCardId === item.id && (
                <div className="overlay" onClick={() => props.toggleZoom(item.id)}>
                    <div className="bigImage">
                        <img src={item.screenshot} alt="Route Screenshot" />
                    </div>
                </div>
            )}
            <td className="tableSeil"><a className="link" href={item.track} target='_blank' rel="noreferrer" >Открыть</a></td>
            <td className="tableSeil">{item.distance}</td>
            <td className="tableSeil">{item.station}</td>
            {/*<td className="tableSeil"> <a className="link linkSchedule" href={item.there[0].link} target='_blank' rel="noreferrer">Расписание</a> {item.there[0].time}</td>*/}
            {/*<td className="tableSeil">{item.there[0].coast} руб.</td>*/}
            {/*<td className="tableSeil"><a className="link linkSchedule" href={item.there[0].link} target='_blank' rel="noreferrer">Расписание</a>{item.back[0].time}</td>*/}
            {/*<td className="tableSeil">{item.back[0].coast} руб.</td>*/}
            <td className="tableSeil">
                {item.there[0].links.length > 0 && (
                    <a className="link linkSchedule" href={item.there[0].links[0].train} target='_blank' rel="noreferrer">
                        Расписание
                    </a>
                )}
                {item.there[0].time}
            </td>
            <td className="tableSeil">
                {item.there[0].coast && `${item.there[0].coast} руб.`}
            </td>
            <td className="tableSeil">
                {item.back[0].links.length > 0 && (
                    <a className="link linkSchedule" href={item.back[0].links[0].train} target='_blank' rel="noreferrer">
                        Расписание
                    </a>
                )}
                {item.back[0].time}
            </td>
            <td className="tableSeil">
                {item.back[0].coast && `${item.back[0].coast} руб.`}
            </td>

            <td className="tableSeil">{item.comments}</td>
        </tr>
        </tbody>
    ));
    return (
        <table className="table">
            <TableHead/>

            {filteredRoutesTable}

        </table>
    );
}
export default TableLayout;