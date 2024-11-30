import { useState } from "react";
import { InterviewModel } from "../../../Models/InterviewModel";
import { Input } from "../Input/Input";
import { Output } from "../Output/Output";
import "./Main.css";
import { interviewService } from "../../../Services/InterviewService";

export function Main(): JSX.Element {

    const [completion, setCompletion] = useState<string>("");

    async function fetch(interview: InterviewModel) {
        try {
            const qna = await interviewService.getQna(interview);
            setCompletion(qna);
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Main">

            <Input generate={fetch} />

            <Output qna={completion} />

        </div>
    );
}
