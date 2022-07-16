



const checkboxes = document.querySelectorAll('input')
let lastChecked;
function handleCheck(e){
    // console.log(e)
    let inBetween = false
    if(e.shiftKey && lastChecked.checked){
         console.log(e.shiftKey)
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween
            }
            if(inBetween){
                checkbox.checked = true
            }
        })

    }



    lastChecked = this
    console.log(lastChecked)
   

}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))