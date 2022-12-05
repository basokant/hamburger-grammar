import { SyntheticEvent } from 'react';
import './TextInput.css'

interface TextInputProp {
    setInput: Function;
};

export default function TextInput({ setInput }: TextInputProp) {
    
    return (
        <>
        <label>What kind of burger would you like, kind sir?</label>
        <input onChange={e => setInput(e.target.value)} />
        </>
    )
}