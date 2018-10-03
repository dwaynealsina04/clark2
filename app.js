var db=firebase.firestore();
var storage = firebase.storage();
var storageRef = storage.ref();
var spaceRef = storageRef.child('storage');
const cafeList3 = document.querySelector('#cafe-list');
const beach = document.querySelector('#cafe-list3');
const estab = document.querySelector('#cafe-list4');
const forest = document.querySelector('#cafe-list5');
const resto = document.querySelector('#cafe-list6');
function renderCafe(doc)
{
    let atag = document.createElement('a');
    let img = document.createElement('img');
    atag.setAttribute('href', doc.data().image);
    atag.setAttribute('data-lightbox', "mygallery");
    atag.setAttribute('title', doc.data().name + " ~ is "+doc.data().feelings +" at " +doc.data().destination + ","+doc.data().place) ;
   
    
     
    img.setAttribute('src', doc.data().image);
    img.setAttribute('width', "200");
 img.setAttribute('height', "200");
    atag.appendChild(img);
    cafeList3.appendChild(atag);
 
}
 
   db.collection('share').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
           
                if(change.type == 'added')
                    {
                        renderCafe(change.doc);
                    }
        
                
    });
});


function renderCafe2(doc)
{
    let atag = document.createElement('a');
    let img = document.createElement('img');
    atag.setAttribute('href', doc.data().image);
    atag.setAttribute('data-lightbox', "mygallery");
    atag.setAttribute('title', doc.data().name + " ~ is "+doc.data().feelings +" at " +doc.data().destination + ","+doc.data().place) ;
   
    
     
    img.setAttribute('src', doc.data().image);
    img.setAttribute('width', "200");
    img.setAttribute('height', "200");
    atag.appendChild(img);
    beach.appendChild(atag);
 
}
 
   db.collection('share').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
           
        if(change.type == 'added' && change.doc.data().category === "Beach and Resorts")
                    {
                        renderCafe2(change.doc);
                    }
        
                
    });
});

function renderCafe3(doc)
{
    let atag = document.createElement('a');
    let img = document.createElement('img');
    atag.setAttribute('href', doc.data().image);
    atag.setAttribute('data-lightbox', "mygallery");
    atag.setAttribute('title', doc.data().name + " ~ is "+doc.data().feelings +" at " +doc.data().destination + ","+doc.data().place) ;
   
    
     
    img.setAttribute('src', doc.data().image);
    img.setAttribute('width', "200");
    img.setAttribute('height', "200");
    atag.appendChild(img);
    estab.appendChild(atag);
 
}
 
   db.collection('share').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
           
        if(change.type == 'added' && change.doc.data().category === "Establishments")
                    {
                        renderCafe3(change.doc);
                    }
        
                
    });
});

function renderCafe4(doc)
{
    let atag = document.createElement('a');
    let img = document.createElement('img');
    atag.setAttribute('href', doc.data().image);
    atag.setAttribute('data-lightbox', "mygallery");
    atag.setAttribute('title', doc.data().name + " ~ is "+doc.data().feelings +" at " +doc.data().destination + ","+doc.data().place) ;
   
    
     
    img.setAttribute('src', doc.data().image);
    img.setAttribute('width', "200");
    img.setAttribute('height', "200");
    atag.appendChild(img);
    forest.appendChild(atag);
 
}
 
   db.collection('share').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
           
        if(change.type == 'added' && change.doc.data().category === "Forest and Mountains")
                    {
                        renderCafe4(change.doc);
                    }
        
                
    });
});



function renderCafe5(doc)
{
    let atag = document.createElement('a');
    let img = document.createElement('img');
    atag.setAttribute('href', doc.data().image);
    atag.setAttribute('data-lightbox', "mygallery");
    atag.setAttribute('title', doc.data().name + " ~ is "+doc.data().feelings +" at " +doc.data().destination + ","+doc.data().place) ;
   
    
     
    img.setAttribute('src', doc.data().image);
    img.setAttribute('width', "200");
    img.setAttribute('height', "200");
    atag.appendChild(img);
    resto.appendChild(atag);
 
}
 
   db.collection('share').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
           
        if(change.type == 'added' && change.doc.data().category === "Restaurants and Bars")
                    {
                        renderCafe5(change.doc);
                    }
        
                
    });
});