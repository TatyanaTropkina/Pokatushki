import { useState, useEffect } from 'react';
import LinkIcon from "./LinkIcon";
import ButtonsSection from "./ButtonsSection";
import '../scss/styleBody.scss';
import './../scss/styleGrid.scss';
import './../scss/styleTable.scss';
import TableHead from "./TableHead";

function Table(props) {
const [showType, setShowType] = useState(0);
const [layout, setLayout] = useState('grid');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const iframe = document.querySelector('iframe'); // Замените селектор на ваш селектор iframe
		const controlElement = document.querySelector('.leaflet-control.leaflet-control-layers.leaflet-control-layers-expanded');
		const bodyWrapper = document.querySelector('.bodyWrapper');

		// Слушаем событие загрузки iframe
		iframe.addEventListener('load', () => {
			setIsLoading(false); // Контент в iframe загрузился, можно скрыть прелоадер
			controlElement.classList.add('minimized'); // Добавляем класс minimized
		});
	}, []);

	const filteredRoutes = props.state.filter(item => {
		if (showType === 1 && !item.isTrain) {
			return true; // Показать маршруты без электричек
		} else if (showType === 2 && item.isTrain) {
			return true; // Показать маршруты с электричками
		} else if (showType === 0) {
			return true; // Показать все маршруты
		}

		return false; // Скрыть остальные маршруты
	}).map(item => (
		<div key={item.id} className="route-card">
			{/*<div className="screenshot">*/}
			{/*	<img src={item.screenshot} alt="Route Screenshot" />*/}
			{/*</div>*/}
			<div className="widget">
				<iframe className="widgetIframe" src={item.track} title="Трек"> Ваш браузер не поддерживает фреймы!</iframe>
			</div>
			<div className="route-details">
				<div className="head"><h2>{item.path}</h2> <a href={item.track} target='_blank' rel="noreferrer">{<LinkIcon name="Track"/>}</a> </div>

				<p><strong>Дистанция:</strong> {item.distance} км</p>
				<p><strong>Станция:</strong> {item.station}</p>
				{/*<a className="link" href={item.track} target='_blank' rel="noreferrer">Открыть трек</a>*/}
				<div className="trainInfo">
				<div className="there">
					<p><strong>Туда:</strong></p>
					<p>Время: {item.there[0].time}</p>
					<a className="link linkSchedule" href={item.there[0].link} target='_blank' rel="noreferrer">Расписание{<LinkIcon name="Schedule"/>}</a>
					<p>Стоимость: {item.there[0].coast} руб.</p>
				</div>
				<div className="back">
					<p><strong>Обратно:</strong></p>
					<p>Время: {item.back[0].time}</p>
					<a className="link linkSchedule" href={item.back[0].link} target='_blank' rel="noreferrer">Расписание{<LinkIcon name="Schedule"/>}</a>
					<p>Стоимость: {item.back[0].coast} руб.</p>
				</div>
				</div>
				<p><strong>Комментарии:</strong> {item.comments}</p>
			</div>
		</div>
	));

	const filteredRoutesTable = props.state.filter(item => {
		if (showType === 1 && !item.isTrain) {
			return true; // Показать маршруты без электричек
		} else if (showType === 2 && item.isTrain) {
			return true; // Показать маршруты с электричками
		} else if (showType === 0) {
			return true; // Показать все маршруты
		}

		return false; // Скрыть остальные маршруты
	}).map(item => (
		<tbody>
		<tr key={item.id}>
			<td className="tableSeil">{item.id}</td>
			<td className="tableSeil">{item.path}</td>
			<td className="tableSeil seilImg">
				<img className="tableImg" src={item.screenshot} alt=""/>
			</td>
			<td className="tableSeil"><a className="link" href={item.track} target='_blank' rel="noreferrer" >Открыть</a></td>
			<td className="tableSeil">{item.distance}</td>
			<td className="tableSeil">{item.station}</td>
			<td className="tableSeil"> <a className="link linkSchedule" href={item.there[0].link} target='_blank' rel="noreferrer">Расписание</a> {item.there[0].time}</td>
			<td className="tableSeil">{item.there[0].coast}</td>
			<td className="tableSeil"><a className="link linkSchedule" href={item.there[0].link} target='_blank' rel="noreferrer">Расписание</a>{item.back[0].time}</td>
			<td className="tableSeil">{item.back[0].coast}</td>
			<td className="tableSeil">{item.comments}</td>
		</tr>
		</tbody>
	));

	return (
		<div>
			<ButtonsSection layout={layout} setLayout={setLayout} showType={showType} setShowType={setShowType} />
			{layout === 'grid' ? (
				// Если выбран режим "grid"
				<div className="route-grid">
					{filteredRoutes} {/* Ваши компоненты для разметки в виде Grid */}
				</div>
			) : (
				// Если выбран режим "table"
				<table className="table">
					<TableHead/>

					{filteredRoutesTable}

				</table>
			)}

		</div>

	);
}

export default Table;
