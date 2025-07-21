const extract = async ( ) => {
    let params = await fetch("../project_detail.json")
    let data = await params.json();
    data.forEach(item=> {
       let div = document.createElement('div')
            div.classList.add("box")
            let shade = document.createElement('div')
            shade.style.backgroundColor = 'rgba(0,0,0,0.4)'
            shade.textContent = item.title
            div.appendChild(shade)
             
            div.style.backgroundImage = `url(../${item.image})`
            div.style.backgroundSize = "cover"
            div.style.backgroundPosition = "center"
        if(item.type == "Commercial"){
             
          let pr =  document.getElementById("comm")
            pr.appendChild(div)
            
        }
        else {
             
          let pr =  document.getElementById("res")
            pr.appendChild(div)
           
        }
          
        div.onclick = ()=>{
          displaydeep(item) 
        }
    });
    
}
 extract();
 function displaydeep(it){
  const name = encodeURIComponent(it.title)
      window.location.href =  `../indexes/project_info.html?name=${name}` 
 }
