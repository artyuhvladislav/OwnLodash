Array.prototype.chunk = function(size) {
    const res = []
    const temp = [...this]
   
     if (size <= 0) return res
     while(temp.length) {
       res.push(temp.splice(0, size))
     }
    return res
}

Array.prototype.concact = function () {
  const result = []
  for(let i = 0; i < this.length; i++) {
    if(this[i]) {
      result.push(this[i])
    }
    continue
  }
  return result
}