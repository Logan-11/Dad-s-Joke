// alert(`Hey there!!`);

const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click',jokeGenerate)



jokeGenerate()


async function jokeGenerate() {



    const config = { 
        headers:{ 
             'Accept' : 'application/json'
             } }

     const res = await fetch('https://icanhazdadjoke.com',config)
     

     const data = await res.json()

     
     jokeEl.innerHTML = data.joke

}

 




/* here .then implies when that link in fetch command executes then do the things under .then

 here fetch is async so we need to wait until it is fetching..
 so await is used..
 followed by async is used in jokeGenerator func..

 again we are adding async in res.json() and stores in data constant.

 finally retrieving the innerhtml to data.joke


*/











// function jokeGenerate() {



//     const config = { headers:{  'Accept' : 'application/json' } }

//     fetch('https://icanhazdadjoke.com',config)
//     .then((res) => res.json())
//     .then((data) => jokeEl.innerHTML = data.joke);
// }

 
