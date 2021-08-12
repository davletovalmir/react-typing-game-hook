import { ActionItemType } from './index';
import { TypingStateType } from '../index';

export default (state: TypingStateType, action: ActionItemType): TypingStateType => {
  const { payload } = action;
  const chars = payload ? payload as string : state.chars;

  return {
    ...state,
    startTime: null,
    endTime: null,
    chars,
    charsState: new Array(chars.length).fill(0),
    length: chars.length,
    currIndex: -1,
    currChar: '',
    correctChar: 0,
    errorChar: 0,
    phase: 0,
  };
};
