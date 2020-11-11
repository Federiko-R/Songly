function search() {
    // Declare variables
    var input, filter, wrapper, div, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    wrapper = document.getElementById("wrapper");
    div = wrapper.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < div.length; i++) {
        h2 = div[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}