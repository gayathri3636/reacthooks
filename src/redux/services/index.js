export function GetDataFromServer(apiPath, reqMethod, formBody){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')
    // myHeaders.append('Access-Control-Request-Method', 'POST')
    // myHeaders.append('Access-Control-Request-Headers: Content-Type, Authorization')
    
    if( reqMethod!=="POST"){
        return fetch(apiPath, {method:'GET', headers:myHeaders})
    } else{
        if(formBody){
            let fetchData= {
                method:"POST",
                body:JSON.stringify(formBody),
                headers:myHeaders
            }
            return fetch(apiPath, fetchData)
        }
    }
}