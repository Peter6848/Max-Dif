function maxDif(array){
  if(array.length <= 1){
    return 'Array needs to contain at least two numbers'
  }

  if(array[1] > array[0]){
    dif = array[1] - array[0]
  } else {
    dif = null
  }

  for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[j] - array[i] > dif){
        if(array[i] < 0){
          dif = array[j] + array[i]
        }

        dif = array[j] - array[i]
      }
    }
  }
  return dif
}
