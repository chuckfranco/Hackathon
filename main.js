const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd03b7a3ce0mshe64a7495588b6f8p18192bjsn2f94800e97e5',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};


const lookup = (searchTerm) => { fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`, options)
.then(response => response.json())
.then(data => {
    console.log(data)
    const body = document.querySelector('body')
    const definition = data.list[0].definition.replace(/[^a-zA-Z0-9.\n'"!?$&() ]/g,'')

    const newParagraph = document.createElement('p')
    newParagraph.innerHTML = definition
    body.insertAdjacentElement("beforeend", newParagraph)
})
.catch(err => console.error(err))
};

const searchButton = document.querySelector('#btn')

searchButton.addEventListener("click", event => {
    // event.preventDefault()
    const searchTerm = document.querySelector('#search').value
    
  lookup(searchTerm)
})