module.exports = function check(str, bracketsConfig) {
  let config = ''
  let arr = []

  bracketsConfig.forEach(element => {
    config += element.join('')
  })
  for (let i = 0; i < str.length; i++) {
          let index = config.indexOf(str[i])
          if (index % 2 === 0) {
              if (str[i] === config[index + 1] && arr[arr.length - 1] === index){
                arr.pop();
              } else if (str[i] === config[index + 1] && arr[arr.length - 1] !== index) {
                arr.push(index)
              } else{
                arr.push(index)
              }
          } else {
              if (arr.pop() !== index -1){
                  return false;
              }
          }
      }
      return arr.length === 0
}
