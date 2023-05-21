import React, { useState } from 'react'
// style
import { title, divLine, content } from "@/styles/jss/animal-cloud-adoption.js";
import { primaryColor, brownColor, bgColor } from '@/styles/jss/animal-cloud-adoption';
// my components
import Data from './Data';
// mui components
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// left: SelectBar, right: Detail
function SelectBar({ questions, selectedQuestion, handleQuestionClick }) {
  const firstQuestions = questions.slice(0, 2);
  const secondQuestions = questions.slice(2);
  return (
    <Grid item xs={3} style={content}>
        
        <div>
          <h2 style={title}>Animal Cloud Adoption</h2>
          <div style={divLine}/>
          {firstQuestions.map((question) => (
            <Button
            key={question.id}
            onClick={() => handleQuestionClick(question.id)}
            style={{
              color: brownColor,
              backgroundColor: selectedQuestion === question.id ? bgColor : 'transparent',
              width: '100%',
            }}
            >
              {question.question}
            </Button>
          ))}
          <br /><br />
          <h2 style={title}>認養流程</h2>
          <div style={divLine}/>
          {secondQuestions.map((question) => (
            <Button
              key={question.id}
              className={`faq-question ${selectedQuestion === question.id ? 'active' : ''}`}
              onClick={() => handleQuestionClick(question.id)}
              style={{
                color: brownColor,
                backgroundColor: selectedQuestion === question.id ? bgColor : 'transparent',
                width: '100%',
              }}
            >
              {question.question}
            </Button>
          ))}
        </div>
        
    </Grid>
  );
}

function Detail({ questions, selectedQuestion }) {
  return (
    <Grid item xs style={{...content,  marginLeft: 8, padding: 50 }}>
        <div>
          {selectedQuestion !== null && (
            <div>
              <p style={{color: primaryColor}}>{questions[selectedQuestion - 1].type} &gt;&gt; </p>
              <h2 style={{color: primaryColor}}>{questions[selectedQuestion - 1].question}</h2>
              <div>{questions[selectedQuestion - 1].answer}</div>
            </div>
          )}
        </div>
    </Grid>
  );
}

const Home = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(3);
  const questions = Data;

  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId);
  };
  return (
    <div>
      <h1 style={title}>FAQ</h1>

      <div >
        <Grid container spacing={0}>
          <SelectBar
            questions={questions}
            selectedQuestion={selectedQuestion}
            handleQuestionClick={handleQuestionClick}
          />
          <Detail questions={questions} selectedQuestion={selectedQuestion} />
        </Grid>
      </div>

    </div>
  );
};

export default Home;


