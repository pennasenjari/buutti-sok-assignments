import React from 'react';

const LoremIpsum = () => {
  
  // Got 100 words from https://www.lipsum.com/
  const hundredWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, sem et egestas lacinia, tortor odio commodo mi, non pellentesque nisi justo nec ligula. Vivamus blandit sapien lacus, ut tristique nisi accumsan id. Donec in dapibus metus, id iaculis leo. Praesent laoreet augue elit, et congue magna malesuada a. Donec vulputate pellentesque arcu, ut mollis lorem facilisis a. Donec vel vestibulum arcu. Aliquam suscipit nec risus ut tristique. Duis vel urna purus. Fusce et justo non neque placerat dictum. Morbi vel ornare quam, vel efficitur mi. Vestibulum ligula purus, sodales eget placerat sed, maximus ut metus. Cras bibendum consectetur mauris.";
  const thousandWords = Array(10).fill(hundredWords).join(" ");
  const splittedWords = thousandWords.split(" ");
  const finalText = [];
  let row = "";
  let wordCount = 0;

  for (let word of splittedWords) {
    wordCount++;
    // EXTRA: limit row length to 50
    if ((row.length + word.length) >= 50 || wordCount === 10) { 
      /* Row is ready, because adding the current word would make too many letters,
         or we have 10 words already. */
      finalText.push(row); // add row to final text
      row = word + " "; // current word goes to next row
      wordCount = 0; // reset word count
    } else {
      row += word + " "; // add word to current row
    }
  }

  {/* Using React.Fragment to add key. Key is needed to avoid React warning */}
  return finalText.map((row, index) => (
    <React.Fragment key={index}>
      {row}<br />
    </React.Fragment>
  ));
}

export default LoremIpsum;