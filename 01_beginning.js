const num = (a = 0) => {
    let index = 1;
    for (index = 1; index <= a; index++){
        switch(index){
            case 5: 
                console.log("пять ")
                break;
            case 13: 
                console.log("тринадцать ") 
                break;
            case 22: 
                console.log("двадцать два ")
                break;
            case 35: 
                console.log("тридцать пять ")
                break;
            case 98: 
                console.log("девяносто восемь ")
                break;
            default: 
                console.log(index) 
        }
    }
}

console.log(num(100))