const database = 'privatelearningv2';
const collection = 'employee-records';

use(database);

db.createCollection(collection);
const data = [
  {
    "name": "allen",
    "position": "president",
    "salary": 295000
  },
  {
    "name": "kayatanya",
    "position": "superintendent of schools",
    "salary": 275000
  },
  {
    "name": "cathy",
    "position": "chief",
    "salary": 230743
  },
  {
    "name": "bernard",
    "position": "medical officer psych",
    "salary": 206000
  },
  {
    "name": "elspeth",
    "position": "medical officer psych",
    "salary": 206000
  },
  {
    "name": "vincent",
    "position": "mayor",
    "salary": 200000
  },
  {
    "name": "kwame",
    "position": "chairman",
    "salary": 190000
  },
  {
    "name": "philip",
    "position": "executive director",
    "salary": 188692
  },
  {
    "name": "ginnie",
    "position": "executive director",
    "salary": 188044
  },
  {
    "name": "nilda",
    "position": "medical officer (psychiatry)",
    "salary": 188027
  },
  {
    "name": "kenneth",
    "position": "fire chief",
    "salary": 187302
  },
  {
    "name": "jeffrey",
    "position": "dir of the ctr for wf str & ec",
    "salary": 186911
  },
  {
    "name": "craig",
    "position": "general counsel",
    "salary": 186911
  },
  {
    "name": "mark",
    "position": "vp, human resources",
    "salary": 186911
  },
  {
    "name": "beatriz",
    "position": "dep mayor for hlth & hum svcs",
    "salary": 185000
  },
  {
    "name": "paul",
    "position": "deputy mayor",
    "salary": 185000
  },
  {
    "name": "marie",
    "position": "chief medical examiner",
    "salary": 185000
  },
  {
    "name": "joseph",
    "position": "medical officer (medical exami",
    "salary": 183892
  },
  {
    "name": "carolyn",
    "position": "medical officer (medical exami",
    "salary": 183892
  },
  {
    "name": "sheila",
    "position": "chief investment officer",
    "salary": 183677
  },
  {
    "name": "michael",
    "position": "deputy director",
    "salary": 182000
  },
  {
    "name": "mattie",
    "position": "medical officer (psychiatry)",
    "salary": 180604
  },
  {
    "name": "kyung",
    "position": "medical officer (psychiatry)",
    "salary": 180604
  },
  {
    "name": "christopher",
    "position": "medical officer psych",
    "salary": 180000
  },
  {
    "name": "edger",
    "position": "medical officer psych",
    "salary": 180000
  },
  {
    "name": "sarah",
    "position": "deputy chief medical examiner",
    "salary": 180000
  },
  {
    "name": "wanda",
    "position": "medical officer (psychiatry)",
    "salary": 179699
  },
  {
    "name": "sunil",
    "position": "medical officer (medical exami",
    "salary": 179699
  },
  {
    "name": "ollie",
    "position": "director",
    "salary": 179096
  },
  {
    "name": "shawn",
    "position": "director, dept of human res",
    "salary": 179096
  },
  {
    "name": "christopher",
    "position": "chief of staff",
    "salary": 179096
  },
  {
    "name": "irvin",
    "position": "attorney gen for dc",
    "salary": 179096
  },
  {
    "name": "jennifer",
    "position": "acting director",
    "salary": 179096
  },
  {
    "name": "mohammad",
    "position": "director department of health",
    "salary": 179096
  },
  {
    "name": "wayne",
    "position": "director",
    "salary": 179096
  },
  {
    "name": "hosanna",
    "position": "state superintendent of educ",
    "salary": 179096
  },
  {
    "name": "victor",
    "position": "deputy mayor plan econ dev",
    "salary": 179096
  },
  {
    "name": "de'shawn",
    "position": "acting deputy mayor",
    "salary": 179096
  },
  {
    "name": "erie",
    "position": "general counsel",
    "salary": 178500
  },
  {
    "name": "alfred",
    "position": "chief of staff",
    "salary": 178178
  },
  {
    "name": "steven",
    "position": "managing dir of finance",
    "salary": 178010
  },
  {
    "name": "jonathan",
    "position": "ceo, community coll initiativ",
    "salary": 178010
  },
  {
    "name": "stephen",
    "position": "director of mental health",
    "salary": 177650
  },
  {
    "name": "george",
    "position": "interim chief financial office",
    "salary": 176000
  },
  {
    "name": "farooq",
    "position": "medical officer psych",
    "salary": 175100
  },
  {
    "name": "steven",
    "position": "medical officer psych",
    "salary": 175100
  },
  {
    "name": "bennie",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "betsy",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "john",
    "position": "medical officer neurology",
    "salary": 174417
  },
  {
    "name": "robbyn",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "karen",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "ann",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "andrew",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "gerard",
    "position": "medical officer (psychiatry)",
    "salary": 174417
  },
  {
    "name": "allen",
    "position": "city administrator",
    "salary": 295000
  },
  {
    "name": "katherine",
    "position": "medical officer psych",
    "salary": 200000
  },
  {
    "name": "natwar",
    "position": "chief financial officer",
    "salary": 199700
  },
  {
    "name": "loretta",
    "position": "workers compensation recipient",
    "salary": 197808
  },
  {
    "name": "graeme",
    "position": "act provost & vp acd aff",
    "salary": 196257
  },
  {
    "name": "david",
    "position": "medical director",
    "salary": 193125
  },
  {
    "name": "warren",
    "position": "chief of staff",
    "salary": 193125
  },
  {
    "name": "eric",
    "position": "executive director",
    "salary": 193125
  },
  {
    "name": "tyler",
    "position": "medical officer psych",
    "salary": 190550
  },
  {
    "name": "kumudini",
    "position": "medical officer (psychiatry)",
    "salary": 174408
  },
  {
    "name": "thomas",
    "position": "special projects coordinator",
    "salary": 174000
  },
  {
    "name": "michael",
    "position": "assistant chief",
    "salary": 173757
  },
  {
    "name": "peter",
    "position": "assistant chief",
    "salary": 173757
  },
  {
    "name": "t",
    "position": "medical officer (psychiatry)",
    "salary": 172101
  },
  {
    "name": "benjamin",
    "position": "workers compensation recipient",
    "salary": 171517
  },
  {
    "name": "sylvia",
    "position": "medical officer (psychiatry)",
    "salary": 170938
  },
  {
    "name": "syed",
    "position": "medical officer (psychiatry)",
    "salary": 170344
  },
  {
    "name": "robert",
    "position": "medical officer (psychiatry)",
    "salary": 170344
  },
  {
    "name": "nicole",
    "position": "medical officer (psychiatry)",
    "salary": 170344
  },
  {
    "name": "lisa",
    "position": "chief of staff",
    "salary": 170000
  },
  {
    "name": "nathaniel",
    "position": "deputy superintendent",
    "salary": 170000
  },
  {
    "name": "laura",
    "position": "director",
    "salary": 170000
  },
  {
    "name": "robert",
    "position": "acting director",
    "salary": 170000
  },
  {
    "name": "henry",
    "position": "medical officer opthal",
    "salary": 168378
  },
  {
    "name": "nancy",
    "position": "administrative librarian",
    "salary": 167200
  },
  {
    "name": "abayomi",
    "position": "medical officer (psychiatry)",
    "salary": 167062
  },
  {
    "name": "kyleeann",
    "position": "medical officer (psychiatry)",
    "salary": 167051
  },
  {
    "name": "carmen",
    "position": "medical officer (psychiatry)",
    "salary": 167003
  },
  {
    "name": "kenneth",
    "position": "medical officer (psychiatry)",
    "salary": 166995
  },
  {
    "name": "saleha",
    "position": "medical officer (psychiatry)",
    "salary": 166995
  },
  {
    "name": "anjali",
    "position": "medical officer (psychiatry)",
    "salary": 166370
  },
  {
    "name": "umar",
    "position": "medical officer (psychiatry)",
    "salary": 166370
  },
  {
    "name": "benjamin",
    "position": "medical officer (psychiatry)",
    "salary": 166370
  },
  {
    "name": "syed",
    "position": "medical officer general practi",
    "salary": 165842
  },
  {
    "name": "kenneth",
    "position": "assistant fire chief srvs",
    "salary": 165306
  },
  {
    "name": "david",
    "position": "dir of human services",
    "salary": 165200
  },
  {
    "name": "stephen",
    "position": "deputy cfo otr",
    "salary": 165162
  },
  {
    "name": "lisa",
    "position": "acting director",
    "salary": 165000
  },
  {
    "name": "brian",
    "position": "general counsel",
    "salary": 165000
  },
  {
    "name": "terry",
    "position": "director",
    "salary": 165000
  },
  {
    "name": "millicent",
    "position": "director, homeland sec & ema",
    "salary": 165000
  },
  {
    "name": "gregory",
    "position": "deputy dir",
    "salary": 164800
  },
  {
    "name": "samia",
    "position": "supervisor medical officer",
    "salary": 164800
  },
  {
    "name": "karen",
    "position": "dental officer",
    "salary": 164800
  },
  {
    "name": "barbara",
    "position": "vp of faciliites & real esta",
    "salary": 164686
  },
  {
    "name": "eric",
    "position": "director of business operation",
    "salary": 164467
  }
];
db[collection].insertMany(data);
