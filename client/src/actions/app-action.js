export const UPDATE_APP = 'test:updateApp'

export function updateApp(newApp) {
  return  {
    type: UPDATE_APP,
    payload: {
      test: newApp 
    }
  }
}
