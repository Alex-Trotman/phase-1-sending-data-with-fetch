// Add your code here




function submitData (name, email){
    let userDetails = {
        name: name,
        email: email
    }
    return (
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(userDetails),
        })
        .then(resp => resp.json())
        // .then((json) => console.log(json))
        .then((json) => document.querySelector("body").append(json["id"]))
        .catch((error) => document.querySelector("body").append(error))
    )
}

submitData("Alex", "alexEmail")