'use strict'
var countries = [
  {
    "code": "EC",
    "name": "Ecuador",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "CW",
    "name": "Turks and Caicos",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "US",
    "name": "United States",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "VG",
    "name": "British Virgin Islands",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "FM",
    "name": "Federated States of Micronesia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "PW",
    "name": "Palau",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_name": "US Dollar"
  },
  {
    "code": "SH",
    "name": "Saint Helena",
    "region": "Africa",
    "region_slug": "africa",
    "currency_code": "GBP",
    "currency_symbol": "£",
    "currency_name": "Pound Sterling"
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "GBP",
    "currency_symbol": "£",
    "currency_name": "Pound Sterling"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "GBP",
    "currency_symbol": "£",
    "currency_name": "Pound Sterling"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "GBP",
    "currency_symbol": "£",
    "currency_name": "Pound Sterling"
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "AT",
    "name": "Austria",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "FI",
    "name": "Finland",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "FR",
    "name": "France",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "DE",
    "name": "Germany",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "GR",
    "name": "Greece",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "IT",
    "name": "Italy",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "MT",
    "name": "Malta",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "ES",
    "name": "Spain",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "EUR",
    "currency_symbol": "€",
    "currency_name": "Euro"
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "CHF",
    "currency_symbol": "Fr."
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "CHF",
    "currency_symbol": "Fr."
  },
  {
    "code": "AU",
    "name": "Australia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "AUD",
    "currency_symbol": "$",
    "currency_name": "Australian Dollar"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "AUD",
    "currency_symbol": "$",
    "currency_name": "Australian Dollar"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "AUD",
    "currency_symbol": "$",
    "currency_name": "Australian Dollar"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "AUD",
    "currency_symbol": "$",
    "currency_name": "Australian Dollar"
  },
  {
    "code": "CA",
    "name": "Canada",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "CAD",
    "currency_symbol": "$",
    "currency_name": "Canadian Dollar"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "NZD",
    "currency_symbol": "$",
    "currency_name": "New Zealand Dollar"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "NZD",
    "currency_symbol": "$",
    "currency_name": "New Zealand Dollar"
  },
  {
    "code": "NU",
    "name": "Niue",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "NZD",
    "currency_symbol": "$",
    "currency_name": "New Zealand Dollar"
  },
  {
    "code": "PN",
    "name": "Pitcairn Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "NZD",
    "currency_symbol": "$",
    "currency_name": "New Zealand Dollar"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "SGD",
    "currency_symbol": "$",
    "currency_name": "Singapore Dollar"
  },
  {
    "code": "BN",
    "name": "Brunei",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "SGD",
    "currency_symbol": "$",
    "currency_name": "Singapore Dollar"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "region": "Americas",
    "region_slug": "americas",
    "currency_code": "DKK",
    "currency_symbol": "kr",
    "currency_name": "Danish Krone"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "DKK",
    "currency_symbol": "kr",
    "currency_name": "Danish Krone"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "DKK",
    "currency_symbol": "kr",
    "currency_name": "Danish Krone"
  },
  {
    "code": "CN",
    "name": "China",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "CNY",
    "currency_symbol": "¥",
    "currency_name": "Yuan Renminbi"
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "HKD",
    "currency_symbol": "$",
    "currency_name": "Hong Kong Dollar"
  },
  {
    "code": "NO",
    "name": "Norway",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "NOK",
    "currency_symbol": "kr",
    "currency_name": "Norwegian Krone"
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "NOK",
    "currency_symbol": "kr",
    "currency_name": "Norwegian Krone"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "region": "Europe",
    "region_slug": "europe",
    "currency_code": "SEK",
    "currency_symbol": "kr",
    "currency_name": "Swedish Krona"
  },
  {
    "code": "JP",
    "name": "Japan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific",
    "currency_code": "JPY",
    "currency_symbol": "¥",
    "currency_name": "Japanese Yen"
  }
]
var countriesMap = countries.reduce((obj, country) => {
    obj[country.code] = {
      name: country.name,
      region: country.region,
    };
    return obj;
}, Object.create({}));


module.exports = {
  getCountries: function() {
    return countriesMap
  },
  getCountriesByRegion: function() {
    var regionList = ['americas', 'africa', 'asia_pacific', 'europe'];
    var regionMap = {};
    regionList.map(region => {
      regionMap[region] = [];
      countries.map(country => {
        if(region === country.region_slug) {
          regionMap[region].push(country)
        }
      })
    })
    return regionMap;
  },
  getRegion: function(code) {
    var countryCode = code.toUpperCase();
    if(!countriesMap[countryCode]) return null;
    return countriesMap[countryCode].region
  },
  getRegionList: function() {
    var regionSet = new Set();
    countries.map(country => {
      regionSet.add(country.region_slug)
    });
    var regionList = Array.from(regionSet);
    return regionList
  },
  getCurrency: function(code) {
    var countryCode = code.toUpperCase();
    if(!countriesMap[countryCode]) return null;
    return {
      currency_code: countriesMap[countryCode].currency_code,
      currency_symbol: countriesMap[countryCode].currency_symbol,
      currency_name: countriesMap[countryCode].currency_name
    }
  }
};
