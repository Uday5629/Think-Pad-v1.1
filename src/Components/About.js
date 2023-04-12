// import React, { useState } from 'react'

export default function About(props) {
    

    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'}
    // );

  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'White',
    // border: '2px solid',
    borderColor: props.mode==='dark'?'White':'#042743'
  }
  // let headingStyle = {
  //   color: myStyle.color,
  //   backgroundColor: myStyle.backgroundColor
  // };


  return (
    <>
    <h1 className="my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>About Us </h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Simple and Intuitive Interface</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        A text-based utility React app comes with a simple and intuitive user interface that makes it easy for users to perform text-related tasks such as formatting, converting, and analyzing text. The interface is usually designed with user experience in mind, with clear and concise instructions to guide users through the process.
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Flexibility and Versatility</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Text-based utility React apps offer a wide range of features and functionalities that cater to the needs of different users. They can handle various types of text-related tasks such as converting text to different formats, counting words and characters, analyzing sentiment, converting text into lower & upper case, and more. This versatility ensures that users can achieve their desired outcomes without needing multiple tools.
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Fast and Efficient</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Text-based utility React apps are designed to be fast and efficient, with minimal lag time between user inputs and app responses. This is particularly important when working with large volumes of text, as users need to be able to process and analyze the text quickly. Additionally, the app is typically optimized for speed, meaning that users can achieve their desired outcomes with minimal effort and time.
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}
