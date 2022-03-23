import topbun from '../assets/topbun.png';
import lettuce from '../assets/lettuce.png';
import tomato from '../assets/tomato.png';
import cheese from '../assets/cheese.png';
import meat from '../assets/meat.png';
import bottombun from '../assets/bottombun.png';

interface BurgerProp {
    input: string;
};

export default function Burger({ input }: BurgerProp) {
    let tokenMap: {[key:string]: string} = {
        ham: "topbun",
        b: "lettuce",
        u: "tomato",
        r: "cheese",
        g: "meat",
        er: "bottombun",
        "&": "space"
    }

    const tokens = tokenize(input, tokenMap);
    const listItems = tokens.map((token) => 
        <li>{token}</li>
    );

    return (
        <>
        <ul>{listItems}</ul>
        </>
    )
}

function tokenize (input :string, tokenMap :{[key:string]: string}) :Array<string> {
    let val : string = input.toLowerCase();
    let tokens : Array<string> = [];

    for (let i = 0; i < val.length; i++) {
        let nextThree = i < val.length - 2 ? val.slice(i, i+3) : "";
        let nextTwo = i < val.length - 1 ? val.slice(i,i+2) : "";
        let curr = val.charAt(i);

        if (nextThree === "ham") {
            tokens.push(tokenMap[nextThree]);
            i += 2;
        } else if (nextTwo === "er") {
            tokens.push(tokenMap[nextTwo]);
            i += 1;
        } else if (tokenMap[curr]) {
            tokens.push(tokenMap[curr]);
        }
    }
    
    return tokens;
}