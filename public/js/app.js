console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
// const port = process.env.port || 3000
// const applicationUrl = process.env.url || 'http://localhost:'+port
// console.log('port is'+port+'and url is :'+ applicationUrl)    

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent='Loading...'
    messageTwo.textContent=''
    console.log(location)

    fetch('http://webserver-env-1.eba-mj4p2bxg.us-east-1.elasticbeanstalk.com/weather?address='+location).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                messageOne.textContent='Error :'+data.error

            } else {
                messageOne.textContent='Location : '+data.location
                messageTwo.textContent='Forecast : '+data.forecast
                console.log(data.location)
                console.log(data.forecast)
            } 
        })

    })

})