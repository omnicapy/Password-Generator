
let bar = document.querySelector("#bar") 
let barval= document.querySelector('#barval')
let passBox = document.querySelector("#passBox")
let lowercase = document.querySelector("#lowercase")
let uppercase = document.querySelector("#uppercase")
let numbers = document.querySelector("#numbers")
let symbols = document.querySelector("#symbols")
let btn = document.querySelector("#btn")

let icons = document.querySelector("#iconic")






barval.textContent = bar.value

bar.addEventListener("input",()=>{

    barval.textContent = bar.value
})


btn.addEventListener('click',()=>{
    passBox.value = genPas()
})

let upcar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let lowcar = upcar.toLowerCase()

let num = "1234567890"

let sym = "~!@#$%^&*"

function genPas() {

    let pass = ""

    let combine = ""

    combine += lowercase.checked ? lowcar : ""
    combine += uppercase.checked ? upcar : ""
    combine += numbers.checked ? num : ""
    combine += symbols.checked ? sym : ""
     

    if (combine == "" || combine.length == 0){
        return pass
    }

    
    let i = 1

    while( i<= parseInt(bar.value)){
        
        pass+= combine[Math.floor(Math.random()*combine.length)] 

        i++

    }

    return pass
    
}



icons.addEventListener('click',()=>{

    if(passBox.value != "" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value)

        icons.innerHTML = "done_all"


        icons.title = "Password Copied"


        setTimeout(()=>{

          

            icons.innerHTML = "content_copy"

            icons.title = ""



            
        },1000)
        

    }
})

