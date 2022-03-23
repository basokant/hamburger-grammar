import { useRef } from 'react'
import './TextInput.css'

interface TextInputProp {
    input: string,
    setInput: Function;
};

export default function TextInput({ input, setInput }: TextInputProp) {
    return (
        <>
        <label className="" >What kind of burger would you like, kind sir?</label>
        <input className="" value={input} onChange={e => setInput(e.target.value)} />
        </>
    )
}