if(self.fetch){
    (async () => {
        // const json = await incluirPost({
        //     userId: 2,
        //     title: "Estou criando um novo post",
        //     body: "Estou criando um novo corpo"
        // })


        // const json = await upDatePost(
        //     {
        //         title: "Apenas o título está sendo atualizado"
        //     }, 1)
        // console.log(json);

        const json = await await deletePost(1);
        console.log(json)
    })();
}else{
    console.log("não tem")
}

async function getJsonResponse(response){
    if(!response.ok){
        throw new Error(response.status + " " + response.statusText)
    }
    const json = await response.json();
    return json;
}


// o método abaixo seria uma requisição do tipo GET, não exigiria um segundo parâmetro de configuração no método fetch
async function obterPost(id){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    return getJsonResponse(response);
    
}


async function incluirPost(data){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    }
    )
    return getJsonResponse(response);
}

async function upDatePost(data, id){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id,{
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    }
    )
    return getJsonResponse(response);
}

async function deletePost(id){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id,{
        method: 'DELETE',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    }
    )
    return getJsonResponse(response);
}