


// SELECTOR
const form = document.querySelector('form'); 


// ADD EVENTLISTENERS

form.addEventListener('submit', kjøpBilett);
form.addEventListener('reset', slettBilett);

// FUNCTION

function kjøpBilett() {

    const kunde = {
        film : $('#film').val(),
        antall : $('#antall').val(), 
        fornavn : $('#fnavn').val(),
        etternavn : $('enavn').val(),
        telefon : $('#telefonnr').val(), 
        epost : $('#epost').val(),

    }

$.post('/lagre', kunde, function () {
    hentAlle();
});

    $('#film').val('')
    $('#antall').val('')
    $('#fnavn').val('')
    $('enavn').val('')
    $('#telefonnr').val('')
    $('#epost').val('')
}

function hentAlle() {
    $.get('/biletter', function(data){
    formaterData(data); 
    });
    
}



const melding = document.getElementById('melding'); 
function formaterData(kunder) {
    for(const kunde of kunder) {
        melding.innerHTML = /*html*/`
        <div>
        Film : ${kunde.film}, 
        Antall : ${kunde.antall}, 
        Fornavn : ${kunde.fornavn}, 
        Etternavn : ${kunde.etternavn}, 
        TelefonNr : ${kunde.telefon}, 
        Epost : ${kunde.epost}
        </div>
        `
    }
}



