/* ========================
To-Do App JS Code starts here.
======================== */


/* Bottom navigation - tab switching functionality starts here */
const tabs = document.getElementsByClassName("tab");
const tabPages = document.getElementsByClassName("tabPage");

for (let c = 0; c < tabs.length; c++) {
	tabs[c].addEventListener("click", (event) => {
		for (let c1 = 0; c1 < tabs.length; c1++) {
			tabPages[c1].classList.remove("active");
			tabs[c1].style.color = "black";
			tabs[c1].children[0].style.fill = "purple";
		}
		tabPages[c].classList.add("active");
		tabs[c].style.color = "white";
		tabs[c].children[0].style.fill = "white";
	});
};

document.getElementById("toDoTab").click();
/* Bottom navigation - tab switching functionality ends here */


/* All the global constants and variables used in the app starts here */
let toDoArr = [];
let doneArr = [];
let notesArr = [];
let content = ``;

/* Constants and variables array elements and their children (if any) details:- 
{elements.children}^Present - {elements.children}^Used | v stands for variable-not fixed | Settings contentList is "v" because future update will increase its options */
const delAllBtn = document.getElementsByClassName("deleteAllBtn");					// 4.1 - 4.1
const delBtn = document.getElementsByClassName("deleteBtn");								// 4.0 - 4.0
const confirmBox = document.getElementsByClassName("confirmationBox");			// 4.4 - 4.2
const cancelBtn = document.getElementsByClassName("cancelBtn");							// 9.0 - 9.0
const searchBtn = document.getElementsByClassName("searchBtn");							// 3.1 - 3.1
const contentLists = document.getElementsByClassName("contentList");				// 4.v - 4.v 
const noContentNote = document.getElementsByClassName("noContent");					// 3.1 - 3.0
const savedToDoArr = JSON.parse(localStorage.getItem("toDoArr"));						// 1.v - 1.v
const savedDoneArr = JSON.parse(localStorage.getItem("doneArr"));						// 1.v - 1.v
const savedNotesArr = JSON.parse(localStorage.getItem("notesArr"));					// 1.v - 1.v
const createNewBtn = document.getElementsByClassName("createNew");					// 2.1 - 2.1
const createBox = document.getElementsByClassName("createNewBox");					// 2.4 - 2.3
const addBtn = document.getElementsByClassName("addBtn");										// 2.0 - 2.0
const inputBox = document.getElementsByClassName("inputBox");								// 2.0 - 2.0
const editFloatingBox = document.getElementsByClassName("editFloatingBox");	// 3.4 - 3.3
const editInputBox = document.getElementsByClassName("editBox");						// 3.0 - 3.0
const saveBtn = document.getElementsByClassName("saveBtn");									// 3.0 - 3.0
/* All the global constants and variables used in the app ends here */


/* Console logs for testing purpose starts here */
// console.log(delAllBtn); 			//4.1 - 
// console.log(delBtn); 					//4.0 - 
// console.log(confirmBox); 			//4.4 - 
// console.log(cancelBtn); 			//9.0 - 
// console.log(searchBtn);		 		//3.1 -  
// console.log(contentLists);	 	//4.v - 
// console.log(noContentNote);		//3.1 - 
// console.log(savedToDoArr); 		//1.v - 
// console.log(savedDoneArr);	 	//1.v - 
// console.log(savedNotesArr); 	//1.v - 
// console.log(createNewBtn);	 	//2.1 - 
// console.log(createBox); 			//2.4 - 
// console.log(addBtn); 					//2.0 - 
// console.log(inputBox); 				//2.0 - 
// console.log(editFloatingBox); //3.4 - 
// console.log(editInputBox); 		//3.1 - 
// console.log(saveBtn); 				//3.1 - 
/* Console logs for testing purpose ends here */


/* The default script that runs on startup - Checks for the content available in the local storage and renders it to the tab page if found anything - The functionality starts here */
for (let c = 0; c < contentLists.length; c++) {
	switch (c) {
		case 0:
			if (savedToDoArr && savedToDoArr.length > 0) {
				toDoArr = savedToDoArr;
				showContent(toDoArr, c);
			} else {
				noContentNote[c].classList.add("active");
			}
			break;
		case 1:
			if (savedDoneArr && savedDoneArr.length > 0) {
				doneArr = savedDoneArr;
				showContent(doneArr, c);
			} else {
				noContentNote[c].classList.add("active");
			}
			break;
		case 2:
			if (savedNotesArr && savedNotesArr.length > 0) {
				notesArr = savedNotesArr;
				showContent(notesArr, c);
			} else {
				noContentNote[c].classList.add("active");
			}
			break;
		case 3:
      /* Content for Settings tab will come in next update */
			break;

      default:
			console.log("Check Line 77 for any error, if any.");
			break;
	}
}
/* The default script that runs on startup - Checks for the content available in the local storagee and renders it to the tab page if found anything - The functionality ends here */


/* The content render function - renders content on the tab page on the basis of the array and page index passed - The functionality starts here */
function showContent(contentArr, c) {
	switch (c) {
		case 0:
			content = ``;
			contentArr.forEach((element, index) => {
				content += `
					<div class="task">
						<label class="checkbox">
							<input type="checkbox" />
							<span class="checkmark"></span>
							<p onclick="check(event)">${element}</p>
						</label>
						<button onkeyup="showOption(this.id)" id="toDoMenu-${index}" onclick="showOption(this.id)" class="option" title="Option" type="button">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="200.000000pt" viewBox="0 0 100.000000 200.000000" preserveAspectRatio="xMidYMid meet">
								<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
									<path d="M414 1675 c-98 -59 -98 -196 0 -269 39 -29 133 -29 173 0 72 54 93 136 53 214 -39 77 -146 103 -226 55z" />
									<path d="M420 1138 c-59 -40 -82 -84 -78 -146 7 -85 62 -141 146 -150 63 -6 120 24 151 78 59 105 -9 228 -131 238 -44 3 -59 0 -88 -20z" />
									<path d="M440 609 c-89 -37 -125 -141 -80 -229 25 -48 81 -80 142 -80 158 0 215 197 86 293 -31 23 -111 32 -148 16z" />
								</g>
							</svg>
							<div class="optionMenu toDoMenu">
								<a onclick="editItem(event)" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
											<path d="M438 603 l-319 -318 3 -80 3 -80 80 -3 80 -3 318 319 c174 175 317 324 317 331 0 7 -31 44 -69 82 -38 38 -75 69 -82 69 -7 0 -156 -143 -331 -317z m357 187 c18 -20 18 -21 -8 -48 l-27 -26 -21 21 c-21 21 -21 21 -3 47 23 31 35 32 59 6z m-110 -110 c19 -21 17 -23 -205 -245 -232 -233 -270 -260 -270 -198 0 22 42 69 217 245 120 120 223 218 229 218 6 0 19 -9 29 -20z"/>
										</g>
									</svg>
									Edit
								</a>
								<a onclick="deleteItem(event)" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
											<path d="M150 845 l-24 -26 159 -159 160 -160 -160 -160 -160 -160 28 -27 27 -28 160 160 160 160 160 -160 160 -160 27 28 28 27 -160 160 -160 160 160 160 160 160 -28 27 -27 28 -160 -160 -160 -160 -158 158 c-86 86 -160 157 -163 157 -3 0 -16 -11 -29 -25z"/>
										</g>
									</svg>
									Delete
								</a>
							</div>
						</button>
					</div>
				`;
			});
			contentLists[c].innerHTML = content;
			if (content.length > 0) {
				noContentNote[c].classList.remove("active");
			} else {
				noContentNote[c].classList.add("active");
			}
			content = ``;
			break;
		case 1:
			content = ``;
			contentArr.forEach((element, index) => {
				content += `
					<div class="task">
						<label class="checkbox">
							<input type="checkbox" checked />
							<span class="checkmark"></span>
							<p onclick="check(event)">${element}</p>
						</label>
						<button onkeyup="showOption(this.id)" id="doneMenu-${index}" onclick="showOption(this.id)" class="option" title="Option" type="button">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="200.000000pt" viewBox="0 0 100.000000 200.000000" preserveAspectRatio="xMidYMid meet">
								<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
									<path d="M414 1675 c-98 -59 -98 -196 0 -269 39 -29 133 -29 173 0 72 54 93 136 53 214 -39 77 -146 103 -226 55z" />
									<path d="M420 1138 c-59 -40 -82 -84 -78 -146 7 -85 62 -141 146 -150 63 -6 120 24 151 78 59 105 -9 228 -131 238 -44 3 -59 0 -88 -20z" />
									<path d="M440 609 c-89 -37 -125 -141 -80 -229 25 -48 81 -80 142 -80 158 0 215 197 86 293 -31 23 -111 32 -148 16z" />
								</g>
							</svg>
							<div class="optionMenu doneMenu">
								<a onclick="editItem(event)" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
											<path d="M438 603 l-319 -318 3 -80 3 -80 80 -3 80 -3 318 319 c174 175 317 324 317 331 0 7 -31 44 -69 82 -38 38 -75 69 -82 69 -7 0 -156 -143 -331 -317z m357 187 c18 -20 18 -21 -8 -48 l-27 -26 -21 21 c-21 21 -21 21 -3 47 23 31 35 32 59 6z m-110 -110 c19 -21 17 -23 -205 -245 -232 -233 -270 -260 -270 -198 0 22 42 69 217 245 120 120 223 218 229 218 6 0 19 -9 29 -20z"/>
										</g>
									</svg>
									Edit
								</a>
								<a onclick="deleteItem(event)" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
											<path d="M150 845 l-24 -26 159 -159 160 -160 -160 -160 -160 -160 28 -27 27 -28 160 160 160 160 160 -160 160 -160 27 28 28 27 -160 160 -160 160 160 160 160 160 -28 27 -27 28 -160 -160 -160 -160 -158 158 c-86 86 -160 157 -163 157 -3 0 -16 -11 -29 -25z"/>
										</g>
									</svg>
									Delete
								</a>
							</div>
						</button>
					</div>
				`;
			});
			contentLists[c].innerHTML = content;
			if (content.length > 0) {
				noContentNote[c].classList.remove("active");
			} else {
				noContentNote[c].classList.add("active");
			}
			content = ``;
			break;
		case 2:
			content = ``;
			contentArr.forEach((element, index) => {
				content += `
					<div class="note">
						<p class="noteBody noteElement">${element}</p>
						<button onkeyup="showOption(this.id)" id="notesMenu-${index}" onclick="showOption(this.id)" class="option noteOption noteElement" title="Option" type="button">
							<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="200.000000pt" viewBox="0 0 100.000000 200.000000" preserveAspectRatio="xMidYMid meet">
								<g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" stroke="none">
									<path d="M414 1675 c-98 -59 -98 -196 0 -269 39 -29 133 -29 173 0 72 54 93 136 53 214 -39 77 -146 103 -226 55z" />
									<path d="M420 1138 c-59 -40 -82 -84 -78 -146 7 -85 62 -141 146 -150 63 -6 120 24 151 78 59 105 -9 228 -131 238 -44 3 -59 0 -88 -20z" />
									<path d="M440 609 c-89 -37 -125 -141 -80 -229 25 -48 81 -80 142 -80 158 0 215 197 86 293 -31 23 -111 32 -148 16z" />
								</g>
							</svg>
							<div class="optionMenu notesMenu">
								<a onclick="editItem(event)" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
											<path d="M438 603 l-319 -318 3 -80 3 -80 80 -3 80 -3 318 319 c174 175 317 324 317 331 0 7 -31 44 -69 82 -38 38 -75 69 -82 69 -7 0 -156 -143 -331 -317z m357 187 c18 -20 18 -21 -8 -48 l-27 -26 -21 21 c-21 21 -21 21 -3 47 23 31 35 32 59 6z m-110 -110 c19 -21 17 -23 -205 -245 -232 -233 -270 -260 -270 -198 0 22 42 69 217 245 120 120 223 218 229 218 6 0 19 -9 29 -20z"/>
										</g>
									</svg>
									Edit
								</a>
								<a onclick="deleteItem(event)" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
										<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
											<path d="M150 845 l-24 -26 159 -159 160 -160 -160 -160 -160 -160 28 -27 27 -28 160 160 160 160 160 -160 160 -160 27 28 28 27 -160 160 -160 160 160 160 160 160 -28 27 -27 28 -160 -160 -160 -160 -158 158 c-86 86 -160 157 -163 157 -3 0 -16 -11 -29 -25z"/>
										</g>
									</svg>
									Delete
								</a>
							</div>
						</button>
					</div>
				`;
			});
			contentLists[c].innerHTML = content;
			if (content.length > 0) {
				noContentNote[c].classList.remove("active");
			} else {
				noContentNote[c].classList.add("active");
			}
			content = ``;
			break;

      default:
			console.log("Check Line 116 for any error, if any.");
			break;
	}
}
/* The content render function - renders content on the tab page on the basis of the array and page index passed - The functionality ends here */


/* Search button - Coming Very Soon - Search functionality present in the tab header starts here */
for (let c = 0; c < searchBtn.length; c++) {
	searchBtn[c].addEventListener("click", () => {
		searchBtn[c].children[0].style.fill = "white";
		setTimeout(() => {
			searchBtn[c].children[0].style.fill = "black";
			alert(`Search feature is coming very soon.`);
		}, 250);
/* 		switch (c) {
			case 0:
				if (createBox[c].classList.contains("active")) {
					alert(`Please close the "Add New Task" dialog box to use this feature!`);
				} else {
					confirmBox[c].classList.add("active");
					contentLists[c].classList.add("dim");
					delBtn[c].style.color = "red";
				}
				break;
			case 2:
				if (createBox[1].classList.contains("active")) {
					alert(`Please close the "Add New Note" dialog box to use this feature!`);
				} else {
					confirmBox[c].classList.add("active");
					contentLists[c].classList.add("dim");
					delBtn[c].style.color = "red";
				}
				break;
			case 1:
				confirmBox[c].classList.add("active");
				contentLists[c].classList.add("dim");
				delBtn[c].style.color = "red";
				break;
			default:
				console.log("Check Line 268 for any error, if any.");
				break;
		} */
	});
}
/* Search button - Search functionality present in the tab header ends here */


/* Delete All button - delete all functionality present in the tab header starts here */
for (let c = 0; c < delAllBtn.length; c++) {
	delAllBtn[c].addEventListener("click", () => {
		delAllBtn[c].children[0].style.fill = "white";
		switch (c) {
			case 0:
				if (createBox[c].classList.contains("active")) {
					alert(`Please close the "Add New Task" dialog box to use this feature!`);
				} else {
					confirmBox[c].classList.add("active");
					contentLists[c].classList.add("dim");
					delBtn[c].style.color = "red";
				}
				break;
			case 2:
				if (createBox[1].classList.contains("active")) {
					alert(`Please close the "Add New Note" dialog box to use this feature!`);
				} else {
					confirmBox[c].classList.add("active");
					contentLists[c].classList.add("dim");
					delBtn[c].style.color = "red";
				}
				break;
			case 1:
				confirmBox[c].classList.add("active");
				contentLists[c].classList.add("dim");
				delBtn[c].style.color = "red";
				break;
			case 3:
				confirmBox[c].classList.add("active");
				contentLists[c].classList.add("dim");
				delBtn[c].style.color = "red";
				break;
			default:
				console.log("Check Line 309 for any error, if any.");
				break;
		}
	});
}
/* Delete All button - delete all functionality present in the tab header ends here */


/* Delete All button final - delete all confirmation functionality present in confirmation box of delete all starts here */
for (let c = 0; c < delBtn.length; c++) {
	delBtn[c].addEventListener("click", () => {
			if (confirm("Please confirm to delete all!")) {
				switch (c) {
					case 0:
						toDoArr = [];
						localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
						showContent(toDoArr, c);
						break;
					case 1:
						doneArr = [];
						localStorage.setItem("doneArr", JSON.stringify(doneArr));
            showContent(doneArr, c);
						break;
					case 2:
						notesArr = [];
						localStorage.setItem("notesArr", JSON.stringify(notesArr));
            showContent(notesArr, c);
						break;
					case 3:
						confirm("This will clear the data of whole application - To-Do, Done & Notes!");
						toDoArr = [];
						doneArr = [];
						notesArr = [];
						localStorage.removeItem("toDoArr");
						localStorage.removeItem("doneArr");
						localStorage.removeItem("notesArr");
						contentLists[0].innerHTML = ``;
						contentLists[1].innerHTML = ``;
						contentLists[2].innerHTML = ``;
						noContentNote[0].classList.add("active");
						noContentNote[1].classList.add("active");
						noContentNote[2].classList.add("active");
						break;
					default:
						console.log("Check Line 351 for any error, if any.");
						break;
				}

				delAllBtn[c].children[0].style.fill = "black";
				confirmBox[c].classList.remove("active");
				contentLists[c].classList.remove("dim");
			}
	});
}
/* Delete All button final - (One of the action buttons) - delete all confirmation functionality present in confirmation box of delete all starts here */


/* Cancel button - (All floating boxes cancel button) - cancel functionality present in both delete all confirmation box as well as createNew box in its floating box starts here */
for (let c = 0; c < cancelBtn.length; c++) {
	cancelBtn[c].addEventListener("click", () => {
		switch (c) {
			case 0:
				delAllBtn[0].children[0].style.fill = "black";
				confirmBox[0].classList.remove("active");
				contentLists[0].classList.remove("dim");
				break;
			case 3:
				delAllBtn[1].children[0].style.fill = "black";
				confirmBox[1].classList.remove("active")
				contentLists[1].classList.remove("dim");
				break;
			case 5:
				delAllBtn[2].children[0].style.fill = "black";
				confirmBox[2].classList.remove("active");
				contentLists[2].classList.remove("dim");
				break;
			case 8:
				delAllBtn[3].children[0].style.fill = "black";
				confirmBox[3].classList.remove("active");
				contentLists[3].classList.remove("dim");
				break;

			case 1:
				inputBox[0].innerText = ``;
				createBox[0].classList.remove("active");
				contentLists[0].classList.remove("dim");
				break;
			case 6:
				inputBox[1].innerText = ``;
				createBox[1].classList.remove("active");
				contentLists[2].classList.remove("dim");
				break;

			case 2:
				editInputBox[0].innerText = ``;
				editFloatingBox[0].classList.remove("active");
				contentLists[0].classList.remove("dim");
				break;
			case 4:
				editInputBox[1].innerText = ``;
				editFloatingBox[1].classList.remove("active");
				contentLists[1].classList.remove("dim");
				break;
			case 7:
				editInputBox[2].innerText = ``;
				editFloatingBox[2].classList.remove("active");
				contentLists[2].classList.remove("dim");
				break;

			default:
				console.log("Check Line 400 for any error, if any.");
				break;
		}
	});
}
/* Cancel button - (All floating boxes cancel button) - cancel functionality present in both delete all confirmation box as well as createNew box in its floating box ends here */


/* Create New Button - (To-Do and Notes Plus button) - The two buttons present in To-Do and Notes tab page that opens the add new item floating box functionality starts here */
for (let c = 0; c < createNewBtn.length; c++) {
	createNewBtn[c].addEventListener("click", () => {
		createNewBtn[c].children[0].style.fill = "white";
		setTimeout(() => {
			createNewBtn[c].children[0].style.fill = "black";
		}, 250);
		switch (c) {
			case 0:
				if (confirmBox[c].classList.contains("active")) {
					alert(`Please close the "Delete All - Confirmation" dialog box to add new task!`);
				} else {
					createBox[c].classList.add("active");
					contentLists[c].classList.add("dim");
					delBtn[c].style.color = "red";
					inputBox[c].focus();
					addBtn[c].style.color = "palegreen";
				}
				break;
			case 1:
				if (confirmBox[2].classList.contains("active")) {
					alert(`Please close the "Delete All - Confirmation" dialog box to add new note!`);
				} else {
					createBox[c].classList.add("active");
					contentLists[2].classList.add("dim");
					delBtn[c].style.color = "red";
					inputBox[c].focus();
					addBtn[c].style.color = "palegreen";
				}
				break;
			default:
				console.log("Check Line 461 for any error, if any.");
				break;
		}
	});
}
/* Create New Button - (To-Do and Notes Plus button) - The two buttons present in To-Do and Notes tab page that opens the add new item floating box functionality ends here */


/* The Add button - (The Add button present in the create new floating box in the To-Do and Notes tab page) - The add item functionality that let the user to add new item i.e. task or notes present in the To-Do and Notes tab page starts here */
for (let c = 0; c < addBtn.length; c++) {
	addBtn[c].addEventListener("click", () => {
		switch (c) {
			case 0:
				if (inputBox[c].innerText.length < 2) {
					alert("Blank input can't be added!");
				} else {
					toDoArr.push(inputBox[c].innerText);					
					localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
					showContent(toDoArr, c);
					contentLists[c].classList.remove("dim");
				}
				break;
			case 1:
				if (inputBox[c].innerText.length < 2) {
					alert("Blank input can't be added!");
				} else {
					notesArr.push(inputBox[c].innerText);
					localStorage.setItem("notesArr", JSON.stringify(notesArr));
					showContent(notesArr, 2);
					contentLists[2].classList.remove("dim");
				}
				break;
			default:
				console.log("Check Line 500 for any error, if any.");
				break;
		}
		addBtn[c].style.color = "palegreen";
		inputBox[c].innerText = ``;
		createBox[c].classList.remove("active");
	})
}
/* The Add button - (The Add button present in the create new floating box in the To-Do and Notes tab page) - The add item functionality that let the user to add new item i.e. task or notes present in the To-Do and Notes tab page ends here */


/* The feature that allows user to mark any task complete or incomplete by shifting it to the respective page at which the task is i.e. incomplete - to-do tab page / complete - done tab page. The feature starts here */
function check(event) {
	let address = event.target.parentNode.nextSibling.nextSibling.id.split("-");
	switch (address[0]) {
		case "toDoMenu":
			let toDoCheckItem = toDoArr.splice(address[1], 1)[0];
			doneArr.push(toDoCheckItem);
			localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
			localStorage.setItem("doneArr", JSON.stringify(doneArr));
			showContent(toDoArr, 0);
			showContent(doneArr, 1);
			break;
		case "doneMenu":
			let doneCheckItem = doneArr.splice(address[1], 1)[0];
			toDoArr.push(doneCheckItem);	
			localStorage.setItem("doneArr", JSON.stringify(doneArr));
			localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
			showContent(doneArr, 1);
			showContent(toDoArr, 0);
			break;
		default:
			console.log("Check Line 536 for any error, if any.");
			break;
	}
}
/* The feature that allows user to mark any task complete or incomplete by shifting it to the respective page at which the task is i.e. incomplete - to-do tab page / complete - done tab page. The feature ends here */


/* The show option button - (The show option button present with every item i.e. every task in to-do and done tab page as well as every notes in notes tab page) - The show option functionality which shows the user the delete option for individual items starts here */
function showOption(id) {
	let address = id.split("-");
	document.getElementsByClassName(`${address[0]}`)[`${address[1]}`].classList.add("active");
}
/* The show option button - (The show option button present with every item i.e. every task in to-do and done tab page as well as every notes in notes tab page) - The show option functionality which shows the user the delete option for individual items ends here */


/* The edit option button - (The edit option button that shows up in the option menu present with every item in the application) - The edit individual item option opens the edit box with the content of respective item in the edit box to let the user to edit the respective item. The functionality starts here */
function editItem(event) {
	event.stopPropagation();
	let address = event.target.parentNode.parentNode.id.split("-");
	switch (address[0]) {
		case "toDoMenu":
			if (confirmBox[0].classList.contains("active") || createBox[0].classList.contains("active")) {
				alert(`Please close the "Delete All" / "Add New Task" dialog box to edit task!`);
			} else {
				editFloatingBox[0].id = address[1];
				editFloatingBox[0].classList.add("active");
				contentLists[0].classList.add("dim");
				editInputBox[0].innerText = toDoArr[address[1]];
				editInputBox[0].focus();
				saveBtn[0].style.color = "palegreen";
			}
			break;
		case "doneMenu":
			if (confirmBox[1].classList.contains("active")) {
				alert(`Please close the "Delete All" dialog box to edit task!`);
			} else {
				editFloatingBox[1].id = address[1];
				editFloatingBox[1].classList.add("active");
				contentLists[1].classList.add("dim");
				editInputBox[1].innerText = doneArr[address[1]];
				editInputBox[1].focus();
				saveBtn[1].style.color = "palegreen";
			}
				break;
		case "notesMenu":
			if (confirmBox[2].classList.contains("active") || createBox[1].classList.contains("active")) {
				alert(`Please close the "Delete All" / "Add New Note" dialog box to edit task!`);
			} else {
				editFloatingBox[2].id = address[1];
				editFloatingBox[2].classList.add("active");
				contentLists[2].classList.add("dim");
				editInputBox[2].innerText = notesArr[address[1]];
				editInputBox[2].focus();
				saveBtn[2].style.color = "palegreen";
			}
			break;
		default:
			console.log("Check Line 572 for any error, if any.");
			break;
	}
}
/* The edit option button - (The edit option button that shows up in the option menu present with every item in the application) - The edit individual item option opens the edit box with the content of respective item in the edit box to let the user to edit the respective item. The functionality ends here */


/* The Save button - (The Save button present in the edit item floating box in the To-Do, Done and Notes tab page) - The save item functionality that let the user to save the respective item after editing on whick the edit option is clicked i.e. task, done task or notes present in the To-Do, Done or Notes tab page starts here */
for (let c = 0; c < saveBtn.length; c++) {
	saveBtn[c].addEventListener("click", () => {
		switch (c) {
			case 0:
				toDoArr.splice(editFloatingBox[c].id, 1, editInputBox[c].innerText);
				localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
				showContent(toDoArr, c);
				editFloatingBox[c].classList.remove("active");
				editFloatingBox[c].id = ``;
				contentLists[c].classList.remove("dim");
				editInputBox[c].innerText = ``;
				break;
			case 1:
				doneArr.splice(editFloatingBox[c].id, 1, editInputBox[c].innerText);
				localStorage.setItem("doneArr", JSON.stringify(doneArr));
				showContent(doneArr, c);
				editFloatingBox[c].classList.remove("active");
				editFloatingBox[c].id = ``;
				contentLists[c].classList.remove("dim");
				editInputBox[c].innerText = ``;
				break;
			case 2:
				notesArr.splice(editFloatingBox[c].id, 1, editInputBox[c].innerText);
				localStorage.setItem("notesArr", JSON.stringify(notesArr));
				showContent(notesArr, c);
				editFloatingBox[c].classList.remove("active");
				editFloatingBox[c].id = ``;
				contentLists[c].classList.remove("dim");
				editInputBox[c].innerText = ``;
				break;

				default:
				console.log("Check Line 621 for any error, if any.");
				break;
		}
	})
}
/* The Save button - (The Save button present in the edit item floating box in the To-Do, Done and Notes tab page) - The save item functionality that let the user to save the respective item after editing on whick the edit option is clicked i.e. task, done task or notes present in the To-Do, Done or Notes tab page starts here */


/* The delete option button - (The delete option button that shows up in the option menu present with every item in the application) - The delete individual item functionality starts here */
function deleteItem(event) {
	event.stopPropagation();
	let address = event.target.parentNode.parentNode.id.split("-");
	switch (address[0]) {
		case "toDoMenu":
			toDoArr.splice(address[1], 1);
			localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
			showContent(toDoArr, 0);
			break;
		case "doneMenu":
			doneArr.splice(address[1], 1);
			localStorage.setItem("doneArr", JSON.stringify(doneArr));
			showContent(doneArr, 1);
			break;
		case "notesMenu":
			notesArr.splice(address[1], 1);
			localStorage.setItem("notesArr", JSON.stringify(notesArr));
			showContent(notesArr, 2);
			break;
		default:
			console.log("Check Line 662 for any error, if any.");
			break;
	}
}
/* The delete option button - (The delete option button that shows up in the option menu present with every item in the application) - The delete individual item functionality ends here */


/* The feature that automatically hides the floating delete option button present with every item - It works when the user opens the option menu and touches or clicks anywhere else except the show or delete option. The feature starts here */
window.onclick = (event) => {
	if (!event.target.matches("button, svg")) {
		for (let c = 0; c < document.getElementsByClassName("optionMenu").length; c++) {
			document.getElementsByClassName("optionMenu")[c].classList.remove("active");
		}
	}
}
/* The feature that automatically hides the floating delete option button present with every item - It works when the user opens the option menu and touches or clicks anywhere else except the show or delete option. The feature ends here */


/* ========================
To-Do App JS Code ends here.
======================== */