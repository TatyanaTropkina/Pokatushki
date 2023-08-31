import { useState } from 'react';
import ButtonsSection from "./ButtonsSection";
import '../scss/styleBody.scss';
import './../scss/styleGrid.scss';
import './../scss/styleTable.scss';

import GridLayout from "./GridLayout";
import TableLayout from "./TableLayout";

function Table(props) {
const [showType, setShowType] = useState(0);
const [layout, setLayout] = useState('grid');
	const [zoomedCardId, setZoomedCardId] = useState(null);

	const toggleZoom = (cardId) => {
		if (zoomedCardId === cardId) {
			setZoomedCardId(null);
			document.body.classList.remove('no-scroll'); // Удалить класс для разблокировки скролла
		} else {
			setZoomedCardId(cardId);
			document.body.classList.add('no-scroll'); // Добавить класс для блокировки скролла
		}
	};

	return (
		<div>
			<ButtonsSection layout={layout} setLayout={setLayout} showType={showType} setShowType={setShowType} />

			{layout === 'grid' ? (
				<GridLayout state={props.state} showType={showType} setShowType={setShowType} toggleZoom={toggleZoom} zoomedCardId={zoomedCardId} setZoomedCardId={setZoomedCardId}/>
			) : (
				// Если выбран режим "table"

				<TableLayout state={props.state} showType={showType} setShowType={setShowType} toggleZoom={toggleZoom} zoomedCardId={zoomedCardId} setZoomedCardId={setZoomedCardId}/>
			)}
		</div>
	);
}

export default Table;
