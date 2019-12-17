const afbeeldingen = [
    /* 1 */ "https://cdn.pixabay.com/photo/2013/07/13/13/24/snow-160956__340.png", 
    /* 2 */ "https://cdn.pixabay.com/photo/2019/12/10/19/39/new-years-eve-4686668__340.jpg",
    /* 3 */ "https://cdn.pixabay.com/photo/2017/11/05/08/38/christmas-2919725__340.jpg",
    /* 4 */ "https://cdn.pixabay.com/photo/2016/12/06/18/49/christmas-1887306__340.png",
    /* 5 */ "https://cdn.pixabay.com/photo/2017/10/26/19/45/christmas-2892235__340.png", 
    /* 6 */ "https://cdn.pixabay.com/photo/2016/12/06/03/09/christmas-1885470__340.png", 
    /* 7 */ "https://cdn.pixabay.com/photo/2019/11/25/09/02/baking-4651363__340.jpg",
    /* 8 */ "https://cdn.pixabay.com/photo/2010/12/13/10/34/santa-claus-2918__340.jpg",
    /* 9 */ "https://cdn.pixabay.com/photo/2015/05/31/11/11/christmas-791110__340.jpg",
    /* 10 */ "https://www.grandcafe-eemland.nl/wp-content/uploads/2018/10/kerstbijEemland.jpg",
];

for(i=0;i<afbeeldingen.length;i++){
    if(afbeeldingen[i] === `https://cdn.pixabay.com/photo/2013/07/13/13/24/snow-160956__340.png`){
        document.write(`<img src="${afbeeldingen[i]}" id="verticalSpan" width="100%" heigth="100%"`);
    }else if(afbeeldingen[i] === `https://cdn.pixabay.com/photo/2016/12/06/03/09/christmas-1885470__340.png`) {
    }else{
        document.write(`<img src="${afbeeldingen[i]}">`);
    }
}