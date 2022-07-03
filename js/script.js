function showPage(list, page) {

   let studentsPerPage = 9;

   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;

   let studentList = document.getElementsByClassName('student-list');

   studentList[0].innerHTML = '';

   for (let i = 0; i < list.length; i++) {

      if (i >= startIndex && i < endIndex) {

         let listStructure = `
         
           <li class="student-item cf">
               <div class="student-details">
                   <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;

         studentList[0].insertAdjacentHTML("beforeend", listStructure);
      }

   }


}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {

   let btnAmount = list.length / 9;
   let ul = document.querySelector('.link-list');

   ul.innerHTML = '';

   for (let i = 0; i < btnAmount; i++) {

      let pageBtn = `

         <li>
            <button type="button">${[i + 1]}</button>
         </li>
      `;

      ul.insertAdjacentHTML("beforeend", pageBtn);

   }

   let firstPageBtn = document.querySelector('button');

   firstPageBtn.className = 'active';

   ul.addEventListener('click', (e) => {

      let prevBtn = document.querySelector('.active');
      prevBtn.className = '';

      e.target.className = 'active';

      if (!e.target.innerHTML.includes('<li>')) {

         showPage(list, e.target.innerHTML);

      }




   });

}

function searchUser(list) {

   let header = document.querySelector('header');

   let searchBar = `
         <label for="search" class="student-search">
            <span>Search by name</span>
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>
   `;

   header.insertAdjacentHTML("beforeend", searchBar);

   let input = document.getElementById('search').value
   input = input.toLowerCase();


   for (let i = 0; i < list.length; i++) {

      let studentItem = document.getElementsByClassName('student-item');

      if (!list[i].name.first.toLowerCase().includes(input)) {

         studentItem[i].style.display = "hidden";

      }
      else {

         studentItem[i].style.display = "";

      }
   }


}


// Call functions
showPage(data, 1);
addPagination(data);
searchUser(data);