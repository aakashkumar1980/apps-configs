const database = 'privatelearningv2';
const collection = 'hired-records';

use(database);
db.createCollection(collection);
const data = [
  {
    "name": "cathy",
    "hired": 1990
  },
  {
    "name": "bernard",
    "hired": 2008
  },
  {
    "name": "elspeth",
    "hired": 2010
  },
  {
    "name": "vincent",
    "hired": 2005
  },
  {
    "name": "kumudini",
    "hired": 2008
  },
  {
    "name": "thomas",
    "hired": 2008
  },
  {
    "name": "michael",
    "hired": 1989
  },
  {
    "name": "peter",
    "hired": 1989
  },
  {
    "name": "t",
    "hired": 2005
  },
  {
    "name": "benjamin",
    "hired": 1972
  },
  {
    "name": "sylvia",
    "hired": 2007
  },
  {
    "name": "syed",
    "hired": 2005
  },
  {
    "name": "robert",
    "hired": 1991
  },
  {
    "name": "nicole",
    "hired": 2007
  },
  {
    "name": "lisa",
    "hired": 2007
  },
  {
    "name": "nathaniel",
    "hired": 2007
  },
  {
    "name": "laura",
    "hired": 2007
  },
  {
    "name": "robert",
    "hired": 2004
  },
  {
    "name": "henry",
    "hired": 1987
  },
  {
    "name": "nancy",
    "hired": 2006
  },
  {
    "name": "abayomi",
    "hired": 2000
  },
  {
    "name": "kyleeann",
    "hired": 2008
  },
  {
    "name": "carmen",
    "hired": 1990
  },
  {
    "name": "kenneth",
    "hired": 1987
  },
  {
    "name": "saleha",
    "hired": 1988
  },
  {
    "name": "anjali",
    "hired": 1999
  },
  {
    "name": "umar",
    "hired": 1996
  },
  {
    "name": "benjamin",
    "hired": 1988
  },
  {
    "name": "syed",
    "hired": 1983
  },
  {
    "name": "kenneth",
    "hired": 1982
  },
  {
    "name": "david",
    "hired": 2011
  },
  {
    "name": "stephen",
    "hired": 2008
  },
  {
    "name": "lisa",
    "hired": 2004
  },
  {
    "name": "brian",
    "hired": 1985
  },
  {
    "name": "terry",
    "hired": 2008
  },
  {
    "name": "millicent",
    "hired": 2003
  },
  {
    "name": "gregory",
    "hired": 2011
  },
  {
    "name": "samia",
    "hired": 2010
  },
  {
    "name": "karen",
    "hired": 1989
  },
  {
    "name": "barbara",
    "hired": 1980
  },
  {
    "name": "eric",
    "hired": 1983
  },
  {
    "name": "katherine",
    "hired": 2008
  },
  {
    "name": "natwar",
    "hired": 1997
  },
  {
    "name": "loretta",
    "hired": 1984
  },
  {
    "name": "graeme",
    "hired": 2008
  },
  {
    "name": "david",
    "hired": 2011
  },
  {
    "name": "warren",
    "hired": 2011
  },
  {
    "name": "eric",
    "hired": 2007
  },
  {
    "name": "tyler",
    "hired": 2008
  },
  {
    "name": "kwame",
    "hired": 2005
  },
  {
    "name": "philip",
    "hired": 2000
  },
  {
    "name": "ginnie",
    "hired": 2006
  },
  {
    "name": "nilda",
    "hired": 1987
  },
  {
    "name": "kenneth",
    "hired": 2003
  },
  {
    "name": "jeffrey",
    "hired": 2009
  },
  {
    "name": "craig",
    "hired": 2009
  },
  {
    "name": "mark",
    "hired": 2008
  },
  {
    "name": "beatriz",
    "hired": 2011
  },
  {
    "name": "paul",
    "hired": 2009
  },
  {
    "name": "marie",
    "hired": 1985
  },
  {
    "name": "joseph",
    "hired": 1997
  },
  {
    "name": "carolyn",
    "hired": 2005
  },
  {
    "name": "sheila",
    "hired": 1991
  },
  {
    "name": "michael",
    "hired": 2011
  },
  {
    "name": "mattie",
    "hired": 1989
  },
  {
    "name": "kyung",
    "hired": 1987
  },
  {
    "name": "christopher",
    "hired": 2011
  },
  {
    "name": "edger",
    "hired": 2007
  },
  {
    "name": "sarah",
    "hired": 2000
  },
  {
    "name": "wanda",
    "hired": 2003
  },
  {
    "name": "sunil",
    "hired": 2009
  },
  {
    "name": "ollie",
    "hired": 2001
  },
  {
    "name": "shawn",
    "hired": 2011
  },
  {
    "name": "christopher",
    "hired": 2011
  },
  {
    "name": "irvin",
    "hired": 2011
  },
  {
    "name": "jennifer",
    "hired": 1982
  },
  {
    "name": "mohammad",
    "hired": 1991
  },
  {
    "name": "wayne",
    "hired": 2011
  },
  {
    "name": "hosanna",
    "hired": 2011
  },
  {
    "name": "victor",
    "hired": 2011
  },
  {
    "name": "de'shawn",
    "hired": 2011
  },
  {
    "name": "erie",
    "hired": 2008
  },
  {
    "name": "alfred",
    "hired": 1987
  },
  {
    "name": "steven",
    "hired": 2009
  },
  {
    "name": "jonathan",
    "hired": 2009
  },
  {
    "name": "stephen",
    "hired": 2006
  },
  {
    "name": "george",
    "hired": 1999
  },
  {
    "name": "farooq",
    "hired": 2000
  },
  {
    "name": "steven",
    "hired": 2006
  },
  {
    "name": "bennie",
    "hired": 1988
  },
  {
    "name": "betsy",
    "hired": 1987
  },
  {
    "name": "john",
    "hired": 2001
  },
  {
    "name": "robbyn",
    "hired": 1987
  },
  {
    "name": "karen",
    "hired": 2008
  },
  {
    "name": "ann",
    "hired": 1965
  },
  {
    "name": "andrew",
    "hired": 2003
  },
  {
    "name": "gerard",
    "hired": 1987
  },
  {
    "name": "allen",
    "hired": 2004
  },
  {
    "name": "allen",
    "hired": 2008
  },
  {
    "name": "kayatanya",
    "hired": 2007
  }
];
db[collection].insertMany(data);
