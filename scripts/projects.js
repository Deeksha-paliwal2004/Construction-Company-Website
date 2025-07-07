const extract = async ( ) => {
    let params = await fetch("../project_detail.json")
    let data = await params.json();
    data.forEach(item=> {
        if(item.type == "Commercial"){
            let div = document.createElement('div')
            div.classList.add("box")
            div.innerHTML = item.title
            div.style.backgroundImage = `url(../${item.image})`
            div.style.backgroundSize = "cover"
            div.style.backgroundPosition = "center"
          let pr =  document.getElementById("comm")
            pr.appendChild(div)
        }
        else {
             let div = document.createElement('div')
            div.classList.add("box")
            div.innerHTML = item.title
            div.style.backgroundImage = `url(../${item.image})`
            div.style.backgroundSize = "cover"
            div.style.backgroundPosition = "center"
          let pr =  document.getElementById("res")
            pr.appendChild(div)
        }
        
    });
    
}
 extract();

