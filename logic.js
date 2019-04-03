function compareItems() {
  organizze = organizzeItems()
  nubank = nubankItems()

  for (let n of nubank) {
    for (let o of organizze) {
      if (n.description == o.description) {
        nubank.delete(n)
        organizze.delete(o)
      }
    }
  }

  console.log(nubank)
  console.log(organizze)
}

function elementText(elementSarchIn, selector) {
  return elementSarchIn.querySelector(selector).innerText
}

function organizzeItems() {
  items = document.querySelectorAll('tr[ng-repeat="transaction in transactions"]')
  result = new Set();
  [...items].each((item) => {
    date = elementText(item, '.date')
    description = elementText(item, '.description')
    value = elementText(item, '.value')
    value = parseFloat(value.replace("R$ ", "").replace(".", "").replace(",", "."))

    result.add({
      date: date,
      description: description,
      value: value
    });
  })
  return result
}

function nubankItems() {
  let items = new Set();
  items.add({
    date: "13/03/19",
    description: "Kanui Com 2/4",
    value: -41.95
  });
  items.add({
    date: "31/03/19",
    description: "teste",
    value: -12345.67
  });
  return items
}