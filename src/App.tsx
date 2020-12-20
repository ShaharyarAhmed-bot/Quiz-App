import React, { useState } from 'react';

// import { QuestionCard } from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionsState } from './components/API'

const totalQuestions = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)


  const startTriva = async () => {
    console.log("starting")
    setLoading(true)
    setGameOver(false)
    
    const newQuestions = await fetchQuizQuestions(
      totalQuestions,
      Difficulty.EASY
    )

    console.log(newQuestions)

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>REACT QUIZ</h1>

      <button className='start' onClick={startTriva}>
        Start
      </button>

      <p className='score'>Score: </p>
      <p>Loading Questions...</p>

      {/* <QuestionCard 
       questionNr={number + 1}
       totalQuestions={totalQuestions}
       question={questions[number].question}
       answers={questions[number].answers}
       userAnswer={userAnswers ? userAnswers[number] : undefined}
       callback={checkAnswer}
      /> */}

      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>

    </div>
  )
}


export default App;