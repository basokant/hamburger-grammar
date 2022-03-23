import topbun from '../assets/topbun.png';
import lettuce from '../assets/lettuce.png';
import tomato from '../assets/tomato.png';
import cheese from '../assets/cheese.png';
import meat from '../assets/meat.png';
import bottombun from '../assets/bottombun.png';
import './Burger.css'
import { relative } from 'node:path/win32';
import { isAbsolute } from 'node:path';
import { stringify } from 'node:querystring';

interface BurgerProp {
    input: string;
};

export default function Burger({ input }: BurgerProp) {

    let inputToTokenMap: {[key:string]: string} = {
        ham: "topbun",
        b: "lettuce",
        u: "tomato",
        r: "cheese",
        g: "meat",
        er: "bottombun",
        "&": "space"
    }

    let tokenToImgMap: {[key:string]: string} = {
        topbun: topbun,
        lettuce: lettuce,
        tomato: tomato,
        cheese: cheese,
        meat: meat,
        bottombun: bottombun
    }

    let tokenToMarginsMap: {[key:string]: string} = {
        topbun: "-8%",
        lettuce: "-120px",
        tomato: "-220px",
        cheese: "-16%",
        meat: "-10%",
        bottombun: "-7.5%"
    }

    const tokens = tokenize(input, inputToTokenMap);
    const listItems = tokens.map((token) => 
        <li>{token}</li>
    );

    let counter = tokens.length;
    const listImages = tokens.map((token) => {
        if (tokenToImgMap[token]) {
            const imgStyle = {
                "margin-bottom": tokenToMarginsMap[token],
                width: '40%',
                height: 'auto',
                'z-index': counter.toString(),
            };
            counter--;
            return <img src={tokenToImgMap[token]} alt={token} style={imgStyle} />
        }
    })

    return (
        <div className="burger">
            {listImages}
        </div>
        // <ul>{listItems}</ul>
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