function App() {
  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    
  const positive = array.filter((item) => {
    return item > 0
  })
  const messages = [
          {message: 'hello', error: true},  
          {message: 'javascript', error: false},  
          {message: 'expovisiov', error: true},  
          {message: 'react', error: true},  
          {message: 'angular', error: false}, 
          {message: 'es6', error: false}, 
        ];
        const filtter = messages.filter((msg) => !msg.error)
        console.log(filtter)

        const words = ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

const worldsmod = words.map(word => word.length < 5 ? '*' : <p>{word}</p>);

        console.log(worldsmod)
        const sendmassge = (message) => {
          /*
          //      * тут какой-то большой код для отправки сообщения
          //      */
        }
          const half = (number) => number / 2


const showConsole = () => console.log('Экспо')

const concatWords = (first, second) => first + second



function justText() {
  return 'expo'
}
function logging(text) {
  console.log(text) 
}
  function add(x, y) {
    const z = 3
    return z * x * y
  }

//    
//    const onlyPositive = (number) => {
//      if(number < 0) {
//        return false;
//      }
//    
//      return true;
//    }
function onlyPositive(number) {
  if(number < 0){
    return false
  }
  return true
}
  return (
   <div className='container'>
  <p>{positive}</p>
  <p>{worldsmod}</p>
   </div>
  );
}

export default App;
