'use strict'
var countries = [
  {
    "code": "DZ",
    "name": "Algeria",
    "region": "Africa"
  },
  {
    "code": "AO",
    "name": "Angola",
    "region": "Africa"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "region": "Africa"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "region": "Africa"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "region": "Africa"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "region": "Africa"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "region": "Africa"
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "region": "Africa"
  },
  {
    "code": "TD",
    "name": "Chad",
    "region": "Africa"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "region": "Africa"
  },
  {
    "code": "CI",
    "name": "Cote d'Ivoire",
    "region": "Africa"
  },
  {
    "code": "CD",
    "name": "Democratic Republic of the Congo",
    "region": "Africa"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "region": "Africa"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "region": "Africa"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "region": "Africa"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "region": "Africa"
  },
  {
    "code": "GA",
    "name": "Gabon Republic",
    "region": "Africa"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "region": "Africa"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "region": "Africa"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "region": "Africa"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "region": "Africa"
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "region": "Africa"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "region": "Africa"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "region": "Africa"
  },
  {
    "code": "ML",
    "name": "Mali",
    "region": "Africa"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "region": "Africa"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "region": "Africa"
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "region": "Africa"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "region": "Africa"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "region": "Africa"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "region": "Africa"
  },
  {
    "code": "NE",
    "name": "Niger",
    "region": "Africa"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "region": "Africa"
  },
  {
    "code": "CG",
    "name": "Republic of the Congo",
    "region": "Africa"
  },
  {
    "code": "RE",
    "name": "Reunion",
    "region": "Africa"
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "region": "Africa"
  },
  {
    "code": "US",
    "name": "Saint Helena",
    "region": "Africa"
  },
  {
    "code": "ST",
    "name": "Sao Tome and Principe",
    "region": "Africa"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "region": "Africa"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "region": "Africa"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "region": "Africa"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "region": "Africa"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "region": "Africa"
  },
  {
    "code": "SZ",
    "name": "Swaziland",
    "region": "Africa"
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "region": "Africa"
  },
  {
    "code": "TG",
    "name": "Togo",
    "region": "Africa"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "region": "Africa"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "region": "Africa"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "region": "Africa"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "region": "Africa"
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "region": "Americas"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "region": "Americas"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "region": "Americas"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "region": "Americas"
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "region": "Americas"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "region": "Americas"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "region": "Americas"
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "region": "Americas"
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "region": "Americas"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "region": "Americas"
  },
  {
    "code": "VG",
    "name": "British Virgin Islands",
    "region": "Americas"
  },
  {
    "code": "CA",
    "name": "Canada",
    "region": "Americas"
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "region": "Americas"
  },
  {
    "code": "CL",
    "name": "Chile",
    "region": "Americas"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "region": "Americas"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "region": "Americas"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "region": "Americas"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "region": "Americas"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "region": "Americas"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "region": "Americas"
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "region": "Americas"
  },
  {
    "code": "GF",
    "name": "French Guiana",
    "region": "Americas"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "region": "Americas"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "region": "Americas"
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "region": "Americas"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "region": "Americas"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "region": "Americas"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "region": "Americas"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "region": "Americas"
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "region": "Americas"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "region": "Americas"
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "region": "Americas"
  },
  {
    "code": "AN",
    "name": "Netherlands Antilles",
    "region": "Americas"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "region": "Americas"
  },
  {
    "code": "PA",
    "name": "Panama",
    "region": "Americas"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "region": "Americas"
  },
  {
    "code": "PE",
    "name": "Peru",
    "region": "Americas"
  },
  {
    "code": "KN",
    "name": "Sain Kitts and Nevis",
    "region": "Americas"
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "region": "Americas"
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "region": "Americas"
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "region": "Americas"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "region": "Americas"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "region": "Americas"
  },
  {
    "code": "CW",
    "name": "Turks and Caicos",
    "region": "Americas"
  },
  {
    "code": "US",
    "name": "United States",
    "region": "Americas"
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "region": "Americas"
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "region": "Americas"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "region": "Asia Pacific"
  },
  {
    "code": "AU",
    "name": "Australia",
    "region": "Asia Pacific"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "region": "Asia Pacific"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "region": "Asia Pacific"
  },
  {
    "code": "BN",
    "name": "Brunei",
    "region": "Asia Pacific"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "region": "Asia Pacific"
  },
  {
    "code": "CN",
    "name": "China",
    "region": "Asia Pacific"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "region": "Asia Pacific"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "region": "Asia Pacific"
  },
  {
    "code": "PF",
    "name": "French Polynesia",
    "region": "Asia Pacific"
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "region": "Asia Pacific"
  },
  {
    "code": "IN",
    "name": "India",
    "region": "Asia Pacific"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "region": "Asia Pacific"
  },
  {
    "code": "IL",
    "name": "Israel",
    "region": "Asia Pacific"
  },
  {
    "code": "JP",
    "name": "Japan",
    "region": "Asia Pacific"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "region": "Asia Pacific"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "region": "Asia Pacific"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "region": "Asia Pacific"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "region": "Asia Pacific"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "region": "Asia Pacific"
  },
  {
    "code": "LA",
    "name": "Laos",
    "region": "Asia Pacific"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "region": "Asia Pacific"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "region": "Asia Pacific"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "region": "Asia Pacific"
  },
  {
    "code": "FM",
    "name": "Federated States of Micronesia",
    "region": "Asia Pacific"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "region": "Asia Pacific"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "region": "Asia Pacific"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "region": "Asia Pacific"
  },
  {
    "code": "NC",
    "name": "New Caledonia",
    "region": "Asia Pacific"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "region": "Asia Pacific"
  },
  {
    "code": "NU",
    "name": "Niue",
    "region": "Asia Pacific"
  },
  {
    "code": "NF",
    "name": "Norfolk Island",
    "region": "Asia Pacific"
  },
  {
    "code": "OM",
    "name": "Oman",
    "region": "Asia Pacific"
  },
  {
    "code": "PW",
    "name": "Palau",
    "region": "Asia Pacific"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "region": "Asia Pacific"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "region": "Asia Pacific"
  },
  {
    "code": "PN",
    "name": "Pitcairn Islands",
    "region": "Asia Pacific"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "region": "Asia Pacific"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "region": "Asia Pacific"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "region": "Asia Pacific"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "region": "Asia Pacific"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "region": "Asia Pacific"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "region": "Asia Pacific"
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "region": "Asia Pacific"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "region": "Asia Pacific"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "region": "Asia Pacific"
  },
  {
    "code": "TO",
    "name": "Tonga",
    "region": "Asia Pacific"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "region": "Asia Pacific"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "region": "Asia Pacific"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "region": "Asia Pacific"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "region": "Asia Pacific"
  },
  {
    "code": "VN",
    "name": "Vietnam",
    "region": "Asia Pacific"
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna",
    "region": "Asia Pacific"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "region": "Asia Pacific"
  },
  {
    "code": "AL",
    "name": "Albania",
    "region": "Europe"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "region": "Europe"
  },
  {
    "code": "AT",
    "name": "Austria",
    "region": "Europe"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan Republic",
    "region": "Europe"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "region": "Europe"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "region": "Europe"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "region": "Europe"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "region": "Europe"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "region": "Europe"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "region": "Europe"
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "region": "Europe"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "region": "Europe"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "region": "Europe"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "region": "Europe"
  },
  {
    "code": "FI",
    "name": "Finland",
    "region": "Europe"
  },
  {
    "code": "FR",
    "name": "France",
    "region": "Europe"
  },
  {
    "code": "US",
    "name": "Georgia",
    "region": "Europe"
  },
  {
    "code": "DE",
    "name": "Germany",
    "region": "Europe"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "region": "Europe"
  },
  {
    "code": "GR",
    "name": "Greece",
    "region": "Europe"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "region": "Europe"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "region": "Europe"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "region": "Europe"
  },
  {
    "code": "IT",
    "name": "Italy",
    "region": "Europe"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "region": "Europe"
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "region": "Europe"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "region": "Europe"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "region": "Europe"
  },
  {
    "code": "MK",
    "name": "Macedonia",
    "region": "Europe"
  },
  {
    "code": "MT",
    "name": "Malta",
    "region": "Europe"
  },
  {
    "code": "MD",
    "name": "Moldova",
    "region": "Europe"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "region": "Europe"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "region": "Europe"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "region": "Europe"
  },
  {
    "code": "NO",
    "name": "Norway",
    "region": "Europe"
  },
  {
    "code": "PL",
    "name": "Poland",
    "region": "Europe"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "region": "Europe"
  },
  {
    "code": "RO",
    "name": "Romania",
    "region": "Europe"
  },
  {
    "code": "RU",
    "name": "Russia",
    "region": "Europe"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "region": "Europe"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "region": "Europe"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "region": "Europe"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "region": "Europe"
  },
  {
    "code": "ES",
    "name": "Spain",
    "region": "Europe"
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "region": "Europe"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "region": "Europe"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "region": "Europe"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "region": "Europe"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "region": "Europe"
  },
  {
    "code": "VA",
    "name": "Vatican City",
    "region": "Europe"
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
   	getRegion: function(code) {
   		var countryCode = code.toUpperCase();
   		if(!countriesMap[countryCode]) return null;
   		return countriesMap[countryCode].region
   	}
};
