/*Scouts we is a training program for all scouts under the xhin training program, here you can sign in as a student, trainer and also other positions that the program will bring you forth... Thanks for choosing XHIN.

operating system: javascript
user interface : html and react
storage : local storage and session storage
date started : 2024
*/
var scoutWe = "\n\tScouts we is a training program for all scouts under the\t.... xhin program\t, \nhere you can sign in as a student, trainer and also other positions that the program will bring you forth... \nThanks for choosing XHIN";
console.log("welcome "+scoutWe);



class Account { 
    constructor (name, password) {
    this._userName = name;
    this._password = password;
    this.accountId = window.crypto.randomUUID();
    this.titles = [];
    this.levelsAttained =[];
    this.groupsJoined =[];
    this.logedin = false;
    this.history =[];
    this.inbox = []
    
    }

    changeUserName(name) {
        this._userName = name;
    }
    
    changePassword(p){
        this._password = p;
    }

    
}

//testing
var scout1 = new Account("xhin", "xhinp");
scout1.changeUserName("water") ;
console.log("wooo",scout1._userName ,"\n",scout1  );

//group classes
class Group  {
    constructor(groupName, president){
        
        this.president = president ;
        this.groupName = groupName;
        this.groupMembers = [];
        this.groupSize = this.groupMembers.length ;
    }
}

//accounts class
class Accounts {
    constructor(type){
        this.type = type;
        this.accounts = { };
        this.groups = { };
    }
    addAccount(account){
        this.accounts[account.accountId] = account ;
    }
    deleteAccount(account){
        this.accounts[account.id] = null;
    }
    
    
    addGroup(account){
        this.groups[account.name] = account ;
    }
    deleteGroup(group, person){
        if(person == group.president)
        { this.groups[groupName] = null; return "group deleted"; }
        else return "Group can't be deleted" ;
    }
    
    
}




 
 
 
async function logIn(userName,password){
   await scoutWeData;
  //sd1 is the scoutWe Data and scoutWeData is a promie@
         if (sd1){
    console.log([],"loging into... ",userName ," using data of sd1..",sd1 );
    let allAccounts = sd1.accounts /*scoutWeData.then(d=>d,e=> console.log("error",e))*/;

    let accounts = Object.keys(allAccounts);
    if (accounts){
    let wantedAccounts = accounts.filter(a => allAccounts[a]._userName == userName
        );
     let t, target = wantedAccounts.forEach( acc => { if (allAccounts[acc]._password == password){ t = acc; return acc ;  } } );
    if (t){
        sessionStorage.setItem("scout", allAccounts[t])
        console.log("entering into the account of ", userName , " and its data is", allAccounts[t] );
        
        
    } else{
        
        console.log("wrong userName/ password")
    }
     
    }
    else{
        
        console.log("no accounts created yet")
    }
  }  else{
    console.log("No accounts in storage",allAccounts);
}

    
}

var scoutWeData, sd1 ;
//get dat from storage
async function getProgramAccounts () {
    let data = await localStorage.getItem("allAccounts");
        let acc =  JSON.parse(data);
        return acc ;
}

//storing data in localStorage
if (localStorage.getItem("allAccounts") == null){
console.log("storing new data to locaStorage");
//initiating our program
var allScoutAccounts = new Accounts("all");
allScoutAccounts.addAccount(scout1);

    let jsonData = JSON.stringify(allScoutAccounts);

console.log("this comunity has, ",allScoutAccounts,"  this is type of a " );

localStorage.setItem("allAccounts",jsonData);

    
}
else {
  scoutWeData  = getProgramAccounts();
        scoutWeData.then(d=>{ console.log("success",d)
            sd1 = d;
        },e=> console.log("error is here",e));
    console.log("focus \tprogram already installed ",scoutWeData ); 
logIn("water","xhinp");
    
}


function signUp(a, b){
    
}