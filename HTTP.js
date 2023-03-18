if(self.fetch){
    // console.log("tem")
    (async () => {
        // const json = await obterPost(2);
        const json = await incluirPost({
            userId: 2,
            title: "Estou criando um novo post",
            body: "Estou criando um novo corpo"
        })
        console.log(json);
    })();
}else{
    console.log("não")
}


// o método abaixo seria uma requisição do tipo GET, não exigiria um segundo parâmetro de configuração no método fetch
async function obterPost(id){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    if(!response.ok){
        throw new Error(response.status + " " + response.statusText)
    }

    const json = await response.json();
    return json;
}


async function incluirPost(data){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        }
    });

    if(!response.ok){
        throw new Error(response.status + " " + response.statusText)
    }

    const json = await response.json();
    return json;
}