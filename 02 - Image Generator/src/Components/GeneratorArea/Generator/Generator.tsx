import { ChangeEvent, useState } from "react";
import { dallEService } from "../../../Services/DallEService";
import "./Generator.css";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function Generator(): JSX.Element {

    const [imageDescription, setImageDescription] = useState<string>("");
    const [imageSource, setImageSource] = useState<string>();

    function handleChange(args: ChangeEvent<HTMLTextAreaElement>) {
        setImageDescription(args.target.value);
    }

    async function generateImage() {
        try {
            setImageSource("");
            const url = await dallEService.generateImage(imageDescription);
            setImageSource(url);
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Generator">

            <textarea
                placeholder="Describe an image to generate..."
                onChange={handleChange}
                value={imageDescription}></textarea>

            <br />

            <button onClick={generateImage}>Generate</button>
            <br /><br />

            {imageSource === "" && <Spinner /> }

            {imageSource !== "" && <img src={imageSource} /> }

        </div>
    );
}
