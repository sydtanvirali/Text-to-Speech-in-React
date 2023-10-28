import React from 'react'
import { useSpeechSynthesis } from "react-speech-kit";

export default function TTS() {
  const [text, setText] = React.useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className='container col-6'>
        <h2 className='mt-3'>Enter the text.</h2>        
        <textarea className="form-control" id="textBox" placeholder="Enter text here..." rows="10" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div class="d-flex justify-content-end">
          <button className='btn btn-primary mt-3 w-25' onClick={() => speak({ text: text })}>Speak</button>
        </div>
    </div>
  );
}
