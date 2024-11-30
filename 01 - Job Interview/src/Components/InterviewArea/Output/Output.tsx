import "./Output.css";

type OutputProps = {
    qna: string;
};

export function Output(props: OutputProps): JSX.Element {

    return (
        <div className="Output">
            <div dangerouslySetInnerHTML={{ __html: props.qna }}></div>
        </div>
    );
    
}
