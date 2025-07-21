 const params = new URLSearchParams(window.location.search)
  
 const title = params.get('name');
 
 
 const extract = async (title) => {
  
    let params = await fetch("../project_detail.json")
    let data = await params.json();
    data.forEach(item=> {
         if(item.title === title) {
          document.getElementById("view").style.backgroundImage = `url(../${item.image})`
          document.getElementById("info1").innerHTML = item.title
          document.getElementById("info2").innerHTML = item.description
          document.getElementById("info3").innerHTML = `Location-${item.location} `
          document.getElementById("info4").innerHTML =  `Type-${item.type} `
          document.getElementById("info5").innerHTML =  `Status-${item.status} `

         }
    });
    
}
  extract(title)