
const URI="https://api.spotify.com/v1/artists/3RNrq3jvMZxD9ZyoOZbQOD/top-tracks?market=US"

const TOKEN="Bearer BQAjKedzxmh8gQcjD_qI0mHIvhG-AZJiWKLO1ALnl_0dQ3zsEDnBTAhp0oZemUpbU1FStYV0D5YaHQ8h4Fy2FWPkJJVWmPTeX7TphOxm3RG42bO0DuqKLhdwshOyECclcsAlcazA-P3HgHwrsqCcqMS_565ogNz1r--DRziDHO4OxzhjaNUrcc8mkePBfEo"

const PETICION={
    method:"GET",
    headers:{
        Authorization:TOKEN
    }
}

fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){})
