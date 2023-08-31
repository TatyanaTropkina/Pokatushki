import LinkIcon from "./LinkIcon";
import TrainIcon from "./TrainIcon";
import SpeedTrainIcon from "./SpeedTrainIcon";
function GridLayout (props) {

    const filteredRoutes = props.state.filter(item => {
        if (props.showType === 1 && !item.isTrain) {
            return true; // Показать маршруты без электричек
        } else if (props.showType === 2 && item.isTrain) {
            return true; // Показать маршруты с электричками
        } else if (props.showType === 0) {
            return true; // Показать все маршруты
        }

        return false; // Скрыть остальные маршруты
    }).map(item => (
        <div key={item.id} className={`route-card ${props.zoomedCardId === item.id ? 'zoomed' : ''}`}>
            <div className="screenshot">
                <img src={item.screenshot} alt="Route Screenshot" onClick={() => props.toggleZoom(item.id)} />
            </div>
            {props.zoomedCardId === item.id && (
                <div className="overlay" onClick={() => props.toggleZoom(item.id)}>
                    <div className="bigImage">
                        <img src={item.screenshot} alt="Route Screenshot" />
                    </div>
                </div>
            )}
            <div className="route-details">
                <div className="head"><h2>{item.path}</h2> <a href={item.track} target='_blank' rel="noreferrer">{<LinkIcon size="Big"/>}</a> </div>
                <p><strong>Дистанция:</strong> {item.distance} км</p>
                {item.station && (
                    <p><strong>Станция:</strong> {item.station}</p>
                )}

                {/*<div className="trainInfo">*/}
                {/*    {item.there[0].link && (*/}
                {/*        <div className="there">*/}
                {/*            <p><strong>Туда:</strong></p>*/}
                {/*            <p>Время: {item.there[0].time}</p>*/}
                {/*            <a className="link linkSchedule" href={item.there[0].link} target='_blank' rel="noreferrer">*/}
                {/*                Расписание*/}
                {/*                {<LinkIcon size="Small" />}*/}
                {/*            </a>*/}
                {/*            <p>Стоимость: {item.there[0].coast} руб.</p>*/}
                {/*        </div>*/}
                {/*    )}*/}

                {/*    {item.back[0].link && (*/}
                {/*        <div className="back">*/}
                {/*            <p><strong>Обратно:</strong></p>*/}
                {/*            <p>Время: {item.back[0].time}</p>*/}
                {/*            <a className="link linkSchedule" href={item.back[0].link} target='_blank' rel="noreferrer">*/}
                {/*                Расписание*/}
                {/*                {<LinkIcon size="Small" />}*/}
                {/*            </a>*/}
                {/*            <p>Стоимость: {item.back[0].coast} руб.</p>*/}
                {/*        </div>*/}
                {/*    )}*/}

                {/*</div>*/}
                <div className="trainInfo">
                    {item.there[0].links.length > 0 && (
                        (item.there[0].links[0].train || item.there[0].links[1].speedTrain) && (
                            <div className="there">
                                <p><strong>Туда:</strong></p>
                                <p>Время: {item.there[0].time}</p>
                                {item.there[0].links[0].train && (
                                    <a className="link linkSchedule" href={item.there[0].links[0].train} target='_blank' rel="noreferrer">
                                        <TrainIcon/>
                                        Расписание
                                        {<LinkIcon size="Small" />}
                                    </a>
                                )}
                                {item.there[0].links[1].speedTrain && (
                                    <a className="link linkSchedule" href={item.there[0].links[1].speedTrain} target='_blank' rel="noreferrer">
                                        <SpeedTrainIcon/>
                                        Расписание
                                        {<LinkIcon size="Small" />}
                                    </a>
                                )}
                                {item.there[0].coast && <p>Стоимость: {item.there[0].coast} руб.</p>}
                            </div>
                        )
                    )}

                    {item.back[0].links.length > 0 && (
                        (item.back[0].links[0].train || item.back[0].links[1].speedTrain) && (
                            <div className="back">
                                <p><strong>Обратно:</strong></p>
                                <p>Время: {item.back[0].time}</p>
                                {item.back[0].links[0].train && (
                                    <a className="link linkSchedule" href={item.back[0].links[0].train} target='_blank' rel="noreferrer">
                                        <TrainIcon/>
                                        Расписание
                                        {<LinkIcon size="Small" />}
                                    </a>
                                )}
                                {item.back[0].links[1].speedTrain && (
                                    <a className="link linkSchedule" href={item.back[0].links[1].speedTrain} target='_blank' rel="noreferrer">
                                        <SpeedTrainIcon/>
                                        Расписание
                                        {<LinkIcon size="Small" />}
                                    </a>
                                )}
                                {item.back[0].coast && <p>Стоимость: {item.back[0].coast} руб.</p>}
                            </div>
                        )
                    )}
                </div>



                {item.comments && (<p><strong>Комментарии:</strong> {item.comments}</p>)}

            </div>
        </div>
    ));
    return (
        <div className="route-grid">
            {filteredRoutes} {/* Ваши компоненты для разметки в виде Grid */}
        </div>
    );
}
export default GridLayout;