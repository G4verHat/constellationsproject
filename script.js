document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.querySelector(".search-bar input");
    var nameList = document.querySelectorAll(".name-list li");
  
    searchInput.addEventListener("input", function() {
      var searchTerm = searchInput.value.toLowerCase();
  
      for (var i = 0; i < nameList.length; i++) {
        var name = nameList[i].textContent.toLowerCase();
  
        if (name.indexOf(searchTerm) === 0) {
          nameList[i].style.display = "list-item";
        } else {
          nameList[i].style.display = "none";
        }
      }
    });
  });
  
