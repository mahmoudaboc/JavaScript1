//1+2
array = ['The_Ministry_of_Utmost_Happiness', 'Killers_of_the_Flower_Moon', 'Beartown', 'Exit_West', 'Priestdaddy', 'You_Dont_Have_to_Say_You_Love_Me' , 'Lincoln_in_the_Bardo', 'The_Impossible_Fortress', 'Hunger', 'Homo_Deus'];

3

let x = document.getElementById('demo');

document.body.appendChild(x);

let ul = document.createElement('ul');

x.appendChild(ul);
/*
for(let i = 0; i<array.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + array[i];
}

*/

let maintext = document.createElement('h1');
x.appendChild(maintext);
maintext.innerHTML = "The 10 best books of 2017 so far, according to Amazon";
maintext.style.color = "red";
maintext.style.backgroundColor = "transparent";
maintext.style.border = "transparent";
maintext.style.textShadow = "2px 2px black";



//4
let newbooks = {
    book1:{
        bookname: 'The Ministry of Utmost Happiness',
        author: 'Arundhati Roy',
        language: 'English',
    },
    book2:{
        bookname: 'Killers of the Flower Moon',
        author: 'David Grann',
        language: 'English',
        image: './images/pic1.jpg'
    },
    book3:{
        bookname: 'Beartown',
        author: 'Fredrik Backman',
        language: 'English',
    },
    book4:{
        bookname: 'Exit West',
        author: 'Mohsin Hamid',
        language: 'English',
    },
    book5:{
        bookname: 'Priestdaddy',
        author: 'Patricia Lockwood',
        language: 'English',
    },
    book6:{
        bookname: 'You Dont Have to Say You Love Me',
        author: 'Sherman Alexie',
        language: 'English',
    },
    book7:{
        bookname: 'Lincoln in the Bardo',
        author: 'George Saunders',
        language: 'English',
    },
    book8:{
        bookname: 'The Impossible Fortress',
        author: 'Jason Rekulak',
        language: 'English',
    },
    book9:{
        bookname: 'Hunger',
        author: 'Roxane Gay',
        language: 'English',
    },
    book10:{
        bookname: 'Homo Deus',
        author: 'Yuval Noah Harari',
        language: 'English',
    }
}

//5&6


function books(){ 
    let mainList = document.createElement('ul');
    document.body.appendChild(mainList);

    for(j in newbooks){
        let item = document.createElement('li');
        mainList.appendChild(item);
        item.setAttribute("id", j);
        

        let h1 = document.createElement('h1');
        let bookname = document.createTextNode(newbooks[j].bookname);
        h1.appendChild(bookname);
        item.appendChild(h1);

        let h2 = document.createElement('h2');
        let authorname = document.createTextNode(newbooks[j].author);
        h2.appendChild(authorname);
        item.appendChild(h2);

        let p = document.createElement('p');
        let languageText = document.createTextNode(newbooks[j].language);
        p.appendChild(languageText);
        item.appendChild(p);
   
    }
}
books();


let bookCovers = {
    book1:'./images/pic1.jpg', 
    book2:'./images/pic2.jpg',
    book3: './images/pic3.jpg',
    book4: './images/pic4.jpg',
    book5: './images/pic5.jpg',
    book6: './images/pic6.jpg',
    book7: './images/pic7.jpg',
    book8: './images/pic8.jpg',
    book9: './images/pic9.jpg',
    book10: './images/pic10.jpg'
};

let imgKeys = Object.keys(bookCovers)

function myfunction () {
    for (j of imgKeys) {
        let image = document.createElement('img');
        
        document.getElementById(j).appendChild(image);
        image.setAttribute("src", bookCovers[j]);
        image.setAttribute("width", "250px");
        image.setAttribute("height", "300px");
        image.setAttribute("alt", "books");
        
        
    }
}
myfunction();
