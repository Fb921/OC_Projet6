function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
    console.log("In displayModal()");
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function console_log_infos(){
    console.log(document.querySelector("input[name='prenom']").value);
    console.log(document.querySelector("input[name='nom']").value);
    console.log(document.querySelector("input[name='email']").value);
    console.log(document.querySelector("textarea[name='message']").value);
}