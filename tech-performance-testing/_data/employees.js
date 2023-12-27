const database = 'privatelearningv2';
const collection = 'employees';

use(database);

db.createCollection(collection);
const data = [
  {
    "name": "allen lew",
    "position": "city administrator",
    "salary": 295000
  },
  {
    "name": "allen sessoms",
    "position": "president",
    "salary": 295000
  },
  {
    "name": "graeme baxter",
    "position": "act provost & vp acd aff",
    "salary": 196257
  },
  {
    "name": "jesus aguirre",
    "position": "dir dept of parks & recreation",
    "salary": 164129
  },
  {
    "name": "donald martin",
    "position": "battalion fire chief",
    "salary": 116360
  },
  {
    "name": "bryan weingard",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "tondelaya swinson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "herbert newman",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "darren reaves",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "peter schumacher",
    "position": "officer ert personnel",
    "salary": 74994
  },
  {
    "name": "larry seay",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "lisa nesbit",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "rolando paige",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "paul szala",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "michael newton",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "jeffrey hull",
    "position": "battalion fire chief",
    "salary": 116360
  },
  {
    "name": "ralph sampson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "albert williams",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "john strader",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "james steinbach",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "russell mullins",
    "position": "officer assistant instructor",
    "salary": 74994
  },
  {
    "name": "edward miller",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "dennis stewart",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "marcus thomas",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "priscilla pate",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "janine mayberry",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "robert callahan",
    "position": "battalion fire chief",
    "salary": 116360
  },
  {
    "name": "eliseo medina",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "monica waleed",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "john muniz",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "pierre lesesne",
    "position": "master patrol officer",
    "salary": 74994
  },
  {
    "name": "jaime ojeda",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "michael smith",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "reginald richardson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "anthony ruchak",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "toussaint wallace",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "ralph richardson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "shelly nickelson",
    "position": "battalion fire chief",
    "salary": 116360
  },
  {
    "name": "monica coleman",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "carlos richards",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "yudis zuniga",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "thomas miller",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "steven prade",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "ronald robinson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "darron mccallan",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "james mccambry",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "marcus mccauley",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "darren marcus",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "jeffrey herbert",
    "position": "battalion fire chief",
    "salary": 116360
  },
  {
    "name": "tyrone robinson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "mitch ro",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "benjamin velez",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "jose maneechai",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "leonard vaughan",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "matthew mcfadyen",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "tony myers",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "angel rivera",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "wanda robinson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "petheria mciver",
    "position": "crime scene srch ofr",
    "salary": 74994
  },
  {
    "name": "carolyn price",
    "position": "pharmacist",
    "salary": 116080
  },
  {
    "name": "mark mcmillan",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "lacie mcmillan kenney",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "derrick lee",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "perry hoak",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "nicholas deciutiis",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "armando de los santos",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "michael davis",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "gregory davis",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "billie davis",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "rodney danielsi",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "judith brown",
    "position": "financial analyst",
    "salary": 115995
  },
  {
    "name": "alfredo cruz",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "allen gant",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "thomas jefferson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "howard dunlap",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "andre hall",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "sharon hall",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "kevin halpin",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "courtney hart",
    "position": "master patrol officer",
    "salary": 74994
  },
  {
    "name": "michael glean",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "victor haskins",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "james jackson",
    "position": "facilities operations manager",
    "salary": 115792
  },
  {
    "name": "cameron hawkins",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "dora garcia",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "juan johnson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "alton ellis",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "wendell kenney",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "michelle johnson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "laverne battle",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "walter brown",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "brian bradley",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "john brown",
    "position": "officer ert personnel",
    "salary": 74994
  },
  {
    "name": "jody harrington",
    "position": "attorney advisor",
    "salary": 115662
  },
  {
    "name": "jerry bethea",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "derrick brown",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "sean dennis",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "angie ilarraza",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "irene hughes",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "thomas ellingsworth",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "claude jackson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "darron jackson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "tracie jackson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "denise james",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "sarah knapp",
    "position": "trial attorney",
    "salary": 115662
  },
  {
    "name": "kenneth dzidzienyo",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "monique creek",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "eduardo ashby",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "christopher johnson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "timothy andes",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "kevin kennedy",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "ramon clark",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "billy allen",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "linda allen",
    "position": "desk sergeant",
    "salary": 74994
  },
  {
    "name": "meleatha calhoun",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "james staton",
    "position": "acting director",
    "salary": 164000
  },
  {
    "name": "suzanne fenzel",
    "position": "trial attorney",
    "salary": 115662
  },
  {
    "name": "jeffrey cadle",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "richard khoury",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "carlos abreu",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "demetrius cole",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "carlos amaya",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "eric coates",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "aaron allen",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "miguel correa",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "morris johnson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "kenneth johnson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "rudolf schreiber",
    "position": "attorney advisor",
    "salary": 115662
  },
  {
    "name": "kimberly craig",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "gregory evely",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "clinton brown",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "edwin buckner",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "stephanie gaddie",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "robert bryant",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "derrick hyman",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "james anderson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "samuel gaines",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "jose casiano",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "mark alberta",
    "position": "trial attorney",
    "salary": 115662
  },
  {
    "name": "sherman hodges",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "daryl forte",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "algernon fogle",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "gwendolyn floyd-wilson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "gwendolyn flanigan",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "michael howard",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "andrew chandler",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "annette hicks",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "yamit chaparro",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "tracie cannon",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "andrea littlejohn",
    "position": "trial attorney",
    "salary": 115662
  },
  {
    "name": "wanda johnson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "karrissa johnson-hines",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "lisa jones",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "george chester",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "warren jefferson",
    "position": "officer",
    "salary": 74994
  },
  {
    "name": "cedric hawkins",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "carl white",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "john mcknight",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "thurman powell",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "scottie evans",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "wayne williams",
    "position": "information technology specialist",
    "salary": 115648
  },
  {
    "name": "eldrick creamer",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "charlotte colvin",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "howard wade",
    "position": "officer",
    "salary": 74984
  },
  {
    "name": "vincent slater",
    "position": "customer service representative",
    "salary": 74888
  },
  {
    "name": "naila tengra",
    "position": "budget administration analyst",
    "salary": 74888
  },
  {
    "name": "musili akinshemoyin",
    "position": "budget analyst",
    "salary": 74888
  },
  {
    "name": "tonia lee",
    "position": "information technology specialist",
    "salary": 74888
  },
  {
    "name": "denise moreno",
    "position": "financial manager",
    "salary": 74888
  },
  {
    "name": "jilu lenji",
    "position": "budget analyst",
    "salary": 74888
  },
  {
    "name": "warren farrar",
    "position": "customer service representative",
    "salary": 74888
  },
  {
    "name": "robbie smith",
    "position": "information technology specialist",
    "salary": 115648
  },
  {
    "name": "jerome omoighe",
    "position": "accountant",
    "salary": 74888
  },
  {
    "name": "brandon solomon",
    "position": "financial manager",
    "salary": 74888
  },
  {
    "name": "yolonda catalan",
    "position": "customer service representative",
    "salary": 74888
  },
  {
    "name": "aaron gumbs",
    "position": "grants management specialist",
    "salary": 74888
  },
  {
    "name": "terese fomby",
    "position": "budget analyst",
    "salary": 74888
  },
  {
    "name": "michelle earles",
    "position": "program analyst",
    "salary": 74888
  },
  {
    "name": "seblewengel mulaw",
    "position": "budget analyst",
    "salary": 74888
  },
  {
    "name": "derrica wilson",
    "position": "chief of security",
    "salary": 74888
  },
  {
    "name": "tijuana harris watson",
    "position": "unit manager",
    "salary": 74888
  },
  {
    "name": "brandon perry",
    "position": "financial manager",
    "salary": 74888
  },
  {
    "name": "kalyan jillumudi",
    "position": "information technology specialist",
    "salary": 115648
  },
  {
    "name": "denise anthony",
    "position": "nurse",
    "salary": 74837
  },
  {
    "name": "donna cauthorne",
    "position": "human resources specialist",
    "salary": 74800
  },
  {
    "name": "kenneth kittrell",
    "position": "fire arson investigator armed",
    "salary": 74651
  },
  {
    "name": "anthony hamilton",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "wilber dantzler",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "jeffrey fleming",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "david tinsley",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "thomas fulcher",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "john ellis",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "michael fulcher",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "l cooney",
    "position": "structural engineer",
    "salary": 115648
  },
  {
    "name": "michael gilson",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "theaddeus ellis",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "darryl lloyd",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "matthew weber",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "robert small",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "roderick mitchell",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "paula brown",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "joseph chisholm",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "gregory spriggs",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "joseph speakes",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "kofi asante-duah",
    "position": "toxicologist (risk assessment)",
    "salary": 115648
  },
  {
    "name": "jeffrey brown",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "adrian stokes",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "reginald williams",
    "position": "firefighter vice tech",
    "salary": 74561
  },
  {
    "name": "wayne young",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "terrence wright",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "edward worrell",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "timothy white",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "mark lewis",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "anthony lloyd",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "sydney desilva",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "kiran koyyalamudy",
    "position": "information technology specialist",
    "salary": 115648
  },
  {
    "name": "andre campbell",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "tommy pleasant",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "darryl payden",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "jeffrey freeland",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "timothy lancaster",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "duane dominick",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "beatrix diggs",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "james digregory",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "christopher williams",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "kevin logan",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "lois goslinoski",
    "position": "medical officer med examiner",
    "salary": 163619
  },
  {
    "name": "prashant shah",
    "position": "information technology specialist",
    "salary": 115648
  },
  {
    "name": "wilton gordon",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "kelvin tyree",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "james ashelford",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "ronald cabico",
    "position": "firefighter vice tech",
    "salary": 74561
  },
  {
    "name": "kenneth austin",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "claude brown",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "eric banks",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "toree holmes",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "donald holman",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "brian tennant",
    "position": "firefighter",
    "salary": 74561
  },
  {
    "name": "ray slade",
    "position": "special projects coordinator",
    "salary": 115648
  },
  {
    "name": "edgar burton",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "philip canter",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "james wallace",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "andre hunter",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "russell maffay",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "alfie cary",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "michael rogers",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "kevin rimm",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "darlene brown",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "william smith",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "shohreh khodabakhsh",
    "position": "information technology specialist",
    "salary": 115648
  },
  {
    "name": "anthony lowe",
    "position": "firefighter",
    "salary": 74561
  },
  {
    "name": "kevin conerly",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "donald hicks",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "robert ward",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "rudolph blyther",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "kevin arrington",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "john selestok",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "jeffrey suggs",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "roderick johnson",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "gary mckethan",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "aaron horton",
    "position": "civil engineer",
    "salary": 115644
  },
  {
    "name": "kevin carr",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "calvin walden",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "ruth cade",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "joseph bright",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "james carroll",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "shelia scott",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "james kittrell",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "christopher johnson",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "steven matthews",
    "position": "firefighter tech",
    "salary": 74561
  },
  {
    "name": "paul brown",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "james williams",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "jahi bashir",
    "position": "instructional coach",
    "salary": 74546
  },
  {
    "name": "anna bullock",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "tiffany dyson",
    "position": "librarian",
    "salary": 74546
  },
  {
    "name": "lawrencia cole",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "carmen faulkner",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "johnnie cobb",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "tamara clark",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "grace cooke-thomas",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "suzann amendt",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "lisa campbell",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "christopher cummings",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "lynette smith",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "robert butler",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "devon wade",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "audrey duff",
    "position": "librarian",
    "salary": 74546
  },
  {
    "name": "russell brown",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "suzanne finch",
    "position": "librarian",
    "salary": 74546
  },
  {
    "name": "marion fox",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "saundra bruce",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "marni barron",
    "position": "instructional coach",
    "salary": 74546
  },
  {
    "name": "vanessa ford",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "regis bryant",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "allison d'aguilar",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "phyllis bivens",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "renet dodson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "michael burnell",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "alysha butler",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "adrian burney",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kristin schrauth",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kimberly troy",
    "position": "counselor",
    "salary": 74546
  },
  {
    "name": "tonya davis",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "reginald wilson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "juanita mitchell",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "melissa diamond",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "emily stewart",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "antoynica ryan",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "toval rolston",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "lelia spears",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "frederick sisk",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "h whitseyjohnson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "tera watters",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "glenda waters",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "katrina roundtree",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "gerry scott",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "peter stephan",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "tiffani weaver",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "marcus young",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kyle wheeler",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "paulette walker",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "pamela smart",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "kimberly stalnaker",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "victoria wanielista",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "marisol rodriguez",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kimberly vaugeois",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "marvin lyons",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "jaimee trahan",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "sharon santos",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "rita rosenthal",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "donine wallace",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "lakisha witherspoon",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "willie wigfall",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "tamika witcher",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "shareen smith",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "winfred thomas",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "melanie smallwood",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "olayinka johnson",
    "position": "medical officer (psychiatry)",
    "salary": 163279
  },
  {
    "name": "charles morris",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "april robinson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "chenise gregory",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "michelle manzano",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "hope harrod",
    "position": "literacy coach",
    "salary": 74546
  },
  {
    "name": "lakeisha johnson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "ebiolade koroye",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "eileen gurski",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "merlyne graves",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "wesley mccammon",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "luis pozo-lin",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "lamar west",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "urlkia randolph",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "jaylyn parker",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "justin lessek",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "debra jackson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "ingrid goganious",
    "position": "therapist,speech",
    "salary": 74546
  },
  {
    "name": "tonya kabia",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "anita hughes",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "cicely mcfarlane",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "nicole gibbs",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "deirdre lewis",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "ralph mclean",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "craig hawkins",
    "position": "counselor",
    "salary": 74546
  },
  {
    "name": "david knapp",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "emily henry",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "jimmie roberts",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "currie renwick",
    "position": "librarian",
    "salary": 74546
  },
  {
    "name": "foster joseph",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "bryan hill",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "emory calhoun",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "latoria mckoy",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "yutao liu",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "paul shelton",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "christina bush",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kathleen brinkman",
    "position": "librarian",
    "salary": 74546
  },
  {
    "name": "antoinette carr",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kristina barker",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "stacey derr",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "pandora crumpton",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "whitney paxson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "darren murray",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "joseph isaac",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "heather kuduk-hsu",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "francis hill",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "amanda miller",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kristina johnson",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "lynn-marie griffin",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kyra hayes",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "lataura pendleton",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "tina hayes",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "giovanni pena",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "camille jackson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "gloria jackson",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "jina proctor",
    "position": "social worker",
    "salary": 74546
  },
  {
    "name": "mario patrizio",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "yvonne kane",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "ayanna kelley",
    "position": "education program specialist",
    "salary": 74546
  },
  {
    "name": "marnie jones",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "kara kuchemba",
    "position": "instructional coach",
    "salary": 74546
  },
  {
    "name": "kate outten",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "judy moore",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "lisa parnell-cunningham",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "stephanie deskins",
    "position": "teacher",
    "salary": 74546
  },
  {
    "name": "michael tannen",
    "position": "assoc professor",
    "salary": 74536
  },
  {
    "name": "donald steinert",
    "position": "assoc professor",
    "salary": 74536
  },
  {
    "name": "samuel snyder",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "taharee jackson",
    "position": "visiting associate professor",
    "salary": 74536
  },
  {
    "name": "michael tabron",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "leonard dempsey",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "lauren moore",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "hanru li",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "kimberli newman-wooden",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "tenesha massenburg",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "pamela gant",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "joyce hill",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "heather pultz",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "jeff brown",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "tia holt",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "teray bingham",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "jerome feucht",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "helen brown",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "kendra bethel",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "jose canales",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "barbara annand",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "denise thiel",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "donna sothern",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "givonne scarboro",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "kevin anderson",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "frank bowen",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "hajdar xhema",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "amadu smart",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "lori williams",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "narda valdivia",
    "position": "teacher",
    "salary": 74535
  },
  {
    "name": "susie cato",
    "position": "assoc professor",
    "salary": 74526
  },
  {
    "name": "anita ross",
    "position": "qa & records supervisor",
    "salary": 74508
  },
  {
    "name": "isora cruz cardona",
    "position": "psychologist",
    "salary": 74494
  },
  {
    "name": "sandra swann",
    "position": "social services rep",
    "salary": 74487
  },
  {
    "name": "renee ashton",
    "position": "invest",
    "salary": 74487
  },
  {
    "name": "jeffrey herold",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "kenan smith",
    "position": "scuba diver",
    "salary": 74424
  },
  {
    "name": "patrick schaut",
    "position": "scuba diver",
    "salary": 74424
  },
  {
    "name": "mark leone",
    "position": "bomb squad tech",
    "salary": 74424
  },
  {
    "name": "corey shaw",
    "position": "bomb technician / dog handler",
    "salary": 74424
  },
  {
    "name": "thomas higdon",
    "position": "bomb technician / dog handler",
    "salary": 74424
  },
  {
    "name": "malcolm gaines",
    "position": "scuba diver",
    "salary": 74424
  },
  {
    "name": "kristian kimble",
    "position": "bomb technician / dog handler",
    "salary": 74424
  },
  {
    "name": "gary vick",
    "position": "bomb squad tech",
    "salary": 74424
  },
  {
    "name": "albert johnson",
    "position": "attorney advisor",
    "salary": 74405
  },
  {
    "name": "charnita rivers hamilton",
    "position": "clinical nurse",
    "salary": 74369
  },
  {
    "name": "jean villier",
    "position": "medical officer (psychiatry)",
    "salary": 162921
  },
  {
    "name": "victor brito",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "angela ibetoh",
    "position": "psychiatric nurse",
    "salary": 74369
  },
  {
    "name": "gladys nebafu",
    "position": "psychiatric nurse",
    "salary": 74369
  },
  {
    "name": "clement suna",
    "position": "psychiatric nurse",
    "salary": 74369
  },
  {
    "name": "emmanuel agbara",
    "position": "psychiatric nurse",
    "salary": 74369
  },
  {
    "name": "theresa aruna",
    "position": "psychiatric nurse",
    "salary": 74369
  },
  {
    "name": "constance williams",
    "position": "clinical nurse",
    "salary": 74369
  },
  {
    "name": "tawan roberts",
    "position": "clinical nurse",
    "salary": 74369
  },
  {
    "name": "bern simo mukam",
    "position": "clinical nurse",
    "salary": 74369
  },
  {
    "name": "obianuju emeagwali",
    "position": "psychiatric nurse",
    "salary": 74369
  },
  {
    "name": "james smith",
    "position": "workers compensation recipient",
    "salary": 74360
  },
  {
    "name": "hilton burton",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "kimberly mccall",
    "position": "community outreach specialist",
    "salary": 74318
  },
  {
    "name": "charles kumah",
    "position": "information technology specialist",
    "salary": 74318
  },
  {
    "name": "josh ghaffari",
    "position": "community planner",
    "salary": 74318
  },
  {
    "name": "marshella wallace",
    "position": "project manager",
    "salary": 74318
  },
  {
    "name": "shanetha gaines",
    "position": "investigator",
    "salary": 74318
  },
  {
    "name": "delilah kelly",
    "position": "facilities planning specialist",
    "salary": 74318
  },
  {
    "name": "yolanda mobuary",
    "position": "auditor",
    "salary": 74318
  },
  {
    "name": "chelsee lisbon",
    "position": "special assistant",
    "salary": 74318
  },
  {
    "name": "david ramirez",
    "position": "hr spec (hr dev)",
    "salary": 74318
  },
  {
    "name": "alisha patterson",
    "position": "hr specialist (perf mgmt)",
    "salary": 74318
  },
  {
    "name": "melvin gresham",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "kara burt",
    "position": "management analyst",
    "salary": 74318
  },
  {
    "name": "keith slade",
    "position": "executive assistant",
    "salary": 74318
  },
  {
    "name": "denise wells",
    "position": "contracts specialist",
    "salary": 74318
  },
  {
    "name": "christopher dina",
    "position": "management analyst",
    "salary": 74318
  },
  {
    "name": "amy tatsumi",
    "position": "system of care facilitator",
    "salary": 74318
  },
  {
    "name": "aissa seck",
    "position": "residency monitor analyst",
    "salary": 74318
  },
  {
    "name": "jonathan rifkin",
    "position": "special assistant",
    "salary": 74318
  },
  {
    "name": "robin queen",
    "position": "care manager",
    "salary": 74318
  },
  {
    "name": "robert price",
    "position": "prtf diversion & ta coord",
    "salary": 74318
  },
  {
    "name": "linda o'brien",
    "position": "deputy chief of staff",
    "salary": 74318
  },
  {
    "name": "brian grogan",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "brenda smith",
    "position": "grants management specialist",
    "salary": 74318
  },
  {
    "name": "jamie mason",
    "position": "information technology specialist",
    "salary": 74318
  },
  {
    "name": "paulette saunders",
    "position": "administrative specialist",
    "salary": 74318
  },
  {
    "name": "jamie henson",
    "position": "transportation management specialist",
    "salary": 74318
  },
  {
    "name": "george williams",
    "position": "public affairs specialist",
    "salary": 74318
  },
  {
    "name": "sommer murphy",
    "position": "hearing examiner",
    "salary": 74318
  },
  {
    "name": "marissa mckeever",
    "position": "grants & contract analyst",
    "salary": 74318
  },
  {
    "name": "michele fuller",
    "position": "data & case management specialist",
    "salary": 74318
  },
  {
    "name": "elaina parrish",
    "position": "education program specialist",
    "salary": 74318
  },
  {
    "name": "andrew sabatelli",
    "position": "information technology specialist",
    "salary": 74318
  },
  {
    "name": "will goodwin",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "grace chien",
    "position": "charter implementation special",
    "salary": 74318
  },
  {
    "name": "joyce hackley-rusnak",
    "position": "management liaison specialist",
    "salary": 74318
  },
  {
    "name": "michael kirkwood",
    "position": "lead equal opportunity special",
    "salary": 74318
  },
  {
    "name": "kenita saunders romero",
    "position": "management liaison specialist",
    "salary": 74318
  },
  {
    "name": "franklyn malone",
    "position": "contract services specialist",
    "salary": 74318
  },
  {
    "name": "patricia waller",
    "position": "education program specialist",
    "salary": 74318
  },
  {
    "name": "rebecca feldberg",
    "position": "program analyst",
    "salary": 74318
  },
  {
    "name": "jonathan sisco",
    "position": "landscape architect",
    "salary": 74318
  },
  {
    "name": "howard salmon",
    "position": "program specialist",
    "salary": 74318
  },
  {
    "name": "maurice smith",
    "position": "consumer services specialist",
    "salary": 74318
  },
  {
    "name": "robert halbleid",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "daniza medina",
    "position": "grants management specialist",
    "salary": 74318
  },
  {
    "name": "mary wilhere",
    "position": "program analyst",
    "salary": 74318
  },
  {
    "name": "scott larson",
    "position": "forensic toxicologist",
    "salary": 74318
  },
  {
    "name": "monica hernandez",
    "position": "communications specialist",
    "salary": 74318
  },
  {
    "name": "brenda clark",
    "position": "coord, special education",
    "salary": 74222
  },
  {
    "name": "kyle evans",
    "position": "coordinator (et)",
    "salary": 74222
  },
  {
    "name": "ronald shank",
    "position": "instructor, jrotc",
    "salary": 74213
  },
  {
    "name": "joyce speaks-hellams",
    "position": "social services rep",
    "salary": 74164
  },
  {
    "name": "ataklti gebremedhin",
    "position": "social services rep",
    "salary": 74164
  },
  {
    "name": "laronda jenkins",
    "position": "records management supv",
    "salary": 74164
  },
  {
    "name": "mark beach",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "cornell kinard",
    "position": "program analyst",
    "salary": 74164
  },
  {
    "name": "kathy dieuveuil",
    "position": "program analyst",
    "salary": 74164
  },
  {
    "name": "sondra jackson",
    "position": "social services rep",
    "salary": 74164
  },
  {
    "name": "omotayo ajani olatunji",
    "position": "social services rep",
    "salary": 74164
  },
  {
    "name": "vincent miler",
    "position": "program coor tapit",
    "salary": 74164
  },
  {
    "name": "sharon dendy",
    "position": "forester (urban)",
    "salary": 74139
  },
  {
    "name": "peggie barnes power",
    "position": "program analyst",
    "salary": 74139
  },
  {
    "name": "timothy ramlogan",
    "position": "electronics technician",
    "salary": 74139
  },
  {
    "name": "aisha king",
    "position": "residential clinical coord",
    "salary": 74139
  },
  {
    "name": "gelinda singletary",
    "position": "information technology specialist",
    "salary": 74139
  },
  {
    "name": "robin hoey",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "queen glymph",
    "position": "program analyst",
    "salary": 74139
  },
  {
    "name": "eduardo torre",
    "position": "criminal investigator",
    "salary": 74139
  },
  {
    "name": "sabrina williams",
    "position": "grants & contract management specialist",
    "salary": 74139
  },
  {
    "name": "milton white",
    "position": "program analyst",
    "salary": 74139
  },
  {
    "name": "deborah miller",
    "position": "correctional progm spec(re-ent",
    "salary": 74139
  },
  {
    "name": "cleveland weeden",
    "position": "medical technicianologist",
    "salary": 74139
  },
  {
    "name": "maxine maloney",
    "position": "project coordinator",
    "salary": 74139
  },
  {
    "name": "joy crawford",
    "position": "information technology specialist",
    "salary": 74139
  },
  {
    "name": "aisha moore",
    "position": "program specialist",
    "salary": 74139
  },
  {
    "name": "theodore gloster",
    "position": "program analyst",
    "salary": 74139
  },
  {
    "name": "robert atcheson",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "kenya harris",
    "position": "manpower development specialist",
    "salary": 74139
  },
  {
    "name": "beverly wilder",
    "position": "program analyst",
    "salary": 74139
  },
  {
    "name": "vera lightner",
    "position": "correctional treatment sp",
    "salary": 74100
  },
  {
    "name": "morris mccoy",
    "position": "instructor, jrotc",
    "salary": 74030
  },
  {
    "name": "lashonda wright",
    "position": "leg adm spec (tort claim)",
    "salary": 74000
  },
  {
    "name": "charlotte conley",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "renae ramble",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "jessica gabbai",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "tanesha dixon",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "luther sewell",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "burt henry",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "mary thomas",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "scott davis",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "nicole johnson",
    "position": "teacher",
    "salary": 73988
  },
  {
    "name": "evelyn harvey anderson",
    "position": "invest",
    "salary": 73976
  },
  {
    "name": "sheila green",
    "position": "social worker",
    "salary": 73935
  },
  {
    "name": "nicole broome",
    "position": "social worker",
    "salary": 73935
  },
  {
    "name": "wills allen",
    "position": "social worker",
    "salary": 73935
  },
  {
    "name": "joann luster",
    "position": "social worker",
    "salary": 73935
  },
  {
    "name": "gloria jenkins",
    "position": "social worker",
    "salary": 73935
  },
  {
    "name": "robin espy",
    "position": "sanitarian",
    "salary": 73935
  },
  {
    "name": "diane groomes",
    "position": "assistant chief",
    "salary": 162906
  },
  {
    "name": "mark carter",
    "position": "captain",
    "salary": 115636
  },
  {
    "name": "alice jackson",
    "position": "sanitarian",
    "salary": 73935
  },
  {
    "name": "dawn mcfadden",
    "position": "sanitarian",
    "salary": 73935
  },
  {
    "name": "thomas thrift",
    "position": "superintendent, bl pl opr",
    "salary": 73923
  },
  {
    "name": "james lyles",
    "position": "investigator",
    "salary": 73894
  },
  {
    "name": "robert hollingsworth",
    "position": "auditor (tax)",
    "salary": 73894
  },
  {
    "name": "edith jimerson",
    "position": "auditor (tax)",
    "salary": 73894
  },
  {
    "name": "barbara brewer",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "walker west",
    "position": "appraiser",
    "salary": 73894
  },
  {
    "name": "marshall williams",
    "position": "ntcm technical liaison",
    "salary": 73894
  },
  {
    "name": "chanel robinson-davis",
    "position": "facilitators",
    "salary": 73894
  },
  {
    "name": "george dixon",
    "position": "captain",
    "salary": 115627
  },
  {
    "name": "danike grant",
    "position": "qsr & case practice specialist",
    "salary": 73894
  },
  {
    "name": "teshome gebrehiwot",
    "position": "auditor (tax)",
    "salary": 73894
  },
  {
    "name": "thomas fulton",
    "position": "public space coordinator",
    "salary": 73894
  },
  {
    "name": "berhanu aberra",
    "position": "auditor (tax)",
    "salary": 73894
  },
  {
    "name": "johnel tyler",
    "position": "investigator",
    "salary": 73894
  },
  {
    "name": "tonya starwood",
    "position": "contract specialist",
    "salary": 73894
  },
  {
    "name": "nancy green johnson",
    "position": "transp spec (sch tran sub pro)",
    "salary": 73894
  },
  {
    "name": "derrick hardy",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "george onyullo",
    "position": "environmental protection speci",
    "salary": 73894
  },
  {
    "name": "tina terrill",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "sylvia jones",
    "position": "information technology specialist",
    "salary": 115616
  },
  {
    "name": "valerie sanderlin",
    "position": "program analyst",
    "salary": 73894
  },
  {
    "name": "roger scott",
    "position": "program analyst",
    "salary": 73894
  },
  {
    "name": "emmanuel ofoche",
    "position": "environmental specialist",
    "salary": 73894
  },
  {
    "name": "monroe hall",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "trenita savage",
    "position": "program analyst",
    "salary": 73894
  },
  {
    "name": "john stevens",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "kendrick miles",
    "position": "transportation engineer",
    "salary": 73894
  },
  {
    "name": "mary miller",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "wanda gueye",
    "position": "social service assistant",
    "salary": 73894
  },
  {
    "name": "frances howard",
    "position": "contract compliance monitor",
    "salary": 73894
  },
  {
    "name": "valerie douglas",
    "position": "contracted programs administra",
    "salary": 115616
  },
  {
    "name": "shameka abney",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "nikiya ford jackson",
    "position": "program monitor",
    "salary": 73894
  },
  {
    "name": "james delgiudice",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "asha stanly",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "charlotte fisher",
    "position": "claims specialist",
    "salary": 73894
  },
  {
    "name": "emma powers",
    "position": "resource development specialist",
    "salary": 73894
  },
  {
    "name": "norman jenkins",
    "position": "resource development specialist",
    "salary": 73894
  },
  {
    "name": "kirk benson",
    "position": "contract specialist",
    "salary": 73894
  },
  {
    "name": "amy fortin",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "takia richardson",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "robert marsili",
    "position": "city-wide program support mana",
    "salary": 115616
  },
  {
    "name": "james robinson",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "luis jaureguizar",
    "position": "investigator",
    "salary": 73894
  },
  {
    "name": "delsie edwards",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "kasandra dodd",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "frederick dorsey",
    "position": "contract specialist",
    "salary": 73894
  },
  {
    "name": "tafari makonnen",
    "position": "icpc specialist",
    "salary": 73894
  },
  {
    "name": "renay newman",
    "position": "resource development specialist",
    "salary": 73894
  },
  {
    "name": "timothy shirey",
    "position": "invest fraud",
    "salary": 73894
  },
  {
    "name": "vanessa elbert",
    "position": "intake hotline worker",
    "salary": 73894
  },
  {
    "name": "mary eradiri",
    "position": "social worker",
    "salary": 73894
  },
  {
    "name": "john davies cole",
    "position": "epidemiologist",
    "salary": 115616
  },
  {
    "name": "antoinette johnson",
    "position": "intake hotline worker",
    "salary": 73894
  },
  {
    "name": "oscar vigas",
    "position": "videographer",
    "salary": 73894
  },
  {
    "name": "alicia vargas",
    "position": "program specialist",
    "salary": 73894
  },
  {
    "name": "joyce hawkins",
    "position": "program analyst",
    "salary": 73894
  },
  {
    "name": "marilyn lynch",
    "position": "audiovisual prod specialist",
    "salary": 73894
  },
  {
    "name": "candice larry",
    "position": "forensic scientist",
    "salary": 73894
  },
  {
    "name": "william weiser",
    "position": "comb code comp specialist",
    "salary": 73894
  },
  {
    "name": "david vollin",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "ademola shittu",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "gloria cephas",
    "position": "program analyst",
    "salary": 73894
  },
  {
    "name": "francis luparello",
    "position": "information technology specialist",
    "salary": 115429
  },
  {
    "name": "bradford karrer",
    "position": "housing financial anal",
    "salary": 73894
  },
  {
    "name": "terrell hill",
    "position": "investigator",
    "salary": 73894
  },
  {
    "name": "nikia coomber",
    "position": "forensic scientist",
    "salary": 73894
  },
  {
    "name": "ferdinand gamboa",
    "position": "comb code comp specialist",
    "salary": 73894
  },
  {
    "name": "robin brabham",
    "position": "grants analyst",
    "salary": 73894
  },
  {
    "name": "daniel barrett",
    "position": "firearms identification specialist",
    "salary": 73894
  },
  {
    "name": "jose solorzano",
    "position": "unemploy comp claims examiner",
    "salary": 73894
  },
  {
    "name": "jeannette anderson",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "eboni stokes",
    "position": "librarian",
    "salary": 73894
  },
  {
    "name": "virender bhogal",
    "position": "engineer",
    "salary": 73894
  },
  {
    "name": "henry lyles",
    "position": "battalion fire chief (ems)",
    "salary": 115418
  },
  {
    "name": "eucharia eleweanya",
    "position": "workers comp claims examiner",
    "salary": 73894
  },
  {
    "name": "silroy brown",
    "position": "fire protection engineer",
    "salary": 73894
  },
  {
    "name": "justin bellow",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "abiodun oladokun",
    "position": "civil engineer",
    "salary": 73894
  },
  {
    "name": "uma ebi",
    "position": "contract compliance monitor",
    "salary": 73894
  },
  {
    "name": "deborah bryant",
    "position": "contract specialist",
    "salary": 73894
  },
  {
    "name": "linda douglas",
    "position": "grants management specialist",
    "salary": 73894
  },
  {
    "name": "reginald mccoy",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "michael mcintosh",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "sylvester mode",
    "position": "environmental protection speci",
    "salary": 73894
  },
  {
    "name": "dorothy jones",
    "position": "hearing & appeals exam",
    "salary": 115417
  },
  {
    "name": "robert waller",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "awtar floura",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "eric walden",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "joseph malloy",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "william schoon",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "johnathan keefe",
    "position": "vocational rehabilitation specialist",
    "salary": 73894
  },
  {
    "name": "luis roa",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "spence heron",
    "position": "information technology specialist",
    "salary": 73894
  },
  {
    "name": "michael peden",
    "position": "program analyst",
    "salary": 73894
  },
  {
    "name": "damond smith",
    "position": "grant management specialist",
    "salary": 73894
  },
  {
    "name": "dale brown",
    "position": "early care program manager",
    "salary": 115417
  },
  {
    "name": "ronica marable",
    "position": "vocational rehabilitation specialist",
    "salary": 73894
  },
  {
    "name": "shirlana gabriel",
    "position": "public health analyst",
    "salary": 73894
  },
  {
    "name": "vincent carter",
    "position": "transportation engineering tec",
    "salary": 73894
  },
  {
    "name": "brandon gaymon",
    "position": "investigator",
    "salary": 73894
  },
  {
    "name": "erin thomas",
    "position": "public health analyst",
    "salary": 73894
  },
  {
    "name": "angylene jones",
    "position": "transportation engineering tec",
    "salary": 73894
  },
  {
    "name": "gerald carter",
    "position": "engineering technician",
    "salary": 73894
  },
  {
    "name": "melesse demissay",
    "position": "blind rehabilitation specialis",
    "salary": 73894
  },
  {
    "name": "stephanie martin",
    "position": "administrative specialist",
    "salary": 73894
  },
  {
    "name": "kenneth tillman",
    "position": "instructor, jrotc",
    "salary": 73834
  },
  {
    "name": "patrick burke",
    "position": "assistant chief",
    "salary": 162906
  },
  {
    "name": "eric stults",
    "position": "administrative constr project officer",
    "salary": 115417
  },
  {
    "name": "julie holt",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "denise nwaezeapu",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "erin pitts",
    "position": "human resource specialist",
    "salary": 73816
  },
  {
    "name": "suzanne greenfield",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "anthony hinnant",
    "position": "investigator",
    "salary": 73816
  },
  {
    "name": "james brooks",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "heather rothenbuescher",
    "position": "supervisor",
    "salary": 73816
  },
  {
    "name": "freddie temoney",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "yiesha thompson",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "christina wells",
    "position": "project manager",
    "salary": 73816
  },
  {
    "name": "stephanie dunbar",
    "position": "operations manager",
    "salary": 115417
  },
  {
    "name": "debra bell",
    "position": "program specialist",
    "salary": 73816
  },
  {
    "name": "julius anyu",
    "position": "assoc professor",
    "salary": 73815
  },
  {
    "name": "walter coley",
    "position": "correctional officer",
    "salary": 73783
  },
  {
    "name": "andrea stewart coble",
    "position": "social services represen",
    "salary": 73783
  },
  {
    "name": "william easley",
    "position": "recycling program officer",
    "salary": 73783
  },
  {
    "name": "maury jones",
    "position": "correctional officer",
    "salary": 73783
  },
  {
    "name": "nora talley glass",
    "position": "correctional officer",
    "salary": 73783
  },
  {
    "name": "kevin hill",
    "position": "social services rep",
    "salary": 73783
  },
  {
    "name": "gail young",
    "position": "social services rep",
    "salary": 73783
  },
  {
    "name": "hattie rogers",
    "position": "human resources spec emp ben",
    "salary": 73729
  },
  {
    "name": "harold johnson",
    "position": "information technology specialist",
    "salary": 115417
  },
  {
    "name": "shauna brew",
    "position": "auxiliary serv bus manager",
    "salary": 73729
  },
  {
    "name": "seabern hill",
    "position": "records officer",
    "salary": 73729
  },
  {
    "name": "akua sewer-gunthrope",
    "position": "graduate coord/recruiter",
    "salary": 73729
  },
  {
    "name": "isabelle mcmillian",
    "position": "human resources specialist",
    "salary": 73729
  },
  {
    "name": "ursula brimage",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "ronnie worrell",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "cyntrill campbell",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "thomas burr",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "rolonda williams",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "kimberly teneyck-smith",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "ladonia wilkins",
    "position": "auditor",
    "salary": 115136
  },
  {
    "name": "wendy williams",
    "position": "fire inspector",
    "salary": 73708
  },
  {
    "name": "staci mason",
    "position": "administrative officer",
    "salary": 73648
  },
  {
    "name": "rosie sneed",
    "position": "assoc professor",
    "salary": 73642
  },
  {
    "name": "ana rivas",
    "position": "psychologist",
    "salary": 73633
  },
  {
    "name": "leila rosado nelson",
    "position": "forensic clinical administrato",
    "salary": 73611
  },
  {
    "name": "janet fleet",
    "position": "social services rep",
    "salary": 73523
  },
  {
    "name": "tanya justin",
    "position": "paramedic firefighter",
    "salary": 73498
  },
  {
    "name": "timothy bennett",
    "position": "paramedic firefighter",
    "salary": 73498
  },
  {
    "name": "vincent kyle",
    "position": "paramedic firefighter",
    "salary": 73498
  },
  {
    "name": "kevin perry",
    "position": "social services rep",
    "salary": 73465
  },
  {
    "name": "fred morris",
    "position": "captain",
    "salary": 115115
  },
  {
    "name": "alton gadsden",
    "position": "assistant watch commander",
    "salary": 73465
  },
  {
    "name": "sharon pulley",
    "position": "youth development rep",
    "salary": 73465
  },
  {
    "name": "thomas day",
    "position": "solid waste inspection officer",
    "salary": 73465
  },
  {
    "name": "keith wheeler",
    "position": "youth development rep",
    "salary": 73465
  },
  {
    "name": "marvin newman",
    "position": "social services rep",
    "salary": 73465
  },
  {
    "name": "cynthia tart",
    "position": "quality control examinr",
    "salary": 73465
  },
  {
    "name": "evelyn woods",
    "position": "customer service representative",
    "salary": 73465
  },
  {
    "name": "bessie connor",
    "position": "quality control exam",
    "salary": 73465
  },
  {
    "name": "aggie rhodes",
    "position": "management analyst",
    "salary": 73465
  },
  {
    "name": "norman nixon",
    "position": "manpower dev specialist",
    "salary": 73465
  },
  {
    "name": "gary danley",
    "position": "captain",
    "salary": 115115
  },
  {
    "name": "lawrence dance",
    "position": "solid waste inspectr ofr",
    "salary": 73465
  },
  {
    "name": "shirley jackson",
    "position": "program specialist",
    "salary": 73463
  },
  {
    "name": "edward jones",
    "position": "assoc professor",
    "salary": 73451
  },
  {
    "name": "michael walko",
    "position": "lieutenant",
    "salary": 73439
  },
  {
    "name": "rych pullen",
    "position": "lieutenant",
    "salary": 73439
  },
  {
    "name": "derek brachetti",
    "position": "lieutenant",
    "salary": 73439
  },
  {
    "name": "chad breen",
    "position": "lieutenant",
    "salary": 73439
  },
  {
    "name": "jason auth",
    "position": "lieutenant",
    "salary": 73439
  },
  {
    "name": "robert alvarado",
    "position": "lieutenant",
    "salary": 73439
  },
  {
    "name": "alyson roberts",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "james reilley",
    "position": "captain",
    "salary": 115115
  },
  {
    "name": "sheila reid",
    "position": "benefits specialist",
    "salary": 73429
  },
  {
    "name": "ernest pozzi",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "richard golland",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "egheosa igbinoba",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "camille robinson",
    "position": "psychologist,school",
    "salary": 73429
  },
  {
    "name": "gloria vanhook",
    "position": "director",
    "salary": 73429
  },
  {
    "name": "benjamin bergfalk",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "kimberly evans",
    "position": "instructional coach",
    "salary": 73429
  },
  {
    "name": "nikisha blackmon",
    "position": "literacy coach",
    "salary": 73429
  },
  {
    "name": "dwight davis",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "victorie thomas",
    "position": "director",
    "salary": 115035
  },
  {
    "name": "laura o'neill",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "ruth wright",
    "position": "food service regional manager",
    "salary": 73429
  },
  {
    "name": "sherri davis",
    "position": "teacher",
    "salary": 73429
  },
  {
    "name": "margaret streeter",
    "position": "administrative officer",
    "salary": 73357
  },
  {
    "name": "adedoyin sobowale",
    "position": "nurse",
    "salary": 73339
  },
  {
    "name": "kevin onuekwusi",
    "position": "psychiatric nurse",
    "salary": 73339
  },
  {
    "name": "adebayo ojomo",
    "position": "psychiatric nurse",
    "salary": 73339
  },
  {
    "name": "john woody",
    "position": "workers compensation recipient",
    "salary": 73320
  },
  {
    "name": "david holmes",
    "position": "correctional officer",
    "salary": 73268
  },
  {
    "name": "reatha haden",
    "position": "associate registrar",
    "salary": 73265
  },
  {
    "name": "david rose",
    "position": "director",
    "salary": 115035
  },
  {
    "name": "angela scott",
    "position": "executive assistant",
    "salary": 73265
  },
  {
    "name": "linda carmichael freeman",
    "position": "program coor",
    "salary": 73265
  },
  {
    "name": "linda rajnauth-suralie",
    "position": "dental officer (periodontics)",
    "salary": 73219
  },
  {
    "name": "magda benfield",
    "position": "trial attorney",
    "salary": 73159
  },
  {
    "name": "patricia donkor",
    "position": "trial attorney",
    "salary": 73159
  },
  {
    "name": "nilo cuervo",
    "position": "trial attorney",
    "salary": 73159
  },
  {
    "name": "victoria healy",
    "position": "attorney advisor",
    "salary": 73159
  },
  {
    "name": "tanya pierce",
    "position": "trial attorney",
    "salary": 73159
  },
  {
    "name": "scott peary",
    "position": "trial attorney",
    "salary": 73159
  },
  {
    "name": "maura polli",
    "position": "trial attorney",
    "salary": 73159
  },
  {
    "name": "glorious bazemore",
    "position": "contract specialist",
    "salary": 115035
  },
  {
    "name": "anthony mckoy",
    "position": "sergeant",
    "salary": 73135
  },
  {
    "name": "michael cramer",
    "position": "sergeant",
    "salary": 73135
  },
  {
    "name": "donald creelman",
    "position": "sergeant",
    "salary": 73135
  },
  {
    "name": "david slye",
    "position": "sergeant",
    "salary": 73135
  },
  {
    "name": "wayne darmstead",
    "position": "sergeant",
    "salary": 73135
  },
  {
    "name": "steven murphy",
    "position": "sergeant aide",
    "salary": 73133
  },
  {
    "name": "christopher maggi",
    "position": "sergeant aide",
    "salary": 73133
  },
  {
    "name": "kenneth nehf",
    "position": "sergeant",
    "salary": 73133
  },
  {
    "name": "quintin stewart",
    "position": "general engineer",
    "salary": 73085
  },
  {
    "name": "donna fuell",
    "position": "logistics specialist",
    "salary": 73085
  },
  {
    "name": "arda kasaci",
    "position": "medical officer (psychiatry)",
    "salary": 162494
  },
  {
    "name": "michelle hudacsko",
    "position": "director",
    "salary": 115035
  },
  {
    "name": "sharon hurst",
    "position": "staff assistant",
    "salary": 73069
  },
  {
    "name": "felicia farmer",
    "position": "office manager",
    "salary": 73069
  },
  {
    "name": "yeolman owens",
    "position": "budget analyst",
    "salary": 73069
  },
  {
    "name": "kim freeland",
    "position": "budget analyst",
    "salary": 73069
  },
  {
    "name": "elena mccoy",
    "position": "accountant",
    "salary": 73069
  },
  {
    "name": "danielle royster",
    "position": "payroll manager",
    "salary": 73069
  },
  {
    "name": "gail mcleese",
    "position": "administrative officer",
    "salary": 73069
  },
  {
    "name": "jacqueline alston",
    "position": "executive assistant",
    "salary": 73069
  },
  {
    "name": "scott miller",
    "position": "investigator",
    "salary": 73069
  },
  {
    "name": "anthony jack",
    "position": "accountant",
    "salary": 73069
  },
  {
    "name": "camile williams",
    "position": "chief of staff",
    "salary": 115000
  },
  {
    "name": "rosa fernandez",
    "position": "budget analyst",
    "salary": 73069
  },
  {
    "name": "karon brown",
    "position": "pension benefits specia",
    "salary": 73069
  },
  {
    "name": "kathy thomas- burton",
    "position": "budget analyst",
    "salary": 73069
  },
  {
    "name": "chul hong",
    "position": "program specialist",
    "salary": 73069
  },
  {
    "name": "stephon bing",
    "position": "accountant",
    "salary": 73069
  },
  {
    "name": "frank warner",
    "position": "program specialist",
    "salary": 73069
  },
  {
    "name": "cynthia davenport",
    "position": "budget analyst",
    "salary": 73069
  },
  {
    "name": "alexander howe",
    "position": "assoc professor",
    "salary": 73055
  },
  {
    "name": "didier sinisterra",
    "position": "dep director for latino affair",
    "salary": 73000
  },
  {
    "name": "david harris",
    "position": "program analyst",
    "salary": 73000
  },
  {
    "name": "sajeed popat",
    "position": "administrative srvs manager",
    "salary": 115000
  },
  {
    "name": "tia coachman",
    "position": "manpower dev specialist",
    "salary": 73000
  },
  {
    "name": "radeena washington",
    "position": "program analyst",
    "salary": 73000
  },
  {
    "name": "ellen mcdonald haynes",
    "position": "correctional officer",
    "salary": 72981
  },
  {
    "name": "curtis prince",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "peter shaw",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "jeffrey phillips",
    "position": "master patrol officer",
    "salary": 72924
  },
  {
    "name": "kenniss weeks",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "steven roselle",
    "position": "dog handler",
    "salary": 72924
  },
  {
    "name": "miguel montanez",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "derek ricks",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "john stokes",
    "position": "chief of staff",
    "salary": 115000
  },
  {
    "name": "craig reynolds",
    "position": "dog handler",
    "salary": 72924
  },
  {
    "name": "marvin washington",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "peter woo",
    "position": "air support mechanic",
    "salary": 72924
  },
  {
    "name": "karen taylor",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "james wilson",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "william washington",
    "position": "eod dog handler",
    "salary": 72924
  },
  {
    "name": "franklyn then",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "steven schwalm",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "carol mcconnell",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "ucrania paniagua",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "shaun snyder",
    "position": "deputy director",
    "salary": 115000
  },
  {
    "name": "vincent witkowski",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "james tyler",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "eric schuler",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "michael pavero",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "thomas smith",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "kevin mcconnell",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "robert mccollum",
    "position": "crime scene srch ofr",
    "salary": 72924
  },
  {
    "name": "thomas sepulveda",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "michael eames",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "samuel mcgee",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "nina albert",
    "position": "special assistant",
    "salary": 115000
  },
  {
    "name": "eric fenton",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "scott emmons",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "john holder",
    "position": "crime scene srch ofr",
    "salary": 72924
  },
  {
    "name": "pamela herndon",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "robert kacelowicz",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "darenn bemiller",
    "position": "crime scene srch ofr",
    "salary": 72924
  },
  {
    "name": "howard howland",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "damion johnson",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "william hawkins",
    "position": "master patrol officer",
    "salary": 72924
  },
  {
    "name": "michael iannacchione",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "jose thommana",
    "position": "traffic operations mngr,",
    "salary": 115000
  },
  {
    "name": "jeffery bruce",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "douglas carlson",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "karen carr",
    "position": "dog handler",
    "salary": 72924
  },
  {
    "name": "trina johnson",
    "position": "invest",
    "salary": 72924
  },
  {
    "name": "gary gulich",
    "position": "master patrol officer",
    "salary": 72924
  },
  {
    "name": "james greene",
    "position": "eod dog handler",
    "salary": 72924
  },
  {
    "name": "lenard jenkins",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "henry gallagher",
    "position": "crime scene srch ofr",
    "salary": 72924
  },
  {
    "name": "david carter",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "scott earhardt",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "rita wood hinton",
    "position": "social service program manager",
    "salary": 115000
  },
  {
    "name": "anthony faverio",
    "position": "electronics technician",
    "salary": 72924
  },
  {
    "name": "timothy dumantt",
    "position": "officer ert personnel",
    "salary": 72924
  },
  {
    "name": "kimberly crosby",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "thomas coughlin",
    "position": "crime scene srch ofr",
    "salary": 72924
  },
  {
    "name": "bryan adams",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "david gargac",
    "position": "detective",
    "salary": 72924
  },
  {
    "name": "joseph tezi",
    "position": "teacher",
    "salary": 72915
  },
  {
    "name": "agboola dedo",
    "position": "technical services specialist",
    "salary": 72883
  },
  {
    "name": "wellela hirpassa",
    "position": "extension agent ii",
    "salary": 72883
  },
  {
    "name": "april cole",
    "position": "financial aid counselor",
    "salary": 72883
  },
  {
    "name": "ahmed raja",
    "position": "gen engineer",
    "salary": 115000
  },
  {
    "name": "barbara williams",
    "position": "health & safety specialist",
    "salary": 72883
  },
  {
    "name": "donald thompson",
    "position": "auditor (tax)",
    "salary": 72879
  },
  {
    "name": "barbara copeland",
    "position": "correctional treatment specialist",
    "salary": 72863
  },
  {
    "name": "gladys rodriguez",
    "position": "assistant watch commander",
    "salary": 72764
  },
  {
    "name": "janice autrey",
    "position": "social services rep",
    "salary": 72764
  },
  {
    "name": "joann barber",
    "position": "const rep maintenance",
    "salary": 72764
  },
  {
    "name": "tracey williams",
    "position": "contract specialist",
    "salary": 72740
  },
  {
    "name": "janelle morrow",
    "position": "web developer",
    "salary": 72740
  },
  {
    "name": "michael lane",
    "position": "architect (design)",
    "salary": 72702
  },
  {
    "name": "karen neal",
    "position": "coord, special education",
    "salary": 72658
  },
  {
    "name": "brian allende",
    "position": "chief for program support svs",
    "salary": 115000
  },
  {
    "name": "trinetta mcclam",
    "position": "speech pathologist",
    "salary": 72624
  },
  {
    "name": "lloyd jones",
    "position": "assoc professor",
    "salary": 72606
  },
  {
    "name": "shermineh jones",
    "position": "trial attorney",
    "salary": 72545
  },
  {
    "name": "terrance bland",
    "position": "workers compensation recipient",
    "salary": 72542
  },
  {
    "name": "stephen arhin",
    "position": "visiting associate professor",
    "salary": 72481
  },
  {
    "name": "oliver amaechi",
    "position": "workers compensation recipient",
    "salary": 72467
  },
  {
    "name": "shamika solomon",
    "position": "counselor",
    "salary": 72424
  },
  {
    "name": "joseph boykin",
    "position": "counselor",
    "salary": 72424
  },
  {
    "name": "bipinkumar shah",
    "position": "assoc professor",
    "salary": 72418
  },
  {
    "name": "laswaun washington",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "janna volkov",
    "position": "medical officer (psychiatry)",
    "salary": 162494
  },
  {
    "name": "heath scott",
    "position": "protect svcs ofr-security mgnt",
    "salary": 115000
  },
  {
    "name": "jonathon pongratz",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "raul mendez",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "randy griffin",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "wilfred salas",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "adam snapko",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "brett parson",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "jimmie thompson",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "jeffrey labofish",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "dustin nevel",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "joshua strassman",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "antoine fagan",
    "position": "it section director",
    "salary": 115000
  },
  {
    "name": "jerome merrill",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "peter sheldon",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "christopher moore",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "christopher petz",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "scott siegel",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "charles barnes tutt",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "donald phillips",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "patrick ecelberger",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "leebra branham",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "aisha hackley",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "charles allen",
    "position": "chief of staff",
    "salary": 115000
  },
  {
    "name": "michael boland",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "brian bobick",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "tyrone harris",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "albert cipolari",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "william chumbris",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "crystal jones",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "michael bowman",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "robert drummond",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "michael architzel",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "andrew finkelman",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "michael schirmacher",
    "position": "chaplain",
    "salary": 115000
  },
  {
    "name": "jennifer barba",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "dorothy bracey",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "norman frost",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "ellen bader",
    "position": "sergeant",
    "salary": 72388
  },
  {
    "name": "ronald jenkins",
    "position": "education specialist",
    "salary": 72387
  },
  {
    "name": "frances evangelista",
    "position": "dean of students (et)",
    "salary": 72387
  },
  {
    "name": "tenia pritchard",
    "position": "dean of students (et)",
    "salary": 72387
  },
  {
    "name": "erika moss",
    "position": "coord, special education",
    "salary": 72387
  },
  {
    "name": "sandra hart",
    "position": "program coordinator",
    "salary": 72387
  },
  {
    "name": "lashonda battle",
    "position": "coord, special education",
    "salary": 72387
  },
  {
    "name": "darrell chambers",
    "position": "attorney advisor",
    "salary": 115000
  },
  {
    "name": "tushina yameny",
    "position": "coord, special education",
    "salary": 72387
  },
  {
    "name": "nicole stroman",
    "position": "coord, special education",
    "salary": 72387
  },
  {
    "name": "michelle smith howard",
    "position": "program coordinator",
    "salary": 72387
  },
  {
    "name": "melissa taylor",
    "position": "dean of students (et)",
    "salary": 72387
  },
  {
    "name": "othal thomas",
    "position": "coordinator (et)",
    "salary": 72387
  },
  {
    "name": "tonya white",
    "position": "coord, special education",
    "salary": 72387
  },
  {
    "name": "carlton holt",
    "position": "workers compensation recipient",
    "salary": 72368
  },
  {
    "name": "jaqueline hines",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "tanisha roberts",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "saquita james",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "kemit mawakana",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "frann robertson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "jacqueline jones",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "george hodge",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "patricia gibbs",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "lasonya jackson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "angela mason",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "dane jefferson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "ronald massey",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "brenda haliburton",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "marierose mbinack",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "andrew reese",
    "position": "attorney advisor",
    "salary": 115000
  },
  {
    "name": "john matthews",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "sheree harris",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "june gardner",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "henry johnson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "emmanuel palmer",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "catherine pruett",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "sandra green",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "dianna hicks",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "alvin queen",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "vinson irby",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "paul stenbjorn",
    "position": "information technology specialist",
    "salary": 115000
  },
  {
    "name": "donnette campbell",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "marta fraticelli",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "robert hendricks",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "inocencia rodriguez",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "kanika dalton",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "sinpheng chansavong",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "lawrence watson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "reagan simon",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "ruben schurman",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "veronica williams",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "grace graham",
    "position": "attorney advisor",
    "salary": 115000
  },
  {
    "name": "tonya wright nelson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "judith fratto",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "andre ford",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "kathi duff",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "sabrina clark",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "paige byrne",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "lisa aleshire",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "debra timmons",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "cornell carter",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "eileen fitzgerald",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "crisarla houston",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "josephine chavez",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "timothy anderson",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "melinda copeland",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "adam forschner",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "ali foster",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "barbara spence",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "silvia brewer",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "deena black",
    "position": "teacher",
    "salary": 72206
  },
  {
    "name": "rosetta dabney",
    "position": "clinical care coor",
    "salary": 72199
  },
  {
    "name": "deborah williams",
    "position": "staff assistant",
    "salary": 72199
  },
  {
    "name": "alican dalkilic",
    "position": "medical officer (psychiatry)",
    "salary": 162494
  },
  {
    "name": "robert summers",
    "position": "chief of staff",
    "salary": 115000
  },
  {
    "name": "carissa pappas",
    "position": "program analyst",
    "salary": 72199
  },
  {
    "name": "demetria harris",
    "position": "solid waste program coord",
    "salary": 72199
  },
  {
    "name": "donald thornton",
    "position": "investigator",
    "salary": 72199
  },
  {
    "name": "robin teasley",
    "position": "building management specialist",
    "salary": 72199
  },
  {
    "name": "loretta mazyck",
    "position": "utility management program specialist",
    "salary": 72199
  },
  {
    "name": "alfred day",
    "position": "human resources specialist",
    "salary": 72199
  },
  {
    "name": "john detaeye",
    "position": "committee director",
    "salary": 72199
  },
  {
    "name": "joann rohan",
    "position": "program analyst",
    "salary": 72199
  },
  {
    "name": "john niles",
    "position": "public affairs specialist",
    "salary": 72199
  },
  {
    "name": "alexander ardila",
    "position": "information technology specialist",
    "salary": 72199
  },
  {
    "name": "keith blair",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "anglia fulwood",
    "position": "program specialist",
    "salary": 72199
  },
  {
    "name": "damali kajubi",
    "position": "auditor",
    "salary": 72199
  },
  {
    "name": "jared kahn",
    "position": "project manager",
    "salary": 72199
  },
  {
    "name": "richard richardson",
    "position": "investigator",
    "salary": 72199
  },
  {
    "name": "lisa payne",
    "position": "program specialist",
    "salary": 72199
  },
  {
    "name": "roger turpin",
    "position": "case management coor",
    "salary": 72199
  },
  {
    "name": "dorothy boone",
    "position": "program analyst",
    "salary": 72199
  },
  {
    "name": "silvia garrick",
    "position": "consumer outreach specialist",
    "salary": 72199
  },
  {
    "name": "lisa tapp",
    "position": "invest eeo",
    "salary": 72199
  },
  {
    "name": "mabel kennedy",
    "position": "program specialist",
    "salary": 72199
  },
  {
    "name": "lashanda taylor",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "samuel ullery",
    "position": "school garden specialist",
    "salary": 72199
  },
  {
    "name": "christi dorsey",
    "position": "program specialist",
    "salary": 72199
  },
  {
    "name": "aaron king",
    "position": "information technology specialist",
    "salary": 72199
  },
  {
    "name": "daisy carr",
    "position": "management liaison specialist",
    "salary": 72199
  },
  {
    "name": "anthony lawrence",
    "position": "investigator",
    "salary": 72199
  },
  {
    "name": "gloria robertson",
    "position": "hlth srvs program specialist",
    "salary": 72199
  },
  {
    "name": "vanessa thompson",
    "position": "training specialist",
    "salary": 72199
  },
  {
    "name": "rodney george",
    "position": "project manager",
    "salary": 72199
  },
  {
    "name": "maria dyson",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "tessie sarmiento",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "renee evans",
    "position": "dir of chart sch fin/grnts adv",
    "salary": 115000
  },
  {
    "name": "sonya sullivan",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "margaret oni",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "njideka white",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "sonia north",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "orlando marshall",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "marie nestor",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "florence mawun",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "michael wright",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "alita wibert",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "ifeoma umeadi",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "stephanie brown",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "robert wright",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "kenneth frazier",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "rosylin bell",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "esther williams",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "teisha davis",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "alphonzo freeman",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "josiah akintoye",
    "position": "sanitarian",
    "salary": 72181
  },
  {
    "name": "carolene bailey",
    "position": "sanitarian",
    "salary": 72181
  },
  {
    "name": "michelle lewis",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "kim wanza",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "darrell pressley",
    "position": "director of communications",
    "salary": 115000
  },
  {
    "name": "lorenzo nixon",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "chianti proctor",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "ivy gilmore",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "kina holmes-cypress",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "ermine queen",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "danielle hyatt",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "rhonda cannon jones",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "avis jenkins",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "abdulai jalloh",
    "position": "social worker",
    "salary": 72181
  },
  {
    "name": "harold james",
    "position": "workers compensation recipient",
    "salary": 72164
  },
  {
    "name": "christine jones",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "john hamner",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "robert pacana",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "humberto perez",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "eric barrow",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "ricardo kingsbury",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "daniel tyler",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "raynard wilkins",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "timothy barnes",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "john ayres",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "william bailey",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "jeremy skinner",
    "position": "dep assistant sup of elem & second",
    "salary": 115000
  },
  {
    "name": "ronda lomax",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "william randolph",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "joel christian",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "jeffrey deitz",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "dondrel parker",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "hassan umrani",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "paul lucas",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "anthony prince",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "archie jefferson",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "joseph lyon",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "derek alphran",
    "position": "associate professor",
    "salary": 115000
  },
  {
    "name": "calvin mcdowney",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "stephen muccino",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "trevor reed",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "michael rasmussen",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "victor garner",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "kwame agyeman",
    "position": "firefighter emt",
    "salary": 72125
  },
  {
    "name": "joe gaston",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "darlene nabinett",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "dwayne bush",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "jimmy neal",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "alicia washington",
    "position": "attorney advisor",
    "salary": 115000
  },
  {
    "name": "tyrone harrison",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "vincent lewis",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "daniel lewis",
    "position": "firefighter",
    "salary": 72125
  },
  {
    "name": "eric chapman",
    "position": "program analyst",
    "salary": 72100
  },
  {
    "name": "doungamon muttamara",
    "position": "attorney advisor",
    "salary": 72100
  },
  {
    "name": "mary dee",
    "position": "capital budget analyst",
    "salary": 72100
  },
  {
    "name": "jaime rose",
    "position": "community grants coordinator",
    "salary": 72100
  },
  {
    "name": "janell smith",
    "position": "attorney advisor",
    "salary": 72100
  },
  {
    "name": "alessandro terenzoni",
    "position": "attorney advisor",
    "salary": 72100
  },
  {
    "name": "tiffanie thompson",
    "position": "budget analyst",
    "salary": 72100
  },
  {
    "name": "david miramontes",
    "position": "medical director",
    "salary": 193125
  },
  {
    "name": "syed naqvi",
    "position": "medical officer (psychiatry)",
    "salary": 162490
  },
  {
    "name": "elissa miller",
    "position": "associate director",
    "salary": 114950
  },
  {
    "name": "holly kirk",
    "position": "attorney advisor",
    "salary": 72100
  },
  {
    "name": "david mazeika",
    "position": "research analyst",
    "salary": 72100
  },
  {
    "name": "meredith saladyga",
    "position": "attorney advisor",
    "salary": 72100
  },
  {
    "name": "martin collins",
    "position": "police officer",
    "salary": 72065
  },
  {
    "name": "terencia davenport",
    "position": "pathologists' assistant",
    "salary": 72065
  },
  {
    "name": "robyn johnson",
    "position": "public affairs specialist",
    "salary": 72010
  },
  {
    "name": "jaclyn johnson",
    "position": "auditor",
    "salary": 72010
  },
  {
    "name": "belynda roebuck",
    "position": "special projects coordinator",
    "salary": 72010
  },
  {
    "name": "dana levinson",
    "position": "investigator",
    "salary": 72010
  },
  {
    "name": "laine cidlowski",
    "position": "community planner",
    "salary": 72010
  },
  {
    "name": "cary hinton",
    "position": "management analyst",
    "salary": 114950
  },
  {
    "name": "cheryl robertson",
    "position": "program analyst",
    "salary": 72010
  },
  {
    "name": "saadat khan",
    "position": "policy analyst",
    "salary": 72010
  },
  {
    "name": "tashima pedroso",
    "position": "executive assistant",
    "salary": 72010
  },
  {
    "name": "victor richardson",
    "position": "criminal investigator",
    "salary": 72010
  },
  {
    "name": "fekede gindaba",
    "position": "auditor",
    "salary": 72010
  },
  {
    "name": "janet concepcion",
    "position": "contract specialist",
    "salary": 72010
  },
  {
    "name": "stephanie parker",
    "position": "human resources spec class",
    "salary": 72010
  },
  {
    "name": "milton miller",
    "position": "management analyst",
    "salary": 72010
  },
  {
    "name": "celillianne green",
    "position": "legislative counsel",
    "salary": 72010
  },
  {
    "name": "jesse bascom",
    "position": "quality improvement coordinato",
    "salary": 72010
  },
  {
    "name": "jeffrey powell",
    "position": "chief of staff",
    "salary": 114900
  },
  {
    "name": "nikki emadi-azar",
    "position": "home and comm based svcs coord",
    "salary": 72010
  },
  {
    "name": "brooke fossey",
    "position": "transport planner (mass trans",
    "salary": 72010
  },
  {
    "name": "neel saxena",
    "position": "program coordinator",
    "salary": 72010
  },
  {
    "name": "loretta hill dodson",
    "position": "management liaison specialist",
    "salary": 72010
  },
  {
    "name": "compton douglas",
    "position": "grants and contracts managemen",
    "salary": 72010
  },
  {
    "name": "susan casto",
    "position": "administrative librarian",
    "salary": 72010
  },
  {
    "name": "sheila cuthrell",
    "position": "administrative officer",
    "salary": 72010
  },
  {
    "name": "jennifer jenkins",
    "position": "management liaison specialist",
    "salary": 72010
  },
  {
    "name": "kimberly gray",
    "position": "contract specialist",
    "salary": 72010
  },
  {
    "name": "cara sklar",
    "position": "education research analyst",
    "salary": 72010
  },
  {
    "name": "karen wiggins",
    "position": "director, firearms & toolmark",
    "salary": 114867
  },
  {
    "name": "laura branch",
    "position": "program analyst",
    "salary": 72010
  },
  {
    "name": "jason campbell",
    "position": "special assistant",
    "salary": 72010
  },
  {
    "name": "tiffany frazier",
    "position": "regulatory affairs specialist",
    "salary": 72010
  },
  {
    "name": "adrienne blocker",
    "position": "executive assistant",
    "salary": 72010
  },
  {
    "name": "morris blaylock",
    "position": "microbiologist",
    "salary": 72010
  },
  {
    "name": "daniel bohnlein",
    "position": "project manager",
    "salary": 72010
  },
  {
    "name": "pankaj rayamajhi",
    "position": "human resources specialist iv",
    "salary": 72010
  },
  {
    "name": "ella faulkner",
    "position": "community planner",
    "salary": 72010
  },
  {
    "name": "tawana stewart",
    "position": "grants program specialist",
    "salary": 72010
  },
  {
    "name": "jennifer runkle",
    "position": "toxicologist",
    "salary": 72010
  },
  {
    "name": "estelle richardson",
    "position": "forensic svcs advisor liaison",
    "salary": 114685
  },
  {
    "name": "william updike",
    "position": "program analyst",
    "salary": 72010
  },
  {
    "name": "vasil jaiani",
    "position": "management analyst",
    "salary": 72010
  },
  {
    "name": "johnnie philson",
    "position": "program coordinator",
    "salary": 72010
  },
  {
    "name": "cynthia lee",
    "position": "management liaison specialist",
    "salary": 72010
  },
  {
    "name": "mark long",
    "position": "constituent services specialist",
    "salary": 72000
  },
  {
    "name": "brandon todd",
    "position": "constituent services specialist",
    "salary": 72000
  },
  {
    "name": "adele tzeuton",
    "position": "psychiatric nurse",
    "salary": 71843
  },
  {
    "name": "debra wheeler",
    "position": "nurse",
    "salary": 71843
  },
  {
    "name": "pamela bright",
    "position": "counselor",
    "salary": 71801
  },
  {
    "name": "ra'adia cloyd",
    "position": "transportation spec (traff op)",
    "salary": 71796
  },
  {
    "name": "michal cunningham",
    "position": "information technology specialist",
    "salary": 114613
  },
  {
    "name": "seth allen",
    "position": "victim witness program specialist",
    "salary": 71796
  },
  {
    "name": "robin massengale",
    "position": "paralegal specialist",
    "salary": 71796
  },
  {
    "name": "stefhon henry",
    "position": "paralegal specialist",
    "salary": 71796
  },
  {
    "name": "jeremy grey",
    "position": "paralegal specialist",
    "salary": 71796
  },
  {
    "name": "jacqueline mason",
    "position": "auditor (tax)",
    "salary": 71796
  },
  {
    "name": "dorlisa carter",
    "position": "paralegal specialist",
    "salary": 71796
  },
  {
    "name": "lawanda edwards",
    "position": "real property program speciali",
    "salary": 71796
  },
  {
    "name": "james lesane",
    "position": "auditor (tax)",
    "salary": 71796
  },
  {
    "name": "barbara brown",
    "position": "contract specialist",
    "salary": 71796
  },
  {
    "name": "abdi-salam salah",
    "position": "transportation engineer",
    "salary": 71796
  },
  {
    "name": "edward leonard",
    "position": "information technology specialist",
    "salary": 114613
  },
  {
    "name": "kadidjatou ayeva",
    "position": "civil engineer",
    "salary": 71796
  },
  {
    "name": "lee belton",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "joe parrish",
    "position": "environmental protection speci",
    "salary": 71796
  },
  {
    "name": "eva bright",
    "position": "banking examiner",
    "salary": 71796
  },
  {
    "name": "michelle mosley",
    "position": "engineering technician",
    "salary": 71796
  },
  {
    "name": "robert muhizi",
    "position": "transportation spec (traff op)",
    "salary": 71796
  },
  {
    "name": "damian ozobu",
    "position": "auditor (tax)",
    "salary": 71796
  },
  {
    "name": "cherwin baga",
    "position": "electrical engineer",
    "salary": 71796
  },
  {
    "name": "aisha martin",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "babatunde adeyemo",
    "position": "electrical engineer",
    "salary": 71796
  },
  {
    "name": "wilbert miller",
    "position": "principal",
    "salary": 114610
  },
  {
    "name": "oluwakemi viatonu",
    "position": "transportation spec (traff op)",
    "salary": 71796
  },
  {
    "name": "theresa thompson",
    "position": "interstate compact program specialist",
    "salary": 71796
  },
  {
    "name": "stephanie holmes-scott",
    "position": "resource development specialist",
    "salary": 71796
  },
  {
    "name": "allison colombel",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "dona moon",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "jessica garrett",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "mary hammond",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "cynthia stewart",
    "position": "program analyst",
    "salary": 71796
  },
  {
    "name": "sanaz etminan",
    "position": "contract specialist",
    "salary": 71796
  },
  {
    "name": "gail o hannon",
    "position": "paralegal specialist",
    "salary": 71796
  },
  {
    "name": "danny weiss",
    "position": "workers compensation recipient",
    "salary": 114474
  },
  {
    "name": "melissa robinson",
    "position": "user support analyst",
    "salary": 71796
  },
  {
    "name": "lewis barnett",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "felicia dantzler",
    "position": "investigator",
    "salary": 71796
  },
  {
    "name": "julie daza",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "angela laster",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "bobby gboyor",
    "position": "paralegal specialist",
    "salary": 71796
  },
  {
    "name": "darryl colbert",
    "position": "investigator",
    "salary": 71796
  },
  {
    "name": "ken papali",
    "position": "auditor (tax)",
    "salary": 71796
  },
  {
    "name": "bentley noland",
    "position": "social worker",
    "salary": 71796
  },
  {
    "name": "nicole kerr",
    "position": "combo code compliance specialist",
    "salary": 71796
  },
  {
    "name": "arthur linder",
    "position": "principal",
    "salary": 114356
  },
  {
    "name": "miranda logan",
    "position": "labor market info specialist",
    "salary": 71796
  },
  {
    "name": "krystyna hopkinson",
    "position": "forensic scientist",
    "salary": 71796
  },
  {
    "name": "charlea jackson",
    "position": "law enforcement analyst",
    "salary": 71796
  },
  {
    "name": "fikru wake",
    "position": "transportation engineer",
    "salary": 71796
  },
  {
    "name": "mamadou ndaw",
    "position": "engineering technician",
    "salary": 71796
  },
  {
    "name": "byron ezell",
    "position": "editor (television)",
    "salary": 71796
  },
  {
    "name": "karen sawyer",
    "position": "rental conversion specialist",
    "salary": 71796
  },
  {
    "name": "ramon gillead",
    "position": "apprenticeship & training rep",
    "salary": 71796
  },
  {
    "name": "robert myers",
    "position": "lead survey analyst",
    "salary": 71796
  },
  {
    "name": "telita estes",
    "position": "workers comp claims examiner",
    "salary": 71796
  },
  {
    "name": "raj mathur",
    "position": "medical officer general practi",
    "salary": 162089
  },
  {
    "name": "gene page",
    "position": "attorney advisor",
    "salary": 114305
  },
  {
    "name": "dana anderson",
    "position": "fingerprint specialist",
    "salary": 71796
  },
  {
    "name": "eugenia palmer",
    "position": "program analyst",
    "salary": 71796
  },
  {
    "name": "parrish schoon",
    "position": "visual information spec (print",
    "salary": 71796
  },
  {
    "name": "eugene murphy",
    "position": "support services specialist",
    "salary": 71796
  },
  {
    "name": "richard coward",
    "position": "investigator",
    "salary": 71796
  },
  {
    "name": "lisa blackwell",
    "position": "information technology specialist",
    "salary": 71796
  },
  {
    "name": "keith wimbush",
    "position": "information technology specialist",
    "salary": 71796
  },
  {
    "name": "george davis",
    "position": "engineering technician",
    "salary": 71796
  },
  {
    "name": "francis phan",
    "position": "visual info specialist-graphic",
    "salary": 71796
  },
  {
    "name": "victorine gwei",
    "position": "transportation engineer",
    "salary": 71796
  },
  {
    "name": "james langford",
    "position": "attorney advisor",
    "salary": 114305
  },
  {
    "name": "keenan meaders",
    "position": "transportation engineering tec",
    "salary": 71796
  },
  {
    "name": "vallarie howard",
    "position": "contract compliance monitor",
    "salary": 71796
  },
  {
    "name": "jo garnett",
    "position": "program compliance specialist",
    "salary": 71796
  },
  {
    "name": "vanessa winfield",
    "position": "program analyst",
    "salary": 71796
  },
  {
    "name": "lidia orellana-o'kelly",
    "position": "contract and loan specialist",
    "salary": 71796
  },
  {
    "name": "kokeb tarekegn",
    "position": "environmental engineer",
    "salary": 71796
  },
  {
    "name": "max fano",
    "position": "accountant",
    "salary": 71796
  },
  {
    "name": "turnesha fish",
    "position": "transportation spec (traff op)",
    "salary": 71796
  },
  {
    "name": "lavonne chambers",
    "position": "vocational rehabilitation specialist",
    "salary": 71796
  },
  {
    "name": "monique berry",
    "position": "grants management specialist",
    "salary": 71796
  },
  {
    "name": "subhash kongassery",
    "position": "information technology specialist",
    "salary": 114293
  },
  {
    "name": "tiffany ware murrell",
    "position": "forensic investigator",
    "salary": 71796
  },
  {
    "name": "janice harris",
    "position": "program specialist",
    "salary": 71796
  },
  {
    "name": "vaughnetta paige young",
    "position": "program monitor",
    "salary": 71796
  },
  {
    "name": "cassandra lewis-battle",
    "position": "grant management specialist",
    "salary": 71796
  },
  {
    "name": "angela jackson",
    "position": "information technology specialist",
    "salary": 71796
  },
  {
    "name": "arian gibson",
    "position": "food technologist",
    "salary": 71796
  },
  {
    "name": "letitia winston",
    "position": "public health advisor",
    "salary": 71796
  },
  {
    "name": "kara cummings",
    "position": "forensic investigator",
    "salary": 71796
  },
  {
    "name": "maurice davis",
    "position": "medicaid waiver specialist",
    "salary": 71796
  },
  {
    "name": "reginald paramore",
    "position": "ems preceptor",
    "salary": 71695
  },
  {
    "name": "walter watts",
    "position": "professor",
    "salary": 114264
  },
  {
    "name": "joyce morton",
    "position": "ems preceptor",
    "salary": 71695
  },
  {
    "name": "larry lantz",
    "position": "ems preceptor",
    "salary": 71695
  },
  {
    "name": "vanessa gaskins harrison",
    "position": "management & program analyst",
    "salary": 71655
  },
  {
    "name": "melissa neal",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "shyra gregory",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "carmen ortiz-reyes",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "elisa johnson",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "linda linson",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "kara mitchell",
    "position": "program manager",
    "salary": 71655
  },
  {
    "name": "carla hillery",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "sanjukta misra",
    "position": "attorney advisor",
    "salary": 114236
  },
  {
    "name": "seema tejura",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "nakima davis",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "steven cartwright",
    "position": "project manager",
    "salary": 71655
  },
  {
    "name": "george dalton",
    "position": "program manager",
    "salary": 71655
  },
  {
    "name": "bonnie beste",
    "position": "program specialist",
    "salary": 71655
  },
  {
    "name": "peter phelps",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "elizabeth modderno",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "elyse lerum",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "laurenb guaraldo",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "meredith pressman",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "karen shaw",
    "position": "program manager",
    "salary": 114233
  },
  {
    "name": "chy mcghee",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "barrie hamilton",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "william morse",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "ivonne kendrick",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "lizbeth klein",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "amy london",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "jane kreisman",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "katharine gerard",
    "position": "instructional coach",
    "salary": 71650
  },
  {
    "name": "brittany may",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "joel loewenguth",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "karen watts",
    "position": "bureau chief",
    "salary": 114233
  },
  {
    "name": "stephen johns",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "samuel biwott",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "patrice billingsley",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "nichole david-martinez",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "megan fisk",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "kerri mckay",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "dominique holsey",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "nicole frame",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "chavonne bender",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "bernadette mouketou",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "nelson alli",
    "position": "auditor",
    "salary": 114033
  },
  {
    "name": "marie-gabrielle ngono-binelli",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "aprile hill",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "jacquelyn norton",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "diana moroney",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "jessica martinez",
    "position": "instructional coach",
    "salary": 71650
  },
  {
    "name": "shakera oliver-kee",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "celeste locke",
    "position": "instructional coach",
    "salary": 71650
  },
  {
    "name": "dana palmer",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "lyndel niles",
    "position": "counselor",
    "salary": 71650
  },
  {
    "name": "joann hill",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "nirmail dhaliwal",
    "position": "auditor (tax)",
    "salary": 114033
  },
  {
    "name": "lipia kurtz gereau",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "grace lee",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "stephanie rhein",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "consuelo lara",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "stephanie goldsten",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "michelle maldari",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "margaret kennedy",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "dorcas whitaker",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "mary calhoun",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "carlton ackerman",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "edward obaza",
    "position": "financial analyst",
    "salary": 114033
  },
  {
    "name": "regina bell",
    "position": "librarian",
    "salary": 71650
  },
  {
    "name": "michele bollinger",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "kyla dunn",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "lucrecia almazan-johnson",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "camille fair- bumbray",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "alonzo holloway",
    "position": "recreation specialist",
    "salary": 71650
  },
  {
    "name": "claire finn",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "guy smith",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "ramiro acosta",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "kimberly sherk",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "joan passerino",
    "position": "chief benefits officer",
    "salary": 161671
  },
  {
    "name": "gordon wong",
    "position": "information technology specialist",
    "salary": 114033
  },
  {
    "name": "julia rosen",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "anhela st hill",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "kathleen sheehy",
    "position": "instructional coach",
    "salary": 71650
  },
  {
    "name": "alicia sanz-izquierdo",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "jamie weng",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "melissa shaw",
    "position": "social worker",
    "salary": 71650
  },
  {
    "name": "charisse chambers",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "lauren shapiro",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "desmond alexander",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "susan fleishman- haese",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "pamela madison",
    "position": "special assistant",
    "salary": 114033
  },
  {
    "name": "nathalie dautruche",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "kathleen bergin",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "margaret bustos",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "cindy daigle alberty",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "rebecca frailey",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "ultressa diamond",
    "position": "psychologist,school",
    "salary": 71650
  },
  {
    "name": "shawna dix",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "paula crivelli-diamond",
    "position": "social worker",
    "salary": 71650
  },
  {
    "name": "danny bellamy",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "jennifer chang conroy",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "patricia graham hinsley",
    "position": "reimbursement specialist",
    "salary": 114033
  },
  {
    "name": "nicole braxton",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "keanya clifton-roach",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "clarence alford",
    "position": "librarian",
    "salary": 71650
  },
  {
    "name": "muriel cauthen",
    "position": "librarian",
    "salary": 71650
  },
  {
    "name": "reiss allen",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "donita valentine",
    "position": "athletic trainer",
    "salary": 71650
  },
  {
    "name": "kristin douglas",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "erin betz",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "nakia dow",
    "position": "teacher",
    "salary": 71650
  },
  {
    "name": "khadejah viera-johnson",
    "position": "clinical nurse",
    "salary": 71614
  },
  {
    "name": "wanda brown",
    "position": "pension project manager",
    "salary": 114033
  },
  {
    "name": "godwin ibeh",
    "position": "clinical nurse",
    "salary": 71614
  },
  {
    "name": "sybil ibeh",
    "position": "psychiatric nurse",
    "salary": 71614
  },
  {
    "name": "theresa atanga",
    "position": "clinical nurse",
    "salary": 71614
  },
  {
    "name": "regina norman",
    "position": "project director",
    "salary": 71578
  },
  {
    "name": "stanley onye",
    "position": "assistant to the dean for admin",
    "salary": 71578
  },
  {
    "name": "cheryl lawrence",
    "position": "executive assistant",
    "salary": 71578
  },
  {
    "name": "charles smith",
    "position": "information technology specialist",
    "salary": 71578
  },
  {
    "name": "joanne ross thomas",
    "position": "executive assistant",
    "salary": 71578
  },
  {
    "name": "stacie cronin",
    "position": "workers compensation recipient",
    "salary": 71552
  },
  {
    "name": "pawan tyagi",
    "position": "visiting associate professor",
    "salary": 71536
  },
  {
    "name": "jubril ogungbemi",
    "position": "chief network & systems admin",
    "salary": 114033
  },
  {
    "name": "joshua lasky",
    "position": "manager",
    "salary": 71471
  },
  {
    "name": "glenette hilton",
    "position": "captain (police oper)",
    "salary": 71471
  },
  {
    "name": "twyla jones",
    "position": "admissions counselor",
    "salary": 71471
  },
  {
    "name": "wanda pittman",
    "position": "payroll manager",
    "salary": 71471
  },
  {
    "name": "sheila weaver",
    "position": "head volleyball coach",
    "salary": 71471
  },
  {
    "name": "barbara green",
    "position": "registrar",
    "salary": 71471
  },
  {
    "name": "kwok lee",
    "position": "officer",
    "salary": 71427
  },
  {
    "name": "manuel rios",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "joseph thomas",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "choummany vorachack",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "frank schuetz",
    "position": "accountant",
    "salary": 114033
  },
  {
    "name": "robert owen",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "herbert rose",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "nichole williams turner",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony obrien",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "ronald warren",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "carole stears",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "yolonda lampkin",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jermaine wilson",
    "position": "master patrol officer",
    "salary": 71424
  },
  {
    "name": "roy melvin",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "mark wascavage",
    "position": "officer ert personnel",
    "salary": 71424
  },
  {
    "name": "ofelia cuesta",
    "position": "budget dir ocfo",
    "salary": 114033
  },
  {
    "name": "anthony willis",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "wendy payne",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "orlando teel",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "wayne sullivan",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "naomi sullivan",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "valenti thompson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "danny mccumbers",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "denise roy",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "sheree prince",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "marvin williams",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "grace eng",
    "position": "program analyst",
    "salary": 114033
  },
  {
    "name": "bray jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "milan jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "adbul greene",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "james weaver",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "hyung moon",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "frederick lee",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "dion smith",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "gregory rock",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "angel ortiz",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "todd korson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "debra taylor",
    "position": "debt manager",
    "salary": 114033
  },
  {
    "name": "lisa worrell",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "willie tabor",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "juan wallace",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "james penland",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jason pearce best",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "gregory philpotts",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "james koenig",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "lee nobriga",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "airey moore",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "ronald palmer",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "debra bacon",
    "position": "accountant",
    "salary": 114033
  },
  {
    "name": "latonia nicholson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jose lugo",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "sean savoy",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "max salazar",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "william mattox",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "christopher wickham",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "aris paredes",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "danielle schaffrath",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "douglas mason",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "william lyke",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "peter thura",
    "position": "medical officer general practi",
    "salary": 161275
  },
  {
    "name": "marie kamara",
    "position": "accountant",
    "salary": 114033
  },
  {
    "name": "ivan quiles",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "garfield malcolm",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "sally parks",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony simms",
    "position": "master patrol officer",
    "salary": 71424
  },
  {
    "name": "parminder singh",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "monica whalen",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "ricardo cuadra",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "richard schwartze",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "raymond mincey",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael morawski",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "duane smith",
    "position": "cost analyst",
    "salary": 114033
  },
  {
    "name": "marcellus ouzts",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "gregory kurtz",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "emmanuel lebi",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "malita mcgee",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "shynita williams",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "robert wells",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "mccoy perry",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "tracey williams",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "darrell marshall",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "luis luna",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "gabrielle barry",
    "position": "chief of marketing",
    "salary": 114033
  },
  {
    "name": "daniel simms",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "rodney wilkinson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael mason",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "kyra simms",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "claude martin",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael saraco",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "kareem pettegrue",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony hendrick",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "bobbie jefferson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael fisher",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "benjamin desantis",
    "position": "program assistant",
    "salary": 114033
  },
  {
    "name": "reginald hamilton",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "babar dass",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "charles johnson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "gregory frost",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "larry hale",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "junis fletcher",
    "position": "master patrol officer",
    "salary": 71424
  },
  {
    "name": "nisa boone",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael handy",
    "position": "crime scene srch ofr w/ad cmp",
    "salary": 71424
  },
  {
    "name": "timothy holmes",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "robert braxton",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "saundra mitchal",
    "position": "chief of marketing",
    "salary": 114033
  },
  {
    "name": "phillip dickson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "juana diaz",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "donald dukes",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "vincent dunbar",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "frank durphy",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael deprince",
    "position": "crime scene srch ofr",
    "salary": 71424
  },
  {
    "name": "james johnson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "carol dodds",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jaime cullen-dega",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jose ranero",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jeanne hoover",
    "position": "financial manager and p",
    "salary": 114033
  },
  {
    "name": "howard anderson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "san bailey williams",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "robert barillaro",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony baker",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jemal averette",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "sharron artis",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "marcus gaines",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "franklin bauserman",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "shauntelle anderson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "rhonda hardy",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "carlotta osorio",
    "position": "financial systems analyst",
    "salary": 114026
  },
  {
    "name": "ernie davis",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "charles james",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "stephen franchak",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "john hansohn",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "eldred boria",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "kurt hansen",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "christopher hall",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "laurence beam",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "lamont carter",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jayson cropper",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "adrienne sedgewick",
    "position": "financial database analyst",
    "salary": 114026
  },
  {
    "name": "jeffery carroll",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "samuel geddies",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "norman kenny",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony bingham",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "michael kersey",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "samuel covert",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "john carruthers",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "gregory curry",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "bryan cover",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "ana casiano",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "ranjan raval",
    "position": "accounting systems manager",
    "salary": 114026
  },
  {
    "name": "christopher beyer",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "larry elliott",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "james gartland",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jenevah hines",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "johnny jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "isabella jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "elizabeth jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "marcus boddie",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony bigelow",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "brian hays",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "clarence campbell",
    "position": "budget analyst",
    "salary": 114000
  },
  {
    "name": "andre fleming",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "ronald faunteroy",
    "position": "master patrol officer",
    "salary": 71424
  },
  {
    "name": "paul johnson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "kristopher jordan",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "anthony jackson",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "alton bryant",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "lashonda hart",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "antilecia contee",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "andre harrison",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "willie harris",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "alan etter",
    "position": "vp, of univ rel & pub aff",
    "salary": 161267
  },
  {
    "name": "zaneta brown",
    "position": "bureau chief (adolescent & sch",
    "salary": 114000
  },
  {
    "name": "charles jenkins",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "james craig",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "keith gilbert",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "thomas jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "la goodwin",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "tracy jones",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "thomas crabb",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "jose gonzalez tirado",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "terrence brooks",
    "position": "officer",
    "salary": 71424
  },
  {
    "name": "glen gibson",
    "position": "architect (realty)",
    "salary": 71375
  },
  {
    "name": "edward giefer",
    "position": "assistant dir strategic ops & finan",
    "salary": 113985
  },
  {
    "name": "george thomas",
    "position": "instructor, jrotc",
    "salary": 71342
  },
  {
    "name": "leslie vermillion",
    "position": "assoc professor",
    "salary": 71300
  },
  {
    "name": "stephen brookbank",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "michael isley",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "ted osgood",
    "position": "firefighter vice tech",
    "salary": 71172
  },
  {
    "name": "darren potter",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "artis trapp",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "marc evans",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "james hyde",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "jay bieler",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "kelly o meara",
    "position": "executive director",
    "salary": 113970
  },
  {
    "name": "stephen gilbert",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "terry mcallister",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "richard schwarzman",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "rodney mason",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "john comer",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "thomas keelan",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "irving gillis",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "paul ridgely",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "jay brown",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "ronaun perez",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "raja bandla",
    "position": "information technology specialist",
    "salary": 113970
  },
  {
    "name": "william croson",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "michael lancaster",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "daniel mungo",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "richard willey",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "carlos braxton",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "john waters",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "darrell tremblay",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "christopher walker",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "robert kearney",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "harry wessolleck",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "brady birdsong",
    "position": "chief information officer",
    "salary": 113970
  },
  {
    "name": "derrick yates",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "thomas labille",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "dana archie",
    "position": "firefighter vice tech",
    "salary": 71172
  },
  {
    "name": "reginald miller",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "dean smothers",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "andre shepard",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "aaron blucker",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "luciean reid",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "timothy baroody",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "derek payne",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "antar johnson",
    "position": "assistant gen counsel",
    "salary": 113911
  },
  {
    "name": "thomas rine",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "michael hansford",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "curtis clark",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "john barnes",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "vernon peterson",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "jonathan covey",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "joseph baka",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "rodney taylor",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "wayne chapman",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "john tippett",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "james snight",
    "position": "information technology specialist",
    "salary": 113911
  },
  {
    "name": "alfonso clary",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "irving mitchell",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "tyrone durham",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "kirk hopkins",
    "position": "firefighter vice tech",
    "salary": 71172
  },
  {
    "name": "john chada",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "hubert mims",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "david terry",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "darrell nieman",
    "position": "firefighter vice tech",
    "salary": 71172
  },
  {
    "name": "david schaake",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "david ballard",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "johnnie simmons york",
    "position": "information technology specialist",
    "salary": 113911
  },
  {
    "name": "kevin frazier",
    "position": "firefighter vice tech",
    "salary": 71172
  },
  {
    "name": "bernard holston",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "kirk wilson",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "billy mims",
    "position": "firefighter tech",
    "salary": 71172
  },
  {
    "name": "patricia tellish",
    "position": "workers compensation recipient",
    "salary": 71116
  },
  {
    "name": "tomi rucker",
    "position": "fire arson investigator armed",
    "salary": 71096
  },
  {
    "name": "lawrence wilson",
    "position": "fire arson investigator armed",
    "salary": 71096
  },
  {
    "name": "kenneth menard",
    "position": "fire arson investigator armed",
    "salary": 71096
  },
  {
    "name": "james taylor",
    "position": "fire arson investigator armed",
    "salary": 71096
  },
  {
    "name": "felicia ross",
    "position": "psychologist,school",
    "salary": 71086
  },
  {
    "name": "satyanarayana kommuri",
    "position": "information technology specialist",
    "salary": 113911
  },
  {
    "name": "ellen mazer",
    "position": "social worker",
    "salary": 71086
  },
  {
    "name": "oral grant",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "margery richardson",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "louise lewis",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "danielle krafft",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "sarah jackson",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "jamie harrison",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "mark otero",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "nancy khuu",
    "position": "instructional coach",
    "salary": 71086
  },
  {
    "name": "kenneth neat",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "portia perry",
    "position": "auditor (tax)",
    "salary": 113911
  },
  {
    "name": "karen cowden",
    "position": "librarian",
    "salary": 71086
  },
  {
    "name": "melissa denbow",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "kathleen brown",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "tiyanna brooks",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "suzanne dadzie",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "dedras slade",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "alexander ayrom",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "antricia klaiber",
    "position": "teacher",
    "salary": 71086
  },
  {
    "name": "cynthia holman",
    "position": "accountant",
    "salary": 71052
  },
  {
    "name": "lisa bryant",
    "position": "accountant",
    "salary": 71052
  },
  {
    "name": "mary walker",
    "position": "chief of staff",
    "salary": 160938
  },
  {
    "name": "leroy clay",
    "position": "agency fiscal officer",
    "salary": 113911
  },
  {
    "name": "abyssinia truneh",
    "position": "budget analyst",
    "salary": 71052
  },
  {
    "name": "shaniqua richardson",
    "position": "budget analyst",
    "salary": 71052
  },
  {
    "name": "beverly keenon",
    "position": "revenue officer",
    "salary": 71052
  },
  {
    "name": "theresa lake",
    "position": "accounts payable specialis",
    "salary": 71052
  },
  {
    "name": "kelly onley",
    "position": "cash management analyst",
    "salary": 71052
  },
  {
    "name": "valencia branham henry",
    "position": "accounts payable specialis",
    "salary": 71052
  },
  {
    "name": "alicia smith",
    "position": "accounts payable specialis",
    "salary": 71052
  },
  {
    "name": "marisa dunmore",
    "position": "executive assistant",
    "salary": 71052
  },
  {
    "name": "bret brown",
    "position": "bomb squad tech",
    "salary": 71023
  },
  {
    "name": "esther shelton",
    "position": "teacher",
    "salary": 71005
  },
  {
    "name": "bruce jones",
    "position": "director information technolog",
    "salary": 113911
  },
  {
    "name": "robert haldeman",
    "position": "recreation specialist",
    "salary": 71000
  },
  {
    "name": "cheryl brown",
    "position": "correctional treatment specialist",
    "salary": 70997
  },
  {
    "name": "alhaji timbo",
    "position": "administrative specialist",
    "salary": 70920
  },
  {
    "name": "joseph lang",
    "position": "assc ath dir for compliance",
    "salary": 70920
  },
  {
    "name": "sherman cook",
    "position": "program manager",
    "salary": 70920
  },
  {
    "name": "patrick knapp",
    "position": "associate director",
    "salary": 70920
  },
  {
    "name": "delila pinckney",
    "position": "coord, special education",
    "salary": 70914
  },
  {
    "name": "donna green",
    "position": "statistician",
    "salary": 70893
  },
  {
    "name": "sharron terrell",
    "position": "assoc professor",
    "salary": 70885
  },
  {
    "name": "esther coleman",
    "position": "attorney advisor",
    "salary": 70871
  },
  {
    "name": "charelle brown",
    "position": "information technology specialist",
    "salary": 113911
  },
  {
    "name": "april randall",
    "position": "attorney advisor",
    "salary": 70871
  },
  {
    "name": "marva deskins",
    "position": "attorney advisor",
    "salary": 70871
  },
  {
    "name": "starr granby-collins",
    "position": "attorney advisor",
    "salary": 70871
  },
  {
    "name": "andrew brisker",
    "position": "attorney advisor",
    "salary": 70871
  },
  {
    "name": "lauren maxwell",
    "position": "trial attorney",
    "salary": 70871
  },
  {
    "name": "nada paisant",
    "position": "trial attorney",
    "salary": 70871
  },
  {
    "name": "gwinda chaney",
    "position": "workers compensation recipient",
    "salary": 70619
  },
  {
    "name": "oneita gibbs",
    "position": "staff assistant",
    "salary": 70615
  },
  {
    "name": "avetta white",
    "position": "counselor",
    "salary": 70615
  },
  {
    "name": "simona gerhardt",
    "position": "teacher",
    "salary": 70519
  },
  {
    "name": "ana reyes",
    "position": "financial manager",
    "salary": 113911
  },
  {
    "name": "caleb rossiter",
    "position": "teacher",
    "salary": 70519
  },
  {
    "name": "w. clarke",
    "position": "teacher",
    "salary": 70519
  },
  {
    "name": "amanda breitfeld",
    "position": "psychologist,school",
    "salary": 70519
  },
  {
    "name": "adam kirschenbaum",
    "position": "teacher",
    "salary": 70519
  },
  {
    "name": "victor johnson",
    "position": "facility manager",
    "salary": 70500
  },
  {
    "name": "deirdre smith",
    "position": "constituent services specialist",
    "salary": 70500
  },
  {
    "name": "joanne favors",
    "position": "research associate (ipp)",
    "salary": 70474
  },
  {
    "name": "aurelia butler smith",
    "position": "service coordinator",
    "salary": 70437
  },
  {
    "name": "walter mitchell",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "charles gamble",
    "position": "service coordinator",
    "salary": 70437
  },
  {
    "name": "norris dawson",
    "position": "construction analyst",
    "salary": 113896
  },
  {
    "name": "carla mosley",
    "position": "environmental specialist",
    "salary": 70437
  },
  {
    "name": "clifford jarmon",
    "position": "environmental program specialist",
    "salary": 70437
  },
  {
    "name": "jerome thomas",
    "position": "engineering technician",
    "salary": 70437
  },
  {
    "name": "eric thompson",
    "position": "engineering technician",
    "salary": 70437
  },
  {
    "name": "jose wood",
    "position": "engineering technician",
    "salary": 70437
  },
  {
    "name": "edward weaver",
    "position": "contract services specialist",
    "salary": 70437
  },
  {
    "name": "betsy wohl",
    "position": "vocational rehabilitation specialist",
    "salary": 70437
  },
  {
    "name": "esmeraldo cruz",
    "position": "contract administrator",
    "salary": 70437
  },
  {
    "name": "cosmos offiah",
    "position": "engineering technician",
    "salary": 70437
  },
  {
    "name": "jonathan smith",
    "position": "vocational development special",
    "salary": 70437
  },
  {
    "name": "mary souza",
    "position": "teacher",
    "salary": 113616
  },
  {
    "name": "alberta mccollum",
    "position": "juv justice inst counselor",
    "salary": 70437
  },
  {
    "name": "abidemi isiaq",
    "position": "policy analyst",
    "salary": 70437
  },
  {
    "name": "pamela brown",
    "position": "program analyst",
    "salary": 70437
  },
  {
    "name": "veronica holley",
    "position": "vocational development special",
    "salary": 70437
  },
  {
    "name": "ivy isong",
    "position": "public health nutritionist",
    "salary": 70437
  },
  {
    "name": "john walsh",
    "position": "detention review specialist",
    "salary": 70437
  },
  {
    "name": "john chism",
    "position": "transportation engineer tech",
    "salary": 70437
  },
  {
    "name": "calvin smith",
    "position": "detention review specialist",
    "salary": 70437
  },
  {
    "name": "cheryl thorpe",
    "position": "transition specialist",
    "salary": 70437
  },
  {
    "name": "cheryl ball",
    "position": "transportation spec (traff op)",
    "salary": 70437
  },
  {
    "name": "sandra hall",
    "position": "teacher",
    "salary": 113616
  },
  {
    "name": "james manning",
    "position": "engineering technician",
    "salary": 70437
  },
  {
    "name": "dorothy hunt",
    "position": "vocational rehabilitation specialist",
    "salary": 70437
  },
  {
    "name": "beverly mccoy",
    "position": "juv justice inst counselor",
    "salary": 70437
  },
  {
    "name": "diana rutledge",
    "position": "medicaid waiver specialist",
    "salary": 70437
  },
  {
    "name": "byron hope",
    "position": "contract services specialist",
    "salary": 70437
  },
  {
    "name": "joseph hooper",
    "position": "support enforcement specialist",
    "salary": 70437
  },
  {
    "name": "corliss walker",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "lisa davis",
    "position": "staff assistant",
    "salary": 70437
  },
  {
    "name": "stanley peters",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "george peake",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "dianne moore",
    "position": "teacher",
    "salary": 113616
  },
  {
    "name": "linda roberts",
    "position": "program support assistant",
    "salary": 70437
  },
  {
    "name": "ana chavez",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "harold spann",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "cheryl doby copeland",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "deborah evans",
    "position": "community support worker",
    "salary": 70437
  },
  {
    "name": "victor wenger",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "frances alves",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "andrea burns",
    "position": "intake hotline worker",
    "salary": 70437
  },
  {
    "name": "debra allen golden",
    "position": "community support worker",
    "salary": 70437
  },
  {
    "name": "gregory jackson",
    "position": "revenue officer",
    "salary": 70437
  },
  {
    "name": "detria liles hutchinson",
    "position": "diversity program manager",
    "salary": 113555
  },
  {
    "name": "george neal",
    "position": "mental health specialist",
    "salary": 70437
  },
  {
    "name": "michelle millard simms",
    "position": "resource specialist",
    "salary": 70437
  },
  {
    "name": "reginald jackson",
    "position": "appraiser",
    "salary": 70437
  },
  {
    "name": "john nyarku",
    "position": "zoning specialist",
    "salary": 70437
  },
  {
    "name": "frances melby",
    "position": "accountant",
    "salary": 70437
  },
  {
    "name": "la beckwith",
    "position": "paralegal specialist",
    "salary": 70437
  },
  {
    "name": "sabrina brown",
    "position": "support enforcement specialist",
    "salary": 70437
  },
  {
    "name": "marvin day",
    "position": "investigator",
    "salary": 70437
  },
  {
    "name": "joan hungerford",
    "position": "paralegal specialist",
    "salary": 70437
  },
  {
    "name": "mary floyd",
    "position": "support enforcement specialist",
    "salary": 70437
  },
  {
    "name": "brenda perkins",
    "position": "administrative officer",
    "salary": 113555
  },
  {
    "name": "debora deal",
    "position": "support enforcement specialist",
    "salary": 70437
  },
  {
    "name": "keith chatman",
    "position": "auditor (tax)",
    "salary": 70437
  },
  {
    "name": "wilfred banaci",
    "position": "service coordinator",
    "salary": 70437
  },
  {
    "name": "lydia martin",
    "position": "service coordinator",
    "salary": 70437
  },
  {
    "name": "aileen ingram",
    "position": "contract specialist",
    "salary": 70437
  },
  {
    "name": "judith oliver",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "vanessa hardy",
    "position": "staff assistant",
    "salary": 70437
  },
  {
    "name": "charlene cheeks",
    "position": "unemploy comp claims examiner",
    "salary": 70437
  },
  {
    "name": "patricia wood",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "tyrone thomas",
    "position": "plans review coor",
    "salary": 70437
  },
  {
    "name": "mohamed mohamed",
    "position": "assoc chief financial officer",
    "salary": 160038
  },
  {
    "name": "pamela banks",
    "position": "associate dir for wage & hour",
    "salary": 113528
  },
  {
    "name": "wadelle anderson",
    "position": "uc claims examiner",
    "salary": 70437
  },
  {
    "name": "curtis massey",
    "position": "manpower development specialist",
    "salary": 70437
  },
  {
    "name": "herman white",
    "position": "insurance exam workers comp",
    "salary": 70437
  },
  {
    "name": "patrica wood",
    "position": "unemploy comp claims examiner",
    "salary": 70437
  },
  {
    "name": "mark hammond",
    "position": "training instructor",
    "salary": 70437
  },
  {
    "name": "alfred buadu",
    "position": "investigator",
    "salary": 70437
  },
  {
    "name": "ronald tate",
    "position": "construction representative",
    "salary": 70437
  },
  {
    "name": "quentin cheeks",
    "position": "unemploy comp claims examiner",
    "salary": 70437
  },
  {
    "name": "maurice black",
    "position": "insurance exam worker comp",
    "salary": 70437
  },
  {
    "name": "jane ndaka",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "cornelia spinner",
    "position": "dean",
    "salary": 113445
  },
  {
    "name": "helene hendricks",
    "position": "program suppor",
    "salary": 70437
  },
  {
    "name": "michele reynolds",
    "position": "manpower development specialist",
    "salary": 70437
  },
  {
    "name": "patricia williams",
    "position": "manpower development specialist",
    "salary": 70437
  },
  {
    "name": "rebecca bell",
    "position": "industrial hygienist",
    "salary": 70437
  },
  {
    "name": "christy pryor",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "lisa chapman",
    "position": "investigator",
    "salary": 70437
  },
  {
    "name": "iris ross",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "michael watts",
    "position": "manpower development specialist",
    "salary": 70437
  },
  {
    "name": "carnelia austin",
    "position": "management analyst",
    "salary": 70437
  },
  {
    "name": "bruce snyder",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "ann richardson",
    "position": "assoc dean",
    "salary": 113445
  },
  {
    "name": "jahdal mckenzie",
    "position": "comb code comp specialist",
    "salary": 70437
  },
  {
    "name": "karen towles",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "delores jackson",
    "position": "administrative assistant",
    "salary": 70437
  },
  {
    "name": "barbara roberts",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "cassandra wright",
    "position": "management analyst",
    "salary": 70437
  },
  {
    "name": "sylvanus nnaji",
    "position": "compliance monitor",
    "salary": 70437
  },
  {
    "name": "april yarborough",
    "position": "unemploy comp claims examiner",
    "salary": 70437
  },
  {
    "name": "denise beales",
    "position": "infection control specialist",
    "salary": 70437
  },
  {
    "name": "william anderson",
    "position": "uc claims examiner",
    "salary": 70437
  },
  {
    "name": "john marino",
    "position": "training instructor",
    "salary": 70437
  },
  {
    "name": "cassandra johnson",
    "position": "capital program officer",
    "salary": 113445
  },
  {
    "name": "serena mcguire",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "walter smith",
    "position": "paralegal specialist",
    "salary": 70437
  },
  {
    "name": "wanderline benjamin",
    "position": "computer program analyst",
    "salary": 70437
  },
  {
    "name": "patricia mckinlay",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "audrey fields",
    "position": "children's librarian",
    "salary": 70437
  },
  {
    "name": "lawrence smith",
    "position": "investigator",
    "salary": 70437
  },
  {
    "name": "susan keren",
    "position": "children's librarian",
    "salary": 70437
  },
  {
    "name": "dennis golden",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "betsy fowler",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "gloria shelby",
    "position": "comb code comp specialist",
    "salary": 70437
  },
  {
    "name": "mark viehmeyer",
    "position": "attorney advisor",
    "salary": 113374
  },
  {
    "name": "robert sharpe",
    "position": "training instructor",
    "salary": 70437
  },
  {
    "name": "benjamin katz",
    "position": "compliance monitor",
    "salary": 70437
  },
  {
    "name": "mozella johnson",
    "position": "correspondence management specialist",
    "salary": 70437
  },
  {
    "name": "olgie antoine",
    "position": "comb code comp specialist",
    "salary": 70437
  },
  {
    "name": "phillip bishop",
    "position": "compliance monitor",
    "salary": 70437
  },
  {
    "name": "william gibson",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "pinar arcan",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "gregg grisa",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "david gantt",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "rebecca fritz",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "wayne beyer",
    "position": "trial attorney",
    "salary": 113374
  },
  {
    "name": "sheldon freeman",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "donald curtis",
    "position": "manpower development specialist",
    "salary": 70437
  },
  {
    "name": "charlotte desilets",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "martin burrows",
    "position": "librarian",
    "salary": 70437
  },
  {
    "name": "jean frederick mccollum",
    "position": "vocational development special",
    "salary": 70429
  },
  {
    "name": "artina russell",
    "position": "investigator",
    "salary": 70429
  },
  {
    "name": "jermell howard",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "jacqueline simpkins",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "tanisha beaty",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "katherine washington",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "linden dejoseph",
    "position": "administrative srvs manager",
    "salary": 113319
  },
  {
    "name": "michelle allen",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "william acha fonge",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "judith abunaw",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "donna wright",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "dwayne grey",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "denise carter",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "arnyis woodberry",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "april hart",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "brooke hamilton",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "mary morrison",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "lisa franklin kelly",
    "position": "capital operations project manager",
    "salary": 113319
  },
  {
    "name": "stephanie fontenot",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "beverly myers",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "charmaine lydon-betjemann",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "sophia ferguson",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "renee johnson",
    "position": "medical technologist",
    "salary": 70427
  },
  {
    "name": "larry mccall",
    "position": "social worker",
    "salary": 70427
  },
  {
    "name": "rickey robinson",
    "position": "a/c equipment mechanic",
    "salary": 70408
  },
  {
    "name": "nicole deboard",
    "position": "auditor (tax)",
    "salary": 70362
  },
  {
    "name": "lakeisha beasley",
    "position": "nurse",
    "salary": 70347
  },
  {
    "name": "shertonne whiting",
    "position": "teacher",
    "salary": 70318
  },
  {
    "name": "patricia zingsheim",
    "position": "assoc dir for revitalization",
    "salary": 113319
  },
  {
    "name": "jinyu ou",
    "position": "teacher",
    "salary": 70318
  },
  {
    "name": "tabatha ryan",
    "position": "teacher",
    "salary": 70318
  },
  {
    "name": "abdollah darai",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "melvin mitchell",
    "position": "visiting associate professor",
    "salary": 70300
  },
  {
    "name": "willie garrett",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "leander coles",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "arlene king berry",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "lisa moon",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "brenda brown",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "judith ramey",
    "position": "assoc professor",
    "salary": 70300
  },
  {
    "name": "herbert jeter",
    "position": "program manager",
    "salary": 113319
  },
  {
    "name": "gloria jackson",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "melvin brown",
    "position": "building management specialist",
    "salary": 70259
  },
  {
    "name": "enid mingo-swann",
    "position": "building management specialist",
    "salary": 70259
  },
  {
    "name": "maria prescott",
    "position": "hr specialist (emp benefits)",
    "salary": 70259
  },
  {
    "name": "daphne hawkins",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "paulette black",
    "position": "training technician",
    "salary": 70259
  },
  {
    "name": "linda brock",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "richard coward",
    "position": "housing coordinato",
    "salary": 70259
  },
  {
    "name": "william branch",
    "position": "archivist",
    "salary": 70259
  },
  {
    "name": "joyce ogburn",
    "position": "notary & authentication specialist",
    "salary": 70259
  },
  {
    "name": "deloras shepherd",
    "position": "assoc chief financial officer",
    "salary": 160038
  },
  {
    "name": "edmond wybaillie",
    "position": "lead, criminal investigator",
    "salary": 113294
  },
  {
    "name": "patricia hunter",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "jerome mcfarland",
    "position": "physical security specialist",
    "salary": 70259
  },
  {
    "name": "yolanda lyles",
    "position": "it spec (datamgt/custspt)",
    "salary": 70259
  },
  {
    "name": "lela jones",
    "position": "hr specialist (pffrb)",
    "salary": 70259
  },
  {
    "name": "emily hosenbackez",
    "position": "criminal investigator",
    "salary": 70259
  },
  {
    "name": "willieum melton",
    "position": "analyst",
    "salary": 70259
  },
  {
    "name": "stephen rice",
    "position": "community planner",
    "salary": 70259
  },
  {
    "name": "clivens dorvil",
    "position": "program specialist",
    "salary": 70259
  },
  {
    "name": "joyce white",
    "position": "y/f team meeting facilitator",
    "salary": 70259
  },
  {
    "name": "hubert matthews",
    "position": "contract services specialist",
    "salary": 70259
  },
  {
    "name": "hallie clemm",
    "position": "solid waste management deputy admin",
    "salary": 113275
  },
  {
    "name": "valerie thomas",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "mark bjorge",
    "position": "customer service representative",
    "salary": 70259
  },
  {
    "name": "sharon perritt",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "john savage",
    "position": "mngmt and program analyst",
    "salary": 70259
  },
  {
    "name": "george ferguson",
    "position": "youth workforce dev specialist",
    "salary": 70259
  },
  {
    "name": "bettina coleman",
    "position": "grants program manager",
    "salary": 70259
  },
  {
    "name": "rahman stringfield",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "reginald greene",
    "position": "building management specialist",
    "salary": 70259
  },
  {
    "name": "gregory lumpkin",
    "position": "building management specialist",
    "salary": 70259
  },
  {
    "name": "russell gardner",
    "position": "emergency planning specialist",
    "salary": 70259
  },
  {
    "name": "linda grant",
    "position": "public affairs specialist",
    "salary": 113242
  },
  {
    "name": "wendell holt",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "leslie harrison",
    "position": "emergency management training ofr",
    "salary": 70259
  },
  {
    "name": "ngoc trinh",
    "position": "community service representative",
    "salary": 70259
  },
  {
    "name": "andrea hubbard",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "antilecia o'neal",
    "position": "human resources specialist",
    "salary": 70259
  },
  {
    "name": "emmanuel amaechi",
    "position": "safety & occup hlth specialist",
    "salary": 70259
  },
  {
    "name": "angelo stewart",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "vanessa glaspie",
    "position": "human resources specialist",
    "salary": 70259
  },
  {
    "name": "adonia hakenson",
    "position": "project coor",
    "salary": 70259
  },
  {
    "name": "james jackson",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "harriet segar",
    "position": "attorney advisor",
    "salary": 113125
  },
  {
    "name": "joseph blandford",
    "position": "facilities coordinator",
    "salary": 70259
  },
  {
    "name": "stephanie holder",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "martha walls",
    "position": "project coordinator",
    "salary": 70259
  },
  {
    "name": "thida hassan",
    "position": "project coor",
    "salary": 70259
  },
  {
    "name": "phillip savoy",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "jayme harper",
    "position": "project coor",
    "salary": 70259
  },
  {
    "name": "mikka harvey",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "william vargas",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "nicholas bittle",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "julianna gafar",
    "position": "telecomms specialist",
    "salary": 70259
  },
  {
    "name": "thomas whittle",
    "position": "principal",
    "salary": 113110
  },
  {
    "name": "sara tzeggai",
    "position": "dietitian",
    "salary": 70259
  },
  {
    "name": "michelle lewis",
    "position": "interpreter american sign lang",
    "salary": 70259
  },
  {
    "name": "george branyan",
    "position": "highway safety specialist",
    "salary": 70259
  },
  {
    "name": "sadiki rush",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "jason chandler",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "anne williams",
    "position": "customer svcs program speciali",
    "salary": 70259
  },
  {
    "name": "faith scott-dunson",
    "position": "management analyst",
    "salary": 70259
  },
  {
    "name": "wendy gray",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "gwendolyn manigault",
    "position": "building management specialist",
    "salary": 70259
  },
  {
    "name": "bertha jordan",
    "position": "human resources specialist",
    "salary": 70259
  },
  {
    "name": "peter cahall",
    "position": "principal",
    "salary": 113110
  },
  {
    "name": "michele carter",
    "position": "criminal investigator",
    "salary": 70259
  },
  {
    "name": "dagnachew fisseha",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "neil curameng",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "theory harrison",
    "position": "management analyst",
    "salary": 70259
  },
  {
    "name": "christine dewitt",
    "position": "clinical care coor",
    "salary": 70259
  },
  {
    "name": "kathy jones-thompson",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "deirdre cogan",
    "position": "create art therapy music",
    "salary": 70259
  },
  {
    "name": "charles jolley",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "angela robinson",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "kimberly fields",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "michael johnson",
    "position": "principal",
    "salary": 113110
  },
  {
    "name": "delores mason",
    "position": "mental health coordinator",
    "salary": 70259
  },
  {
    "name": "rosa burch",
    "position": "support services specialist",
    "salary": 70259
  },
  {
    "name": "deborah ali",
    "position": "early intervention specialist",
    "salary": 70259
  },
  {
    "name": "babatunde allison",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "esther thomas",
    "position": "victim specialist",
    "salary": 70259
  },
  {
    "name": "sharita smith",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "syed quadri",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "quameice harris",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "jocelyn johnson",
    "position": "program specialist",
    "salary": 70259
  },
  {
    "name": "sandra little",
    "position": "hearing rep",
    "salary": 70259
  },
  {
    "name": "gwendolyn grant",
    "position": "principal",
    "salary": 113110
  },
  {
    "name": "cardell saunders",
    "position": "food program specialist",
    "salary": 70259
  },
  {
    "name": "jeannette lipford",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "patricia freeman",
    "position": "food program specialist",
    "salary": 70259
  },
  {
    "name": "orman feres",
    "position": "state accreditation coordinato",
    "salary": 70259
  },
  {
    "name": "carol akanegbu",
    "position": "project coordinator",
    "salary": 70259
  },
  {
    "name": "diane anderson",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "sharon pellum",
    "position": "public health analyst",
    "salary": 70259
  },
  {
    "name": "geraldine pierce",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "peggy alston",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "toshia berry",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "christopher murray",
    "position": "budget analyst",
    "salary": 113000
  },
  {
    "name": "charles davis",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "washington karvee",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "eric brock",
    "position": "training specialist",
    "salary": 70259
  },
  {
    "name": "helen hall",
    "position": "victim specialist",
    "salary": 70259
  },
  {
    "name": "karen nurse",
    "position": "consumer services specialist",
    "salary": 70259
  },
  {
    "name": "damon patterson",
    "position": "consumer services specialist",
    "salary": 70259
  },
  {
    "name": "linda johnson",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "jose rojas porro",
    "position": "fleet program specialist",
    "salary": 70259
  },
  {
    "name": "hubert fogan",
    "position": "election support specialist",
    "salary": 70259
  },
  {
    "name": "diedre bell",
    "position": "food program specialist",
    "salary": 70259
  },
  {
    "name": "justin constantino",
    "position": "budget analyst",
    "salary": 113000
  },
  {
    "name": "michelle johnson",
    "position": "compliance analyst",
    "salary": 70259
  },
  {
    "name": "marlene castro",
    "position": "family liaison specialist",
    "salary": 70259
  },
  {
    "name": "sybongile cook",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "donald jackson",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "mable spears",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "robert schneider",
    "position": "book store manager",
    "salary": 70259
  },
  {
    "name": "lawanda hale",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "corey beasley",
    "position": "business cert specialist",
    "salary": 70259
  },
  {
    "name": "samuel conyers",
    "position": "administrative specialist",
    "salary": 70259
  },
  {
    "name": "karen gay",
    "position": "staff assistant",
    "salary": 70259
  },
  {
    "name": "anthony pompa",
    "position": "dcfo ofos",
    "salary": 160038
  },
  {
    "name": "sheron colston",
    "position": "principal",
    "salary": 112984
  },
  {
    "name": "venola johnson",
    "position": "training specialist",
    "salary": 70259
  },
  {
    "name": "greer hill",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "michael goodno",
    "position": "bicycle program specialist",
    "salary": 70259
  },
  {
    "name": "mohamed said",
    "position": "computer engineer",
    "salary": 70259
  },
  {
    "name": "elaine gelber",
    "position": "contract services specialist",
    "salary": 70259
  },
  {
    "name": "melinda morgan",
    "position": "management liaison specialist",
    "salary": 70259
  },
  {
    "name": "linda ritchards",
    "position": "administrative program coor",
    "salary": 70259
  },
  {
    "name": "crystal adams",
    "position": "management analyst",
    "salary": 70259
  },
  {
    "name": "ann simmons",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "sheila henderson",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "brandon eatman",
    "position": "principal",
    "salary": 112984
  },
  {
    "name": "charma rhoden",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "timothy pickett",
    "position": "administrative officer",
    "salary": 70259
  },
  {
    "name": "roland brown",
    "position": "telecomms specialist",
    "salary": 70259
  },
  {
    "name": "lewis booker",
    "position": "transportation planner",
    "salary": 70259
  },
  {
    "name": "marlene johnson",
    "position": "telecommunications equip opera",
    "salary": 70259
  },
  {
    "name": "gabriel onyeador",
    "position": "transportation management specialist",
    "salary": 70259
  },
  {
    "name": "christina mitchell",
    "position": "special assistant",
    "salary": 70259
  },
  {
    "name": "william wright",
    "position": "customer service representative",
    "salary": 70259
  },
  {
    "name": "george crider",
    "position": "investigator",
    "salary": 70259
  },
  {
    "name": "clifton chambers",
    "position": "investigator",
    "salary": 70259
  },
  {
    "name": "paul hoffman",
    "position": "civil engineer",
    "salary": 112951
  },
  {
    "name": "jeunine edmonds",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "cynthia edwards",
    "position": "investigator",
    "salary": 70259
  },
  {
    "name": "nina swanson",
    "position": "management analyst",
    "salary": 70259
  },
  {
    "name": "kevier fontanez",
    "position": "information technology specialist",
    "salary": 70259
  },
  {
    "name": "paula lee",
    "position": "administrative specialist",
    "salary": 70259
  },
  {
    "name": "eli bruch",
    "position": "administrative law judge",
    "salary": 70259
  },
  {
    "name": "gregory harrelson",
    "position": "vehicle acquisition program specialist",
    "salary": 70259
  },
  {
    "name": "kiran chopra",
    "position": "forensic toxicologist",
    "salary": 70259
  },
  {
    "name": "yaiza burrell",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "stephanie banks",
    "position": "executive assistant",
    "salary": 70259
  },
  {
    "name": "anthony watkis",
    "position": "information technology specialist",
    "salary": 112860
  },
  {
    "name": "terry dockery",
    "position": "correct fac oper specialist",
    "salary": 70259
  },
  {
    "name": "brenda scott",
    "position": "correctional program specialist",
    "salary": 70259
  },
  {
    "name": "nancy harvin",
    "position": "program analyst",
    "salary": 70259
  },
  {
    "name": "mary selby winfield",
    "position": "hearing appeals examiner",
    "salary": 70259
  },
  {
    "name": "melissa sharpe jones",
    "position": "equal opportunity specialist",
    "salary": 70259
  },
  {
    "name": "stephen turner",
    "position": "paramedic firefighter",
    "salary": 70240
  },
  {
    "name": "arturo contreras",
    "position": "paramedic firefighter",
    "salary": 70240
  },
  {
    "name": "elmira asongwed",
    "position": "assoc professor",
    "salary": 70228
  },
  {
    "name": "timothy harrison",
    "position": "admissions counselor",
    "salary": 70221
  },
  {
    "name": "brandon russell",
    "position": "comp network admin",
    "salary": 70221
  },
  {
    "name": "laverne harvey",
    "position": "administrative officer",
    "salary": 112860
  },
  {
    "name": "antonio best",
    "position": "fire inspector",
    "salary": 70198
  },
  {
    "name": "dana thomas",
    "position": "paramedic firefighter",
    "salary": 70176
  },
  {
    "name": "michael corbett",
    "position": "workers compensation recipient",
    "salary": 70138
  },
  {
    "name": "michael forrest",
    "position": "ems preceptor",
    "salary": 70072
  },
  {
    "name": "andrew bachelder",
    "position": "ems preceptor",
    "salary": 70072
  },
  {
    "name": "lucy jones",
    "position": "ems preceptor",
    "salary": 70072
  },
  {
    "name": "cathy wu",
    "position": "psychologist,school",
    "salary": 70020
  },
  {
    "name": "julie mccay",
    "position": "speech pathologist",
    "salary": 70020
  },
  {
    "name": "molly buchanan",
    "position": "social worker",
    "salary": 70020
  },
  {
    "name": "irene opuka",
    "position": "psychologist",
    "salary": 70020
  },
  {
    "name": "camille robinson",
    "position": "administrative officer",
    "salary": 112726
  },
  {
    "name": "sebastian podesta",
    "position": "budget analyst",
    "salary": 70000
  },
  {
    "name": "charles mason",
    "position": "constituent services specialist",
    "salary": 70000
  },
  {
    "name": "andrew huff",
    "position": "communications director",
    "salary": 70000
  },
  {
    "name": "rufus norris",
    "position": "constituent services specialist",
    "salary": 70000
  },
  {
    "name": "john coombs",
    "position": "policy analyst",
    "salary": 70000
  },
  {
    "name": "kevin hansen",
    "position": "program analyst",
    "salary": 70000
  },
  {
    "name": "andrew newman",
    "position": "legislative counsel",
    "salary": 70000
  },
  {
    "name": "ronald king",
    "position": "legislative assistant",
    "salary": 70000
  },
  {
    "name": "amin muslim",
    "position": "constituent services specialist",
    "salary": 70000
  },
  {
    "name": "nancy fisher",
    "position": "youth treatment unit manager",
    "salary": 70000
  },
  {
    "name": "robert worthington",
    "position": "appraiser",
    "salary": 112698
  },
  {
    "name": "john dowdy",
    "position": "youth development rep",
    "salary": 70000
  },
  {
    "name": "melinda fallen",
    "position": "program manager",
    "salary": 70000
  },
  {
    "name": "jeri ingram",
    "position": "recreation specialist",
    "salary": 70000
  },
  {
    "name": "sefanit befekadu",
    "position": "special assistant",
    "salary": 70000
  },
  {
    "name": "brendan williams-kief",
    "position": "communications director",
    "salary": 70000
  },
  {
    "name": "karen hunt",
    "position": "fire inspector",
    "salary": 69998
  },
  {
    "name": "craig costello",
    "position": "paramedic firefighter",
    "salary": 69998
  },
  {
    "name": "marvin mcfadden",
    "position": "const rep maintenance",
    "salary": 69966
  },
  {
    "name": "elma mccoy",
    "position": "assistant watch commander",
    "salary": 69966
  },
  {
    "name": "lejuane ribbon",
    "position": "assistant watch commander",
    "salary": 69966
  },
  {
    "name": "ibrahim bullo",
    "position": "environmental review coor",
    "salary": 112698
  },
  {
    "name": "cecil kelly",
    "position": "information technology specialist",
    "salary": 69966
  },
  {
    "name": "karl millard",
    "position": "assistant watch commander",
    "salary": 69966
  },
  {
    "name": "calvin williams",
    "position": "assistant watch commander",
    "salary": 69966
  },
  {
    "name": "james posey",
    "position": "records management",
    "salary": 69966
  },
  {
    "name": "bennett herndon",
    "position": "youth development rep",
    "salary": 69966
  },
  {
    "name": "elsie mccray",
    "position": "supervisor parking enforcement",
    "salary": 69966
  },
  {
    "name": "jerry lyle",
    "position": "comp review specialist",
    "salary": 69966
  },
  {
    "name": "beverly gillis",
    "position": "youth development rep",
    "salary": 69966
  },
  {
    "name": "anthony davis",
    "position": "youth treatment unit manager",
    "salary": 69966
  },
  {
    "name": "twana fortune jones",
    "position": "program manager",
    "salary": 69966
  },
  {
    "name": "roger legerwood",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "lisa anderson-gates",
    "position": "youth treatment unit manager",
    "salary": 69966
  },
  {
    "name": "richard lawrence",
    "position": "teacher",
    "salary": 69962
  },
  {
    "name": "stevenson wachira",
    "position": "teacher",
    "salary": 69962
  },
  {
    "name": "marsten davis",
    "position": "teacher",
    "salary": 69962
  },
  {
    "name": "hattie clark",
    "position": "teacher",
    "salary": 69962
  },
  {
    "name": "gary daniels",
    "position": "job coach",
    "salary": 69962
  },
  {
    "name": "willa burroughs",
    "position": "teacher",
    "salary": 69962
  },
  {
    "name": "stephen dimattio",
    "position": "teacher",
    "salary": 69962
  },
  {
    "name": "maria hille",
    "position": "biologist",
    "salary": 69934
  },
  {
    "name": "stephen swaim",
    "position": "financial economist",
    "salary": 69890
  },
  {
    "name": "shankar vaidyanathan",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "dione boone",
    "position": "assistant watch commander",
    "salary": 69886
  },
  {
    "name": "tinley wickersham",
    "position": "teacher",
    "salary": 69833
  },
  {
    "name": "burrell fuell",
    "position": "teacher",
    "salary": 69833
  },
  {
    "name": "elizabeth hagan",
    "position": "teacher",
    "salary": 69833
  },
  {
    "name": "falicia howell",
    "position": "teacher",
    "salary": 69833
  },
  {
    "name": "leroy high",
    "position": "teacher",
    "salary": 69833
  },
  {
    "name": "zakia haight",
    "position": "teacher",
    "salary": 69833
  },
  {
    "name": "sara dykstra",
    "position": "coordinato",
    "salary": 69774
  },
  {
    "name": "nicole douglas",
    "position": "program specialist",
    "salary": 69698
  },
  {
    "name": "donna reed",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "debra porchia-usher",
    "position": "director",
    "salary": 160000
  },
  {
    "name": "rajesh akula",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "deon daniels",
    "position": "assessment program coordinator",
    "salary": 69698
  },
  {
    "name": "jerome gibson",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "stephanie hopkins",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "patricia richey",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "carolyn powell",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "josephine barrett white",
    "position": "contract compliance monitor",
    "salary": 69698
  },
  {
    "name": "janine spicer",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "scott no",
    "position": "appraiser",
    "salary": 69698
  },
  {
    "name": "kim jacobs mathis",
    "position": "appraiser",
    "salary": 69698
  },
  {
    "name": "leanora caruth",
    "position": "auditor (tax)",
    "salary": 69698
  },
  {
    "name": "margaret barnes",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "swamidoss john",
    "position": "auditor (tax)",
    "salary": 69698
  },
  {
    "name": "andrew sullivan",
    "position": "appraiser",
    "salary": 69698
  },
  {
    "name": "julia matthews",
    "position": "contract administrator",
    "salary": 69698
  },
  {
    "name": "neal watson",
    "position": "contract compliance monitor",
    "salary": 69698
  },
  {
    "name": "kimberly james",
    "position": "quality improvement specialist",
    "salary": 69698
  },
  {
    "name": "neil williams",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "stacy phillips",
    "position": "child fatality review",
    "salary": 69698
  },
  {
    "name": "edward luthy",
    "position": "geograph info syst (gis) specialist",
    "salary": 69698
  },
  {
    "name": "avis taylor",
    "position": "management analyst",
    "salary": 69698
  },
  {
    "name": "antwanette boone murphy",
    "position": "contract specialist",
    "salary": 69698
  },
  {
    "name": "dawn martin",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "estes rodgers",
    "position": "investigator",
    "salary": 69698
  },
  {
    "name": "rosie robinson",
    "position": "workforce development specialist",
    "salary": 69698
  },
  {
    "name": "donna elliott",
    "position": "resource development specialist",
    "salary": 69698
  },
  {
    "name": "pamela glover",
    "position": "contract specialist",
    "salary": 69698
  },
  {
    "name": "guillermo cintron",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "jenna palmer",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "lisa kim",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "james vambreck",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "nkechi whiteman",
    "position": "gis specialist",
    "salary": 69698
  },
  {
    "name": "amanda chesney",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "george bolden",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "viorica popa",
    "position": "real property program speciali",
    "salary": 69698
  },
  {
    "name": "antoinette goins",
    "position": "program specialist",
    "salary": 69698
  },
  {
    "name": "chi yi",
    "position": "contract specialist",
    "salary": 69698
  },
  {
    "name": "augustina ammah",
    "position": "claims specialist",
    "salary": 69698
  },
  {
    "name": "molly smith",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "annette simon",
    "position": "information technology specialist",
    "salary": 69698
  },
  {
    "name": "virginia paris",
    "position": "program analyst",
    "salary": 69698
  },
  {
    "name": "donnell butler",
    "position": "investigator",
    "salary": 69698
  },
  {
    "name": "henry ajagbawa",
    "position": "auditor (tax)",
    "salary": 69698
  },
  {
    "name": "vincent flythe",
    "position": "revenue officer",
    "salary": 69698
  },
  {
    "name": "ashis pradhan",
    "position": "information technology specialist",
    "salary": 112698
  },
  {
    "name": "tracie nelson",
    "position": "ilp specialist",
    "salary": 69698
  },
  {
    "name": "kelly branthover",
    "position": "crime analyst",
    "salary": 69698
  },
  {
    "name": "cheryl dodd",
    "position": "management analyst",
    "salary": 69698
  },
  {
    "name": "beyshinah woods",
    "position": "transition coordinator",
    "salary": 69698
  },
  {
    "name": "charlotte payne",
    "position": "hlth srvs program specialist",
    "salary": 69698
  },
  {
    "name": "sara amadhila",
    "position": "grant management specialist",
    "salary": 69698
  },
  {
    "name": "erick myrick",
    "position": "student accounts specialist",
    "salary": 69698
  },
  {
    "name": "toya thompson",
    "position": "child care eligibility monitor",
    "salary": 69698
  },
  {
    "name": "yolanda pauling",
    "position": "crime analyst",
    "salary": 69698
  },
  {
    "name": "ronald whaley",
    "position": "information technology specialist",
    "salary": 69698
  },
  {
    "name": "sheila barfield",
    "position": "gen counsel",
    "salary": 112646
  },
  {
    "name": "vinetta freeman",
    "position": "public health analyst",
    "salary": 69698
  },
  {
    "name": "bihon debessai",
    "position": "structural engineer",
    "salary": 69698
  },
  {
    "name": "nicholas gambino",
    "position": "crime analyst",
    "salary": 69698
  },
  {
    "name": "neal isenstein",
    "position": "survey & wall check rev coord",
    "salary": 69698
  },
  {
    "name": "decarlo washington",
    "position": "manpower development specialist",
    "salary": 69698
  },
  {
    "name": "vatthana souryachak",
    "position": "labor economist",
    "salary": 69698
  },
  {
    "name": "diana havlin",
    "position": "crime analyst",
    "salary": 69698
  },
  {
    "name": "james parman",
    "position": "comb code comp specialist",
    "salary": 69698
  },
  {
    "name": "brandy cramer",
    "position": "crime analyst",
    "salary": 69698
  },
  {
    "name": "pauletter hall",
    "position": "health insurance analyst",
    "salary": 69698
  },
  {
    "name": "william sanford",
    "position": "general counsel",
    "salary": 112500
  },
  {
    "name": "robert bell",
    "position": "comb code comp specialist",
    "salary": 69698
  },
  {
    "name": "lashawn davis",
    "position": "information technology specialist",
    "salary": 69698
  },
  {
    "name": "atakilti tesfai",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "bob emwanta",
    "position": "environmental protection speci",
    "salary": 69698
  },
  {
    "name": "nicole tillman",
    "position": "social worker",
    "salary": 69698
  },
  {
    "name": "gary englebert",
    "position": "comb code comp specialist",
    "salary": 69698
  },
  {
    "name": "michael handon",
    "position": "vocational rehabilitation specialist",
    "salary": 69698
  },
  {
    "name": "tracy garner",
    "position": "program specialist",
    "salary": 69698
  },
  {
    "name": "kelli atkinson",
    "position": "transition coordinator",
    "salary": 69698
  },
  {
    "name": "jerhonda spaulding",
    "position": "disability hearing officer",
    "salary": 69698
  },
  {
    "name": "dexter clemons",
    "position": "information technology specialist",
    "salary": 112484
  },
  {
    "name": "howard brown",
    "position": "environmental protection speci",
    "salary": 69698
  },
  {
    "name": "gregory caughman",
    "position": "lead service coordinator",
    "salary": 69698
  },
  {
    "name": "angel miles-andrews",
    "position": "social insurance specialist",
    "salary": 69698
  },
  {
    "name": "antoinette quick",
    "position": "gis specialist",
    "salary": 69698
  },
  {
    "name": "lawrence omoregbe",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "sylvia lopez",
    "position": "program coordinator",
    "salary": 69698
  },
  {
    "name": "timothy traylor",
    "position": "community liaison specialist",
    "salary": 69698
  },
  {
    "name": "charles edwards",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "robert oyebade",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "eloi akpata",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "richard cooper",
    "position": "payment center management",
    "salary": 112484
  },
  {
    "name": "joshua burch",
    "position": "environmental protection speci",
    "salary": 69698
  },
  {
    "name": "jiji gamnje",
    "position": "investigator",
    "salary": 69698
  },
  {
    "name": "elias demessie",
    "position": "environmental engineer",
    "salary": 69698
  },
  {
    "name": "brian mcallister",
    "position": "lieutenant",
    "salary": 69678
  },
  {
    "name": "david keefe",
    "position": "lieutenant",
    "salary": 69678
  },
  {
    "name": "jason moore",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "mitchell kannry",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "peter elliott",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "sean burton",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "james candleana",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "olga clegg",
    "position": "attorney advisor",
    "salary": 112449
  },
  {
    "name": "charles jones",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "michael engels",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "stanley jaworski",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "james felder",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "william simister",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "christopher zdobysz",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "sean brooks",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "jeffrey lare",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "joseph mcnally",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "brian gray",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "warren graves",
    "position": "chief of staff",
    "salary": 193125
  },
  {
    "name": "christophe tulou",
    "position": "dir, dist dept of the enviro",
    "salary": 160000
  },
  {
    "name": "rhonda tildon",
    "position": "trial attorney",
    "salary": 112449
  },
  {
    "name": "michael spielman",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "michael coleman",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "matthew cormicle",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "john schunk",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "bryan fraley",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "christopher holmes",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "marshall davies",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "jack spencer",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "corey goetz",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "jason palmer",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "sheryl johnson",
    "position": "attorney advisor",
    "salary": 112449
  },
  {
    "name": "ryan gochenauer",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "kevin anderson",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "matthew imbach",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "george layman",
    "position": "sergeant aide",
    "salary": 69652
  },
  {
    "name": "richard stillwell",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "henry dent",
    "position": "sergeant",
    "salary": 69652
  },
  {
    "name": "jeffrey maslona",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "shannon williams",
    "position": "master patrol officer",
    "salary": 69523
  },
  {
    "name": "laura aceto",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "kenneth gibbs",
    "position": "master patrol officer",
    "salary": 69523
  },
  {
    "name": "jon kulish",
    "position": "trial attorney",
    "salary": 112449
  },
  {
    "name": "jonathan clingerman",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "simon yammine",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "michael cashman",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "joshua branson",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "hogan samels",
    "position": "officer ert personnel",
    "salary": 69523
  },
  {
    "name": "george singletary",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "fred brown",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "brian wise",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "toni walls",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "savyon weinfeld",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "van brathwaite",
    "position": "attorney advisor",
    "salary": 112449
  },
  {
    "name": "david le",
    "position": "eod dog handler",
    "salary": 69523
  },
  {
    "name": "william talbert",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "mocte stevens",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "william weeks",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "tameka pringle",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "yvette maupin",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "jose nieves campos",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "joseph conjura",
    "position": "master patrol officer",
    "salary": 69523
  },
  {
    "name": "thomas stein",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "scott fike",
    "position": "dog handler",
    "salary": 69523
  },
  {
    "name": "robert warren",
    "position": "attorney advisor",
    "salary": 112449
  },
  {
    "name": "michael hoban",
    "position": "electronics technician",
    "salary": 69523
  },
  {
    "name": "wayne gerrish",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "john hamer",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "timothy francis",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "charles fultz",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "eric hampton",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "matthew dailey",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "ralph davis",
    "position": "officer ert personnel",
    "salary": 69523
  },
  {
    "name": "john bolden",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "john bevilacqua",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "carl schifferle",
    "position": "trial attorney",
    "salary": 112449
  },
  {
    "name": "yusuf edwards",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "daren brake",
    "position": "crime scene srch ofr",
    "salary": 69523
  },
  {
    "name": "keith batton",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "brian devine",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "sean crowley",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "sylvan altieri",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "ebony boyd",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "ronald hull",
    "position": "master patrol officer",
    "salary": 69523
  },
  {
    "name": "angelo battle",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "travis barton",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "katherine heslep",
    "position": "trial attorney",
    "salary": 112449
  },
  {
    "name": "timothy finnegan",
    "position": "master patrol officer",
    "salary": 69523
  },
  {
    "name": "chanel howard",
    "position": "detective",
    "salary": 69523
  },
  {
    "name": "stephanie garner",
    "position": "detective",
    "salary": 69510
  },
  {
    "name": "tracee billingsley",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "jonathan rybka",
    "position": "program analyst",
    "salary": 69494
  },
  {
    "name": "jennifer morse",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "burnell holland",
    "position": "project manager",
    "salary": 69494
  },
  {
    "name": "monica parran",
    "position": "project manager",
    "salary": 69494
  },
  {
    "name": "dominick robinson",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "akilah robinson",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "john woykovsky",
    "position": "trial attorney",
    "salary": 112449
  },
  {
    "name": "kelly boucher",
    "position": "project manager",
    "salary": 69494
  },
  {
    "name": "lorelei emma",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "claudia silva ruschel",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "jamie wong",
    "position": "project manager",
    "salary": 69494
  },
  {
    "name": "annmarie schaeffler",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "laura schrepfer",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "erin schell",
    "position": "program specialist",
    "salary": 69494
  },
  {
    "name": "charity fesler",
    "position": "program analyst",
    "salary": 69494
  },
  {
    "name": "sharon farmer",
    "position": "program specialist",
    "salary": 69493
  },
  {
    "name": "victor falade",
    "position": "medical technologi",
    "salary": 69424
  },
  {
    "name": "alyssa turner",
    "position": "building manager",
    "salary": 112312
  },
  {
    "name": "hoa duong",
    "position": "administrative officer",
    "salary": 69393
  },
  {
    "name": "gloria hernandez",
    "position": "administrative officer",
    "salary": 69393
  },
  {
    "name": "roseman alexander",
    "position": "instructor, jrotc",
    "salary": 69292
  },
  {
    "name": "latasha williams",
    "position": "counselor",
    "salary": 69224
  },
  {
    "name": "mary wright",
    "position": "administrative officer",
    "salary": 69213
  },
  {
    "name": "elfleta lawton-nixon",
    "position": "visiting associate professor",
    "salary": 69200
  },
  {
    "name": "gregory wallace",
    "position": "cellblock supervisor",
    "salary": 69192
  },
  {
    "name": "marian bullock",
    "position": "social services rep",
    "salary": 69192
  },
  {
    "name": "kathy obryant",
    "position": "social services rep",
    "salary": 69192
  },
  {
    "name": "billy owens",
    "position": "workers compensation recipient",
    "salary": 69160
  },
  {
    "name": "jill forbes",
    "position": "placement services administrat",
    "salary": 112250
  },
  {
    "name": "uzorchi wogu",
    "position": "correctional treatment specialist",
    "salary": 69131
  },
  {
    "name": "carolyn walker",
    "position": "support enforcement specialist",
    "salary": 69129
  },
  {
    "name": "lajuan sullivan",
    "position": "assistant watch commander",
    "salary": 69129
  },
  {
    "name": "antrina leeth",
    "position": "program coordinator",
    "salary": 69119
  },
  {
    "name": "lauren madlock",
    "position": "coord, special education",
    "salary": 69119
  },
  {
    "name": "kenneth newsome",
    "position": "dean of students (et)",
    "salary": 69119
  },
  {
    "name": "zaneta boyd",
    "position": "coord, special education",
    "salary": 69119
  },
  {
    "name": "sandra ross",
    "position": "coord, special education",
    "salary": 69119
  },
  {
    "name": "michelle brummell",
    "position": "coord,academy program",
    "salary": 69119
  },
  {
    "name": "benjamin gibson",
    "position": "dean of students (et)",
    "salary": 69119
  },
  {
    "name": "linda wharton boyd",
    "position": "director of communications",
    "salary": 160000
  },
  {
    "name": "lawrence valentine",
    "position": "human resources manager",
    "salary": 112200
  },
  {
    "name": "dawn hilton",
    "position": "coordinator (et)",
    "salary": 69119
  },
  {
    "name": "gregory price",
    "position": "unemploy comp claims exam",
    "salary": 69079
  },
  {
    "name": "jocelyn hill",
    "position": "staff assistant",
    "salary": 69036
  },
  {
    "name": "thaddina wiley",
    "position": "program analyst",
    "salary": 69036
  },
  {
    "name": "lakisha mcnatt",
    "position": "budget analyst",
    "salary": 69036
  },
  {
    "name": "desiree johnson",
    "position": "returns processing",
    "salary": 69036
  },
  {
    "name": "delmar parks",
    "position": "budget analyst",
    "salary": 69036
  },
  {
    "name": "aden tewelde",
    "position": "accountant",
    "salary": 69036
  },
  {
    "name": "kim chamberlain",
    "position": "management analyst",
    "salary": 69036
  },
  {
    "name": "patrice mason",
    "position": "budget analyst",
    "salary": 69036
  },
  {
    "name": "peter mitchell",
    "position": "assoc adm (solid waste disp)",
    "salary": 112172
  },
  {
    "name": "fatai popoola",
    "position": "accountant",
    "salary": 69036
  },
  {
    "name": "tina manning",
    "position": "budget analyst",
    "salary": 69036
  },
  {
    "name": "sean mason",
    "position": "sales coordinator",
    "salary": 69036
  },
  {
    "name": "uchenna ijezie",
    "position": "accounts payable manager",
    "salary": 69036
  },
  {
    "name": "kim dias",
    "position": "returns processing",
    "salary": 69036
  },
  {
    "name": "bettie simon",
    "position": "budget analyst",
    "salary": 69036
  },
  {
    "name": "willie chatman",
    "position": "instructor, jrotc",
    "salary": 69001
  },
  {
    "name": "david meadows",
    "position": "communications director",
    "salary": 69000
  },
  {
    "name": "elgustus polite",
    "position": "visiting associate professor",
    "salary": 69000
  },
  {
    "name": "shahara rose",
    "position": "recreation therapist",
    "salary": 69000
  },
  {
    "name": "jana woods-jefferson",
    "position": "director",
    "salary": 112167
  },
  {
    "name": "ann wilson",
    "position": "coord, special education",
    "salary": 68983
  },
  {
    "name": "valerie chandler",
    "position": "retirement analyst",
    "salary": 68951
  },
  {
    "name": "franklin porter",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "ramey kyle",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "michelle ridlehoover",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "william verna",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "marlon ollivierre",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "subrena rivers",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "andrew dawidowicz",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "matthew mahl",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "lionel sims",
    "position": "attorney advisor",
    "salary": 112000
  },
  {
    "name": "sherrelle williams",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "megan tiemann",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "michael pulliam",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "sean conboy",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "michelle caron",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "david augustine",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "james boteler",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "jonathan dorrough",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "iris beistline",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "shante hairston",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "henry lofton",
    "position": "information technology specialist",
    "salary": 112000
  },
  {
    "name": "joseph cullen",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "duncan bedlion",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "john knutsen",
    "position": "sergeant",
    "salary": 68940
  },
  {
    "name": "nailah williams",
    "position": "financial aid officer",
    "salary": 68936
  },
  {
    "name": "katie nailler",
    "position": "director, career services",
    "salary": 68936
  },
  {
    "name": "laurie blackman thompson",
    "position": "program manager",
    "salary": 68936
  },
  {
    "name": "chris asch",
    "position": "urban education specialist",
    "salary": 68936
  },
  {
    "name": "clifton coates",
    "position": "director, career services",
    "salary": 68936
  },
  {
    "name": "paul tennassee",
    "position": "director, international affair",
    "salary": 68936
  },
  {
    "name": "sinjoyla townsend",
    "position": "manpower dev specialist",
    "salary": 68930
  },
  {
    "name": "patricia evans",
    "position": "executive director",
    "salary": 112000
  },
  {
    "name": "jacquelyn campbell",
    "position": "fire investigator",
    "salary": 68879
  },
  {
    "name": "jadonna sanders",
    "position": "fire investigator",
    "salary": 68879
  },
  {
    "name": "iniobong nkanta",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "emmanuel allotey",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "thaka nkabane",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "raphael iwuji",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "caroline ibijemilusi",
    "position": "clinical nurse",
    "salary": 68860
  },
  {
    "name": "anna tucker",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "chinelo anadu",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "steve johnson",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "diane bryant wooden",
    "position": "contract specialist",
    "salary": 112000
  },
  {
    "name": "michael bush",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "opeyinka adesunloye",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "akosua oppong",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "georginia ahaghotu",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "deryck ignacio",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "catherine duvic",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "edwina wajid-ali",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "felix ohams",
    "position": "psychiatric nurse",
    "salary": 68860
  },
  {
    "name": "colin montgomery",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "pierre fletcher",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "jennifer castor",
    "position": "attorney advisor",
    "salary": 112000
  },
  {
    "name": "david parker",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "william piedrahita",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "robert hottinger",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "antonio todd",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "roger kersey",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "darren puifory",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "peter bagdovitz",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "nathaniel bias",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "jeffrey carroll",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "david jackson",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "ralph burns",
    "position": "mass transportation officer",
    "salary": 112000
  },
  {
    "name": "kenneth smith",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "fred phipps",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "gwendolyn sistare",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "marc johnson",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "joseph beach",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "terry robinson",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "curtis walker",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "james parson",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "jerome green",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "matthew foster",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "peter piringer",
    "position": "public affairs specialist",
    "salary": 112000
  },
  {
    "name": "michael stanfield",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "eric delaney",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "willie blakeney",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "linwood armstrong",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "milton olinger",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "charles miller",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "anthony williams",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "william caudle",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "michael hill",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "james stevens",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "charles willoughby",
    "position": "inspector gen",
    "salary": 159885
  },
  {
    "name": "sheriff daramy",
    "position": "information technology specialist",
    "salary": 112000
  },
  {
    "name": "stanley taper",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "derek wingfield",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "james warren",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "charlotte davis",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "garry mayo",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "frelimo simba",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "marcus craig",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "jon jackson",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "wayne washington",
    "position": "firefighter tech",
    "salary": 68846
  },
  {
    "name": "lee scott",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "vance farrow",
    "position": "bureau chief",
    "salary": 112000
  },
  {
    "name": "kena curley",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "danny cloyd",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "ernest payne",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "curtis davis",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "richard sullivan",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "lynnette gilchrist",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "christopher spellers",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "charles buscavage",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "william harris",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "calvert potter",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "barbara campbell",
    "position": "principal",
    "salary": 111916
  },
  {
    "name": "melvin powell",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "daniel faison",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "donald eller",
    "position": "firefighter emt",
    "salary": 68846
  },
  {
    "name": "monte supko",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "marvin ladd",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "paul ince",
    "position": "firefighter",
    "salary": 68846
  },
  {
    "name": "raymond dickinson",
    "position": "instructor, jrotc",
    "salary": 68842
  },
  {
    "name": "brenda mallory",
    "position": "audiovisual production sp",
    "salary": 68800
  },
  {
    "name": "frederick kamara",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "ashley mahurin",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "wanda fox",
    "position": "principal",
    "salary": 111916
  },
  {
    "name": "sean lenaghan",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "kawther nimer",
    "position": "social worker",
    "salary": 68734
  },
  {
    "name": "david koenig",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "celeste lehrer",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "lottise kenny",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "william o'neal",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "christina jarvi",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "nkemjika ofodile",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "kaitlyn mckechnie",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "mandy mcculloch",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "collin burrell",
    "position": "environ protection specialist",
    "salary": 111878
  },
  {
    "name": "daniel plummer",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "anthonette pena",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "nabil abdella",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "sashaum deprez",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "david gregal",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "rose goudas",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "danielle dortch",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "crystal moore",
    "position": "literacy coach",
    "salary": 68734
  },
  {
    "name": "pamela cogas",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "pernell young",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "carl morrison",
    "position": "workers compensation recipient",
    "salary": 111774
  },
  {
    "name": "diamond revell",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "jennifer krystopowicz",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "natalie randolph",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "sarah pace",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "joseph presley",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "niketha owens",
    "position": "librarian",
    "salary": 68734
  },
  {
    "name": "marquerite neely",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "angelo parodi",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "helen lundebye",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "tamika hinds",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "james bashore",
    "position": "battalion fire chief",
    "salary": 111768
  },
  {
    "name": "alexander jacoby",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "vanesa gracia",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "kristee jones",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "camille morgan",
    "position": "intervention coach",
    "salary": 68734
  },
  {
    "name": "katina phifer",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "dowan mcnair",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "maurice young",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "alaina felder",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "john burns",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "alethea felton",
    "position": "instructional coach",
    "salary": 68734
  },
  {
    "name": "angela nottingham",
    "position": "train and dev manager",
    "salary": 111764
  },
  {
    "name": "sheritia williams",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "jessica salute",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "kristen williams",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "kerry cassidy",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "amanda siepiola",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "emily stewart",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "christine turban",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "monica thomas",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "cassandra shanklin",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "maria samenga",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "leyland grant",
    "position": "building manager",
    "salary": 111614
  },
  {
    "name": "corinne rucker",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "chicara upchurch",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "bernadette desario",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "angela wyckoff",
    "position": "instructional coach",
    "salary": 68734
  },
  {
    "name": "james bailey",
    "position": "instructional coach",
    "salary": 68734
  },
  {
    "name": "christopher bergfalk",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "brown anglin",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "michael espinoza",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "david barker",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "anne brainard",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "terry satterfield",
    "position": "counselor",
    "salary": 111613
  },
  {
    "name": "jinny choi",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "melissa sweeney",
    "position": "social worker",
    "salary": 68734
  },
  {
    "name": "willie anderson",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "tiffany davis",
    "position": "social worker",
    "salary": 68734
  },
  {
    "name": "sika awunyo akaba",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "andrea fields",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "lacondria beckwith",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "kimberly bell",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "brian amlani",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "shira fishman",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "eugene adams",
    "position": "gen attorney",
    "salary": 158999
  },
  {
    "name": "helane miller",
    "position": "counselor",
    "salary": 111613
  },
  {
    "name": "summer blount",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "latosha anderson",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "latoshia cannon",
    "position": "teacher",
    "salary": 68734
  },
  {
    "name": "charlie wilson",
    "position": "instructor, jrotc",
    "salary": 68726
  },
  {
    "name": "charles hatcher",
    "position": "instructor, jrotc",
    "salary": 68726
  },
  {
    "name": "connie chapman ross",
    "position": "investigator",
    "salary": 68682
  },
  {
    "name": "carol broussard",
    "position": "pension benefits specialist",
    "salary": 68681
  },
  {
    "name": "apurva patil",
    "position": "environmental engineer",
    "salary": 68681
  },
  {
    "name": "sotura donaldson",
    "position": "service coordinator",
    "salary": 68681
  },
  {
    "name": "michelle hannibal",
    "position": "case manager",
    "salary": 68681
  },
  {
    "name": "marsha pender",
    "position": "counselor",
    "salary": 111613
  },
  {
    "name": "toni cowans",
    "position": "transition specialist",
    "salary": 68681
  },
  {
    "name": "doris shaw",
    "position": "construction representative",
    "salary": 68681
  },
  {
    "name": "joseph moore",
    "position": "engineering technician",
    "salary": 68681
  },
  {
    "name": "rupert lambert",
    "position": "inspector ional program specialist",
    "salary": 68681
  },
  {
    "name": "deborah utley",
    "position": "information technology specialist",
    "salary": 68681
  },
  {
    "name": "teresa mcdonald",
    "position": "revenue officer",
    "salary": 68681
  },
  {
    "name": "francine douglas",
    "position": "revenue officer",
    "salary": 68681
  },
  {
    "name": "nathaniel massaquoi",
    "position": "community outreach specialist",
    "salary": 68681
  },
  {
    "name": "timothy fitzgerald",
    "position": "education resource specialist",
    "salary": 68681
  },
  {
    "name": "diane jackson",
    "position": "licensing specialist",
    "salary": 68681
  },
  {
    "name": "ricahrd trogisch",
    "position": "principal",
    "salary": 111484
  },
  {
    "name": "raina williams",
    "position": "intake hotline worker",
    "salary": 68681
  },
  {
    "name": "alemayehu haile",
    "position": "mental health specialist",
    "salary": 68681
  },
  {
    "name": "henry youngblood",
    "position": "manpower development specialist",
    "salary": 68681
  },
  {
    "name": "lisa robinson",
    "position": "hlth licensing specialist",
    "salary": 68681
  },
  {
    "name": "clara gidderon",
    "position": "payroll specialist",
    "salary": 68681
  },
  {
    "name": "maxcine ebb",
    "position": "paralegal specialist",
    "salary": 68681
  },
  {
    "name": "stephanie gordon",
    "position": "unemployment tax examiner",
    "salary": 68681
  },
  {
    "name": "calvin ancrum",
    "position": "training instructor",
    "salary": 68681
  },
  {
    "name": "carrie evans",
    "position": "paralegal specialist",
    "salary": 68681
  },
  {
    "name": "shawn mcdermott",
    "position": "librarian",
    "salary": 68681
  },
  {
    "name": "lucian musawwir",
    "position": "program manager",
    "salary": 111464
  },
  {
    "name": "yvonne briscoe hall",
    "position": "program specialist",
    "salary": 68681
  },
  {
    "name": "tamara mckinney",
    "position": "librarian",
    "salary": 68681
  },
  {
    "name": "virgil armstrong",
    "position": "librarian",
    "salary": 68681
  },
  {
    "name": "anntoinett white richardson",
    "position": "educational specialist",
    "salary": 68681
  },
  {
    "name": "denise edelin",
    "position": "paralegal specialist",
    "salary": 68681
  },
  {
    "name": "julie kulikowski",
    "position": "librarian",
    "salary": 68681
  },
  {
    "name": "june krell",
    "position": "librarian",
    "salary": 68681
  },
  {
    "name": "maxine hinson",
    "position": "paralegal specialist",
    "salary": 68681
  },
  {
    "name": "cheryl allen",
    "position": "librarian",
    "salary": 68681
  },
  {
    "name": "james zimmerman",
    "position": "investigator",
    "salary": 68681
  },
  {
    "name": "nestor rocha",
    "position": "bureau chief",
    "salary": 111423
  },
  {
    "name": "patricia everett",
    "position": "fire safety education specialist",
    "salary": 68681
  },
  {
    "name": "deborah lyles",
    "position": "investigator",
    "salary": 68681
  },
  {
    "name": "michael giles",
    "position": "compliance monitor",
    "salary": 68681
  },
  {
    "name": "ricky clayton",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "binu abraham",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "jo bauer",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "felicia ike-onyenachi",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "emma mcghee-hamilton",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "opeyemi ajimatanrareje",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "winifred ridley",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "jean diggs",
    "position": "hearing examiner",
    "salary": 111413
  },
  {
    "name": "jamila woods jones",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "roselyn eboigbe",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "nyana henry",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "zakia joyner",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "reginald blackwell",
    "position": "medical technologist",
    "salary": 68673
  },
  {
    "name": "tawana bell",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "erica ellis",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "toya fisher",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "joyce moore",
    "position": "sanitarian",
    "salary": 68673
  },
  {
    "name": "regina geter",
    "position": "medical technologist",
    "salary": 68673
  },
  {
    "name": "maria tukeva",
    "position": "principal",
    "salary": 111356
  },
  {
    "name": "leroy thorpe",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "nathaniel davies",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "joselyn barfield",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "erica booker",
    "position": "social worker",
    "salary": 68673
  },
  {
    "name": "meiko mori",
    "position": "psychologist",
    "salary": 68653
  },
  {
    "name": "brian stefanovic",
    "position": "psychologist",
    "salary": 68653
  },
  {
    "name": "robert pierno",
    "position": "special assistant",
    "salary": 68599
  },
  {
    "name": "oritsejemine mode",
    "position": "trial attorney",
    "salary": 68583
  },
  {
    "name": "robin douglas",
    "position": "attorney advisor",
    "salary": 68583
  },
  {
    "name": "sean farrelly",
    "position": "trial attorney",
    "salary": 68583
  },
  {
    "name": "kenneth moore",
    "position": "battalion fire chief",
    "salary": 111301
  },
  {
    "name": "kristen aiken meeks",
    "position": "trial attorney",
    "salary": 68583
  },
  {
    "name": "meghan murphy",
    "position": "attorney advisor",
    "salary": 68583
  },
  {
    "name": "jonathan berman",
    "position": "attorney advisor",
    "salary": 68583
  },
  {
    "name": "brian kim",
    "position": "trial attorney",
    "salary": 68583
  },
  {
    "name": "tiffany brown",
    "position": "trial attorney",
    "salary": 68583
  },
  {
    "name": "matthew lafratta",
    "position": "trial attorney",
    "salary": 68583
  },
  {
    "name": "jean catchings",
    "position": "executive assistant",
    "salary": 68575
  },
  {
    "name": "han ouyang",
    "position": "associate director",
    "salary": 68575
  },
  {
    "name": "shirin ghareeb",
    "position": "dep dir wash dc inter film fes",
    "salary": 68575
  },
  {
    "name": "rosalie montgomery",
    "position": "social services rep",
    "salary": 68538
  },
  {
    "name": "lawrence dipietro",
    "position": "battalion fire chief",
    "salary": 111301
  },
  {
    "name": "dong jeong",
    "position": "visiting associate professor",
    "salary": 68500
  },
  {
    "name": "marcus berry",
    "position": "recreation therapi",
    "salary": 68459
  },
  {
    "name": "dennis mcclure",
    "position": "instructor, jrotc",
    "salary": 68455
  },
  {
    "name": "keith poindexter",
    "position": "payroll specialist",
    "salary": 68455
  },
  {
    "name": "esteban olivares",
    "position": "first yr exp program dir",
    "salary": 68455
  },
  {
    "name": "jessie lashley",
    "position": "vocational train instructor",
    "salary": 68455
  },
  {
    "name": "craig keller",
    "position": "mental health specialist",
    "salary": 68453
  },
  {
    "name": "theresa shanklin",
    "position": "paramedic instructor",
    "salary": 68449
  },
  {
    "name": "michael lee",
    "position": "workers compensation recipient",
    "salary": 68432
  },
  {
    "name": "gwendolyn bush-hodge",
    "position": "career counselor",
    "salary": 68347
  },
  {
    "name": "terry reynolds",
    "position": "battalion fire chief",
    "salary": 111301
  },
  {
    "name": "clayton mclaughlin",
    "position": "counselor",
    "salary": 68347
  },
  {
    "name": "cassandra ross",
    "position": "workers compensation recipient",
    "salary": 68328
  },
  {
    "name": "alice thompson",
    "position": "community outreach specialist",
    "salary": 68319
  },
  {
    "name": "gwendolyn noonan-jones",
    "position": "public health analyst",
    "salary": 68319
  },
  {
    "name": "regina payton",
    "position": "realty specialist",
    "salary": 68319
  },
  {
    "name": "yvette jordan-smith",
    "position": "case management coord (bilingu",
    "salary": 68319
  },
  {
    "name": "amy liskow",
    "position": "management analyst",
    "salary": 68319
  },
  {
    "name": "zondi bears",
    "position": "building management specialist",
    "salary": 68319
  },
  {
    "name": "chantelle teasdell",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "kevin kovaleski",
    "position": "management analyst",
    "salary": 68319
  },
  {
    "name": "joseph alam",
    "position": "medical officer (psychiatry)",
    "salary": 158947
  },
  {
    "name": "sean greene",
    "position": "battalion fire chief",
    "salary": 111301
  },
  {
    "name": "joseph thompson",
    "position": "management analyst",
    "salary": 68319
  },
  {
    "name": "alvin layne",
    "position": "forensic evidence specialist",
    "salary": 68319
  },
  {
    "name": "christopher david",
    "position": "zoning data coordinator",
    "salary": 68319
  },
  {
    "name": "david smith",
    "position": "management analyst",
    "salary": 68319
  },
  {
    "name": "william walker",
    "position": "archivist",
    "salary": 68319
  },
  {
    "name": "harold lipton",
    "position": "social worker",
    "salary": 68319
  },
  {
    "name": "wanda delarosa",
    "position": "project coor",
    "salary": 68319
  },
  {
    "name": "alicia cooper",
    "position": "hr specialist (pffrb)",
    "salary": 68319
  },
  {
    "name": "ranjit babra",
    "position": "forester (urban)",
    "salary": 68319
  },
  {
    "name": "rachel dickerson",
    "position": "art in public places program manager",
    "salary": 68319
  },
  {
    "name": "mark wynn",
    "position": "battalion fire chief",
    "salary": 111301
  },
  {
    "name": "dwayne coley",
    "position": "sanitarian",
    "salary": 68319
  },
  {
    "name": "latonia tabb",
    "position": "grants & contract management specialist",
    "salary": 68319
  },
  {
    "name": "paula blyther",
    "position": "staff assistant",
    "salary": 68319
  },
  {
    "name": "patricia sanders",
    "position": "emergency ops & info specialist",
    "salary": 68319
  },
  {
    "name": "kebian murphy",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "stephen eggleston",
    "position": "criminal investigator",
    "salary": 68319
  },
  {
    "name": "dante boykins",
    "position": "staff assistant",
    "salary": 68319
  },
  {
    "name": "david belt",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "todd garcia",
    "position": "program specialist",
    "salary": 68319
  },
  {
    "name": "detra dickens",
    "position": "executive assistant",
    "salary": 68319
  },
  {
    "name": "virlynn atkinson",
    "position": "financial manager",
    "salary": 111197
  },
  {
    "name": "david verba",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "crystal williams",
    "position": "telecomms specialist",
    "salary": 68319
  },
  {
    "name": "janice white",
    "position": "project coor",
    "salary": 68319
  },
  {
    "name": "cynthia warren",
    "position": "telecomms specialist",
    "salary": 68319
  },
  {
    "name": "alicia wade",
    "position": "executive assistant",
    "salary": 68319
  },
  {
    "name": "colleen dreher",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "jeanetta johnson",
    "position": "hr specialist (emp benefits)",
    "salary": 68319
  },
  {
    "name": "tira williams",
    "position": "contracts specialist",
    "salary": 68319
  },
  {
    "name": "louisa buadoo amoa",
    "position": "human resources spec (employee",
    "salary": 68319
  },
  {
    "name": "christine elwell",
    "position": "homeless program specialist",
    "salary": 68319
  },
  {
    "name": "rosanne etinoff",
    "position": "accounts payable dir",
    "salary": 111197
  },
  {
    "name": "cheryl redmond",
    "position": "telecomms specialist",
    "salary": 68319
  },
  {
    "name": "renard dennis",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "donnie johnson",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "anthony faison",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "yolanda taylor-weems",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "peter hillman",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "gloria wilson",
    "position": "telecomms specialist",
    "salary": 68319
  },
  {
    "name": "nancy stewart",
    "position": "coordinator of library moving",
    "salary": 68319
  },
  {
    "name": "rita akers",
    "position": "food program specialist",
    "salary": 68319
  },
  {
    "name": "krista scott plionis",
    "position": "education program specialist",
    "salary": 68319
  },
  {
    "name": "winslow vickerie",
    "position": "accounting dir",
    "salary": 111197
  },
  {
    "name": "erskine payton",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "faith leach",
    "position": "program specialist",
    "salary": 68319
  },
  {
    "name": "kortne edogun",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "annette thacker",
    "position": "child identification spec (ide",
    "salary": 68319
  },
  {
    "name": "ja'sent brown",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "monika wilson-greene",
    "position": "hearing rep",
    "salary": 68319
  },
  {
    "name": "mary walker",
    "position": "executive assistant",
    "salary": 68319
  },
  {
    "name": "william northern",
    "position": "administrative officer",
    "salary": 68319
  },
  {
    "name": "deangela magruder",
    "position": "public affairs specialist",
    "salary": 68319
  },
  {
    "name": "patricia washington",
    "position": "compliance specialist",
    "salary": 68319
  },
  {
    "name": "wayman scott",
    "position": "accounts payable manager",
    "salary": 111197
  },
  {
    "name": "wendy newkirk",
    "position": "executive assistant",
    "salary": 68319
  },
  {
    "name": "martha saccocio",
    "position": "public affairs specialist",
    "salary": 68319
  },
  {
    "name": "laverne harley",
    "position": "victim specialist",
    "salary": 68319
  },
  {
    "name": "consuela boddie",
    "position": "staff assistant",
    "salary": 68319
  },
  {
    "name": "karla garcia",
    "position": "management liaison specialist",
    "salary": 68319
  },
  {
    "name": "pamela wigenton",
    "position": "special assistant",
    "salary": 68319
  },
  {
    "name": "sonya fox",
    "position": "human resources specialist",
    "salary": 68319
  },
  {
    "name": "ingrid rios",
    "position": "planning and development specialist",
    "salary": 68319
  },
  {
    "name": "theresa rose",
    "position": "program specialist",
    "salary": 68319
  },
  {
    "name": "oscar mendez",
    "position": "customer service representative",
    "salary": 68319
  },
  {
    "name": "robert zuraski",
    "position": "fiscal analyst",
    "salary": 111197
  },
  {
    "name": "monica octave",
    "position": "agency telephone coordinator",
    "salary": 68319
  },
  {
    "name": "heather deutsch",
    "position": "bicycle program specialist",
    "salary": 68319
  },
  {
    "name": "joi belfon-valentine",
    "position": "equal opport compliance specialist",
    "salary": 68319
  },
  {
    "name": "lawana buckmon",
    "position": "staff assistant",
    "salary": 68319
  },
  {
    "name": "francine edmonds",
    "position": "neighborhood maintenance coord",
    "salary": 68319
  },
  {
    "name": "michael chuko",
    "position": "forester (urban)",
    "salary": 68319
  },
  {
    "name": "anna chamberlin",
    "position": "transportation management specialist",
    "salary": 68319
  },
  {
    "name": "ciena bayard",
    "position": "forensic toxicologist",
    "salary": 68319
  },
  {
    "name": "ricardo carter",
    "position": "project manager",
    "salary": 68319
  },
  {
    "name": "vivian portis-escoto",
    "position": "community development resource",
    "salary": 68319
  },
  {
    "name": "randolph david",
    "position": "accountant",
    "salary": 111197
  },
  {
    "name": "rhamsye brown",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "joel conlon",
    "position": "forester (urban)",
    "salary": 68319
  },
  {
    "name": "rosadene gill",
    "position": "program analyst",
    "salary": 68319
  },
  {
    "name": "renee withers",
    "position": "staff assistant",
    "salary": 68319
  },
  {
    "name": "margaret burgess",
    "position": "policy analyst",
    "salary": 68319
  },
  {
    "name": "ree baskerville",
    "position": "administrative specialist",
    "salary": 68319
  },
  {
    "name": "anthony proctor",
    "position": "management analyst",
    "salary": 68319
  },
  {
    "name": "sherri battle",
    "position": "administrative officer",
    "salary": 68319
  },
  {
    "name": "jaime holguin",
    "position": "spec emphasis prgrm coor bil",
    "salary": 68319
  },
  {
    "name": "louise warner",
    "position": "information technology specialist",
    "salary": 68319
  },
  {
    "name": "bromley atterbury",
    "position": "accountant",
    "salary": 111197
  },
  {
    "name": "rebecca bush",
    "position": "grants management specialist",
    "salary": 68319
  },
  {
    "name": "nellie staker",
    "position": "equal opportunity specialist",
    "salary": 68319
  },
  {
    "name": "deborah barnes",
    "position": "executive assistant",
    "salary": 68319
  },
  {
    "name": "margaret desper",
    "position": "facilities system specialist",
    "salary": 68305
  },
  {
    "name": "lamont veney",
    "position": "firefighter emt",
    "salary": 68269
  },
  {
    "name": "keyvan ahdut",
    "position": "assoc professor",
    "salary": 68182
  },
  {
    "name": "maxine legall",
    "position": "assoc prof/chair",
    "salary": 68182
  },
  {
    "name": "philicia jefferson",
    "position": "assoc professor",
    "salary": 68182
  },
  {
    "name": "james haver",
    "position": "visiting instructor",
    "salary": 68182
  },
  {
    "name": "kathy dixon",
    "position": "visiting associate professor",
    "salary": 68182
  },
  {
    "name": "franklin deflorimonte",
    "position": "payments & collections ofr",
    "salary": 111197
  },
  {
    "name": "ralph belton",
    "position": "assoc professor",
    "salary": 68182
  },
  {
    "name": "williams rice",
    "position": "assoc professor",
    "salary": 68182
  },
  {
    "name": "courtney aldridge",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "robert jarvis",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "lisa jones",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "kenneth lesley",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "mark roberts",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "michael namian",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "laura landon",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "hillary mason",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "ramia gupta",
    "position": "medical officer (psychiatry)",
    "salary": 158711
  },
  {
    "name": "michele tingling-clemmons",
    "position": "bureau chief",
    "salary": 111181
  },
  {
    "name": "karen breslin",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "denea bruce",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "tracie dow",
    "position": "instructional coach",
    "salary": 68172
  },
  {
    "name": "nerea arias-ferrer",
    "position": "teacher",
    "salary": 68172
  },
  {
    "name": "george spears",
    "position": "attorney advisor",
    "salary": 68145
  },
  {
    "name": "telly allen",
    "position": "youth development rep",
    "salary": 68088
  },
  {
    "name": "tiresias mccall",
    "position": "youth development rep",
    "salary": 68088
  },
  {
    "name": "joi buford",
    "position": "youth development rep",
    "salary": 68088
  },
  {
    "name": "shannon ball",
    "position": "youth development rep",
    "salary": 68088
  },
  {
    "name": "mary proctor",
    "position": "dispatcher",
    "salary": 68053
  },
  {
    "name": "leslie gross",
    "position": "attorney advisor",
    "salary": 111107
  },
  {
    "name": "marvin washington",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ryan nosner",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anthony turner",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dionte myles",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david wallace",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "orlando torres",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tanisha thomas",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "roger williams",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert overmyer",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "darryl thompson",
    "position": "officer ert personnel",
    "salary": 68023
  },
  {
    "name": "matthew miranda",
    "position": "special assistant",
    "salary": 111100
  },
  {
    "name": "mark namdar",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "charles oconnor",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kim togans",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "scott taylor",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "lynette naylor",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "william rapp",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tonya mack",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john stathers",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tatjana savoy",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "christopher reisinger",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "hugh bailey",
    "position": "assoc dir, one-stop ctr oper",
    "salary": 111000
  },
  {
    "name": "heriberto lucena",
    "position": "crime scene srch ofr",
    "salary": 68023
  },
  {
    "name": "robert underwood",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john reasonover",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "maurice watson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james leonard",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tara resper",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dale vernick",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "heath tucker",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marvin tyler",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "danielle vitatoe",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "theresa lewis",
    "position": "rent administrator",
    "salary": 111000
  },
  {
    "name": "larry reed",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "judith groves",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marvin parker",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james o gorman",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kevin o malley",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james wells",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "barry parker",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "steven nguyen",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "elvin green",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kief green",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ronald johnson",
    "position": "information technology specialist",
    "salary": 110963
  },
  {
    "name": "keith green",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "richard jones",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tyrone gross",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "russell grimes",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "william alton",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dwight jones",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "gregory gulledge",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "george mundy",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "antonio long",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david tucker",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "konstantinos fykas",
    "position": "information technology specialist",
    "salary": 110963
  },
  {
    "name": "alves watson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anthony vereen",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "michael topper",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "shannon sweeney",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "holly paige",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "earl thompson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ezequiel vazquez",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james paige",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dennis vaughan",
    "position": "master patrol officer",
    "salary": 68023
  },
  {
    "name": "ralph warren",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "patricia squires",
    "position": "health care program manager",
    "salary": 110940
  },
  {
    "name": "charles weems",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kimbley tutt",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "clifford wilson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "arnette perkins",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kelvin rodriguez",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "charles monk",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "brian wymbs",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "venson wytch",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ryan klipp",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "latrice robinson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "sharon knight",
    "position": "admin",
    "salary": 110940
  },
  {
    "name": "makia robinson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "sherman roberts",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert rodney",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "linda mitchell",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "wade zech",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "victor negron",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john salamone",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "shawn caldwell",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ryan roe",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "randy rogers",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "maurice keys",
    "position": "transportation planner",
    "salary": 110821
  },
  {
    "name": "tracy miles",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "sheron roberson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "mark lakomec",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "andre persaud",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john streets",
    "position": "crime scene srch ofr",
    "salary": 68023
  },
  {
    "name": "michael roberts",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "william peterson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "bobby tabron",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kevin ross",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "lavern miller",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "paula negro",
    "position": "medical officer (psychiatry)",
    "salary": 158711
  },
  {
    "name": "ralph ennis",
    "position": "inspector",
    "salary": 110730
  },
  {
    "name": "jesus roman",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "nancy milburn",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "michael mocca",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john robinson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "mark lee",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "hardy mervilus",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert mazakis",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anthony pradier",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "antonia mcclam",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "mark mcconnell",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "thomas wheeler",
    "position": "information technology specialist",
    "salary": 110709
  },
  {
    "name": "thomas simmons",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "toniere lee",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "william stokes",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david pritchett",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dereck phillip",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "terence smith",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "collier rice",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "darnell sanders",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marcus stevens",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dane satterwhite",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "pierre erville",
    "position": "environ protection specialist",
    "salary": 110637
  },
  {
    "name": "mark steffenburg",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kayode sodimu",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert sheaffer",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "edward snead",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "latina shedrick",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "malachi malik",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "norman rahman",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "darren malloy",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "clayton smith",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "santos portillo",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "gloria clark",
    "position": "wic program manager",
    "salary": 110592
  },
  {
    "name": "clyde pringle",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kimberly sillah",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "eboni merritt",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "richard mason",
    "position": "master patrol officer",
    "salary": 68023
  },
  {
    "name": "lynn pittmon",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tony mason",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "thomas zurowski",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anthony mcelwee",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "frantz fulcher",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "sherwin douglas",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marvin johnson",
    "position": "grant program manager",
    "salary": 110592
  },
  {
    "name": "farid fawzi",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "teresa flynn",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "duane davis",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "diane davis",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "jose garcia",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kenneth daniels",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "courtney flash",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "steven chan",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tisha gant",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "jose garcia",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "elizabeth pollitt paisner",
    "position": "policy analyst",
    "salary": 110587
  },
  {
    "name": "shalonda davis",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert elliott",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marcellus jenkins",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "wayne david",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert ferretti",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "allan jenkins",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "charles anthony",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john hart",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james antonio",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "adrian harris",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anthony jefferson",
    "position": "budget officer",
    "salary": 110587
  },
  {
    "name": "patrick flynn",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ulysses delaney",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "bryant collins",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert fessock",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "benjamin fetting",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "angel figueroa",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "charles fisher",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "john fitch",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ralph flanigan",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ronald edwards",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "prabhu kurakula",
    "position": "information technology specialist",
    "salary": 110587
  },
  {
    "name": "bryan cox",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "erica dortch-jones",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marcus jones",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "brian eagle",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "gary walker",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "martin garrison",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anthony delucca",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "theodore gay",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "anna ewald",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "charles garrett",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dorothy whisler fortune",
    "position": "contract specialist",
    "salary": 110587
  },
  {
    "name": "scott gaumond",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david casetta",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "frazier caudle",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "chandler cotton",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "dennis gheen",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james crisman",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "lavida ellerbe",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "wade douglas",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "christopher dove",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kenneth downey",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kimberly holloway",
    "position": "agency fiscal officer",
    "salary": 110587
  },
  {
    "name": "christopher downs",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "thomas dunn",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kevin delozier",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ulises fernandez",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "stephen chih",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "melvyn fernandez",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kerr emmanuel",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "elmo english",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david evans",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "norbert dengler",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "frank teller",
    "position": "agency chief information offic",
    "salary": 158330
  },
  {
    "name": "bryan goodluck",
    "position": "financial manager",
    "salary": 110587
  },
  {
    "name": "william dempster iv",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "christopher dyke",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "april gray",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "tanya brown",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "nikeith goins",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "brandi goldring",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james alexander",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kevin carey",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "brian glover",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "manuel benites",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "rhonda cheatham woods",
    "position": "chief management operations",
    "salary": 110587
  },
  {
    "name": "jose gonzalez rivera",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "gary glenn",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "arthur brown",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "gerald harmon",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james jaffe",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "issac jackson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david jackson",
    "position": "master patrol officer",
    "salary": 68023
  },
  {
    "name": "ivan jordan",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "jose berrios",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "lloyd coward",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert stephens",
    "position": "treasury operations manager",
    "salary": 110587
  },
  {
    "name": "ryan jensrud",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "bryan jones",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "araz alali",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "roy khoury",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "william belton",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "brent khelawan",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "shawnee goins",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "michael carruth",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "royston gilgeous",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "walter gilmore",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "charles fultz",
    "position": "dir internal security",
    "salary": 110587
  },
  {
    "name": "lucius kearney",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "ricardo carrion",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "lance kashinsky",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "luis cartagena",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "mosette harmon",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "abner joge",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "bryan anderson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kenneth johnson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kemal johnson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "michael hamelin",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "alisa petty",
    "position": "inspector",
    "salary": 110518
  },
  {
    "name": "kyle burley",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "antoine carter",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "joseph johnson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "crescent harris",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "michael baker",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "laschon harvell",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "brenda boyd",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "robert johnson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "myron glover",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "nakia harris",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "alpha diallo",
    "position": "deputy dir pub hlth lab",
    "salary": 110447
  },
  {
    "name": "helen andrews",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "marion anderson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "george hill",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "jerry holmes",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "israel james",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "timothy jefferson",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "kevin hines",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "lamumba howard",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "sarah hoffman",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "paul hofmann",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "eulois cleckley",
    "position": "transp management planner",
    "salary": 110415
  },
  {
    "name": "daniel baez",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "david bailey",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "james huff",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "gregg boyd",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "justin branson",
    "position": "officer ert personnel",
    "salary": 68023
  },
  {
    "name": "stephanie heyward",
    "position": "officer",
    "salary": 68023
  },
  {
    "name": "mikal ba th",
    "position": "master patrol officer",
    "salary": 68023
  },
  {
    "name": "elijah hunter",
    "position": "officer",
    "salary": 68016
  },
  {
    "name": "thaddeus modlin",
    "position": "officer",
    "salary": 68016
  },
  {
    "name": "robert marus",
    "position": "writer editor",
    "salary": 68000
  },
  {
    "name": "john lisle",
    "position": "public information officer",
    "salary": 110415
  },
  {
    "name": "calandra lawrence",
    "position": "assistant watch commander",
    "salary": 68000
  },
  {
    "name": "mary valcourt",
    "position": "visiting associate professor",
    "salary": 68000
  },
  {
    "name": "elgloria harrison",
    "position": "assoc prof/chair",
    "salary": 67972
  },
  {
    "name": "patricia bailey",
    "position": "budget analyst",
    "salary": 67946
  },
  {
    "name": "karen skipper",
    "position": "coordinato",
    "salary": 67946
  },
  {
    "name": "gwendolyn hawkins bazuaye",
    "position": "administrative office assistant",
    "salary": 67946
  },
  {
    "name": "lino martinez-hernandez",
    "position": "billing examiner",
    "salary": 67946
  },
  {
    "name": "jessica dulay",
    "position": "coordinator,special proj",
    "salary": 67946
  },
  {
    "name": "julianne wade",
    "position": "coordinato",
    "salary": 67946
  },
  {
    "name": "bernard terry",
    "position": "coordinator,special proj",
    "salary": 67946
  },
  {
    "name": "chigbo ofong",
    "position": "associate dean",
    "salary": 110388
  },
  {
    "name": "pedro dejesus",
    "position": "budget analyst",
    "salary": 67946
  },
  {
    "name": "maurice shorter",
    "position": "accountant",
    "salary": 67946
  },
  {
    "name": "meredith makar",
    "position": "counselor",
    "salary": 67925
  },
  {
    "name": "zarin kapadia",
    "position": "counselor",
    "salary": 67925
  },
  {
    "name": "jimmy mcduffie",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "blair kramer",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "steven vines",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "john russell",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "william seekford",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "john spencer",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "howard ways",
    "position": "director",
    "salary": 110388
  },
  {
    "name": "kenneth boswell",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "michael lawler",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "james griest",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "christopher therres",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "michael mcdonough",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "jeffrey scire",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "charles lisko",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "richard fox",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "andrew charland",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "james west",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "buddy roogow",
    "position": "executive director",
    "salary": 158330
  },
  {
    "name": "denis antoine",
    "position": "udc ambass at lg& dip&exch",
    "salary": 110388
  },
  {
    "name": "christopher hershey",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "percy gibson",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "michael knaggs",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "richard small",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "kevin lignelli",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "richard sheltra",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "michael green",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "john rooney",
    "position": "firefighter tech",
    "salary": 67783
  },
  {
    "name": "alicia gadsden",
    "position": "staff assistant",
    "salary": 67732
  },
  {
    "name": "darlene parks",
    "position": "customer service representative",
    "salary": 67732
  },
  {
    "name": "gloria wyche moore",
    "position": "act dean, comm out & ext serv",
    "salary": 110388
  },
  {
    "name": "doretha johnson",
    "position": "staff assistant",
    "salary": 67732
  },
  {
    "name": "bobbie mack",
    "position": "customer service representative",
    "salary": 67732
  },
  {
    "name": "raphael bartholomew",
    "position": "budget analyst",
    "salary": 67732
  },
  {
    "name": "sandra simmons",
    "position": "payroll specialist",
    "salary": 67732
  },
  {
    "name": "james person",
    "position": "staff assistant",
    "salary": 67732
  },
  {
    "name": "janice brice",
    "position": "accounting specialist",
    "salary": 67732
  },
  {
    "name": "frances kingsberry",
    "position": "support services specialist",
    "salary": 67732
  },
  {
    "name": "gale rivers",
    "position": "staff assistant",
    "salary": 67731
  },
  {
    "name": "lachelle cooper",
    "position": "tech supp specialist",
    "salary": 67702
  },
  {
    "name": "lydia gumbs",
    "position": "teacher",
    "salary": 67616
  },
  {
    "name": "ansar ahmed",
    "position": "asso prov, instit effective",
    "salary": 110388
  },
  {
    "name": "elke chen",
    "position": "education program specialist",
    "salary": 67616
  },
  {
    "name": "nigel atwell",
    "position": "teacher",
    "salary": 67616
  },
  {
    "name": "natalie pough",
    "position": "teacher",
    "salary": 67616
  },
  {
    "name": "irene simmons",
    "position": "systems accountant",
    "salary": 67600
  },
  {
    "name": "olufemi abayomi-paul",
    "position": "appraiser",
    "salary": 67600
  },
  {
    "name": "gwendolyn bass",
    "position": "real property program speciali",
    "salary": 67600
  },
  {
    "name": "darryl broadus",
    "position": "appraiser",
    "salary": 67600
  },
  {
    "name": "russell brown",
    "position": "appraiser",
    "salary": 67600
  },
  {
    "name": "kassa reda",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "steven clark",
    "position": "appraiser",
    "salary": 67600
  },
  {
    "name": "phyllis vincent",
    "position": "teacher",
    "salary": 110379
  },
  {
    "name": "kina dunston",
    "position": "real property program speciali",
    "salary": 67600
  },
  {
    "name": "florence sam",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "mustafa elevli",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "ernest grant",
    "position": "information technology specialist",
    "salary": 67600
  },
  {
    "name": "pablo gonzalez",
    "position": "environmental engineer",
    "salary": 67600
  },
  {
    "name": "david bailey",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "delonte harris",
    "position": "appraiser",
    "salary": 67600
  },
  {
    "name": "geemon kurian",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "jennifer valentine",
    "position": "information technology specialist",
    "salary": 67600
  },
  {
    "name": "charles egunjobi",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "kathie thompson",
    "position": "speech pathologist",
    "salary": 110379
  },
  {
    "name": "clinton murphy",
    "position": "appraiser",
    "salary": 67600
  },
  {
    "name": "akwilina perry",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "lucretia brown",
    "position": "environmental protection speci",
    "salary": 67600
  },
  {
    "name": "angel pena-orozco",
    "position": "civil engineer",
    "salary": 67600
  },
  {
    "name": "matthew weber",
    "position": "environmental protection speci",
    "salary": 67600
  },
  {
    "name": "ruby quartey-taylor",
    "position": "contracts management specialis",
    "salary": 67600
  },
  {
    "name": "hongyan li",
    "position": "auditor (tax)",
    "salary": 67600
  },
  {
    "name": "vincent parker",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "nykia barnes",
    "position": "environmental engineer",
    "salary": 67600
  },
  {
    "name": "jabriel shakoor",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "john robinson",
    "position": "workers compensation recipient",
    "salary": 110344
  },
  {
    "name": "grace alao",
    "position": "contract specialist",
    "salary": 67600
  },
  {
    "name": "christine litwa",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "aaron holland",
    "position": "contract specialist",
    "salary": 67600
  },
  {
    "name": "darren laing",
    "position": "contract specialist",
    "salary": 67600
  },
  {
    "name": "lauren groves",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "rebecca jordano",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "erin mathieson",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "mywen baysah",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "jennifer gillyard",
    "position": "program analyst",
    "salary": 67600
  },
  {
    "name": "cedet francois",
    "position": "contracts management specialis",
    "salary": 67600
  },
  {
    "name": "carooq taylor",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "corisa myers",
    "position": "resource development specialist",
    "salary": 67600
  },
  {
    "name": "nicole matthews",
    "position": "contract specialist",
    "salary": 67600
  },
  {
    "name": "shaneena robertson",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "dorothy schug",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "robert loproto",
    "position": "invest fraud",
    "salary": 67600
  },
  {
    "name": "ileana corrales",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "sinead quinn",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "ramon taylor",
    "position": "resource development specialist",
    "salary": 67600
  },
  {
    "name": "bernadette joy",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "laura seidel",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "walter jernigan",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "jeffrey tisdale",
    "position": "contract specialist",
    "salary": 67600
  },
  {
    "name": "gloria betts",
    "position": "student accounts specialist",
    "salary": 67600
  },
  {
    "name": "gabrielle schultz",
    "position": "health licensing specialist",
    "salary": 67600
  },
  {
    "name": "della hoffman",
    "position": "social worker",
    "salary": 67600
  },
  {
    "name": "katherine rogers",
    "position": "data analyst",
    "salary": 67600
  },
  {
    "name": "daniella herdman",
    "position": "epidemiologist",
    "salary": 67600
  },
  {
    "name": "lawrence agyekum",
    "position": "public health analyst",
    "salary": 67600
  },
  {
    "name": "mary buckley",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "gabrielle ray",
    "position": "epidemiologist",
    "salary": 67600
  },
  {
    "name": "regina james",
    "position": "utilization review specialist",
    "salary": 67600
  },
  {
    "name": "david mclain",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "christopher grubert",
    "position": "data analyst",
    "salary": 67600
  },
  {
    "name": "jacqueline gould",
    "position": "transition coordinator",
    "salary": 67600
  },
  {
    "name": "bruce points",
    "position": "public health analyst",
    "salary": 67600
  },
  {
    "name": "roopa chakkappan",
    "position": "policy analyst",
    "salary": 67600
  },
  {
    "name": "yasir shah",
    "position": "public health advisor",
    "salary": 67600
  },
  {
    "name": "shantae jones",
    "position": "student accounts specialist",
    "salary": 67600
  },
  {
    "name": "michael smalls",
    "position": "workforce development specialist",
    "salary": 67600
  },
  {
    "name": "robin coates",
    "position": "program analyst",
    "salary": 67600
  },
  {
    "name": "ruben legaspi",
    "position": "comb code comp specialist",
    "salary": 67600
  },
  {
    "name": "anna shapiro",
    "position": "housing regulations specialist",
    "salary": 67600
  },
  {
    "name": "antonio foster",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "dwayne dawson",
    "position": "workforce development specialist",
    "salary": 67600
  },
  {
    "name": "delaine youmans-englebert",
    "position": "comb code comp specialist",
    "salary": 67600
  },
  {
    "name": "johnette powell",
    "position": "economic dev program specialist",
    "salary": 67600
  },
  {
    "name": "nathaniel allen",
    "position": "information technology specialist",
    "salary": 67600
  },
  {
    "name": "shanna williams",
    "position": "vocational rehabilitation specialist",
    "salary": 67600
  },
  {
    "name": "oluwatoyin ademokun",
    "position": "public health services special",
    "salary": 67600
  },
  {
    "name": "autumn bailey",
    "position": "energy program specialist",
    "salary": 67600
  },
  {
    "name": "tan nguyen",
    "position": "engineering technician",
    "salary": 67600
  },
  {
    "name": "stephen reiling",
    "position": "environmental protection speci",
    "salary": 67600
  },
  {
    "name": "tyra watkins",
    "position": "homeless coordinator (hprp)",
    "salary": 67600
  },
  {
    "name": "david tseng",
    "position": "executive director",
    "salary": 158330
  },
  {
    "name": "george bell",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "stephen lewis",
    "position": "vocational rehabilitation specialist",
    "salary": 67600
  },
  {
    "name": "vicki lindsay",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "chauncey taylor",
    "position": "engineering technician",
    "salary": 67600
  },
  {
    "name": "candice jordan",
    "position": "vocational rehabilitation specialist",
    "salary": 67600
  },
  {
    "name": "shawn wright",
    "position": "environmental protection speci",
    "salary": 67600
  },
  {
    "name": "jennifer guillaume",
    "position": "environmental protection speci",
    "salary": 67600
  },
  {
    "name": "derrick bailey",
    "position": "management analyst",
    "salary": 67600
  },
  {
    "name": "shonda pertilla-sissoko",
    "position": "vocational rehabilitation specialist",
    "salary": 67600
  },
  {
    "name": "donald carr",
    "position": "investigator",
    "salary": 67600
  },
  {
    "name": "ponti andrews",
    "position": "information technology specialist",
    "salary": 67600
  },
  {
    "name": "stephen leonard",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "laverne powell",
    "position": "collection specialist",
    "salary": 67600
  },
  {
    "name": "john schools",
    "position": "engineering technician",
    "salary": 67600
  },
  {
    "name": "katherine collins",
    "position": "forensic investigator",
    "salary": 67600
  },
  {
    "name": "ricky mcdonald",
    "position": "facilities shelter home coord",
    "salary": 67600
  },
  {
    "name": "latoya jamison",
    "position": "forensic investigator",
    "salary": 67600
  },
  {
    "name": "michel ramirez",
    "position": "information technology specialist",
    "salary": 67600
  },
  {
    "name": "bipin pathak",
    "position": "environmental engineer",
    "salary": 67600
  },
  {
    "name": "tony paschal",
    "position": "business relations specialist",
    "salary": 67600
  },
  {
    "name": "russell clark",
    "position": "environmental protection speci",
    "salary": 67600
  },
  {
    "name": "adam allston",
    "position": "epidemiologist",
    "salary": 67600
  },
  {
    "name": "leroy cade",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "tasheanna harris",
    "position": "information technology specialist",
    "salary": 67600
  },
  {
    "name": "shelia douglas",
    "position": "member services supervisor",
    "salary": 67578
  },
  {
    "name": "tauanja kittrell",
    "position": "fire arson investigator armed",
    "salary": 67560
  },
  {
    "name": "scott ford",
    "position": "fire arson investigator armed",
    "salary": 67560
  },
  {
    "name": "john armstrong",
    "position": "correctional officer",
    "salary": 67521
  },
  {
    "name": "robert gladden",
    "position": "correctional officer",
    "salary": 67521
  },
  {
    "name": "kristina kellogg",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "shannon wright",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "claudia khafra",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "patricia irby",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "william mutchler",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "lorna oweh",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "amy johnson",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "rawlinson pointer",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "nathan rifenburg",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "amy hegner",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "bridget jones",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "mary dent",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "nakia briggs",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "kobi colston",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "jeffrey daniels",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "daniel troxell",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "kimberley dresbach",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "ayanna flowers",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "jeffrey williams",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "dameion roy",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "carmen garner",
    "position": "teacher",
    "salary": 67515
  },
  {
    "name": "cynthia belcuore",
    "position": "literacy coach",
    "salary": 67504
  },
  {
    "name": "dareck parks",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "carla mckenzie",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "beth leone",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "garland johnson",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "robert webster",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "imani ferguson",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "sara arranz ramiro",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "jose bustios",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "iris turcios",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "moniqua sawyer",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "catherine moessner",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "maia dargan",
    "position": "teacher",
    "salary": 67504
  },
  {
    "name": "adewole ogundepo",
    "position": "psychiatric nurse",
    "salary": 67482
  },
  {
    "name": "cheryl jones",
    "position": "social services rep",
    "salary": 67432
  },
  {
    "name": "phyllis williams hampton",
    "position": "social services rep",
    "salary": 67432
  },
  {
    "name": "mark sweitzer",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "oscar broadie",
    "position": "administrative officer",
    "salary": 67408
  },
  {
    "name": "kiah campbell",
    "position": "administrative officer",
    "salary": 67408
  },
  {
    "name": "renee watson",
    "position": "administrative officer",
    "salary": 67408
  },
  {
    "name": "reginald stevens",
    "position": "administrative officer",
    "salary": 67408
  },
  {
    "name": "fred williams",
    "position": "administrative officer",
    "salary": 67408
  },
  {
    "name": "rochelle logan",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "andrea drost",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "mary konya",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "christopher rinkus",
    "position": "project manager",
    "salary": 67333
  },
  {
    "name": "colleen mcguire-horvath",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "eugene stewart",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "adaugo ohanyerenwa",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "amy goldwasser",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "julie johnson",
    "position": "program manager",
    "salary": 67333
  },
  {
    "name": "sarah ozment",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "carita mack",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "cynda meffen",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "katherine kaufmann",
    "position": "program analyst",
    "salary": 67333
  },
  {
    "name": "antoinette douglas",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "sedria hill",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "latashia scott",
    "position": "project manager",
    "salary": 67333
  },
  {
    "name": "william baltimore",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "kristal mclaughlin",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "lorraine romey",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "sarah weston",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "shauna davey",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "talibah thomas",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "ivan baumwell",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "jaimie foster",
    "position": "program manager",
    "salary": 67333
  },
  {
    "name": "alvin denmark",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "melanie cerritos",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "yu choi",
    "position": "management & program analyst",
    "salary": 67333
  },
  {
    "name": "gerald blanks",
    "position": "captain",
    "salary": 110318
  },
  {
    "name": "andrea desantis",
    "position": "project manager",
    "salary": 67333
  },
  {
    "name": "jonathan edwards",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "rianna berkeley",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "amber crowder",
    "position": "project manager",
    "salary": 67333
  },
  {
    "name": "susan tso",
    "position": "program specialist",
    "salary": 67333
  },
  {
    "name": "alfred richards",
    "position": "fleet program manager",
    "salary": 67273
  },
  {
    "name": "carolyn davis",
    "position": "dispatcher",
    "salary": 67265
  },
  {
    "name": "darlene mills",
    "position": "dispatcher",
    "salary": 67265
  },
  {
    "name": "veronica johnson stewart",
    "position": "dispatcher",
    "salary": 67265
  },
  {
    "name": "denise alexander",
    "position": "dispatcher",
    "salary": 67265
  },
  {
    "name": "eric stanchfield",
    "position": "executive director",
    "salary": 193125
  },
  {
    "name": "gordon mcdonald",
    "position": "deputy cfo",
    "salary": 158330
  },
  {
    "name": "angela bazzi",
    "position": "mngmt and program analyst",
    "salary": 110305
  },
  {
    "name": "evonne greene",
    "position": "dispatcher",
    "salary": 67265
  },
  {
    "name": "sherry black",
    "position": "dispatcher",
    "salary": 67265
  },
  {
    "name": "larry bishop",
    "position": "correctional officer",
    "salary": 67234
  },
  {
    "name": "wendy pugh",
    "position": "coordinator (et)",
    "salary": 67198
  },
  {
    "name": "archie williams",
    "position": "coord, special education",
    "salary": 67198
  },
  {
    "name": "melissa green-peterson",
    "position": "coord, special education",
    "salary": 67198
  },
  {
    "name": "devin johnson",
    "position": "coord, special education",
    "salary": 67198
  },
  {
    "name": "elizabeth druy",
    "position": "program coordinator",
    "salary": 67198
  },
  {
    "name": "coreil dickinson",
    "position": "dean of students (et)",
    "salary": 67198
  },
  {
    "name": "cherryl bradley",
    "position": "spec education specialist",
    "salary": 67198
  },
  {
    "name": "patrick pope",
    "position": "principal",
    "salary": 110290
  },
  {
    "name": "andrew brown",
    "position": "coordinator (et)",
    "salary": 67198
  },
  {
    "name": "geo draper",
    "position": "workers compensation recipient",
    "salary": 67184
  },
  {
    "name": "loney rawlings",
    "position": "workers compensation recipient",
    "salary": 67080
  },
  {
    "name": "lashanda talbert",
    "position": "executive assistant",
    "salary": 67019
  },
  {
    "name": "mulugheta habtemicael",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "mitchell robinson",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "debra scott",
    "position": "information technology specialist",
    "salary": 67019
  },
  {
    "name": "mia newman",
    "position": "banking analyst",
    "salary": 67019
  },
  {
    "name": "debra boyd",
    "position": "staff assistant",
    "salary": 67019
  },
  {
    "name": "latoya boyd",
    "position": "management analyst",
    "salary": 67019
  },
  {
    "name": "william cotten",
    "position": "information technology specialist",
    "salary": 110168
  },
  {
    "name": "deborah greer",
    "position": "payroll customer service manag",
    "salary": 67019
  },
  {
    "name": "jo beatty",
    "position": "returns processing",
    "salary": 67019
  },
  {
    "name": "ethelbert during",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "sunny saini",
    "position": "payroll supv",
    "salary": 67019
  },
  {
    "name": "jose carela",
    "position": "management analyst",
    "salary": 67019
  },
  {
    "name": "doreen daniels",
    "position": "investigator",
    "salary": 67019
  },
  {
    "name": "shirley newman",
    "position": "program analyst",
    "salary": 67019
  },
  {
    "name": "sarita curtis",
    "position": "program specialist",
    "salary": 67019
  },
  {
    "name": "eun yeom",
    "position": "sales coordinator",
    "salary": 67019
  },
  {
    "name": "shannon spence",
    "position": "financial specialist",
    "salary": 67019
  },
  {
    "name": "aubrey mongal",
    "position": "captain",
    "salary": 110129
  },
  {
    "name": "olga lagutin",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "tanya francis",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "kevin lomax",
    "position": "supervisor collection agent",
    "salary": 67019
  },
  {
    "name": "logan deskins",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "halimah sebuliba kintu",
    "position": "budget analyst",
    "salary": 67019
  },
  {
    "name": "judy cofield",
    "position": "executive assistant",
    "salary": 67019
  },
  {
    "name": "mohamed hmaey",
    "position": "accountant",
    "salary": 67019
  },
  {
    "name": "joshua stearns",
    "position": "analyst",
    "salary": 67000
  },
  {
    "name": "harris bailey",
    "position": "terminal management specialist",
    "salary": 67000
  },
  {
    "name": "ahmad reed",
    "position": "spec for st disab",
    "salary": 66955
  },
  {
    "name": "sharon vaughan-roach",
    "position": "operations program manager",
    "salary": 110121
  },
  {
    "name": "keith mcdaniel",
    "position": "youth development rep",
    "salary": 66955
  },
  {
    "name": "marian smith",
    "position": "student recruitment and market",
    "salary": 66955
  },
  {
    "name": "zena brooks",
    "position": "human resources specialist",
    "salary": 66955
  },
  {
    "name": "dizella jones",
    "position": "human resources operations man",
    "salary": 66955
  },
  {
    "name": "joyce fletcher",
    "position": "juvenile justice i",
    "salary": 66953
  },
  {
    "name": "joseph pettiford",
    "position": "correctional officer",
    "salary": 66953
  },
  {
    "name": "linda holmes",
    "position": "youth development rep",
    "salary": 66953
  },
  {
    "name": "donald hilliard",
    "position": "correctional program spec(fbu",
    "salary": 66953
  },
  {
    "name": "shuketha johnson",
    "position": "juvenile justice i",
    "salary": 66953
  },
  {
    "name": "lindy baucum",
    "position": "supervisor parking enforcement",
    "salary": 66953
  },
  {
    "name": "oke anyaegbunam",
    "position": "hsng prod trust fund ofcr",
    "salary": 110111
  },
  {
    "name": "julius layton",
    "position": "youth development rep",
    "salary": 66953
  },
  {
    "name": "jay patterson",
    "position": "youth treatment unit manager",
    "salary": 66953
  },
  {
    "name": "willie salmon",
    "position": "engineering tech",
    "salary": 66953
  },
  {
    "name": "john robinson",
    "position": "youth treatment unit manager",
    "salary": 66953
  },
  {
    "name": "robert walker",
    "position": "const rep maintenance",
    "salary": 66953
  },
  {
    "name": "derric speight",
    "position": "supervisor parking enforcement",
    "salary": 66953
  },
  {
    "name": "david waaldijk",
    "position": "engineering tech",
    "salary": 66953
  },
  {
    "name": "angela mcnair",
    "position": "hr specialist (benefits)",
    "salary": 66953
  },
  {
    "name": "rosyland muse",
    "position": "assistant watch commander",
    "salary": 66953
  },
  {
    "name": "william camp",
    "position": "assistant watch commander",
    "salary": 66953
  },
  {
    "name": "courtney lattimore",
    "position": "contract specialist",
    "salary": 110000
  },
  {
    "name": "marlene hollins",
    "position": "assistant watch commander",
    "salary": 66953
  },
  {
    "name": "renee campbell",
    "position": "assistant watch commander",
    "salary": 66953
  },
  {
    "name": "adrienne little",
    "position": "recreation therapist",
    "salary": 66953
  },
  {
    "name": "natasha powell",
    "position": "manpower dev specialist",
    "salary": 66953
  },
  {
    "name": "shelly chisholm",
    "position": "correctional program specialist",
    "salary": 66953
  },
  {
    "name": "franklyn st. hilaire",
    "position": "call center operations supervi",
    "salary": 66953
  },
  {
    "name": "larry hicks",
    "position": "manpower dev specialist",
    "salary": 66953
  },
  {
    "name": "melissa stallings",
    "position": "manpower dev specialist",
    "salary": 66953
  },
  {
    "name": "kathy nelson",
    "position": "correctional officer",
    "salary": 66953
  },
  {
    "name": "janelle pittman",
    "position": "public safety manager",
    "salary": 66953
  },
  {
    "name": "adenegan olusegun",
    "position": "project manager",
    "salary": 110000
  },
  {
    "name": "adrienne wilson",
    "position": "business license specialist",
    "salary": 66953
  },
  {
    "name": "beryl johnson",
    "position": "manpower dev specialist",
    "salary": 66953
  },
  {
    "name": "george williams",
    "position": "fleet manager",
    "salary": 66953
  },
  {
    "name": "yvonne smith",
    "position": "comm outreach coord",
    "salary": 66953
  },
  {
    "name": "kimberly springle",
    "position": "archivist",
    "salary": 66953
  },
  {
    "name": "vincent cain",
    "position": "recreation specialist",
    "salary": 66953
  },
  {
    "name": "wayne sanders",
    "position": "deputy terminal manager",
    "salary": 66953
  },
  {
    "name": "lenard harrison",
    "position": "code enforcement inspect",
    "salary": 66953
  },
  {
    "name": "kevin richardson washington",
    "position": "deputy terminal manager",
    "salary": 66953
  },
  {
    "name": "mark thomas",
    "position": "recreation specialist",
    "salary": 66953
  },
  {
    "name": "jon meyers",
    "position": "chief of staff",
    "salary": 110000
  },
  {
    "name": "kevin clark",
    "position": "recreation specialist",
    "salary": 66953
  },
  {
    "name": "cecilia washington",
    "position": "assistant aquatics program manager",
    "salary": 66953
  },
  {
    "name": "bobby lacy",
    "position": "facility manager",
    "salary": 66953
  },
  {
    "name": "steven anderson",
    "position": "facility manager",
    "salary": 66953
  },
  {
    "name": "shelly ford-jackson",
    "position": "health licensing s",
    "salary": 66953
  },
  {
    "name": "ronald johnson",
    "position": "code comp specialist",
    "salary": 66953
  },
  {
    "name": "thomas farrell",
    "position": "deputy terminal manager",
    "salary": 66953
  },
  {
    "name": "gail ward",
    "position": "investigator",
    "salary": 66934
  },
  {
    "name": "rhonell stewart",
    "position": "provider resource specialist",
    "salary": 66925
  },
  {
    "name": "marilyn emerson",
    "position": "energy program specialist",
    "salary": 66925
  },
  {
    "name": "walter howell",
    "position": "program manager",
    "salary": 110000
  },
  {
    "name": "angel ojeda",
    "position": "child care eligibility specialist",
    "salary": 66925
  },
  {
    "name": "rene smith",
    "position": "vocational development special",
    "salary": 66925
  },
  {
    "name": "mary hinds",
    "position": "service coordinator",
    "salary": 66925
  },
  {
    "name": "christopher brown",
    "position": "energy program specialist",
    "salary": 66925
  },
  {
    "name": "robert vela",
    "position": "vocational rehabilitation specialist",
    "salary": 66925
  },
  {
    "name": "arnell jones",
    "position": "program monitor",
    "salary": 66925
  },
  {
    "name": "franklin morris",
    "position": "engineering technician",
    "salary": 66925
  },
  {
    "name": "loretta nelson",
    "position": "program specialist",
    "salary": 66925
  },
  {
    "name": "robert horton",
    "position": "engineering technician",
    "salary": 66925
  },
  {
    "name": "brenda twyman",
    "position": "vocational development special",
    "salary": 66925
  },
  {
    "name": "lasana mack",
    "position": "dcfo & treasurer",
    "salary": 158330
  },
  {
    "name": "desiree townes",
    "position": "assistant facility services ma",
    "salary": 110000
  },
  {
    "name": "john waymmann",
    "position": "mental health specialist",
    "salary": 66925
  },
  {
    "name": "kevin burns",
    "position": "engineering technician",
    "salary": 66925
  },
  {
    "name": "drew franklin",
    "position": "vocational rehabilitation specialist",
    "salary": 66925
  },
  {
    "name": "anthony jackson",
    "position": "engineering technician",
    "salary": 66925
  },
  {
    "name": "christina mobley bradley",
    "position": "vocational rehabilitation specialist",
    "salary": 66925
  },
  {
    "name": "ruth trocollli",
    "position": "archeologist",
    "salary": 66925
  },
  {
    "name": "carolyn gray",
    "position": "accounting tech",
    "salary": 66925
  },
  {
    "name": "deborah diggs",
    "position": "staff assistant",
    "salary": 66925
  },
  {
    "name": "victoria lawson",
    "position": "resource development specialis",
    "salary": 66925
  },
  {
    "name": "chidinma ukairo",
    "position": "insurance opr exam audit",
    "salary": 66925
  },
  {
    "name": "yasha williams",
    "position": "program analyst",
    "salary": 110000
  },
  {
    "name": "rosemary culver",
    "position": "mental health specialist",
    "salary": 66925
  },
  {
    "name": "juliana sarkodee",
    "position": "child fatality review informat",
    "salary": 66925
  },
  {
    "name": "ana hakim",
    "position": "mental health specialist",
    "salary": 66925
  },
  {
    "name": "matadin agarwalla",
    "position": "librarian",
    "salary": 66925
  },
  {
    "name": "darrell smith",
    "position": "engineering technician",
    "salary": 66925
  },
  {
    "name": "jeffrey woods",
    "position": "mental health specialist",
    "salary": 66925
  },
  {
    "name": "shari acosta",
    "position": "staff assistant",
    "salary": 66925
  },
  {
    "name": "daniel talley",
    "position": "program analyst",
    "salary": 66925
  },
  {
    "name": "meredith morris",
    "position": "librarian",
    "salary": 66925
  },
  {
    "name": "james kahler",
    "position": "training instructor",
    "salary": 66925
  },
  {
    "name": "lewis starkes",
    "position": "administrative hra",
    "salary": 110000
  },
  {
    "name": "faye haskins",
    "position": "librarian",
    "salary": 66925
  },
  {
    "name": "bryan tillman",
    "position": "investigator",
    "salary": 66925
  },
  {
    "name": "cynthia anderson",
    "position": "unemployment tax examiner",
    "salary": 66925
  },
  {
    "name": "deborah rush",
    "position": "manpower development specialist",
    "salary": 66925
  },
  {
    "name": "veronica brown",
    "position": "manpower development specialist",
    "salary": 66925
  },
  {
    "name": "darrie anders",
    "position": "manpower development specialist",
    "salary": 66925
  },
  {
    "name": "eleanor farar",
    "position": "manpower development specialist",
    "salary": 66925
  },
  {
    "name": "deborah turner",
    "position": "librarian",
    "salary": 66925
  },
  {
    "name": "jayanthi sambasivan",
    "position": "librarian",
    "salary": 66925
  },
  {
    "name": "john adams",
    "position": "vocational development special",
    "salary": 66925
  },
  {
    "name": "ian williams",
    "position": "information technology specialist",
    "salary": 110000
  },
  {
    "name": "robert person",
    "position": "staff assistant",
    "salary": 66925
  },
  {
    "name": "claudia treadwell",
    "position": "investigator",
    "salary": 66925
  },
  {
    "name": "delores junious",
    "position": "case manager",
    "salary": 66925
  },
  {
    "name": "robert galeone",
    "position": "training instructor",
    "salary": 66925
  },
  {
    "name": "lynne saffell",
    "position": "program monitor",
    "salary": 66925
  },
  {
    "name": "gerald thompson",
    "position": "public health advisor",
    "salary": 66925
  },
  {
    "name": "paul macarthy",
    "position": "public health analyst",
    "salary": 66925
  },
  {
    "name": "denise miller",
    "position": "unemployment tax examiner",
    "salary": 66925
  },
  {
    "name": "robin sharps",
    "position": "student accounts specialist",
    "salary": 66925
  },
  {
    "name": "fayette vaughn-lee",
    "position": "community outreach coor",
    "salary": 66925
  },
  {
    "name": "janardhan nimmalapudi",
    "position": "information technology specialist",
    "salary": 110000
  },
  {
    "name": "tracy martin",
    "position": "paralegal specialist",
    "salary": 66925
  },
  {
    "name": "john mcgraw",
    "position": "training instructor",
    "salary": 66925
  },
  {
    "name": "janice neal jackson",
    "position": "computer specialist",
    "salary": 66925
  },
  {
    "name": "janice fink",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "annas kamara",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "latasha mckinley",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "hubert king",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "shanda carr",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "monica lester",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "donna jordan",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "cynthia holloway",
    "position": "director, crisis and emergency",
    "salary": 110000
  },
  {
    "name": "lucinda cadet",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "carolyn austin",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "c lindor taka",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "felicia grant",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "larry pringle",
    "position": "recreation therapist",
    "salary": 66919
  },
  {
    "name": "jennifer etienne-valtrin",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "fatoumata nelson",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "eddie lindler",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "talaya myers",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "alesha wingfield",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "michelle farr",
    "position": "intake & investigations",
    "salary": 110000
  },
  {
    "name": "kerstin magnuson",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "darlene richardson",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "toni rodgers",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "lily phillip quashie",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "karen price",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "katrina spearman",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "oluyemisi odunjo",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "christine dogger",
    "position": "social worker",
    "salary": 66919
  },
  {
    "name": "joseph funnyre",
    "position": "paramedic firefighter",
    "salary": 66895
  },
  {
    "name": "todd bianchi",
    "position": "paramedic firefighter",
    "salary": 66895
  },
  {
    "name": "stephanie reich",
    "position": "chief of staff",
    "salary": 110000
  },
  {
    "name": "ricardo bell",
    "position": "paramedic firefighter",
    "salary": 66895
  },
  {
    "name": "sonya sueing",
    "position": "psychologist,school",
    "salary": 66864
  },
  {
    "name": "amanuel rosario",
    "position": "medical officer",
    "salary": 66856
  },
  {
    "name": "valerie harrison brown",
    "position": "social services rep",
    "salary": 66795
  },
  {
    "name": "collins snow",
    "position": "correctional officer",
    "salary": 66795
  },
  {
    "name": "florence jones",
    "position": "investment assistant",
    "salary": 66736
  },
  {
    "name": "john kelly",
    "position": "fire inspector",
    "salary": 66665
  },
  {
    "name": "tedra williams",
    "position": "counselor",
    "salary": 66640
  },
  {
    "name": "sherema copes",
    "position": "counselor",
    "salary": 66640
  },
  {
    "name": "robin ricks",
    "position": "counselor",
    "salary": 66640
  },
  {
    "name": "louis cannon",
    "position": "protective services officer",
    "salary": 110000
  },
  {
    "name": "shatane porter",
    "position": "counselor",
    "salary": 66640
  },
  {
    "name": "richelle king",
    "position": "counselor",
    "salary": 66640
  },
  {
    "name": "kelly hart",
    "position": "counselor",
    "salary": 66640
  },
  {
    "name": "francis jenkins",
    "position": "workers compensation recipient",
    "salary": 66444
  },
  {
    "name": "patricia faison",
    "position": "program coordinator",
    "salary": 66436
  },
  {
    "name": "joseph libertelli",
    "position": "director, alumni affairs",
    "salary": 66436
  },
  {
    "name": "jennifer lopez",
    "position": "director, development",
    "salary": 66436
  },
  {
    "name": "dena bauman",
    "position": "dir of career service",
    "salary": 66436
  },
  {
    "name": "tomicula williams",
    "position": "coordinator (et)",
    "salary": 66433
  },
  {
    "name": "tawana marshall",
    "position": "coord, special education",
    "salary": 66433
  },
  {
    "name": "jonquil prophet",
    "position": "information technology specialist",
    "salary": 110000
  },
  {
    "name": "ericka oliver-brooks",
    "position": "y/f team meeting facilitator",
    "salary": 66379
  },
  {
    "name": "james heath",
    "position": "compliance and licensing speci",
    "salary": 66379
  },
  {
    "name": "travis winn",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "wanda gattison",
    "position": "executive assistant",
    "salary": 66379
  },
  {
    "name": "monique smith",
    "position": "administrative assistant",
    "salary": 66379
  },
  {
    "name": "zachary albaugh",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "nkenge garrett",
    "position": "re-entry program coordinator",
    "salary": 66379
  },
  {
    "name": "chiquita martin",
    "position": "change in placement coordinato",
    "salary": 66379
  },
  {
    "name": "bennie peterson",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "taj young",
    "position": "human resources specialist",
    "salary": 66379
  },
  {
    "name": "patrick canavan",
    "position": "health system administrator",
    "salary": 157976
  },
  {
    "name": "lon walls",
    "position": "communications director",
    "salary": 110000
  },
  {
    "name": "jacqueline harris",
    "position": "investigator",
    "salary": 66379
  },
  {
    "name": "malika winzor",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "cathy bridges",
    "position": "mngmt and program analyst",
    "salary": 66379
  },
  {
    "name": "david spak",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "bettye ward",
    "position": "emergency prepare specialist",
    "salary": 66379
  },
  {
    "name": "robin brown",
    "position": "hr specialist (emp benefits)",
    "salary": 66379
  },
  {
    "name": "lavan anderson",
    "position": "writer editor",
    "salary": 66379
  },
  {
    "name": "shirley hall",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "shannon jones",
    "position": "staff assistant",
    "salary": 66379
  },
  {
    "name": "eric ampedu",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "curtis clay",
    "position": "gen engineer",
    "salary": 110000
  },
  {
    "name": "jennifer hefferan",
    "position": "highway safety specialist",
    "salary": 66379
  },
  {
    "name": "ryelle durant",
    "position": "claims management specialist",
    "salary": 66379
  },
  {
    "name": "melvyn smith",
    "position": "emergency management specialist",
    "salary": 66379
  },
  {
    "name": "joann davis",
    "position": "special assistant",
    "salary": 66379
  },
  {
    "name": "crystal dixon",
    "position": "executive assistant",
    "salary": 66379
  },
  {
    "name": "setrena ford",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "marcus mccall",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "janice ray",
    "position": "accountability analyst",
    "salary": 66379
  },
  {
    "name": "robert oku",
    "position": "project coor",
    "salary": 66379
  },
  {
    "name": "adrena brown",
    "position": "project coor",
    "salary": 66379
  },
  {
    "name": "catherine yadamec",
    "position": "quality improvement manager",
    "salary": 110000
  },
  {
    "name": "christine mcpayten",
    "position": "executive assistant",
    "salary": 66379
  },
  {
    "name": "francis elung",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "valencia walker",
    "position": "building management specialist",
    "salary": 66379
  },
  {
    "name": "latoria pearson",
    "position": "data management analyst",
    "salary": 66379
  },
  {
    "name": "virak sath",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "althea holford",
    "position": "realty specialist",
    "salary": 66379
  },
  {
    "name": "stephen varga",
    "position": "zoning specialist",
    "salary": 66379
  },
  {
    "name": "earica simmons",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "tanisha carr",
    "position": "criminal investigator",
    "salary": 66379
  },
  {
    "name": "carlyn madden",
    "position": "legislative & grants manager",
    "salary": 66379
  },
  {
    "name": "boyle stuckey",
    "position": "it project manager",
    "salary": 110000
  },
  {
    "name": "cecilia castillo",
    "position": "community service representative",
    "salary": 66379
  },
  {
    "name": "kanetha queen",
    "position": "administrative and organizatio",
    "salary": 66379
  },
  {
    "name": "kayce simmons",
    "position": "victim specialist",
    "salary": 66379
  },
  {
    "name": "major langford",
    "position": "program specialist",
    "salary": 66379
  },
  {
    "name": "kevin adams",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "laurencia henderson",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "sirwalter hemphill",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "lauren powell",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "debra babb",
    "position": "education program specialist",
    "salary": 66379
  },
  {
    "name": "idaines rodriguez",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "winslow woodland",
    "position": "service coordinator program ma",
    "salary": 110000
  },
  {
    "name": "leonard russell",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "carol scurlock",
    "position": "record management specialist",
    "salary": 66379
  },
  {
    "name": "megan riley",
    "position": "family liaison specialist",
    "salary": 66379
  },
  {
    "name": "terry wright lancaster",
    "position": "customer relations representat",
    "salary": 66379
  },
  {
    "name": "john kangethe",
    "position": "labor economist",
    "salary": 66379
  },
  {
    "name": "gail stern",
    "position": "staff assistant",
    "salary": 66379
  },
  {
    "name": "patricia ross",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "john howley",
    "position": "economist (arra)",
    "salary": 66379
  },
  {
    "name": "melvin clay",
    "position": "investigator",
    "salary": 66379
  },
  {
    "name": "faisal khan",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "patricia d'antonio",
    "position": "program manager",
    "salary": 110000
  },
  {
    "name": "timothy fitzpatrick",
    "position": "paralegal specialist",
    "salary": 66379
  },
  {
    "name": "renee faulkner",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "anthonisha felton",
    "position": "contract specialist",
    "salary": 66379
  },
  {
    "name": "james nolan",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "michael powell",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "maria smith",
    "position": "y/f team meeting facilitator",
    "salary": 66379
  },
  {
    "name": "christopher holben",
    "position": "bicycle program specialist",
    "salary": 66379
  },
  {
    "name": "dena johnson",
    "position": "correctional treatment spec (r",
    "salary": 66379
  },
  {
    "name": "bridgette royster",
    "position": "grants management specialist",
    "salary": 66379
  },
  {
    "name": "wayne gardiner",
    "position": "program specialist",
    "salary": 66379
  },
  {
    "name": "terrence williams",
    "position": "chief of staff",
    "salary": 110000
  },
  {
    "name": "gregory david",
    "position": "planning and operations specia",
    "salary": 66379
  },
  {
    "name": "harry lundy",
    "position": "training specialist",
    "salary": 66379
  },
  {
    "name": "willie barr",
    "position": "training specialist",
    "salary": 66379
  },
  {
    "name": "clarice vanbrakle",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "tonia lovelace",
    "position": "information technology specialist",
    "salary": 66379
  },
  {
    "name": "carolyn johnson",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "kim goodman-celay",
    "position": "management analyst",
    "salary": 66379
  },
  {
    "name": "march bell-daniels",
    "position": "special assistant",
    "salary": 66379
  },
  {
    "name": "renee plummer",
    "position": "executive assistant",
    "salary": 66379
  },
  {
    "name": "kelly melsted",
    "position": "program analyst",
    "salary": 66379
  },
  {
    "name": "kim mcrae",
    "position": "management liaison specialist",
    "salary": 110000
  },
  {
    "name": "tecora martin",
    "position": "equal opportunity specialist",
    "salary": 66379
  },
  {
    "name": "adrienne cooper",
    "position": "staff assistant",
    "salary": 66379
  },
  {
    "name": "sharon hargrove",
    "position": "correctional program specialist",
    "salary": 66379
  },
  {
    "name": "kent dixon",
    "position": "training specialist",
    "salary": 66379
  },
  {
    "name": "rose nowlin",
    "position": "workers compensation recipient",
    "salary": 66340
  },
  {
    "name": "michael poles",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "michael roop",
    "position": "sergeant aide",
    "salary": 66334
  },
  {
    "name": "jonathan johnson",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "michael white",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "richard polish",
    "position": "sergeant aide",
    "salary": 66334
  },
  {
    "name": "nyasha smith",
    "position": "secretary to the council",
    "salary": 110000
  },
  {
    "name": "damien green",
    "position": "sergeant aide",
    "salary": 66334
  },
  {
    "name": "djante rodgers",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "richard norment",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "courtney bass",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "christopher tucker",
    "position": "sergeant aide",
    "salary": 66334
  },
  {
    "name": "charles preslipsky",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "ryan bourassa",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "sean gilligan",
    "position": "sergeant",
    "salary": 66334
  },
  {
    "name": "caroline osekwe",
    "position": "nurse",
    "salary": 66309
  },
  {
    "name": "stella russ",
    "position": "master patrol officer",
    "salary": 66272
  },
  {
    "name": "jacqueline mcdonald",
    "position": "contract compliance monitor",
    "salary": 110000
  },
  {
    "name": "michael pepperman",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "jonathan shell",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "jean paskalis",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "carlton wicker",
    "position": "officer ert personnel",
    "salary": 66272
  },
  {
    "name": "todd williams",
    "position": "master patrol officer",
    "salary": 66272
  },
  {
    "name": "michael o harran",
    "position": "master patrol officer",
    "salary": 66272
  },
  {
    "name": "kevin whaley",
    "position": "master patrol officer",
    "salary": 66272
  },
  {
    "name": "gabriel truby",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "melvin sanders",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "ricardo leiva",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "willie dandridge",
    "position": "commander",
    "salary": 157556
  },
  {
    "name": "tamara reavis",
    "position": "dir, accountability & assessme",
    "salary": 110000
  },
  {
    "name": "eric roche",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "osbaldo luna",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "ronald laboy",
    "position": "master patrol officer",
    "salary": 66272
  },
  {
    "name": "jose morales",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "bridget parrish",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "christopher smith",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "lashay makal",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "sean moore",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "janine leftwich",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "joseph della camera",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "peter dewar",
    "position": "technical specialist",
    "salary": 110000
  },
  {
    "name": "chad howard",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "ronald burgeson",
    "position": "master patrol officer",
    "salary": 66272
  },
  {
    "name": "mark dega",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "jorge alma",
    "position": "electronics technician",
    "salary": 66272
  },
  {
    "name": "jaron hickman",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "jeffery clay",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "steven greene",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "tirik davis",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "amber chesla",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "andrew richardson",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "james williams",
    "position": "assistant dir bus oppts & access ca",
    "salary": 110000
  },
  {
    "name": "jeffrey henderson",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "richard feser",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "charlotte djossou-briggs",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "jeffrey dixon",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "scott dowling",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "brian bradol",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "sylvester garvin",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "jose acosta",
    "position": "officer ert personnel",
    "salary": 66272
  },
  {
    "name": "joseph belfiore",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "kristal boyd",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "ian roberts",
    "position": "principal",
    "salary": 109974
  },
  {
    "name": "john cobb",
    "position": "detective",
    "salary": 66272
  },
  {
    "name": "tasha bryant",
    "position": "crime scene srch ofr",
    "salary": 66272
  },
  {
    "name": "sandi baer",
    "position": "dean of students (et)",
    "salary": 66247
  },
  {
    "name": "marc strothers",
    "position": "assistant vp stud affairs",
    "salary": 66230
  },
  {
    "name": "denise slaughter",
    "position": "special assistant",
    "salary": 66230
  },
  {
    "name": "shirley cole",
    "position": "staffing assistant",
    "salary": 66118
  },
  {
    "name": "franklin chrisman",
    "position": "investigator",
    "salary": 66118
  },
  {
    "name": "michael quander",
    "position": "coordinato",
    "salary": 66118
  },
  {
    "name": "danielle reich",
    "position": "human resource specialist",
    "salary": 66118
  },
  {
    "name": "kenneth james",
    "position": "management & program analyst",
    "salary": 66118
  },
  {
    "name": "andrea bagwell",
    "position": "deputy general counsel",
    "salary": 109947
  },
  {
    "name": "wullaimatu bundu songowa",
    "position": "psychiatric nurse",
    "salary": 66105
  },
  {
    "name": "jimmy bello",
    "position": "psychiatric nurse",
    "salary": 66105
  },
  {
    "name": "angela ajudua",
    "position": "psychiatric nurse",
    "salary": 66105
  },
  {
    "name": "motunrayo owolabi",
    "position": "psychiatric nurse",
    "salary": 66105
  },
  {
    "name": "sandra bandier",
    "position": "extension agent ii",
    "salary": 66079
  },
  {
    "name": "mavis johnson",
    "position": "staff assistant",
    "salary": 66079
  },
  {
    "name": "gail mathapo",
    "position": "cir lib",
    "salary": 66079
  },
  {
    "name": "cecelia bradley",
    "position": "information technology specialist",
    "salary": 66079
  },
  {
    "name": "delia richards",
    "position": "assoc professor",
    "salary": 66064
  },
  {
    "name": "errol salmon",
    "position": "assoc professor",
    "salary": 66064
  },
  {
    "name": "david sledge",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "guy shroyer",
    "position": "assoc professor",
    "salary": 66064
  },
  {
    "name": "richard wortham",
    "position": "pre-retirement benefit counsel",
    "salary": 66058
  },
  {
    "name": "terri lewis",
    "position": "legal instruments examiner",
    "salary": 66043
  },
  {
    "name": "julia nestore",
    "position": "lottery draw specialist",
    "salary": 66043
  },
  {
    "name": "james simms",
    "position": "budget analyst",
    "salary": 66043
  },
  {
    "name": "walter marshall",
    "position": "workers compensation recipient",
    "salary": 66040
  },
  {
    "name": "tracey ward",
    "position": "executive assistant",
    "salary": 66000
  },
  {
    "name": "ericka robinson",
    "position": "legislative support assistant",
    "salary": 66000
  },
  {
    "name": "tracie johnson",
    "position": "workers compensation recipient",
    "salary": 65963
  },
  {
    "name": "diane harrison",
    "position": "correctional officer",
    "salary": 65959
  },
  {
    "name": "james thackaberry",
    "position": "housing & dev",
    "salary": 109919
  },
  {
    "name": "keith pirog",
    "position": "correctional officer",
    "salary": 65959
  },
  {
    "name": "ronald pope",
    "position": "correctional officer",
    "salary": 65959
  },
  {
    "name": "michael epps",
    "position": "supervisor prop control specialist",
    "salary": 65891
  },
  {
    "name": "marla mcguire",
    "position": "librarian",
    "salary": 65840
  },
  {
    "name": "malkia harvey",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "alysia lutz",
    "position": "instructional coach",
    "salary": 65840
  },
  {
    "name": "katrina mobley",
    "position": "literacy coach",
    "salary": 65840
  },
  {
    "name": "kasha hayes",
    "position": "instructional coach",
    "salary": 65840
  },
  {
    "name": "donna richards",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "elizabeth melchor",
    "position": "librarian",
    "salary": 65840
  },
  {
    "name": "michael gottert",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "mandi jacobson",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "robert garza",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "eric ginsburg",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "jewell lawson",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "carolyn lindsay",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "danielle littauer",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "myra koerner",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "ashley pizzo",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "cheryl nicely",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "stephanie aduso",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "edward delgado",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "kimberly hill",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "john osteen",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "catherine eiche",
    "position": "librarian",
    "salary": 65840
  },
  {
    "name": "laura landstrom",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "tiffany johnson",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "joyce hoagland",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "rachel hofmann",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "kareeda long",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "bryan riley",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "maya garcia",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "daniel aurigemma",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "simone harrison",
    "position": "speech pathologist",
    "salary": 65840
  },
  {
    "name": "veronica mckillop",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "victoria otten",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "eileen hassett",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "paula kephart",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "erika pereira",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "derik jones",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "marcus holthoff",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "felicia hurge",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "indira lizardi",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "christopher lojacono",
    "position": "commander",
    "salary": 157556
  },
  {
    "name": "byron hope",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "rachel rosenberg",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "elizabeth dittamo",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "tennille bowser",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "camille france",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "sara duckett",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "michelle dinkes",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "jeffery epting",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "celina cruz",
    "position": "intervention coach",
    "salary": 65840
  },
  {
    "name": "amina copeland",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "michael taylor",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "michael farish",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "julia zahn",
    "position": "social worker",
    "salary": 65840
  },
  {
    "name": "sindia tellado",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "jeanice stewart",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "tineal summers",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "allison watkins",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "aneesah saleem",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "camille anderson",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "anitris patterson",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "nicole weir",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "sean bellamy",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "lewis douglas",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "sandra gain",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "carmelo alba",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "kiehl christie",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "shawndra allen",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "steven allen",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "latasha webb",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "nicole anderson",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "terrence chavis",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "doris dabney",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "sherita baker",
    "position": "social worker",
    "salary": 65840
  },
  {
    "name": "lamont coleman",
    "position": "captain",
    "salary": 109919
  },
  {
    "name": "vanessa drumm",
    "position": "instructional coach",
    "salary": 65840
  },
  {
    "name": "tameika ashford",
    "position": "instructional coach",
    "salary": 65840
  },
  {
    "name": "wadiyah cameron",
    "position": "librarian",
    "salary": 65840
  },
  {
    "name": "seth brecher",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "derico davis",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "mary wooden-green",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "candice crump",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "carlos colon",
    "position": "teacher",
    "salary": 65840
  },
  {
    "name": "thomas bullock",
    "position": "assistant professor",
    "salary": 65838
  },
  {
    "name": "margaret moore",
    "position": "assistant professor",
    "salary": 65838
  },
  {
    "name": "william chiselom",
    "position": "principal",
    "salary": 109856
  },
  {
    "name": "cristi ford",
    "position": "assistant professor",
    "salary": 65838
  },
  {
    "name": "paula little",
    "position": "human resources spec (empl & l",
    "salary": 65789
  },
  {
    "name": "maryalls bedford",
    "position": "assoc professor",
    "salary": 65762
  },
  {
    "name": "valbona bejleri",
    "position": "assoc professor",
    "salary": 65722
  },
  {
    "name": "susan williams",
    "position": "practical nurse",
    "salary": 65680
  },
  {
    "name": "ronald boone",
    "position": "social services rep",
    "salary": 65671
  },
  {
    "name": "raymond stewart",
    "position": "workers compensation recipient",
    "salary": 65578
  },
  {
    "name": "michael cohee",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "wesley wheeler",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "clifton hall",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "anita berger",
    "position": "principal",
    "salary": 109856
  },
  {
    "name": "raymond eggleston",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "reginal davis",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "abdul qazei",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "dennis kues",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "michael sims",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "timothy bolding",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "timothy clark",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "neal sutton",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "derrick lee",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "anthony blake",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "rahman branch",
    "position": "orientation specialist",
    "salary": 109856
  },
  {
    "name": "robert marshall",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "norman garner",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "angelia boddie",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "gregory contee",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "marlyn wallace",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "joseph libcke",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "george frye",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "alfred williams",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "theodore rhone",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "louis edwards",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "ivor mitchell",
    "position": "principal",
    "salary": 109856
  },
  {
    "name": "steve mcknight",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "laveine harley",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "darin adams",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "lester crockett",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "charlie williams",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "joseph myles",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "david stewart",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "james counce",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "eric hammond",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "tonya johnson",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "sharlene williams",
    "position": "attorney advisor",
    "salary": 109767
  },
  {
    "name": "andre turner",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "roy foster",
    "position": "firefighter emt",
    "salary": 65568
  },
  {
    "name": "pernelle lance",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "anthony peters",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "clark embrey",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "isaac white",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "donald busl",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "landon sewell",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "william tippen",
    "position": "firefighter",
    "salary": 65568
  },
  {
    "name": "karen morgan",
    "position": "teacher",
    "salary": 65550
  },
  {
    "name": "james lawrence",
    "position": "financial examiner officer",
    "salary": 109748
  },
  {
    "name": "mark sibert",
    "position": "legal instruments examiner",
    "salary": 65528
  },
  {
    "name": "ronald edwards",
    "position": "management program analyst",
    "salary": 65464
  },
  {
    "name": "earl blake",
    "position": "information technology specialist",
    "salary": 65464
  },
  {
    "name": "ericka hatcher",
    "position": "teacher",
    "salary": 65431
  },
  {
    "name": "stephen otunba",
    "position": "administrative officer",
    "salary": 65427
  },
  {
    "name": "connie jones",
    "position": "administrative officer",
    "salary": 65427
  },
  {
    "name": "moses ware",
    "position": "administrative officer",
    "salary": 65427
  },
  {
    "name": "ann beumel",
    "position": "administrative officer",
    "salary": 65427
  },
  {
    "name": "joseph swinson",
    "position": "workers compensation recipient",
    "salary": 65416
  },
  {
    "name": "gloria grant",
    "position": "dispatcher",
    "salary": 65399
  },
  {
    "name": "joel maupin",
    "position": "commander",
    "salary": 157556
  },
  {
    "name": "nelson abel",
    "position": "contract price cost analyst",
    "salary": 109748
  },
  {
    "name": "lavear crews",
    "position": "dispatcher",
    "salary": 65399
  },
  {
    "name": "charlotte davis",
    "position": "dispatcher",
    "salary": 65399
  },
  {
    "name": "chawndra morgan",
    "position": "correctional treatment specialist",
    "salary": 65399
  },
  {
    "name": "capucine carrington",
    "position": "correctional treatment specialist",
    "salary": 65399
  },
  {
    "name": "bridget reavis tyler",
    "position": "correctional treatment specialist",
    "salary": 65399
  },
  {
    "name": "winifred hawkins",
    "position": "correctional treatment specialist",
    "salary": 65399
  },
  {
    "name": "jimmy grayes",
    "position": "correctional treatment specialist",
    "salary": 65399
  },
  {
    "name": "cuthbert denton",
    "position": "correctional treatment specialist",
    "salary": 65399
  },
  {
    "name": "christopher somers",
    "position": "fire investigator",
    "salary": 65344
  },
  {
    "name": "thyra griffin",
    "position": "workers compensation recipient",
    "salary": 65332
  },
  {
    "name": "thaddeus hodge",
    "position": "executive assistant",
    "salary": 109748
  },
  {
    "name": "derrick garner",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "audrey graham",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "gloria profit",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "julian battle",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "harry rush",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "rufus wellington",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "hazel lee",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "sherry savoy",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "eugenia haines",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "malcolm spain",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "pious thattassery",
    "position": "auditor (tax)",
    "salary": 109748
  },
  {
    "name": "sterling jones",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "antonio aviles",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "pamela harris",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "shaun holzinger",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "benard hall",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "linda duncan",
    "position": "youth development representati",
    "salary": 65316
  },
  {
    "name": "mary dixon",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "james johnson",
    "position": "correctional officer",
    "salary": 65316
  },
  {
    "name": "gonthel tolliver",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "rhonda nelson",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "lawrence chung",
    "position": "civil engineer",
    "salary": 109748
  },
  {
    "name": "emma campbell",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "michael meachum",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "jasper sterling",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "ferrol ware",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "eunice jones",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "steven chasin",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "lanae kelly",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "susan lucas",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "sarah carroll smith",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "alan trimble",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "jatin shah",
    "position": "information technology specialist",
    "salary": 109748
  },
  {
    "name": "dennis simpson",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "kenneth lyons",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "chanel jones hutchison",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "kevin connor",
    "position": "paramedic",
    "salary": 65316
  },
  {
    "name": "jeffery fleming",
    "position": "assistant professor",
    "salary": 65285
  },
  {
    "name": "willis jefferson",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "fani bettmann",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "kareen lazarre",
    "position": "instructional coach",
    "salary": 65274
  },
  {
    "name": "almudena menchen-mojas",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "hans neseth",
    "position": "psychologist,school",
    "salary": 65274
  },
  {
    "name": "christian nwachukwu",
    "position": "contract admin",
    "salary": 109748
  },
  {
    "name": "m.kamel igoudjil",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "linda mahler",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "jacklyn mazzone",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "lauren johnson",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "qi guo",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "maya washington",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "susan bloom",
    "position": "librarian",
    "salary": 65274
  },
  {
    "name": "mary hamilton",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "sterling scroggins",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "christine winchester",
    "position": "social worker",
    "salary": 65274
  },
  {
    "name": "george crawford",
    "position": "information technology specialist",
    "salary": 109748
  },
  {
    "name": "anita ruiz",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "richard smith",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "ru-ying chang",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "john dixon",
    "position": "teacher",
    "salary": 65274
  },
  {
    "name": "maria powell",
    "position": "workers compensation recipient",
    "salary": 65247
  },
  {
    "name": "ernest spriggs",
    "position": "workers compensation recipient",
    "salary": 65197
  },
  {
    "name": "katrina abdussalaam",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "maryam abdul-tawwab",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "duriel cobb",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "cystal brooks",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "roxana olivas",
    "position": "director of latino affairs",
    "salary": 109725
  },
  {
    "name": "stephanie davidson",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "katherine dudkiewicz",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "sabina malkani",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "russell holmes",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "grover massenburg",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "sharon oliveros",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "robert declue",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "carlos baez",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "antoine payne",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "tydren sullivan",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "robert morin",
    "position": "deputy director",
    "salary": 109712
  },
  {
    "name": "troy thomas",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "julian dotson",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "mark flannery",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "kathryn roth",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "robert sharpe",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "claire sontag",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "timothy tucker",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "katina bryant",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "tara watts",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "tallis ford",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "arturo losada",
    "position": "information technology specialist",
    "salary": 109655
  },
  {
    "name": "natalia fidalgo",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "deanna dykes",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "randy ware",
    "position": "teacher",
    "salary": 65173
  },
  {
    "name": "cornelia smith",
    "position": "instructional coach",
    "salary": 65173
  },
  {
    "name": "eddie hill",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "kelly ko",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "vernescher brown",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "rosalyn butler",
    "position": "revenue officer",
    "salary": 65169
  },
  {
    "name": "kimberly holloway",
    "position": "tax examining technician",
    "salary": 65169
  },
  {
    "name": "juan abraham",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "kevin byrne",
    "position": "deputy fire chief",
    "salary": 156409
  },
  {
    "name": "surya avantsa",
    "position": "information technology specialist",
    "salary": 109648
  },
  {
    "name": "randolph blanchard",
    "position": "legal instruments examiner",
    "salary": 65169
  },
  {
    "name": "michael strong",
    "position": "resource specialist",
    "salary": 65169
  },
  {
    "name": "antonio white",
    "position": "case manager",
    "salary": 65169
  },
  {
    "name": "annie hammond",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "richard tun",
    "position": "environmental specialist",
    "salary": 65169
  },
  {
    "name": "clifford lowery",
    "position": "engineering technician",
    "salary": 65169
  },
  {
    "name": "mandy hugh",
    "position": "engineering technician",
    "salary": 65169
  },
  {
    "name": "avise pollard",
    "position": "mental health specialist",
    "salary": 65169
  },
  {
    "name": "darlene may",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "obrient hill",
    "position": "engineering technician",
    "salary": 65169
  },
  {
    "name": "richard dietz",
    "position": "asset specialist",
    "salary": 109648
  },
  {
    "name": "rachel george",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "angela nickens watson",
    "position": "construction representative",
    "salary": 65169
  },
  {
    "name": "marcial candido",
    "position": "aftercare worker (bilingual)",
    "salary": 65169
  },
  {
    "name": "anita kurgan",
    "position": "environment crimes invest",
    "salary": 65169
  },
  {
    "name": "francina lee",
    "position": "fisheries biologist",
    "salary": 65169
  },
  {
    "name": "tajudeen olaniyan",
    "position": "environmental engineer",
    "salary": 65169
  },
  {
    "name": "willie hicks",
    "position": "insurance licensing specialist",
    "salary": 65169
  },
  {
    "name": "kenneth smith",
    "position": "vocational development special",
    "salary": 65169
  },
  {
    "name": "sonya chance",
    "position": "lead solid waste inspector",
    "salary": 65169
  },
  {
    "name": "melissa eversley",
    "position": "special needs liaison",
    "salary": 65169
  },
  {
    "name": "david prestidge",
    "position": "project manager",
    "salary": 109648
  },
  {
    "name": "austin uwaeme",
    "position": "addiction treatment specialist",
    "salary": 65169
  },
  {
    "name": "taiwan lovelace",
    "position": "mental health specialist",
    "salary": 65169
  },
  {
    "name": "darin street",
    "position": "mental health specialist",
    "salary": 65169
  },
  {
    "name": "vincent fong",
    "position": "electronics technician",
    "salary": 65169
  },
  {
    "name": "jennifer gregory",
    "position": "inventory & space mgmt",
    "salary": 65169
  },
  {
    "name": "denise burton johnson",
    "position": "purchasing agent",
    "salary": 65169
  },
  {
    "name": "karen adebiyi",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "james williams",
    "position": "electronics technician",
    "salary": 65169
  },
  {
    "name": "brett debnam",
    "position": "accountant",
    "salary": 65169
  },
  {
    "name": "sara gebreyesus",
    "position": "mental health specialist",
    "salary": 65169
  },
  {
    "name": "darren jameson",
    "position": "information technology specialist",
    "salary": 109648
  },
  {
    "name": "greta faison",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "jacqueline hall",
    "position": "paralegal specialist",
    "salary": 65169
  },
  {
    "name": "michael curry",
    "position": "paralegal specialist",
    "salary": 65169
  },
  {
    "name": "tracie blacksheare",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "katrina graham",
    "position": "financial program specialist",
    "salary": 65169
  },
  {
    "name": "jacqueline doughty",
    "position": "paralegal specialist",
    "salary": 65169
  },
  {
    "name": "dionne duren-jones",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "alice ellis",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "adrienne williams",
    "position": "equipment specialist",
    "salary": 65169
  },
  {
    "name": "daniel akunwafor",
    "position": "librarian",
    "salary": 65169
  },
  {
    "name": "rina raval",
    "position": "information technology specialist",
    "salary": 109648
  },
  {
    "name": "gerald hardy",
    "position": "manpower development specialist",
    "salary": 65169
  },
  {
    "name": "antoinette green",
    "position": "workers comp claims examiner",
    "salary": 65169
  },
  {
    "name": "angela williams",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "geoffrey fleming",
    "position": "manpower development specialist",
    "salary": 65169
  },
  {
    "name": "michael etumnu",
    "position": "insurance examiner",
    "salary": 65169
  },
  {
    "name": "angelisa young",
    "position": "community outreach specialist",
    "salary": 65169
  },
  {
    "name": "doris greer",
    "position": "librarian",
    "salary": 65169
  },
  {
    "name": "william turner",
    "position": "librarian",
    "salary": 65169
  },
  {
    "name": "alice hopwood",
    "position": "librarian",
    "salary": 65169
  },
  {
    "name": "kim tate",
    "position": "paralegal specialist",
    "salary": 65169
  },
  {
    "name": "george walker",
    "position": "telecommications specialist",
    "salary": 109648
  },
  {
    "name": "janice rosen",
    "position": "librarian",
    "salary": 65169
  },
  {
    "name": "john freeman",
    "position": "insurance examiner",
    "salary": 65169
  },
  {
    "name": "katheryn booth",
    "position": "neighbor stab specialist",
    "salary": 65169
  },
  {
    "name": "stephanie perry",
    "position": "support enforcement specialist",
    "salary": 65169
  },
  {
    "name": "diana dorsey",
    "position": "program specialist",
    "salary": 65169
  },
  {
    "name": "regina clary",
    "position": "paralegal specialist",
    "salary": 65169
  },
  {
    "name": "robert durham",
    "position": "fleet program manager",
    "salary": 65169
  },
  {
    "name": "catherine williams",
    "position": "workers comp claims examiner",
    "salary": 65169
  },
  {
    "name": "debra wheeler",
    "position": "manpower development specialist",
    "salary": 65169
  },
  {
    "name": "rasathurai thinakaran",
    "position": "environmental engineer",
    "salary": 65169
  },
  {
    "name": "juan easley",
    "position": "it project manager",
    "salary": 109648
  },
  {
    "name": "jeffrey zahn",
    "position": "environmental specialist",
    "salary": 65169
  },
  {
    "name": "jerry mccoy",
    "position": "librarian traine peabody room",
    "salary": 65169
  },
  {
    "name": "darren foster",
    "position": "case manager (fiss program)",
    "salary": 65169
  },
  {
    "name": "luevette williams",
    "position": "engineering technician",
    "salary": 65169
  },
  {
    "name": "samantha parker",
    "position": "service coordinator",
    "salary": 65169
  },
  {
    "name": "aurelia cannon bey",
    "position": "support services specialist",
    "salary": 65169
  },
  {
    "name": "diane williams",
    "position": "vocational development special",
    "salary": 65169
  },
  {
    "name": "teloria mcneal",
    "position": "service coordinator",
    "salary": 65169
  },
  {
    "name": "vijoy pattammady",
    "position": "unemployment tax examiner",
    "salary": 65169
  },
  {
    "name": "edmund neboh",
    "position": "provider resource specialist",
    "salary": 65169
  },
  {
    "name": "patrice dymszo",
    "position": "asset specialist",
    "salary": 109648
  },
  {
    "name": "andrea cheney",
    "position": "librarian",
    "salary": 65169
  },
  {
    "name": "antoinette stokes",
    "position": "hlth licensing specialist",
    "salary": 65169
  },
  {
    "name": "kishia watkins",
    "position": "program specialist",
    "salary": 65169
  },
  {
    "name": "gloria birzack",
    "position": "vocational development special",
    "salary": 65169
  },
  {
    "name": "jeffrey coleman",
    "position": "program assistant",
    "salary": 65169
  },
  {
    "name": "eugenia jones",
    "position": "program monitor",
    "salary": 65169
  },
  {
    "name": "samuel ogunnubi",
    "position": "compliance monitor",
    "salary": 65169
  },
  {
    "name": "afewerki birhane",
    "position": "energy program specialist",
    "salary": 65169
  },
  {
    "name": "sabaina lofinmakin",
    "position": "investigator",
    "salary": 65169
  },
  {
    "name": "karen baldwin",
    "position": "compliance monitor",
    "salary": 65169
  },
  {
    "name": "john pallasch",
    "position": "special assistant",
    "salary": 109648
  },
  {
    "name": "angela simmons",
    "position": "staff assistant",
    "salary": 65169
  },
  {
    "name": "zina anderson",
    "position": "telecommunications equip opera",
    "salary": 65169
  },
  {
    "name": "chele robinson",
    "position": "program specialist",
    "salary": 65169
  },
  {
    "name": "pamela hatcher",
    "position": "staff assistant",
    "salary": 65169
  },
  {
    "name": "janet robinson",
    "position": "program coor",
    "salary": 65169
  },
  {
    "name": "pamela jones",
    "position": "staff assistant",
    "salary": 65169
  },
  {
    "name": "sharon barbour",
    "position": "administrative support special",
    "salary": 65166
  },
  {
    "name": "nicole denny",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "margie alfred",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "deborah perry",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "mark messer",
    "position": "telecommications specialist",
    "salary": 109648
  },
  {
    "name": "patience ebini",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "davene drummond",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "janice jackson",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "wanda marshall",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "gordon sabblah",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "tashelle leblanc",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "kirk burke hamilton",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "angela marshall",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "sharon jones",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "francis odia",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "christopher jordan",
    "position": "deputy fire chief",
    "salary": 156409
  },
  {
    "name": "theresa cusick",
    "position": "hearing officer",
    "salary": 109648
  },
  {
    "name": "joy mayo",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "kendra white",
    "position": "recreation therapist",
    "salary": 65165
  },
  {
    "name": "robert sutton",
    "position": "recreation therapist",
    "salary": 65165
  },
  {
    "name": "cherie bailey",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "melissa willis",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "danielle switzer",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "tasa harris",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "kimberly wilson",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "zakiyyah francisco",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "doree powell",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "evette jackson",
    "position": "special assistant",
    "salary": 109648
  },
  {
    "name": "mercy tanjong",
    "position": "social worker",
    "salary": 65165
  },
  {
    "name": "ana carrasco",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "jane montalbano",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "jennifer dillard",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "paula neseth",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "catrice diamont",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "hermione nickens",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "kelley givens",
    "position": "teacher",
    "salary": 65157
  },
  {
    "name": "nina crawford",
    "position": "mental health specialist",
    "salary": 65126
  },
  {
    "name": "lisa smiley",
    "position": "utilization specialist",
    "salary": 65126
  },
  {
    "name": "carole lee",
    "position": "management analyst",
    "salary": 109648
  },
  {
    "name": "zachery smith",
    "position": "youth family team mtg coord",
    "salary": 65126
  },
  {
    "name": "marian howell",
    "position": "management analyst",
    "salary": 65126
  },
  {
    "name": "babatunde kolawole",
    "position": "compliance specialist",
    "salary": 65126
  },
  {
    "name": "sandra hunter",
    "position": "staff assistant",
    "salary": 65126
  },
  {
    "name": "aniccia miller",
    "position": "personnel staffing specialist",
    "salary": 65126
  },
  {
    "name": "tamela tolton",
    "position": "staff assistant",
    "salary": 65126
  },
  {
    "name": "joana macena",
    "position": "health and wellness specialist",
    "salary": 65126
  },
  {
    "name": "horace lassiter",
    "position": "paralegal specialist",
    "salary": 65126
  },
  {
    "name": "rosalyn williams",
    "position": "adult forensic specialist",
    "salary": 65125
  },
  {
    "name": "james chambers",
    "position": "program coordinator",
    "salary": 65032
  },
  {
    "name": "shawkat khan",
    "position": "information technology specialist",
    "salary": 109648
  },
  {
    "name": "charlene walton",
    "position": "budget analyst",
    "salary": 65002
  },
  {
    "name": "mildred almonte",
    "position": "accounts payable specialis",
    "salary": 65002
  },
  {
    "name": "anthony stover",
    "position": "contract specialist",
    "salary": 65002
  },
  {
    "name": "hugo figueredo",
    "position": "accountant",
    "salary": 65002
  },
  {
    "name": "carol wilson",
    "position": "budget analyst",
    "salary": 65002
  },
  {
    "name": "abigail jones",
    "position": "accountant",
    "salary": 65002
  },
  {
    "name": "kin ng",
    "position": "accountant",
    "salary": 65002
  },
  {
    "name": "mahalet haile",
    "position": "accounts payable supervisor",
    "salary": 65002
  },
  {
    "name": "genet amare",
    "position": "legal specialist",
    "salary": 65002
  },
  {
    "name": "jacques harley",
    "position": "budget analyst",
    "salary": 65002
  },
  {
    "name": "alfred desabato",
    "position": "program officer",
    "salary": 109648
  },
  {
    "name": "eboni temple",
    "position": "budget analyst",
    "salary": 65002
  },
  {
    "name": "shirelle howze",
    "position": "sales coordinator",
    "salary": 65002
  },
  {
    "name": "chondra brown",
    "position": "accounts payable supervisor",
    "salary": 65002
  },
  {
    "name": "nuredin abdella",
    "position": "market research analyst",
    "salary": 65002
  },
  {
    "name": "enyew godie",
    "position": "budget analyst",
    "salary": 65002
  },
  {
    "name": "melody tally",
    "position": "budget analyst",
    "salary": 65002
  },
  {
    "name": "tiesha henson",
    "position": "office manager",
    "salary": 65002
  },
  {
    "name": "johnpaul hayworth",
    "position": "policy analyst",
    "salary": 65000
  },
  {
    "name": "daniel conner",
    "position": "deputy committee director",
    "salary": 65000
  },
  {
    "name": "alimayu oding",
    "position": "visual information specialist",
    "salary": 65000
  },
  {
    "name": "kim whatley",
    "position": "executive director",
    "salary": 109648
  },
  {
    "name": "latisha atkins",
    "position": "community service representative",
    "salary": 65000
  },
  {
    "name": "brittney madison",
    "position": "legislative counsel",
    "salary": 65000
  },
  {
    "name": "justin palmer",
    "position": "research analyst",
    "salary": 65000
  },
  {
    "name": "michele molotsky",
    "position": "office manager",
    "salary": 65000
  },
  {
    "name": "sasan haghani",
    "position": "assistant professor",
    "salary": 65000
  },
  {
    "name": "catherine corp",
    "position": "visiting associate professor",
    "salary": 65000
  },
  {
    "name": "cherlena lee",
    "position": "program analyst",
    "salary": 65000
  },
  {
    "name": "christine kidwell",
    "position": "policy analyst",
    "salary": 65000
  },
  {
    "name": "william wagner",
    "position": "psychologist",
    "salary": 64995
  },
  {
    "name": "deirdre williams",
    "position": "compliance specialist",
    "salary": 64995
  },
  {
    "name": "sandra gresham",
    "position": "program analyst",
    "salary": 109648
  },
  {
    "name": "sharon mccall",
    "position": "instructor, jrotc",
    "salary": 64907
  },
  {
    "name": "donald murphy",
    "position": "electrician foreman",
    "salary": 64894
  },
  {
    "name": "gregory stallard",
    "position": "plumber/pipefitter foreman",
    "salary": 64894
  },
  {
    "name": "james mcintyre",
    "position": "trial attorney",
    "salary": 64860
  },
  {
    "name": "kristofer todd",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "malcolm rhinehart",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeffrey stewart",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "darla sandula",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "edward stewart",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "walter pankowski",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "damon harvey",
    "position": "trans res and tec dev proj manager",
    "salary": 109648
  },
  {
    "name": "rynell rutledge",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david smith",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "william turner",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeffrey sipes",
    "position": "master patrol officer",
    "salary": 64772
  },
  {
    "name": "stefeni thomas",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "topaz proctor",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "marcia slaughter",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "andre smallwood",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeffrey ramirez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "dorrie smith cleere",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "valerie robinson",
    "position": "project coordinator",
    "salary": 109648
  },
  {
    "name": "jelani prather",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ivory smith",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "richard parrish",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "mario todd",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "andre reid",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christopher ritchie",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "donald schramm",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "andre sturgis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "nefetia turner",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rafael sarita",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "beatrix fields",
    "position": "legislative affairs specialist",
    "salary": 109553
  },
  {
    "name": "sheila thomas-bullock",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kenneth thompkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sultan shakir",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "richmond phillips",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "millard pitts",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "albert sabir",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "steven salsburg",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "courtney peyton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "heather straker",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "stephen owens",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jerome stack",
    "position": "deputy fire chief",
    "salary": 156409
  },
  {
    "name": "judith greenberg",
    "position": "special assistant",
    "salary": 109553
  },
  {
    "name": "angel vazquez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "robert valentine",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kyle uskievich",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "andre parker",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeremy sharpton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeffrey wade",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kristen thorne",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jason romlein",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "philip suggs",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sanave rolin",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kenneth taylor",
    "position": "compliance specialist",
    "salary": 109549
  },
  {
    "name": "nicole rizzi",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "konrad olszak",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "anton patterson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kimberly suarez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "pedro rivera",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "samuel swarn",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jose rodriguez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alexander vogel",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "larry roberts",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jimmy perrin",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "bonnie rampersaud",
    "position": "executive director",
    "salary": 109549
  },
  {
    "name": "jonathan roff",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "leonard roccato",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "hakim tate",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jason ross",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michelle sturgis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "brock vigil",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "roberto torres",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "louis schneider",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "keith pierce",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "peter trifu",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "carole lewis",
    "position": "highway safety program officer",
    "salary": 109549
  },
  {
    "name": "raoul short",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "steve pappas",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ethel taylor",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david wildey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "reginald tolbert",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ludovick rock",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ronald singleton",
    "position": "master patrol officer",
    "salary": 64772
  },
  {
    "name": "anthony smith",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "mikisha simms",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "derrick potts",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "amar singh",
    "position": "gen engineer",
    "salary": 109549
  },
  {
    "name": "mark pugh",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ty truong",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "mohammed sillah",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeffrey scharf",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "diosvani rodriguez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "richard peake",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christopher simmons",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kathleen wiedefeld",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeffrey leslie",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jameson lehn",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "joshua jack",
    "position": "emergency management change officer",
    "salary": 109549
  },
  {
    "name": "herbert leboo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "vinson washington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "james langenbach",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "matthew watkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "vernon nash",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "scott pinto",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "latonya whittington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "joseph lafrance",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "olivia wilcox",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "curtis miller",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "james sprowls",
    "position": "revenue maximization program m",
    "salary": 109549
  },
  {
    "name": "michael millsaps",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "candice wilkes",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lacey wilkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "robert milner",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michael milochik",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "andrew zabavsky",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "reginald maxwell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rafael lopez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sean hodges",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "james krawczyk",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "marta palacios",
    "position": "principal",
    "salary": 109477
  },
  {
    "name": "thomas krmenec",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "makhetha watson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "eric walsh",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "travia kyle",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "john loveday",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david lack",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "chad leo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "elizabeth laduca",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lenny lewis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "keri long",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "valoria baylor dr",
    "position": "principal",
    "salary": 109477
  },
  {
    "name": "monet lilly",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "valiant washington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michael littlejohn",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "randy washington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "melvin washington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "marvin watkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jeramiah mendez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kimberly kniffen",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ilahkcherri white",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "nancy mercedes",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "shirley hopkinson",
    "position": "principal",
    "salary": 109477
  },
  {
    "name": "neil mcallister",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "paul metcalf",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "aisha mccrary",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lloyd lumpkin",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "minh nguyen",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "danny mccullough",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "carl white",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "nicholas nikitakis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "timothy mckenna",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "brad maxwell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sandra mattavous frye",
    "position": "acting director",
    "salary": 155653
  },
  {
    "name": "albert du pont",
    "position": "principal",
    "salary": 109477
  },
  {
    "name": "sharmika mcmickins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christopher nevitt",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "erica melton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "terrace nesmith",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sean mccloskey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "brett squires",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "carlton starling",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alex schmidt",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ebony white",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "shavonne williams",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "roberto hernandez",
    "position": "battalion ems supvr (capt)",
    "salary": 109423
  },
  {
    "name": "william smith",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "chad wyble",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kuo wong",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tyra moore",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "dante myles",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "richard wince",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "winfred mundle",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "clifton murphy",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lynelle williams",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tayna williams",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "mary fields",
    "position": "police officer",
    "salary": 109345
  },
  {
    "name": "kevin naus",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "george young",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "phuson nguyen",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alvin lytle",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sean mackenzie",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "don marshall",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "antoinette mason",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "markquat mathis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "eric matthews",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "shawn murphy",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "staci payne",
    "position": "director",
    "salary": 109299
  },
  {
    "name": "christopher eckford",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ishmeal heru-bey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "james chastanet",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "dathan brown",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "thomas caddell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "joshua champ",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "robert hamrick",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "india edelin",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "deborah bolden",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "carlos heraud",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "john howe",
    "position": "special assistant",
    "salary": 109299
  },
  {
    "name": "john ayllon",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "willie galtney",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "james harris",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "barron green",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sang im",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "patrick hogan",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "eric brown",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rodney johnson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "anthony attardo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "heath bowman",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "mary outlaw",
    "position": "chief of staff",
    "salary": 109299
  },
  {
    "name": "robert edelen",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "denise green",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "antoinette bell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "silvestre bonilla",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ernst hoffstetter",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "brandon clay",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "thomas gainer",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jordan katz",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jonathan goodman",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ismael chapa",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "anna ramachandran",
    "position": "program manager",
    "salary": 109250
  },
  {
    "name": "john brennan",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "charles duckett",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "phillip burggraf",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "anthony campanale",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "shaquinta gaines",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "joseph chaplin",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "gregory hibbard",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christopher gaglione",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jason bagshaw",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rene gallo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "craig farringer",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "james ellis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "freddie duclos",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david hunter",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "vazena chapman",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "dwight johnson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rodney anderson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alvin cardinal",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "earl brown",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "aaron garrison",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "hilary dossen",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "adam levi",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "takia greene",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "adeeb batshon",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "keith boyd",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "gregory brown",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michelle arroyo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "hugh carew",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alex cepeda",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michael kasco",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sarah karim",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "george hickey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david bradley",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "curt bonney",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tamika hampton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "raul castro",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david baker",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alan herring",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "barbara robinson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "adriane benson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "danilo puentes",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "israel coles",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "james freundel",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tyler jones",
    "position": "medical officer psych",
    "salary": 190550
  },
  {
    "name": "nadine wilburn",
    "position": "attorney advisor",
    "salary": 155653
  },
  {
    "name": "jason lederstein",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "anthony fucci",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "william burke",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "olugbenga fadairo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "demika hutchings",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ava cole",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "abraham evans",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "toby green",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jarlath cady",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "travis gray",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michael derian",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "daniel mccall",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "terry freeman",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "melvin evans",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david collins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lashaun alexander",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "robert fennell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "gunther hashida",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "hidza hiller",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "benjamin day",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kristina fersner",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "derrick ferguson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "shana frost",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "dioni fernandez",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "paul dean",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "peter greig",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "joseph barnes",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kenneth dean",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "wilbert davis",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christopher clemens",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "xavier greene",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "marsha ferrell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "maurice clifford iv",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "caroline burnett",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "aaron hunter",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "patrice fletcher",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "manuelle duvall",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "malik bolds",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "judy gautreaux",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rolonda harris",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "doran gunnells",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "darnel robinson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "royce rowe",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "arnita hamilton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "liliah blackstone",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "arthur hopper",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "johnathan branch",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "fabian ferrera",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "alexia jones",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "gregory arrington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "anthony hector",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rodney haskins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "louis bryant",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "vincent hopkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "emmett jones",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "karen kaplan",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "george banks",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "angela bracey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "william chatman",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "demond james",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "david jarboe",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tonia gay",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "claudine jenkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "micheal jenkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lewond fogle",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "luke foskett",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lorenzo crowe",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "steven hobbs",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "marcus johnson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "michael fanone",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "gregory alemian",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "johnnetta allen",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "cynthia fogg",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jonathan jordan",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "len cummings",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sherkia hayes",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kandee clark",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "patrick allen",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "kristopher baumann",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "timothy ford",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "troy hinton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "theodore brosey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "jonathan amigo",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "stephen hall",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "mario amador",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "sean hill",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "matthew copsey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "seamus brackett",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "rachele reid",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "jazzmyn flemmings",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "karmyn riley",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "corey bonds",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "francis jenkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tony covington",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christopher christian",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "raymond hawkins",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "matthew king",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "theodore harvey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "eric hairston",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "linda smalls",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "monica agusti",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "glenda flores",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "steven campbell",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "ravi hiller",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "antonio cosey",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "zunnobia hakir",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "evelyn kimbrough",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "barbara barnes shelton",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tandreia green",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "lance bishop",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "christina fleps",
    "position": "attorney advisor",
    "salary": 155653
  },
  {
    "name": "steven sadel",
    "position": "attorney advisor",
    "salary": 109236
  },
  {
    "name": "adam gottesman",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "atubakr karim",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "steven green",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "kevin harding",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "edwin espinosa",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "eric johnson",
    "position": "officer",
    "salary": 64772
  },
  {
    "name": "tonia jones",
    "position": "officer",
    "salary": 64771
  },
  {
    "name": "yemisi adesomo",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "bolaji adedeji",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "tinuola shokunbi",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "melissa williams",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "patricia ring",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "bernadette williams",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "enyioma anyatonwu",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "chinyere otuya",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "mary thullah",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "natasha henderson",
    "position": "nurse",
    "salary": 64728
  },
  {
    "name": "vida johnson",
    "position": "psychiatric nurse",
    "salary": 64728
  },
  {
    "name": "troy gay",
    "position": "project specialist",
    "salary": 64697
  },
  {
    "name": "aloysius regis",
    "position": "manager, telecom",
    "salary": 64697
  },
  {
    "name": "curtis coleman",
    "position": "workers compensation recipient",
    "salary": 64688
  },
  {
    "name": "holly johnson",
    "position": "trial attorney",
    "salary": 109236
  },
  {
    "name": "russell merson",
    "position": "workers compensation recipient",
    "salary": 64688
  },
  {
    "name": "shannon simister",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "sean sinon",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "leonard zelonis",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "margaret dickey",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "john haggerty",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "christopher hebert",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "berlin hiligh",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "robert chamberlain",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "brian tayman",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "ramon perez-goizueta",
    "position": "operations manager",
    "salary": 109180
  },
  {
    "name": "robert hutchins",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "james pennington",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "paul gunshol",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "george martincheck",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "patrick mazzeo",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "anthony jett",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "micheal freeman",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "jay bureau",
    "position": "firefighter tech",
    "salary": 64680
  },
  {
    "name": "pamela ashford",
    "position": "pre-retirement benefit counsel",
    "salary": 64674
  },
  {
    "name": "julianna fields",
    "position": "coord, special education",
    "salary": 64671
  },
  {
    "name": "william lipscomb",
    "position": "workers compensation recipient",
    "salary": 109142
  },
  {
    "name": "tarisai lumumba-umoja",
    "position": "coordinator (et)",
    "salary": 64671
  },
  {
    "name": "resheeda hinkson",
    "position": "coord, special education",
    "salary": 64671
  },
  {
    "name": "crystal overstreet",
    "position": "program coordinator",
    "salary": 64671
  },
  {
    "name": "tiffanie horne",
    "position": "coord, special education",
    "salary": 64671
  },
  {
    "name": "kimberly farley",
    "position": "coord,academy program",
    "salary": 64671
  },
  {
    "name": "gianna biscontini",
    "position": "coordinator (et)",
    "salary": 64671
  },
  {
    "name": "zalika wright",
    "position": "coord, special education",
    "salary": 64671
  },
  {
    "name": "marie sanao",
    "position": "coord, special education",
    "salary": 64671
  },
  {
    "name": "sanja bosman",
    "position": "coord, special education",
    "salary": 64671
  },
  {
    "name": "debbie knox",
    "position": "dispatcher",
    "salary": 64645
  },
  {
    "name": "frederick drew",
    "position": "chief information officer",
    "salary": 109062
  },
  {
    "name": "michael spikes",
    "position": "teacher",
    "salary": 64565
  },
  {
    "name": "tim matters",
    "position": "teacher",
    "salary": 64565
  },
  {
    "name": "lelia purcelle",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "ronald oneal",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "francina raynor",
    "position": "payroll supervisor",
    "salary": 64496
  },
  {
    "name": "jacqueline warren-campbell",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "edward pratt",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "lorraine lamont",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "teresa clark",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "sandra walker-mclean",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "christopher shorter",
    "position": "chief of staff",
    "salary": 109062
  },
  {
    "name": "danny ware",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "glenn steed",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "linda faison",
    "position": "research specialist",
    "salary": 64496
  },
  {
    "name": "kevin diaz",
    "position": "business manager",
    "salary": 64496
  },
  {
    "name": "angela bradford",
    "position": "assistant professor",
    "salary": 64445
  },
  {
    "name": "tonya mills",
    "position": "contract specialist",
    "salary": 64439
  },
  {
    "name": "tracie robinson",
    "position": "creative arts therapist (dance",
    "salary": 64439
  },
  {
    "name": "christina murphy",
    "position": "executive assistant",
    "salary": 64439
  },
  {
    "name": "anthony mcgail",
    "position": "criminal investigator",
    "salary": 64439
  },
  {
    "name": "michael montgomery",
    "position": "criminal investigator",
    "salary": 64439
  },
  {
    "name": "kameron kima-cherry",
    "position": "deputy director",
    "salary": 109062
  },
  {
    "name": "felicia cowser",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "alexander zion",
    "position": "criminal investigator",
    "salary": 64439
  },
  {
    "name": "vermecia alsop",
    "position": "grants program manager",
    "salary": 64439
  },
  {
    "name": "jeremy shere",
    "position": "residential clinical coord",
    "salary": 64439
  },
  {
    "name": "april chambers",
    "position": "contract specialist",
    "salary": 64439
  },
  {
    "name": "macorazon miranda",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "savitra wright",
    "position": "building management specialist",
    "salary": 64439
  },
  {
    "name": "jason yuckenberg",
    "position": "legislative analyst",
    "salary": 64439
  },
  {
    "name": "andrea limauro",
    "position": "community planner",
    "salary": 64439
  },
  {
    "name": "evelyn jimenez",
    "position": "management liaison specialist",
    "salary": 64439
  },
  {
    "name": "ketan gada",
    "position": "project manager",
    "salary": 109062
  },
  {
    "name": "gizachew andargeh",
    "position": "community planner",
    "salary": 64439
  },
  {
    "name": "jameelah carter",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "natasha davis-debose",
    "position": "program coordinator",
    "salary": 64439
  },
  {
    "name": "tawnekia spencer",
    "position": "mngmt and program analyst",
    "salary": 64439
  },
  {
    "name": "linda brown",
    "position": "hr spec (employee relations)",
    "salary": 64439
  },
  {
    "name": "sheryl jenkins",
    "position": "residential clinical coord",
    "salary": 64439
  },
  {
    "name": "tom kibuyaga",
    "position": "information technology specialist",
    "salary": 64439
  },
  {
    "name": "tornia harrison-samuels",
    "position": "contracts specialist",
    "salary": 64439
  },
  {
    "name": "gina gay",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "bekalu yigzaw",
    "position": "information technology specialist",
    "salary": 64439
  },
  {
    "name": "ravindra ganvir",
    "position": "civil engineer",
    "salary": 109062
  },
  {
    "name": "johnson doerue",
    "position": "information technology specialist",
    "salary": 64439
  },
  {
    "name": "juliette tarrance",
    "position": "telecomms specialist",
    "salary": 64439
  },
  {
    "name": "jennifer jenkins",
    "position": "public affairs specialist",
    "salary": 64439
  },
  {
    "name": "laryssa creswell",
    "position": "create art therapy music",
    "salary": 64439
  },
  {
    "name": "sue crestwell",
    "position": "contract specialist",
    "salary": 64439
  },
  {
    "name": "naadira ali",
    "position": "telecomms specialist",
    "salary": 64439
  },
  {
    "name": "donald clarke",
    "position": "information technology specialist",
    "salary": 64439
  },
  {
    "name": "tonya tart",
    "position": "management liaison specialist",
    "salary": 64439
  },
  {
    "name": "monique clarke",
    "position": "information technology specialist",
    "salary": 64439
  },
  {
    "name": "tanisha brown",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "william howland",
    "position": "dir of dept of public works",
    "salary": 155573
  },
  {
    "name": "mary stefanus",
    "position": "principal",
    "salary": 109044
  },
  {
    "name": "timothy kennedy",
    "position": "program dev & eval analyst",
    "salary": 64439
  },
  {
    "name": "efann lin",
    "position": "program specialist",
    "salary": 64439
  },
  {
    "name": "alesia henry",
    "position": "education compliance specialis",
    "salary": 64439
  },
  {
    "name": "sheranda vaughan",
    "position": "education compliance specialis",
    "salary": 64439
  },
  {
    "name": "valida walker",
    "position": "grants coordinator",
    "salary": 64439
  },
  {
    "name": "darrell cason",
    "position": "policy & research analyst",
    "salary": 64439
  },
  {
    "name": "kieran bowen",
    "position": "grants management specialist",
    "salary": 64439
  },
  {
    "name": "mirka shephard",
    "position": "staff assistant",
    "salary": 64439
  },
  {
    "name": "suzanne henley",
    "position": "program specialist",
    "salary": 64439
  },
  {
    "name": "cristi purnell",
    "position": "management analyst",
    "salary": 64439
  },
  {
    "name": "nicole clifton",
    "position": "principal",
    "salary": 109044
  },
  {
    "name": "quiyana washington",
    "position": "management liaison specialist",
    "salary": 64439
  },
  {
    "name": "brenda hunter",
    "position": "program support assistant",
    "salary": 64439
  },
  {
    "name": "alphonso lee",
    "position": "invest eeo",
    "salary": 64439
  },
  {
    "name": "roberta hood",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "latoya graham",
    "position": "management liaison specialist",
    "salary": 64439
  },
  {
    "name": "katrina mitchell",
    "position": "management liaison specialist",
    "salary": 64439
  },
  {
    "name": "latasha moore",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "latoyia hampton",
    "position": "program analyst",
    "salary": 64439
  },
  {
    "name": "josh moskowitz",
    "position": "transportation management specialist",
    "salary": 64439
  },
  {
    "name": "emil king",
    "position": "policy analyst",
    "salary": 64439
  },
  {
    "name": "m. brown",
    "position": "attorney advisor",
    "salary": 109000
  },
  {
    "name": "christine paluch",
    "position": "archivist",
    "salary": 64439
  },
  {
    "name": "daniel guilbeault",
    "position": "policy analyst",
    "salary": 64439
  },
  {
    "name": "natalie stake",
    "position": "executive assistant",
    "salary": 64439
  },
  {
    "name": "raegan williams",
    "position": "writer editor",
    "salary": 64439
  },
  {
    "name": "valorie wiggins",
    "position": "neighborhood maintenance coord",
    "salary": 64439
  },
  {
    "name": "byron day",
    "position": "planning and operations specia",
    "salary": 64439
  },
  {
    "name": "kelley dillon",
    "position": "victim svcs program specialist",
    "salary": 64439
  },
  {
    "name": "jonathan moore",
    "position": "forensic toxicologist",
    "salary": 64439
  },
  {
    "name": "francis dikoh",
    "position": "correctional treatment spec (r",
    "salary": 64439
  },
  {
    "name": "darnell dupar",
    "position": "criminal investigator",
    "salary": 64439
  },
  {
    "name": "aretha ferrell benavides",
    "position": "deputy director",
    "salary": 109000
  },
  {
    "name": "jason stroud",
    "position": "onsite special operation coor",
    "salary": 64439
  },
  {
    "name": "william heist",
    "position": "forester (urban)",
    "salary": 64439
  },
  {
    "name": "decasto brown",
    "position": "pub hlth outreach tech",
    "salary": 64432
  },
  {
    "name": "makon fardis",
    "position": "program coordinator",
    "salary": 64417
  },
  {
    "name": "faith blackburne",
    "position": "program coordinator",
    "salary": 64417
  },
  {
    "name": "konyka dunson",
    "position": "program coordinator",
    "salary": 64417
  },
  {
    "name": "cristina johnson",
    "position": "project specialist",
    "salary": 64417
  },
  {
    "name": "marshall day",
    "position": "correctional officer",
    "salary": 64397
  },
  {
    "name": "cornethia williams",
    "position": "correctional officer",
    "salary": 64397
  },
  {
    "name": "obioma ibeawuchi",
    "position": "correctional officer",
    "salary": 64397
  },
  {
    "name": "annamatesha howell",
    "position": "hr specialist (policy)",
    "salary": 109000
  },
  {
    "name": "james holbrook",
    "position": "correctional officer",
    "salary": 64397
  },
  {
    "name": "richard graham",
    "position": "management analyst",
    "salary": 64354
  },
  {
    "name": "lorraine rawls",
    "position": "accountant",
    "salary": 64354
  },
  {
    "name": "roxann miller",
    "position": "legal instruments examiner",
    "salary": 64354
  },
  {
    "name": "mallie douglas",
    "position": "administrative manager",
    "salary": 64354
  },
  {
    "name": "sheila beatty",
    "position": "legal instruments examiner",
    "salary": 64354
  },
  {
    "name": "henry iroegbu",
    "position": "assoc professor",
    "salary": 64297
  },
  {
    "name": "irving kelley",
    "position": "program coordinator",
    "salary": 64291
  },
  {
    "name": "chynita pernell",
    "position": "management & program analyst",
    "salary": 64291
  },
  {
    "name": "jennie o'brien",
    "position": "coordinato",
    "salary": 64291
  },
  {
    "name": "scott garrett",
    "position": "information technology specialist",
    "salary": 109000
  },
  {
    "name": "stacey johnson",
    "position": "coordinato",
    "salary": 64291
  },
  {
    "name": "ousman jobe",
    "position": "data analyst",
    "salary": 64291
  },
  {
    "name": "wanda malloy",
    "position": "investigator",
    "salary": 64291
  },
  {
    "name": "megan gregory-morley",
    "position": "program coordinator",
    "salary": 64291
  },
  {
    "name": "dena nihart",
    "position": "human resource specialist",
    "salary": 64291
  },
  {
    "name": "debra rideout",
    "position": "management & program analyst",
    "salary": 64291
  },
  {
    "name": "donnie bryant",
    "position": "program manager",
    "salary": 64272
  },
  {
    "name": "zachary lynch",
    "position": "workers compensation recipient",
    "salary": 64272
  },
  {
    "name": "elizabeth klimp",
    "position": "general attorney",
    "salary": 64200
  },
  {
    "name": "ingrid henderson",
    "position": "teacher",
    "salary": 64197
  },
  {
    "name": "peter szegedy maszak",
    "position": "attorney examiner",
    "salary": 108895
  },
  {
    "name": "angela isom",
    "position": "teacher",
    "salary": 64197
  },
  {
    "name": "lesley kline",
    "position": "forensic scientist",
    "salary": 64107
  },
  {
    "name": "deborrah jackson",
    "position": "recreation specialist",
    "salary": 64107
  },
  {
    "name": "anthony lawson",
    "position": "engineering technician",
    "salary": 64107
  },
  {
    "name": "paul carraway",
    "position": "construction representative",
    "salary": 64107
  },
  {
    "name": "kelly harris",
    "position": "solid waste inspector",
    "salary": 64107
  },
  {
    "name": "william higdon",
    "position": "workers compensation recipient",
    "salary": 64105
  },
  {
    "name": "caroline young",
    "position": "counselor",
    "salary": 64071
  },
  {
    "name": "leslie sargent",
    "position": "counselor",
    "salary": 64071
  },
  {
    "name": "dale matthews",
    "position": "banner senior specialist",
    "salary": 64044
  },
  {
    "name": "jeffrey mcinnis",
    "position": "detained programs director",
    "salary": 108883
  },
  {
    "name": "terrence edwards",
    "position": "assoc professor",
    "salary": 64027
  },
  {
    "name": "keith byrd",
    "position": "fire arson investigator armed",
    "salary": 64024
  },
  {
    "name": "roshawnda mason",
    "position": "fire arson investigator armed",
    "salary": 64024
  },
  {
    "name": "horace stephens",
    "position": "workers compensation recipient",
    "salary": 64018
  },
  {
    "name": "linden fry",
    "position": "paralegal specialist",
    "salary": 64000
  },
  {
    "name": "nian zhang",
    "position": "assistant professor",
    "salary": 64000
  },
  {
    "name": "chishamiso rowley",
    "position": "visiting assistant professor",
    "salary": 64000
  },
  {
    "name": "anita taylor",
    "position": "phys sci tech",
    "salary": 63973
  },
  {
    "name": "nikki adepoju",
    "position": "nursing clinical coord",
    "salary": 63973
  },
  {
    "name": "deborah riley",
    "position": "enroll management systems specialist",
    "salary": 63973
  },
  {
    "name": "joan saleh",
    "position": "driver srvs admin",
    "salary": 108883
  },
  {
    "name": "vera yaa-anna",
    "position": "extension agent ii",
    "salary": 63973
  },
  {
    "name": "kim fenwick mbow",
    "position": "project coor",
    "salary": 63973
  },
  {
    "name": "raysa leer",
    "position": "program specialist",
    "salary": 63973
  },
  {
    "name": "sandra jowers",
    "position": "assistant professor",
    "salary": 63952
  },
  {
    "name": "christopher anglim",
    "position": "assoc professor",
    "salary": 63946
  },
  {
    "name": "lena walton",
    "position": "assoc prof/chair",
    "salary": 63946
  },
  {
    "name": "kelli richardson",
    "position": "teacher",
    "salary": 63857
  },
  {
    "name": "shirley brock",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "kirkland marion",
    "position": "correctional officer",
    "salary": 63839
  },
  {
    "name": "michael menefee",
    "position": "correctional officer",
    "salary": 63839
  },
  {
    "name": "anne grant",
    "position": "director, research & resource",
    "salary": 108883
  },
  {
    "name": "tyrone waters",
    "position": "correctional officer",
    "salary": 63839
  },
  {
    "name": "charles white",
    "position": "correctional officer",
    "salary": 63839
  },
  {
    "name": "dancy simpson",
    "position": "correctional officer",
    "salary": 63839
  },
  {
    "name": "robin green",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "jeffrey baker",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "robert goodyear",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "ricardo clark",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "lucrecia arevalo bell",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "johnnie baccus",
    "position": "paramedic",
    "salary": 63839
  },
  {
    "name": "john jensen",
    "position": "library acquisitions",
    "salary": 63811
  },
  {
    "name": "rizwan malik",
    "position": "medical officer (psychiatry)",
    "salary": 155071
  },
  {
    "name": "sylvia goldsberry adams",
    "position": "elections operations manager",
    "salary": 108870
  },
  {
    "name": "rodney gill",
    "position": "extension agent ii",
    "salary": 63811
  },
  {
    "name": "adam stratton",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "paris williams",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "shauna bailey",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "david auerbach",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "lynette kramer",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "david sanders",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "susie della-camera",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "corey brimage",
    "position": "paramedic firefighter",
    "salary": 63796
  },
  {
    "name": "rose ehichioya",
    "position": "pyschiatric nurse",
    "salary": 63758
  },
  {
    "name": "sheila jordan",
    "position": "assoc administrator for opera",
    "salary": 108620
  },
  {
    "name": "jane kutsushi",
    "position": "pyschiatric nurse",
    "salary": 63758
  },
  {
    "name": "omemiyere uwayzor",
    "position": "pyschiatric nurse",
    "salary": 63758
  },
  {
    "name": "sheila lebrun james",
    "position": "pyschiatric nurse",
    "salary": 63758
  },
  {
    "name": "myrtha mathieux",
    "position": "pyschiatric nurse",
    "salary": 63758
  },
  {
    "name": "barbara blum",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "joseph clark",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "thomas tippett",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "judith marcus",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "michael warren",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "george suter",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "maureen oconnell",
    "position": "dir d c police",
    "salary": 108619
  },
  {
    "name": "lyle blanchard",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "darrick ross",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "deborah hensley",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "edward smith",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "joseph bress",
    "position": "d c retirement board member",
    "salary": 63734
  },
  {
    "name": "shaitaisha winston",
    "position": "assistant professor",
    "salary": 63693
  },
  {
    "name": "b harris",
    "position": "assistant professor",
    "salary": 63683
  },
  {
    "name": "ana velasco",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "swayne simms",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "michelle williams",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "karen scipio skinner",
    "position": "executive director",
    "salary": 108461
  },
  {
    "name": "michele shields",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "cynthia little",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "tracey williams",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "dominga serpas",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "verlean sanders",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "gloria sanders",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "rene majors",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "la johnson",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "rossie saunders",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "ricky bender",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "margarita dimitrova",
    "position": "teacher",
    "salary": 108402
  },
  {
    "name": "juwanna hall miller",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "andre lunsford",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "stewart johnson",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "michael glenn",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "kevin king",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "bridget lewis",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "keena jones",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "bertha stover",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "andrea taylor",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "michael marable",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "marcia cole",
    "position": "curriculum writer",
    "salary": 108402
  },
  {
    "name": "jacqueline white",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "gordon scott",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "kelly jenkins",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "stella cromer",
    "position": "correctional program specialis",
    "salary": 63533
  },
  {
    "name": "nichole reid",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "joyce hall",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "lynda reid",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "benedict kargbo",
    "position": "correctional treatment specialist",
    "salary": 63533
  },
  {
    "name": "valerie emerson",
    "position": "correctional treatment specialist",
    "salary": 63533
  },
  {
    "name": "rex ihezue",
    "position": "correctional treatment specialist",
    "salary": 63533
  },
  {
    "name": "rachel skerritt",
    "position": "principal",
    "salary": 108396
  },
  {
    "name": "la'shan johnson",
    "position": "correctional program specialis",
    "salary": 63533
  },
  {
    "name": "tammie creamer",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "carolyn morris",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "cheri johnson",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "vanya brown",
    "position": "correctional treatment specialist",
    "salary": 63533
  },
  {
    "name": "victoria lewis wingate",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "brenda brooks",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "taheyyer champion bey",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "ava millard",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "sharane brown",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "stephen jackson",
    "position": "principal",
    "salary": 108396
  },
  {
    "name": "katrina branch",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "karen alexander wingate",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "brenda newman",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "tisa ransome",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "sylvia nazario",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "celia vargas",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "tracy beatty",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "lora poole",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "shirayne thompson",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "gayle rice robinson",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "darrin sharp",
    "position": "appraiser",
    "salary": 108361
  },
  {
    "name": "crystal brown",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "latrice covington",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "eric brown",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "deborah walston",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "michelle thurston",
    "position": "dispatcher",
    "salary": 63533
  },
  {
    "name": "walter davis",
    "position": "instructor, jrotc",
    "salary": 63518
  },
  {
    "name": "william reid",
    "position": "care coor",
    "salary": 63502
  },
  {
    "name": "olonda oliver",
    "position": "invoice verification coordinat",
    "salary": 63502
  },
  {
    "name": "linda redd",
    "position": "drug & employee program specialist",
    "salary": 63502
  },
  {
    "name": "linda roe",
    "position": "health and wellness specialist",
    "salary": 63502
  },
  {
    "name": "mohammed idris",
    "position": "budget & fiscal specialist",
    "salary": 108361
  },
  {
    "name": "sydney williams-bey",
    "position": "mental health specialist",
    "salary": 63502
  },
  {
    "name": "dominic snowden",
    "position": "training specialist",
    "salary": 63502
  },
  {
    "name": "winston fryer",
    "position": "lead traffic control officer",
    "salary": 63502
  },
  {
    "name": "emma clark",
    "position": "contract specialist",
    "salary": 63502
  },
  {
    "name": "denetria norman",
    "position": "vocational rehabilitation specialist",
    "salary": 63502
  },
  {
    "name": "marvin mccoy",
    "position": "human resources specialist",
    "salary": 63502
  },
  {
    "name": "vicki brown",
    "position": "staff assistant",
    "salary": 63502
  },
  {
    "name": "lucy labson",
    "position": "grants specialist",
    "salary": 63502
  },
  {
    "name": "charles palmer",
    "position": "work order verification specia",
    "salary": 63502
  },
  {
    "name": "hugo marin",
    "position": "work order verification specia",
    "salary": 63502
  },
  {
    "name": "william robinson",
    "position": "professor",
    "salary": 155000
  },
  {
    "name": "sheila frye wallace",
    "position": "accounts payable manager",
    "salary": 108361
  },
  {
    "name": "kenneth frazier",
    "position": "intelligence research speciali",
    "salary": 63502
  },
  {
    "name": "michael hayden",
    "position": "intelligence research speciali",
    "salary": 63502
  },
  {
    "name": "dwayne gilliam",
    "position": "auditor",
    "salary": 63502
  },
  {
    "name": "abigail cassell",
    "position": "consumer outreach specialist",
    "salary": 63502
  },
  {
    "name": "deborah scott",
    "position": "paralegal specialist",
    "salary": 63502
  },
  {
    "name": "frank radtke",
    "position": "fleet servicer",
    "salary": 63502
  },
  {
    "name": "ronda kardash",
    "position": "state literacy coordinator",
    "salary": 63502
  },
  {
    "name": "cecilia arce",
    "position": "community outreach specialist",
    "salary": 63502
  },
  {
    "name": "sean coleman",
    "position": "visiting associate professor",
    "salary": 63500
  },
  {
    "name": "gil keyes",
    "position": "administrative officer",
    "salary": 63445
  },
  {
    "name": "vanessa jackson",
    "position": "manager operations admin",
    "salary": 108361
  },
  {
    "name": "victor nwabueze",
    "position": "construction representative",
    "salary": 63413
  },
  {
    "name": "tamika neal",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "barry carey",
    "position": "lead solid waste inspector",
    "salary": 63413
  },
  {
    "name": "vacara matthews",
    "position": "construction representative",
    "salary": 63413
  },
  {
    "name": "charlene barber",
    "position": "lead solid waste inspector",
    "salary": 63413
  },
  {
    "name": "donna carmon",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "jacqueline jones",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "paul campbell",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "olivia jones",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "antoinette lyon noel",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "sudipta sharma",
    "position": "chief, systems analysis and su",
    "salary": 108361
  },
  {
    "name": "alexander teneza",
    "position": "accountant",
    "salary": 63413
  },
  {
    "name": "leona madison",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "tanya littlejohn",
    "position": "investigator",
    "salary": 63413
  },
  {
    "name": "james meyer",
    "position": "historic preservation speciali",
    "salary": 63413
  },
  {
    "name": "lisette hanna",
    "position": "social insurance specialist",
    "salary": 63413
  },
  {
    "name": "ann pierre",
    "position": "program analyst",
    "salary": 63413
  },
  {
    "name": "derrick nobles",
    "position": "construction representative",
    "salary": 63413
  },
  {
    "name": "wendi isaac",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "adrienne dove",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "nelson toney",
    "position": "vocational rehabilitation specialist",
    "salary": 63413
  },
  {
    "name": "tiong the'",
    "position": "audit manager",
    "salary": 108361
  },
  {
    "name": "phyllis anderson- nobles",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "kishiro easterling",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "joann bassett lowe",
    "position": "transportation specialist",
    "salary": 63413
  },
  {
    "name": "bonita thompson",
    "position": "environmental program specialist",
    "salary": 63413
  },
  {
    "name": "maurice prince",
    "position": "engineering technician",
    "salary": 63413
  },
  {
    "name": "donald tolson",
    "position": "program specialist",
    "salary": 63413
  },
  {
    "name": "william blount",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "lolita perry",
    "position": "energy program specialist",
    "salary": 63413
  },
  {
    "name": "shalela woodberry",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "delois ellis crowder",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "jeffrey anderson",
    "position": "chief charitable games & lic",
    "salary": 108361
  },
  {
    "name": "patricia jenkins",
    "position": "licensing specialist",
    "salary": 63413
  },
  {
    "name": "tracey talbert",
    "position": "clinical support",
    "salary": 63413
  },
  {
    "name": "ruby nelson",
    "position": "contract specialist",
    "salary": 63413
  },
  {
    "name": "daniel goodwin",
    "position": "vocational specialist",
    "salary": 63413
  },
  {
    "name": "leslee mcrae",
    "position": "intake hotline worker",
    "salary": 63413
  },
  {
    "name": "carman wallace",
    "position": "resource development specialist",
    "salary": 63413
  },
  {
    "name": "patrick awosika",
    "position": "addiction treatment specialist",
    "salary": 63413
  },
  {
    "name": "jungja lee",
    "position": "program support assistant",
    "salary": 63413
  },
  {
    "name": "jessica opalski",
    "position": "staff assistant",
    "salary": 63413
  },
  {
    "name": "alice littlefield",
    "position": "intake hotline worker",
    "salary": 63413
  },
  {
    "name": "william kennedy",
    "position": "criminal investigator",
    "salary": 108361
  },
  {
    "name": "nedra english",
    "position": "administrative assistant",
    "salary": 63413
  },
  {
    "name": "shalonda knox",
    "position": "independent living specialist",
    "salary": 63413
  },
  {
    "name": "annette matthews",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "mary chambers",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "deirdra james",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "alberta gustus",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "gloria lopez",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "margaret bell",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "veronica taylor",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "wesley riggins",
    "position": "assessor",
    "salary": 63413
  },
  {
    "name": "keith cunningham",
    "position": "telecommunications equip opera",
    "salary": 108361
  },
  {
    "name": "lorraine ford",
    "position": "investigator",
    "salary": 63413
  },
  {
    "name": "renee martin",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "michelle hill",
    "position": "paralegal specialist",
    "salary": 63413
  },
  {
    "name": "beverly holloway",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "wanda smith",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "crystal ashley",
    "position": "revenue officer",
    "salary": 63413
  },
  {
    "name": "thomas john",
    "position": "payroll specialist",
    "salary": 63413
  },
  {
    "name": "nicole mcclendon",
    "position": "paralegal specialist",
    "salary": 63413
  },
  {
    "name": "toylanda brown",
    "position": "health licensing specialist",
    "salary": 63413
  },
  {
    "name": "willie comer",
    "position": "case manager",
    "salary": 63413
  },
  {
    "name": "melinda bolling",
    "position": "attorney advisor",
    "salary": 108315
  },
  {
    "name": "carla branham",
    "position": "case manager",
    "salary": 63413
  },
  {
    "name": "darryl vann",
    "position": "accountant",
    "salary": 63413
  },
  {
    "name": "charnetta wallace",
    "position": "management analyst",
    "salary": 63413
  },
  {
    "name": "rodney gainous",
    "position": "manpower development specialist",
    "salary": 63413
  },
  {
    "name": "melissa doboski",
    "position": "staff assistant",
    "salary": 63413
  },
  {
    "name": "lorna tucker-jackson",
    "position": "paralegal specialist",
    "salary": 63413
  },
  {
    "name": "keith bazemore",
    "position": "training instructor",
    "salary": 63413
  },
  {
    "name": "mark greek",
    "position": "archivist",
    "salary": 63413
  },
  {
    "name": "shirley nelson",
    "position": "workforce development specialist",
    "salary": 63413
  },
  {
    "name": "jeanne lauber",
    "position": "librarian",
    "salary": 63413
  },
  {
    "name": "stephaine crawford",
    "position": "counselor",
    "salary": 108268
  },
  {
    "name": "patrice bailey",
    "position": "housing program specialist",
    "salary": 63413
  },
  {
    "name": "sylvia williams",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "jacob mbafor",
    "position": "public health analyst",
    "salary": 63413
  },
  {
    "name": "wanda jones",
    "position": "librarian",
    "salary": 63413
  },
  {
    "name": "anjanette parker",
    "position": "support enforcement specialist",
    "salary": 63413
  },
  {
    "name": "cynthia mcbride",
    "position": "writer editor",
    "salary": 63413
  },
  {
    "name": "rita jordan",
    "position": "computer testing coor",
    "salary": 63413
  },
  {
    "name": "darrell deswarte",
    "position": "training instructor",
    "salary": 63413
  },
  {
    "name": "mary phelan",
    "position": "librarian",
    "salary": 63413
  },
  {
    "name": "vernell buford",
    "position": "staff assistant",
    "salary": 63413
  },
  {
    "name": "pamela holmes",
    "position": "counselor",
    "salary": 108268
  },
  {
    "name": "karen thompson",
    "position": "manpower development specialist",
    "salary": 63413
  },
  {
    "name": "keya ross",
    "position": "intern coordinator",
    "salary": 63413
  },
  {
    "name": "toni taylor",
    "position": "program support assistant",
    "salary": 63413
  },
  {
    "name": "sabrina givens",
    "position": "grant management specialist",
    "salary": 63413
  },
  {
    "name": "larry stewart",
    "position": "program monitor",
    "salary": 63413
  },
  {
    "name": "maxine hyman",
    "position": "paralegal specialist",
    "salary": 63413
  },
  {
    "name": "jerome hackney",
    "position": "engineering technician",
    "salary": 63413
  },
  {
    "name": "gail marshall",
    "position": "procurement support sp (pass)",
    "salary": 63413
  },
  {
    "name": "montez toye",
    "position": "engineering technician",
    "salary": 63413
  },
  {
    "name": "modibo hylton",
    "position": "engineering technician",
    "salary": 63413
  },
  {
    "name": "linda elam",
    "position": "deputy director",
    "salary": 155000
  },
  {
    "name": "sidney owens",
    "position": "information technology specialist",
    "salary": 108200
  },
  {
    "name": "david wells",
    "position": "construction representative",
    "salary": 63413
  },
  {
    "name": "howard bethea",
    "position": "construction representative",
    "salary": 63413
  },
  {
    "name": "mohamud hassan",
    "position": "construction representative",
    "salary": 63413
  },
  {
    "name": "linda logan",
    "position": "social service representive",
    "salary": 63413
  },
  {
    "name": "kerri robinson",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "katherine shelton",
    "position": "lead solid waste inspector",
    "salary": 63413
  },
  {
    "name": "ellen bachman",
    "position": "social service assistant",
    "salary": 63413
  },
  {
    "name": "roslyn mccall smith",
    "position": "resource specialist",
    "salary": 63413
  },
  {
    "name": "angela carole",
    "position": "program coor",
    "salary": 63413
  },
  {
    "name": "judith mbide",
    "position": "service coordinator",
    "salary": 63413
  },
  {
    "name": "jennie sanders",
    "position": "dir,spec progs/alterna ed",
    "salary": 108162
  },
  {
    "name": "ronald staton",
    "position": "residency placement specialist",
    "salary": 63413
  },
  {
    "name": "hattie ward",
    "position": "program monitor",
    "salary": 63413
  },
  {
    "name": "jacqueline proctor",
    "position": "public health advisor",
    "salary": 63413
  },
  {
    "name": "marjorie turner",
    "position": "juv justice inst counselor",
    "salary": 63413
  },
  {
    "name": "sonya williams",
    "position": "public health analyst",
    "salary": 63413
  },
  {
    "name": "virginia walker",
    "position": "program suppor",
    "salary": 63413
  },
  {
    "name": "charis ferguson-tra'bael",
    "position": "medicaid program analyst",
    "salary": 63413
  },
  {
    "name": "fay vanhook",
    "position": "public health analyst",
    "salary": 63413
  },
  {
    "name": "marqwetta williams",
    "position": "program analyst",
    "salary": 63413
  },
  {
    "name": "keith floyd",
    "position": "program assistant",
    "salary": 63413
  },
  {
    "name": "lisa raymond",
    "position": "legislative assistant",
    "salary": 108150
  },
  {
    "name": "andre lee",
    "position": "lead solid waste inspector",
    "salary": 63413
  },
  {
    "name": "jefferson regis",
    "position": "management analyst",
    "salary": 63413
  },
  {
    "name": "william lester",
    "position": "engineering technician",
    "salary": 63413
  },
  {
    "name": "andrea lowery",
    "position": "engineering technician",
    "salary": 63413
  },
  {
    "name": "kimberly green",
    "position": "staff assistant",
    "salary": 63413
  },
  {
    "name": "latissha isby",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "shaakira simon",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "denise simpson",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "narendra date",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "kimberly simmons",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "repunzelle johnson",
    "position": "attorney advisor",
    "salary": 108125
  },
  {
    "name": "lane cyphers",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "patricia moody",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "towana mukushi",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "cassaundra wilkins",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "alexander goodwill",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "joseph williams",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "tarsha buie",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "tania abdulahad",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "sonique nixon",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "myrna briganty",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "gordon boelter",
    "position": "attorney advisor",
    "salary": 108125
  },
  {
    "name": "stephanie sharrow-edwards",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "ivory cooper",
    "position": "sanitarian",
    "salary": 63411
  },
  {
    "name": "bruce flippens",
    "position": "sanitarian",
    "salary": 63411
  },
  {
    "name": "sosina merid",
    "position": "medical technologist",
    "salary": 63411
  },
  {
    "name": "keith howard",
    "position": "social worker",
    "salary": 63411
  },
  {
    "name": "lawrence lewis",
    "position": "boiler plant operator",
    "salary": 63211
  },
  {
    "name": "vonda rogers",
    "position": "visiting assistant professor",
    "salary": 63200
  },
  {
    "name": "justin bolding",
    "position": "detective",
    "salary": 63198
  },
  {
    "name": "hosam nasr",
    "position": "detective",
    "salary": 63198
  },
  {
    "name": "greggory pemberton",
    "position": "detective",
    "salary": 63198
  },
  {
    "name": "esther bushman",
    "position": "attorney advisor",
    "salary": 108125
  },
  {
    "name": "joy preston",
    "position": "crime scene srch ofr",
    "salary": 63198
  },
  {
    "name": "alexander macbean",
    "position": "detective",
    "salary": 63198
  },
  {
    "name": "greg nagurka",
    "position": "crime scene srch ofr",
    "salary": 63198
  },
  {
    "name": "matthew palmerton",
    "position": "sergeant",
    "salary": 63174
  },
  {
    "name": "oliver gaskin",
    "position": "sergeant",
    "salary": 63174
  },
  {
    "name": "thomas chenworth",
    "position": "sergeant",
    "salary": 63174
  },
  {
    "name": "manu kennedy",
    "position": "fire inspector",
    "salary": 63129
  },
  {
    "name": "raymond coehins",
    "position": "workers compensation recipient",
    "salary": 63128
  },
  {
    "name": "latresa stewart",
    "position": "office manager",
    "salary": 63046
  },
  {
    "name": "jessie price",
    "position": "project manager",
    "salary": 63046
  },
  {
    "name": "donna russell",
    "position": "attorney advisor",
    "salary": 108125
  },
  {
    "name": "artis washington",
    "position": "information technology specialist",
    "salary": 63046
  },
  {
    "name": "joann harris-taylor",
    "position": "staff assistant",
    "salary": 63046
  },
  {
    "name": "priscilla pinkney",
    "position": "staff assistant",
    "salary": 63046
  },
  {
    "name": "shermain genius",
    "position": "financial aid assistant",
    "salary": 63046
  },
  {
    "name": "janelle lumpkin curvan",
    "position": "management assistant",
    "salary": 63046
  },
  {
    "name": "roy lycorish",
    "position": "assistant farm manager",
    "salary": 63046
  },
  {
    "name": "deborah kelly",
    "position": "contract & reprogram special",
    "salary": 63000
  },
  {
    "name": "renee johnson",
    "position": "legislative assistant",
    "salary": 63000
  },
  {
    "name": "jessica levknecht",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "anitra parker",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "melvin barry",
    "position": "director",
    "salary": 108114
  },
  {
    "name": "susan park",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "alina majer",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "felicia malloy",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "dawn person",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "luke jerome",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "laura larsen",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "marcella hovancsek",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "rita ortiz",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "katherine giron",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "rebecca millner",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "aaron jacobs",
    "position": "administrative officer",
    "salary": 108085
  },
  {
    "name": "leslie goldberg",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "jennifer jenkins",
    "position": "counselor",
    "salary": 62931
  },
  {
    "name": "joshua krohn",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "suzanne peters",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "mikel oliver",
    "position": "intervention coach",
    "salary": 62931
  },
  {
    "name": "lakia kenan",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "crystal martin",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "tameka petticolas",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "christina lee",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "nicole kelly",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "brian moore",
    "position": "committee director",
    "salary": 108000
  },
  {
    "name": "kendall jenkins",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "sofie hosseini-pour",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kristina hopkins",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "sarah riggen",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "bernadine okoro",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "john rice",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kimberly bigelow",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "jennifer matson",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "brian o'beirne",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "melissa nolen",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "christopher warren",
    "position": "chief information officer",
    "salary": 155000
  },
  {
    "name": "monica davis",
    "position": "foreclosure mediation admin",
    "salary": 108000
  },
  {
    "name": "rebecca helgerson",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kristen jefferson",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "marshan jefferson",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "allison klass",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "melissa ogonowski",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "laena lee",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "tamara hawkins",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "tasara redekopp",
    "position": "librarian",
    "salary": 62931
  },
  {
    "name": "raymond lofty",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "mingchee mui",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "geo george",
    "position": "program manager",
    "salary": 108000
  },
  {
    "name": "larry norman",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "christine popadich",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "valarie pough",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "isela reyes",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "stacey gathers",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "njenga gichongi",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "karen mcdowell",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "taneka nugent",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "amy reno",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "jonathan lever",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "johnny greene",
    "position": "emergency operation specialist",
    "salary": 107969
  },
  {
    "name": "kimberly king",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "jessica zlockie",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "tamara crespo posso",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "cory coward",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "ausra scopino",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "maria scinto",
    "position": "librarian",
    "salary": 62931
  },
  {
    "name": "jennifer weber",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "edward sauls",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "elizabeth vandivier",
    "position": "librarian",
    "salary": 62931
  },
  {
    "name": "leslie smith",
    "position": "librarian",
    "salary": 62931
  },
  {
    "name": "janice cager",
    "position": "management liaison officer",
    "salary": 107942
  },
  {
    "name": "shavon walker",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "coleman rose",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "rona cruickshank",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "crystal taveras",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "nathan wieand",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kathryn tompkins",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "emily schneider",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kristal stripling",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "modestine welch",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kerry spence",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "seema taneja",
    "position": "administrative services mngr",
    "salary": 107891
  },
  {
    "name": "charise shaw",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kelley taylor",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "stephanie terzian",
    "position": "psychologist,school",
    "salary": 62931
  },
  {
    "name": "jacqueline rudewicz",
    "position": "speech pathologist",
    "salary": 62931
  },
  {
    "name": "willina robson",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "stephanie johnson",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "toloria white",
    "position": "social worker",
    "salary": 62931
  },
  {
    "name": "emily young",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kourtney purham",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "jason vanderburgh",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "cheryl warley",
    "position": "principal",
    "salary": 107851
  },
  {
    "name": "chenine dyson",
    "position": "social worker",
    "salary": 62931
  },
  {
    "name": "gregory furr",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "justin gaines",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "emily flores",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "samantha averett",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "shendrina alexander",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "michelle arnold",
    "position": "librarian",
    "salary": 62931
  },
  {
    "name": "ryan force",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "zakiya bryant",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "brian frye",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "cecelia hawkins",
    "position": "program manager",
    "salary": 107848
  },
  {
    "name": "theresa everette",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "erin druelinger",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "ronnie crump",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "lisa conezio",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "timothy britt",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kim-charlotte davis dorsey",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "jonathan clay",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "kimberly brooks",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "allysen beckley",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "caryl dawkins",
    "position": "counselor",
    "salary": 62931
  },
  {
    "name": "michelle christopher",
    "position": "housing compliance offcr",
    "salary": 107843
  },
  {
    "name": "danielia donegal",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "bethany banal",
    "position": "psychologist,school",
    "salary": 62931
  },
  {
    "name": "sareeta carter",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "samantha ade",
    "position": "teacher",
    "salary": 62931
  },
  {
    "name": "tantalia hall",
    "position": "teacher",
    "salary": 62930
  },
  {
    "name": "matthew woolston",
    "position": "firefighter paramedic tech",
    "salary": 62908
  },
  {
    "name": "christopher moore",
    "position": "firefighter paramedic tech",
    "salary": 62908
  },
  {
    "name": "jonathan botwin",
    "position": "firefighter paramedic tech",
    "salary": 62908
  },
  {
    "name": "keli-lloyd small",
    "position": "nurse",
    "salary": 62867
  },
  {
    "name": "leslie trent",
    "position": "motor vehicle dispatch",
    "salary": 62850
  },
  {
    "name": "daniel palmer",
    "position": "program manager",
    "salary": 107843
  },
  {
    "name": "marvin peoples",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "kenneth singleton",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "yvette thomas",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "jodie spurlock",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "douglas oglesby",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "yatta kassim",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "tracy felton",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "nubia gomez",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "david gatling",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "carla drake",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "james mcmanus",
    "position": "assistant dir",
    "salary": 107843
  },
  {
    "name": "jeanette braithwaite",
    "position": "social services rep",
    "salary": 62850
  },
  {
    "name": "romeo del rosario",
    "position": "business manager",
    "salary": 62848
  },
  {
    "name": "kamaria mabry",
    "position": "business manager",
    "salary": 62848
  },
  {
    "name": "ana martinez-lopez",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "danielle fuller",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "jacqueline mayes",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "kendra heffelbower",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "daniel goldfarb",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "denise fairley",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "melanie agnew",
    "position": "instructional coach",
    "salary": 62843
  },
  {
    "name": "timothy gerhart",
    "position": "assistant fire chief operations",
    "salary": 154979
  },
  {
    "name": "joy phillips",
    "position": "assoc dir state data center",
    "salary": 107843
  },
  {
    "name": "naima wallace",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "jennifer taransky",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "zuzel de la cueva",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "carla vizzini",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "mark pedroza",
    "position": "teacher",
    "salary": 62843
  },
  {
    "name": "delonda craig",
    "position": "correctional officer",
    "salary": 62836
  },
  {
    "name": "aden bushee",
    "position": "correctional officer",
    "salary": 62835
  },
  {
    "name": "xueqing song",
    "position": "assistant professor",
    "salary": 62835
  },
  {
    "name": "lawrence crim",
    "position": "visiting instructor",
    "salary": 62828
  },
  {
    "name": "ashley anderson",
    "position": "librarian",
    "salary": 62816
  },
  {
    "name": "edward farley",
    "position": "deputy assistant inspector",
    "salary": 107843
  },
  {
    "name": "jesse koplowitz",
    "position": "teacher",
    "salary": 62816
  },
  {
    "name": "brandy stephenson",
    "position": "teacher",
    "salary": 62816
  },
  {
    "name": "michael alexander",
    "position": "dean of students (et)",
    "salary": 62794
  },
  {
    "name": "marlon ray",
    "position": "dean of students (et)",
    "salary": 62794
  },
  {
    "name": "taylor o'leary",
    "position": "program coordinator",
    "salary": 62794
  },
  {
    "name": "yulondra barlow",
    "position": "legislative assistant",
    "salary": 62792
  },
  {
    "name": "thomas gilchrist",
    "position": "teacher",
    "salary": 62765
  },
  {
    "name": "gregory williams",
    "position": "dental lab tech",
    "salary": 62753
  },
  {
    "name": "rita robinson",
    "position": "recreation therapist",
    "salary": 62753
  },
  {
    "name": "milton ceasar",
    "position": "workers compensation recipient",
    "salary": 62712
  },
  {
    "name": "natalia cortada",
    "position": "teacher",
    "salary": 107835
  },
  {
    "name": "sonnie abebaku",
    "position": "assoc professor",
    "salary": 62667
  },
  {
    "name": "marc smith",
    "position": "audit assistant",
    "salary": 62665
  },
  {
    "name": "gloria reese",
    "position": "assistant accounts payable sup",
    "salary": 62665
  },
  {
    "name": "ingrid richards",
    "position": "financial analyst",
    "salary": 62665
  },
  {
    "name": "pius momoh",
    "position": "payroll supv",
    "salary": 62665
  },
  {
    "name": "linda keenon",
    "position": "accounting tech",
    "salary": 62665
  },
  {
    "name": "lanae' godfrey",
    "position": "customer service representative",
    "salary": 62665
  },
  {
    "name": "durmoth jones",
    "position": "accountant",
    "salary": 62665
  },
  {
    "name": "mary kenton",
    "position": "lottery draw specialist",
    "salary": 62665
  },
  {
    "name": "jacqueline robinson",
    "position": "budget analyst",
    "salary": 62665
  },
  {
    "name": "monica bibbs",
    "position": "curriculum writer",
    "salary": 107835
  },
  {
    "name": "terry coward",
    "position": "staff assistant",
    "salary": 62665
  },
  {
    "name": "ann mcpherson",
    "position": "customer service representative",
    "salary": 62665
  },
  {
    "name": "rebecca knotts",
    "position": "budget analyst",
    "salary": 62665
  },
  {
    "name": "amy schmidt",
    "position": "trial attorney",
    "salary": 62650
  },
  {
    "name": "heidi oliver",
    "position": "assistant professor",
    "salary": 62577
  },
  {
    "name": "stella akpuaka",
    "position": "assistant professor",
    "salary": 62570
  },
  {
    "name": "ernest hamilton",
    "position": "assistant professor",
    "salary": 62519
  },
  {
    "name": "terrie briscoe",
    "position": "solid waste inspector",
    "salary": 62511
  },
  {
    "name": "lisa meadows",
    "position": "patient legal affairs coor",
    "salary": 62511
  },
  {
    "name": "danny hunter",
    "position": "correctional officer",
    "salary": 62505
  },
  {
    "name": "marguerite nelson",
    "position": "curriculum writer",
    "salary": 107835
  },
  {
    "name": "jesse saucedo",
    "position": "legislative assistant",
    "salary": 62500
  },
  {
    "name": "melissa millar",
    "position": "deputy legislative counsel",
    "salary": 62500
  },
  {
    "name": "matthew orlins",
    "position": "deputy legislative counsel",
    "salary": 62500
  },
  {
    "name": "kyle simmons",
    "position": "special assistant",
    "salary": 62499
  },
  {
    "name": "candace morgan",
    "position": "grants program manager",
    "salary": 62499
  },
  {
    "name": "charmaine callahan",
    "position": "contract specialist",
    "salary": 62499
  },
  {
    "name": "monica cobbs",
    "position": "contract specialist",
    "salary": 62499
  },
  {
    "name": "kimberly currie",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "wanda moncrieffe",
    "position": "hr specialist (emp benefits)",
    "salary": 62499
  },
  {
    "name": "kristine lyons",
    "position": "community outreach specialist",
    "salary": 62499
  },
  {
    "name": "georgeanna nixon",
    "position": "teacher",
    "salary": 107835
  },
  {
    "name": "paul dowell",
    "position": "management analyst",
    "salary": 62499
  },
  {
    "name": "erica willis",
    "position": "management liaison specialist",
    "salary": 62499
  },
  {
    "name": "latonya robinson",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "willie faconer",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "rebecca katz",
    "position": "administrative issuance specialist",
    "salary": 62499
  },
  {
    "name": "moshe adams",
    "position": "legislative & grants manager",
    "salary": 62499
  },
  {
    "name": "bernadette edwards",
    "position": "management analyst",
    "salary": 62499
  },
  {
    "name": "sean cook",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "benjamin cote",
    "position": "program specialist",
    "salary": 62499
  },
  {
    "name": "waiching wong",
    "position": "transportation management specialist",
    "salary": 62499
  },
  {
    "name": "jihad mahmud",
    "position": "attorney advisor",
    "salary": 107810
  },
  {
    "name": "shawntay warren",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "joyce tsepas",
    "position": "community planner",
    "salary": 62499
  },
  {
    "name": "mat thies",
    "position": "project coor",
    "salary": 62499
  },
  {
    "name": "caroline wills",
    "position": "hearing examiner",
    "salary": 62499
  },
  {
    "name": "vanessa weatherington",
    "position": "program development specialist",
    "salary": 62499
  },
  {
    "name": "yvette murray",
    "position": "human resources specialist",
    "salary": 62499
  },
  {
    "name": "tiwana christian",
    "position": "lead medicaid reimbursement sp",
    "salary": 62499
  },
  {
    "name": "kim nguyen",
    "position": "information technology specialist",
    "salary": 62499
  },
  {
    "name": "monique malone",
    "position": "early childhood clinical speci",
    "salary": 62499
  },
  {
    "name": "earl douglas",
    "position": "information technology specialist",
    "salary": 62499
  },
  {
    "name": "william carr",
    "position": "trans research tech dev",
    "salary": 107808
  },
  {
    "name": "tamarah baldwin",
    "position": "telecommunications equip opera",
    "salary": 62499
  },
  {
    "name": "jerica shackleford",
    "position": "grants program manager",
    "salary": 62499
  },
  {
    "name": "nora ieng",
    "position": "information technology specialist",
    "salary": 62499
  },
  {
    "name": "kira wilkinson",
    "position": "management analyst",
    "salary": 62499
  },
  {
    "name": "robert johnson",
    "position": "investigator",
    "salary": 62499
  },
  {
    "name": "cesar vence",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "howard etwaroo",
    "position": "support services specialist",
    "salary": 62499
  },
  {
    "name": "lottie morris",
    "position": "paralegal specialist",
    "salary": 62499
  },
  {
    "name": "michael mohamed",
    "position": "building management specialist",
    "salary": 62499
  },
  {
    "name": "lashawn gamble",
    "position": "investigator",
    "salary": 62499
  },
  {
    "name": "kenneth hall",
    "position": "information technology specialist",
    "salary": 107808
  },
  {
    "name": "damon smith",
    "position": "management analyst",
    "salary": 62499
  },
  {
    "name": "robert saunders",
    "position": "building management specialist",
    "salary": 62499
  },
  {
    "name": "emily monahan",
    "position": "educational therapy assistant",
    "salary": 62499
  },
  {
    "name": "brittiany broadwater",
    "position": "program development specialist",
    "salary": 62499
  },
  {
    "name": "myles cliff",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "arlene glanville",
    "position": "early intervention specialist",
    "salary": 62499
  },
  {
    "name": "tamera anderson",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "katherine cox",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "robin bessler",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "marsha proctor",
    "position": "management analyst",
    "salary": 62499
  },
  {
    "name": "mark mcdermott",
    "position": "program manager",
    "salary": 107808
  },
  {
    "name": "monica dohnji",
    "position": "hearing examiner",
    "salary": 62499
  },
  {
    "name": "keinde thomas",
    "position": "management analyst",
    "salary": 62499
  },
  {
    "name": "lesley long",
    "position": "program development specialist",
    "salary": 62499
  },
  {
    "name": "kevin jura",
    "position": "instructional systems specialist",
    "salary": 62499
  },
  {
    "name": "tanya mccargo",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "kathy williams",
    "position": "special assistant",
    "salary": 62499
  },
  {
    "name": "ayesha abbasi",
    "position": "legislative affairs specialist",
    "salary": 62499
  },
  {
    "name": "danna wimbush",
    "position": "investigator",
    "salary": 62499
  },
  {
    "name": "erin meadors",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "anthony saudek",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "anthony robinson",
    "position": "director",
    "salary": 154500
  },
  {
    "name": "david simmons",
    "position": "chief administrative law judge",
    "salary": 107794
  },
  {
    "name": "sharif shaarawy",
    "position": "manpower development specialist",
    "salary": 62499
  },
  {
    "name": "vonetta martin",
    "position": "business development specialis",
    "salary": 62499
  },
  {
    "name": "jacqueline williams",
    "position": "correctional treatment spec (r",
    "salary": 62499
  },
  {
    "name": "monica mcdonald",
    "position": "special assistant",
    "salary": 62499
  },
  {
    "name": "kenneth higgins",
    "position": "labor relations advisor",
    "salary": 62499
  },
  {
    "name": "zinaw tesemma",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "karey hall",
    "position": "investigator",
    "salary": 62499
  },
  {
    "name": "megan goulet",
    "position": "early intervention specialist",
    "salary": 62499
  },
  {
    "name": "keonie carter-simms",
    "position": "correctional treatment spec (r",
    "salary": 62499
  },
  {
    "name": "viola hiers",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "sharrieff nashid",
    "position": "security & safety specia",
    "salary": 107794
  },
  {
    "name": "maryann carroll",
    "position": "administrative officer",
    "salary": 62499
  },
  {
    "name": "lisa davis",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "sandra pinchback bent",
    "position": "management liaison specialist",
    "salary": 62499
  },
  {
    "name": "lawanda pelzer",
    "position": "grants management specialist",
    "salary": 62499
  },
  {
    "name": "han lee",
    "position": "policy analyst",
    "salary": 62499
  },
  {
    "name": "victoria glick",
    "position": "investigator",
    "salary": 62499
  },
  {
    "name": "stuart allan",
    "position": "program analyst",
    "salary": 62499
  },
  {
    "name": "jaime wojdowski",
    "position": "equal opportunity specialist",
    "salary": 62499
  },
  {
    "name": "tanya ford",
    "position": "public affairs specialist",
    "salary": 62499
  },
  {
    "name": "bettye marshall",
    "position": "contract services specialist",
    "salary": 62499
  },
  {
    "name": "kena cofield",
    "position": "meas anal & plan spec (h",
    "salary": 107794
  },
  {
    "name": "christine torain",
    "position": "executive assistant",
    "salary": 62499
  },
  {
    "name": "kimary harmon",
    "position": "public health analyst",
    "salary": 62499
  },
  {
    "name": "cynthia dumas",
    "position": "coordinato",
    "salary": 62463
  },
  {
    "name": "sean celestine",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "paul garner",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "christopher maddox",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "byron hoenig",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "renelle williams",
    "position": "coordinato",
    "salary": 62463
  },
  {
    "name": "charles sviland",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "antonia essig",
    "position": "project coordinator",
    "salary": 62463
  },
  {
    "name": "janella ingram",
    "position": "contract specialist",
    "salary": 107794
  },
  {
    "name": "meghan brown",
    "position": "coordinato",
    "salary": 62463
  },
  {
    "name": "toia brown",
    "position": "management & program analyst",
    "salary": 62463
  },
  {
    "name": "victor palmer",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "clarisse mendoza",
    "position": "project coordinator",
    "salary": 62463
  },
  {
    "name": "elizabeth perry",
    "position": "coordinato",
    "salary": 62463
  },
  {
    "name": "shenee henry",
    "position": "coordinato",
    "salary": 62463
  },
  {
    "name": "lacey maddrey",
    "position": "program analyst",
    "salary": 62463
  },
  {
    "name": "brian phillips",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "andrea driggs",
    "position": "program analyst",
    "salary": 62463
  },
  {
    "name": "robert martin",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "patricia grays",
    "position": "corporations program manager",
    "salary": 107794
  },
  {
    "name": "timothy dowd",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "nicole mccrea",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "christopher lancaster",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "michael harrison",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "karl conrad",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "andrew cappel",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "colin st clair",
    "position": "firefighter",
    "salary": 62463
  },
  {
    "name": "christopher smith",
    "position": "firefighter",
    "salary": 62463
  },
  {
    "name": "christopher birch",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "stephen batdorff",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "mark clabaugh",
    "position": "civil engineer",
    "salary": 107794
  },
  {
    "name": "kevin kline",
    "position": "firefighter",
    "salary": 62463
  },
  {
    "name": "charles dzanko",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "jan sipes",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "kelly byrne",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "james goldsmith",
    "position": "firefighter emt",
    "salary": 62463
  },
  {
    "name": "kathleen mckeon",
    "position": "project manager",
    "salary": 62439
  },
  {
    "name": "william quinn",
    "position": "workers compensation recipient",
    "salary": 62400
  },
  {
    "name": "franklin poole",
    "position": "contracts and procurement specialist",
    "salary": 62400
  },
  {
    "name": "shirley copeland",
    "position": "workers compensation recipient",
    "salary": 62400
  },
  {
    "name": "wilton braswell",
    "position": "workers compensation recipient",
    "salary": 62400
  },
  {
    "name": "soohyun koo",
    "position": "executive director",
    "salary": 107635
  },
  {
    "name": "kenyatta albeny",
    "position": "program analyst",
    "salary": 62400
  },
  {
    "name": "david gaston",
    "position": "coord stud outr ldrs dev",
    "salary": 62398
  },
  {
    "name": "wanda watkins-pitt",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "christopher barnes",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "cynthia lucas",
    "position": "lead correctional ofc",
    "salary": 62362
  },
  {
    "name": "thomas winfield",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "twan rhyne",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "nila ritenour",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "michael davis",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "daryl barnes",
    "position": "lead correctional ofc",
    "salary": 62362
  },
  {
    "name": "sharon lewis",
    "position": "program manager",
    "salary": 107631
  },
  {
    "name": "dexter allen",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "romie ledbetter",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "angela taylor",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "elizabeth caldwell",
    "position": "youth development representati",
    "salary": 62362
  },
  {
    "name": "edwin onyeiwu",
    "position": "youth development representati",
    "salary": 62362
  },
  {
    "name": "robert miller",
    "position": "youth development representati",
    "salary": 62362
  },
  {
    "name": "ambrose akinrimade",
    "position": "youth development representati",
    "salary": 62362
  },
  {
    "name": "lawrence goodwin",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "shelly wayns",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "yvonne perry",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "theresa donaldson",
    "position": "program manager",
    "salary": 107608
  },
  {
    "name": "keisa hill",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "tyrone jenkins",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "victoria nance",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "aaron blyther",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "mayra rodriguez",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "shuna terry",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "kimmara lee",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "tracie johnson",
    "position": "paramedic",
    "salary": 62362
  },
  {
    "name": "theodore agbara",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "leroy shand",
    "position": "lead correctional ofc",
    "salary": 62362
  },
  {
    "name": "mary devasia",
    "position": "project manager",
    "salary": 107594
  },
  {
    "name": "goldman kinsey",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "edward harrington",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "alvin ford",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "pamela chase",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "marie baysmore",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "karl white",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "ronald adams",
    "position": "correctional officer",
    "salary": 62362
  },
  {
    "name": "francia lanier",
    "position": "workers compensation recipient",
    "salary": 62297
  },
  {
    "name": "douglas ware",
    "position": "workers compensation recipient",
    "salary": 62296
  },
  {
    "name": "sharron shaw",
    "position": "workers compensation recipient",
    "salary": 62296
  },
  {
    "name": "jonathan kayne",
    "position": "dep dir portfolio management office",
    "salary": 154500
  },
  {
    "name": "susan nelson",
    "position": "9-1-1 coordinator",
    "salary": 107531
  },
  {
    "name": "deborah farrior padgett",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "felicia watson",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "kayode tomiye",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "bershell thomas",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "terrence mason",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "ericka martin",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "john murphy",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "sandra laurie",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "dennis lewis",
    "position": "youth development rep",
    "salary": 62258
  },
  {
    "name": "angela hemsley",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "james glymph",
    "position": "criminal invest",
    "salary": 107463
  },
  {
    "name": "catherine gardner",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "james wallace",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "kammy brown",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "william smith",
    "position": "cellblock supervisor",
    "salary": 62258
  },
  {
    "name": "francis ekeh",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "amanda barahona",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "illona harris-white",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "carmelita johnson",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "profula robinson",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "carolyn hawkins",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "donna pressley",
    "position": "principal",
    "salary": 107416
  },
  {
    "name": "nadine journiette",
    "position": "human resources advisor",
    "salary": 62258
  },
  {
    "name": "cecilia thomas",
    "position": "youth counselor",
    "salary": 62258
  },
  {
    "name": "ronald dieuveuil",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "jennifer gonzales",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "tonia johnson",
    "position": "social services rep",
    "salary": 62258
  },
  {
    "name": "stephanie litos",
    "position": "trial attorney",
    "salary": 62188
  },
  {
    "name": "patricia boulware",
    "position": "office manager",
    "salary": 62150
  },
  {
    "name": "gwendolyn davis",
    "position": "nurse educator",
    "salary": 62150
  },
  {
    "name": "beverly williams",
    "position": "nurse educator",
    "salary": 62150
  },
  {
    "name": "william hanff",
    "position": "assistant professor",
    "salary": 62095
  },
  {
    "name": "monica liang aguirre",
    "position": "principal",
    "salary": 107416
  },
  {
    "name": "randolph tobin",
    "position": "maintenance mechanic",
    "salary": 62067
  },
  {
    "name": "lovely thomas",
    "position": "retirement analyst/calculator",
    "salary": 62012
  },
  {
    "name": "joyce anderson",
    "position": "visiting assistant professor",
    "salary": 62000
  },
  {
    "name": "judi gold",
    "position": "constituent services specialist",
    "salary": 62000
  },
  {
    "name": "marcus allen",
    "position": "special assistant",
    "salary": 62000
  },
  {
    "name": "spencerita mullen",
    "position": "workers compensation recipient",
    "salary": 61880
  },
  {
    "name": "nelda cox",
    "position": "recreation therapist",
    "salary": 61880
  },
  {
    "name": "cheryl bolden",
    "position": "executive assistant",
    "salary": 61878
  },
  {
    "name": "brewster gray",
    "position": "information technology specialist",
    "salary": 61878
  },
  {
    "name": "robert tate",
    "position": "recreation specialist",
    "salary": 61878
  },
  {
    "name": "natalie gordon",
    "position": "principal",
    "salary": 107416
  },
  {
    "name": "nykia washington",
    "position": "professional dev specialist",
    "salary": 61878
  },
  {
    "name": "james gaston",
    "position": "grants program specialist",
    "salary": 61878
  },
  {
    "name": "veronica boyd",
    "position": "paralegal specialist",
    "salary": 61878
  },
  {
    "name": "james gately",
    "position": "fleet servicer",
    "salary": 61878
  },
  {
    "name": "lendia johnson",
    "position": "community outreach coor",
    "salary": 61878
  },
  {
    "name": "arnese dickens",
    "position": "utilization review specialist",
    "salary": 61878
  },
  {
    "name": "marja ponka carpenter",
    "position": "teacher",
    "salary": 61867
  },
  {
    "name": "joseph zarkauskas",
    "position": "fire investigator",
    "salary": 61809
  },
  {
    "name": "kevin wilmore",
    "position": "cellblock processing technicia",
    "salary": 61788
  },
  {
    "name": "fred thompson",
    "position": "lead legal instrum exam",
    "salary": 61788
  },
  {
    "name": "darrin slade",
    "position": "principal",
    "salary": 107416
  },
  {
    "name": "angela dupar",
    "position": "lead legal instrum exam",
    "salary": 61788
  },
  {
    "name": "kevin proctor",
    "position": "lead legal instrum exam",
    "salary": 61788
  },
  {
    "name": "judah friedman",
    "position": "lead legal instrum exam",
    "salary": 61788
  },
  {
    "name": "karen usher",
    "position": "cellblock processing technicia",
    "salary": 61788
  },
  {
    "name": "antoinette murray",
    "position": "cellblock processing technicia",
    "salary": 61788
  },
  {
    "name": "phyllis casey",
    "position": "cellblock processing tech",
    "salary": 61788
  },
  {
    "name": "juan carreras",
    "position": "cellblock processing tech",
    "salary": 61788
  },
  {
    "name": "agnes jackson",
    "position": "cellblock processing technicia",
    "salary": 61788
  },
  {
    "name": "stalk curry",
    "position": "cellblock processing tech",
    "salary": 61788
  },
  {
    "name": "irvine carter",
    "position": "cellblock processing tech",
    "salary": 61788
  },
  {
    "name": "melissa kim",
    "position": "principal",
    "salary": 107416
  },
  {
    "name": "joyce lewis",
    "position": "cellblock processing technicia",
    "salary": 61788
  },
  {
    "name": "lisi ferguson",
    "position": "cellblock processing tech",
    "salary": 61788
  },
  {
    "name": "denise thompson",
    "position": "lead legal instrum exam",
    "salary": 61788
  },
  {
    "name": "joyce eggleston",
    "position": "bldg & grds maint wkr supv",
    "salary": 61776
  },
  {
    "name": "edward howell",
    "position": "boiler plant operator",
    "salary": 61776
  },
  {
    "name": "earl kennedy",
    "position": "in school suspension coord",
    "salary": 61732
  },
  {
    "name": "claudia nichols",
    "position": "student affairs coord",
    "salary": 61732
  },
  {
    "name": "wesley person",
    "position": "transition specialist",
    "salary": 61732
  },
  {
    "name": "mary snively",
    "position": "research specialist",
    "salary": 61732
  },
  {
    "name": "stephanie davis",
    "position": "analyst",
    "salary": 61732
  },
  {
    "name": "dawn clemens",
    "position": "principal",
    "salary": 107416
  },
  {
    "name": "naomi watson",
    "position": "program specialist",
    "salary": 61732
  },
  {
    "name": "marionette german",
    "position": "research specialist",
    "salary": 61732
  },
  {
    "name": "sherry roberts",
    "position": "administrative service specialist",
    "salary": 61702
  },
  {
    "name": "kevin valentine",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sarah snapko",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "benjamin mallory",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "mervin snead",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "gregory mccormick",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "john mcelhenny",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "craig solgat",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kipling ross",
    "position": "assoc dean",
    "salary": 107331
  },
  {
    "name": "jason newman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "william mcgovern",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "clinton turner",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael pokladnik",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kiernan speight",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael tucker",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "javon voglezon",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "baxter mcgrew",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "philip tridico",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "craig mayor",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sonja green-porter",
    "position": "budget officer",
    "salary": 107262
  },
  {
    "name": "jonathan lafrance",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "oliver lake",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james little",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "matthew romeo",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "amanda vamos",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "evelyn rivera",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ginette leveque",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "reinaldo otero-camacho",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "william ware",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "maximino ruiz",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kwame brown",
    "position": "chairman",
    "salary": 190000
  },
  {
    "name": "aimee occhetti",
    "position": "vice president, gov affairs",
    "salary": 154429
  },
  {
    "name": "tanya hatchel-thomas",
    "position": "financial systems analyst",
    "salary": 107262
  },
  {
    "name": "kimberly mchugh",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "alexis sakulich",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "marc washington",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "wilhelm lieto",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "philemon samuels",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "charles viggiani",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "hung le",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "bobby smith",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "justin phillips",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "freddy pujols",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "narayana ayyagari",
    "position": "information technology specialist",
    "salary": 107262
  },
  {
    "name": "rudolph tyson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "alex mateo",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "robert pryor",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael tynes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "marinos marinos",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "travis weston",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "enrique simmons",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "edward smith",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "susan mayer",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "daniel smith",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "tracy medley",
    "position": "budget officer",
    "salary": 107262
  },
  {
    "name": "andre weston",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kevin rodriguez",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "se yoon",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ryan small",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christopher stokes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "tiffany mckoy",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "richard mcleod",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "derek starliper",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "justina mcneil",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "vicki steen",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "hayden bernard",
    "position": "budget officer",
    "salary": 107262
  },
  {
    "name": "larry melton",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "justin markiewicz",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "marcus smith",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "derick newton",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "melissa stokes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "tiffany wiggins",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "andrew spence",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "alfonso matos",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "timothy silver",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "sean marenkovic",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "pamela westray",
    "position": "deputy director",
    "salary": 107262
  },
  {
    "name": "steven stewart",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "edwin thompson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "pedro pena",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christopher woody",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jeffrey zumwalt",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "stacy mucci",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "damon wilson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james payne",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "david wilkerson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "brian peake",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sylvia magby",
    "position": "returns processing",
    "salary": 107262
  },
  {
    "name": "jovan mock",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "samuel modlin",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "carline modl",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "gabriel nunez",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "joseph quinlan",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "warren sanders",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "georgette littlejohn",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jacqueline molina",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "robert wingate-robinson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "lonnie mays",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christine mukolwe",
    "position": "budget dir",
    "salary": 107262
  },
  {
    "name": "cory bines",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james monahan",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ricky winston",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "patrick thompson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "eugene witherspoon",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "caleb willis",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "oscar pedrozo",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "roderick saunders",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "miranda tobin",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ira winston",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "david facundo",
    "position": "budget officer",
    "salary": 107262
  },
  {
    "name": "carolyn mische-hoeges",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "john thurman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ivens thermidor",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "octavius moore",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "james petty",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "amy oliva",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "raymond malengo",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "dominique tyson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael shipman-meyer",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "carolyn totaro",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "abukar abdirahman",
    "position": "budget officer",
    "salary": 107262
  },
  {
    "name": "kimberly selby",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "laura layport",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jerry reyes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael walker",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "clarence major",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "joseph knapp",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "desiree walker",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jody o'leary",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "george robison",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "matthew krimmel",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "reginald bookard",
    "position": "budget manager",
    "salary": 107262
  },
  {
    "name": "demar rodgers",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kevin kirby",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "scott recker",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "bryan yeary",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "shantelle long",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "tavon watson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "andrew way",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "james love",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "anita schofield",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "prince malcolm",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "valerie epps",
    "position": "vp student affairs",
    "salary": 154429
  },
  {
    "name": "rehva jones",
    "position": "chief management operations",
    "salary": 107262
  },
  {
    "name": "wilson liriano",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "aaron makanoff",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "anderson liriano",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "lori oxenreider-murphy",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jeffrey weber",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "travis maguire",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "thomas sheehan",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "lee shefman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james o'bannon",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "gregory lynagh",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "david franklin",
    "position": "budget manager",
    "salary": 107262
  },
  {
    "name": "amir abdu",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "byron jenkins",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael henderson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "fern francis",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "elmer hebron",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "michael harrison",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "che allen",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "larry garrett",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "brian brown",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "joel charles",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "daryl staats",
    "position": "agency fiscal officer",
    "salary": 107262
  },
  {
    "name": "jeffrey brown",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "matthew jones",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "melanie gordon",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "warren alexander",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "natasha jones",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "patrick brescia",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "david becton",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "jean gautreaux",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "stephen davis",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sean kenney",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "rochelle wilson",
    "position": "director",
    "salary": 107151
  },
  {
    "name": "arnold decastro",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "valkyrie barnes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christopher kenneth",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "william hamm",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "teresa henley-wingo",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jeremy bank",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "von galery",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "liliana acebal",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jose freeman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "marc boucheron",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "john harris",
    "position": "executive director",
    "salary": 107151
  },
  {
    "name": "daniel hemmer",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "harold brown",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jeffrey jones",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "edward cooley",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "jeffrey janczyk curran",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kevin harris",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "victoria gipson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kelwin ford",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jose jaquez",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kevin glenn",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "amoretta morris",
    "position": "director",
    "salary": 107151
  },
  {
    "name": "christopher cartwright",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ruben agosto",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christopher cappello",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james chatmon",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "armstrong adams",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "herbert gilbert",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "glenn giardino",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "brian adams",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "richard mazloom",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "brian hungarter",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "rachel petty",
    "position": "professor",
    "salary": 107070
  },
  {
    "name": "darren haskis",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "phillip henderson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "robert arroyo",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "joe henderson",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "michael jones",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sean hickman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "lemar jefferson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "peter frenzel",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "tabitha alberti",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sidney catlett",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "leigh letichevsky",
    "position": "medical legal investigator",
    "salary": 107004
  },
  {
    "name": "david boarman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "charles graham",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "andrew gamm",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "robert chester",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "daniel chodak",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "donald harvey",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kiana hawkins",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "adam johnston",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "charles culver",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kori heyward",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "emily litt",
    "position": "chief of staff",
    "salary": 107000
  },
  {
    "name": "joseph austin",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "wallace bradford",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "han kim",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "benjamin finck",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "leonard campbell",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "nicole ha",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kathryn fitzgerald",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "emmanuel hardy",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "debajyoti bhattacharjee",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "vernon jones",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "stuart keeler",
    "position": "contract specialist",
    "salary": 107000
  },
  {
    "name": "cathelyn alvarez",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kevin blackstone",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "erica grossman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james bovino",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "benjamin firehock",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "dustyn hugee",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kevin smith",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "glenn smith",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "steven jackson",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "daniel dyn",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "elizabeth kane",
    "position": "chairperson",
    "salary": 154366
  },
  {
    "name": "nicole hanley",
    "position": "innovative family support serv",
    "salary": 107000
  },
  {
    "name": "hope mathis",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "alfonso mcallister",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "charles anderson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "arthur kimball",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sherman anderson",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael daee",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "sarah buc",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "duriel barnes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "adam floyd",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kalihah barber",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "udeozo ogbue",
    "position": "gen eng (public util)",
    "salary": 107000
  },
  {
    "name": "lonnie curwen",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jose jimenez",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "juan caceres",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "rickey bailey",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "abraham benmoshe",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "michael callahan",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christopher dorsey",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "madeline collado",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "joanne ivy",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "timothy ignas",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "forestine porter",
    "position": "special assistant",
    "salary": 106921
  },
  {
    "name": "peter eschinger",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jeffrey beaudin",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "kiriaki avramidis",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "marvin gray",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "ryan evans",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "katrina humphries",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "philippe jerome",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "wilmer juarez",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "travis coley",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "alfred holmes",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "stephanie fitzgerald",
    "position": "information technology specialist",
    "salary": 106921
  },
  {
    "name": "mario guarin",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "michael ferris",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "arturo balcazar",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "alfonza kelly",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "brian hollan",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jeffrey greene",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jacques colkley",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "dominic ihejirika",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "james kearney",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "takia coley",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "christopher marshall",
    "position": "program analyst",
    "salary": 106921
  },
  {
    "name": "tonia dunn",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "laini evans",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "johnnie barnes",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "harlan hogue",
    "position": "police officer",
    "salary": 61698
  },
  {
    "name": "irving bolton",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "patricia earp",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "john kellman",
    "position": "officer",
    "salary": 61698
  },
  {
    "name": "jennifer jamieson",
    "position": "officer",
    "salary": 61693
  },
  {
    "name": "shuntae brown",
    "position": "officer",
    "salary": 61693
  },
  {
    "name": "nathan foster",
    "position": "officer",
    "salary": 61693
  },
  {
    "name": "john raye",
    "position": "telecommications specialist",
    "salary": 106921
  },
  {
    "name": "teresa washington",
    "position": "correctional treatment specialist",
    "salary": 61667
  },
  {
    "name": "vanessa garner",
    "position": "social services rep",
    "salary": 61665
  },
  {
    "name": "helen odunnaike",
    "position": "social services rep",
    "salary": 61665
  },
  {
    "name": "emma wilks",
    "position": "community outreach specialist",
    "salary": 61665
  },
  {
    "name": "jermaine fox",
    "position": "cellblock supervisor",
    "salary": 61665
  },
  {
    "name": "deborah anderson",
    "position": "social services rep",
    "salary": 61665
  },
  {
    "name": "yvonne branch-devore",
    "position": "investigator",
    "salary": 61657
  },
  {
    "name": "mary johnson",
    "position": "retirement examiner",
    "salary": 61657
  },
  {
    "name": "amparo nunez",
    "position": "support enforcement specialist",
    "salary": 61657
  },
  {
    "name": "veronica earl",
    "position": "assessment program coordinator",
    "salary": 61657
  },
  {
    "name": "kerthalia peavely",
    "position": "criminal investigator",
    "salary": 106921
  },
  {
    "name": "francamaria decampo",
    "position": "assessment program specialist",
    "salary": 61657
  },
  {
    "name": "nora stokholm",
    "position": "social insurance specialist",
    "salary": 61657
  },
  {
    "name": "duane davis",
    "position": "revenue officer",
    "salary": 61657
  },
  {
    "name": "michael negussie",
    "position": "energy program specialist",
    "salary": 61657
  },
  {
    "name": "debbie allen",
    "position": "revenue officer",
    "salary": 61657
  },
  {
    "name": "janice stancil",
    "position": "retirement examiner",
    "salary": 61657
  },
  {
    "name": "george becker",
    "position": "paralegal specialist",
    "salary": 61657
  },
  {
    "name": "ogbazgi mehari",
    "position": "energy program specialist",
    "salary": 61657
  },
  {
    "name": "michelle washington",
    "position": "control & report specialist",
    "salary": 61657
  },
  {
    "name": "robin houser",
    "position": "paralegal specialist",
    "salary": 61657
  },
  {
    "name": "stephen cochran",
    "position": "community planner",
    "salary": 106921
  },
  {
    "name": "pita-gaye marshall",
    "position": "revenue officer",
    "salary": 61657
  },
  {
    "name": "edgar whiten",
    "position": "lead support srvs specialist",
    "salary": 61657
  },
  {
    "name": "rebecca clark",
    "position": "revenue officer",
    "salary": 61657
  },
  {
    "name": "delores fields",
    "position": "staff assistant",
    "salary": 61657
  },
  {
    "name": "emmanuel thompkins",
    "position": "revenue officer",
    "salary": 61657
  },
  {
    "name": "meghan snyder",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "la lynch",
    "position": "paralegal specialist",
    "salary": 61657
  },
  {
    "name": "bianca roberts",
    "position": "social insurance specialist",
    "salary": 61657
  },
  {
    "name": "julius elui",
    "position": "civil engineer",
    "salary": 61657
  },
  {
    "name": "charles manu",
    "position": "service coordinator",
    "salary": 61657
  },
  {
    "name": "simon rennie",
    "position": "civil engineer",
    "salary": 106921
  },
  {
    "name": "theodore shell",
    "position": "service coordinator",
    "salary": 61657
  },
  {
    "name": "randy ouzts",
    "position": "property disposal specialist",
    "salary": 61657
  },
  {
    "name": "damon johnson",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "joy dozier",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "larry woodland",
    "position": "vocational development special",
    "salary": 61657
  },
  {
    "name": "jennifer forde",
    "position": "social insurance specialist",
    "salary": 61657
  },
  {
    "name": "cassandra ball",
    "position": "revenue officer",
    "salary": 61657
  },
  {
    "name": "nathaniel turner",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "romanus njepu",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "eric davis",
    "position": "case manager",
    "salary": 61657
  },
  {
    "name": "rasheed shobayo",
    "position": "information technology specialist",
    "salary": 106921
  },
  {
    "name": "trina roberts",
    "position": "telecommunications equip opera",
    "salary": 61657
  },
  {
    "name": "evelyn maye",
    "position": "transition specialist",
    "salary": 61657
  },
  {
    "name": "christopher nnah",
    "position": "service coordinator",
    "salary": 61657
  },
  {
    "name": "stephanie knight",
    "position": "program specialist",
    "salary": 61657
  },
  {
    "name": "sureta morgan-butler",
    "position": "social insurance specialist",
    "salary": 61657
  },
  {
    "name": "susan mayo",
    "position": "staff assistant",
    "salary": 61657
  },
  {
    "name": "tracey taylor",
    "position": "planning and resource allocati",
    "salary": 61657
  },
  {
    "name": "eric thadey",
    "position": "fisheries biologist",
    "salary": 61657
  },
  {
    "name": "richard turner",
    "position": "construction representative",
    "salary": 61657
  },
  {
    "name": "elena digiovanna",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "saul kolansky",
    "position": "medical officer (psychiatry)",
    "salary": 154076
  },
  {
    "name": "ralph cyrus",
    "position": "gen engineer",
    "salary": 106921
  },
  {
    "name": "ruth gichangah",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "laurie miner",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "whitney bellinger",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "teresa gibbs",
    "position": "mental health specialist",
    "salary": 61657
  },
  {
    "name": "dalton beckles",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "calvin young",
    "position": "mental health specialist",
    "salary": 61657
  },
  {
    "name": "kamalla mccain",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "bridgett mccain",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "monica harris",
    "position": "intake hotline worker",
    "salary": 61657
  },
  {
    "name": "ian richards",
    "position": "telecomms specialist",
    "salary": 61657
  },
  {
    "name": "andrew beaton",
    "position": "information & privacy officer",
    "salary": 106921
  },
  {
    "name": "elizabeth valvo",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "elise hartung",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "gerald tolson",
    "position": "support services specialist",
    "salary": 61657
  },
  {
    "name": "carla ware-easterling",
    "position": "mental health specialist",
    "salary": 61657
  },
  {
    "name": "carlos johnston",
    "position": "training coordinator",
    "salary": 61657
  },
  {
    "name": "jonathan epps",
    "position": "support services specialist",
    "salary": 61657
  },
  {
    "name": "emily dang",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "patricia hawkins",
    "position": "program analyst",
    "salary": 61657
  },
  {
    "name": "laverne tate",
    "position": "uc claims examiner",
    "salary": 61657
  },
  {
    "name": "georgina irondi",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "malcolm harper",
    "position": "program analyst",
    "salary": 106921
  },
  {
    "name": "katherine witherspoon",
    "position": "property control and disposal",
    "salary": 61657
  },
  {
    "name": "douglas stinson",
    "position": "insurance operations specialist",
    "salary": 61657
  },
  {
    "name": "jennifer skinner",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "yvette loynes",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "samira alikadiyeva",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "michele mickelsen",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "arnicia jackson",
    "position": "inventory & space mgmt",
    "salary": 61657
  },
  {
    "name": "kelly miller",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "rebecca stevenson",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "claire west",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "yohannes mariam",
    "position": "economist",
    "salary": 106921
  },
  {
    "name": "carla roane",
    "position": "contract specialist",
    "salary": 61657
  },
  {
    "name": "betty jolly harper",
    "position": "licensing specialist",
    "salary": 61657
  },
  {
    "name": "rhonda flood",
    "position": "subsidy eligibility specialist",
    "salary": 61657
  },
  {
    "name": "lakeri sartin",
    "position": "resource development specialis",
    "salary": 61657
  },
  {
    "name": "doreen carr",
    "position": "program support assistant",
    "salary": 61657
  },
  {
    "name": "toshiko barton",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "kim walk",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "lana craven",
    "position": "program analyst",
    "salary": 61657
  },
  {
    "name": "franchelle bryant",
    "position": "information technology specialist",
    "salary": 61657
  },
  {
    "name": "yvette brown-sanders",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "dwight reeves",
    "position": "property manager specialist",
    "salary": 106921
  },
  {
    "name": "bonita austin",
    "position": "social worker",
    "salary": 61657
  },
  {
    "name": "tracey robinson",
    "position": "banking licensing specialist",
    "salary": 61657
  },
  {
    "name": "barry sydnor",
    "position": "information technology specialist",
    "salary": 61657
  },
  {
    "name": "sheku koroma",
    "position": "unemployment tax examiner",
    "salary": 61657
  },
  {
    "name": "brenda ten eyck",
    "position": "uc claims examiner",
    "salary": 61657
  },
  {
    "name": "pius akinola",
    "position": "unemployment tax examiner",
    "salary": 61657
  },
  {
    "name": "roman santillan",
    "position": "librarian",
    "salary": 61657
  },
  {
    "name": "harold lassiter",
    "position": "manpower development specialist",
    "salary": 61657
  },
  {
    "name": "gloria davis",
    "position": "property control and disposal",
    "salary": 61657
  },
  {
    "name": "deborah johnson",
    "position": "unemploy comp claims examiner",
    "salary": 61657
  },
  {
    "name": "jeanette fields",
    "position": "management analyst",
    "salary": 106921
  },
  {
    "name": "william mosby",
    "position": "code compl specialist",
    "salary": 61657
  },
  {
    "name": "alexander reefer",
    "position": "training instructor",
    "salary": 61657
  },
  {
    "name": "engidawork abebe",
    "position": "unemployment tax examiner",
    "salary": 61657
  },
  {
    "name": "kevin burrell",
    "position": "workforce development specialist",
    "salary": 61657
  },
  {
    "name": "william harris",
    "position": "manpower development specialist",
    "salary": 61657
  },
  {
    "name": "brenda thompson",
    "position": "uc claims examiner",
    "salary": 61657
  },
  {
    "name": "jean washington",
    "position": "staff assistant",
    "salary": 61657
  },
  {
    "name": "victoria smith",
    "position": "it spec (data mgmt)",
    "salary": 61657
  },
  {
    "name": "francine thomas",
    "position": "information technology specialist",
    "salary": 61657
  },
  {
    "name": "nikeesha webb",
    "position": "compliance monitor",
    "salary": 61657
  },
  {
    "name": "karen tolson",
    "position": "director television programing",
    "salary": 106893
  },
  {
    "name": "truchel proctor",
    "position": "supply management specialist",
    "salary": 61657
  },
  {
    "name": "charles sayre",
    "position": "training instructor",
    "salary": 61657
  },
  {
    "name": "james taylor",
    "position": "telecommunications equip opera",
    "salary": 61657
  },
  {
    "name": "sherita giles",
    "position": "labor economist",
    "salary": 61657
  },
  {
    "name": "sybil felton",
    "position": "uc claims examiner",
    "salary": 61657
  },
  {
    "name": "mary parker",
    "position": "manpower development specialist",
    "salary": 61657
  },
  {
    "name": "elizabeth jackson",
    "position": "information technology specialist",
    "salary": 61657
  },
  {
    "name": "terrence sheppard",
    "position": "investigator",
    "salary": 61657
  },
  {
    "name": "tawanna bradley",
    "position": "manpower development specialist",
    "salary": 61657
  },
  {
    "name": "tiffany magruder",
    "position": "comb code comp specialist",
    "salary": 61657
  },
  {
    "name": "mary sisk",
    "position": "nurse coordinator",
    "salary": 106883
  },
  {
    "name": "andrea chichester",
    "position": "program analyst",
    "salary": 61657
  },
  {
    "name": "darrel corradini",
    "position": "unemployment tax examiner",
    "salary": 61657
  },
  {
    "name": "linda rogers",
    "position": "staff assistant",
    "salary": 61657
  },
  {
    "name": "vernon lindsay",
    "position": "support services specialist",
    "salary": 61657
  },
  {
    "name": "roland carroll",
    "position": "neighbor stab specialist",
    "salary": 61657
  },
  {
    "name": "deborah robertson",
    "position": "staff assistant",
    "salary": 61657
  },
  {
    "name": "jason moore",
    "position": "librarian",
    "salary": 61657
  },
  {
    "name": "linda mckinney",
    "position": "unemploy comp claims examiner",
    "salary": 61657
  },
  {
    "name": "deloris lassiter",
    "position": "comb code comp specialist",
    "salary": 61657
  },
  {
    "name": "benjamin merrion",
    "position": "educational specialist",
    "salary": 61657
  },
  {
    "name": "sharon cooke",
    "position": "public affairs specialist",
    "salary": 106872
  },
  {
    "name": "juana wright",
    "position": "support enforcement specialist",
    "salary": 61657
  },
  {
    "name": "clyde carrington",
    "position": "workers comp claims examiner",
    "salary": 61657
  },
  {
    "name": "helen hooks scott",
    "position": "program suppor",
    "salary": 61657
  },
  {
    "name": "cynthia hunter",
    "position": "manpower development specialist",
    "salary": 61657
  },
  {
    "name": "diane kidd",
    "position": "uniform crime reporting coord",
    "salary": 61657
  },
  {
    "name": "dena davis",
    "position": "vocational rehabilitation specialist",
    "salary": 61657
  },
  {
    "name": "sonya briscoe",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "lacrecia fields",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "charlene barrett",
    "position": "public health tecnician",
    "salary": 61657
  },
  {
    "name": "morris koffa",
    "position": "environmental engineer",
    "salary": 61657
  },
  {
    "name": "elwalid sidahmed",
    "position": "telecommunications equip opera",
    "salary": 106872
  },
  {
    "name": "shirley burnett",
    "position": "aftercare worker",
    "salary": 61657
  },
  {
    "name": "mary koehler",
    "position": "program analyst",
    "salary": 61657
  },
  {
    "name": "pamela wilson",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "pamela hardy",
    "position": "program analyst",
    "salary": 61657
  },
  {
    "name": "yasser gamil",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "david hill",
    "position": "construction representative",
    "salary": 61657
  },
  {
    "name": "larry warren",
    "position": "mngmt and program analyst",
    "salary": 61657
  },
  {
    "name": "william fesson",
    "position": "energy program specialist",
    "salary": 61657
  },
  {
    "name": "randolph johnson",
    "position": "vocational rehabilitation specialist",
    "salary": 61657
  },
  {
    "name": "lisa white",
    "position": "compliance monitor",
    "salary": 61657
  },
  {
    "name": "mannone butler",
    "position": "executive director",
    "salary": 154000
  },
  {
    "name": "francesco pacifico",
    "position": "street & bridge maint program manager",
    "salary": 106816
  },
  {
    "name": "thomas young",
    "position": "case manager",
    "salary": 61657
  },
  {
    "name": "geraldine hester",
    "position": "unemployment tax examiner",
    "salary": 61657
  },
  {
    "name": "donna layton",
    "position": "program support assistant",
    "salary": 61657
  },
  {
    "name": "robert lee",
    "position": "construction representative",
    "salary": 61657
  },
  {
    "name": "haywood richardson",
    "position": "construction representative",
    "salary": 61657
  },
  {
    "name": "bruke siraga",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "janice rankins",
    "position": "recreation specialist",
    "salary": 61657
  },
  {
    "name": "shavone lattimore-dunn",
    "position": "engineering technician",
    "salary": 61657
  },
  {
    "name": "hyman caldwell",
    "position": "training specialist",
    "salary": 61657
  },
  {
    "name": "ruth wiley",
    "position": "transition specialist",
    "salary": 61657
  },
  {
    "name": "anjani jujjavarapu",
    "position": "information technology specialist",
    "salary": 106798
  },
  {
    "name": "barbara jones",
    "position": "social services rep",
    "salary": 61657
  },
  {
    "name": "ethan ware",
    "position": "program specialist",
    "salary": 61657
  },
  {
    "name": "nasreen parvin",
    "position": "health physicist",
    "salary": 61657
  },
  {
    "name": "yvockeea monteiro",
    "position": "program specialist",
    "salary": 61657
  },
  {
    "name": "marchelle huggins white",
    "position": "program analyst",
    "salary": 61657
  },
  {
    "name": "janice harkins",
    "position": "vocational development special",
    "salary": 61657
  },
  {
    "name": "mary coley",
    "position": "program support assistant",
    "salary": 61657
  },
  {
    "name": "kenneth gause",
    "position": "reimbursement specialist",
    "salary": 61657
  },
  {
    "name": "habieba israel",
    "position": "energy program specialist",
    "salary": 61657
  },
  {
    "name": "cassandra allen",
    "position": "social insurance specialist",
    "salary": 61657
  },
  {
    "name": "santosh pradhan",
    "position": "it spec (data management)",
    "salary": 106798
  },
  {
    "name": "denise bradley",
    "position": "program specialist",
    "salary": 61657
  },
  {
    "name": "grace brewer",
    "position": "contract specialist",
    "salary": 61657
  },
  {
    "name": "jason brown",
    "position": "public health analyst",
    "salary": 61657
  },
  {
    "name": "phillice jackson-spencer",
    "position": "management analyst",
    "salary": 61657
  },
  {
    "name": "elbridge james",
    "position": "program specialist",
    "salary": 61657
  },
  {
    "name": "glen taylor",
    "position": "chemist",
    "salary": 61657
  },
  {
    "name": "larry johnson",
    "position": "investigator",
    "salary": 61657
  },
  {
    "name": "gregory foy",
    "position": "staff assistant",
    "salary": 61657
  },
  {
    "name": "joyce perrin",
    "position": "investigator",
    "salary": 61651
  },
  {
    "name": "alishia hicks",
    "position": "disbursing assistant",
    "salary": 61640
  },
  {
    "name": "john watts",
    "position": "information technology specialist",
    "salary": 106798
  },
  {
    "name": "darenda brown",
    "position": "youth development rep",
    "salary": 61595
  },
  {
    "name": "miguel matos",
    "position": "maintenance mechanic",
    "salary": 61589
  },
  {
    "name": "charlie mckie",
    "position": "pipefitter",
    "salary": 61589
  },
  {
    "name": "frankie mattocks",
    "position": "maintenance mechanic",
    "salary": 61589
  },
  {
    "name": "willie jones",
    "position": "boiler plant equip mechanic",
    "salary": 61589
  },
  {
    "name": "jerome jimason",
    "position": "maintenance mechanic",
    "salary": 61589
  },
  {
    "name": "thomas sines",
    "position": "maintenance mechanic",
    "salary": 61589
  },
  {
    "name": "earl alston",
    "position": "boiler plant equip mechanic",
    "salary": 61589
  },
  {
    "name": "tanya cooper",
    "position": "instructor, jrotc",
    "salary": 61588
  },
  {
    "name": "gregory baucum",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "cynthia smallwood",
    "position": "information technology specialist",
    "salary": 106798
  },
  {
    "name": "david pylar",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "joseph mosley",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "teo williams",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "william rose",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "brian thrasher",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "duane reeder",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "david palmer",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "justin allen",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "brian godfrey",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "paul sellers",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "tai yeh",
    "position": "information technology specialist",
    "salary": 106798
  },
  {
    "name": "michael deems",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "ronald hines",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "dennis mills",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "bert oudshoorn",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "kevin devine",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "david dennis",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "francisco iscoa",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "harry saval",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "bryan worner",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "kenneth harrison",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "timothy ames",
    "position": "information technology specialist",
    "salary": 106798
  },
  {
    "name": "alex graham",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "kenneth humphries",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "charles finamore",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "james byers",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "antwan jordan",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "daniel smith",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "christopher adams",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "thomas carroll",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "shanita johnson",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "jayme heflin",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "keith kaye",
    "position": "information technology specialist",
    "salary": 106781
  },
  {
    "name": "andrew collins",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "walter green",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "thomas busl",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "heath johnson",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "patrick carey",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "henry faunce",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "steven eichholz",
    "position": "firefighter tech",
    "salary": 61579
  },
  {
    "name": "kelvin vincent",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "brian ladd",
    "position": "firefighter vice tech",
    "salary": 61579
  },
  {
    "name": "yvonne brockenberry",
    "position": "project assistant",
    "salary": 61543
  },
  {
    "name": "natalie jones",
    "position": "emergency transportation proje",
    "salary": 106615
  },
  {
    "name": "yasmin morais",
    "position": "librarian (cataloging)",
    "salary": 61543
  },
  {
    "name": "joyce holloway",
    "position": "special projects coordinator",
    "salary": 61543
  },
  {
    "name": "olaniran atchade",
    "position": "comp specialist",
    "salary": 61543
  },
  {
    "name": "yolanda gibson",
    "position": "acting director",
    "salary": 61540
  },
  {
    "name": "rutheven williams",
    "position": "administrative officer",
    "salary": 61462
  },
  {
    "name": "otis grandson",
    "position": "administrative officer",
    "salary": 61462
  },
  {
    "name": "curtis wise",
    "position": "workers compensation recipient",
    "salary": 61374
  },
  {
    "name": "shirley harris",
    "position": "medical technicianologist",
    "salary": 61301
  },
  {
    "name": "neng fang",
    "position": "sanitarian bil",
    "salary": 61301
  },
  {
    "name": "henderson griffin",
    "position": "correctional officer",
    "salary": 61273
  },
  {
    "name": "gillian myers",
    "position": "training officer",
    "salary": 106615
  },
  {
    "name": "damion jones",
    "position": "program analyst",
    "salary": 61258
  },
  {
    "name": "daniel soodjinda",
    "position": "assistant professor",
    "salary": 61241
  },
  {
    "name": "charley jones-stancil",
    "position": "dispatcher",
    "salary": 61237
  },
  {
    "name": "theodosia tyson",
    "position": "dispatcher",
    "salary": 61237
  },
  {
    "name": "anthony richardson",
    "position": "dispatcher",
    "salary": 61237
  },
  {
    "name": "olusola oguntala",
    "position": "pyschiatric nurse",
    "salary": 61208
  },
  {
    "name": "chaka curtis",
    "position": "registered nurse",
    "salary": 61208
  },
  {
    "name": "nigel greaves",
    "position": "business manager",
    "salary": 61196
  },
  {
    "name": "dandy steward",
    "position": "business manager",
    "salary": 61196
  },
  {
    "name": "vanessa bridgeforth",
    "position": "business manager",
    "salary": 61196
  },
  {
    "name": "ellen efros",
    "position": "attorney advisor",
    "salary": 153900
  },
  {
    "name": "darlene lesesne horton",
    "position": "data systems manager",
    "salary": 106615
  },
  {
    "name": "alfred jackson",
    "position": "business manager",
    "salary": 61196
  },
  {
    "name": "elease mccants",
    "position": "business manager",
    "salary": 61196
  },
  {
    "name": "alexis richburg",
    "position": "business manager",
    "salary": 61196
  },
  {
    "name": "bonnie rivers",
    "position": "executive assistant",
    "salary": 61182
  },
  {
    "name": "cotina lane",
    "position": "research associate",
    "salary": 61141
  },
  {
    "name": "michele walker",
    "position": "assistant professor",
    "salary": 61000
  },
  {
    "name": "ellen sharp",
    "position": "customer service representative",
    "salary": 60976
  },
  {
    "name": "consuella green",
    "position": "human resources coordinator",
    "salary": 60976
  },
  {
    "name": "magdalena hodgson",
    "position": "accountant",
    "salary": 60976
  },
  {
    "name": "duane shie",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "vanessa williams campbell",
    "position": "social work program manager",
    "salary": 106615
  },
  {
    "name": "lesa horton",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "robyn hudson",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "angela henderson",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "luther buck",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "judith williams smith",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "david linkous",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "debra robinson-foster",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "mia thompson",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "cicely sharpe",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "darien green",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "mcclinton jackson",
    "position": "project manager",
    "salary": 106540
  },
  {
    "name": "john griffin",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "george musgrove",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "barbara harvey",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "james shaw",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "alexander mboukou",
    "position": "visiting assistant professor",
    "salary": 60961
  },
  {
    "name": "russell goward",
    "position": "assistant professor",
    "salary": 60961
  },
  {
    "name": "sheila jackson",
    "position": "accounts payable tech",
    "salary": 60915
  },
  {
    "name": "sophia williams",
    "position": "financial srvs tech",
    "salary": 60915
  },
  {
    "name": "mercy moore",
    "position": "legal instruments examiner",
    "salary": 60915
  },
  {
    "name": "donald west",
    "position": "electronics technician",
    "salary": 60915
  },
  {
    "name": "sylvia bailey charles",
    "position": "business relations",
    "salary": 106500
  },
  {
    "name": "jane rivers",
    "position": "lead legal instrum exam",
    "salary": 60915
  },
  {
    "name": "carol quick",
    "position": "workers compensation recipient",
    "salary": 60888
  },
  {
    "name": "patricia halder",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "roman scott",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "gerald rowlette",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "edwin hull",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "robert jefferson",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "frederick motanya",
    "position": "lead correctional ofc",
    "salary": 60885
  },
  {
    "name": "ernest wallace",
    "position": "lead correctional ofc",
    "salary": 60885
  },
  {
    "name": "curtis thomas",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "marjorie cuthbert",
    "position": "principal",
    "salary": 106477
  },
  {
    "name": "theophilus ojo",
    "position": "lead correctional ofc",
    "salary": 60885
  },
  {
    "name": "gertrude jones",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "keith fountain",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "marcella somuah",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "james kinard",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "darryl ellison",
    "position": "correctional officer",
    "salary": 60885
  },
  {
    "name": "tamela burns",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "heather farrall",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "laverne brown",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "joseph blatzheim",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "lorenz dahl",
    "position": "battalion fire chief (ems)",
    "salary": 106446
  },
  {
    "name": "worthnel salmon",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "tracye weaver",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "tikeya williams",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "kamisha spriggs",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "bernie hayes",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "renaldo bell",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "karl robinson",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "aretha lyles",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "arthur morris",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "alvis johnson",
    "position": "youth development representati",
    "salary": 60885
  },
  {
    "name": "kerri larkin",
    "position": "director",
    "salary": 106432
  },
  {
    "name": "lenora scott",
    "position": "paramedic",
    "salary": 60885
  },
  {
    "name": "marcia muirhead",
    "position": "social services rep",
    "salary": 60875
  },
  {
    "name": "andrea borns",
    "position": "visiting assistant professor",
    "salary": 60828
  },
  {
    "name": "rickisha herron",
    "position": "psychologist",
    "salary": 60779
  },
  {
    "name": "andre thompson",
    "position": "carpenter leader",
    "salary": 60778
  },
  {
    "name": "piotr axer",
    "position": "teacher",
    "salary": 60766
  },
  {
    "name": "kila brown",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "jeffrey coombe",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "michael cotter",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "james stapleton",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "neela rathinasamy",
    "position": "director",
    "salary": 106432
  },
  {
    "name": "michael poetker",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "rosalio ruiz",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "derick graham",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "kimberly boozer",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "kianna loften",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "thomas miller",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "jon hope",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "richard peterson",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "joseph hoffman",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "anne guglik",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "ramon orozco",
    "position": "budget officer",
    "salary": 106432
  },
  {
    "name": "oscar burton",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "jaimie jackson",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "ryan elborne",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "matthew sandy",
    "position": "paramedic firefighter",
    "salary": 60694
  },
  {
    "name": "samuel pearcy",
    "position": "coordinato",
    "salary": 60635
  },
  {
    "name": "nikki davis",
    "position": "project coordinator",
    "salary": 60635
  },
  {
    "name": "elizabeth rihani",
    "position": "coordinato",
    "salary": 60635
  },
  {
    "name": "valerie mitchell",
    "position": "program analyst",
    "salary": 60635
  },
  {
    "name": "rhonda barnes",
    "position": "admin/program officer",
    "salary": 60635
  },
  {
    "name": "kenita council",
    "position": "coordinato",
    "salary": 60635
  },
  {
    "name": "erica fener",
    "position": "director",
    "salary": 106432
  },
  {
    "name": "adia burns",
    "position": "coordinato",
    "salary": 60635
  },
  {
    "name": "calvin milam",
    "position": "workers compensation recipient",
    "salary": 60632
  },
  {
    "name": "shenora plenty",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "o'kiyyah lyons",
    "position": "instructional coach",
    "salary": 60582
  },
  {
    "name": "rachel harrar",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "stephen lotts",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "chloe kaplan",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "avram lubliner-walters",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jessica kaluzny",
    "position": "psychologist,school",
    "salary": 60582
  },
  {
    "name": "sean keatley",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "saundra chesley brown",
    "position": "medical officer general practi",
    "salary": 153852
  },
  {
    "name": "franklin austin",
    "position": "contract specialist",
    "salary": 106432
  },
  {
    "name": "susanne leslie",
    "position": "speech pathologist",
    "salary": 60582
  },
  {
    "name": "brittanye powell",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "paul phifer",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "rachelle goldson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jacqueline nelson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "andrea molina",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "nicole nesper",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kimberley overton",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "molly hughes",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "lynn palmer",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "shereen williams",
    "position": "director",
    "salary": 106432
  },
  {
    "name": "keelan purcell",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tiffany payne",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kathleen markus",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "elaine kinsella-gold",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kimberly mcarthur",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "rebecca karli",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "christina hoffski",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "alexandria lemus",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "cara hoppe",
    "position": "instructional coach",
    "salary": 60582
  },
  {
    "name": "gretchen paul",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "veronica falwell",
    "position": "director of realty",
    "salary": 106432
  },
  {
    "name": "lissa mantell",
    "position": "social worker",
    "salary": 60582
  },
  {
    "name": "danielle pierce steuber",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "allison potocki",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "munachiso onuoha",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "laysha kemp",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "prathima kathiresan",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "krishunda penn",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tiffany kidd",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "gary hamilton",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "gabriela garduno",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "joshua wayne",
    "position": "director",
    "salary": 106432
  },
  {
    "name": "elizabeth hemming",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jennifer mclaughlin",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "dewayne gregory",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "christiana richardson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jann'l henry",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "mesfin hailegebriel",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "renee hamer",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kristin nordeen",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "lauren miller",
    "position": "counselor",
    "salary": 60582
  },
  {
    "name": "stephanie mbella",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "matthew bachand",
    "position": "chief of staff",
    "salary": 106432
  },
  {
    "name": "natasha murray",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "anne-marie reidy",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kimberlie moy",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kristin kowalew",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "bi-nu jiang",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "brian mitchell",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sarah rizk",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "rosemary mcdonald",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "melissa mortimer",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "mark murphy",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "james sweeney",
    "position": "environmental protection",
    "salary": 106417
  },
  {
    "name": "melody harris",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "corey null",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "mimi gu",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "lynette hardy",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "quida nelson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "katherine mcgirr",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "travis hartberger",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "stephanie gladney",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "desiree raught",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kandiis mccorvey",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "robert sawyers",
    "position": "workers compensation recipient",
    "salary": 106288
  },
  {
    "name": "anna henderson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "april hinnant",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "cara marbury",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "lindsey rattray",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tammy blumhardt",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kamilah bywaters",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sarah zydney",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "natasha surles",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "leigh-kirstin sims",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "gelynn thompson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sergey yershov",
    "position": "information technology specialist",
    "salary": 106254
  },
  {
    "name": "nancy santos",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "christina stevenson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tiffany venuto",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sunila rogers",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "melissa bryant",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "benjamin davis",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "orisanmi burton",
    "position": "librarian",
    "salary": 60582
  },
  {
    "name": "sydney bergman",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kate bergantino",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sherece bennett",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "nathaniel brown",
    "position": "ins oper exam (auditing)",
    "salary": 106254
  },
  {
    "name": "kyle davio",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "gabriel vernon",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jessica yarow",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "orly friedman",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jaime weise",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "cristina wurster",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "salena rochester",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "anna sheehan",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "katrin sweeney",
    "position": "librarian",
    "salary": 60582
  },
  {
    "name": "prince zu",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tiwana hicks",
    "position": "program manager",
    "salary": 106254
  },
  {
    "name": "jasmine valdes",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tamu turner",
    "position": "education program specialist",
    "salary": 60582
  },
  {
    "name": "emily winter",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "elizabeth wyrsch-ba",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "john solano",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tiffani turner",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tinesha williams",
    "position": "speech pathologist",
    "salary": 60582
  },
  {
    "name": "kristy sundberg",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "nancy ulba",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "holly tetreault-moore",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "richard smith",
    "position": "medical officer general practi",
    "salary": 153852
  },
  {
    "name": "stephen williams",
    "position": "it special (sysadmin)",
    "salary": 106254
  },
  {
    "name": "trinaty crosby",
    "position": "social worker",
    "salary": 60582
  },
  {
    "name": "crystal dively",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "hasna banu",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "gary fisher",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "steven dingledine",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kelly costello",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "yeganeh azimi",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "james banks",
    "position": "social worker",
    "salary": 60582
  },
  {
    "name": "rebecca arritt",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "terence chang",
    "position": "social worker",
    "salary": 60582
  },
  {
    "name": "louis segar",
    "position": "auditor",
    "salary": 106254
  },
  {
    "name": "estelle archibold",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "catherine chu",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "laura fuchs",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "jewel bryant",
    "position": "librarian",
    "salary": 60582
  },
  {
    "name": "jeffrey brown",
    "position": "counselor",
    "salary": 60582
  },
  {
    "name": "michael edgerton",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "brett surprenant",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "yaa boison",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kevin bjerregaard",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "melissa cutts",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "tatanisha wallace",
    "position": "integrity officer",
    "salary": 106254
  },
  {
    "name": "archella dorsey",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "katie cushman",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sabrina hayden",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "erin fisher",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "johnson deyon",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "thomas bishop",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kathleen bowens",
    "position": "instructional coach",
    "salary": 60582
  },
  {
    "name": "stephanie black",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "sarah craft",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "brandi drummonds",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "john foust",
    "position": "instructional system",
    "salary": 106254
  },
  {
    "name": "vanessa dorn",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "f. bibliowicz",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "joseph deering",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "mary balla",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "natoya coleman",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kevin campbell",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "latoya robinson",
    "position": "teacher",
    "salary": 60582
  },
  {
    "name": "kimberly coleman",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "litonya hawkins",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "andrea mercer",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "gilles stucker",
    "position": "housing resource administrator",
    "salary": 106254
  },
  {
    "name": "tanisha kemp",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "rebecca fox",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "robert geremia",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "howard mebane",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "james barnes",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "melissa da costa",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "beverly baines",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "leroy watkins",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "islam shabazz",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "corey totress",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "darryl maultsby",
    "position": "general engineer",
    "salary": 106254
  },
  {
    "name": "nicol davis",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "joseph clark",
    "position": "teacher",
    "salary": 60492
  },
  {
    "name": "andrew berwa",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "todd o'neil",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "matthew parker",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "leilani liverpool",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "maleeha malik",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "noemi perez",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "jennifer gee",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "kristen addison",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "raymond gretz",
    "position": "battalion fire chief",
    "salary": 106242
  },
  {
    "name": "jason strickland",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "michael doughty",
    "position": "teacher",
    "salary": 60473
  },
  {
    "name": "carolyn haye",
    "position": "program coordinator",
    "salary": 60379
  },
  {
    "name": "rebecca bankhead",
    "position": "4-h extension specialist",
    "salary": 60379
  },
  {
    "name": "ebony hart",
    "position": "assistant director",
    "salary": 60379
  },
  {
    "name": "emary mciver",
    "position": "program coordinator",
    "salary": 60379
  },
  {
    "name": "paulette wooten martin",
    "position": "program coordinator",
    "salary": 60379
  },
  {
    "name": "duane tobias",
    "position": "assistant director",
    "salary": 60379
  },
  {
    "name": "madlyn ridley-fisher",
    "position": "workers compensation recipient",
    "salary": 60342
  },
  {
    "name": "charmaine baynes dix",
    "position": "project specialist",
    "salary": 60327
  },
  {
    "name": "annie mair",
    "position": "principal",
    "salary": 106225
  },
  {
    "name": "juliet madubata",
    "position": "nurse educator",
    "salary": 60327
  },
  {
    "name": "tricia williams",
    "position": "staff assistant",
    "salary": 60327
  },
  {
    "name": "brittany kolonay",
    "position": "librarian",
    "salary": 60327
  },
  {
    "name": "valeria conn",
    "position": "staff assistant",
    "salary": 60327
  },
  {
    "name": "callie padgett",
    "position": "nurse educator",
    "salary": 60327
  },
  {
    "name": "serena butler",
    "position": "counselor",
    "salary": 60327
  },
  {
    "name": "james killette",
    "position": "construction representative",
    "salary": 60327
  },
  {
    "name": "george henry",
    "position": "workers compensation recipient",
    "salary": 60320
  },
  {
    "name": "olive vassell",
    "position": "assistant professor",
    "salary": 60320
  },
  {
    "name": "james thompson",
    "position": "maintenance mechanic",
    "salary": 60299
  },
  {
    "name": "donald nixon",
    "position": "teacher",
    "salary": 106208
  },
  {
    "name": "melody crutchfield",
    "position": "employment specialist",
    "salary": 60254
  },
  {
    "name": "howard lane",
    "position": "lead traffic control officer",
    "salary": 60254
  },
  {
    "name": "laverne brice",
    "position": "staff assistant",
    "salary": 60254
  },
  {
    "name": "mary mustone",
    "position": "health and wellness specialist",
    "salary": 60254
  },
  {
    "name": "wilson reynolds",
    "position": "constituent services specialist",
    "salary": 60254
  },
  {
    "name": "henry tucker",
    "position": "financial auditor",
    "salary": 60254
  },
  {
    "name": "margaret patterson",
    "position": "information technology specialist",
    "salary": 60254
  },
  {
    "name": "zachary grayton",
    "position": "training instructor",
    "salary": 60254
  },
  {
    "name": "wanda vinson",
    "position": "telecommunications equip opera",
    "salary": 60254
  },
  {
    "name": "jeffrey newball",
    "position": "computer specialist",
    "salary": 60254
  },
  {
    "name": "quinne harris-lindsey",
    "position": "attorney advisor",
    "salary": 106080
  },
  {
    "name": "mary crichlow",
    "position": "care coor",
    "salary": 60254
  },
  {
    "name": "rebecca renard",
    "position": "teen program coordinator",
    "salary": 60254
  },
  {
    "name": "raeisha williams",
    "position": "outreach & service specialist",
    "salary": 60254
  },
  {
    "name": "david person",
    "position": "paralegal specialist",
    "salary": 60254
  },
  {
    "name": "carlos perez",
    "position": "work order verification specia",
    "salary": 60254
  },
  {
    "name": "michelle davenport",
    "position": "information technology specialist",
    "salary": 60254
  },
  {
    "name": "karon graves",
    "position": "staff assistant",
    "salary": 60254
  },
  {
    "name": "debra washington",
    "position": "management analyst",
    "salary": 60254
  },
  {
    "name": "genester powell",
    "position": "staff assistant",
    "salary": 60254
  },
  {
    "name": "arthur james",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "josephine reyes",
    "position": "medical officer general practi",
    "salary": 153852
  },
  {
    "name": "kwelli sneed",
    "position": "deputy dir, student transport",
    "salary": 106080
  },
  {
    "name": "james lindsay",
    "position": "cellblock processing technicia",
    "salary": 60242
  },
  {
    "name": "harold jones",
    "position": "lead legal instrum exam",
    "salary": 60242
  },
  {
    "name": "addison sherman",
    "position": "cellblock processing technicia",
    "salary": 60242
  },
  {
    "name": "wayne timberlake",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "michael patterson",
    "position": "cellblock processing technicia",
    "salary": 60242
  },
  {
    "name": "antonio reed",
    "position": "cellblock processing technicia",
    "salary": 60242
  },
  {
    "name": "james bryant",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "kim clark",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "josephine jackson",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "baby fua",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "matthew green",
    "position": "attorney advisor",
    "salary": 106034
  },
  {
    "name": "frank grant",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "jack herriot",
    "position": "cellblock processing tech",
    "salary": 60242
  },
  {
    "name": "daniel pledger",
    "position": "cellblock processing technicia",
    "salary": 60242
  },
  {
    "name": "fariha haque",
    "position": "missing title",
    "salary": 60198
  },
  {
    "name": "lisbeth jimenez",
    "position": "program coordinator",
    "salary": 60198
  },
  {
    "name": "matthew thompson",
    "position": "head soccer coach",
    "salary": 60181
  },
  {
    "name": "renae lee",
    "position": "human resources specialist",
    "salary": 60181
  },
  {
    "name": "monika acharya",
    "position": "medical officer (psychiatry)",
    "salary": 60172
  },
  {
    "name": "muhammad tariq",
    "position": "medical officer (psychiatry)",
    "salary": 60172
  },
  {
    "name": "olaoluwa okusaga",
    "position": "medical officer (psychiatry)",
    "salary": 60172
  },
  {
    "name": "kaitlin rancier",
    "position": "trial attorney",
    "salary": 106023
  },
  {
    "name": "nicholes martin-greskoff",
    "position": "sergeant",
    "salary": 60168
  },
  {
    "name": "shawn downs",
    "position": "sergeant",
    "salary": 60168
  },
  {
    "name": "angela troutman",
    "position": "lead payroll technician",
    "salary": 60106
  },
  {
    "name": "olivia ford",
    "position": "returns processing",
    "salary": 60106
  },
  {
    "name": "ivis brittingham",
    "position": "lead accounting tech",
    "salary": 60106
  },
  {
    "name": "daryl levine",
    "position": "special assistant",
    "salary": 60000
  },
  {
    "name": "ronald austin",
    "position": "constituent services specialist",
    "salary": 60000
  },
  {
    "name": "wallace canter",
    "position": "legislative assistant",
    "salary": 60000
  },
  {
    "name": "jason williamson",
    "position": "program analyst",
    "salary": 60000
  },
  {
    "name": "deborah george",
    "position": "policy analyst",
    "salary": 60000
  },
  {
    "name": "viktor pregel",
    "position": "trial attorney",
    "salary": 106023
  },
  {
    "name": "rayna smith",
    "position": "legislative counsel",
    "salary": 60000
  },
  {
    "name": "michael price",
    "position": "administrative assistant",
    "salary": 60000
  },
  {
    "name": "gabriel curtis",
    "position": "pest controller",
    "salary": 60000
  },
  {
    "name": "celine fejeran",
    "position": "program analyst",
    "salary": 60000
  },
  {
    "name": "anne jean-baptiste",
    "position": "assistant professor",
    "salary": 60000
  },
  {
    "name": "lori taylor",
    "position": "assistant professor",
    "salary": 60000
  },
  {
    "name": "matthew petti",
    "position": "assistant professor",
    "salary": 60000
  },
  {
    "name": "ethan arnheim",
    "position": "communications director",
    "salary": 60000
  },
  {
    "name": "denise harvest",
    "position": "maintenance mechanic",
    "salary": 59946
  },
  {
    "name": "oluwakemi ogunseye",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "gary tan",
    "position": "trial attorney",
    "salary": 106023
  },
  {
    "name": "ernest agyeman",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "lesa gsell",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "michelle richardson",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "elizabeth morafa",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "oluwatoyin ottun",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "elizabeth kotey",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "raphael bippe",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "ifreke udodong",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "margaret tabod",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "evelyn chibor",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "david hyden",
    "position": "attorney advisor",
    "salary": 106023
  },
  {
    "name": "roseline abunaw",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "regina ijaja",
    "position": "pyschiatric nurse",
    "salary": 59934
  },
  {
    "name": "thandiwe irvin",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "sarah rogerson",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "odelia muir",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "valerie lott",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "sarah mcdonald",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "summer dillard",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "andre edwards",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "rachel mencher",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "walter adams",
    "position": "attorney advisor",
    "salary": 106023
  },
  {
    "name": "christopher burns",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "amanda lewis",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "amy melton",
    "position": "social worker",
    "salary": 59903
  },
  {
    "name": "janisse berry",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "lisa eley",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "phillip daniel",
    "position": "engineering technician",
    "salary": 59901
  },
  {
    "name": "olayinka kolawole",
    "position": "energy program specialist",
    "salary": 59901
  },
  {
    "name": "rashanda elmore-rooths",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "marie fleurival",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "gary blunt",
    "position": "construction representative",
    "salary": 59901
  },
  {
    "name": "monique bocock",
    "position": "trial attorney",
    "salary": 106023
  },
  {
    "name": "chidi oriaku",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "feyishola olaniyan",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "kia williams",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "annissa amegbe",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "derrick wilson",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "tisharra albright",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "james sutton,",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "vernon romain",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "nestor villanueva",
    "position": "social insurance specialist",
    "salary": 59901
  },
  {
    "name": "beverly lashley-jackman",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "glenn dubin",
    "position": "attorney advisor",
    "salary": 106023
  },
  {
    "name": "pattrice smith",
    "position": "vocational rehabilitation specialist",
    "salary": 59901
  },
  {
    "name": "nooru kaikai",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "angelique massey",
    "position": "engineering technician",
    "salary": 59901
  },
  {
    "name": "allen huntley",
    "position": "engineering technician",
    "salary": 59901
  },
  {
    "name": "sherri banks",
    "position": "parking operations specialist",
    "salary": 59901
  },
  {
    "name": "tawn keohanam",
    "position": "social insurance specialist",
    "salary": 59901
  },
  {
    "name": "anjela turner",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "marcia smith",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "alice asonganyi",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "antonio lindsey",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "phillippa lisas",
    "position": "trial attorney",
    "salary": 106023
  },
  {
    "name": "rodney savoy",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "timothy siklo",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "sylvia gill",
    "position": "property control and disposal",
    "salary": 59901
  },
  {
    "name": "gerard miggins",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "kendra taft",
    "position": "program analyst",
    "salary": 59901
  },
  {
    "name": "jesse smith",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "kwame king",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "stacey truell",
    "position": "safety & occup hlth specialist",
    "salary": 59901
  },
  {
    "name": "monica brown",
    "position": "contract specialist",
    "salary": 59901
  },
  {
    "name": "douglas mooring",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "marvin barnard",
    "position": "medical officer general practi",
    "salary": 153852
  },
  {
    "name": "ruth werner",
    "position": "committee director",
    "salary": 106000
  },
  {
    "name": "lisa baton",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "tashara jones",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "azalech tegene",
    "position": "mental health specialist",
    "salary": 59901
  },
  {
    "name": "cherie bassette",
    "position": "resource development specialist",
    "salary": 59901
  },
  {
    "name": "cantrice feaster",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "robin booth",
    "position": "property disposal specialist",
    "salary": 59901
  },
  {
    "name": "jacqueline gordon",
    "position": "assessment program specialist",
    "salary": 59901
  },
  {
    "name": "simone sibert",
    "position": "lead-based paint specialist",
    "salary": 59901
  },
  {
    "name": "sheila johnson-parker",
    "position": "insurance licensing specialist",
    "salary": 59901
  },
  {
    "name": "arthur slade",
    "position": "insurance operations specialist",
    "salary": 59901
  },
  {
    "name": "michelle phipps evans",
    "position": "public affairs specialist",
    "salary": 106000
  },
  {
    "name": "joyce lewis",
    "position": "licensing specialist",
    "salary": 59901
  },
  {
    "name": "yusif gasimov",
    "position": "program support assistant",
    "salary": 59901
  },
  {
    "name": "francine ricketts",
    "position": "program specialist",
    "salary": 59901
  },
  {
    "name": "tiffany leatherberry",
    "position": "mental health specialist",
    "salary": 59901
  },
  {
    "name": "kimberly cobb mckenzie",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "justina brown",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "deborah perkins",
    "position": "management analyst",
    "salary": 59901
  },
  {
    "name": "sharvey brooks",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "james mccreary",
    "position": "construction representative",
    "salary": 59901
  },
  {
    "name": "shawntelle nesmith",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "amy bellanca",
    "position": "chief of staff",
    "salary": 106000
  },
  {
    "name": "eric karisa",
    "position": "program analyst",
    "salary": 59901
  },
  {
    "name": "sarrahan andrews",
    "position": "assessment program specialist",
    "salary": 59901
  },
  {
    "name": "jacquelynne brown",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "bipinbhai patel",
    "position": "engineering technician",
    "salary": 59901
  },
  {
    "name": "bonita barnes",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "darlene fields",
    "position": "staff assistant",
    "salary": 59901
  },
  {
    "name": "camille anderson",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "katrina hightower",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "karen brinkley",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "marcus addison",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "pamela soncini",
    "position": "attorney advisor",
    "salary": 106000
  },
  {
    "name": "anthony walker",
    "position": "revenue officer",
    "salary": 59901
  },
  {
    "name": "andre chisolm",
    "position": "uc claims examiner",
    "salary": 59901
  },
  {
    "name": "annette tibbs",
    "position": "program support assistant",
    "salary": 59901
  },
  {
    "name": "derwin tucker",
    "position": "code compl specialist",
    "salary": 59901
  },
  {
    "name": "jery jimenez",
    "position": "staff assistant",
    "salary": 59901
  },
  {
    "name": "adrian jefferies",
    "position": "workforce development specialist",
    "salary": 59901
  },
  {
    "name": "robert cluff",
    "position": "comb code comp specialist",
    "salary": 59901
  },
  {
    "name": "elisa ramirez",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "sushani wickramasinghe",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "eddie curry",
    "position": "unemployment compensation clai",
    "salary": 59901
  },
  {
    "name": "dmitriy mukhin",
    "position": "information technology specialist",
    "salary": 106000
  },
  {
    "name": "lashaun basil",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "susana batres",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "kevin jackson",
    "position": "housing rehab specialist",
    "salary": 59901
  },
  {
    "name": "lashonn wright",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "lakeitha johnson",
    "position": "neighbor stab specialist",
    "salary": 59901
  },
  {
    "name": "shawni walker",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "ella gray",
    "position": "crime analyst",
    "salary": 59901
  },
  {
    "name": "monica west",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "kittrell jones-williams",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "robert spriggs",
    "position": "comb code comp specialist",
    "salary": 59901
  },
  {
    "name": "lori wilson",
    "position": "counselor",
    "salary": 105878
  },
  {
    "name": "dion dove",
    "position": "audiovisual production specialist",
    "salary": 59901
  },
  {
    "name": "jomoya mobutu",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "james mceachin",
    "position": "unemployment tax examiner",
    "salary": 59901
  },
  {
    "name": "janice findlay",
    "position": "program suppor",
    "salary": 59901
  },
  {
    "name": "theresa ennis",
    "position": "program support assistant",
    "salary": 59901
  },
  {
    "name": "tonia robinson",
    "position": "staff assistant",
    "salary": 59901
  },
  {
    "name": "patricia mobley",
    "position": "workforce development specialist",
    "salary": 59901
  },
  {
    "name": "carl farmer",
    "position": "unemployment tax examiner",
    "salary": 59901
  },
  {
    "name": "sheldon givens",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "dorian white",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "valerie wilson",
    "position": "counselor",
    "salary": 105878
  },
  {
    "name": "harold venable",
    "position": "unemployment tax examiner",
    "salary": 59901
  },
  {
    "name": "patricia cambel",
    "position": "management analyst",
    "salary": 59901
  },
  {
    "name": "hector warren",
    "position": "plans review coor",
    "salary": 59901
  },
  {
    "name": "marilyn smith",
    "position": "adult librarian",
    "salary": 59901
  },
  {
    "name": "barbara gauntt",
    "position": "librarian",
    "salary": 59901
  },
  {
    "name": "georgia henry",
    "position": "public health analyst",
    "salary": 59901
  },
  {
    "name": "presley lemmon",
    "position": "investigator",
    "salary": 59901
  },
  {
    "name": "rene simms",
    "position": "public health advisor",
    "salary": 59901
  },
  {
    "name": "mohamed isse",
    "position": "environmental engineer",
    "salary": 59901
  },
  {
    "name": "teamrat gebremedhin",
    "position": "environmental protection speci",
    "salary": 59901
  },
  {
    "name": "stephanie hailes",
    "position": "counselor",
    "salary": 105878
  },
  {
    "name": "enid rogers",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "molly lunaris",
    "position": "program specialist",
    "salary": 59901
  },
  {
    "name": "irener phillips",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "doris chibikom",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "veronica akwensioge",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "gloria davis",
    "position": "unemployment compensation clai",
    "salary": 59901
  },
  {
    "name": "hiram jennings",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "sallie johnson",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "shwanna steward",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "sherin moses",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "sean carter",
    "position": "battalion fire chief",
    "salary": 105800
  },
  {
    "name": "catherine smith",
    "position": "vocational rehabilitation specialist",
    "salary": 59901
  },
  {
    "name": "katrina dixon",
    "position": "service coordinator",
    "salary": 59901
  },
  {
    "name": "stephanie tindal",
    "position": "education services monitor",
    "salary": 59901
  },
  {
    "name": "anina ertel",
    "position": "librarian",
    "salary": 59901
  },
  {
    "name": "traci hamilton",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "eboni curry",
    "position": "librarian",
    "salary": 59901
  },
  {
    "name": "delores ragland",
    "position": "support enforcement specialist",
    "salary": 59901
  },
  {
    "name": "isaac solomon",
    "position": "unemployment compensation clai",
    "salary": 59901
  },
  {
    "name": "donna harris",
    "position": "health licensing specialist",
    "salary": 59901
  },
  {
    "name": "yesset makonnen",
    "position": "program monitor (non-tradition",
    "salary": 59901
  },
  {
    "name": "sherrod thomas",
    "position": "battalion fire chief",
    "salary": 105800
  },
  {
    "name": "shaunda clark",
    "position": "social service assistant",
    "salary": 59901
  },
  {
    "name": "sophia okonkwo",
    "position": "vocational development special",
    "salary": 59901
  },
  {
    "name": "alganesh kuflom",
    "position": "management analyst",
    "salary": 59901
  },
  {
    "name": "linda lee",
    "position": "manpower development specialist",
    "salary": 59901
  },
  {
    "name": "addie hall-scott",
    "position": "case manager",
    "salary": 59901
  },
  {
    "name": "luckeya mccarroll",
    "position": "public health advisor",
    "salary": 59901
  },
  {
    "name": "volta asbury",
    "position": "public health advisor",
    "salary": 59901
  },
  {
    "name": "cynthia wilkerson",
    "position": "fingerprint specialist",
    "salary": 59901
  },
  {
    "name": "hugo arce",
    "position": "dental laboratory tech",
    "salary": 59849
  },
  {
    "name": "joy thomas",
    "position": "correctional treatment specialist",
    "salary": 59801
  },
  {
    "name": "philip eure",
    "position": "executive director",
    "salary": 188692
  },
  {
    "name": "danilo garcia",
    "position": "medical officer general practi",
    "salary": 153852
  },
  {
    "name": "charles battle",
    "position": "battalion fire chief",
    "salary": 105800
  },
  {
    "name": "victor akuchie",
    "position": "teacher",
    "salary": 59801
  },
  {
    "name": "latonya williams",
    "position": "correctional treatment specialist",
    "salary": 59801
  },
  {
    "name": "raymond brown",
    "position": "workers compensation recipient",
    "salary": 59800
  },
  {
    "name": "william thomas",
    "position": "correctional officer",
    "salary": 59740
  },
  {
    "name": "sharon cain-smith",
    "position": "correctional officer",
    "salary": 59711
  },
  {
    "name": "william hager",
    "position": "records and data management spe",
    "salary": 59577
  },
  {
    "name": "sherman jackson",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "marsena hall",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "tonya jones",
    "position": "exec assistant to the boe pres",
    "salary": 59545
  },
  {
    "name": "gina reilly",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "abdullah zaki",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "toni perry",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "roselina gorham",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "dyvor gibson",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "gladys harris",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "marion lomax-scott",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "devyn proctor",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "ann ganey",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "latonya hill",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "virgina maynard",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "leslie martinez",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "carol campbell",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "lynnette gibson",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "bernadine walker",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "ikey staton",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "william strickland",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "rashawna young",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "edith shorts",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "crystal balogun",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "maria barreto",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "tracy aukward",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "lisa bailey",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "willie jackson",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "deborah barr",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "joyce blue",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "elaine coye",
    "position": "budget analyst",
    "salary": 59545
  },
  {
    "name": "fabiola cadet",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "loraine cousins",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "yolanda jaureguizar",
    "position": "business manager",
    "salary": 59545
  },
  {
    "name": "bernita carmichael",
    "position": "fire protection specialist",
    "salary": 59533
  },
  {
    "name": "ericka abbey",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "teresa tasker",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "cynthia daniels",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "melissa martin",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "jacqueline boyd",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "raquel higgs",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "sharon morgan",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "shondel mccullough collins",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "danielle ross",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "charmisa adams",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "eugene billingsley",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "iris trent",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "lenora holley",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "jacqueline carr",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "kimberly douglas",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "wanda bethea",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "karen anderson",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "lauren johnson",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "nicole carter",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "ladonna wright",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "donnett henson",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "robin scott",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "virginia sanford",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "nury hernandez",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "janie scruggs",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "marshall cartland",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "delisa herndon",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "bianca bennett",
    "position": "dispatcher",
    "salary": 59533
  },
  {
    "name": "tracy eichelberger",
    "position": "administrative officer",
    "salary": 59480
  },
  {
    "name": "staci johnson-ramos",
    "position": "administrative officer",
    "salary": 59480
  },
  {
    "name": "wendell holmes",
    "position": "maintenance mechanic",
    "salary": 59467
  },
  {
    "name": "john rosser",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "donna smith",
    "position": "youth development representati",
    "salary": 59408
  },
  {
    "name": "ndirlbe ukegbu",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "lewis ford",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "jacqueline white",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "richard rogers",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "sheila marr",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "bernard bryan",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "simon bryan",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "douglas smith",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "betty wofford",
    "position": "lead correctional ofc",
    "salary": 59408
  },
  {
    "name": "ronald haten",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "henry rotimi",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "dante johnson",
    "position": "youth development representati",
    "salary": 59408
  },
  {
    "name": "richard pell",
    "position": "paramedic",
    "salary": 59408
  },
  {
    "name": "glaumeiz croom",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "tynika young",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "robert murphy",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "la'kisha lacey",
    "position": "paramedic",
    "salary": 59408
  },
  {
    "name": "michael mastrangelo",
    "position": "paramedic",
    "salary": 59408
  },
  {
    "name": "ejikeme onukwubiri",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "gerald lester",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "hosea green",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "eric gunn",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "keith allison",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "anthony dyson",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "daria hagood",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "winston cox",
    "position": "principal",
    "salary": 105790
  },
  {
    "name": "harrison ekwonna",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "jannease johnson",
    "position": "correctional officer",
    "salary": 59408
  },
  {
    "name": "joseph lozupone",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "justin baer",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "woodrow price",
    "position": "firefighter tech",
    "salary": 59364
  },
  {
    "name": "matthews schaefer",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "david power",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "james kiser",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "frederick schaffer",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "john porter",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "cecily collier",
    "position": "dir campaign finance",
    "salary": 153593
  },
  {
    "name": "donald baxter",
    "position": "roadway maintenance supv",
    "salary": 105788
  },
  {
    "name": "christopher worth",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "toyd green",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "jason woods",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "darrell andrews",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "clyde thomas",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "william wimbish",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "samuel short",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "jumanne thomas",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "lorenzo lynch",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "cartao bost",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "joel lawson",
    "position": "dev zoning planning",
    "salary": 105699
  },
  {
    "name": "christopher mason",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "kevin pringle",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "james bobo",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "scott basinger",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "roy bishop",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "chuck suto",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "michael roy",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "christopher simpson",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "david gregg",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "charles ryan",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "deborah williams",
    "position": "counselor",
    "salary": 105641
  },
  {
    "name": "anthony mullins",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "lawrence ferek",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "dustin butler",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "ronald roundtree",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "shawn summers",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "javon greene",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "burke riccione",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "dexter williams",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "matthew martenas",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "gerald bunn",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "carl allen",
    "position": "counselor",
    "salary": 105641
  },
  {
    "name": "curtis bryan",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "john shymansky",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "david williams",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "john kirkpatrick",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "tye glover",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "william alexander",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "richard zagrodnichek",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "justin scales",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "jason grabowski",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "reginald burr",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "shirley dozier",
    "position": "counselor",
    "salary": 105641
  },
  {
    "name": "bryant edgerton",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "james pegues",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "david harris",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "elliott warley",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "craig hagaman",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "michael rabaiotti",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "shannon welch",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "april degraff",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "dino johnson",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "jeffrey seymour",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "carolyn lindsay",
    "position": "counselor",
    "salary": 105641
  },
  {
    "name": "charles dunham",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "antoine williams",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "ronald payton",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "michael ridgeway",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "keith eastman",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "david cooksey",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "brian connors",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "dennis dziekan",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "richard waldbauer",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "theodore douglas",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "juliette gill cunningham",
    "position": "counselor",
    "salary": 105641
  },
  {
    "name": "donald hansberry",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "christopher oliff",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "steffen santos",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "robert heaney",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "sebastian harris",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "richard leizear",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "earl tolbert",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "donald adkins",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "nathaniel lewis",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "george martin",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "vernita jefferson",
    "position": "counselor",
    "salary": 105641
  },
  {
    "name": "michael gimmel",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "kermit mcmillan",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "thomas dillon",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "george clark",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "james mazzara",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "gerald hayden",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "michael walker",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "walter watson",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "heather hardesty",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "john latimer",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "c bryant",
    "position": "special assistant",
    "salary": 105614
  },
  {
    "name": "richard watson",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "dabney hudson",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "angelo harris",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "jeffrey dawkins",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "kevin mcconnell",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "jonathan davis",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "christopher slye",
    "position": "firefighter emt",
    "salary": 59364
  },
  {
    "name": "briana johnson",
    "position": "firefighter",
    "salary": 59364
  },
  {
    "name": "ian o'byrne",
    "position": "firefighter emt",
    "salary": 59361
  },
  {
    "name": "chandresh vaidya",
    "position": "medical technologist",
    "salary": 59360
  },
  {
    "name": "mohammad shibly",
    "position": "information technology specialist",
    "salary": 105614
  },
  {
    "name": "benjamin broome",
    "position": "solid waste inspector",
    "salary": 59319
  },
  {
    "name": "jacquelyn murphy",
    "position": "lead legal instrum exam",
    "salary": 59319
  },
  {
    "name": "charlotte stringer",
    "position": "lead legal instrum exam",
    "salary": 59319
  },
  {
    "name": "michael vanison",
    "position": "solid waste inspector",
    "salary": 59319
  },
  {
    "name": "diane moorer",
    "position": "computer operator",
    "salary": 59319
  },
  {
    "name": "sharon sumler",
    "position": "solid waste inspector",
    "salary": 59319
  },
  {
    "name": "wendy brown",
    "position": "solid waste inspector",
    "salary": 59319
  },
  {
    "name": "keely alexander",
    "position": "recreation specialist",
    "salary": 59319
  },
  {
    "name": "deborah small",
    "position": "solid waste inspector",
    "salary": 59319
  },
  {
    "name": "carolyn billinghurst",
    "position": "financial examiner ins",
    "salary": 59299
  },
  {
    "name": "christopher lipscombe",
    "position": "attorney advisor",
    "salary": 153285
  },
  {
    "name": "david maloney",
    "position": "historic preserve program manager",
    "salary": 105614
  },
  {
    "name": "jemasine grant",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "connie clinkscale",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "christine jones",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "daniel lewis",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "catherine green",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jerome west",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "janice williams",
    "position": "legal instruments examiner",
    "salary": 59293
  },
  {
    "name": "ruby wannamaker",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jacqueline diouf",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "ricardo brown",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jean mitchell",
    "position": "support svcs assistant",
    "salary": 105614
  },
  {
    "name": "austin whitby",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "john long",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "hernandaze williams",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "doretta brown",
    "position": "legal instruments examiner",
    "salary": 59293
  },
  {
    "name": "glinda brown",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "paul watson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "warren hairston",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "juan mendez",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "judy brown",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "phyllis grimes",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "mark lassiter",
    "position": "deputy director",
    "salary": 105614
  },
  {
    "name": "carl jameson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "kevin washington",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "mansfield kauo",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "charles trotter",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "edward smith",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "sheila kitts",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "maria duncan",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "swanda dunn",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "albert davis",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "albert birth",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "lucas zarwell",
    "position": "dep chief toxicologist",
    "salary": 105614
  },
  {
    "name": "ricky cunningham",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "norman edwards",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "james jones",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "benjamin jones",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "percy finch",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "annie mcgee",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "laurrine ellis",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jonathan evans",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "orlando jones",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "willie coleman",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "virginia monteiro",
    "position": "policy & planning prg manager",
    "salary": 105600
  },
  {
    "name": "james drummond",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "andre cobbs",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "onyide ezurike",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "arshad mahmood",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "calvin cornelious",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "brennys moronta",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "christopher proctor",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "stephanie steele-braxton",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "pearly mcqueen",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "deborah daise",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "margaret myers",
    "position": "office manager",
    "salary": 105526
  },
  {
    "name": "euretha powell",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "lewis johnson",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "dorothea pickett",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "morena lyde lancaster",
    "position": "youth development rep",
    "salary": 59293
  },
  {
    "name": "donatus duru",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "preston moore",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "kathy harrison crews",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "pamela mclean",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "betty harris scippio",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "ramona mills crocker",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "william powell",
    "position": "budget administration analyst",
    "salary": 105526
  },
  {
    "name": "michele hutchinson",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "elmer coates",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "najmul chowdhey",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "marion wright",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "tanya forbes",
    "position": "legal instruments examiner",
    "salary": 59293
  },
  {
    "name": "erica woodhouse",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "donald holland",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "garry doyle",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "arnold hudson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "renee green",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "alonso montalvo",
    "position": "budget analyst",
    "salary": 105526
  },
  {
    "name": "joseph hill",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "james miles",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "willie truesdale",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "marlon wharton",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "linda turner",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "susan briscoe armstrong",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "william white",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "michael melchoir",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "tiffany smith-bell",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "glennard walker",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "david barrow",
    "position": "accountant",
    "salary": 105526
  },
  {
    "name": "cynthia williams",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "stephen harris",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "julia broadus",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "debra lyons",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "lugenia butler",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "anita greenhill",
    "position": "youth development representati",
    "salary": 59293
  },
  {
    "name": "jarvis mcneal",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "jocelyn chase",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "alonzo gibson",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "wayne means",
    "position": "supervisor parking enforcement",
    "salary": 59293
  },
  {
    "name": "ahmed hassan",
    "position": "financial manager",
    "salary": 105526
  },
  {
    "name": "norwood hughes",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "layard banks",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "susan stokes",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jacqueline parker",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "rick berry",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jerrie moody",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "carl spence",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "alroy starkes",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "gloria pringle",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "arthur mitchell",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "kimberly lincoln stewart",
    "position": "attorney advisor",
    "salary": 153285
  },
  {
    "name": "rosemarie pacana",
    "position": "budget officer",
    "salary": 105526
  },
  {
    "name": "robert sands",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "tajudeen oyegbola",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "troy pace",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "mary allen",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "quintin moore",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "marsha rose",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "terrence pearson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "paulette morgan",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "avon shell",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "ron archer",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "eugene clindinin",
    "position": "appraiser",
    "salary": 105526
  },
  {
    "name": "willie sumter",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "william pearson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "maryon perkins",
    "position": "legal instruments examiner",
    "salary": 59293
  },
  {
    "name": "lawrence wilson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "daniel tibbs",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "darrell dowery",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "arthur brown",
    "position": "paramedic - basic",
    "salary": 59293
  },
  {
    "name": "jacob jelks",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "bernadette felton marshall",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "mercia davis",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "deanna clark",
    "position": "program analyst",
    "salary": 105526
  },
  {
    "name": "stephanie davis",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "lateefa dawkins",
    "position": "social services rep",
    "salary": 59293
  },
  {
    "name": "alfreda smith",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "yvonne rhodes",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "dennis best",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "shennah owens",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "theodore anderson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "lynnell smith",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "belinda berry",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "mickey triplett",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "paula mclaughlin-keys",
    "position": "financial analyst",
    "salary": 105526
  },
  {
    "name": "larkly benjamin",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "darlene olarinde",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "kevin moody",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "daniel quispe",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "francine muhammad",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "herman ray",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "james rhinehart",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "mary cade",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "james chandler",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "sylvia cephas",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "edward jordan",
    "position": "fiscal analyst",
    "salary": 105526
  },
  {
    "name": "kenneth caulley",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "andre fortune",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "harcourt masi",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "allen claiborne",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "william jackson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "eric clark",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "haywood mcneil",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "debbie marbury",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "william isby",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "andrea byrd",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "athena hernandez",
    "position": "chief of communications",
    "salary": 105526
  },
  {
    "name": "kevin peel",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "james butler",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "robin saunders",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "barbara winborne",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "william williams",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "charles gooden",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "bobbie mcqueen",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "david burrus",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "charlene carter",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "evelyn lewis",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "paul dorsey",
    "position": "game development specialist",
    "salary": 105526
  },
  {
    "name": "inga campbell",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "pablo rodriquez",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "princess humphrey bass",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "rosamaria chapa",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "anthony richardson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "denise queen",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "bonnie barnes",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "michael aiken",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "malachi robinson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "wayne taylor",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "jason juffras",
    "position": "fiscal analyst",
    "salary": 105526
  },
  {
    "name": "robert thigpen",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "darrell roots",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "david thomas",
    "position": "correctional ofr",
    "salary": 59293
  },
  {
    "name": "larry datcher",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "earl jenkins",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "sonji johnson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "lorenzo ball",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "cleother burrel",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "benita bagley",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "james powell",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "clarence kyle",
    "position": "auditor (tax)",
    "salary": 105526
  },
  {
    "name": "byron richard",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "andra parker",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "lonnie simmons",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "yvonne johnson",
    "position": "correctional officer",
    "salary": 59293
  },
  {
    "name": "r anthony-el",
    "position": "customer service representative",
    "salary": 59287
  },
  {
    "name": "julia may",
    "position": "accountant",
    "salary": 59287
  },
  {
    "name": "paula hammond",
    "position": "customer service representative",
    "salary": 59287
  },
  {
    "name": "georgette downer",
    "position": "staff assistant",
    "salary": 59287
  },
  {
    "name": "anthony edwards",
    "position": "lottery draw specialist",
    "salary": 59287
  },
  {
    "name": "sia wonday",
    "position": "accountant",
    "salary": 59287
  },
  {
    "name": "kyle gans",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "sharon nelson",
    "position": "staff assistant",
    "salary": 59287
  },
  {
    "name": "tracy purnell",
    "position": "information technology specialist",
    "salary": 59287
  },
  {
    "name": "alonzo carr",
    "position": "payroll specialist",
    "salary": 59287
  },
  {
    "name": "paul simms",
    "position": "budget analyst",
    "salary": 59287
  },
  {
    "name": "wanda gross",
    "position": "staff assistant",
    "salary": 59287
  },
  {
    "name": "brenda walker",
    "position": "financial specialist",
    "salary": 59287
  },
  {
    "name": "airka moore",
    "position": "staff assistant",
    "salary": 59287
  },
  {
    "name": "delancia browning",
    "position": "recruitment specialist",
    "salary": 59275
  },
  {
    "name": "danilo ikenberry",
    "position": "television studio pro av spe",
    "salary": 59275
  },
  {
    "name": "doni russell",
    "position": "recruit spec bil",
    "salary": 59275
  },
  {
    "name": "thomas glassic",
    "position": "attorney advisor",
    "salary": 153280
  },
  {
    "name": "tony falwell",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "trelaunda beckett",
    "position": "student activities specialist",
    "salary": 59275
  },
  {
    "name": "andrea linthicum",
    "position": "recruit spec bil",
    "salary": 59275
  },
  {
    "name": "colin touhey",
    "position": "recruitment specialist",
    "salary": 59275
  },
  {
    "name": "garey bostick",
    "position": "protective svcs ofr",
    "salary": 59267
  },
  {
    "name": "angela kenion-wynn",
    "position": "management assistant",
    "salary": 59236
  },
  {
    "name": "margaret sone",
    "position": "sci lab manager&cp lab manager",
    "salary": 59236
  },
  {
    "name": "michiko gadson",
    "position": "capital proc agent",
    "salary": 59236
  },
  {
    "name": "klyah tyler",
    "position": "instructor, jrotc",
    "salary": 59219
  },
  {
    "name": "sinclair jeter",
    "position": "assistant professor",
    "salary": 59212
  },
  {
    "name": "francis mensah",
    "position": "visiting assistant professor",
    "salary": 59212
  },
  {
    "name": "reginald stowe",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "cherie turpin",
    "position": "assistant professor",
    "salary": 59212
  },
  {
    "name": "michael fitzgerald",
    "position": "assistant professor",
    "salary": 59212
  },
  {
    "name": "donnita tabron",
    "position": "parent coordinator",
    "salary": 59168
  },
  {
    "name": "brandon moore",
    "position": "teacher",
    "salary": 59168
  },
  {
    "name": "donna rouse",
    "position": "office manager",
    "salary": 59134
  },
  {
    "name": "ivy shannon",
    "position": "attorney advisor",
    "salary": 59133
  },
  {
    "name": "irene hui",
    "position": "attorney advisor",
    "salary": 59133
  },
  {
    "name": "james johnson",
    "position": "tree trimmer & remover",
    "salary": 59129
  },
  {
    "name": "james stanford",
    "position": "attorney advisor",
    "salary": 58954
  },
  {
    "name": "lennie smith",
    "position": "assistant professor",
    "salary": 58952
  },
  {
    "name": "michael marsico",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "quiana scott",
    "position": "counselor",
    "salary": 58920
  },
  {
    "name": "kira rowe",
    "position": "counselor",
    "salary": 58920
  },
  {
    "name": "jessica schimmerling",
    "position": "counselor",
    "salary": 58920
  },
  {
    "name": "angela miles",
    "position": "instructor, jrotc",
    "salary": 58888
  },
  {
    "name": "karen simmons-beathea",
    "position": "workers compensation recipient",
    "salary": 58855
  },
  {
    "name": "phillip fleming",
    "position": "electrician",
    "salary": 58822
  },
  {
    "name": "kathleen mcnamee",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "krystina lafontant",
    "position": "project coordinator",
    "salary": 58808
  },
  {
    "name": "joan lee",
    "position": "program analyst",
    "salary": 58808
  },
  {
    "name": "nicole lee- mwandha",
    "position": "project coordinator",
    "salary": 58808
  },
  {
    "name": "roy brinkley",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "rita larkins",
    "position": "program coordinator",
    "salary": 58808
  },
  {
    "name": "kelly gannon",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "sandra lowery",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "damian johnson",
    "position": "budget analyst",
    "salary": 58808
  },
  {
    "name": "fran-victoria cox stephens",
    "position": "program analyst",
    "salary": 58808
  },
  {
    "name": "nichole best",
    "position": "project coor",
    "salary": 58808
  },
  {
    "name": "latisha chisholm-duper",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "lucila trejo",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "kathleen sheridan",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "latrice strong",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "samuel jackson",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "vibha robinson",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "evan martin",
    "position": "coordinato",
    "salary": 58808
  },
  {
    "name": "wayne drapeau",
    "position": "fire investigator",
    "salary": 58781
  },
  {
    "name": "gary ciapa",
    "position": "officer",
    "salary": 58760
  },
  {
    "name": "steven grysko",
    "position": "officer",
    "salary": 58760
  },
  {
    "name": "michael bialeski",
    "position": "officer",
    "salary": 58760
  },
  {
    "name": "ana figuereo",
    "position": "officer",
    "salary": 58760
  },
  {
    "name": "joshua starnes",
    "position": "officer",
    "salary": 58760
  },
  {
    "name": "crystal ruiz",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "myisha mcconaughey",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "thomas thornhill",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "ryan savoy",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kevin wagner",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "linida smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "reinard naves",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jeffrey kopp",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kristopher smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tyque mccarthy",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "derrick mccall",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "karla oranchak",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kerron roberts",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "willis thomas",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "tracy wallace",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "raphael oum",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael muldrow",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "alex rodriguez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "myo kyaw",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "catherine lee",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ashely mitchell",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sean napper",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sean rosa",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "marc mcdavid",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "timothy jeffery",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "nikki maxwell",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lindsay tyler",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "leonor packer",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "erik smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jafaru osumah",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jeffrey smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher lilly",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "janell siplin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kareem tanner",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kathryn skaluba",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "scott sefton",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "mohammad monir",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nicholas smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john terry",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "travis westbrook",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john pugh",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "mark zinderman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "derek pennington",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "peter ng",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "leslie wheeler",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "greg tompa",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "james graham",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "nathan symanski",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "harry singleton",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "david leaty",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joshua rymon",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tyrone wallace",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "livio rodriguez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "derek washington",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jon lee",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "anthony rotimi",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "thomas o'donnell",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "rodney parks",
    "position": "assistant chief",
    "salary": 152727
  },
  {
    "name": "christopher sefton",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "jashawn logan",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "albert salleh",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sean williams",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "henry salice",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john rowland",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "douglas sarsfield",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "uthman lockett",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "benjamin rubin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tamaira watkins",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "alice lee",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "seth sackey",
    "position": "captain",
    "salary": 105522
  },
  {
    "name": "adrian ledesma",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jared rothman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "charles smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "peter reuter",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jonathan lauderdale",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "steve sanchez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joseph kuchta",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "damon lessey",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "qasim thomas",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "karane williams",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "thelma jarrett",
    "position": "principal",
    "salary": 105389
  },
  {
    "name": "steven murrell",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "scott koscielniak",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "felix lina",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "miguel rodriguezgil",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nikki lavenhouse",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "juan sanchez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kashara vivieca",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jerome williams",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael lattimore",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "eric levie",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "alan noznesky",
    "position": "captain paramedic",
    "salary": 105376
  },
  {
    "name": "patrick wilson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "shawn rooney",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "felicia wimbush",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "chinedu offomata",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kyle roe",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tammi warcholak",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stephen sharp",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "duane moore",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "francisco montano",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "travis reed",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "barbara parks",
    "position": "clinical program administrator",
    "salary": 105338
  },
  {
    "name": "cheryl sentino",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "justin lyon",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stanley rawls",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "adam shaatal",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jeffrey wisecarver",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john wright",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "alexandros varvounis",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ishevetta sawyer",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "anthony sharpe",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "miriam wishnick",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "william mcguirk",
    "position": "gen engineer",
    "salary": 105337
  },
  {
    "name": "michael selgas",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tricia rampersad",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sanetta parker",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "zachary lynch",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "bryon words",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "vincent norris",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "curits weiland",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "matthew reddy",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "mark lucas",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael lybarger",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stuart silverman",
    "position": "attorney",
    "salary": 105293
  },
  {
    "name": "ninya marbley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john scott",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nathaniel silver",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "leonard long",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "shaun webb",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lakisha pulley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "romayo simon",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "justin marlow",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kristopher plumley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tom vanblaricome",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "mary campbell",
    "position": "risk manager",
    "salary": 105252
  },
  {
    "name": "gerald walker",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jeremy verdon",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "vincent lucky",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jerry valbrun",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "geoffrey martin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ashley mancuso",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "charles vauhgan",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "eric watson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "flemmon wright",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "howard simon",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "benjamin finder",
    "position": "program analyst",
    "salary": 105236
  },
  {
    "name": "daniel merritt",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joshua martinez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "dana spriggs",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stephen pappalardo",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sarah pezzat",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "maximilian park",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jesse travers-smith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "khoa phan",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jerry whitfield",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "andrew turner",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "hermina peters",
    "position": "dean of stud achievement",
    "salary": 105187
  },
  {
    "name": "stephen stanford",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "mark minzak",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kiana oliver",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "paris white",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "emely melgar",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jason medina",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "carrell newberry",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kenneth mcravin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael miller",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "cynthia williams",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "cathy anderson",
    "position": "deputy director",
    "salary": 152686
  },
  {
    "name": "vicenc feliu",
    "position": "dir law lib",
    "salary": 105187
  },
  {
    "name": "billy mceachern",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kenneth stith",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "marshond matory",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "gregory shiffer",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ryan shifflett",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jennifer shiley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brian morgan",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lawrence mopkins",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "bryan mancuso",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "vincent manning",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "herman prescott 2nd",
    "position": "exec assistant to provost",
    "salary": 105187
  },
  {
    "name": "apolinar nunez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "wayne newbold",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john sprague",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joshua wells",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brian stacks",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michelle pittman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "alfreda mclaughlin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "titus pittman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "darnell peterson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jonathan white",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "krishna saraiya",
    "position": "internal auditor",
    "salary": 105187
  },
  {
    "name": "chanel spriggs",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "rachel pitzen",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "marot ncha",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "elphine williams",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ryan devlin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "wilfredo amaya",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "rodney fitts",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "clayton bass",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kelly baker",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "celeste foreman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "april massey",
    "position": "acting assistant dean",
    "salary": 105187
  },
  {
    "name": "victor deperalta",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "anne deroo",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christian deruvo",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "courtney clark",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "samuel folks",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "william holmes",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "guy augustin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "conan conaboy",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "eric frost",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "daniel kelly",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "henry small",
    "position": "battalion fire chief (ems)",
    "salary": 105142
  },
  {
    "name": "aulio angulo",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ivan anderson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joseph campbell",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tommie grable",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "esteban echazabal",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sherell bartley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "zdenek fronek",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher eckert",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kelan edwards",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael bridgett",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "james burney",
    "position": "traffic systems maint manager",
    "salary": 105067
  },
  {
    "name": "ernest cole",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kathleen coffey",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ashanti brooks",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ricardo iracks",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "cristen hobbs",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brandon baldwin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "vania evans",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kenneth carpenter",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "latonya elliott",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "fred fritts",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "clifford cooks",
    "position": "program manager",
    "salary": 105054
  },
  {
    "name": "thomas barnes",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "riley hong",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joseph french",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "pierre charles",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "shaun freeman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "david hong",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher blake",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ferney dennis",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "william bogner",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nelson alas",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "arthur brown",
    "position": "assistant peoples counsel",
    "salary": 105035
  },
  {
    "name": "melissa haendler",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "raymond hardaway",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "enis jevric",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ryan beach",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jose burgos",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher hall",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "maynor gonzalez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jeremy jeffers",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lauren griffin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "darrin haile",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "shelly chichester",
    "position": "attorney advisor",
    "salary": 105035
  },
  {
    "name": "ryan anselmo",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael beeler",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christian glynn",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "krystal cannata",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "robert hall",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "julia guthrie",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "natasha carrasco",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jason milne",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ryan kolb",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "istmania bonilla",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "katherine westcott",
    "position": "assistant general counsel",
    "salary": 105035
  },
  {
    "name": "samantha goodwin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sashay allen-brown",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "adam groves",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "drew gore",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "candice carey",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael harris",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "armand artinian",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "maelim gonzalez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "sharde harris",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "raymond belden",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "james south",
    "position": "deputy director",
    "salary": 152686
  },
  {
    "name": "blanca torres",
    "position": "attorney advisor",
    "salary": 105035
  },
  {
    "name": "jenny alvarenga",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brian hallahan",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kamau greene",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "owen grigsby",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "rudolf burgherr",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jose burgos",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher johnson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "andrea harris",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "barry gomez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "richardo amos",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lasheka bassey",
    "position": "deputy general counsel",
    "salary": 105035
  },
  {
    "name": "stephen jerguson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "richard antoine",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brian daniel",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "paul hrebenak",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brent copeland",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stanley bell",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tamika jackson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "douglas hain",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "andrew horos",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stephen bigelow",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "rishi garg",
    "position": "assistant peoples counsel",
    "salary": 105035
  },
  {
    "name": "bai bangura",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "alton henderson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "james gamble",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lacarsha garrett",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brett cuevas",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "johnny hernandez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "elias danho",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nigel d'abreu",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nicole brown",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher henry",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "chen-chia lo",
    "position": "information technology specialist",
    "salary": 105006
  },
  {
    "name": "larry hernandez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "timothy beirne",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "melesia hudson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "anita cooke-manley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "karen voglezon",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joshua arana-jimenez",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "steven sanders",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "pearce then",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "ho le",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher tilley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "denise tolliver",
    "position": "chief of staff",
    "salary": 105000
  },
  {
    "name": "patrick loftus",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "carlton watkins",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "aaron rudolph",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "india hemsley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lamar robinson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "eugenio cordova",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nicholas oliver",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "natali thomas",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "matthew jones",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "frederick kieser",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "hussein aden",
    "position": "financial auditor",
    "salary": 105000
  },
  {
    "name": "matthew batko",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "erick garcia burgos",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "abigail hughes",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "charles kiel",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nathan killingsworth",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kamil rembiszewski",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "felix claxton",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "faraz khan",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "oladapo odeniyide",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jonathan driver",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "robert miller",
    "position": "deputy director",
    "salary": 105000
  },
  {
    "name": "mario barr",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "virginia dineen",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "raj dohare",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "nathan clarke",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "eben-ezer figuereo",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "shyanti brooks",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "angelique core",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "randy done",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "derek gawrilow",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brandon joseph",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "susan bergmann",
    "position": "director of performance improv",
    "salary": 105000
  },
  {
    "name": "justin barney",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "christopher clayton",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kevin bergeron",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "dia hymes",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "michael diemer",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "germaine bennett",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "gerald brooks",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "jordan coleman",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "william clarke",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "thomas barksdale",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "kevin stogner",
    "position": "legislative counsel",
    "salary": 105000
  },
  {
    "name": "todd cory",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "eric king",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "george arhin",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joseph boehler",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brandon corbit",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "walter hawkins",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "joseph gibson",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "milton gilchrist",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "pernell blount",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "john crowley",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "lisa gregory",
    "position": "deputy compliance officer",
    "salary": 105000
  },
  {
    "name": "mario crmaric",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "mark abbey",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "bryan adelmeyer",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "andrew ge",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "simeon crawford",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "adam crist",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "stephen haynes",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tae kim",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "tamu carter",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "bradley barnes",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "brian hanlon",
    "position": "interim dir",
    "salary": 152686
  },
  {
    "name": "david hutchinson",
    "position": "chief of bus operations",
    "salary": 105000
  },
  {
    "name": "zeb barcus",
    "position": "officer",
    "salary": 58759
  },
  {
    "name": "peter johnson",
    "position": "legislative assistant",
    "salary": 58710
  },
  {
    "name": "charles west",
    "position": "musical instrument repairman/p",
    "salary": 58698
  },
  {
    "name": "larry jernagin",
    "position": "musical instrument repairman/p",
    "salary": 58698
  },
  {
    "name": "alexcia harrison",
    "position": "program coordinator",
    "salary": 58665
  },
  {
    "name": "yvette cobb",
    "position": "realty specialist",
    "salary": 58665
  },
  {
    "name": "emily allshouse",
    "position": "program coordinator",
    "salary": 58665
  },
  {
    "name": "daphne harrison",
    "position": "program coordinator",
    "salary": 58665
  },
  {
    "name": "william gray",
    "position": "recreation therapist",
    "salary": 58630
  },
  {
    "name": "charles davis",
    "position": "management support specialist",
    "salary": 58630
  },
  {
    "name": "lauren ratner",
    "position": "bureau chief",
    "salary": 105000
  },
  {
    "name": "rita poindexter",
    "position": "staff assistant",
    "salary": 58630
  },
  {
    "name": "machelia largin",
    "position": "management liaison specialist",
    "salary": 58630
  },
  {
    "name": "fredericka shaw",
    "position": "anc staff assistant",
    "salary": 58630
  },
  {
    "name": "ricardo stewart",
    "position": "emergency operator info specialist",
    "salary": 58630
  },
  {
    "name": "heather cromwell",
    "position": "management analyst",
    "salary": 58630
  },
  {
    "name": "cornell stone",
    "position": "contract services specialist",
    "salary": 58630
  },
  {
    "name": "shawn anderson",
    "position": "recreation therapist",
    "salary": 58630
  },
  {
    "name": "bobby smith",
    "position": "emergency operator specialist",
    "salary": 58630
  },
  {
    "name": "barbara pittman",
    "position": "vet benefits program specialist",
    "salary": 58630
  },
  {
    "name": "joann spencer",
    "position": "administrative officer",
    "salary": 58630
  },
  {
    "name": "gladys kamau",
    "position": "manager trng & educ & comm revital",
    "salary": 105000
  },
  {
    "name": "alice overton",
    "position": "executive assistant",
    "salary": 58630
  },
  {
    "name": "kendra dinkins",
    "position": "care coor",
    "salary": 58630
  },
  {
    "name": "patricia porter",
    "position": "organizational development spe",
    "salary": 58630
  },
  {
    "name": "benita russ",
    "position": "program coordinator",
    "salary": 58630
  },
  {
    "name": "terredell burroughs",
    "position": "residential clinical coord",
    "salary": 58630
  },
  {
    "name": "delores hill",
    "position": "staff assistant",
    "salary": 58630
  },
  {
    "name": "mavis oudkerk",
    "position": "reg docket specialist",
    "salary": 58630
  },
  {
    "name": "linda sun",
    "position": "program support assistant",
    "salary": 58630
  },
  {
    "name": "leroy williams",
    "position": "computer specialist",
    "salary": 58630
  },
  {
    "name": "steven benefield",
    "position": "comm management specialist",
    "salary": 58630
  },
  {
    "name": "bellur ravishankar",
    "position": "deputy division chief",
    "salary": 105000
  },
  {
    "name": "carolyn smith",
    "position": "community outreach coor",
    "salary": 58630
  },
  {
    "name": "daniel trigo",
    "position": "visual info specialist",
    "salary": 58630
  },
  {
    "name": "henry miranda",
    "position": "qa spec (auto)",
    "salary": 58630
  },
  {
    "name": "marco santiago",
    "position": "community outreach coor",
    "salary": 58630
  },
  {
    "name": "dorothy thomas",
    "position": "education services specialist",
    "salary": 58630
  },
  {
    "name": "deborah bryant",
    "position": "staff assistant",
    "salary": 58630
  },
  {
    "name": "shavon turner",
    "position": "program support assistant",
    "salary": 58630
  },
  {
    "name": "alex taylor del cid",
    "position": "equal opportunity specialist",
    "salary": 58630
  },
  {
    "name": "lucille hart",
    "position": "administrative support specialist",
    "salary": 58630
  },
  {
    "name": "derek schultz",
    "position": "program analyst",
    "salary": 58630
  },
  {
    "name": "jasmine hayes",
    "position": "planning, data and quality ass",
    "salary": 105000
  },
  {
    "name": "valentine breitbarth",
    "position": "management analyst",
    "salary": 58630
  },
  {
    "name": "marsha thompson",
    "position": "paralegal specialist",
    "salary": 58630
  },
  {
    "name": "nykisha cleveland",
    "position": "public affairs specialist",
    "salary": 58630
  },
  {
    "name": "christopher parler",
    "position": "program specialist",
    "salary": 58630
  },
  {
    "name": "pamela johnson",
    "position": "electrician",
    "salary": 58594
  },
  {
    "name": "tammy lorick",
    "position": "social services rep",
    "salary": 58584
  },
  {
    "name": "akiketa shelton",
    "position": "social services rep",
    "salary": 58584
  },
  {
    "name": "horniman orjisson",
    "position": "motor vehicle inspector",
    "salary": 58584
  },
  {
    "name": "thomas dooley",
    "position": "abandoned vehicle invest",
    "salary": 58584
  },
  {
    "name": "nicole lynch",
    "position": "attorney advisor",
    "salary": 58576
  },
  {
    "name": "edna johnson",
    "position": "vocational rehabil",
    "salary": 105000
  },
  {
    "name": "christopher lyons",
    "position": "locksmith",
    "salary": 58573
  },
  {
    "name": "larry drayton",
    "position": "maintenance mechanic",
    "salary": 58573
  },
  {
    "name": "patrick spencer",
    "position": "equipment repairer",
    "salary": 58573
  },
  {
    "name": "daniel ross",
    "position": "mechanic (boat)",
    "salary": 58573
  },
  {
    "name": "jeffrey watts",
    "position": "door systems mechanic",
    "salary": 58573
  },
  {
    "name": "mallie wiggins",
    "position": "plumber/pipefitter",
    "salary": 58573
  },
  {
    "name": "richard walker",
    "position": "lead accounting tech",
    "salary": 58571
  },
  {
    "name": "john alston",
    "position": "accounting tech",
    "salary": 58571
  },
  {
    "name": "amanda mosley",
    "position": "legal instruments examiner",
    "salary": 58570
  },
  {
    "name": "william tuohy",
    "position": "information technology specialist",
    "salary": 58504
  },
  {
    "name": "margaret stephens-aliendre",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "kim butler",
    "position": "staff assistant",
    "salary": 58504
  },
  {
    "name": "leander brown",
    "position": "program manager",
    "salary": 58504
  },
  {
    "name": "ngoc-tran vu",
    "position": "recruitment specialist",
    "salary": 58504
  },
  {
    "name": "keon jackson",
    "position": "firefighter tech",
    "salary": 58488
  },
  {
    "name": "daniel mcneece",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "george brooke",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "timothy gross",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "jason siegel",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "ryan fischer",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "michael cosker",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "carolyn cobbs",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "glenn fitzpatrick",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "anthony kelleher",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "robert bozarth",
    "position": "firefighter vice tech",
    "salary": 58479
  },
  {
    "name": "douglas clime",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "keishea jackson",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "mark trace",
    "position": "firefighter vice tech",
    "salary": 58479
  },
  {
    "name": "thomas silverstrim",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "walter brown",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "david youngling",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "william keenan",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "deborah bergeron",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "jeffery taylor",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "eric jones",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "clifford miller",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "ellis pollard",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "mark colbert",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "paul patterson",
    "position": "firefighter vice tech",
    "salary": 58479
  },
  {
    "name": "adam jorjorian",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "mario crudup",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "kyle kendrick",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "christopher eiker",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "adelaide flamer",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "arthenious butler",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "james busi",
    "position": "firefighter vice tech",
    "salary": 58479
  },
  {
    "name": "matthew haynes",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "michael murphy",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "brian palmer",
    "position": "firefighter tech",
    "salary": 58479
  },
  {
    "name": "sandra clarke",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "marini woodland",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "suzanne merchant",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "erika pyner",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "brittany curtis",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "barbara bazron",
    "position": "deputy director",
    "salary": 152686
  },
  {
    "name": "anne evans",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "ausha whitehead",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "kunume onwueme",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "sharon cave",
    "position": "sanitarian",
    "salary": 58397
  },
  {
    "name": "ricshara knight",
    "position": "social worker",
    "salary": 58397
  },
  {
    "name": "lequilla shark",
    "position": "info specialist",
    "salary": 58386
  },
  {
    "name": "albert collins",
    "position": "fuel management specialist",
    "salary": 58386
  },
  {
    "name": "robert white",
    "position": "construction representative",
    "salary": 58386
  },
  {
    "name": "jeffrey adkisson",
    "position": "information technology specialist",
    "salary": 58386
  },
  {
    "name": "mariama sawi",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "sonia neblett",
    "position": "customer service representative",
    "salary": 58386
  },
  {
    "name": "cheryl hiers-wilhoyte",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "john shackelford",
    "position": "customer service representative",
    "salary": 58386
  },
  {
    "name": "john lynch",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "vanessa hoffman",
    "position": "accounts payable tech",
    "salary": 58386
  },
  {
    "name": "cecil malone",
    "position": "social service assistant",
    "salary": 58386
  },
  {
    "name": "eunice morgan",
    "position": "accounts payable tech",
    "salary": 58386
  },
  {
    "name": "jacqueline henderson",
    "position": "legal assistant",
    "salary": 58386
  },
  {
    "name": "joyce owens",
    "position": "accounting technician",
    "salary": 58386
  },
  {
    "name": "sondra phillips-gilbert",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "patricia jones",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "arthur thompson",
    "position": "social service assistant",
    "salary": 58386
  },
  {
    "name": "jeffrey grant",
    "position": "principal",
    "salary": 104977
  },
  {
    "name": "joann richards",
    "position": "accounting tech",
    "salary": 58386
  },
  {
    "name": "linda hawkins grimes",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "harry cokley",
    "position": "administrative support specialist",
    "salary": 58386
  },
  {
    "name": "edna pittman",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "emmanuel cummings",
    "position": "abandoned vehicle investigator",
    "salary": 58386
  },
  {
    "name": "anthony primas",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "brigetta proctor",
    "position": "social service assistant",
    "salary": 58386
  },
  {
    "name": "marville wilson",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "donna small",
    "position": "case manager",
    "salary": 58386
  },
  {
    "name": "hortencia bustamante",
    "position": "investigator",
    "salary": 58386
  },
  {
    "name": "deon merene",
    "position": "attorney advisor",
    "salary": 104919
  },
  {
    "name": "kecia northington",
    "position": "intake hotline worker",
    "salary": 58386
  },
  {
    "name": "ruby rigby",
    "position": "program specialist",
    "salary": 58386
  },
  {
    "name": "judith ezzell",
    "position": "intake hotline worker",
    "salary": 58386
  },
  {
    "name": "vonyee hall",
    "position": "legal instruments examiner",
    "salary": 58386
  },
  {
    "name": "joseph wall",
    "position": "forensic psych tech",
    "salary": 58386
  },
  {
    "name": "jacqueline bolden martin",
    "position": "forensic psych tech",
    "salary": 58386
  },
  {
    "name": "deborah wynn",
    "position": "legal instruments examiner",
    "salary": 58386
  },
  {
    "name": "cynthia vessels",
    "position": "driver license examiner mvo",
    "salary": 58386
  },
  {
    "name": "paul travers",
    "position": "forensic psych tech",
    "salary": 58386
  },
  {
    "name": "elmore williams",
    "position": "motor vehicle inspector",
    "salary": 58386
  },
  {
    "name": "ana veria",
    "position": "director, policy support divis",
    "salary": 104906
  },
  {
    "name": "cheryl diggs",
    "position": "legal instruments examiner",
    "salary": 58386
  },
  {
    "name": "jovanny alfonso",
    "position": "mental health specialist",
    "salary": 58386
  },
  {
    "name": "demetra rhone",
    "position": "accounting technician",
    "salary": 58386
  },
  {
    "name": "linda boyd",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "michael coley",
    "position": "accounting tech",
    "salary": 58386
  },
  {
    "name": "dwayne covington",
    "position": "legal instruments examiner",
    "salary": 58386
  },
  {
    "name": "howard smith",
    "position": "motor vehicle inspector",
    "salary": 58386
  },
  {
    "name": "manuel diaz",
    "position": "legal instruments examiner",
    "salary": 58386
  },
  {
    "name": "linda pierce",
    "position": "311 operations team leader",
    "salary": 58386
  },
  {
    "name": "stanley huff",
    "position": "forensic psych counselor",
    "salary": 58386
  },
  {
    "name": "lisa truitt",
    "position": "program manager",
    "salary": 104899
  },
  {
    "name": "shirley daniels",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "sharlene carter",
    "position": "accounting tech",
    "salary": 58386
  },
  {
    "name": "monique turner",
    "position": "collection agent",
    "salary": 58386
  },
  {
    "name": "charlye walton",
    "position": "payroll technician",
    "salary": 58386
  },
  {
    "name": "kemba kelton",
    "position": "accounting tech",
    "salary": 58386
  },
  {
    "name": "helen shamwell",
    "position": "program suppor",
    "salary": 58386
  },
  {
    "name": "kelvin fuller",
    "position": "motor vehicle inspector",
    "salary": 58386
  },
  {
    "name": "kevin mcreynolds",
    "position": "compliance monitor",
    "salary": 58386
  },
  {
    "name": "kenneth smith",
    "position": "detention review specialist",
    "salary": 58386
  },
  {
    "name": "william green",
    "position": "compliance specialist",
    "salary": 58386
  },
  {
    "name": "kelton ellerbe",
    "position": "captain",
    "salary": 104864
  },
  {
    "name": "steven jordan",
    "position": "social service assistant",
    "salary": 58386
  },
  {
    "name": "sylvia gwathmey",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "donna dorsey",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "lawrence robertson",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "william jones",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "leroy gordon",
    "position": "program specialist",
    "salary": 58386
  },
  {
    "name": "stella dorn",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "emanuel yeoman",
    "position": "maintenance specialist",
    "salary": 58386
  },
  {
    "name": "susie smith",
    "position": "management analyst",
    "salary": 58386
  },
  {
    "name": "gail davis-cooper",
    "position": "customer service representative",
    "salary": 58386
  },
  {
    "name": "ronnie robin",
    "position": "captain",
    "salary": 104864
  },
  {
    "name": "willis powell",
    "position": "program system tech",
    "salary": 58386
  },
  {
    "name": "woody ward",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "terrye neal",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "lisa clarke",
    "position": "librarian",
    "salary": 58386
  },
  {
    "name": "mae white jennings",
    "position": "paralegal specialist",
    "salary": 58386
  },
  {
    "name": "kendra jennings",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "karen williams",
    "position": "investigator",
    "salary": 58386
  },
  {
    "name": "albert hardeman",
    "position": "management analyst",
    "salary": 58386
  },
  {
    "name": "samson adeboye",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "odette abraham",
    "position": "program specialist",
    "salary": 58386
  },
  {
    "name": "graydon dupree",
    "position": "captain",
    "salary": 104864
  },
  {
    "name": "rhonda cowie",
    "position": "unemployment compensation clai",
    "salary": 58386
  },
  {
    "name": "kathleen walters",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "diane white james bey",
    "position": "program specialist",
    "salary": 58386
  },
  {
    "name": "lawann peterson",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "terrell powell",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "hasker austin",
    "position": "abandoned vehicle investigator",
    "salary": 58386
  },
  {
    "name": "tina grear",
    "position": "juvenile justice inst counselo",
    "salary": 58386
  },
  {
    "name": "marva newman",
    "position": "program monitor",
    "salary": 58386
  },
  {
    "name": "james williams",
    "position": "monitoring specialist",
    "salary": 58386
  },
  {
    "name": "donna bennett",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "patricia young",
    "position": "principal,special ed",
    "salary": 104851
  },
  {
    "name": "marva jackson",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "richard jones",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "mariel edge",
    "position": "public health analyst",
    "salary": 58386
  },
  {
    "name": "olivia norris",
    "position": "investigator",
    "salary": 58386
  },
  {
    "name": "junalisa thompson",
    "position": "program specialist",
    "salary": 58386
  },
  {
    "name": "carolyn hight",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "christina proctor",
    "position": "administrative assistant",
    "salary": 58386
  },
  {
    "name": "melonese dickson",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "recniquia dickens",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "kim campbell",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "ginnie cooper",
    "position": "executive director",
    "salary": 188044
  },
  {
    "name": "janet maher",
    "position": "chief compliance officer",
    "salary": 152686
  },
  {
    "name": "jennifer frentress",
    "position": "principal",
    "salary": 104851
  },
  {
    "name": "janet daum",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "rodney brown",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "howard marshall",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "russell dixon",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "deyanne nicholas",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "theresa holt",
    "position": "administrative officer",
    "salary": 58386
  },
  {
    "name": "melvin gaines",
    "position": "social service representive",
    "salary": 58386
  },
  {
    "name": "larry kinney",
    "position": "recreation specialist",
    "salary": 58386
  },
  {
    "name": "jacqueline thompson",
    "position": "staff assistant",
    "salary": 58386
  },
  {
    "name": "cheryl johnson",
    "position": "compliance specialist",
    "salary": 58386
  },
  {
    "name": "ericka bryson walker",
    "position": "project manager",
    "salary": 104804
  },
  {
    "name": "anthony pierce",
    "position": "workers compensation recipient",
    "salary": 58370
  },
  {
    "name": "james proctor",
    "position": "maintenance mechanic",
    "salary": 58302
  },
  {
    "name": "crystal graham",
    "position": "librarian",
    "salary": 58252
  },
  {
    "name": "stephanie nachemja- bunton",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "rosalie garrett",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "amanda jarrard",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "simone harris-woodard",
    "position": "librarian",
    "salary": 58246
  },
  {
    "name": "osen osagie",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "patricia odom",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "lauren mcalee",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "walter grochala",
    "position": "battalion ems supervisor (capt",
    "salary": 104774
  },
  {
    "name": "trilby hillenbrand",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "clairee hammond",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "william piser",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "amonica jain",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "jacqueline mcmillan",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "sandra lang",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "christina phelps",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "andrew green",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "christopher latham",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "ashley owens",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "rene bass",
    "position": "dep associate administrator",
    "salary": 104707
  },
  {
    "name": "shakir ghazi",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "john larue",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "sarah george",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "january morrison",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "christine reuss",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "laqurisha gray",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "scott harding",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "brynna larsen",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "mark ludes",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "jillann mode",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "brian harris",
    "position": "captain",
    "salary": 104684
  },
  {
    "name": "megan patterson",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "michelle mosher",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "sheryl garner",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "rufus mcdowell",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "eliza robinson",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "tonia padgett",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "adele mujal",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "nicole perry",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "megan gallo",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "kerianne piester",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "teresa weedon",
    "position": "captain",
    "salary": 104684
  },
  {
    "name": "cecilia miles",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "ashley hinton",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "cathie laurins",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "vaani gupta",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "andrew baca",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "jordan meyer",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "mary macek",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "lauren ramirez",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "sashah ramirez",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "megan hubbard",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "nicoline shulterbrandt",
    "position": "environmental protection",
    "salary": 104669
  },
  {
    "name": "giselle pile",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "thajilah olaiya",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "patrice garnette",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "shannon mcfadden",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "jenny jou",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "kristen hayes",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "rhonda humphries",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "patrick reed",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "alexandra stryker",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "kelly watson",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "april moore",
    "position": "manager job analysis",
    "salary": 104669
  },
  {
    "name": "kelly shields",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "carl vandunk",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "donna saxon",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "emily thulier",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "andrea spann",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "erica rose",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "militez'egga tecle",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "amber smith",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "kelly robson",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "william taylor",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "roy simmons",
    "position": "auditor",
    "salary": 104669
  },
  {
    "name": "jennifer akujuo",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "amber scott",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "brooks warnick",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "paula smith",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "erin scott",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "jami vetter",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "jane wachtmeister",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "rebecca schmidt",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "margaret sullivan",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "cheryl swit",
    "position": "therapist,speech",
    "salary": 58246
  },
  {
    "name": "valerie ware",
    "position": "program manager",
    "salary": 104669
  },
  {
    "name": "shadia yamin",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "andrea townsend",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "tiffani jones",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "christopher dejarnett",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "melina willoughby",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "denise brundidge",
    "position": "psychologist,school",
    "salary": 58246
  },
  {
    "name": "evelyn mckenzie",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "diana rehfeldt",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "mark fiorill",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "marie domenici",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "maurice henderson",
    "position": "chief administrative officer",
    "salary": 152686
  },
  {
    "name": "david baker",
    "position": "qa & analysis officer",
    "salary": 104669
  },
  {
    "name": "jacqueline wozniak",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "adam evans",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "twana bradley",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "alicia bruyning",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "kathryn alwon",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "rachel blessing",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "elizabeth collins",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "kathryn bunger",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "lynette doaks",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "youn chang",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "wanda tolliver",
    "position": "admin",
    "salary": 104660
  },
  {
    "name": "erika caputo",
    "position": "librarian",
    "salary": 58246
  },
  {
    "name": "lindsay de hartchuck",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "mary cue",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "brittany cox",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "adam franken",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "caryn davidson",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "brianna copley",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "cameron aiken",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "lauren castillo",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "muriel brown",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "james campbell",
    "position": "admin",
    "salary": 104660
  },
  {
    "name": "halima diaz",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "linda cadogan",
    "position": "teacher",
    "salary": 58246
  },
  {
    "name": "generva rhein",
    "position": "teacher",
    "salary": 58170
  },
  {
    "name": "sarah miller",
    "position": "teacher",
    "salary": 58170
  },
  {
    "name": "laura zimmerman",
    "position": "teacher",
    "salary": 58166
  },
  {
    "name": "mark phillips",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "kristin kelly",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "franklin oliver",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "melodie henderson",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "anne roberson",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "kenneth hughes",
    "position": "attorney advisor",
    "salary": 104621
  },
  {
    "name": "marion price",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "gabrielle riesner",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "justin jacobs",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "james jackson",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "walter riley",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "travis mapp",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "brandon mckenzie freeman",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "yolanda green",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "noele mcconico",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "shanna williams-carr",
    "position": "instructional coach",
    "salary": 58160
  },
  {
    "name": "noel antonio",
    "position": "attorney advisor",
    "salary": 104621
  },
  {
    "name": "brian wiltshire",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "camille townsend",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "avigail frager",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "tara shelton",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "michelle turner",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "aram boykin",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "nicholas bennett",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "kendall evans",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "laura bissi",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "bethany bronson",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "james cheeks",
    "position": "general engineer",
    "salary": 104493
  },
  {
    "name": "esther amaya",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "shamayne coles",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "leslie allen",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "heather weikert",
    "position": "teacher",
    "salary": 58160
  },
  {
    "name": "james slattery",
    "position": "administrative aide",
    "salary": 58151
  },
  {
    "name": "joseph young",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "april wyke-ransome",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "aaron easterling",
    "position": "plans review coor",
    "salary": 58145
  },
  {
    "name": "cassandra harper",
    "position": "librarian",
    "salary": 58145
  },
  {
    "name": "tia williams",
    "position": "support services specialist",
    "salary": 58145
  },
  {
    "name": "keith deville",
    "position": "captain",
    "salary": 104485
  },
  {
    "name": "kisok roh",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "dario stewart",
    "position": "manpower development specialist",
    "salary": 58145
  },
  {
    "name": "oliver fontem",
    "position": "librarian",
    "salary": 58145
  },
  {
    "name": "william james",
    "position": "manpower development specialist",
    "salary": 58145
  },
  {
    "name": "rogelio wilson",
    "position": "housing inspector",
    "salary": 58145
  },
  {
    "name": "zeola dickey",
    "position": "program support assistant",
    "salary": 58145
  },
  {
    "name": "heather petsche",
    "position": "librarian",
    "salary": 58145
  },
  {
    "name": "lawrence taylor",
    "position": "code compl specialist",
    "salary": 58145
  },
  {
    "name": "kimberly roane",
    "position": "loan specialist",
    "salary": 58145
  },
  {
    "name": "carolyn berry",
    "position": "workforce development specialist",
    "salary": 58145
  },
  {
    "name": "david taylor",
    "position": "captain",
    "salary": 104485
  },
  {
    "name": "derek gray",
    "position": "archivist",
    "salary": 58145
  },
  {
    "name": "robert reid",
    "position": "program suppor",
    "salary": 58145
  },
  {
    "name": "rohan reid",
    "position": "program support assistant",
    "salary": 58145
  },
  {
    "name": "christopher rollins",
    "position": "manpower development specialist",
    "salary": 58145
  },
  {
    "name": "alletta samuels",
    "position": "apprenticeship & training rep",
    "salary": 58145
  },
  {
    "name": "regina madison",
    "position": "unemployment compensation clai",
    "salary": 58145
  },
  {
    "name": "steven adedapo",
    "position": "uc claims examiner",
    "salary": 58145
  },
  {
    "name": "elisa babel",
    "position": "librarian",
    "salary": 58145
  },
  {
    "name": "james sager",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "karla hill",
    "position": "manpower development specialist",
    "salary": 58145
  },
  {
    "name": "duncan masale",
    "position": "information technology specialist",
    "salary": 104450
  },
  {
    "name": "jim alvarenga",
    "position": "wage & hour comp spec (bil)",
    "salary": 58145
  },
  {
    "name": "paul sweeney",
    "position": "librarian",
    "salary": 58145
  },
  {
    "name": "reginald robinson",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "sean fuller",
    "position": "administrative specialist",
    "salary": 58145
  },
  {
    "name": "michelle whitney",
    "position": "child care eligibility specialist",
    "salary": 58145
  },
  {
    "name": "lynora hall",
    "position": "staff assistant",
    "salary": 58145
  },
  {
    "name": "stephanie terry",
    "position": "service coordinator",
    "salary": 58145
  },
  {
    "name": "darlene misher",
    "position": "construction representative",
    "salary": 58145
  },
  {
    "name": "nithya iyer",
    "position": "social insurance specialist",
    "salary": 58145
  },
  {
    "name": "rhonda jackman",
    "position": "service coordinator",
    "salary": 58145
  },
  {
    "name": "keesha blythe",
    "position": "principal",
    "salary": 104440
  },
  {
    "name": "venice alexander-liggans",
    "position": "service coordinator",
    "salary": 58145
  },
  {
    "name": "maleka ware",
    "position": "social insurance specialist",
    "salary": 58145
  },
  {
    "name": "joyce carter",
    "position": "property control and disposal",
    "salary": 58145
  },
  {
    "name": "ada waters",
    "position": "property control and disposal",
    "salary": 58145
  },
  {
    "name": "michelle mathis",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "renee vandyke",
    "position": "real property program speciali",
    "salary": 58145
  },
  {
    "name": "jeffrey hammond",
    "position": "case manager",
    "salary": 58145
  },
  {
    "name": "kelli cheek",
    "position": "law clerk",
    "salary": 58145
  },
  {
    "name": "fernando myrie",
    "position": "support enforcement specialist",
    "salary": 58145
  },
  {
    "name": "damion burke",
    "position": "revenue officer",
    "salary": 58145
  },
  {
    "name": "abigail smith",
    "position": "director",
    "salary": 152686
  },
  {
    "name": "john cates",
    "position": "safety & occup hlth specialist",
    "salary": 104301
  },
  {
    "name": "karen lomax",
    "position": "pension benefits specialist",
    "salary": 58145
  },
  {
    "name": "diane hopkins",
    "position": "support enforcement specialist",
    "salary": 58145
  },
  {
    "name": "quinzel jackson",
    "position": "staff assistant",
    "salary": 58145
  },
  {
    "name": "yazmin delgado sanchez",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "margaret fowler",
    "position": "licensing specialist",
    "salary": 58145
  },
  {
    "name": "yolanda jimenez",
    "position": "mental health specialist",
    "salary": 58145
  },
  {
    "name": "mia bowden",
    "position": "lead public veh enf inspector",
    "salary": 58145
  },
  {
    "name": "gwendolyn sanders",
    "position": "coordinator (ftm)",
    "salary": 58145
  },
  {
    "name": "keith collins",
    "position": "mental health specialist",
    "salary": 58145
  },
  {
    "name": "carl martin",
    "position": "lead public veh enf inspector",
    "salary": 58145
  },
  {
    "name": "benjamin hall",
    "position": "director of music",
    "salary": 104294
  },
  {
    "name": "joseph bembry",
    "position": "program support assistant",
    "salary": 58145
  },
  {
    "name": "yemarshet kebede",
    "position": "paralegal specialist",
    "salary": 58145
  },
  {
    "name": "lydia sanchez",
    "position": "social insurance specialist",
    "salary": 58145
  },
  {
    "name": "raymond kinlaw",
    "position": "vocational rehabilitation specialist",
    "salary": 58145
  },
  {
    "name": "alemu hailemariam",
    "position": "accountant",
    "salary": 58145
  },
  {
    "name": "robin wallace",
    "position": "education services monitor",
    "salary": 58145
  },
  {
    "name": "monica davis",
    "position": "vital statistics specialist",
    "salary": 58145
  },
  {
    "name": "thomasine pointer",
    "position": "health licensing specialist",
    "salary": 58145
  },
  {
    "name": "tara humphrey",
    "position": "program coor",
    "salary": 58145
  },
  {
    "name": "rebecca stroy harris",
    "position": "public health analyst",
    "salary": 58145
  },
  {
    "name": "sheryl hamilton",
    "position": "dir, comm learn & sch supt",
    "salary": 104294
  },
  {
    "name": "cheryl rogers",
    "position": "program support assistant",
    "salary": 58145
  },
  {
    "name": "elizabeth betts",
    "position": "pathologists' assistant",
    "salary": 58145
  },
  {
    "name": "sarah abdul mumin",
    "position": "construction representative",
    "salary": 58145
  },
  {
    "name": "elizabeth cephas",
    "position": "program specialist",
    "salary": 58145
  },
  {
    "name": "charles sampson",
    "position": "code compl specialist",
    "salary": 58145
  },
  {
    "name": "stacey collins",
    "position": "construction representative",
    "salary": 58145
  },
  {
    "name": "yolanda mitchell",
    "position": "vocational rehabilitation specialist",
    "salary": 58145
  },
  {
    "name": "francis egbo",
    "position": "environmental protection speci",
    "salary": 58145
  },
  {
    "name": "judy griffin",
    "position": "vocational rehabilitation specialist",
    "salary": 58145
  },
  {
    "name": "gail norman",
    "position": "engineering technician",
    "salary": 58145
  },
  {
    "name": "elba garcia",
    "position": "executive director",
    "salary": 104294
  },
  {
    "name": "terraine wiggins",
    "position": "transportation spec (traff op)",
    "salary": 58145
  },
  {
    "name": "william bolden",
    "position": "staff assistant",
    "salary": 58145
  },
  {
    "name": "syedah singleton- elimu",
    "position": "program analyst",
    "salary": 58145
  },
  {
    "name": "frances wynn",
    "position": "social insurance specialist",
    "salary": 58145
  },
  {
    "name": "tianeka arno",
    "position": "engineering technician",
    "salary": 58145
  },
  {
    "name": "ibrahim famuditimi",
    "position": "environmental protection speci",
    "salary": 58145
  },
  {
    "name": "lawanda jones",
    "position": "energy program specialist",
    "salary": 58145
  },
  {
    "name": "karen tyler",
    "position": "service coordinator",
    "salary": 58145
  },
  {
    "name": "theresa shelton",
    "position": "information technology specialist",
    "salary": 58145
  },
  {
    "name": "rahsaan french",
    "position": "engineering technician",
    "salary": 58145
  },
  {
    "name": "janese bechtol",
    "position": "attorney advisor",
    "salary": 104293
  },
  {
    "name": "jessica rosa",
    "position": "vocational rehabilitation specialist",
    "salary": 58145
  },
  {
    "name": "ki cho",
    "position": "environmental engineer",
    "salary": 58145
  },
  {
    "name": "jesse gauthier",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "davina douglas",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "alexia ramos",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "holly nantais",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "jennifer ramsey",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "lekia holden",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "latasha cook",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "katharine anderson",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "felicia brant",
    "position": "exec dir, development",
    "salary": 104274
  },
  {
    "name": "oscar de la puente",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "christine rey",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "giovanna puellella-shaw",
    "position": "teacher",
    "salary": 58126
  },
  {
    "name": "tama tolson",
    "position": "contract administrator",
    "salary": 58084
  },
  {
    "name": "warren lewis",
    "position": "trans,accident investigat",
    "salary": 58084
  },
  {
    "name": "tanya mackall",
    "position": "accident investigator",
    "salary": 58084
  },
  {
    "name": "andreas papanicolaou",
    "position": "medical technologist",
    "salary": 58018
  },
  {
    "name": "imelda sison",
    "position": "medical technologist",
    "salary": 58018
  },
  {
    "name": "tatia hart",
    "position": "terminal management specialist",
    "salary": 58000
  },
  {
    "name": "humberto gomez",
    "position": "workers compensation recipient",
    "salary": 58000
  },
  {
    "name": "leela shivadhanam",
    "position": "information technology specialist",
    "salary": 104194
  },
  {
    "name": "gary manning",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "belinda knight",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "linwood becton",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "dwayne pugh",
    "position": "youth development representati",
    "salary": 57957
  },
  {
    "name": "robert walker",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "sharif deramus",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "dianna brown",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "theresa morgan",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "phillip dickens",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "ethel turner evans el",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "linda barton walker",
    "position": "program analyst",
    "salary": 104194
  },
  {
    "name": "jerry moore",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "ibrahim kondeh",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "shuey saunders",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "reynold murray",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "donald lipford",
    "position": "youth development representati",
    "salary": 57957
  },
  {
    "name": "david somerville",
    "position": "youth development representati",
    "salary": 57957
  },
  {
    "name": "gregory robinson",
    "position": "youth development representati",
    "salary": 57957
  },
  {
    "name": "tony sutton",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "carl butler",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "elton thomas",
    "position": "youth development representati",
    "salary": 57957
  },
  {
    "name": "malachi brown",
    "position": "telecommications specialist",
    "salary": 104194
  },
  {
    "name": "evans chambers",
    "position": "youth development representati",
    "salary": 57957
  },
  {
    "name": "paul scott",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "eric king",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "lottie hudson",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "donald king",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "khalid javed",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "duke harriston",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "van holliday",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "letha robinson",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "kathy lawton",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "cheryl ruffin",
    "position": "information technology specialist",
    "salary": 104194
  },
  {
    "name": "byron lindsay",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "carlette makins",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "troy musgrove",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "thomas lewis",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "barbara shank",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "larry mccarthy",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "mary martin daniels",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "angela alston",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "jerry carr",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "joseph cloyd",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "glenn minter",
    "position": "supervisor information technol",
    "salary": 152686
  },
  {
    "name": "poornima pulugurta",
    "position": "it project manager",
    "salary": 104194
  },
  {
    "name": "gerry dyson",
    "position": "correctional officer",
    "salary": 57957
  },
  {
    "name": "william boone",
    "position": "emergency oper & info specialist",
    "salary": 57938
  },
  {
    "name": "john myrick",
    "position": "correctional treatment specialist",
    "salary": 57935
  },
  {
    "name": "jermale farewell",
    "position": "correctional treatment specialist",
    "salary": 57935
  },
  {
    "name": "sheila marshall",
    "position": "correctional treatment specialist",
    "salary": 57935
  },
  {
    "name": "eric gray",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "earl briggs",
    "position": "youth development representati",
    "salary": 57931
  },
  {
    "name": "brian belton",
    "position": "youth development representati",
    "salary": 57931
  },
  {
    "name": "gregory shields",
    "position": "youth development representati",
    "salary": 57931
  },
  {
    "name": "sundiata sudah",
    "position": "youth development representati",
    "salary": 57931
  },
  {
    "name": "ranee phillips",
    "position": "budget officer",
    "salary": 104194
  },
  {
    "name": "melinda simms",
    "position": "youth development representati",
    "salary": 57931
  },
  {
    "name": "yero umoja",
    "position": "youth development representati",
    "salary": 57931
  },
  {
    "name": "sandra griffin",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "angelo childs",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "justin free",
    "position": "paramedic",
    "salary": 57931
  },
  {
    "name": "herman austin",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "melvin knox",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "andre' cole",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "erin humphrey",
    "position": "paramedic",
    "salary": 57931
  },
  {
    "name": "derek weinroth",
    "position": "paramedic",
    "salary": 57931
  },
  {
    "name": "sheryl ellison-ponds",
    "position": "realty program specialist",
    "salary": 104194
  },
  {
    "name": "jane ibrahim",
    "position": "paramedic",
    "salary": 57931
  },
  {
    "name": "joyce tates",
    "position": "correctional officer",
    "salary": 57931
  },
  {
    "name": "wilma thompson",
    "position": "office manager",
    "salary": 57923
  },
  {
    "name": "christopher budenich",
    "position": "visiting instructor",
    "salary": 57923
  },
  {
    "name": "eleanor seale",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "hattie moore",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "nirva lafortune",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "mary lee",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "francine morgan",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "teretha cheeks",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "peter luciano",
    "position": "risk manager",
    "salary": 104194
  },
  {
    "name": "tannia tillman",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "lisa winston stokes",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "hosey white",
    "position": "victoria business manager",
    "salary": 57895
  },
  {
    "name": "joyce walker",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "bonita brockenberry",
    "position": "business manager",
    "salary": 57895
  },
  {
    "name": "georgina watts",
    "position": "supervisor parking enforcement",
    "salary": 57849
  },
  {
    "name": "larvenia davis",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "christa ramsey",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "kimberly urquhart",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "alfreda miller",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "james austrich",
    "position": "traffic management specialist",
    "salary": 104194
  },
  {
    "name": "kendel gaston",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "erika mceachin",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "shauntze townsend",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "marcia king",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "aurelina fana",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "raynise wise",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "melissa dayne",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "jennifer turner",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "vivian williams",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "morris tucker",
    "position": "dispatcher",
    "salary": 57829
  },
  {
    "name": "david anderson",
    "position": "facilities operations liaison",
    "salary": 104194
  },
  {
    "name": "matthew sheldon",
    "position": "protective svcs ofr",
    "salary": 57792
  },
  {
    "name": "karen barbour",
    "position": "legal assistant",
    "salary": 57792
  },
  {
    "name": "carol shapiro",
    "position": "management assistant",
    "salary": 57792
  },
  {
    "name": "george price",
    "position": "workers compensation recipient",
    "salary": 57775
  },
  {
    "name": "alvin thorne",
    "position": "boiler plt oper 3rd class eng",
    "salary": 57741
  },
  {
    "name": "gail turner",
    "position": "information technology specialist",
    "salary": 57723
  },
  {
    "name": "charlita felder",
    "position": "solid waste inspector",
    "salary": 57723
  },
  {
    "name": "kimberly campbell",
    "position": "lead legal instrum exam",
    "salary": 57723
  },
  {
    "name": "shirley shephard",
    "position": "lead legal instrum exam",
    "salary": 57723
  },
  {
    "name": "chandra wilson",
    "position": "engineering technician",
    "salary": 57723
  },
  {
    "name": "cheriathukunel george",
    "position": "program analyst",
    "salary": 104194
  },
  {
    "name": "leonetta bell",
    "position": "solid waste inspector",
    "salary": 57723
  },
  {
    "name": "cheryl satchell",
    "position": "solid waste inspector",
    "salary": 57723
  },
  {
    "name": "nathaniel mines",
    "position": "solid waste inspector",
    "salary": 57723
  },
  {
    "name": "nestor vences",
    "position": "solid waste inspector",
    "salary": 57723
  },
  {
    "name": "natalie ottey",
    "position": "assistant professor",
    "salary": 57723
  },
  {
    "name": "harold beckham",
    "position": "solid waste inspector",
    "salary": 57723
  },
  {
    "name": "madiana odumosu",
    "position": "assistant professor",
    "salary": 57700
  },
  {
    "name": "freddie hart",
    "position": "staff assistant",
    "salary": 57598
  },
  {
    "name": "tanza thomas",
    "position": "administrative assistant",
    "salary": 57598
  },
  {
    "name": "gwendolyn bailey",
    "position": "payroll security analyst",
    "salary": 57598
  },
  {
    "name": "phillip harmon",
    "position": "public policy analyst",
    "salary": 104194
  },
  {
    "name": "shelia white",
    "position": "staff assistant",
    "salary": 57598
  },
  {
    "name": "roneilia milford",
    "position": "administrative assistant",
    "salary": 57598
  },
  {
    "name": "deborah joyner",
    "position": "customer service representative",
    "salary": 57598
  },
  {
    "name": "oluwatosin onifade",
    "position": "budget analyst",
    "salary": 57598
  },
  {
    "name": "annie coates",
    "position": "support services specialist",
    "salary": 57598
  },
  {
    "name": "trina eldridge",
    "position": "operations support specialist",
    "salary": 57598
  },
  {
    "name": "betty fortune",
    "position": "customer service representative",
    "salary": 57598
  },
  {
    "name": "christopher dew",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "kenneth hyde",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "geoffrey davis",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "frank hollis",
    "position": "executive assistant",
    "salary": 104194
  },
  {
    "name": "scott moore",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "ryan flammang",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "matthew shields",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "christopher howard",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "daniel loughnane",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "sean tracy",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "charles steptoe",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "david brown",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "dustin merryman",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "philip lammert",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "stephanie reid",
    "position": "special assistant",
    "salary": 104194
  },
  {
    "name": "sharon gavagan",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "christopher castner",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "charles isbell",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "marcus drucker",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "troy stocker",
    "position": "paramedic firefighter",
    "salary": 57591
  },
  {
    "name": "jerelee basist",
    "position": "instructor, jrotc",
    "salary": 57499
  },
  {
    "name": "sylvia benatti",
    "position": "assistant professor",
    "salary": 57463
  },
  {
    "name": "hossein besharatian",
    "position": "visiting assistant professor",
    "salary": 57463
  },
  {
    "name": "peter ufland",
    "position": "visiting assistant professor",
    "salary": 57463
  },
  {
    "name": "ambrose kun",
    "position": "visiting assistant professor",
    "salary": 57463
  },
  {
    "name": "john davis",
    "position": "director",
    "salary": 152686
  },
  {
    "name": "sheila kelly",
    "position": "health system specialist",
    "salary": 104182
  },
  {
    "name": "stephany greene",
    "position": "visiting assistant professor",
    "salary": 57463
  },
  {
    "name": "kevin lewis",
    "position": "legal instruments examiner",
    "salary": 57348
  },
  {
    "name": "margaret mallard",
    "position": "legal instruments examiner",
    "salary": 57348
  },
  {
    "name": "phyllis walker",
    "position": "telecommunications equip opera",
    "salary": 57348
  },
  {
    "name": "pearl hodge",
    "position": "telecommunications equip opera",
    "salary": 57348
  },
  {
    "name": "sylvia brown",
    "position": "telecommunications equip opera",
    "salary": 57348
  },
  {
    "name": "george frye",
    "position": "legal instruments examiner",
    "salary": 57348
  },
  {
    "name": "milton harris",
    "position": "cellblock processing tech",
    "salary": 57348
  },
  {
    "name": "susie smith",
    "position": "prop evidence control & dis",
    "salary": 57348
  },
  {
    "name": "shelby anderson",
    "position": "telecommunications equip opera",
    "salary": 57348
  },
  {
    "name": "stephen scelzo",
    "position": "battalion ems supvr (capt)",
    "salary": 104014
  },
  {
    "name": "willie wilkins",
    "position": "cellblock processing tech",
    "salary": 57348
  },
  {
    "name": "peter essiam",
    "position": "cellblock processing tech",
    "salary": 57348
  },
  {
    "name": "erica height",
    "position": "cellblock processing tech",
    "salary": 57348
  },
  {
    "name": "andre myrick",
    "position": "cellblock processing tech",
    "salary": 57348
  },
  {
    "name": "jordana arias",
    "position": "staff assistant",
    "salary": 57331
  },
  {
    "name": "mildred shannon",
    "position": "project specialist",
    "salary": 57331
  },
  {
    "name": "joni robinson",
    "position": "lab manager",
    "salary": 57308
  },
  {
    "name": "ruth lawrence",
    "position": "information technology specialist",
    "salary": 57308
  },
  {
    "name": "nicholle moore",
    "position": "secretary",
    "salary": 57308
  },
  {
    "name": "richard mbakop",
    "position": "computer specialist",
    "salary": 57308
  },
  {
    "name": "william mchugh",
    "position": "battalion ems supvr (capt)",
    "salary": 104014
  },
  {
    "name": "walter jones",
    "position": "comp program anal",
    "salary": 57308
  },
  {
    "name": "gebretensae tzadu",
    "position": "computer specialist",
    "salary": 57308
  },
  {
    "name": "clarence akins",
    "position": "electronics technician",
    "salary": 57308
  },
  {
    "name": "valerie gorham",
    "position": "staff assistant",
    "salary": 57308
  },
  {
    "name": "jeanetta bruce",
    "position": "staff assistant",
    "salary": 57308
  },
  {
    "name": "hung ha",
    "position": "computer specialist",
    "salary": 57308
  },
  {
    "name": "sylvia spruell",
    "position": "administrative assistant",
    "salary": 57308
  },
  {
    "name": "monique randall",
    "position": "staff assistant (office manager)",
    "salary": 57308
  },
  {
    "name": "rebecca watson",
    "position": "teacher",
    "salary": 57265
  },
  {
    "name": "noah feldman",
    "position": "teacher",
    "salary": 57265
  },
  {
    "name": "ronald troupe",
    "position": "battalion ems supvr (capt)",
    "salary": 104014
  },
  {
    "name": "yefat levy",
    "position": "trial attorney",
    "salary": 57224
  },
  {
    "name": "hussein shifa-kamara",
    "position": "workers compensation recipient",
    "salary": 57200
  },
  {
    "name": "carolyn cotton",
    "position": "workers compensation recipient",
    "salary": 57200
  },
  {
    "name": "william elliott",
    "position": "program coordinator",
    "salary": 57131
  },
  {
    "name": "kate stephens",
    "position": "human resource specialist",
    "salary": 57131
  },
  {
    "name": "tracy hatton",
    "position": "staff assistant",
    "salary": 57131
  },
  {
    "name": "sara so",
    "position": "human resource specialist",
    "salary": 57131
  },
  {
    "name": "kelley coble",
    "position": "transition specialist",
    "salary": 57131
  },
  {
    "name": "lewis ford",
    "position": "workers compensation recipient",
    "salary": 57123
  },
  {
    "name": "otis tucker",
    "position": "workers compensation recipient",
    "salary": 57045
  },
  {
    "name": "chelsea rock",
    "position": "program manager",
    "salary": 104000
  },
  {
    "name": "andra parker",
    "position": "correctional officer",
    "salary": 57009
  },
  {
    "name": "eugene weatherford",
    "position": "substance abuse specialist",
    "salary": 57006
  },
  {
    "name": "mary berrios",
    "position": "management liaison specialist",
    "salary": 57006
  },
  {
    "name": "angela wing",
    "position": "utility management specialist",
    "salary": 57006
  },
  {
    "name": "shawn winslow",
    "position": "hr specialist",
    "salary": 57006
  },
  {
    "name": "doris roseborough",
    "position": "hr specialist",
    "salary": 57006
  },
  {
    "name": "william haye",
    "position": "building management specialist",
    "salary": 57006
  },
  {
    "name": "helen gaskins",
    "position": "management liaison specialist",
    "salary": 57006
  },
  {
    "name": "sheryll streets",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "debra taylor",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "gregory meeropol",
    "position": "dir, ed fin svs & prep prog",
    "salary": 104000
  },
  {
    "name": "jasmine brooks",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "kathleen mcfadden morris",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "shanita smallwood",
    "position": "information technology specialist",
    "salary": 57006
  },
  {
    "name": "albert wilcox",
    "position": "administrative officer",
    "salary": 57006
  },
  {
    "name": "jacquelyn davis thomas",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "vicki davis",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "russell davis",
    "position": "forester (urban)",
    "salary": 57006
  },
  {
    "name": "denise mccain",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "leatrice worsley",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "delois fields",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "vikas bhatia",
    "position": "information technology specialist",
    "salary": 104000
  },
  {
    "name": "deborah wanzer",
    "position": "executive assistant",
    "salary": 57006
  },
  {
    "name": "joseph wright",
    "position": "correspond management specialist",
    "salary": 57006
  },
  {
    "name": "iris richardson",
    "position": "care coordinator (bilingual)",
    "salary": 57006
  },
  {
    "name": "mary shivers",
    "position": "project coordinator",
    "salary": 57006
  },
  {
    "name": "nayada cowherd",
    "position": "information technology specialist",
    "salary": 57006
  },
  {
    "name": "rosa oakley",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "terrie winnegan",
    "position": "support services specialist",
    "salary": 57006
  },
  {
    "name": "joy williams",
    "position": "program specialist",
    "salary": 57006
  },
  {
    "name": "marlene simmons",
    "position": "management liaison specialist",
    "salary": 57006
  },
  {
    "name": "sherry tillman",
    "position": "program analyst",
    "salary": 57006
  },
  {
    "name": "aveilhe turner",
    "position": "lieutenant paramedic",
    "salary": 103985
  },
  {
    "name": "tonya miller",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "arlethia thompson",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "darlene nowlin",
    "position": "customer & info services specialist",
    "salary": 57006
  },
  {
    "name": "shwarn taylor-woodard",
    "position": "utility management specialist",
    "salary": 57006
  },
  {
    "name": "john johnson",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "sophie kamal",
    "position": "program analyst",
    "salary": 57006
  },
  {
    "name": "david hackney",
    "position": "emergency operation info specialist",
    "salary": 57006
  },
  {
    "name": "tabatha braxton",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "danielle pennington",
    "position": "administrative support specialist",
    "salary": 57006
  },
  {
    "name": "minwuyelet azimeraw",
    "position": "demographic specialist",
    "salary": 57006
  },
  {
    "name": "fernandas jackson",
    "position": "lieutenant paramedic",
    "salary": 103985
  },
  {
    "name": "jeanette pinnix",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "makita haynes",
    "position": "business certification specialist",
    "salary": 57006
  },
  {
    "name": "betty hester",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "shauntell harley",
    "position": "program coordinator",
    "salary": 57006
  },
  {
    "name": "william proctor",
    "position": "contract specialist",
    "salary": 57006
  },
  {
    "name": "shirley etwaroo",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "erika evans",
    "position": "management liaison specialist",
    "salary": 57006
  },
  {
    "name": "nathan kaczynski",
    "position": "litigation assistant",
    "salary": 57006
  },
  {
    "name": "deborah mitchell",
    "position": "office manager",
    "salary": 57006
  },
  {
    "name": "lynea cooper",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "sean yisrael",
    "position": "principal",
    "salary": 103964
  },
  {
    "name": "lakiesha walker",
    "position": "program specialist",
    "salary": 57006
  },
  {
    "name": "pauline ashley",
    "position": "program support assistant",
    "salary": 57006
  },
  {
    "name": "rometta shields",
    "position": "program suppor",
    "salary": 57006
  },
  {
    "name": "vincent mcqueen",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "darnice wright",
    "position": "administrative support special",
    "salary": 57006
  },
  {
    "name": "paul crewe",
    "position": "writer",
    "salary": 57006
  },
  {
    "name": "gregory evans",
    "position": "writer editor",
    "salary": 57006
  },
  {
    "name": "duan jones",
    "position": "facility support manager",
    "salary": 57006
  },
  {
    "name": "aminta daves",
    "position": "executive assistant",
    "salary": 57006
  },
  {
    "name": "johanna tuckson",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "carey wright",
    "position": "director",
    "salary": 152686
  },
  {
    "name": "bobby tucker",
    "position": "chief, collections division",
    "salary": 103937
  },
  {
    "name": "tania williams",
    "position": "program suppor",
    "salary": 57006
  },
  {
    "name": "edna ebanks",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "melonie buckley",
    "position": "human resources specialist",
    "salary": 57006
  },
  {
    "name": "theresa washington",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "caderal jones",
    "position": "youth family team mtg coord",
    "salary": 57006
  },
  {
    "name": "charlotte alston",
    "position": "training specialist",
    "salary": 57006
  },
  {
    "name": "anita amaranto",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "danielle young",
    "position": "management analyst",
    "salary": 57006
  },
  {
    "name": "scott gilbert",
    "position": "grants program specialist",
    "salary": 57006
  },
  {
    "name": "paulette burrell franklin",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "tayloria stroman",
    "position": "accounting systems analyst",
    "salary": 103937
  },
  {
    "name": "gregory clark",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "wendell harris",
    "position": "y/f team meeting facilitator",
    "salary": 57006
  },
  {
    "name": "david herring",
    "position": "inspection & comp specialist",
    "salary": 57006
  },
  {
    "name": "lisa kennedy",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "nadine akers",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "kokesha mcmanus",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "kaleb johnson",
    "position": "public health analyst",
    "salary": 57006
  },
  {
    "name": "patricia higgins",
    "position": "program specialist",
    "salary": 57006
  },
  {
    "name": "sabrina turner",
    "position": "advance life support coordinat",
    "salary": 57006
  },
  {
    "name": "sandra bryant",
    "position": "invoice verification coordinat",
    "salary": 57006
  },
  {
    "name": "ashraf el khatib",
    "position": "agency fiscal officer",
    "salary": 103937
  },
  {
    "name": "robert greene",
    "position": "correctional treatment specialist",
    "salary": 57006
  },
  {
    "name": "katie shephard",
    "position": "staff assistant",
    "salary": 57006
  },
  {
    "name": "natalie harris",
    "position": "policy analyst",
    "salary": 57000
  },
  {
    "name": "aaron karty",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "emily kiernan",
    "position": "program analyst",
    "salary": 56980
  },
  {
    "name": "sharonda mann",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "kisha kantasingh",
    "position": "data analyst",
    "salary": 56980
  },
  {
    "name": "danielle johnson",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "emily nolan",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "nancy ejuma",
    "position": "program analyst",
    "salary": 56980
  },
  {
    "name": "diana taylor",
    "position": "information technology specialist",
    "salary": 103937
  },
  {
    "name": "kathryn fahje",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "lynice hannah",
    "position": "project coor",
    "salary": 56980
  },
  {
    "name": "jennifer skates",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "megan siebert",
    "position": "program analyst",
    "salary": 56980
  },
  {
    "name": "ashley vann",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "ransom washington",
    "position": "coordinato",
    "salary": 56980
  },
  {
    "name": "wynn yarbrough",
    "position": "assistant professor",
    "salary": 56966
  },
  {
    "name": "alexandra kline",
    "position": "social worker",
    "salary": 56945
  },
  {
    "name": "shabana afzal",
    "position": "social worker",
    "salary": 56945
  },
  {
    "name": "courtney bennett",
    "position": "social worker",
    "salary": 56945
  },
  {
    "name": "kevin botteon",
    "position": "information technology specialist",
    "salary": 103937
  },
  {
    "name": "devon davis",
    "position": "social worker",
    "salary": 56945
  },
  {
    "name": "kyle pinto",
    "position": "social worker",
    "salary": 56945
  },
  {
    "name": "kimberly lassiter",
    "position": "autopsy assistant (mortuary)",
    "salary": 56945
  },
  {
    "name": "renee warren",
    "position": "medical technologist",
    "salary": 56945
  },
  {
    "name": "sandra anderson",
    "position": "social worker",
    "salary": 56945
  },
  {
    "name": "deborah burrell",
    "position": "accounting technician",
    "salary": 56937
  },
  {
    "name": "denita browner",
    "position": "legal instruments examiner",
    "salary": 56937
  },
  {
    "name": "claudette myers",
    "position": "staff assistant",
    "salary": 56937
  },
  {
    "name": "edith giles",
    "position": "accounting tech",
    "salary": 56937
  },
  {
    "name": "dean gibson",
    "position": "lead motor vehicle inspector",
    "salary": 56937
  },
  {
    "name": "hillary ferguson",
    "position": "chief management operations",
    "salary": 103937
  },
  {
    "name": "vicki king",
    "position": "accounts payable tech",
    "salary": 56937
  },
  {
    "name": "michelle murdock",
    "position": "accounting tech",
    "salary": 56937
  },
  {
    "name": "gloria massenberg",
    "position": "accounting technician",
    "salary": 56937
  },
  {
    "name": "mary manning",
    "position": "staff assistant",
    "salary": 56937
  },
  {
    "name": "disner alexander",
    "position": "accounting tech",
    "salary": 56937
  },
  {
    "name": "faith bonner",
    "position": "family support worker",
    "salary": 56937
  },
  {
    "name": "lizzie sheppard",
    "position": "payroll specialist",
    "salary": 56937
  },
  {
    "name": "denise luckett martin",
    "position": "legal instruments examiner",
    "salary": 56937
  },
  {
    "name": "charlene mcleod",
    "position": "customer service representative",
    "salary": 56937
  },
  {
    "name": "cecil cornish",
    "position": "accounting tech",
    "salary": 56937
  },
  {
    "name": "sia kiawu",
    "position": "deputy controller",
    "salary": 103937
  },
  {
    "name": "delphine ross",
    "position": "financial services technician",
    "salary": 56937
  },
  {
    "name": "gale sloan",
    "position": "behavioral support technician",
    "salary": 56937
  },
  {
    "name": "rahma magoma",
    "position": "family support worker",
    "salary": 56937
  },
  {
    "name": "gerald fraction",
    "position": "legal instruments examiner",
    "salary": 56937
  },
  {
    "name": "anthony smith",
    "position": "motor vehicle inspector",
    "salary": 56937
  },
  {
    "name": "joseph jenkins",
    "position": "program assistant",
    "salary": 56937
  },
  {
    "name": "theresa harris",
    "position": "fiscal accounting specialist",
    "salary": 56937
  },
  {
    "name": "doris mclean",
    "position": "legal instruments examiner",
    "salary": 56937
  },
  {
    "name": "monekia mcfadden-general",
    "position": "forensic psych counselor",
    "salary": 56937
  },
  {
    "name": "deirdre fields",
    "position": "forensic psych tech",
    "salary": 56937
  },
  {
    "name": "mulu kahsay",
    "position": "accounting systems analyst",
    "salary": 103937
  },
  {
    "name": "jennifer penn",
    "position": "legal instruments examiner",
    "salary": 56937
  },
  {
    "name": "zenola dunmore",
    "position": "cpr assistant (pio), cs-303-9",
    "salary": 56937
  },
  {
    "name": "laura smart",
    "position": "family support worker",
    "salary": 56937
  },
  {
    "name": "christine ali",
    "position": "social service representive",
    "salary": 56937
  },
  {
    "name": "linda kelly",
    "position": "family support worker",
    "salary": 56937
  },
  {
    "name": "kwaku addai",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "diane jones",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "annie fitzgerald",
    "position": "program specialist",
    "salary": 56937
  },
  {
    "name": "eileen flowers",
    "position": "staff assistant",
    "salary": 56937
  },
  {
    "name": "charles colcord",
    "position": "police specialist",
    "salary": 56937
  },
  {
    "name": "mausami kothari",
    "position": "budget officer",
    "salary": 103937
  },
  {
    "name": "linda tolson",
    "position": "staff assistant",
    "salary": 56937
  },
  {
    "name": "jamila felton",
    "position": "librarian",
    "salary": 56937
  },
  {
    "name": "christine mastrovito",
    "position": "forensic scientist",
    "salary": 56937
  },
  {
    "name": "selena moragne",
    "position": "investigator",
    "salary": 56937
  },
  {
    "name": "kimberly robinson",
    "position": "staff assistant",
    "salary": 56937
  },
  {
    "name": "sheila whittington",
    "position": "evidence control technician",
    "salary": 56937
  },
  {
    "name": "thaddeus foster el",
    "position": "social service representive",
    "salary": 56937
  },
  {
    "name": "gina coghill",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "floyd craig",
    "position": "juvenile justice inst counselo",
    "salary": 56937
  },
  {
    "name": "alice alexis",
    "position": "social service representive",
    "salary": 56937
  },
  {
    "name": "winston jackson",
    "position": "budget officer",
    "salary": 103937
  },
  {
    "name": "sinclair harvey",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "abdul mansaray",
    "position": "investigator",
    "salary": 56937
  },
  {
    "name": "stephen john",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "brenda hood",
    "position": "social service representive",
    "salary": 56937
  },
  {
    "name": "gisha artis",
    "position": "contract specialist",
    "salary": 56937
  },
  {
    "name": "dana garnett",
    "position": "contract specialist",
    "salary": 56937
  },
  {
    "name": "johnnie allen",
    "position": "lead parking enforcement offic",
    "salary": 56937
  },
  {
    "name": "charles smith",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "estella tate",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "david cumber",
    "position": "court liaison specialist",
    "salary": 56937
  },
  {
    "name": "kayleen irizarry",
    "position": "assistant supt, elem & secondary ed",
    "salary": 152686
  },
  {
    "name": "elizabeth young",
    "position": "information technology specialist",
    "salary": 103937
  },
  {
    "name": "cheryl richardson",
    "position": "social service representive",
    "salary": 56937
  },
  {
    "name": "gwendolyn sorrell",
    "position": "lead parking enforcement offic",
    "salary": 56937
  },
  {
    "name": "ronald king",
    "position": "social service representive",
    "salary": 56937
  },
  {
    "name": "dena bass",
    "position": "social service assistant",
    "salary": 56937
  },
  {
    "name": "tony nwani",
    "position": "crime scene evidence tech",
    "salary": 56930
  },
  {
    "name": "allyn johnson",
    "position": "assistant professor",
    "salary": 56849
  },
  {
    "name": "dominick todisco",
    "position": "instructor, jrotc",
    "salary": 56848
  },
  {
    "name": "dorothy phaire",
    "position": "instructor, jrotc",
    "salary": 56813
  },
  {
    "name": "latanya reese",
    "position": "assistant professor",
    "salary": 56800
  },
  {
    "name": "allen perry",
    "position": "heavy mobile equip mech",
    "salary": 56763
  },
  {
    "name": "stacey beason",
    "position": "financial analyst",
    "salary": 103887
  },
  {
    "name": "gregory poag",
    "position": "recreation specialist",
    "salary": 56742
  },
  {
    "name": "andre owens",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "darrell foster",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "denise watson",
    "position": "energy program specialist",
    "salary": 56740
  },
  {
    "name": "roena cabiness",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "robert polk",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "adrian dixon",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "george suntum",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "roderick milstead",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "luis garcia",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "kevin craddock",
    "position": "criminal investigator",
    "salary": 103877
  },
  {
    "name": "monica diggs",
    "position": "legal instruments examiner",
    "salary": 56740
  },
  {
    "name": "tanya brinkley",
    "position": "legal assistant",
    "salary": 56740
  },
  {
    "name": "leslie polk",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "john dews",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "jesse wilson",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "tamika cain",
    "position": "supervisor parking enforcement",
    "salary": 56740
  },
  {
    "name": "rena myles",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "paula coyoy",
    "position": "legal instruments examiner",
    "salary": 56740
  },
  {
    "name": "tyronica best",
    "position": "motor vehicle inspector",
    "salary": 56740
  },
  {
    "name": "susan fugitt",
    "position": "customer service representative",
    "salary": 56740
  },
  {
    "name": "derrick mcneely",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "michael haywood",
    "position": "legal instru exam (bil)",
    "salary": 56740
  },
  {
    "name": "mary parker",
    "position": "legal instruments examiner",
    "salary": 56740
  },
  {
    "name": "joy binns-grayton",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "tyrone robinson",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "shawn dowell",
    "position": "youth development rep",
    "salary": 56740
  },
  {
    "name": "joanne stahling",
    "position": "recreation spec (pool ma",
    "salary": 56740
  },
  {
    "name": "jesse bowers",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "al-mustafa cook",
    "position": "recreation specialist",
    "salary": 56740
  },
  {
    "name": "robert smith",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "quentin thomas",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "sherry pringle",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "kisha roberts",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "antaeus hayes",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "abul bahauddin",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "kevin tolson",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "michael roberts",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "shirleta settles",
    "position": "recreation specialist",
    "salary": 56740
  },
  {
    "name": "veronica elwood",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "walter daniels",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "janice waters",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "vaughn jones",
    "position": "recreation specialist",
    "salary": 56740
  },
  {
    "name": "vanessa moore",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "gayle ward",
    "position": "recreation specialist",
    "salary": 56740
  },
  {
    "name": "thomas bolden",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "t-jai farmer",
    "position": "recreation specialist",
    "salary": 56740
  },
  {
    "name": "kim williams",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "howard gasaway",
    "position": "recreation spec (pool ma",
    "salary": 56740
  },
  {
    "name": "tiffany johnson",
    "position": "recreation specialist",
    "salary": 56740
  },
  {
    "name": "victor cardwell",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "lashawn miller",
    "position": "terminal management specialist",
    "salary": 56740
  },
  {
    "name": "christopher mullen",
    "position": "firefighter paramedic tech",
    "salary": 56705
  },
  {
    "name": "marilyn hamilton",
    "position": "instructor, jrotc",
    "salary": 56691
  },
  {
    "name": "anthony white",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "cheryl dowdy",
    "position": "project specialist",
    "salary": 56681
  },
  {
    "name": "james britton",
    "position": "exec driver & prot serv",
    "salary": 56681
  },
  {
    "name": "ronald culmer",
    "position": "safety and security specialist",
    "salary": 56681
  },
  {
    "name": "paula white",
    "position": "training specialist",
    "salary": 56681
  },
  {
    "name": "william jones",
    "position": "adult literacy/ged instructor",
    "salary": 56681
  },
  {
    "name": "veronica brown",
    "position": "project specialist",
    "salary": 56681
  },
  {
    "name": "lachanda wooten",
    "position": "staff assistant",
    "salary": 56681
  },
  {
    "name": "christian okonkwo",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "bernice linder",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "almeada allen",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "pamela wheeler taylor",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "ruby jones",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "paul murray",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "veria selders",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "elton rush",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "allison floyd",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "joe holloway",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "melvin lee",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "wendy montague",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "calvin buxton",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "hassan shahid",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "michael pavlik",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "dawn barnes",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "verteneion johnson",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "jeanette washington",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "tracy stephens gist",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "howard terry",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "janice montgomery",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "anthony harris",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "eugene martin",
    "position": "youth development representati",
    "salary": 56621
  },
  {
    "name": "iftikhar ahmad",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "jimmy hobbs",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "john kutniewski",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "eric folson",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "marlene watson",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "kevin robinson",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "lewis dickensjr",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "lorraine holley",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "dana washington",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "satonya brooks",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "hazel hart",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "clinton tash",
    "position": "paramedic - basic",
    "salary": 56621
  },
  {
    "name": "longinus ogu",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "peter weber",
    "position": "director",
    "salary": 152686
  },
  {
    "name": "william oconnor",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "isadore melton",
    "position": "paramedic - basic",
    "salary": 56621
  },
  {
    "name": "eleanor nivens",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "mazie lindsey",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "jerome aukward",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "ajibike bello",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "romona corprew",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "calvin mitchell",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "chaudhry riaz",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "antionette smith",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "charline smith",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "jonathan munk",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "sharon walker",
    "position": "correctional officer",
    "salary": 56621
  },
  {
    "name": "daniel venne",
    "position": "assistant professor",
    "salary": 56595
  },
  {
    "name": "michael burnett",
    "position": "electronics technician",
    "salary": 56566
  },
  {
    "name": "charles ester",
    "position": "lab tec rad safety off",
    "salary": 56509
  },
  {
    "name": "clarence fluker",
    "position": "program analyst",
    "salary": 56500
  },
  {
    "name": "tanya butler",
    "position": "officer",
    "salary": 56391
  },
  {
    "name": "danae williams",
    "position": "vocational rehabilitation specialist",
    "salary": 56389
  },
  {
    "name": "juliet parker",
    "position": "social insurance specialist",
    "salary": 56389
  },
  {
    "name": "matthew robinson",
    "position": "environmental protection speci",
    "salary": 56389
  },
  {
    "name": "angela reynolds",
    "position": "resource specialist",
    "salary": 56389
  },
  {
    "name": "philip lanciano",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "carlos phillip",
    "position": "engineering technician",
    "salary": 56389
  },
  {
    "name": "kimberly campbell",
    "position": "social insurance specialist",
    "salary": 56389
  },
  {
    "name": "lindsey pickering",
    "position": "vocational rehabilitation specialist",
    "salary": 56389
  },
  {
    "name": "tamara smith",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "jocelyn smith",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "irmgard richardson",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "shirlinette tyree",
    "position": "health insurance analyst",
    "salary": 56389
  },
  {
    "name": "maria reddick",
    "position": "staff assistant",
    "salary": 56389
  },
  {
    "name": "willie calhoun",
    "position": "case manager",
    "salary": 56389
  },
  {
    "name": "mohamed kamara",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "vincent turner",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "joyce timmons",
    "position": "contract compliance monitor",
    "salary": 56389
  },
  {
    "name": "lakeisha smith",
    "position": "energy program specialist",
    "salary": 56389
  },
  {
    "name": "marja brown",
    "position": "information technology specialist",
    "salary": 56389
  },
  {
    "name": "tiffany alexander",
    "position": "paralegal specialist",
    "salary": 56389
  },
  {
    "name": "irvin scott",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "kiesha mccauley jackson",
    "position": "customer service representative",
    "salary": 56389
  },
  {
    "name": "harriet walker",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "franklin lowry",
    "position": "social insurance specialist",
    "salary": 56389
  },
  {
    "name": "arelis perez",
    "position": "mental health specialist",
    "salary": 56389
  },
  {
    "name": "thomas herbert",
    "position": "safety & occup hlth specialist",
    "salary": 56389
  },
  {
    "name": "bobby ladson",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "benetta pyatt",
    "position": "facilitator",
    "salary": 56389
  },
  {
    "name": "melaku tefera",
    "position": "electronics technician",
    "salary": 56389
  },
  {
    "name": "karen jackson",
    "position": "licensing specialist",
    "salary": 56389
  },
  {
    "name": "jacquline ford smith",
    "position": "positive behavior support data",
    "salary": 56389
  },
  {
    "name": "ruth winston",
    "position": "revenue officer",
    "salary": 56389
  },
  {
    "name": "curshaun carter",
    "position": "revenue officer",
    "salary": 56389
  },
  {
    "name": "alicia mosby",
    "position": "revenue officer",
    "salary": 56389
  },
  {
    "name": "brandon feraren",
    "position": "appraiser",
    "salary": 56389
  },
  {
    "name": "sonia staples",
    "position": "revenue officer",
    "salary": 56389
  },
  {
    "name": "aretha chapman-kassa",
    "position": "paralegal specialist",
    "salary": 56389
  },
  {
    "name": "michelle robinson",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "sandra farmer",
    "position": "revenue officer",
    "salary": 56389
  },
  {
    "name": "george riddick",
    "position": "revenue officer",
    "salary": 56389
  },
  {
    "name": "lan lu",
    "position": "victim witness program specialist",
    "salary": 56389
  },
  {
    "name": "veronica fabani",
    "position": "mental health specialist",
    "salary": 56389
  },
  {
    "name": "cara shockley",
    "position": "staff assistant",
    "salary": 56389
  },
  {
    "name": "kenneth degrave",
    "position": "engineering technician",
    "salary": 56389
  },
  {
    "name": "kristie price",
    "position": "management analyst",
    "salary": 56389
  },
  {
    "name": "leonitia campbell",
    "position": "administrative specialist",
    "salary": 56389
  },
  {
    "name": "chantana millen",
    "position": "child care eligibility monitor",
    "salary": 56389
  },
  {
    "name": "michelle hood",
    "position": "child care eligibility monitor",
    "salary": 56389
  },
  {
    "name": "roger roch",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "helen foster",
    "position": "unemployment compensation clai",
    "salary": 56389
  },
  {
    "name": "brandon digwood",
    "position": "librarian",
    "salary": 56389
  },
  {
    "name": "wanda patterson",
    "position": "management analyst",
    "salary": 56389
  },
  {
    "name": "nicole banks",
    "position": "unemployment tax examiner",
    "salary": 56389
  },
  {
    "name": "brandon james",
    "position": "case manager",
    "salary": 56389
  },
  {
    "name": "daniel hall",
    "position": "crime analyst",
    "salary": 56389
  },
  {
    "name": "jonas strickland",
    "position": "outreach specialist",
    "salary": 56389
  },
  {
    "name": "kenneth despertt",
    "position": "librarian",
    "salary": 56389
  },
  {
    "name": "james timony",
    "position": "librarian (adaptive technology",
    "salary": 56389
  },
  {
    "name": "jonathan williams",
    "position": "program support assistant",
    "salary": 56389
  },
  {
    "name": "steven spencer",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "cheryl bridges",
    "position": "librarian",
    "salary": 56389
  },
  {
    "name": "kevin cyrus",
    "position": "educ liaison spec (realty)",
    "salary": 56389
  },
  {
    "name": "frances stokes",
    "position": "workforce development specialist",
    "salary": 56389
  },
  {
    "name": "darlene bryant",
    "position": "medicaid waiver specialist",
    "salary": 56389
  },
  {
    "name": "emily menchal",
    "position": "librarian",
    "salary": 56389
  },
  {
    "name": "diana donnell",
    "position": "social insurance specialist",
    "salary": 56389
  },
  {
    "name": "antwon temoney",
    "position": "property control and disposal",
    "salary": 56389
  },
  {
    "name": "jessica daniels",
    "position": "environmental protection speci",
    "salary": 56389
  },
  {
    "name": "muviel garcia",
    "position": "energy program specialist",
    "salary": 56389
  },
  {
    "name": "nikeya cunningham",
    "position": "parking operations specialist",
    "salary": 56389
  },
  {
    "name": "andre rogers",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "brendalan jackson",
    "position": "case manager",
    "salary": 56389
  },
  {
    "name": "patricia doan",
    "position": "environmental protection speci",
    "salary": 56389
  },
  {
    "name": "robin driver",
    "position": "staff assistant",
    "salary": 56389
  },
  {
    "name": "ebosele oboh",
    "position": "social insurance specialist",
    "salary": 56389
  },
  {
    "name": "steve smith",
    "position": "case manager",
    "salary": 56389
  },
  {
    "name": "eta-manyi manga",
    "position": "engineering technician",
    "salary": 56389
  },
  {
    "name": "robin padilla",
    "position": "vocational rehabilitation specialist",
    "salary": 56389
  },
  {
    "name": "stephen zettlemoyer",
    "position": "environmental protection speci",
    "salary": 56389
  },
  {
    "name": "rhode bernadel",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "rekha panjeti",
    "position": "social insurance specialist",
    "salary": 56389
  },
  {
    "name": "gregory stroud",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "tesfaye williams",
    "position": "program monitor",
    "salary": 56389
  },
  {
    "name": "jacqueline robinson",
    "position": "public health analyst",
    "salary": 56389
  },
  {
    "name": "calvin thornton",
    "position": "service coordinator",
    "salary": 56389
  },
  {
    "name": "maria barrera",
    "position": "vocational rehabilitation specialist",
    "salary": 56350
  },
  {
    "name": "debra truhart",
    "position": "program coordinator",
    "salary": 56341
  },
  {
    "name": "kevin allen",
    "position": "program coordinator",
    "salary": 56341
  },
  {
    "name": "shelia west-dyson",
    "position": "procurement assistant",
    "salary": 56317
  },
  {
    "name": "ronald powell",
    "position": "protective svcs ofr",
    "salary": 56317
  },
  {
    "name": "gregory godwin",
    "position": "protective svcs ofr",
    "salary": 56317
  },
  {
    "name": "daniel leo",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "thomas wilkins",
    "position": "fusion center director",
    "salary": 152686
  },
  {
    "name": "michael smith",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "arthur klawender",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "olutosin burrell",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "tedrick bonds",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "kelly devine",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "elizabeth braganza",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "luis carrasco curiel",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "victoria smith",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "ashley harris",
    "position": "teacher",
    "salary": 56273
  },
  {
    "name": "aaron foster",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jason collins",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "victor braschnewitz",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "charles shyab",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "ericeka dixon",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "anthony diehl",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "alfonso doctor",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "derrick wright",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "stephanie lewis",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "scott martin",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jonathan riffe",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "stephen shipp",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "matthew swartz",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "moses vines",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "damien jackson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "peter vanmaenen",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "levitus wimbish",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "berl wheeler",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "darin mardo",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "douglas pagel",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "randolph hurley",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "ryan doyle",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "matthew shank",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "lincoln shanklin",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "debra manigault",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "travis gardner",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "dennis carmody",
    "position": "firefighter",
    "salary": 56264
  },
  {
    "name": "kurt long",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "scott macleod",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "douglas wheeler",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "mark luckett",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "robert lowry",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "john stewart",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "donald pratt",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "michael ramirez",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "peter larsen",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "artis brown",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "andrew rimm",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "steven himes",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "james hess",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "robert goodwin",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "bryan perlmutter",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "dominic nicholson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "paul brooke",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "christopher oliphant",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "christopher bernard",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "larry scott",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "joseph ortenzo",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "celina primus",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "derrick wagoner",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "andre edwards",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "charles lowe",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "francis pierce",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "nicholas tomlinson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jessica bullock",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "gregory briney",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "david orsi",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jesse porter",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "david fitzgerald",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "vincent pickel",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "michael puglisi",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "toiland butler",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "robert richardson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "terrence boston",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "michael fitzgerald",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "deangelo bunch",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "charles reynolds",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jessica wimbish",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "angela lewis",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "ward caddington",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "joseph rainwater",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "denise tucker",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "niggora moye",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "hubert walker",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "sean beheler",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "daniel myers",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "harry muyleart",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "william beattie",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "thomas clark",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "wilbur niepling",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "christian mueller",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jon dyson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "james casar",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "lateef baldwin",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "justin bassford",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "craig meinhardt",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "wesley banner",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "adam moose",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "bryan munford",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "james mccoy",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "joseph trippi",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "william krug",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "william duty",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "robert mooney",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "robert mcnulty",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "ignacio mcdougal",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "eugene russell roach",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "james taylor",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "kevin becker",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "phillip gervais",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "bradd seiferd",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "phylicia bowman",
    "position": "executive director",
    "salary": 152686
  },
  {
    "name": "robert tate",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "peter dziubla",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "robert humphrey",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "eric dunmore",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "timothy mcgann",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "john graff",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "tadd soderberg",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "thomas maddox",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "saquan spencer",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "david washington",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "bret krabbe",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jon shelton",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "jason deale",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "brian kalb",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "christopher cunningham",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "timothy davis",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "russell smith iv",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "james kelley",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "chad kelly",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "david goldsmith",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "zachary kipple",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "brian wolf",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "mark lotz",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "michael king",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "ronnie kalinowski",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "john connelly",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "edward mizenko",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "alvaro godinez",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "travis miller",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "gregory smith",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "matthew smith",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "philip stevens",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "jeffrey lenard",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "ralph neal",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "bryan slutman",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "anthony hicks",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "warren deavers",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "thomas moon",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "joseph johnson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "john culver",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "sir anderson",
    "position": "firefighter emt",
    "salary": 56264
  },
  {
    "name": "john torres",
    "position": "firefighter emt",
    "salary": 56260
  },
  {
    "name": "kimberly jackson",
    "position": "business manager",
    "salary": 56244
  },
  {
    "name": "patricia teel",
    "position": "business manager",
    "salary": 56244
  },
  {
    "name": "darlene terry weeks",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "kevin lawrence",
    "position": "business manager",
    "salary": 56244
  },
  {
    "name": "carmen jackson",
    "position": "business manager",
    "salary": 56244
  },
  {
    "name": "delores hebron",
    "position": "business manager",
    "salary": 56244
  },
  {
    "name": "duane calloway",
    "position": "visiting assistant professor",
    "salary": 56164
  },
  {
    "name": "sadie moore",
    "position": "payroll technician",
    "salary": 56144
  },
  {
    "name": "johnny sidbury",
    "position": "accounting tech",
    "salary": 56144
  },
  {
    "name": "garland singletary",
    "position": "accounts payable tech",
    "salary": 56144
  },
  {
    "name": "antionette hill",
    "position": "disbursement specialist",
    "salary": 56144
  },
  {
    "name": "sabrina goodwin",
    "position": "accounting tech",
    "salary": 56144
  },
  {
    "name": "laquita howard",
    "position": "staff assistant",
    "salary": 56144
  },
  {
    "name": "michael lockerman",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "jamie davis",
    "position": "accounting technician",
    "salary": 56144
  },
  {
    "name": "evelyn cooper",
    "position": "accountant",
    "salary": 56144
  },
  {
    "name": "pancheta boyles",
    "position": "staff assistant",
    "salary": 56144
  },
  {
    "name": "sarah harris",
    "position": "accounting technician ap",
    "salary": 56144
  },
  {
    "name": "constance henderson",
    "position": "accounting tech",
    "salary": 56144
  },
  {
    "name": "sharon bynum",
    "position": "payroll tech",
    "salary": 56144
  },
  {
    "name": "joanne swinson-campbell",
    "position": "payroll tech",
    "salary": 56144
  },
  {
    "name": "theresa williams",
    "position": "payroll tech",
    "salary": 56144
  },
  {
    "name": "tonya sedgwick",
    "position": "audit assistant",
    "salary": 56144
  },
  {
    "name": "eva guzman",
    "position": "accounts payable tech",
    "salary": 56139
  },
  {
    "name": "allan thomas",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "travis allen",
    "position": "staff assistant",
    "salary": 56139
  },
  {
    "name": "melbern mccoy",
    "position": "accounts payable tech",
    "salary": 56139
  },
  {
    "name": "felicia meadows",
    "position": "lead legal instrum exam",
    "salary": 56127
  },
  {
    "name": "gail parker",
    "position": "lead tax examining technician",
    "salary": 56127
  },
  {
    "name": "mari armistead",
    "position": "solid waste inspector",
    "salary": 56127
  },
  {
    "name": "kenneth millner",
    "position": "solid waste inspector",
    "salary": 56127
  },
  {
    "name": "antoine lewis",
    "position": "engineering technician",
    "salary": 56127
  },
  {
    "name": "jacqueline brooks",
    "position": "solid waste inspector",
    "salary": 56127
  },
  {
    "name": "gerald berry",
    "position": "dispatcher",
    "salary": 56125
  },
  {
    "name": "tiana allen",
    "position": "dispatcher",
    "salary": 56125
  },
  {
    "name": "linda nischan",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "keisha mays",
    "position": "dispatcher",
    "salary": 56125
  },
  {
    "name": "wendy carruth",
    "position": "dispatcher",
    "salary": 56125
  },
  {
    "name": "radhames medina",
    "position": "maintenance mechanic",
    "salary": 56014
  },
  {
    "name": "eldred garnett",
    "position": "maintenance mechanic",
    "salary": 56014
  },
  {
    "name": "winston thompson",
    "position": "maintenance mechanic",
    "salary": 56014
  },
  {
    "name": "edward brown",
    "position": "maintenance mechanic",
    "salary": 56014
  },
  {
    "name": "david moore",
    "position": "maintenance mechanic",
    "salary": 56014
  },
  {
    "name": "jesus monteagudo",
    "position": "workers compensation recipient",
    "salary": 55994
  },
  {
    "name": "angel yeager",
    "position": "officer",
    "salary": 55973
  },
  {
    "name": "jewelia long",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "timothy haselden",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "kevin tyler",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "ryan orgel",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "aaron walizer",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "tameka richardson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "terrence richardson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "phokham vongkeo",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "andrew mccallum",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jermaine mabry",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "stephen vogel",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "daniel knoll",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "james dykes",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "paul marshall",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "piotr pacyga",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "aaron wilson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "bryan wilson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "timothy watts",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "herbert nicholls",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "justin roth",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "terence sutton",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "ruth larios caceres",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "david payne",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "nilda yadao",
    "position": "medical officer (psychiatry)",
    "salary": 188027
  },
  {
    "name": "barry gersten",
    "position": "executive director",
    "salary": 152686
  },
  {
    "name": "scott dignan",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "simeon norfleet",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jesus perez",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "giovanny sepulveda",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "zar min",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jun zhang",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "robert varga",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "alexander wertz",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "sequita williams",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "tiffany rotan",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "casey logan",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "barbara hawkins",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "demaris wooten",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "justin vanhall",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "thomas scibelli",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "natalie mcclain",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "mary vest",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "kevin lally",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "diana leo",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "kimberly sims",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "james legaspi",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "raphael radon",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "alberto jova",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "walter smith",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "marquis quinones",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "tiffanie sibert",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "filip simic",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "marques mcrae",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "thomas roy",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "qieth mcqureerir",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "fritz michaud",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "andrew stout",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "christopher miller",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "roland hoyle",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "james phillips",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "john williams",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "terrance watford",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "chelsea pulaski",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "brian johnson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "devin smith",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "gregory mclaughlin",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "john remick-cook",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "michael weiss",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "dien-long tran",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "tracey hayes",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "shayne o'bannon",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "joshua tretter",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "reuben wilson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "michael odea",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "nicole spady",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jose mendoza",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "bryan nawoschik",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "robert ranck",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "ernest manley",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "joseph springer",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "john alter",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "robert marshall",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "joseph myles",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "stephen kinzer",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "christopher newman",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "chris wong",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jamal yates",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "joseph ducharme",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "derrick frank",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "meredith bush",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "christopher bastian",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "john hedgecock",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "darin booher",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "paul heithoff",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "sherlita boyd",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "erica gray",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "marshall boykins",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "gregory collins",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "ernest higginbotham",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "larry duncan",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "stephen alston",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "john edelen",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "van crawford",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "april epps",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "shaun faulk",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "tiffany jones",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "dustin bellavance",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "julie keaveny",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "armeshia hogue",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "michael minor",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "shanna brown",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "steven andelman",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "gregory archer",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "alan hill",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "edgar anzueta",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "joseph bruno",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "robert howard",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "indian bassil",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "david bacon",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "michal jankowski",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "robert buck",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "mohamed ibrahim",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jeffery buchanan",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "joshua boutaugh",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "peter hunt",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "devon atcheson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "brian brown",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "shaun heffelman",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "garrett higgins",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jesse scruggs",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "linda daniels",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "sean connors",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jibrahn khoury",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jaret conyers",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "robert decastro",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "arturo weldon",
    "position": "chief information technology o",
    "salary": 152686
  },
  {
    "name": "judith anderson",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "kevin danko",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "kevin decker",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "david dalencour",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "thomas sullivan",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "william hackerman",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "steven mazanec",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "pah suku",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "justin hubert",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "daniel thau",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "timonthy conger",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "kelvin cusick",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "christopher lehigh",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "berrita willis",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "charandip sekhon",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "luis aguilera",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "kelvin garcia",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jeremiah johnson",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "brian gates",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "raeniel castillo",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "daniel castan",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "amir abdalla",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "pamela burkett jones",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "marc d'avignon",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "jerry afari",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "stephen amodeo",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "gregory girard",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "donte' allen",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "david jones",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "justin goldston",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "mayra gonzalez",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "keith gray",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "nicholas cook",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "alveta hamilton",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "michael crutchman",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "kyle kimball",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "aaron casper",
    "position": "officer",
    "salary": 55963
  },
  {
    "name": "annette blair summers",
    "position": "legal instruments examiner",
    "salary": 55946
  },
  {
    "name": "benjamin thomas",
    "position": "cellblock processing tech",
    "salary": 55946
  },
  {
    "name": "davia small",
    "position": "telecommunications equip opera",
    "salary": 55946
  },
  {
    "name": "erica morris",
    "position": "telecommunications equip opera",
    "salary": 55946
  },
  {
    "name": "sharon jones",
    "position": "telecommunications equip opera",
    "salary": 55946
  },
  {
    "name": "michelle waddy",
    "position": "legal instruments examiner",
    "salary": 55946
  },
  {
    "name": "linda rash",
    "position": "legal instruments examiner",
    "salary": 55946
  },
  {
    "name": "corinne hughes",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "kim kirkland-poindexter",
    "position": "cellblock processing tech",
    "salary": 55946
  },
  {
    "name": "mary peeler",
    "position": "prop evidence control & dis",
    "salary": 55946
  },
  {
    "name": "yolanda brown",
    "position": "investigative assistant typing",
    "salary": 55946
  },
  {
    "name": "barbara greenfield-rogers",
    "position": "legal instruments examiner",
    "salary": 55946
  },
  {
    "name": "charlene thomas",
    "position": "grants management specialist",
    "salary": 55908
  },
  {
    "name": "kimberly poole",
    "position": "financial specialist",
    "salary": 55908
  },
  {
    "name": "stephanie perry",
    "position": "budget analyst",
    "salary": 55908
  },
  {
    "name": "flora lerenman",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "andrew molchany",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "photios goudas",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "michael bunner",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "andrew mead",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "john lingat",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "lauren manning",
    "position": "counselor",
    "salary": 55904
  },
  {
    "name": "audra polk",
    "position": "librarian",
    "salary": 55904
  },
  {
    "name": "jennifer restak",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "jonathan melmed",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "stephanie gunter",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "tracy olson",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "whitney green",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "rebecca kessler",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "suleika brooks",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "jamie mehring",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "gisele keirnan",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "megan grannan",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "lalla marquez",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "april greene",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "michael guetig",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "erin irvine",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "kristen moore",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "christopher grier",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "deborah greene",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "eugene bentley",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "alyson perschke",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "sara kelly",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "susan meshberger",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "jason mayernick",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "maneesha maingot",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "julia johnson",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "catherine hutchinson",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "travis pugh",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "miranda leblanc-karim",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "anya good",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "eddie fowler",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "kate lyons",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "nicolas ojeda",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "tonya jones",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "kristen lloyd",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "rebecca nathan",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "william herman",
    "position": "instructional coach",
    "salary": 55904
  },
  {
    "name": "robert otterstatter",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "rebecca osborne",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "carolyn kouri",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "susan gonzalez",
    "position": "counselor",
    "salary": 55904
  },
  {
    "name": "gary durand",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "matthew komar",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "subira parker-morrison",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "eileen pascucci",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "abigail maslin",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "gisele perez hanson",
    "position": "social worker",
    "salary": 55904
  },
  {
    "name": "nicole golden",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "maria maldonado nunez",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "anna hylton",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "joseph killiany",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "regina mcclure",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "allam al alami",
    "position": "general engineer",
    "salary": 152671
  },
  {
    "name": "ronald chase",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "mukhtar raqib",
    "position": "librarian",
    "salary": 55904
  },
  {
    "name": "kyli hudson",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "richard munz",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "luke kovacs",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "katherine hart",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "megan ullo",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "alison wylegala",
    "position": "instructional coach",
    "salary": 55904
  },
  {
    "name": "diana suarez",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "wendy thomas",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "daniel zielaski",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "diane durbin",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "maryam trowell",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "selena stone",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "ioana stoica",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "carmen vega",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "hayley steffen",
    "position": "instructional coach",
    "salary": 55904
  },
  {
    "name": "lauren stoop",
    "position": "librarian",
    "salary": 55904
  },
  {
    "name": "kimberlee wilson",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "connie woo",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "jamie josephson",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "abigail sparrow",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "george caldwell",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "tamara shear",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "jessica stefon",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "zulei thomas",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "walter sawyer",
    "position": "social worker",
    "salary": 55904
  },
  {
    "name": "juliana schwartz",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "margaret ward",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "mark somanader",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "ellen stedtefeld",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "brittaney woods",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "courtney vintch",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "renato caldwell",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "anthony williams",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "monique marshall",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "ashley sobrinski",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "thomson williams",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "chad wallace",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "ella brown",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "bethany isaacson",
    "position": "librarian",
    "salary": 55904
  },
  {
    "name": "sean mcgrath",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "valerie flores",
    "position": "social worker",
    "salary": 55904
  },
  {
    "name": "george connor",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "michael jamieson",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "eleasia charles",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "kristofer comeforo",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "heather falter",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "tyrone coleman",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "eric casler",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "lyndsey epperson",
    "position": "librarian",
    "salary": 55904
  },
  {
    "name": "michele burton",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "lea franklin-zaslavsky",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "maria del caz esteso",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "felecia wright",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "paul charity",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "allison baugher",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "abigail swofford",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "rebecca brittain",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "elinor berkman",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "ameerah adam",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "nikia freeman",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "austin brickler",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "meghan dunne",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "lauren andersen",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "lakisha braxton",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "david hutchinson",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "andrew atchison",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "daniel assael",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "markevia bell",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "fonda smyers",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "megan belser",
    "position": "teacher",
    "salary": 55904
  },
  {
    "name": "charles gallion",
    "position": "workers compensation recipient",
    "salary": 55900
  },
  {
    "name": "antonio fernandez",
    "position": "firefighter emt",
    "salary": 55820
  },
  {
    "name": "jacqueline bates",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "clarissa holst",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "harlan kinzer",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "william fitzgerald",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "cheryl hayes",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "anjeli le noir",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "kaiulani ivory",
    "position": "literacy coach",
    "salary": 55809
  },
  {
    "name": "abraham johnathan",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "siddiqah ottley",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "pamela pollet",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "david macdonald",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "amber oliver",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "sheri frierson-chenier",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "anne adams",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "gary fitzgerald",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "shadayna taylor",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "timothy street",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "karen spain",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "kristen bellissimo",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "kaela brown",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "cecilia d'antonio",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "nyala dupree-walker",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "alanna blecha",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "sonia coca",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "erin de jonckheere",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "angela cousins",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "debra easter",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "nicholas brown",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "markeeta blackwell",
    "position": "teacher",
    "salary": 55809
  },
  {
    "name": "luis canales",
    "position": "workers compensation recipient",
    "salary": 55744
  },
  {
    "name": "doris allen",
    "position": "management liaison specialist",
    "salary": 55738
  },
  {
    "name": "rachel jorgensen",
    "position": "assistant professor",
    "salary": 55714
  },
  {
    "name": "robin cook",
    "position": "visiting assistant professor",
    "salary": 55714
  },
  {
    "name": "dennis rogers",
    "position": "visiting assistant professor",
    "salary": 55714
  },
  {
    "name": "cecelia alvarado",
    "position": "visiting assistant professor",
    "salary": 55714
  },
  {
    "name": "james barksdale",
    "position": "landscape gardener equip opr",
    "salary": 55702
  },
  {
    "name": "william wilhoyte",
    "position": "assistant superintendent",
    "salary": 152561
  },
  {
    "name": "samuel golway",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "ajay bhandari",
    "position": "medical officer (psychiatry)",
    "salary": 55694
  },
  {
    "name": "hyacinth uzoma",
    "position": "medical officer (psychiatry)",
    "salary": 55694
  },
  {
    "name": "khin myint",
    "position": "medical officer (psychiatry)",
    "salary": 55694
  },
  {
    "name": "surendra kandel",
    "position": "medical officer (psychiatry)",
    "salary": 55694
  },
  {
    "name": "laketa bailey",
    "position": "lead firearms technician",
    "salary": 55604
  },
  {
    "name": "daniel tsin",
    "position": "analyst",
    "salary": 55598
  },
  {
    "name": "sara goldband",
    "position": "human resource specialist",
    "salary": 55598
  },
  {
    "name": "andrew king",
    "position": "transition specialist",
    "salary": 55598
  },
  {
    "name": "sheila feaster",
    "position": "teacher",
    "salary": 55571
  },
  {
    "name": "kevin hughes",
    "position": "teacher",
    "salary": 55571
  },
  {
    "name": "andrew white",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "cheryl todman",
    "position": "lead accounting tech",
    "salary": 55503
  },
  {
    "name": "leslie strong",
    "position": "returns processing",
    "salary": 55503
  },
  {
    "name": "justin young",
    "position": "lead accounting tech",
    "salary": 55503
  },
  {
    "name": "tisa mcghee",
    "position": "lead payroll technician",
    "salary": 55503
  },
  {
    "name": "gail herring",
    "position": "lead cashier",
    "salary": 55503
  },
  {
    "name": "barbara white",
    "position": "staff assistant",
    "salary": 55494
  },
  {
    "name": "joseph osiecki",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "dawn prather",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "lakia smith",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "megan treacy",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "derek gray",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "valon alford",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "shayla finley",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "kathleen ambroso",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "patricia santucci",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "jessica rotunno",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "mikaya strickling",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "lauren pitman",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "brittany bordonaro",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "aaliyah muhammad",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "ellen harms",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "william farr",
    "position": "lieutenant",
    "salary": 103860
  },
  {
    "name": "timothy elliott",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "jill palmer",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "jessica canty",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "mary labarge",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "rheanisha cartwright",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "jemeka brown",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "nathaniel currie",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "omotayo daniels",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "lauren lewis",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "jasmine garland",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "josiah eaves",
    "position": "lieutenant",
    "salary": 103854
  },
  {
    "name": "regina johnson",
    "position": "social worker",
    "salary": 55493
  },
  {
    "name": "al marshall",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "linda shabazz",
    "position": "abandoned vehicle investigator",
    "salary": 55488
  },
  {
    "name": "anita curry",
    "position": "staff assistant",
    "salary": 55488
  },
  {
    "name": "paula moore",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "renee mabry",
    "position": "environmental hlth tech",
    "salary": 55488
  },
  {
    "name": "beverly mumford",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "dexter smith",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "renee loving",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "derrick witcher",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "michelle milam",
    "position": "lieutenant",
    "salary": 103854
  },
  {
    "name": "pamela thompson",
    "position": "program specialist",
    "salary": 55488
  },
  {
    "name": "causandra smith fludd",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "anne price",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "dorene clark",
    "position": "lead parking enforcement offic",
    "salary": 55488
  },
  {
    "name": "rasheed ali",
    "position": "engineering technician",
    "salary": 55488
  },
  {
    "name": "rosemary layton",
    "position": "accounting tech",
    "salary": 55488
  },
  {
    "name": "diane giles",
    "position": "abandoned vehicle inspector",
    "salary": 55488
  },
  {
    "name": "ursula holmes",
    "position": "legal instruments examiner",
    "salary": 55488
  },
  {
    "name": "george parker",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "gregory scott",
    "position": "environmental protection speci",
    "salary": 55488
  },
  {
    "name": "eric hayes",
    "position": "lieutenant",
    "salary": 103854
  },
  {
    "name": "darnise henry bush",
    "position": "staff assistant",
    "salary": 55488
  },
  {
    "name": "phyllis roscoe",
    "position": "lead traffic system oper",
    "salary": 55488
  },
  {
    "name": "william slade",
    "position": "environmental specialist",
    "salary": 55488
  },
  {
    "name": "edward akopian",
    "position": "lead traffic system oper",
    "salary": 55488
  },
  {
    "name": "maria gibson",
    "position": "legal instruments examiner",
    "salary": 55488
  },
  {
    "name": "sharon joyner",
    "position": "legal instruments examiner",
    "salary": 55488
  },
  {
    "name": "jordana white",
    "position": "accounting srvs tech",
    "salary": 55488
  },
  {
    "name": "doreatha picott",
    "position": "placement data analyst",
    "salary": 55488
  },
  {
    "name": "rodney general",
    "position": "forensic psych tech",
    "salary": 55488
  },
  {
    "name": "leon brown",
    "position": "driver license examiner mvo",
    "salary": 55488
  },
  {
    "name": "silvia hamelin",
    "position": "lieutenant",
    "salary": 103854
  },
  {
    "name": "lateefah salaam",
    "position": "family support worker",
    "salary": 55488
  },
  {
    "name": "keith mitchell",
    "position": "education resource specialist",
    "salary": 55488
  },
  {
    "name": "maurice wise",
    "position": "lead parking enforcement offic",
    "salary": 55488
  },
  {
    "name": "martha phillips",
    "position": "driver lic exam comml",
    "salary": 55488
  },
  {
    "name": "denise harris",
    "position": "customer service representative",
    "salary": 55488
  },
  {
    "name": "pathrose johny",
    "position": "payroll technician",
    "salary": 55488
  },
  {
    "name": "samuel osborne",
    "position": "recovery assistant",
    "salary": 55488
  },
  {
    "name": "joel ehrlich",
    "position": "customer service representative",
    "salary": 55488
  },
  {
    "name": "lajuan hawkins",
    "position": "legal instruments examiner",
    "salary": 55488
  },
  {
    "name": "donna anthony",
    "position": "legal instruments examiner",
    "salary": 55488
  },
  {
    "name": "edward delisi",
    "position": "lieutenant",
    "salary": 103854
  },
  {
    "name": "alfred mccain",
    "position": "motor vehicle inspector",
    "salary": 55488
  },
  {
    "name": "derek lunsford",
    "position": "motor vehicle inspector",
    "salary": 55488
  },
  {
    "name": "wanda shorter",
    "position": "legal instruments examiner",
    "salary": 55488
  },
  {
    "name": "isabel monfort",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "karen mahoney",
    "position": "purchasing agent",
    "salary": 55488
  },
  {
    "name": "fredy oretega",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "constance thomas brown",
    "position": "accounting technician",
    "salary": 55488
  },
  {
    "name": "doretha lindsey",
    "position": "staff assistant",
    "salary": 55488
  },
  {
    "name": "regina brown",
    "position": "staff assistant",
    "salary": 55488
  },
  {
    "name": "robert reed",
    "position": "forensic psych tech",
    "salary": 55488
  },
  {
    "name": "tanishia williams minor",
    "position": "principal",
    "salary": 103853
  },
  {
    "name": "charles omekam",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "aprille johnson",
    "position": "compliance specialist",
    "salary": 55488
  },
  {
    "name": "dennis ducosin",
    "position": "park ranger",
    "salary": 55488
  },
  {
    "name": "shirley debrow",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "precious eshiet",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "marshall cunningham",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "gladys gattison",
    "position": "compliance specialist",
    "salary": 55488
  },
  {
    "name": "dorothy johnson",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "sorrell greene",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "rodney weaver",
    "position": "youth development specialist",
    "salary": 55488
  },
  {
    "name": "humberto molina",
    "position": "director, revenue accounting a",
    "salary": 152240
  },
  {
    "name": "savetria francis",
    "position": "principal",
    "salary": 103853
  },
  {
    "name": "henry plater",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "greta giles",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "darrell parker",
    "position": "evidence control technician",
    "salary": 55488
  },
  {
    "name": "carmen boston",
    "position": "librarian",
    "salary": 55488
  },
  {
    "name": "juanita burns",
    "position": "investigator",
    "salary": 55488
  },
  {
    "name": "esther mungo",
    "position": "lead parking enforcement offic",
    "salary": 55488
  },
  {
    "name": "richard campbell",
    "position": "unemployment tax examiner",
    "salary": 55488
  },
  {
    "name": "anthony prather",
    "position": "program suppor",
    "salary": 55488
  },
  {
    "name": "macklin jimenez",
    "position": "customer service representative",
    "salary": 55488
  },
  {
    "name": "diane ford",
    "position": "staff assistant",
    "salary": 55488
  },
  {
    "name": "azalia hunt",
    "position": "principal",
    "salary": 103853
  },
  {
    "name": "sandra hawkins",
    "position": "contact representative",
    "salary": 55488
  },
  {
    "name": "woodrow nichols",
    "position": "contact representative",
    "salary": 55488
  },
  {
    "name": "latonya miles",
    "position": "contact representative",
    "salary": 55488
  },
  {
    "name": "edith tyler",
    "position": "workers comp claims examiner",
    "salary": 55488
  },
  {
    "name": "cheryl ryles",
    "position": "contract specialist",
    "salary": 55488
  },
  {
    "name": "carolyn chapman",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "linda wright",
    "position": "contact representative",
    "salary": 55488
  },
  {
    "name": "barbara wilks carney",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "ureka wise",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "placid egbufoama",
    "position": "abandoned vehicle investigator",
    "salary": 55488
  },
  {
    "name": "david pinder",
    "position": "principal",
    "salary": 103853
  },
  {
    "name": "traci lindsay",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "herman jones",
    "position": "investigator",
    "salary": 55488
  },
  {
    "name": "tonda twitty",
    "position": "park ranger",
    "salary": 55488
  },
  {
    "name": "benjamin butler",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "belinda logan",
    "position": "staff assistant",
    "salary": 55488
  },
  {
    "name": "diane preston",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "kojo davis",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "lashawn glover",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "felicia carmichael",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "roberto medrano",
    "position": "code enforcement inspector",
    "salary": 55488
  },
  {
    "name": "janis jackson",
    "position": "pharmacist",
    "salary": 103848
  },
  {
    "name": "mineto clemons",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "craig campbell",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "teresa payne",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "angel corretjer",
    "position": "social service representive",
    "salary": 55488
  },
  {
    "name": "damon singletary",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "herman bunch",
    "position": "srvs management specialist",
    "salary": 55488
  },
  {
    "name": "zakiya brown",
    "position": "recreation specialist",
    "salary": 55488
  },
  {
    "name": "brenda taswell",
    "position": "administrative assistant",
    "salary": 55488
  },
  {
    "name": "joann smith",
    "position": "community hlth educator",
    "salary": 55488
  },
  {
    "name": "mary gray",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "evelyn carmen",
    "position": "policy analyst",
    "salary": 103848
  },
  {
    "name": "danuel baker",
    "position": "social service assistant",
    "salary": 55488
  },
  {
    "name": "edward tate",
    "position": "equipment repairer",
    "salary": 55453
  },
  {
    "name": "algie lovelace",
    "position": "equipment repairer",
    "salary": 55453
  },
  {
    "name": "esmond jardine",
    "position": "instructor, jrotc",
    "salary": 55440
  },
  {
    "name": "geraldine anthony",
    "position": "hr specialist",
    "salary": 55382
  },
  {
    "name": "shirley beecham",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "melvin swain",
    "position": "interpreter american sign",
    "salary": 55382
  },
  {
    "name": "lavar youmans",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "janet miller",
    "position": "forester (urban)",
    "salary": 55382
  },
  {
    "name": "stephanie goode",
    "position": "management liaison specialist",
    "salary": 55382
  },
  {
    "name": "alemayehu anna",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "beverly day",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "temisha lassiter",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "steven mazzola",
    "position": "community outreach coord",
    "salary": 55382
  },
  {
    "name": "maria anderson",
    "position": "manpower development specialist",
    "salary": 55382
  },
  {
    "name": "sharon prezzy",
    "position": "management analyst",
    "salary": 55382
  },
  {
    "name": "zelalem hill",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "onyango williams",
    "position": "legislative records managemen",
    "salary": 55382
  },
  {
    "name": "ronnell ferguson",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "mia brown",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "carly skidmore",
    "position": "program analyst",
    "salary": 55382
  },
  {
    "name": "steven domb",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "keith minor",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "yasmin leftwich",
    "position": "operations analyst",
    "salary": 55382
  },
  {
    "name": "beatriz ortega",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "patricia brown",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "mary mowbray",
    "position": "creative arts therapist (art)",
    "salary": 55382
  },
  {
    "name": "octavius milligan",
    "position": "lead info technology specialist",
    "salary": 55382
  },
  {
    "name": "lisa deloatch",
    "position": "medicaid specialist",
    "salary": 55382
  },
  {
    "name": "lisa pelt",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "charles satterfield",
    "position": "community relations specialist",
    "salary": 55382
  },
  {
    "name": "ali rahmaan",
    "position": "archivist",
    "salary": 55382
  },
  {
    "name": "wesley forte",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "tangee dingle",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "frederick rogers",
    "position": "correctional program specialist",
    "salary": 55382
  },
  {
    "name": "kristy hymes",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "margaret moskowitz",
    "position": "consumer specialist",
    "salary": 55382
  },
  {
    "name": "maliaka scott",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "yolanda roy",
    "position": "business certification specialist",
    "salary": 55382
  },
  {
    "name": "julia irving",
    "position": "community outreach coor",
    "salary": 55382
  },
  {
    "name": "monica mccall-matey",
    "position": "business certification specialist",
    "salary": 55382
  },
  {
    "name": "bernadette francis",
    "position": "program support assistant",
    "salary": 55382
  },
  {
    "name": "sonya lake",
    "position": "public affairs specialist",
    "salary": 55382
  },
  {
    "name": "carol sullivan",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "marie celeste",
    "position": "social service assistant",
    "salary": 55382
  },
  {
    "name": "dana caffee-glenn",
    "position": "program specialist",
    "salary": 55382
  },
  {
    "name": "jandel benjamin",
    "position": "school meals program specialis",
    "salary": 55382
  },
  {
    "name": "carolyn wait",
    "position": "program specialist",
    "salary": 55382
  },
  {
    "name": "keia brooks",
    "position": "executive assistant",
    "salary": 55382
  },
  {
    "name": "jacqueline jones",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "raynald blackwell",
    "position": "youth program coordinator",
    "salary": 55382
  },
  {
    "name": "lauren williams",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "stephanie clifford",
    "position": "investigator",
    "salary": 55382
  },
  {
    "name": "natasha baker",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "gene jackson",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "lequita burden",
    "position": "grants management specialist",
    "salary": 55382
  },
  {
    "name": "cynthia coleman",
    "position": "contract specialist",
    "salary": 55382
  },
  {
    "name": "justin silvey",
    "position": "equal opportunity",
    "salary": 55382
  },
  {
    "name": "delenia johnson",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "sandrea woolfolk",
    "position": "recreation specialist",
    "salary": 55382
  },
  {
    "name": "zafar shah",
    "position": "equal opportunity specialist",
    "salary": 55382
  },
  {
    "name": "georgette carter",
    "position": "executive assistant",
    "salary": 55382
  },
  {
    "name": "savern fripp",
    "position": "staff assistant",
    "salary": 55382
  },
  {
    "name": "hakim carroll",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "kenneth wells",
    "position": "firefighter vice tech",
    "salary": 55377
  },
  {
    "name": "eric goulet",
    "position": "budget director",
    "salary": 152240
  },
  {
    "name": "brian scanlon",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "wesley young",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "thomas williams",
    "position": "firefighter vice tech",
    "salary": 55377
  },
  {
    "name": "melissa davis-warfield",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "alexandros tombras",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "michael loving",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "duane poe",
    "position": "firefighter vice tech",
    "salary": 55377
  },
  {
    "name": "david tinsley",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "steven utley",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "eric kolarick",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "enrico caruso",
    "position": "firefighter vice tech",
    "salary": 55377
  },
  {
    "name": "l lee redish",
    "position": "clinical case worker",
    "salary": 103848
  },
  {
    "name": "demitrius thomas",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "timothy baldwin",
    "position": "firefighter vice tech",
    "salary": 55377
  },
  {
    "name": "darrell wilson",
    "position": "firefighter tech",
    "salary": 55377
  },
  {
    "name": "dawn deforrest",
    "position": "workers compensation recipient",
    "salary": 55318
  },
  {
    "name": "sylvester young",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "wayne jefferies",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "vasco hoyte",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "boma jack",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "charles everett",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "carlos ray",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "edel quinones",
    "position": "information technology specialist",
    "salary": 103848
  },
  {
    "name": "denise stewart",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "ricky weaver",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "thomas riley",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "crystal powell",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "jerry bell",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "alfreda powell",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "bobby gaines",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "kim bell",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "alvin durham",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "priscilla robinson",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "marcella hicks",
    "position": "consumer srvs officer",
    "salary": 103848
  },
  {
    "name": "phyllis cassell",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "yolanda boyd scott",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "ethel brown",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "sabrina gilbert",
    "position": "paramedic - basic",
    "salary": 55285
  },
  {
    "name": "dennis stevenson",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "rita jackson",
    "position": "youth development representati",
    "salary": 55285
  },
  {
    "name": "joyce webb bridges",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "darlene nelson",
    "position": "paramedic - basic",
    "salary": 55285
  },
  {
    "name": "michael gardner",
    "position": "paramedic - basic",
    "salary": 55285
  },
  {
    "name": "harold dargan",
    "position": "paramedic - basic",
    "salary": 55285
  },
  {
    "name": "clara mccargo",
    "position": "contract specialist",
    "salary": 103848
  },
  {
    "name": "pamela leach",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "freddie williams",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "shelia henderson",
    "position": "paramedic - basic",
    "salary": 55285
  },
  {
    "name": "robert fowler",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "mark loften",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "lisa wellington",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "james moore",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "john barnette",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "wonder fowler",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "clara brunson",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "nicholas geleta",
    "position": "rtc certification & monitoring",
    "salary": 103813
  },
  {
    "name": "dwayne taylor",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "stephen amobi",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "eric alexander",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "tina murphy",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "ernest young",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "reginald wheeler",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "catherine williams",
    "position": "correctional officer",
    "salary": 55285
  },
  {
    "name": "wayne simpson",
    "position": "workers compensation recipient",
    "salary": 55224
  },
  {
    "name": "arthur daniels",
    "position": "custodial worker supervisor",
    "salary": 55214
  },
  {
    "name": "lee herman",
    "position": "workers compensation recipient",
    "salary": 55159
  },
  {
    "name": "marie racine",
    "position": "professor",
    "salary": 103799
  },
  {
    "name": "lee wolfe",
    "position": "workers compensation recipient",
    "salary": 55069
  },
  {
    "name": "rodrigo gobantes",
    "position": "service center rep",
    "salary": 55047
  },
  {
    "name": "lionel snowden",
    "position": "fleet program manager",
    "salary": 55047
  },
  {
    "name": "yusuf abdullah",
    "position": "locksmith foreman",
    "salary": 55047
  },
  {
    "name": "candace nelson",
    "position": "community relations specialist",
    "salary": 55000
  },
  {
    "name": "bernedia long",
    "position": "staff assistant",
    "salary": 55000
  },
  {
    "name": "tony johnson",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "keith holman",
    "position": "community service representative",
    "salary": 55000
  },
  {
    "name": "brittney wright",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "carl thomas",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "daryao khatri",
    "position": "professor",
    "salary": 103799
  },
  {
    "name": "jakeline reyes yanes",
    "position": "constituent services specialist",
    "salary": 55000
  },
  {
    "name": "karim marshall",
    "position": "legislative aide",
    "salary": 55000
  },
  {
    "name": "andrew washington",
    "position": "special assistant",
    "salary": 55000
  },
  {
    "name": "juan barragan",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "sandra lee",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "james bulger",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "davena archie",
    "position": "community service representative",
    "salary": 55000
  },
  {
    "name": "valencia becks",
    "position": "outreach & service specialist",
    "salary": 55000
  },
  {
    "name": "christopher fitzgerald",
    "position": "community service representative",
    "salary": 55000
  },
  {
    "name": "brandon starkes",
    "position": "special assistant",
    "salary": 55000
  },
  {
    "name": "teodora morales jacks",
    "position": "unemployment tax officer",
    "salary": 103710
  },
  {
    "name": "anthony gongora",
    "position": "assistant professor",
    "salary": 55000
  },
  {
    "name": "bagus himawan",
    "position": "assistant professor",
    "salary": 55000
  },
  {
    "name": "sarina loy",
    "position": "legislative aide",
    "salary": 55000
  },
  {
    "name": "sedrick muhammad",
    "position": "community relations specialist",
    "salary": 55000
  },
  {
    "name": "jacqueline brown",
    "position": "youth development representati",
    "salary": 54977
  },
  {
    "name": "william palmer",
    "position": "correctional officer",
    "salary": 54977
  },
  {
    "name": "michael watson",
    "position": "paramedic",
    "salary": 54977
  },
  {
    "name": "michael whitfield",
    "position": "correctional officer",
    "salary": 54977
  },
  {
    "name": "carson mok",
    "position": "project specialist",
    "salary": 54860
  },
  {
    "name": "teri huet",
    "position": "office manager",
    "salary": 54858
  },
  {
    "name": "laverne law",
    "position": "administrative support specialist",
    "salary": 103682
  },
  {
    "name": "mardia blyther",
    "position": "education counselor",
    "salary": 54858
  },
  {
    "name": "karen wong",
    "position": "business associate",
    "salary": 54858
  },
  {
    "name": "elizabeth ongao",
    "position": "coordinator, sevis",
    "salary": 54858
  },
  {
    "name": "george lee",
    "position": "protective svcs ofr",
    "salary": 54842
  },
  {
    "name": "tawanna shuford",
    "position": "constituent services specialist",
    "salary": 54842
  },
  {
    "name": "diana jackson",
    "position": "protective svcs ofr",
    "salary": 54842
  },
  {
    "name": "elaine booth",
    "position": "lead contact rep",
    "salary": 54842
  },
  {
    "name": "alberta holden",
    "position": "protective svcs ofr",
    "salary": 54842
  },
  {
    "name": "gerald irvin",
    "position": "instructor, jrotc",
    "salary": 54832
  },
  {
    "name": "bernard douglas",
    "position": "workers compensation recipient",
    "salary": 54787
  },
  {
    "name": "fitzroy lee",
    "position": "deputy cfo for policy",
    "salary": 152240
  },
  {
    "name": "kathryn fairley",
    "position": "special assistant",
    "salary": 103682
  },
  {
    "name": "roxann ferguson",
    "position": "accounting technician ap",
    "salary": 54750
  },
  {
    "name": "mamie jackson",
    "position": "staff assistant",
    "salary": 54750
  },
  {
    "name": "willie lawson",
    "position": "accounting technician",
    "salary": 54750
  },
  {
    "name": "annette mason",
    "position": "staff assistant",
    "salary": 54750
  },
  {
    "name": "eunice carter",
    "position": "accounts payable tech",
    "salary": 54750
  },
  {
    "name": "shurron farmer",
    "position": "assistant professor",
    "salary": 54739
  },
  {
    "name": "aigner williams",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "jennifer conklin",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "shontae waldrip",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "ursula fisher",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "toni perry",
    "position": "compliance officer",
    "salary": 103682
  },
  {
    "name": "dawit affa",
    "position": "energy auditor",
    "salary": 54633
  },
  {
    "name": "karen coles",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "terrance henry",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "deepak singh",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "maureen anyangwa-ngeh",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "leah lemoine",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "lisa graham",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "emma boone",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "nicole appleman",
    "position": "social insurance specialist",
    "salary": 54633
  },
  {
    "name": "ifeoma muoka",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "timothy karikari",
    "position": "environmental engineer",
    "salary": 103682
  },
  {
    "name": "candice jefferson",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "emily rice",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "reuben kum",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "mitchell harmon",
    "position": "social insurance specialist",
    "salary": 54633
  },
  {
    "name": "carmina grant",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "alecia gooch",
    "position": "social insurance specialist",
    "salary": 54633
  },
  {
    "name": "yvonne simpson",
    "position": "resource development specialist",
    "salary": 54633
  },
  {
    "name": "ana guzman",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "jovita hollins",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "eddie harris",
    "position": "real property program speciali",
    "salary": 54633
  },
  {
    "name": "thinh nguyen",
    "position": "information technology specialist",
    "salary": 103682
  },
  {
    "name": "joseph swann",
    "position": "fish & wildlife biologist",
    "salary": 54633
  },
  {
    "name": "earl jones",
    "position": "compliance and investigative s",
    "salary": 54633
  },
  {
    "name": "tyrone lawson",
    "position": "compliance and investigative s",
    "salary": 54633
  },
  {
    "name": "sheryl rutledge",
    "position": "addiction treatment specialist",
    "salary": 54633
  },
  {
    "name": "timothy evans",
    "position": "lead public veh enf inspector",
    "salary": 54633
  },
  {
    "name": "marshia massey",
    "position": "auditor (tax)",
    "salary": 54633
  },
  {
    "name": "larissa etwaroo",
    "position": "operations support specialist",
    "salary": 54633
  },
  {
    "name": "donald matthews",
    "position": "paralegal specialist",
    "salary": 54633
  },
  {
    "name": "brenda berkley",
    "position": "staff assistant",
    "salary": 54633
  },
  {
    "name": "william thomas",
    "position": "program analyst",
    "salary": 54633
  },
  {
    "name": "jose de arteaga",
    "position": "program manager",
    "salary": 103682
  },
  {
    "name": "jada hayes",
    "position": "auditor (tax)",
    "salary": 54633
  },
  {
    "name": "sarah benson",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "tatia bartee",
    "position": "assessment program specialist",
    "salary": 54633
  },
  {
    "name": "dionne thompson",
    "position": "service coordinator",
    "salary": 54633
  },
  {
    "name": "kenya sumlin",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "sheng huang",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "tramaine newsome",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "marquita siler",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "yorjai chandy",
    "position": "contract specialist",
    "salary": 54633
  },
  {
    "name": "carlos murrell",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "william bernhardt",
    "position": "telecomms manager",
    "salary": 103682
  },
  {
    "name": "judith berland",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "wilbert mercado",
    "position": "assessment program specialist",
    "salary": 54633
  },
  {
    "name": "james smith",
    "position": "manpower development specialist",
    "salary": 54633
  },
  {
    "name": "maria alfonso",
    "position": "public health services special",
    "salary": 54633
  },
  {
    "name": "nija hepburn-nelson",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "leanna frankland",
    "position": "librarian",
    "salary": 54633
  },
  {
    "name": "steven davis",
    "position": "program support assistant",
    "salary": 54633
  },
  {
    "name": "vanessa ingram",
    "position": "workforce development specialist",
    "salary": 54633
  },
  {
    "name": "bridgid mangan",
    "position": "librarian",
    "salary": 54633
  },
  {
    "name": "polly ross",
    "position": "librarian",
    "salary": 54633
  },
  {
    "name": "zadie bowles",
    "position": "insurance licensing spec manager",
    "salary": 103682
  },
  {
    "name": "monisa waters",
    "position": "outreach specialist",
    "salary": 54633
  },
  {
    "name": "lorraine boyd",
    "position": "children's librarian",
    "salary": 54633
  },
  {
    "name": "preston graham",
    "position": "recreation specialist",
    "salary": 54633
  },
  {
    "name": "brandon bass",
    "position": "program support assistant",
    "salary": 54633
  },
  {
    "name": "aisha williams",
    "position": "health licensing specialist",
    "salary": 54633
  },
  {
    "name": "tamara turner",
    "position": "manpower development specialist",
    "salary": 54633
  },
  {
    "name": "macarena cantelas",
    "position": "workforce dev spec (bil)",
    "salary": 54633
  },
  {
    "name": "larry green",
    "position": "manpower development specialist",
    "salary": 54633
  },
  {
    "name": "susan travers",
    "position": "workforce development specialist",
    "salary": 54633
  },
  {
    "name": "karen quash",
    "position": "librarian",
    "salary": 54633
  },
  {
    "name": "rula swann",
    "position": "social worker program manager",
    "salary": 103682
  },
  {
    "name": "jennifer wright",
    "position": "workforce development specialist",
    "salary": 54633
  },
  {
    "name": "aronny noguera",
    "position": "workforce dev spec (bil)",
    "salary": 54633
  },
  {
    "name": "leigh emerson",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "tianna hay",
    "position": "case manager",
    "salary": 54633
  },
  {
    "name": "colleen semitekol",
    "position": "librarian",
    "salary": 54633
  },
  {
    "name": "richard blocker",
    "position": "information technology specialist",
    "salary": 54633
  },
  {
    "name": "keren murphy",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "dionne doby",
    "position": "social insurance specialist",
    "salary": 54633
  },
  {
    "name": "oluwafunmilayo okanlawon",
    "position": "vocational rehabilitation specialist",
    "salary": 54633
  },
  {
    "name": "betty lyon",
    "position": "fish & wildlife biologist",
    "salary": 54633
  },
  {
    "name": "fletcher davis",
    "position": "information technology specialist",
    "salary": 103682
  },
  {
    "name": "bonnie mckeemer",
    "position": "social insurance specialist",
    "salary": 54633
  },
  {
    "name": "luke lyon",
    "position": "fisheries biologist",
    "salary": 54633
  },
  {
    "name": "grace manubay",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "charity nwokorie",
    "position": "education services monitor",
    "salary": 54633
  },
  {
    "name": "diane williams johnson",
    "position": "staff assistant",
    "salary": 54633
  },
  {
    "name": "mariam madanat",
    "position": "public health advisor",
    "salary": 54633
  },
  {
    "name": "brittney berling",
    "position": "public health nutritionist",
    "salary": 54633
  },
  {
    "name": "jennifer crawford",
    "position": "program support assistant",
    "salary": 54633
  },
  {
    "name": "vanessa gerideau",
    "position": "recreation specialist",
    "salary": 54633
  },
  {
    "name": "mark hill",
    "position": "grants management specialist",
    "salary": 54633
  },
  {
    "name": "michelle victoria",
    "position": "teacher",
    "salary": 103664
  },
  {
    "name": "jacob zangrilli",
    "position": "environmental protection speci",
    "salary": 54633
  },
  {
    "name": "janille thompson",
    "position": "public health nutritionist",
    "salary": 54633
  },
  {
    "name": "tawana chase bates",
    "position": "staff assistant",
    "salary": 54633
  },
  {
    "name": "melondy franklin",
    "position": "health licensing specialist",
    "salary": 54633
  },
  {
    "name": "michael duran",
    "position": "case manager (fiss program)",
    "salary": 54633
  },
  {
    "name": "victoria akinnuso",
    "position": "investigator",
    "salary": 54633
  },
  {
    "name": "kadija ash",
    "position": "consortium coor",
    "salary": 54633
  },
  {
    "name": "jennifer hamilton",
    "position": "recreation specialist",
    "salary": 54633
  },
  {
    "name": "pamela dickerson",
    "position": "collection specialist",
    "salary": 54633
  },
  {
    "name": "tiffany scott",
    "position": "business manager",
    "salary": 54594
  },
  {
    "name": "cyril byron",
    "position": "assoc chief financial officer",
    "salary": 152240
  },
  {
    "name": "jubill austin",
    "position": "teacher",
    "salary": 103664
  },
  {
    "name": "jocelyn linde",
    "position": "business manager",
    "salary": 54594
  },
  {
    "name": "ayeesha purnell",
    "position": "business manager",
    "salary": 54594
  },
  {
    "name": "tonya mason",
    "position": "business manager",
    "salary": 54594
  },
  {
    "name": "hubert neal",
    "position": "telecommunications equip opera",
    "salary": 54544
  },
  {
    "name": "lisa duvall",
    "position": "solid waste inspector",
    "salary": 54531
  },
  {
    "name": "daniel lottes",
    "position": "paramedic firefighter",
    "salary": 54490
  },
  {
    "name": "john hooker",
    "position": "paramedic firefighter",
    "salary": 54490
  },
  {
    "name": "curtis patterson",
    "position": "paramedic firefighter",
    "salary": 54490
  },
  {
    "name": "sean harrington",
    "position": "paramedic firefighter",
    "salary": 54490
  },
  {
    "name": "robert raymer",
    "position": "paramedic firefighter",
    "salary": 54490
  },
  {
    "name": "wendy stephens",
    "position": "teacher",
    "salary": 103664
  },
  {
    "name": "oliver durden",
    "position": "paramedic firefighter",
    "salary": 54490
  },
  {
    "name": "amy filson",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "savitri gay",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "alexis leonesio",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "josie johnson",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "james howes",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "jennifer george",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "tameka miller",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "lauren falls",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "lauren weaver",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "carolyn cousin",
    "position": "professor",
    "salary": 103586
  },
  {
    "name": "trayon mathews",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "sarah wise",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "jennifer caine",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "michael shoenthal",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "miluska triveno",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "lyntrel smith",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "sissela tucker",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "samantha stevens",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "charles edwards",
    "position": "teacher",
    "salary": 54425
  },
  {
    "name": "tiffany hooper",
    "position": "dispatcher",
    "salary": 54421
  },
  {
    "name": "linda rohrbaugh",
    "position": "director",
    "salary": 103564
  },
  {
    "name": "nebeyou tefera",
    "position": "dispatcher",
    "salary": 54421
  },
  {
    "name": "hongtu vo",
    "position": "dispatcher",
    "salary": 54421
  },
  {
    "name": "kelly mcgrath",
    "position": "extension specialist",
    "salary": 54322
  },
  {
    "name": "marshelle hailstock",
    "position": "project coordinator",
    "salary": 54322
  },
  {
    "name": "keisha scott",
    "position": "project specialist",
    "salary": 54322
  },
  {
    "name": "celestine johnson",
    "position": "volunteer services assistant",
    "salary": 54285
  },
  {
    "name": "mary graninger",
    "position": "civilian pay tech",
    "salary": 54285
  },
  {
    "name": "drenda bolton",
    "position": "payroll supv",
    "salary": 54285
  },
  {
    "name": "lucinda slade thomas",
    "position": "police comm opr report writer",
    "salary": 54285
  },
  {
    "name": "ronald mahoney",
    "position": "workers compensation recipient",
    "salary": 54246
  },
  {
    "name": "melanie nathan",
    "position": "information technology specialist",
    "salary": 103541
  },
  {
    "name": "elizabeth washington",
    "position": "administrative assistant",
    "salary": 54219
  },
  {
    "name": "lawanne thomas",
    "position": "customer service representative",
    "salary": 54219
  },
  {
    "name": "massaih ali",
    "position": "customer service representative",
    "salary": 54219
  },
  {
    "name": "robin owens",
    "position": "staff assistant",
    "salary": 54219
  },
  {
    "name": "kimmel king",
    "position": "financial specialist",
    "salary": 54219
  },
  {
    "name": "tenaya johnson",
    "position": "staff assistant",
    "salary": 54219
  },
  {
    "name": "jazmin torres",
    "position": "administrative assistant",
    "salary": 54219
  },
  {
    "name": "sarah glasgow",
    "position": "accountant",
    "salary": 54219
  },
  {
    "name": "donald reeves",
    "position": "payroll supv",
    "salary": 54219
  },
  {
    "name": "barbara terry",
    "position": "staff assistant",
    "salary": 54219
  },
  {
    "name": "eleanor turner",
    "position": "adoptions program manager",
    "salary": 103531
  },
  {
    "name": "dionne bryant",
    "position": "staff assistant",
    "salary": 54219
  },
  {
    "name": "richard king",
    "position": "accountant",
    "salary": 54219
  },
  {
    "name": "nabina mganga",
    "position": "grants analyst",
    "salary": 54219
  },
  {
    "name": "jamie best",
    "position": "customer service representative",
    "salary": 54219
  },
  {
    "name": "yewande olaniyan",
    "position": "nurse",
    "salary": 54196
  },
  {
    "name": "monisola oluwole",
    "position": "nurse",
    "salary": 54196
  },
  {
    "name": "ebere erugo",
    "position": "nurse",
    "salary": 54196
  },
  {
    "name": "vitalis kemakolam",
    "position": "nurse",
    "salary": 54196
  },
  {
    "name": "harold viar",
    "position": "workers compensation recipient",
    "salary": 54184
  },
  {
    "name": "thomas smith",
    "position": "community service representative",
    "salary": 54075
  },
  {
    "name": "daniel bridges",
    "position": "it project manager",
    "salary": 103514
  },
  {
    "name": "shelby barnes",
    "position": "audio visual media specialist",
    "salary": 54064
  },
  {
    "name": "sophie homonoff",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "lisa goode",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "gwendolyn goad",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "jeanie chang",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "nicole bryant",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "kim levengood",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "jane roy-bachman",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "christopher sullivan",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "michele salahuddin",
    "position": "compliance monitor",
    "salary": 54064
  },
  {
    "name": "stan spaght",
    "position": "human resources manager (compe",
    "salary": 103425
  },
  {
    "name": "jessica roche",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "bernell wiggins",
    "position": "human resource specialist",
    "salary": 54064
  },
  {
    "name": "kathleen webb",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "lachelle story",
    "position": "project coordinator",
    "salary": 54064
  },
  {
    "name": "duane ashman",
    "position": "transition specialist",
    "salary": 54064
  },
  {
    "name": "stephanie cobb",
    "position": "program coordinator",
    "salary": 54064
  },
  {
    "name": "adenike adelugba",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "hanaa soltan",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "sylvia kumi",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "melissa capotosto",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "vincent carter",
    "position": "information technology specialist",
    "salary": 103423
  },
  {
    "name": "ellainna hong",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "masuda fayzieva",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "stacey steidler",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "elizabeth brugge",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "carrie bacon",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "corey reed",
    "position": "sanitarian",
    "salary": 54041
  },
  {
    "name": "erick brown",
    "position": "medical technologist",
    "salary": 54041
  },
  {
    "name": "linnea leverson",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "shikitia beander",
    "position": "social worker",
    "salary": 54041
  },
  {
    "name": "ester perez",
    "position": "payroll technician",
    "salary": 54039
  },
  {
    "name": "patricia thorstenson",
    "position": "professor",
    "salary": 103421
  },
  {
    "name": "alicia brown",
    "position": "tax examining technician",
    "salary": 54039
  },
  {
    "name": "tenarki lewis",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "kim wilson",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "cotilder marshall",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "reda harden",
    "position": "staff assistant",
    "salary": 54039
  },
  {
    "name": "paulette walters",
    "position": "lead legal instrum exam",
    "salary": 54039
  },
  {
    "name": "jay chisolm",
    "position": "paralegal specialist",
    "salary": 54039
  },
  {
    "name": "yvette mattocks-gahin",
    "position": "support enforcement specialist",
    "salary": 54039
  },
  {
    "name": "martha washington",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "latonya kyler",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "angelique hayes",
    "position": "assoc chief financial officer",
    "salary": 152240
  },
  {
    "name": "jeffrey seltzer",
    "position": "environmental protection",
    "salary": 103400
  },
  {
    "name": "carla newby",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "george pettis",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "deborah levi",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "benita wade",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "constance vines",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "antoinette williams",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "antoinette payden",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "joan kirkland",
    "position": "payroll tech",
    "salary": 54039
  },
  {
    "name": "timi smith",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "joanne o'neal",
    "position": "tax examining technician",
    "salary": 54039
  },
  {
    "name": "george eng",
    "position": "professor",
    "salary": 103380
  },
  {
    "name": "charles parker",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "george marion",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "latrisha wright",
    "position": "family support worker",
    "salary": 54039
  },
  {
    "name": "leah harrison",
    "position": "legal instruments examiner",
    "salary": 54039
  },
  {
    "name": "jasmine julien",
    "position": "legal instruments examiner",
    "salary": 54039
  },
  {
    "name": "sandra jenkins",
    "position": "securities registration specialist",
    "salary": 54039
  },
  {
    "name": "rosa jenkins",
    "position": "legal instruments examiner",
    "salary": 54039
  },
  {
    "name": "margie brown",
    "position": "training assistant",
    "salary": 54039
  },
  {
    "name": "lillie royall",
    "position": "community svcs financial tech",
    "salary": 54039
  },
  {
    "name": "denise sedgwick",
    "position": "legal instruments examiner",
    "salary": 54039
  },
  {
    "name": "vielka scott",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "ella jones",
    "position": "legal instruments examiner",
    "salary": 54039
  },
  {
    "name": "gaynell petty henderson",
    "position": "imaging specialist",
    "salary": 54039
  },
  {
    "name": "barnes lewis",
    "position": "driver license examiner mvo",
    "salary": 54039
  },
  {
    "name": "alma phillips",
    "position": "accounting technician",
    "salary": 54039
  },
  {
    "name": "velva langley",
    "position": "cpr assistant (pio), cs-303-9",
    "salary": 54039
  },
  {
    "name": "lashawn bland",
    "position": "customer service representative",
    "salary": 54039
  },
  {
    "name": "rickey davenport thomas",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "kameyel ashton",
    "position": "accounting tech",
    "salary": 54039
  },
  {
    "name": "anita waller",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "valetta janifer",
    "position": "tax specialist",
    "salary": 54039
  },
  {
    "name": "gwendolyn payton",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "brenda young",
    "position": "accounts payable tech",
    "salary": 54039
  },
  {
    "name": "jeannie simons",
    "position": "customer service representative",
    "salary": 54039
  },
  {
    "name": "siu tse",
    "position": "customer service representative",
    "salary": 54039
  },
  {
    "name": "michelle monk",
    "position": "accounts payable tech",
    "salary": 54039
  },
  {
    "name": "gloria latney",
    "position": "legal assistant",
    "salary": 54039
  },
  {
    "name": "janice thornton",
    "position": "accounting tech",
    "salary": 54039
  },
  {
    "name": "valerie bradford",
    "position": "tax specialist",
    "salary": 54039
  },
  {
    "name": "kristal thomas",
    "position": "clinical support contracts lia",
    "salary": 54039
  },
  {
    "name": "marthine bartee-williams",
    "position": "staff assistant",
    "salary": 54039
  },
  {
    "name": "aletha cromartie",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "christopher gray",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "charles barbour",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "vincent hill",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "monica lewis",
    "position": "accounts payable specialist",
    "salary": 54039
  },
  {
    "name": "diane mason",
    "position": "program support assistant",
    "salary": 54039
  },
  {
    "name": "brenda wills",
    "position": "comp assistant",
    "salary": 54039
  },
  {
    "name": "natasha pettus",
    "position": "crime scene evidence tech",
    "salary": 54039
  },
  {
    "name": "pauline bush",
    "position": "afis monitor",
    "salary": 54039
  },
  {
    "name": "nadine parker",
    "position": "support services specialist",
    "salary": 54039
  },
  {
    "name": "norletta jones",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "tina barnett",
    "position": "police specialist",
    "salary": 54039
  },
  {
    "name": "michelle pierre",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "sonny hicks",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "linda fabrie",
    "position": "boat vessel registrar",
    "salary": 54039
  },
  {
    "name": "judith goodman",
    "position": "police specialist",
    "salary": 54039
  },
  {
    "name": "letitia settle",
    "position": "unemployment compensation clai",
    "salary": 54039
  },
  {
    "name": "mildred lovette",
    "position": "unemployment tax examiner",
    "salary": 54039
  },
  {
    "name": "catrina weston",
    "position": "contact representative",
    "salary": 54039
  },
  {
    "name": "christine mckeever",
    "position": "contact representative",
    "salary": 54039
  },
  {
    "name": "lynnora walker",
    "position": "staff assistant",
    "salary": 54039
  },
  {
    "name": "maxine maye",
    "position": "computer lab outreach specialist",
    "salary": 54039
  },
  {
    "name": "ingrid johnson-linder",
    "position": "uniform crime reporting coord",
    "salary": 54039
  },
  {
    "name": "ruth barnes",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "barbara douglas gardner",
    "position": "manpower development specialist",
    "salary": 54039
  },
  {
    "name": "wanda matthews",
    "position": "unemployment tax examiner",
    "salary": 54039
  },
  {
    "name": "roger mccoy",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "tywan jones",
    "position": "traffic control officer",
    "salary": 54039
  },
  {
    "name": "marilyn cabiness",
    "position": "lead parking enforcement offic",
    "salary": 54039
  },
  {
    "name": "tyrone herring",
    "position": "lead parking enforcement offic",
    "salary": 54039
  },
  {
    "name": "darmelita fuller",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "eugene davis",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "nicole davis",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "shantell bush",
    "position": "staff assistant",
    "salary": 54039
  },
  {
    "name": "christopher cebrzynski",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "brian cobbs",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "eugene lutz",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "willsella beverly",
    "position": "administrative assistant",
    "salary": 54039
  },
  {
    "name": "randora coates",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "teresa buchanan",
    "position": "lead parking enforcement offic",
    "salary": 54039
  },
  {
    "name": "joseph clark",
    "position": "recreation specialist",
    "salary": 54039
  },
  {
    "name": "lynnwood campbell",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "shaun hughes",
    "position": "compliance specialist",
    "salary": 54039
  },
  {
    "name": "barbara hawes",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "margaret bidi",
    "position": "social service assistant",
    "salary": 54039
  },
  {
    "name": "jermall wright",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "beulah bynum",
    "position": "management systems specialist",
    "salary": 54039
  },
  {
    "name": "denice harmon",
    "position": "compliance specialist",
    "salary": 54039
  },
  {
    "name": "monique cameron",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "beverly hennighan",
    "position": "youth development specialist",
    "salary": 54039
  },
  {
    "name": "sharon brandon",
    "position": "program specialist",
    "salary": 54039
  },
  {
    "name": "roxanne allen-silver",
    "position": "social service representive",
    "salary": 54039
  },
  {
    "name": "diane bullock",
    "position": "program coor",
    "salary": 54039
  },
  {
    "name": "rabinai carson",
    "position": "executive assistant",
    "salary": 54000
  },
  {
    "name": "monique wynn",
    "position": "administrative assistant",
    "salary": 54000
  },
  {
    "name": "rachel ward",
    "position": "teacher",
    "salary": 53993
  },
  {
    "name": "angela tilghman",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "suzanne washington",
    "position": "teacher",
    "salary": 53993
  },
  {
    "name": "julie schwartz",
    "position": "teacher",
    "salary": 53993
  },
  {
    "name": "lourdes nedelman",
    "position": "teacher",
    "salary": 53993
  },
  {
    "name": "amalie gorbold",
    "position": "teacher",
    "salary": 53993
  },
  {
    "name": "joseph talarico",
    "position": "teacher",
    "salary": 53993
  },
  {
    "name": "josephine perkins",
    "position": "program suppor",
    "salary": 53983
  },
  {
    "name": "cecile payne",
    "position": "program support assistant",
    "salary": 53983
  },
  {
    "name": "carolyn horton",
    "position": "staff assistant",
    "salary": 53983
  },
  {
    "name": "john barbusin",
    "position": "protective svcs ofcr",
    "salary": 53983
  },
  {
    "name": "ronald easley",
    "position": "protective svcs ofcr",
    "salary": 53983
  },
  {
    "name": "john brittain",
    "position": "professor",
    "salary": 152000
  },
  {
    "name": "michelle edwards",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "janice wright",
    "position": "program analyst",
    "salary": 53983
  },
  {
    "name": "juana hernandez",
    "position": "coordinato",
    "salary": 53983
  },
  {
    "name": "dexter nutall",
    "position": "paralegal specialist",
    "salary": 53983
  },
  {
    "name": "kenneth contee",
    "position": "information technology specialist",
    "salary": 53983
  },
  {
    "name": "lectoye oliver",
    "position": "recreation specialist",
    "salary": 53976
  },
  {
    "name": "robert johnson",
    "position": "returns processing",
    "salary": 53968
  },
  {
    "name": "eric birts",
    "position": "purchasing agent",
    "salary": 53968
  },
  {
    "name": "lindsay sarin",
    "position": "assistant professor",
    "salary": 53965
  },
  {
    "name": "ji-yeon kim",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "rahshita lowe-watson",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "joyce coleman",
    "position": "principal",
    "salary": 103351
  },
  {
    "name": "brian reing",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "casandra pedroza",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "paul harrington",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "jamie mac gregor",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "shannon nelson",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "stephanie mishik",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "fiona murphy",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "joseph milani",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "june heesen",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "shamara moore",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "joseph lapan",
    "position": "trial attorney",
    "salary": 103315
  },
  {
    "name": "sandra lee",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "caitlin kevill",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "kevin jackson",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "ayannie peake",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "maria jimeno",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "lashana shubert",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "jennifer brown",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "stephanie moore",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "jaclyn seward",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "lauren rockwell",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "yvette judge",
    "position": "deputy admin",
    "salary": 103250
  },
  {
    "name": "alison yocum",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "aisha tyehimba",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "delores weekes",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "jennifer bostic",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "kelly alsup",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "rachel broudy",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "darrell dreher",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "laura dorn",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "lisa burnham",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "sabrina finberg",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "charlotte watkins",
    "position": "principal",
    "salary": 103225
  },
  {
    "name": "niaa dawkins",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "brandon buffin",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "sarah bogan",
    "position": "teacher",
    "salary": 53957
  },
  {
    "name": "kenneth mcgill",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "iqbal ghafoor",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "deon jones",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "valerie veney",
    "position": "youth development representati",
    "salary": 53949
  },
  {
    "name": "julio perez",
    "position": "youth development representati",
    "salary": 53949
  },
  {
    "name": "david crawley",
    "position": "youth development representati",
    "salary": 53949
  },
  {
    "name": "jonathan armstead",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "sheilia west miller",
    "position": "principal",
    "salary": 103225
  },
  {
    "name": "clinso brumfield",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "broderick crawford",
    "position": "youth development representati",
    "salary": 53949
  },
  {
    "name": "shawn franklin",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "pamela roberts",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "sha'ron davis",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "melissa turner",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "jacqueline pinnix",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "shanika johnson",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "michelle elzie",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "rudis lara",
    "position": "paramedic - basic",
    "salary": 53949
  },
  {
    "name": "david landeryou",
    "position": "principal",
    "salary": 103225
  },
  {
    "name": "deborah moton",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "joseph stevenson",
    "position": "correctional officer",
    "salary": 53949
  },
  {
    "name": "mohammad wahab",
    "position": "sign painter",
    "salary": 53893
  },
  {
    "name": "larry williams",
    "position": "assistant professor",
    "salary": 53850
  },
  {
    "name": "renee morgan",
    "position": "staff assistant",
    "salary": 53822
  },
  {
    "name": "alexander wooten",
    "position": "laboratory manager",
    "salary": 53822
  },
  {
    "name": "tarren cummings",
    "position": "teacher",
    "salary": 53772
  },
  {
    "name": "oneika miller",
    "position": "teacher",
    "salary": 53772
  },
  {
    "name": "adrian reed",
    "position": "staff assistant",
    "salary": 53758
  },
  {
    "name": "joseph tillman",
    "position": "information technology specialist",
    "salary": 53758
  },
  {
    "name": "william mccloskey",
    "position": "lieutenant",
    "salary": 103189
  },
  {
    "name": "michael gamboa",
    "position": "youth family team mtg coord",
    "salary": 53758
  },
  {
    "name": "eric hauser",
    "position": "program analyst",
    "salary": 53758
  },
  {
    "name": "beverly dyson",
    "position": "program support assistant",
    "salary": 53758
  },
  {
    "name": "freedom dowdy",
    "position": "mental health specialist",
    "salary": 53758
  },
  {
    "name": "dirk craig",
    "position": "management liaison specialist",
    "salary": 53758
  },
  {
    "name": "amanda molson",
    "position": "historic preservation speciali",
    "salary": 53758
  },
  {
    "name": "robert harris",
    "position": "emergency operations&info specialist",
    "salary": 53758
  },
  {
    "name": "ebony blanks",
    "position": "arts program coordinator",
    "salary": 53758
  },
  {
    "name": "emmanuel fields",
    "position": "budget analyst",
    "salary": 53758
  },
  {
    "name": "shawn adams",
    "position": "information technology specialist",
    "salary": 53758
  },
  {
    "name": "james snyder",
    "position": "lieutenant",
    "salary": 103189
  },
  {
    "name": "juan aliaga",
    "position": "information technology specialist",
    "salary": 53758
  },
  {
    "name": "faith anderson",
    "position": "operations specialist",
    "salary": 53758
  },
  {
    "name": "peter wachira",
    "position": "information technology specialist",
    "salary": 53758
  },
  {
    "name": "candace walls",
    "position": "information technology specialist",
    "salary": 53758
  },
  {
    "name": "omar awan",
    "position": "staff assistant",
    "salary": 53758
  },
  {
    "name": "daniale lawrence",
    "position": "staff assistant",
    "salary": 53758
  },
  {
    "name": "phyllis cureton",
    "position": "chaplain",
    "salary": 53758
  },
  {
    "name": "david potter",
    "position": "paralegal specialist",
    "salary": 53758
  },
  {
    "name": "jack chapman",
    "position": "forester (urban)",
    "salary": 53758
  },
  {
    "name": "arlin budoo",
    "position": "support services specialist",
    "salary": 53758
  },
  {
    "name": "robert dewitt",
    "position": "lieutenant",
    "salary": 103189
  },
  {
    "name": "sharon newsome",
    "position": "program coordinator",
    "salary": 53758
  },
  {
    "name": "sarah vicente",
    "position": "health education specialist",
    "salary": 53758
  },
  {
    "name": "sombo pujeh",
    "position": "sexual health education specialist",
    "salary": 53758
  },
  {
    "name": "melanie fleming",
    "position": "program specialist",
    "salary": 53758
  },
  {
    "name": "monica freeman",
    "position": "staff assistant",
    "salary": 53758
  },
  {
    "name": "tia mercer",
    "position": "program support assistant",
    "salary": 53758
  },
  {
    "name": "candice hunter",
    "position": "management analyst",
    "salary": 53758
  },
  {
    "name": "christopher quay",
    "position": "writer editor",
    "salary": 53758
  },
  {
    "name": "linda bussey",
    "position": "legal admnistrative specialist",
    "salary": 53758
  },
  {
    "name": "frankie lightfoot",
    "position": "staff assistant",
    "salary": 53758
  },
  {
    "name": "kenneth ellerbe",
    "position": "fire chief",
    "salary": 187302
  },
  {
    "name": "wilhelmina reuben cooke",
    "position": "professor",
    "salary": 152000
  },
  {
    "name": "timothy jones",
    "position": "lieutenant",
    "salary": 103189
  },
  {
    "name": "esther harris",
    "position": "support services specialist",
    "salary": 53758
  },
  {
    "name": "shawn miller",
    "position": "lead traffic control officer",
    "salary": 53758
  },
  {
    "name": "melony pree",
    "position": "staff assistant",
    "salary": 53758
  },
  {
    "name": "brian doherty",
    "position": "economist",
    "salary": 53758
  },
  {
    "name": "deborah crayton",
    "position": "property management specialist",
    "salary": 53758
  },
  {
    "name": "scott wakefield",
    "position": "mental health specialist",
    "salary": 53758
  },
  {
    "name": "antoin green",
    "position": "permits officer",
    "salary": 53758
  },
  {
    "name": "ronald sinclair",
    "position": "youth development representati",
    "salary": 53746
  },
  {
    "name": "cecil dubois",
    "position": "correctional officer",
    "salary": 53746
  },
  {
    "name": "christopher young",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "lewis kefauver",
    "position": "lieutenant",
    "salary": 103189
  },
  {
    "name": "marjorie clark",
    "position": "youth development representati",
    "salary": 53746
  },
  {
    "name": "george jordan",
    "position": "correctional officer",
    "salary": 53746
  },
  {
    "name": "samuel forrest",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "selena barnes",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "james harrison",
    "position": "correctional officer",
    "salary": 53746
  },
  {
    "name": "nicole robinson",
    "position": "youth development representati",
    "salary": 53746
  },
  {
    "name": "james miles",
    "position": "youth development representati",
    "salary": 53746
  },
  {
    "name": "franklin sharpe",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "john williams",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "kevin green",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "kevin stuart",
    "position": "lieutenant",
    "salary": 103189
  },
  {
    "name": "leroy bailey",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "carmen hackett",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "gregory magnanelli",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "edward washington",
    "position": "lead protective svcs officer",
    "salary": 53746
  },
  {
    "name": "terrie matthews",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "anthony miller",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "jonathan long",
    "position": "special police officer",
    "salary": 53746
  },
  {
    "name": "charles cloude",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "james bryant",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "debra clinkscales",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "jerry smiley",
    "position": "workers compensation recipient",
    "salary": 103116
  },
  {
    "name": "michael kelley",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "edward mclaughlin",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "annette rosa",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "vance pitts",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "chasity edmundson",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "blake white",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "raymond duarte",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "nathan nwosu",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "edward jenkins",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "gerald bethea",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "richard rothschild",
    "position": "attorney advisor",
    "salary": 103075
  },
  {
    "name": "yvette reid",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "edward morgan",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "leila harris",
    "position": "emergency medical tech",
    "salary": 53746
  },
  {
    "name": "michael harris",
    "position": "office manager",
    "salary": 53743
  },
  {
    "name": "tiffany hagwood",
    "position": "assistant registrar",
    "salary": 53743
  },
  {
    "name": "necka lancaster",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "clinton silvey",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "jesse langford",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "rebecca proctor",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "kiel tilley",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "david jackson",
    "position": "program manager",
    "salary": 103000
  },
  {
    "name": "justin harkins",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "tracee chamberlaine",
    "position": "officer",
    "salary": 53707
  },
  {
    "name": "patricia fair",
    "position": "workers compensation recipient",
    "salary": 53703
  },
  {
    "name": "william woodland",
    "position": "workers compensation recipient",
    "salary": 53700
  },
  {
    "name": "sarah guiheen",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "lauren lipton",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "lindsay little",
    "position": "counselor",
    "salary": 53563
  },
  {
    "name": "brandi hopkins",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "eric porter",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "alexis harris",
    "position": "social worker",
    "salary": 53563
  },
  {
    "name": "laura wagman",
    "position": "management analysis officer",
    "salary": 103000
  },
  {
    "name": "mafopefoluwa alao",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "anne ledford",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "timothy patterson",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "kendra horton",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "ashley prickett",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "johann lee",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "matthew kennedy",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "lindsay mann",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "june reed",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "emily prater",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "christian klossner",
    "position": "deputy director",
    "salary": 103000
  },
  {
    "name": "daniel hayden",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "max mikulec",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "rebecca massingill",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "jolene mathias",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "alicia hunter",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "holly flickeringer",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "teresa broadnax",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "aria kirkland-harris",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "samuel rigby",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "caroline kilbourn",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "ayris scales",
    "position": "assistant dir for arts & humanities",
    "salary": 103000
  },
  {
    "name": "morgan plummer",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "alexander laser-robinson",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "megan mcknight",
    "position": "librarian",
    "salary": 53563
  },
  {
    "name": "crystal hiatt",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "george gray",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "taylor lebovich",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "karen paulwell",
    "position": "counselor",
    "salary": 53563
  },
  {
    "name": "kathleen hamann",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "jane hartman",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "katherine mitchell",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "loren ganoe",
    "position": "chief of staff",
    "salary": 103000
  },
  {
    "name": "ligaya jackson",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "darren lopez",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "sarah mengers",
    "position": "librarian",
    "salary": 53563
  },
  {
    "name": "thanh nguyen",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "kelly riling",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "megan sullivan",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "gina corneille",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "amber chavers",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "sean flannery",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "vonda ward",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "thomas mack",
    "position": "professor",
    "salary": 152000
  },
  {
    "name": "matthew cary",
    "position": "director, veterans affairs",
    "salary": 103000
  },
  {
    "name": "yanitza tavarez",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "alesandra sandin",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "tammy wischnack",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "janelle sands",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "lena barker",
    "position": "librarian",
    "salary": 53563
  },
  {
    "name": "tiffany smith",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "allen travitz",
    "position": "literacy coach",
    "salary": 53563
  },
  {
    "name": "shelby sears",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "elma shaw",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "nathaniel rogers",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "jama abdi",
    "position": "gen engineer",
    "salary": 102985
  },
  {
    "name": "thomas schutt",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "nora schultz zabst",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "jonathan weiner",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "alysia scofield",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "meredith wachs",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "robyn alston",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "heather zelinsky",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "ernest allen",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "mathurin emessiene",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "stephanie fletcher",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "wanda flowers",
    "position": "counselor",
    "salary": 102965
  },
  {
    "name": "leon smith-harrison",
    "position": "librarian",
    "salary": 53563
  },
  {
    "name": "sarah coddington",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "kristen armstrong",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "marianela enriquez",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "amber campbell",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "ramona butler",
    "position": "social worker",
    "salary": 53563
  },
  {
    "name": "jeremy crouthamel",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "erin estes",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "clare berke",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "lauren barros",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "sandra baker",
    "position": "counselor",
    "salary": 102965
  },
  {
    "name": "megan chatalian",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "mayra canizales",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "maxine elbert",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "kimberly chambers",
    "position": "psychologist,school",
    "salary": 53563
  },
  {
    "name": "tiffany dupree",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "tameka edwards",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "nicole cummings",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "marie frigolette",
    "position": "teacher",
    "salary": 53563
  },
  {
    "name": "joyce greene",
    "position": "executive assistant",
    "salary": 53534
  },
  {
    "name": "pamela ferebee",
    "position": "executive assistant (eg)",
    "salary": 53529
  },
  {
    "name": "marcia roper",
    "position": "counselor",
    "salary": 102965
  },
  {
    "name": "loretta payne",
    "position": "budget analyst",
    "salary": 53529
  },
  {
    "name": "stephon hopkins",
    "position": "facilities coordinator",
    "salary": 53529
  },
  {
    "name": "robert cherry",
    "position": "recreation & fac manager supv",
    "salary": 53521
  },
  {
    "name": "jaime brown",
    "position": "extension agent i",
    "salary": 53521
  },
  {
    "name": "shadonna jackson",
    "position": "youth development representati",
    "salary": 53500
  },
  {
    "name": "andre phillips",
    "position": "youth development representati",
    "salary": 53500
  },
  {
    "name": "dayo awosika",
    "position": "youth development representati",
    "salary": 53500
  },
  {
    "name": "trinh dang",
    "position": "electronics technician",
    "salary": 53373
  },
  {
    "name": "george smith",
    "position": "protective svcs ofr",
    "salary": 53367
  },
  {
    "name": "ada arrington",
    "position": "legal assistant",
    "salary": 53367
  },
  {
    "name": "donna edwards",
    "position": "counselor",
    "salary": 102965
  },
  {
    "name": "erica bright",
    "position": "support services specialist",
    "salary": 53367
  },
  {
    "name": "jennifer bertelsen",
    "position": "photographer forensic",
    "salary": 53367
  },
  {
    "name": "daniel mallam",
    "position": "environmental specialist",
    "salary": 53367
  },
  {
    "name": "andre withrow",
    "position": "accounts payable tech ii",
    "salary": 53356
  },
  {
    "name": "antonio thompson",
    "position": "contact rep",
    "salary": 53356
  },
  {
    "name": "patricia jefferson",
    "position": "cashier",
    "salary": 53356
  },
  {
    "name": "gloria chaney",
    "position": "unclaimed property tech",
    "salary": 53356
  },
  {
    "name": "ralita poteat",
    "position": "cashier supervisor",
    "salary": 53356
  },
  {
    "name": "rukman niyangoda",
    "position": "assistant professor",
    "salary": 53334
  },
  {
    "name": "alicia weber",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "mary stinson",
    "position": "principal",
    "salary": 102859
  },
  {
    "name": "brian taylor",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "christian tobe",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "daryl marine",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "richard rice",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "tara tindall",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "anh le",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "victor stevenson",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "perry morgan",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "jonathan nelson",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "samaria robinson",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "patricia pride",
    "position": "principal",
    "salary": 102859
  },
  {
    "name": "aminatta sesay",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "mark mcgrail",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "michael wendt",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "william lee",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "stephen miller",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "nathan miller",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "stephen senatore",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "justin sand",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "matthew vorndran",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "florence spain",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "clarence humes",
    "position": "principal",
    "salary": 102859
  },
  {
    "name": "august gardner",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "calvin johnson",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "robert akuoko",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "ronald bridges",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "derek dude",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "terrance eberhardt",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "gregory hubyk",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "zachary blier",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "daniel harvey",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "george donigian",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "wannetta barber",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "monica crichlow",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "eric kennedy",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "caleb bacon",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "tim camilli",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "stuart jewell",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "christopher brown",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "joseph devlin",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "jennifer gelsomino",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "david kiley",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "jason henry",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "angell jacobs",
    "position": "chief of staff",
    "salary": 151833
  },
  {
    "name": "adrianne day",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "daniel gray",
    "position": "officer",
    "salary": 53300
  },
  {
    "name": "john robinson",
    "position": "workers compensation recipient",
    "salary": 53262
  },
  {
    "name": "michael sellitto",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew scott",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "reginald may",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher floyd",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "gordon goderre",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "joshua mcclellan",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "derrell owens",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher dufresne",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "hillary hoffman-peak",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "john ford",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "patrick moore",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael richardson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "joel dull",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "martin mcmahon",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "tikeeia mason",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "karl schickler",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "brian page",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "troy schenemann",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "erik wiklund",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "tiffany cox",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "laurie parrish",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "william meckley",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "clemente mcknight",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john sgrignoli",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "bryan sims",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "demarco mendes",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "harold gladden",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "justin palmer",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "william shepard",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "joshua lord",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kerslyn featherstone",
    "position": "trial attorney",
    "salary": 102810
  },
  {
    "name": "william rector",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "alton fleming",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "keyon lomax",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jason lusby",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew perri",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "phillip doughty",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "khalil minor",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "alessandra hammill",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "ian gray",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "johnie griffin",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "nana bailey-thomas",
    "position": "trial attorney",
    "salary": 102810
  },
  {
    "name": "timothy sattler",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "krystle scipio",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "timothy moore",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher pinto",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael lewis",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "amanda patterson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "robert wilson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jason lerch",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael desimone",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "raymond edwards",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "eugene irvin",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "jeffrey mathias",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew owen",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew mcintyre",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jared mckinney",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john o'neil",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "david dean",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "andres gomez",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "arthur lawson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kenneth williams",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "joshua phillips",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "anndreeze williams",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "dermain gibson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john landi",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "james fitzgerald",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "robert roberts",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "tekola pettis",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "gregory kiatta",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "david smith",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "patrick kinard",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shaun weimer",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "cyprian lee",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jerusa wilson",
    "position": "trial attorney",
    "salary": 102810
  },
  {
    "name": "brian moose",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "andrew slonaker",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "thrifine salmon",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "alan denmark",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "rian welch",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew yager",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "clarence zieglar",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "paul williams",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shawnte williams",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher rutter",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "lucy pittman",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "sean knigge",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shalonda smith",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "marcus pickett",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew kueppers",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "sean wilson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "delmar freeman",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john fitzgerald",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "frederick gordon",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "davin ernsberger",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael moton - el",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "carla williams",
    "position": "attorney advisor",
    "salary": 102810
  },
  {
    "name": "stephen faulkner",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher finelli",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "anthony pumilia",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "vickter matthews",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "donald morrell",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "garrett murphy",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "alexander fitzgerald",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "trevor feist",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "daniel kloss",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "robert myers",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "ryan shugarman",
    "position": "medical officer (psychiatry)",
    "salary": 151422
  },
  {
    "name": "corliss adams",
    "position": "trial attorney",
    "salary": 102810
  },
  {
    "name": "benjamin nalborczyk",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "sean felder",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kenneth gaetano",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "ernie firkin",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "nickolas watson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew fuertes",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kevin belcher",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "cooksey hunter",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher anderson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "enrique barnes",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "cecily beall",
    "position": "environ protection specialist",
    "salary": 102708
  },
  {
    "name": "marta amaya",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "reginal taylor",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "james hughes",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jesse bolton",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christian hilliard",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "donovan boozer",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "justin ajose",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shantielle thomas",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "ryan wagner",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "maiesha artis",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "gabriel robinson",
    "position": "integrity officer",
    "salary": 102708
  },
  {
    "name": "nicholas bedsaul",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "hasan carroll",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shantel bennett",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jamien carroll",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john thompson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "robert hearne",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "scott blevins",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "derrick hines",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "courtney barnes",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "david berry",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john simmons",
    "position": "business services administrato",
    "salary": 102708
  },
  {
    "name": "joshua bauer",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jason anthony",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shanetra brown",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "brent louryk",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "oleg pelekhaty",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "christopher wipprecht",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "richard cunningham",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "ryan kephart",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john curry",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael steinhardt",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "shelley elliott",
    "position": "criminal invest",
    "salary": 102694
  },
  {
    "name": "joey keller",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "james bunn",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "clint harris",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "brian woodburn",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "daniel clark",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "donald steele",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "maurice bolding",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "rodney bunn",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kristina harris",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "william hess",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "donald lamar",
    "position": "support services specialist",
    "salary": 102694
  },
  {
    "name": "patrick washington",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kristina crowley",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "daniel gerdy",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "rocco baldino",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "derek hopkins",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "travis horne",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "nathan hatcher",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "joseph kelly",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "timothy kelly",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "patrick swenson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jaininne edwards",
    "position": "pension benefits officer",
    "salary": 102690
  },
  {
    "name": "sharlontaee harris",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael ader",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "patrick adams",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "idaryon tatum",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "david hoagland",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "steven tredenick",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "carlos isley",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "daniel lovato",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "stephen acton",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "douglas donnelly",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "daniel muhammad",
    "position": "fiscal analyst",
    "salary": 102690
  },
  {
    "name": "kevin szugye",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael abell",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael adams",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jarratt harvell",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "mathew bowles",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "nicholas garrott",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "stephon hunter",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael huskins",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "benita bowman",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "robert ward",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "gloria vines",
    "position": "banking services officer",
    "salary": 102690
  },
  {
    "name": "james turner",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kenton rambo",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "raymond brown",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "justin lenyk",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "charles taylor",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "marcus trotter",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jeremiah voigt",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew caton",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "jason vogt",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "bolatito ajose",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "abdinasir mohamud",
    "position": "financial manager",
    "salary": 102690
  },
  {
    "name": "kenneth baylor",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "mark winkler",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "matthew grace",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "marco troiano",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "morris suders",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "chandell brewster",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "andrew hilbert",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "bryan clement",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "norman brooks",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "deonta taylor",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "lawrence dubester",
    "position": "medical officer (psychiatry)",
    "salary": 151422
  },
  {
    "name": "jesse dolojan",
    "position": "financial database analyst",
    "salary": 102690
  },
  {
    "name": "aaron johnson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "graham sullivan",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "michael brooke",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "john brooke",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "dorian coates",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "whitney ward",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "ashley johnson",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "dennis brady",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "kathleen broderick",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "richard brady",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "david wilson",
    "position": "auditor (tax)",
    "salary": 102690
  },
  {
    "name": "allen cohey",
    "position": "firefighter emt",
    "salary": 53162
  },
  {
    "name": "george wooten",
    "position": "roadway maintenance supervisor",
    "salary": 53160
  },
  {
    "name": "tritty ross",
    "position": "roadway maintenance supervisor",
    "salary": 53160
  },
  {
    "name": "benjamin butler",
    "position": "legal instruments examiner",
    "salary": 53142
  },
  {
    "name": "alita humphries",
    "position": "telecommunications equip opera",
    "salary": 53142
  },
  {
    "name": "renee watson",
    "position": "telecommunications equip opera",
    "salary": 53142
  },
  {
    "name": "crystal caldwell",
    "position": "telecommunications equip opera",
    "salary": 53142
  },
  {
    "name": "aladegoke akinsola",
    "position": "telecommunications equip opera",
    "salary": 53142
  },
  {
    "name": "antonia henriquez",
    "position": "telecomm equip oper bilingual",
    "salary": 53142
  },
  {
    "name": "gwendolyn holden",
    "position": "legal instruments examiner",
    "salary": 53142
  },
  {
    "name": "robert johnson",
    "position": "financial systems analyst",
    "salary": 102690
  },
  {
    "name": "steven madkins",
    "position": "assistant professor",
    "salary": 53117
  },
  {
    "name": "siyami takha",
    "position": "nurse",
    "salary": 53111
  },
  {
    "name": "chris ugboke",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "annette herbert",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "janet davis",
    "position": "customer service representative",
    "salary": 53048
  },
  {
    "name": "muhammad alvi",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "gary proctor",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "jerome young",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "john champ",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "emma summers",
    "position": "forensic psych tech",
    "salary": 53048
  },
  {
    "name": "marsha napper",
    "position": "auditor (tax)",
    "salary": 102690
  },
  {
    "name": "samuel akingbade",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "harold skinner",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "innocent opara",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "carolyn crockett",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "mary gates",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "anthony gardner",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "joann palmer",
    "position": "eligibility technician",
    "salary": 53048
  },
  {
    "name": "harold mcknight",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "anzia jones",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "roxanne froneberger",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "joshua agbebakun",
    "position": "budget administration analyst",
    "salary": 102690
  },
  {
    "name": "charlene parker",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "julia simpkins",
    "position": "community serv program assistant (typi",
    "salary": 53048
  },
  {
    "name": "john clemons",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "carlean lucas",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "nellie ford",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "melvin anderson",
    "position": "forensic psych tech",
    "salary": 53048
  },
  {
    "name": "gwendolyn combs",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "irene woodruff",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "chukumeka mpi",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "rosalind robinson thompson",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "yatin bhatt",
    "position": "accountant (senior advisor for",
    "salary": 102690
  },
  {
    "name": "tyrone price",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "donnie roach",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "fahim hakim",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "john mayo",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "pedro salazar",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "ruth hawkins",
    "position": "behavioral support technician",
    "salary": 53048
  },
  {
    "name": "medina brody",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "celestine covert",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "dianna stanfield",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "durwin plummer",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "tita tengen",
    "position": "manager, financial reporting",
    "salary": 102690
  },
  {
    "name": "barbara skinner",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "curtis thomas",
    "position": "motor vehicle inspector",
    "salary": 53048
  },
  {
    "name": "l welch",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "taslim amatus hakim",
    "position": "records management technician",
    "salary": 53048
  },
  {
    "name": "wanda jenkins",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "cynthia brown",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "hazel scott",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "tonya kamara",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "deborah farley",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "anthony mcmillian",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "william nelson",
    "position": "appraiser",
    "salary": 102690
  },
  {
    "name": "byron miller",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "mary horne",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "name": "mcarthur myers",
    "position": "mental health counselor",
    "salary": 53048
  },
  {
    "name": "kathy massey",
    "position": "program assistant",
    "salary": 53048
  },
  {
    "name": "shavon mccracken",
    "position": "customer service representative",
    "salary": 53048
  },
  {
    "name": "barren tillman",
    "position": "recovery assistant",
    "salary": 53048
  },
  {
    "salary": 53048