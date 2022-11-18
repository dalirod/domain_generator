

let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];
let dats   = [".com", ".es" ];



for(let pronoun of pronouns){
    for(let adj of adjs){
        for(let noun of nouns){
            for(let dat of dats){
            console.log(pronoun+adj+noun+dat)
        }
    }
}
}



