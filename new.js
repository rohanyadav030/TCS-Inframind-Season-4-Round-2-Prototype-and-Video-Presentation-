window.addEventListener("load", () =>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get("name");

    document.getElementById("result-name").innerHTML = name;
    //document.getElementById("result-name").innerHTML = class;

})