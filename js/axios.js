function consumirApi(){  
    axios.get('https://api.chucknorris.io/jokes/random', {
            params: {
              category: "dev"
            }
          })
    .then(function (response) {
        desenhar(response.data);
    })
    .catch(function (error) {
        let div = document.getElementById("div");
        div.innerHTML = "Erro ao consumir endpoint";
    });
}

function consumirQuarkus(){    
    axios.get('/hello')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function desenhar(data){
    console.log(data);
    let div = document.getElementById("div");
    let stringHtml = "<img src='"+data.icon_url+"'><br/>" + data.value;
    div.innerHTML = stringHtml;
}