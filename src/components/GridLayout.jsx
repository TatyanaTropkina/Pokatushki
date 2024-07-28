import LinkIcon from "./LinkIcon";
import TrainIcon from "./TrainIcon";
import SpeedTrainIcon from "./SpeedTrainIcon";
import "./../scss/styleGrid.scss";
import WidgetWithIframe from "./WidgetWithIframe";
function GridLayout(props) {
  if (!props.state) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-card">
      {props.state.map((item) => (
        <div key={item.id} className="card">
          <div className="card__head">
            <WidgetWithIframe src={item.track} />
          </div>
          <div className="card__body">
            <div className="card__body-head">
              <h2 className="card__body-title">{item.path}</h2>
              <a href={item.track} target="_blank" rel="noreferrer">
                <LinkIcon size="Big" />
              </a>
            </div>
            <p>
              <strong>Дистанция:</strong> {item.distance} км
            </p>
            {item.station && (
              <p>
                <strong>Станция:</strong> {item.station}
              </p>
            )}
            {(item.there[0]?.train[0]?.link !== "" ||
              item.there[0]?.speedTrain[0]?.link !== "" ||
              item.back[0]?.train[0]?.link !== "" ||
              item.back[0]?.speedTrain[0]?.link !== "") && (
              <div className="card__body-info info">
                {(item.there[0].train[0]?.link !== "" ||
                  item.there[0].speedTrain[0]?.link !== "") && (
                  <div className="info__there">
                    <div className="info__there-item">
                      <p>
                        <strong>Туда:</strong>
                      </p>
                      {item.there[0].train[0]?.link !== "" && (
                        <div className="info__there-train">
                          <TrainIcon />
                          <a
                            className="info__there-link link"
                            href={item.there[0].train[0].link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Электричка:
                            <LinkIcon size="Small" />
                          </a>
                        </div>
                      )}
                      {item.there[0].speedTrain[0]?.link !== "" && (
                        <div className="info__there-train">
                          <SpeedTrainIcon />
                          <a
                            className="info__there-link link"
                            href={item.there[0].speedTrain[0].link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ласточка:
                            <LinkIcon size="Small" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {(item.back[0]?.train[0]?.link !== "" ||
                  item.back[0]?.speedTrain[0]?.link !== "") && (
                  <div className="info__back">
                    <div className="info__back-item">
                      <p>
                        <strong>Обратно:</strong>
                      </p>
                      {item.back[0]?.train[0]?.link !== "" && (
                        <div className="info__back-train">
                          <TrainIcon />
                          <a
                            className="info__back-link link"
                            href={item.back[0].train[0].link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Электричка:
                            <LinkIcon size="Small" />
                          </a>
                        </div>
                      )}
                      {item.back[0]?.speedTrain[0]?.link !== "" && (
                        <div className="info__back-train">
                          <SpeedTrainIcon />
                          <a
                            className="info__back-link link"
                            href={item.back[0].speedTrain[0].link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ласточка:
                            <LinkIcon size="Small" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {item.comments && (
              <p>
                <strong>Комментарии:</strong> {item.comments}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default GridLayout;
