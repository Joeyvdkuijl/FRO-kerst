const kersturls = ["https://images.unsplash.com/photo-1482517716521-3120e5340ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1480438701224-bd2d52edb029?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80", 
    "https://www.visitoslo.com/globalassets/bilder-oslo/hva-skjer/julemarked-nisse-didrick-stenersen.jpg?preset=Teaser",
    "https://images.unsplash.com/photo-1461092678334-1aa3ab3543ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
    "https://images.unsplash.com/photo-1513505108218-1bd04056178c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
    "https://images.unsplash.com/photo-1479740030693-66ad10f3a7b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1511268011861-691ed210aae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

var parent    = document.getElementById('main');

for (let i = 0; i < kersturls.length; i ++ ) {
    let img = new Image();
    img.src = kersturls[i];
    img.alt = "leuk plaatje";
    img.className = "kerstfoto" + i;
    parent.appendChild(img);
}
