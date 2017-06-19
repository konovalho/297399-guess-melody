let state  = {
	screen: `welcome`,
  lives: 3,
  timer: 120,
  currentQuestion: 0,
  questions: 3,
  score: 0,
  percentage: 0,
  statistics: [
    { time: 20, score: 10 },
    { time: 32, score: 10 },
    { time: 44, score: 10 },
    { time: 20, score: 8 },
    { time: 50, score: 7 }
  ],
};
export const getState = () => state ;
export const setState = (newState) => {
	state = newState;
};

