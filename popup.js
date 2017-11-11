var base = '';
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    var xhr = new XMLHttpRequest();
    function getVal(){
        if(!result.rates[Object.keys(result.rates)[0]]) {
            return num;
        }
        else{
            return (num * result.rates[Object.keys(result.rates)[0]]).toFixed(3);
        }
    }
    function hideDefaults(){
        var el = document.querySelector('.defaultStuff');
        if(el.style.display === 'none'){
            el.style.display = 'block';
        }
        else {
            el.style.display = 'none';
        }
    }
    function getCurrency(){
        if(base === '') {
            base = document.querySelector('#selectFirstCurrency').value;
        }
        xhr.open("GET", "https://api.fixer.io/latest?base=" + base + '&symbols=' + document.querySelector('#selectSecondCurrency').value, false);
        xhr.send();
        return JSON.parse(xhr.responseText);
    }
    function updateCurrencyCalculation(){
        base = document.querySelector('#selectFirstCurrency').value;
        num = document.querySelector('#firstCurrency').value;
        result = getCurrency();
        document.querySelector('#secondCurrency').value = getVal();
    }
    function switchValues() {
        var tempCurrency1 = document.querySelector('#selectFirstCurrency').value;
        var tempCurrency2 = document.querySelector('#selectSecondCurrency').value;
        document.querySelector('#selectFirstCurrency').value = tempCurrency2;
        document.querySelector('#selectSecondCurrency').value = tempCurrency1;
        updateCurrencyCalculation();
    }
    if(selection[0] !== '') {
        var baseCurrency = selection[0].toUpperCase();
        var num = baseCurrency.replace(/[^0-9.]/g, '');
        var currency = baseCurrency.replace(/[^A-Za-zÆØÅæøå$¥Č£€円₩₱₽рубкопейа฿₺]/g, '');
        xhr.open("GET", "http://ip-api.com/json", false);
        xhr.send();
        var location = JSON.parse(xhr.responseText);
        if(currency === '$' && location.countryCode === 'US'){
            base = 'USD';
        }
        else if(currency === '$' && location.countryCode === 'AU'){
            base = 'AUD';
        }
        else if(currency === '$' && location.countryCode === 'CA'){
            base = 'CAD';
        }
        else if(currency === '$' && location.countryCode === 'BR'){
            base = 'BRL';
        }
        else if(currency === '$' && location.countryCode === 'HK'){
            base = 'HKD';
        }
        else if(currency === '$' && location.countryCode === 'Mexico'){
            base = 'MXN';
        }
        else if(currency === '$' && location.countryCode === 'NZ'){
            base = 'NZD';
        }
        else if(currency === 'KR' && location.countryCode === 'NO'){
            base = 'NOK';
        }
        else if(currency === 'KR' && location.countryCode === 'DK'){
            base = 'DKK';
        }
        else if(currency === 'KR' && location.countryCode === 'SE'){
            base = 'SEK';
        }
        else if(currency === '¥' && location.countryCode === 'CN'){
            base = 'CNY';
        }
        else if(currency === '¥' && location.countryCode === 'JP'){
            base = 'JPY';
        }
        else if(currency === 'AUD'){
            base= 'AUD';
        }
        else if(currency === 'BGN' || currency === 'лв'){
            base = 'BGN';
        }
        else if(currency === 'R$' || currency === 'BRL'){
            base = 'BRL';
        }
        else if(currency === 'CAD' || currency === 'C$' || currency === 'CAN$'){
            base ='CAD';
        }
        else if(currency === 'CHF'){
            base = 'CHF';
        }
        else if(currency === 'CNY' || currency === 'RMB' || currency === '¥'){
            base = 'CNY';
        }
        else if(currency === 'CZK' || currency === 'KČ'){
            base = 'CZK';
        }
        else if(currency === 'DKK' || currency === 'KR'){
            base = 'DKK';
        }
        else if(currency === '£' || currency === 'GBP'){
            base = 'GBP';
        }
        else if(currency === '€' || currency === 'EUR' || currency === 'EURO'){
            base = 'EUR';
        }
        else if(currency === 'HKD' || currency === 'HK$'){
            base = 'HKD';
        }
        else if(currency === 'HRK' || currency === 'KN' || currency === 'LIPA' || currency === 'LP'){
            base = 'HRK';
        }
        else if(currency === 'HUF' || currency === 'FT'){
            base = 'HUF';
        }
        else if(currency === 'IDR' || currency === 'RP'){
            base = 'IDR';
        }
        else if(currency === 'JPY' || currency === '¥' || currency === '円'){
            base = 'JPY';
        }
        else if(currency === 'KRW' || currency === '₩'){
            base = 'KRW';
        }
        else if(currency === 'MXN' || currency === 'MEX$'){
            base = 'MXN';
        }
        else if(currency === 'MYR' || currency === 'RM'){
            base = 'MYR';
        }
        else if(currency === 'NOK'){
            base = 'NOK';
        }
        else if(currency === 'NZD'){
            base = 'NZD';
        }
        else if(currency === 'PHP' || currency === '₱'){
            base = 'PHP';
        }
        else if(currency === 'PLN' || currency === 'ZL' || currency === 'GROSZ' || currency === 'GR'){
            base = 'PLN';
        }
        else if(currency === 'RON' || currency === 'LEU'){
            base = 'RON';
        }
        else if(currency === 'RUB' || currency === '₽' || currency === 'руб' || currency === 'копейка' || currency === 'kopeyka'){
            base = 'RUB';
        }
        else if(currency === 'SEK'){
            base = 'SEK';
        }
        else if(currency === 'SGD' || currency === 'S$'){
            base = 'SGD';
        }
        else if(currency === 'THB' || currency === '฿'){
            base = 'THB';
        }
        else if(currency === 'TRY' || currency === '₺'){
            base = 'TRY';
        }
        else if(currency === '$' || currency === 'USD' || currency === 'US$' || currency === '$US'){
            base = 'USD';
        }
        else if(currency === 'ZAR' || currency === 'RAND' || currency === 'R'){
            base = 'ZAR';
        }
        var result = getCurrency();
        document.querySelector('#firstCurrency').value = num;
        document.querySelector('#secondCurrency').value = getVal();

    }
    chrome.storage.sync.get('value1', function(data){
        console.log(data.value1);
    });

    document.querySelector('#submit').addEventListener('click', updateCurrencyCalculation);
    document.querySelector('#firstCurrency').addEventListener('change', updateCurrencyCalculation);
    document.querySelector('#selectFirstCurrency').addEventListener('change', updateCurrencyCalculation);
    document.querySelector('#selectSecondCurrency').addEventListener('change', updateCurrencyCalculation);
    document.querySelector('#switch').addEventListener('click', switchValues);
    document.querySelector('#changeDefaults').addEventListener('click', hideDefaults);
    document.querySelector('#cancelButton').addEventListener('click', hideDefaults);
    document.querySelector('#saveButton').addEventListener('click', function(){
        document.querySelector('.defaultStuff').style.display = 'none';
        chrome.storage.sync.set({"value1" : 'value'});
    });
});
