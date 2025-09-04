// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// BONUS

// Facciamo accendi e spegni:

// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...

//richiamiamo il bottone
const bottone = document.getElementById("myButton");
console.log(bottone);

// richiamiamo la lampadina spenta
const offLamp = document.getElementById("spenta");
console.log(offLamp);

// richiamiamo la lampadina accesa
const onLamp = document.querySelector(".on-lamp");
console.log(onLamp);

//evento per il bottone
bottone.addEventListener('click', accendiLampadina);






//funzione per accendere la lampadina (cambio img)
function accendiLampadina() {
    onLamp.classList.toggle("on-lamp");
    offLamp.classList.toggle("on-lamp");
}