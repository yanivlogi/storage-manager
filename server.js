const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Store = require('./models/store')
const Userlogin = require('./models/userlogin')
var moment = require('moment');
const store = require('./models/store')




moment().format(); 
const app = express()



app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')


app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'));

mongoose.connect('mongodb+srv://admin:qwe123@cluster0.4qn2d.mongodb.net/kyosk?retryWrites=true&w=majority')


//-------------------------------------בוצע---מלאי נוכחי----------------------------------------
app.get('/stock',(req,res)=>{
    Store.find().lean().then(docs=>{
        res.render('stock',{docs:docs})
    })              
    .catch(error=>{
        res.status(500).send(error)
    })
})
//------------------------------------בוצע--ניהול מלאי עם ברקוד---------------------------------

app.post('/scanbarcode',(req,res)=>{

    const options = { returnNewDocument: true };
    
    var up= req.body.upc
   
    Store.find({upc:up}).lean().then(docs=>{
       

        Store.findOneAndUpdate({upc:up},{$inc:{amount: -1},options}).then(updatedDocument => {
            if(updatedDocument) {
              console.log(`Successfully updated document: ${updatedDocument}.`)
               
            } else {
              console.log("No document matches the provided query.")
            }
            return updatedDocument
          })
          .catch(err => console.error(`Failed to find and update document: ${err}`))
    })  
    
   

});

//----------------------------------------------הצגה של דף ברקוד------------------------------------------------------

app.get('/scanbarcode',(req,res)=>{

    
        res.render('scanbarcode')

})

  //להוסיף הצגה של מוצר שירד



//-------------------------------------------------הוספה של מוצר למלאי--------------------------------------------------------------------------

app.get('/addtostock',(req,res)=>{
    
       
    Store.find().lean().then(docs=>{
        res.render('addtostock',{docs:docs})
    })              
    .catch(error=>{
        res.status(500).send(error)
    })
})
              
   




app.post('/addtostock',(req,res)=>{




  const options = { returnNewDocument: true };
    var amounts=req.body.amount
    var up= req.body.upc
   
    Store.find({upc:up}).lean().then(docs=>{
       

        Store.findOneAndUpdate({upc:up},{$inc:{amount: amounts},options}).then(updatedDocument => {
            if(updatedDocument) {
              console.log(`Successfully updated document: ${updatedDocument}.`)
               
            } else {
              console.log("No document matches the provided query.")
            }
            return updatedDocument
          })
          .catch(err => console.error(`Failed to find and update document: ${err}`))
    })  




})





//-----------------------------------------------------------------------------------------------------------------------------
app.get('/changemanually',(req,res)=>{
    Store.find().sort({id : 1}).lean().then(docs=>{
        res.render('changemanually',{docs:docs})
    })              
    .catch(error=>{
        res.status(500).send(error)
    })
})



 //--------------------------------------------עדכון מלאי ידני-----------------------------------------------------  
app.post('/changemanually', (req, res) => {

//   var amounts= req.body.amountchange
  
//   Store.find().sort({id : 1}).lean().then(docs=>{

//     docs.forEach(docs2=>{

//       if(docs.amount==null)
//       {
//         Store.updateOne({amount : amounts}).lean().then(docs=>{})
//       }
//       i++
    
//       })


// })    


//---------------------------------------------------------------------------------

var amounts= req.body.amountchange

for (let i = 0; i < amounts.length; i++) {
 
  
Store.find().sort({id : 1}).lean().then(docs=>{
  if(amounts[i]!== null){
    Store.updateMany({amount : amounts[i]})
}

}
)
.catch(error=>{
  res.status(500).send(error)
})

}
})




//-------------------------------------הוספת מוצר חדש--------------------------------------------------------------


app.get('/addnew',(req,res)=>{

    
  res.render('addnew')

})





//-------------------------------------- post <-הוספת מוצר-----------------------------

app.post('/addnew',(req,res)=>{

  var upc1=req.body.upc;
  var category1=req.body.gender;
  var subcategory1=req.body.values;
  var date1=moment().format(); 
  var compval=req.body.values;
  var name1;

  if(compval=='בחר חברה')
  { 
    name1=req.body.other
  }
  else
  {
    name1=req.body.values
  }

  const new_product = new Store({
    
    date: date1,
    upc: upc1,
    name: name1,
    category: category1,
    subcategory:subcategory1 ,
    amount: 0 ,
    
    })
    Store.create(new_product)
        .then(result=>{
            console.log(result);
            
        })
        .catch(error=>{
            res.status(500).send(error)
        })

  

    
  res.render('addnew')

})
//----------------------------------------------------------------------------------------

app.get('/login',(req,res)=>{

    
  res.render('login')

})





app.post('/login',(req,res)=>{

   
    
  var us= req.body.username
  var pa= req.body.password
  
  var checkuser=false;


  Userlogin.find({username: us,password:pa}).lean().then({
  
  
 
  



})
  .catch(error=>{
  res.render('login') 
  })
 

  
 
    



   
})










app.listen(3000,()=>console.log('server is running...'))