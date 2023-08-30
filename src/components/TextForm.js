import React,{useState} from 'react'


export default function TextForm(props) {
    let handleUpperCase=()=>{
        console.log('UPPER CASE');
        let newText = text.toUpperCase();
        setText(newText);
    }

    let handleLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        console.log('lower case')
    }

    let capitilizeSentence = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        
        setText(newText);
    }
    
    let capitilizeWords = ()=>{
        const words = text.split(' ');
        const newText = words.map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        setText(newText);
    }

    let handleOnChange=(event)=>{
        console.log('ON CHANGE');
        setText(event.target.value)
    }

    let handleOnClear=()=>{
        setText('');
        
    }

    const handleCopy=()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraScaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text,setText] = useState('');


    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                {/* <button className="btn btn-primary" id='select' onClick={handleOnSelectAll}>Select All</button> */}

                {/* Buttons of Functionality */}
                <button className="btn btn-primary" onClick={handleCopy}>Copy</button>  
                <button className="btn btn-primary mx-3" onClick={handleOnClear}>Clear</button>  
                <button className="btn btn-primary" onClick={handleExtraScaces}>Remove Extra Space</button>
                {/* Text Area */}
                <textarea className="form-control my-4" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
                <button className='btn btn-primary' onClick={handleUpperCase}>UPPER CASE</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerCase}>lower case</button>
                <button className="btn btn-primary" onClick={capitilizeSentence}>Capitilize sentence</button>
                <button className="btn btn-primary mx-3" onClick={capitilizeWords}>Capitilize sentence</button>
            </div>
        </div>

        <div className="container">
            <h2>Replace</h2>
            <input class="form-control" type="text" id='word' aria-label="default input example"/>
            <span id="passwordHelpInline" class="form-text">with</span>
            <input class="form-control" type="text" id='with' aria-label="default input example"/>
            <button className="btn btn-success my-3">Replace</button>
        </div>

        <div className="container">
            <h2>Text Summary</h2>
            <p>Words: {text.trim().split(/\s+/).filter(Boolean).length} and Characters: {text.length}</p>
            <p>{0.008 * text.split(" ").length} Minute Read</p>
            <p><b>Preview:</b></p>
            <p>{text}</p>
            
        </div>

        </>
    )
}
