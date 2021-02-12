// part 1 : loop even # from 1000 to 0 
for(let i = 1000; i >= 0; i -=2){
    console.log(i);
}

// part 2: loop from 0 to 10000 (no log)

for( let i = 0; i <= 10000; i++){
    if(i === 2500){
        alert("A quarter of the way there!");
    }else if(i === 5000){
        alert("Halfway there!");
    }else if(i === 10000){
        alert("The loop is done!");
    }
}

// part 3: My Top 5 Favorite TV Shows

const favoriteShow = [0,"Wandavison", "The Mandalorian", "Drake and Josh" , "Thats So Raven", "ICarly"];

for(let i = 1; i < favoriteShow.length; i++) {
    console.log("My #" + [i] +" favorite tv show is " + favoriteShow[i]);
}