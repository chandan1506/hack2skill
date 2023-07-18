// Fetch the data from the server and populate the table

async function fetchData(){
    try {
        const res=await fetch("http://localhost:4000/fetch-data")
        const bag =await res.json()
        render(bag)
    } catch (error) {
        console.log(error)
    }
}

function render(result){
    document.querySelector("table").style.display="block"
    const tbody = document.querySelector('#data-table tbody');
    tbody.innerHTML=""

    const allData=result.map((ele)=>{
        return `
        <tr>
      <td>${ele.team[0]?.team_name}</td>
      <td>${ele.full_name}</td>
      <td>${ele.email}</td>
      <td>${ele.number}</td>
      <td>${ele.city}</td>
      <td>${ele.url}</td>
      </tr>
        `
    })

   tbody.innerHTML=allData.join("")
}

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    fetchData()
})