const pag = (urls) => {
  const arr = [];
  const leng = urls.length;
  console.log("leng", leng)
  let i = 0;
  let j = 4;
  let flat = true;
  do {
    if (flat) {
      arr.push(urls.slice(i, j));
    } else {
      arr.push(urls.slice(i, leng));
    }
    if(j>leng){
        flat= false;
    }
    i = i + 4;
    j = j + 4;
    
  }while(j < leng || flat)
  return arr;
};

console.log(pag([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]))