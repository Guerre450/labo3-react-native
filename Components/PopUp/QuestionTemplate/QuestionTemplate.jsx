import "./QuestionTemplate.css"
export default function QuestionTemplate({question, callBackChange, num, valuable}){

    return(
        <div className="question">
        <label htmlFor={num}>{question}</label>
        <input onChange={callBackChange} type="number" defaultValue={0} value={valuable} id={num} name="quantity" min={1} max={10} step={1}/>
        </div>
    );
}