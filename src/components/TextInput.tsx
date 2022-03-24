import { SyntheticEvent } from 'react';
import './TextInput.css'

interface TextInputProp {
    input: string,
    setInput: Function;
};

export default function TextInput({ input, setInput }: TextInputProp) {
    function onBlur(e : SyntheticEvent) {
        // let url = new URL(window.location.href);
        // url.searchParams.set('id',input);
        // window.history.pushState(null, '', url);
    }
    
    return (
        <>
        <label>What kind of burger would you like, kind sir?</label>
        <input value={input} onChange={e => setInput(e.target.value)} onBlur={onBlur} />
        </>
    )
}