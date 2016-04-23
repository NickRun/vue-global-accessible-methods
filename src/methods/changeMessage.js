import store from '../store'

var changeMessage = function () {
  if (store.state.message === 'Hello') {
    store.state.message = 'Goodbye'
  } else {
    store.state.message = 'Hello'
  }
}

export default changeMessage
