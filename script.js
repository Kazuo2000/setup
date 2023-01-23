const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

   if(dayExists) {
        alert(dayExists)
        alert("Dia já incluso🔴")
        return
   }

    alert("Adicionando com sucesso 🟢")
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setitem('nlwSetup@habits', JSON.stringify(nlwSetup.data))
   }

// const data = {
//     run: ["01-01", "01-02", "01-06"], 
//     takePills: ["01-03"],
//     journal: ["01-04"],
//     birtheday: ["02-14", "05-14"]
// }
    const data = JSON.parse(localStorage.getItem('nlwSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()