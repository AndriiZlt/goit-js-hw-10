export function markupFun(data) {
  let markup = '';
  if (data.length > 10) {
    return null;
  } else if (data.length > 1) {
    return data
      .map(
        country => `<li class='country'>
                    <div class='flag'>
                        <img src='${country.flags.svg}' alt='${country.name.common}' width='30' />
                    </div>
                    <h2 class='country-name-list'>${country.name.official}</h2>
                  </li>`
      )
      .join('');
  } else {
    return `<div class='country-one'>
                <div class='country-title'>
                  <div class='flag'>
                    <img src='${data[0].flags.svg}' alt='${
      data[0].name.common
    }' width='40' />
                  </div>
                  <h2 class='country-name-one'>${data[0].name.official}</h2>
                </div>
  
            <ul class='country-info-list'>
             <li class='country-info-one'> <span>Capital:</span> ${
               data[0].capital
             } </li>
             <li class='country-info-one'> <span>Population:</span> ${
               data[0].population
             }</li>
             <li class='country-info-one'> <span>Languages:</span> ${Object.values(
               data[0].languages
             )}</li>
            </ul>
          </div>`;
  }
}
