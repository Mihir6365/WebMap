//this file is to add "mark as done functionality, no login is required
function myFunction(id) {
    console.log("running")
    document.getElementById(id).classList.toggle('completed');
    document.getElementById(id).classList.toggle('done');
    if (localStorage.getItem(id) != null) {
        //remove item if it already exists from browser local storage to "mark as pending"
        localStorage.removeItem(id)
        document.getElementById(id).innerHTML = "Mark as Done";
    } else {
        //add item to mark as done by saving it to local storage
        localStorage.setItem(id, id);
        document.getElementById(id).innerHTML = "Mark as pending";
    }
}

//read local storage to check what is done
window.addEventListener("DOMContentLoaded", function() {
    if (this.localStorage.length > 0) {
        const el = {...this.localStorage };
        for (var a in el) {
            if (document.getElementById(a) != null) {
                document.getElementById(a).classList.toggle('completed');
                document.getElementById(a).classList.toggle('done');
                document.getElementById(a).innerHTML = "Mark as pending";
            }
        }
    }
})