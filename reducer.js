// ------------------------------------
// Imports
const TIME_DURATION = 1500; // 25mins

const InitialState = {
  isPlaying: false,
  elapsedTime: 0
};

// ------------------------------------
// Actions
const START_TIMER = 'START_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const ADD_SECONDS = 'ADD_SECONDS';

// ------------------------------------
// Action Creators
const actionCreators = {
  startTimer,
  resetTimer,
  addSeconds
};

function startTimer() {
  return {
    type: START_TIMER
  };
}

function resetTimer() {
  return {
    type: RESET_TIMER
  };
}

function addSeconds() {
  return {
    type: ADD_SECONDS
  };
}

// ------------------------------------
// Reducer
function reducer(state = InitialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESET_TIMER:
      return applyResetTimer(state, action);
    case ADD_SECONDS:
      return applyAddSeconds(state, action);
    default:
      return state;
  }
}

// ------------------------------------
// Reducer Functions
function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyResetTimer(state, action) {
  return {
    ...state,
    isPlaying: false
  };
}

function applyAddSeconds(state, action) {
  const { elapsedTime } = state;

  if (elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// ------------------------------------
// Exports
export { actionCreators, reducer };
