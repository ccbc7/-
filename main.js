'use strict'

const result = document.getElementById("result");
function edit(value) {
  result.value = result.value + value;
  if (result.value === '00'
    || result.value === '01'
    || result.value === '02'
    || result.value === '03'
    || result.value === '04'
    || result.value === '05'
    || result.value === '06'
    || result.value === '07'
    || result.value === '08'
    || result.value === '09'
  ) {
    result.value = '0';
  }

  const str = result.value;
  if (str.length === 1 && str === '/') {
    result.value = "";
  }

  if (str.length === 1 && str === '*') {
    result.value = "";
  }

  const BB = result.value;
  if (BB.indexOf('*00') > -1
    || BB.indexOf('*01') > -1
    || BB.indexOf('*02') > -1
    || BB.indexOf('*03') > -1
    || BB.indexOf('*04') > -1
    || BB.indexOf('*05') > -1
    || BB.indexOf('*06') > -1
    || BB.indexOf('*07') > -1
    || BB.indexOf('*08') > -1
    || BB.indexOf('/00') > -1
    || BB.indexOf('/01') > -1
    || BB.indexOf('*09') > -1
    || BB.indexOf('/02') > -1
    || BB.indexOf('/03') > -1
    || BB.indexOf('/04') > -1
    || BB.indexOf('/05') > -1
    || BB.indexOf('/06') > -1
    || BB.indexOf('/07') > -1
    || BB.indexOf('/08') > -1
    || BB.indexOf('/09') > -1
    || BB.indexOf('+00') > -1
    || BB.indexOf('+01') > -1
    || BB.indexOf('+02') > -1
    || BB.indexOf('+03') > -1
    || BB.indexOf('+04') > -1
    || BB.indexOf('+05') > -1
    || BB.indexOf('+06') > -1
    || BB.indexOf('+07') > -1
    || BB.indexOf('+08') > -1
    || BB.indexOf('+09') > -1
    || BB.indexOf('-00') > -1
    || BB.indexOf('-01') > -1
    || BB.indexOf('-02') > -1
    || BB.indexOf('-03') > -1
    || BB.indexOf('-04') > -1
    || BB.indexOf('-05') > -1
    || BB.indexOf('-06') > -1
    || BB.indexOf('-07') > -1
    || BB.indexOf('-08') > -1
    || BB.indexOf('-09') > -1
  ) { result.value = result.value.slice(0, -1); }


  const plus = result.value;
  if (plus.indexOf('++') > -1
    || plus.indexOf('-+') > -1
    || plus.indexOf('*+') > -1
    || plus.indexOf('/+') > -1) {
    result.value = result.value.slice(0, -2);
    result.value = result.value + '+';
    console.log('ok');
  }

  const minus = result.value;
  if (minus.indexOf('+-') > -1
    || minus.indexOf('--') > -1
    || minus.indexOf('*-') > -1
    || minus.indexOf('/-') > -1) {
    result.value = result.value.slice(0, -2);
    result.value = result.value + '-';
    console.log('ok');
  }

  const multiply = result.value;
  if (multiply.indexOf('+*') > -1
    || multiply.indexOf('-*') > -1
    || multiply.indexOf('**') > -1
    || multiply.indexOf('/*') > -1) {
    result.value = result.value.slice(0, -2);
    result.value = result.value + '*';
    console.log('ok');
  }

  const divide = result.value;
  if (divide.indexOf('+/') > -1
    || divide.indexOf('-/') > -1
    || divide.indexOf('*/') > -1
    || divide.indexOf('//') > -1) {
    result.value = result.value.slice(0, -2);
    result.value = result.value + '/';
    console.log('ok');
  }
}

  function calc() {
    result.value = new Function(
      "return " + result.value
    )();
  }

  function reset() {
    result.value = "";
  }
