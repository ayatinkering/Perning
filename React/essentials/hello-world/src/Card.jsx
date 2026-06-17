export const Card =()=>{ //JSX IS js disguised as html
    const name="Peter parker";
    const role="web developer"
    return (<>
        <div id="card">
            <h2>welcome {name}</h2>
            <p>THis is a <span id="highlight">paragraph</span>with text</p>
            <p>i am a {role}, {2026-2000} years of experience</p>
            <button>card click</button>
        </div>
    </> //react FRAGMENT, to reutrn multiple things wrapped tgt
    );
}

//must return ONLY 1 elemnt
//every tag must be closed
//attirbute in camelCase, like className
// can put js code in { }


