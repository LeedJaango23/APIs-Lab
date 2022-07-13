const btn = document.querySelector("button")

//const baseURL = 'https://swapi.dev/api/';

function getResidents(){
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((res)=>{
        
        const {results} = res.data
        for (let i = 0; i < results.length; i++){
            axios.get(results[0].residents[i])
            .then((res) =>{
                console.log(res.data)
                const newElem = document.createElement('h2');
                newElem.innerText =  res.data.name
                document.body.appendChild(newElem)

            })
        }
    })
        
    }

    btn.addEventListener('click',getResidents)






