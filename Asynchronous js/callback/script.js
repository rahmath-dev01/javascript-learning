
//--------Callback Hell (Nested callbacks)--------
// function abcd(fn){
//   fn(function(fn3){
//     fn3(function(fn5){
//       fn5(function(fn7){
//         fn7(function(fn9){
//           fn9(function(){
//             console.log("Finally Nested Callback Completed")
//           })
//         })
//       });
//     })
//   })
// }
// abcd(function(fn2){
//   fn2(function(fn4){
//     fn4(function(fn6){
//       fn6(function(fn8){
//         fn8(function(fn10){
//           fn10();
//         })
//       })
//     })
//   })
// });


// -------practice question 1--------
// function afterdelay (time,cb){
//  setTimeout(cb,time)
// }
// afterdelay(2000, function(){
//   console.log("Callback Executed")
// })

//----------practice question 2 -------------
// function getUses( username,cb){
// setTimeout(() => {
//   cb({ id:11 ,username : username})
// }, 1000);
// }

// function getUserPost(userID,cb){
//   setTimeout(() => {
//     cb(["img1","img2"])
//   }, 2000);
// }

// getUses("rahmath", function(user){
//   console.log(user.username);

//   getUserPost(user.id,function(posts){
//     console.log(posts)
    
//   });
// });


//------------practice questtion 3 ----------------------

// function loginUser(username,cb){
//   console.log("logging in user.....")
// setTimeout(() => {
//   cb({id: 22 , username: "rahmath"});
// }, 1000);
// }
// function fetchPermissions(id,cb){
//   console.log("fatching permissions....")
//   setTimeout(()=>{
//     cb(["read","write","delete","update"])

//   },2000)
// }
// function loadDashboard(permissions,cb){
//   console.log("Loading deshboard....")
// setTimeout(()=>{
//   cb();
// },3000)
// }

// loginUser("Rahmath",function(userdata){
//   fetchPermissions(userdata.id, function(permissions){
//     loadDashboard(permissions,function(){
//       console.log("Dashboard loaded")
//     })
//   })
// })



// get a user data from the instagram
// 

function userid(username, cb){
  console.log("fetching userid......")
  setTimeout(()=>{
    cb({username:username,id: 1223, age : 22})
  },1000)
}
function getThePost(id,cb){
  console.log("Fetching user posts")
  setTimeout(()=>{
    cb(["img1","img2","img3"]);
  },2000)
}
function hiddenPost(id,cb){
  console.log("Fetchhing user hidden posts")
  setTimeout(()=>{
    cb(["good morning","started my day","having fun"])
  },4000)
}
function hiddenDate(cb){
setTimeout(() => {
  console.log("fetching date")
  cb({ date: "22-05-2026"  })
}, 4000);
}
userid("rahmath",function(data){
  console.log(data)
  getThePost(data.id,function(posts){
    console.log(posts)
    hiddenPost(data.id,function(hiddenpost){
      console.log(hiddenpost)
      hiddenDate( function(date){
        console.log(date)
      })
    })
  })
})
