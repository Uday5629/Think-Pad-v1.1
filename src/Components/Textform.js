import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText)
    props.ShowAlert("Text converted to Upper Case","success")
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.ShowAlert("Extra spaces have been removed","success")
    }


    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.ShowAlert("Text has been copied","success")
    }
  const handleLoClick = ()=>{
    let loText=text.toLowerCase();
    setText(loText);
    props.ShowAlert("Text converted to Lower Case","success")
  }  

  const clearText =()=>{
    setText("");
    props.ShowAlert("Text Cleared","warning")
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

    const [text, setText] = useState("");
return (
    
    <div style={{color:props.mode==='dark'?'white':'black'}} >
        <h2 className='mb-3'>{props.title}</h2>
        
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear-Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     <div className="container my-3">
     <h2>Text Summary</h2>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} Words and {text.length} Characters</p>
     <p>{0.8* text.split(" ").filter((element)=>{return element.length!==0;}).length} seconds to read</p>
     <h2>Text Preview</h2>
     <p>{text.length>0?text:"Nothing to preview"}</p>
    </div> 
    </div>
    )
}

