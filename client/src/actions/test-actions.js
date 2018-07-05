export const UPDATE_TEST = 'test:updateTest'

export function updateTest(newTest) {
  return  {
    type: UPDATE_TEST,
    payload: {
      test: newTest 
    }
  }
}
