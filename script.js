//counter
    let counter_flower = 1;
    let counter_flower_max = 5;
    let counter_stem = 1;
    let counter_stem_max = 5;
    let counter_decor = 1;
    let counter_decor_max = 3;

function change_img(id, counter, max, direction){
    
    if(direction == "inc"){
        counter = increase_counter(counter, max);
    } 
    else if(direction == "dec"){
        counter = decrease_counter(counter, max);
    }   
    document.getElementById(id).src = "img/" + id + "/" + counter + ".PNG";
}

function decrease_counter(counter, max){
    if(counter == 1){
        return max;
    }
    else{
        return counter - 1;
    }
}
function increase_counter(counter, max){
    if(counter == max){
        return 1;
    }
    else{
        return counter + 1;
    }
}
butto
console.log("test");