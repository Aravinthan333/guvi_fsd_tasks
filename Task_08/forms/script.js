const table = document.createElement("table");

const tHead = document.createElement("thead");

const tBody = document.createElement("tbody");

const thFname = document.createElement("th");
thFname.innerText = "First Name";

const thLname = document.createElement("th");
thLname.innerText = "Last Name";

const thAddress = document.createElement("th");
thAddress.innerText = "Address";

const thPincode = document.createElement("th");
thPincode.innerText = "Pincode";

const thGender = document.createElement("th");
thGender.innerText = "Gender";

const thState = document.createElement("th");
thState.innerText = "State";

const trHead = document.createElement("tr");
trHead.append(thFname, thLname, thAddress, thPincode, thGender, thState);

tHead.append(trHead);

table.append(tHead, tBody);
// -------------------------------------------------------

const form = document.getElementById("survey-form");

const fName = document.getElementById("first-name");
fName.placeholder = "First Name";

const labelLname = document.createElement("label");
labelLname.innerText = "Last Name :";
labelLname.for = "last-name-label";

const lName = document.getElementById("last-name");
lName.required = true;
lName.placeholder = "last Name";

const labelmail = document.createElement("label");
labelmail.innerText = "Email :";
labelmail.for = "email-label";

const email = document.getElementById("email");
email.required = true;
email.placeholder = "mail@mail.com";

const labelAddress = document.createElement("label");
labelAddress.innerText = "Address :";
labelAddress.for = "address-label";

const address = document.getElementById("comments");
address.required = true;
address.placeholder = "Address";

const labelPincode = document.createElement("label");
labelPincode.innerText = "Pincode :";
labelPincode.for = "pincode";

const pincode = document.createElement("input");
pincode.type = "number";
pincode.name = "pincode";
pincode.id = "pincode";
pincode.required = true;
pincode.placeholder = "Pincode";

const labelGender = document.createElement("label");
labelGender.innerText = "Gender :";
labelGender.for = "gender";

const gender = document.createElement("input");
gender.className = "four";
gender.type = "radio";
gender.value = "Male";
gender.name = "gender";
gender.id = "male";
gender.required = true;

const labelMale = document.createElement("label");
labelMale.className = "four";
labelMale.innerText = "Male  ";
labelMale.for = "male";

const genderF = document.createElement("input");
genderF.className = "four";
genderF.type = "radio";
genderF.value = "Female";
genderF.name = "gender";
genderF.id = "female";
genderF.required = true;

const labelFemale = document.createElement("label");
labelFemale.className = "four";
labelFemale.innerText = "Female";
labelFemale.for = "female";

const labelState = document.createElement("label");
labelState.innerText = "State :";
labelState.for = "state";

const state = document.createElement("input");
state.type = "text";
state.name = "state";
state.id = "state";
state.required = true;
state.placeholder = "State";

const inpSubmit = document.createElement("input");
inpSubmit.type = "submit";
inpSubmit.id = "submit";
inpSubmit.classList = "btn btn-primary";
inpSubmit.style.margin = "16px";

form.append(
  fName,
  labelLname,
  lName,
  labelmail,
  email,
  labelAddress,
  address,
  labelPincode,
  pincode,
  labelGender,
  gender,
  labelMale,
  genderF,
  labelFemale,
  labelState,
  state,
  inpSubmit
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tr = document.createElement("tr");

  const tdFname = document.createElement("td");
  tdFname.innerText = fName.value;

  const tdLname = document.createElement("td");
  tdLname.innerText = lName.value;

  const tdAddress = document.createElement("td");
  tdAddress.innerText = address.value;

  const tdPincode = document.createElement("td");
  tdPincode.innerText = pincode.value;

  const tdGender = document.createElement("td");
  tdGender.innerText = gender.value || genderF.value;

  const tdState = document.createElement("td");
  tdState.innerText = state.value;

  tr.append(tdFname, tdLname, tdAddress, tdPincode, tdGender, tdState);

  tBody.appendChild(tr);
  form.reset();
});
document.body.append(form, table);
