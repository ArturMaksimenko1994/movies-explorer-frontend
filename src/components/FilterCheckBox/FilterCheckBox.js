import { useCallback, useState, memo } from "react";
import "./FilterCheckBox.css";

const FilterCheckBox = memo(() => {

    const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

    const onSelectShortMovie = useCallback(() => setIsSelectedIsShortMovie(!isSelectedShortMovie),
        [isSelectedShortMovie]
    );

    return (
        <div className="search-short">
            <div className={`search-short-box ${isSelectedShortMovie ? "search-short-box_active" : ""}`} onClick={onSelectShortMovie}>
                <div className={`seach-short-item ${isSelectedShortMovie ? "seach-short-item_active" : ""}`} />
            </div>
        </div>
    );
});

export default FilterCheckBox;
