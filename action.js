const participants = [{"name":"Nancy Nanjala Wasike","phone":"0741415175","group":"Group 2"},{"name":"Grace Munyiri","phone":"0713729433","group":"Group 1"},{"name":"Alex Wanyama","phone":"0718426556","group":"Group 3"},{"name":"Veronica Muthoni Mutisya","phone":"0708210006","group":"Group 3"},{"name":"Gregory Kibet","phone":"720880979","group":"Group 1"},{"name":"Peter Githinji Gichuki","phone":"0727 888 122","group":"Group 1"},{"name":"Imelda Adhiambo Obado","phone":"+254719854540","group":"Group 1"},{"name":"Amolo Peter Amolo","phone":"+254 706 245 015","group":"Group 3"},{"name":"Jacktone Ipomai","phone":"+254794580149","group":"Group 2"},{"name":"Becky Cherotich","phone":"0723756433","group":"Group 3"},{"name":"Waringa Kenneth Ndung'U","phone":"0181359748","group":"Group 1"},{"name":"Patrick Mulei","phone":"0759484590","group":"Group 2"},{"name":"Eucabeth Mbakaya","phone":"0792815054","group":"Group 3"},{"name":"Collan Kimtai Sang","phone":"0746581478","group":"Group 1"},{"name":"Catherine Dennis","phone":"0721848047","group":"Group 3"},{"name":"Millicent Wangui Mwangi","phone":"0115702403","group":"Group 2"},{"name":"Joyce Makario","phone":"+254791555315","group":"Group 1"},{"name":"Kinyanjui Neema Njambi","phone":"0768844451","group":"Group 2"},{"name":"Ruth Atieno Gor","phone":"0791429615","group":"Group 2"},{"name":"Faith Muthikwa Suleiman","phone":"+254 700714198","group":"Group 1"},{"name":"Awino Judith","phone":"0704878778","group":"Group 1"},{"name":"Mary Wanjiku Kamweru","phone":"0742612685","group":"Group 3"},{"name":"Janet Velma Otieno","phone":"0797550060","group":"Group 2"},{"name":"Esther Wambui","phone":"0714047147","group":"Group 3"},{"name":"Agnes Njeri Mwangi","phone":"0728529884","group":"Group 2"},{"name":"Dorothy Mauda","phone":"0746790387","group":"Group 2"},{"name":"David Wasike","phone":"0713707696","group":"Group 2"},{"name":"Titus Muuo","phone":"0740213224","group":"Group 2"},{"name":"Naomi Murugi","phone":"0796188786","group":"Group 3"},{"name":"Charity Chepkirui","phone":"0711752270","group":"Group 3"},{"name":"Dennis Nduati Macharia","phone":"0794078158","group":"Group 3"},{"name":"Vincent Kyalo Wambua","phone":"0745557243","group":"Group 2"},{"name":"Joy Wanjiru Muriithi","phone":"0724885815","group":"Group 2"},{"name":"Faith Chepkemoi","phone":"0797222345","group":"Group 3"},{"name":"Margaret Nite Anyango","phone":"0708328750","group":"Group 3"},{"name":"Morris Ndolo","phone":"0796597211","group":"Group 2"},{"name":"Mercy Miroya","phone":"798010291","group":"Group 2"},{"name":"Naomi Macharia","phone":"0791487598","group":"Group 2"},{"name":"Dinah Kinya Kiambi","phone":"0718330517","group":"Group 1"},{"name":"Mary Gichuhi","phone":"0793525209","group":"Group 1"},{"name":"Peter Mwangi Kirathe","phone":"+254112886635","group":"Group 3"},{"name":"David Karani","phone":"0114863540","group":"Group 3"},{"name":"Racheal Aricha","phone":"0714911797","group":"Group 1"},{"name":"Hope Mushogo","phone":"+254713319288","group":"Group 3"},{"name":"David Wasike","phone":"0713707696","group":"Group 3"},{"name":"Faith Nyaboke Atima","phone":"0797653537","group":"Group 2"},{"name":"Samuel Ebei Eyanae","phone":"0717041916","group":"Group 1"},{"name":"Margaret Anyango Okumu","phone":"0758204464","group":"Group 1"},{"name":"Rebeccah Sammy","phone":"0792855936","group":"Group 1"},{"name":"Fredrick Omondi","phone":"0790601191","group":"Group 2"},{"name":"Fredrick Omondi","phone":"0790601191","group":"Group 3"},{"name":"Caroline Gichobi","phone":"0114660622","group":"Group 2"},{"name":"James Muthoka Muli","phone":"0700927741","group":"Group 3"},{"name":"Jacqueline Kasiva Mwiu","phone":"0722333738","group":"Group 2"},{"name":"Calistus Wafula","phone":"0706412153","group":"Group 3"},{"name":"Abraham Ushindi","phone":"793042432","group":"Group 1"},{"name":"Leonora Bosire","phone":"0703705716","group":"Group 1"},{"name":"Gaudencia Nafula","phone":"0799131015","group":"Group 3"},{"name":"Serah Wamaitha Rei","phone":"0726450130","group":"Group 1"},{"name":"Valary Wasilwa","phone":"0742541804","group":"Group 3"},{"name":"Mary Muringi Mwaniki","phone":"0701350388","group":"Group 2"},{"name":"Alex Wanyama","phone":"0718426556","group":"Group 2"},{"name":"Gregory Kibet","phone":"720880979","group":"Group 3"},{"name":"Millicent Wangui Mwangi","phone":"0115702403","group":"Group 3"},{"name":"Vincent Kyalo Wambua","phone":"0745557243","group":"Group 1"},{"name":"Claire Wanjiru Ndichu","phone":"0713465648","group":"Group 2"},{"name":"Oscar Maina","phone":"0742424695","group":"Group 2"},{"name":"Serah Wamaitha Rei","phone":"0726450130","group":"Group 2"},{"name":"Mary Gichuhi","phone":"0793525209","group":"Group 3"},{"name":"Janet Simiyu","phone":"0795605091","group":"Group 2"},{"name":"Janetbaro","phone":"O795605091","group":"Group 2"},{"name":"Imelda Adhiambo Obado","phone":"+254719854540","group":"Group 1"},{"name":"Maureen Wachira","phone":"0741477806","group":"Group 3"},{"name":"Susan Clara Wangui Mbugua","phone":"0112056141","group":"Group 1"},{"name":"Alice Waceke","phone":"0745486277","group":"Group 3"},{"name":"Mercy Chepchumba","phone":"0706118418","group":"Group 1"},{"name":"Cynthia Mungume","phone":"0706546889","group":"Group 1"},{"name":"Hezron Kipkorir Limo","phone":"0725158890","group":"Group 1"},{"name":"Evence Njue","phone":"0706802608","group":"Group 3"},{"name":"Justin Kinyanjui Chege","phone":"0710325032","group":"Group 2"},{"name":"Sham Malika","phone":"0718206820","group":"Group 3"},{"name":"Felistas Njoroge","phone":"0792359103","group":"Group 1"},{"name":"Joe Mwadime","phone":"703393607","group":"Group 2"},{"name":"Judith Aoko Dorian","phone":"0796364511","group":"Group 1"},{"name":"Awino Judith","phone":"0704878778","group":"Group 1"},{"name":"Peter Mwangi Kirathe","phone":"112886635","group":"Group 2"},{"name":"Alex Wanyama","phone":"0718426556","group":"Group 1"},{"name":"Mary Gichuhi","phone":"0793525209","group":"Group 3"},{"name":"Hezron Limo","phone":"0725158890","group":"Group 3"},{"name":"Imelda Adhiambo Obado","phone":"+254719854540","group":"Group 2"},{"name":"Janet Simiyu","phone":"0795605091","group":"Group 2"},{"name":"David Wasike","phone":"0713707696","group":"Group 3"},{"name":"Joyce Moraa Makario","phone":"0791555315","group":"Group 1"},{"name":"Ambisa Alfred","phone":"0712311946","group":"Group 1"},{"name":"Brenda Jemutai Chumba","phone":"0714069261","group":"Group 3"},{"name":"Hellen Ndunge Mutie","phone":"0710410232","group":"Group 1"},{"name":"Collan Kimtai Sang","phone":"0746581478","group":"Group 1"},{"name":"Peter Githinji Gichuki","phone":"0727888122","group":"Group 1"},{"name":"Alfred Ambisa","phone":"0712311946","group":"Group 3"},{"name":"Alex Wanyama","phone":"0718426556","group":"Group 3"},{"name":"Anthony Kairu Mwaura","phone":"0722848041","group":"Group 2"},{"name":"David Wasike","phone":"0713707696","group":"Group 1"},{"name":"Felistas Wamuhu Njoroge","phone":"0792359103;","group":"Group 2"},{"name":"Valary Wasilwa","phone":"0742541804","group":"Group 3"},{"name":"Hannah Wariara Karanja","phone":"0797940876","group":"Group 1"},{"name":"Cynaidah Sadie","phone":"0768083255","group":"Group 1"},{"name":"Cynaidah Sadie","phone":"0768083255","group":"Group 3"},{"name":"Rebeccah Sammy","phone":"0792855936","group":"Group 2"},{"name":"Faith Shitanda","phone":"0748649928","group":"Group 1"},{"name":"Hope Mushogo","phone":"+254 713319288","group":"Group 2"},{"name":"Vincent Kyalo Wambua","phone":"0745557243","group":"Group 1"},{"name":"Kenneth Chege Kinyanjui","phone":"0702812780","group":"Group 2"},{"name":"Gerald Wesley Onyango","phone":"0790517434","group":"Group 2"}];

const groups = {
  "Group 1": { name: "Singapore", url: "https://chat.whatsapp.com/EoacEXQqY7y6gYzxwLu10u" },
  "Group 2": { name: "Lions", url: "https://chat.whatsapp.com/HnWzR8QGaEjIy6R0hKGOuj" },
  "Group 3": { name: "Kempiski", url: "https://chat.whatsapp.com/I4AxFbx5pl4GEPmxdhLluJ" }
};

const form = document.getElementById("groupForm");
const input = document.getElementById("searchInput");
const findButton = document.getElementById("findButton");
const message = document.getElementById("message");
const confirmation = document.getElementById("confirmation");
const fullName = document.getElementById("fullName");
const confirmButton = document.getElementById("confirmButton");
const tryAgainButton = document.getElementById("tryAgainButton");
const choices = document.getElementById("choices");
const choiceList = document.getElementById("choiceList");
const choiceCount = document.getElementById("choiceCount");
const result = document.getElementById("result");
const groupTitle = document.getElementById("groupTitle");
const groupName = document.getElementById("groupName");
const confirmedName = document.getElementById("confirmedName");
const whatsappButton = document.getElementById("whatsappButton");
const newSearchButton = document.getElementById("newSearchButton");

let pendingPerson = null;

function cleanText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function nameWords(value) {
  return cleanText(value).split(" ").filter(Boolean);
}

function normalizePhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("254")) digits = "0" + digits.slice(3);
  if (digits.startsWith("7") && digits.length === 9) digits = "0" + digits;
  return digits;
}

function phoneMatches(a, b) {
  const x = normalizePhone(a);
  const y = normalizePhone(b);
  if (!x || !y) return false;
  return x === y || x.slice(-9) === y.slice(-9);
}

function nameMatches(search, registered) {
  const typed = nameWords(search);
  const full = nameWords(registered);
  if (!typed.length || !full.length) return false;
  // Every word entered by the participant must match the beginning of a word in the registered name.
  return typed.every(word => full.some(fullWord => fullWord.startsWith(word)));
}

function exactFullName(search, registered) {
  return cleanText(search) === cleanText(registered);
}

function uniqueMatches(matches) {
  const seen = new Set();
  return matches.filter(person => {
    const key = cleanText(person.name) + "|" + normalizePhone(person.phone) + "|" + person.group;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function clearPanels() {
  confirmation.classList.add("hidden");
  choices.classList.add("hidden");
  result.classList.add("hidden");
  pendingPerson = null;
  choiceList.innerHTML = "";
}

function setMessage(text = "", type = "") {
  message.textContent = text;
  message.className = "message" + (type ? " " + type : "");
}

function showConfirmation(person) {
  clearPanels();
  pendingPerson = person;
  fullName.textContent = person.name;
  confirmation.classList.remove("hidden");
  setMessage("We found your registered name. Please confirm it before continuing.", "info");
  confirmation.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showMultiple(matches) {
  clearPanels();
  choices.classList.remove("hidden");
  choiceCount.textContent = `${matches.length} match${matches.length === 1 ? "" : "es"}`;
  setMessage("Please select your full registered name.", "info");

  matches.forEach((person, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.innerHTML = `<div><strong>${escapeHtml(person.name)}</strong><small>Participant ${index + 1}</small></div><span>→</span>`;
    button.addEventListener("click", () => showConfirmation(person));
    choiceList.appendChild(button);
  });
  choices.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showResult(person) {
  clearPanels();
  const group = groups[person.group];
  if (!group) {
    setMessage("Your group was found, but its WhatsApp link is not configured.", "error");
    return;
  }
  groupTitle.textContent = person.group;
  confirmedName.textContent = person.name;
  groupName.textContent = group.name;
  whatsappButton.href = group.url;
  result.classList.remove("hidden");
  setMessage("Name confirmed successfully. This is your assigned group.", "info");
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function searchParticipants(value) {
  const query = value.trim();
  if (!query) return { type: "empty", matches: [] };

  const looksLikePhone = /\d/.test(query) && query.replace(/\D/g, "").length >= 7;
  if (looksLikePhone) {
    return {
      type: "phone",
      matches: uniqueMatches(participants.filter(person => phoneMatches(query, person.phone)))
    };
  }

  return {
    type: "name",
    matches: uniqueMatches(participants.filter(person => nameMatches(query, person.name))),
    exact: uniqueMatches(participants.filter(person => exactFullName(query, person.name)))
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearPanels();
  setMessage("");

  const value = input.value.trim();
  if (!value) {
    setMessage("Please enter your name or phone number.", "error");
    input.focus();
    return;
  }

  findButton.disabled = true;
  findButton.innerHTML = "Checking…";

  setTimeout(() => {
    const found = searchParticipants(value);

    if (found.type === "empty") {
      setMessage("Please enter your details.", "error");
    } else if (!found.matches.length) {
      setMessage("We could not find a registered participant with those details. Check the spelling or phone number and try again.", "error");
    } else if (found.type === "phone") {
      // Phone number is treated as an identifier. If duplicated, require the participant to choose.
      if (found.matches.length === 1) showResult(found.matches[0]);
      else showMultiple(found.matches);
    } else {
      // Every name search requires full-name confirmation, including partial searches.
      if (found.matches.length === 1) {
        showConfirmation(found.matches[0]);
      } else {
        showMultiple(found.matches);
      }
    }

    findButton.disabled = false;
    findButton.innerHTML = 'Find My Group <span>→</span>';
  }, 250);
});

confirmButton.addEventListener("click", () => {
  if (!pendingPerson) return;
  const person = pendingPerson;
  showResult(person);
});

tryAgainButton.addEventListener("click", () => {
  clearPanels();
  setMessage("Enter your name again so we can find the correct registration.", "info");
  input.focus();
});

newSearchButton.addEventListener("click", () => {
  clearPanels();
  setMessage("");
  input.value = "";
  input.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

input.addEventListener("input", () => {
  clearPanels();
  setMessage("");
});
