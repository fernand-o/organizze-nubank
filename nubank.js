const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI']

function elementText(elementSarchIn, selector) {
  return elementSarchIn.querySelector(selector).innerText
}

function parseItem(item) {
  description = elementText(item, '.description')
  value = elementText(item, '.amount')
  value = parseFloat(value.replace(",", "."))
  date = elementText(item, '.time').split(" ")
  month = MONTHS.indexOf(date[1].trim()).toString().padStart(2, '0')
  date = date[0] + "/" + month

  return {
    date: date,
    description: description,
    value: value
  }
}

function itemList(node) {
  items = node.getElementsByClassName('charge')
  result = new Set();
  for (let item of items) {
    result.add(parseItem(item));
  }
  return result
}

function buttonSelecionar() {
  let btn = document.createElement("button")
  btn.innerHTML = "log charge list"
  btn.onclick = function () {
    console.log(itemList(this.parentNode))
  }
  return btn
}

function addButtons() {
  lists = document.querySelectorAll('.charges-list')
  for (let list of lists) {
    list.appendChild(buttonSelecionar())
  }
}