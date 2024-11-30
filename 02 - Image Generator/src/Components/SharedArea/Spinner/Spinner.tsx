import "./Spinner.css";
import loading from "../../../Assets/Images/loading.gif";

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={loading} />
        </div>
    );
}
