import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const generateParagraphsByLength = (length, paragraphs) => {
  let generatedText = '';
  console.log('passoui', length, paragraphs)
  for (let i = 0; i < paragraphs; i++) {
    let paragraph = lorem.generateParagraphs(1);
    if (generatedText.length + paragraph.length > length) {
      break;
    }
    generatedText += paragraph;
    if (i < paragraphs - 1) {
      generatedText += '\n\n';
    }
  }
  console.log(generatedText.substring(0, length))
  return generatedText.substring(0, length);
};

const Lorem = ({ numLetters, numParagraphs }) => {
  return (
    <div>
      <p>{generateParagraphsByLength(numLetters, numParagraphs)}</p>
    </div>
  );
};

export default Lorem;
