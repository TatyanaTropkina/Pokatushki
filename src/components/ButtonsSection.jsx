import BtnToggleGrid from "./BtnToggleGrid";
import BtnToggleTable from "./BtnToggleTable";
import {useState} from "react";
function ButtonsSection (props) {
    // const [layout, setLayout] = useState('grid');
    // const [showType, setShowType] = useState(0);

    const handleTableClick = () => {
        props.setLayout('table');
    };

    const handleGridClick = () => {
        props.setLayout('grid');
    };
    let buttonLabels = ["Все маршруты", "Маршруты без электрички", "Маршруты с электричками"];
    let currentLabel = buttonLabels[props.showType];

    return (
        <div className="buttons">
            {props.layout === "grid" ? (
                <button className="btnToggle btn" onClick={handleTableClick}>
                    <BtnToggleTable />
                </button>
            ) : (
                <button className="btnToggle btn" onClick={handleGridClick}>
                    <BtnToggleGrid />
                </button>
            )}
            <button
                className="btnFilterTrain btn"
                onClick={() => props.setShowType((props.showType + 1) % 3)}
            >
                {currentLabel}
            </button>
        </div>
    );
}
export default ButtonsSection;