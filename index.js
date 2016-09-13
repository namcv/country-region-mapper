'use strict'
var countries = [
  {
    "code": "DZ",
    "name": "Algeria",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "AO",
    "name": "Angola",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "BJ",
    "name": "Benin",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "BW",
    "name": "Botswana",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "BF",
    "name": "Burkina Faso",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "BI",
    "name": "Burundi",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "CM",
    "name": "Cameroon",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "CV",
    "name": "Cape Verde",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "TD",
    "name": "Chad",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "KM",
    "name": "Comoros",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "CI",
    "name": "Cote d'Ivoire",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "CD",
    "name": "Democratic Republic of the Congo",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "DJ",
    "name": "Djibouti",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "EG",
    "name": "Egypt",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ER",
    "name": "Eritrea",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ET",
    "name": "Ethiopia",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "GA",
    "name": "Gabon Republic",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "GM",
    "name": "Gambia",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "GN",
    "name": "Guinea",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "KE",
    "name": "Kenya",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "LS",
    "name": "Lesotho",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "MG",
    "name": "Madagascar",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "MW",
    "name": "Malawi",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ML",
    "name": "Mali",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "MR",
    "name": "Mauritania",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "MU",
    "name": "Mauritius",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "YT",
    "name": "Mayotte",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "MA",
    "name": "Morocco",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "MZ",
    "name": "Mozambique",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "NA",
    "name": "Namibia",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "NE",
    "name": "Niger",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "NG",
    "name": "Nigeria",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "CG",
    "name": "Republic of the Congo",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "RE",
    "name": "Reunion",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "RW",
    "name": "Rwanda",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "US",
    "name": "Saint Helena",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ST",
    "name": "Sao Tome and Principe",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "SN",
    "name": "Senegal",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "SC",
    "name": "Seychelles",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "SL",
    "name": "Sierra Leone",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "SO",
    "name": "Somalia",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ZA",
    "name": "South Africa",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "SZ",
    "name": "Swaziland",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "TZ",
    "name": "Tanzania",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "TG",
    "name": "Togo",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "TN",
    "name": "Tunisia",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "UG",
    "name": "Uganda",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ZM",
    "name": "Zambia",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe",
    "region": "Africa",
    "region_slug": "africa"
  },
  {
    "code": "AI",
    "name": "Anguilla",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "AR",
    "name": "Argentina",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "AW",
    "name": "Aruba",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "BS",
    "name": "Bahamas",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "BB",
    "name": "Barbados",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "BZ",
    "name": "Belize",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "BM",
    "name": "Bermuda",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "BO",
    "name": "Bolivia",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "BR",
    "name": "Brazil",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "VG",
    "name": "British Virgin Islands",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "CA",
    "name": "Canada",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "KY",
    "name": "Cayman Islands",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "CL",
    "name": "Chile",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "CO",
    "name": "Colombia",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "CR",
    "name": "Costa Rica",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "DM",
    "name": "Dominica",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "DO",
    "name": "Dominican Republic",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "EC",
    "name": "Ecuador",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "SV",
    "name": "El Salvador",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "FK",
    "name": "Falkland Islands",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "GF",
    "name": "French Guiana",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "GL",
    "name": "Greenland",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "GD",
    "name": "Grenada",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "GP",
    "name": "Guadeloupe",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "GT",
    "name": "Guatemala",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "GY",
    "name": "Guyana",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "HN",
    "name": "Honduras",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "JM",
    "name": "Jamaica",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "MQ",
    "name": "Martinique",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "MX",
    "name": "Mexico",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "MS",
    "name": "Montserrat",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "AN",
    "name": "Netherlands Antilles",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "NI",
    "name": "Nicaragua",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "PA",
    "name": "Panama",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "PY",
    "name": "Paraguay",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "PE",
    "name": "Peru",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "KN",
    "name": "Sain Kitts and Nevis",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "LC",
    "name": "Saint Lucia",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "SR",
    "name": "Suriname",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "CW",
    "name": "Turks and Caicos",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "US",
    "name": "United States",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "UY",
    "name": "Uruguay",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "VE",
    "name": "Venezuela",
    "region": "Americas",
    "region_slug": "americas"
  },
  {
    "code": "AM",
    "name": "Armenia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "AU",
    "name": "Australia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "BH",
    "name": "Bahrain",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "BT",
    "name": "Bhutan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "BN",
    "name": "Brunei",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "KH",
    "name": "Cambodia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "CN",
    "name": "China",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "CK",
    "name": "Cook Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "FJ",
    "name": "Fiji",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "PF",
    "name": "French Polynesia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "HK",
    "name": "Hong Kong",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "IN",
    "name": "India",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "ID",
    "name": "Indonesia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "IL",
    "name": "Israel",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "JP",
    "name": "Japan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "JO",
    "name": "Jordan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "KI",
    "name": "Kiribati",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "KW",
    "name": "Kuwait",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "LA",
    "name": "Laos",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "MY",
    "name": "Malaysia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "MV",
    "name": "Maldives",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "MH",
    "name": "Marshall Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "FM",
    "name": "Federated States of Micronesia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "MN",
    "name": "Mongolia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "NR",
    "name": "Nauru",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "NP",
    "name": "Nepal",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "NC",
    "name": "New Caledonia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "NZ",
    "name": "New Zealand",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "NU",
    "name": "Niue",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "NF",
    "name": "Norfolk Island",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "OM",
    "name": "Oman",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "PW",
    "name": "Palau",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "PH",
    "name": "Philippines",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "PN",
    "name": "Pitcairn Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "QA",
    "name": "Qatar",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "WS",
    "name": "Samoa",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "SG",
    "name": "Singapore",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "SB",
    "name": "Solomon Islands",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "LK",
    "name": "Sri Lanka",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "TW",
    "name": "Taiwan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "TJ",
    "name": "Tajikistan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "TH",
    "name": "Thailand",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "TO",
    "name": "Tonga",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "TM",
    "name": "Turkmenistan",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "TV",
    "name": "Tuvalu",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "VU",
    "name": "Vanuatu",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "VN",
    "name": "Vietnam",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "YE",
    "name": "Yemen",
    "region": "Asia Pacific",
    "region_slug": "asia_pacific"
  },
  {
    "code": "AL",
    "name": "Albania",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "AD",
    "name": "Andorra",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "AT",
    "name": "Austria",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan Republic",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "BY",
    "name": "Belarus",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "BE",
    "name": "Belgium",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "BG",
    "name": "Bulgaria",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "HR",
    "name": "Croatia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "CY",
    "name": "Cyprus",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "CZ",
    "name": "Czech Republic",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "DK",
    "name": "Denmark",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "EE",
    "name": "Estonia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "FO",
    "name": "Faroe Islands",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "FI",
    "name": "Finland",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "FR",
    "name": "France",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "US",
    "name": "Georgia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "DE",
    "name": "Germany",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "GI",
    "name": "Gibraltar",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "GR",
    "name": "Greece",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "HU",
    "name": "Hungary",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "IS",
    "name": "Iceland",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "IE",
    "name": "Ireland",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "IT",
    "name": "Italy",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "LV",
    "name": "Latvia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "LI",
    "name": "Liechtenstein",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "LT",
    "name": "Lithuania",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "LU",
    "name": "Luxembourg",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "MK",
    "name": "Macedonia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "MT",
    "name": "Malta",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "MD",
    "name": "Moldova",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "MC",
    "name": "Monaco",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "ME",
    "name": "Montenegro",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "NL",
    "name": "Netherlands",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "NO",
    "name": "Norway",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "PL",
    "name": "Poland",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "PT",
    "name": "Portugal",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "RO",
    "name": "Romania",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "RU",
    "name": "Russia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "SM",
    "name": "San Marino",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "RS",
    "name": "Serbia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "SK",
    "name": "Slovakia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "SI",
    "name": "Slovenia",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "ES",
    "name": "Spain",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "SE",
    "name": "Sweden",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "CH",
    "name": "Switzerland",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "UA",
    "name": "Ukraine",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "GB",
    "name": "United Kingdom",
    "region": "Europe",
    "region_slug": "europe"
  },
  {
    "code": "VA",
    "name": "Vatican City",
    "region": "Europe",
    "region_slug": "europe"
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
    },
    getRegionList: function() {
      var regionSet = new Set();
      countries.map(country => {
        regionSet.add(country.region_slug)
      });
      var regionList = Array.from(regionSet);
      return regionList
    }
};
