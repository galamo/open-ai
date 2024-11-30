import { useForm } from "react-hook-form";
import "./Input.css";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Level } from "../../../Models/Level";

// npm i react-hook-form

type InputProps = {
    generate: (interview: InterviewModel) => void;
};

export function Input(props: InputProps): JSX.Element {

    const { register, handleSubmit } = useForm<InterviewModel>();

    function send(interview: InterviewModel) {
        props.generate(interview);
    }

    return (
        <div className="Input">
			
            <form onSubmit={handleSubmit(send)}>

                <label>Subject: </label>
                <input type="text" {...register("subject")} required />

                <label>Level: </label>
                <select {...register("level")} required>
                    <option>{Level.Beginner}</option>
                    <option>{Level.Intermediate}</option>
                    <option>{Level.Expert}</option>
                </select>

                <label>Count: </label>
                <input type="number" min={1} max={20} {...register("count")} required />

                <button>Generate</button>

            </form>

        </div>
    );
}
