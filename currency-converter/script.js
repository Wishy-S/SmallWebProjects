document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#currency-converter").addEventListener("submit", async (event) => {
        event.preventDefault();

        const {target: {from, to, amount}} = event;
    
      let headers = new Headers();
      headers.append("apikey", "sEcSfjoFWYOKhX7Of9jGrfllnmSzZZZH");

     var requestOptions = {
        method: "GET",
        headers, 
    
    }
   

    try{

        let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        
        const data = await response.json();
        
        let {info, date, query: {to: convertTo}, result} = data;
        
        document.querySelector(".result").textContent = ` ${result.toFixed(2)} ${convertTo}`;
    } 
    catch(error) {
        console.log(error);
    } 
        
   
    });
})
