let form=document.querySelector('form');
form.addEventListener('submit',(event)=>{
  let age=document.getElementById('age');
  let name=document.getElementById('name');
  let prom=new Promise((res,rej)=>{
  // console.log(age);
  // console.log(name);
    if(age>=18){
      setTimeout(()=>{
        res(`Welcome, ${name}. You can vote.`)
      },4000)
     
    }
    else{
      setTimeout(()=>{
        rej(`Oh sorry ${name}. You aren't old enough.`)
      },4000)
    }
   
  })
  prom.then(data=>{
   alert(data)
  }).catch(data=>{
    alert(data)
  })

})
