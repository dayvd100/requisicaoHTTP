if(self.fetch){
    console.log("tem")
    await obterPost(1)
}else{
    console.log("não")
}

const obterPost = async (id) =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    if(!response.ok){
        throw new Error(response.status + " " + response.statusText)
    }

    const json = await response.json();
    return json;
}
