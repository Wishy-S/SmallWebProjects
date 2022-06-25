$.ajax({
    type : 'get',
    url: 'https://api.covid19api.com/summary',
    success : function(response){
        console.log(response);
        for(let i = 0;i<response.Countries.length;i++){
            // console.log(response.Countries[i].NewRecovered);
            let tableRow = `<tr> <td>${response.Countries[i].Country}</td> <td>${response.Countries[i].NewConfirmed}</td> <td>${response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered}</td> <td>${response.Countries[i].NewRecovered}</td> <td>${response.Countries[i].TotalDeaths}</td></tr>`;
            $('#tbody').append(tableRow);
        }
    },
    error : function(error){
        console.log(error);
    }
});
