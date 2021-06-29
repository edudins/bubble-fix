// event = keyup or keydown
document.addEventListener('keyup', event => {
  switch(event.code) {
    case 'Space':
      Circle()
      break
    case 'Enter':
      Square()
      break
    default:
      console.log('not found key')
  }
})
