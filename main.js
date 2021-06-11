
var family_name=["ANKIT DAS","ARPAN DAS","ANITA DAS","LOVELY DAS","PRIYA DAS","MANOJ KUMAR DAS","ABHIPSA DAS","SAROJ KUMAR DAS"];
console.log(family_name);

var images=["https://i.postimg.cc/25MpbYtg/Whats-App-Image-2021-05-28-at-10-48-29-AM.jpg","https://i.postimg.cc/hvXT6GXp/pp-4.jpg",
            "https://i.postimg.cc/L8LBmhNW/pp-2.jpg","https://i.postimg.cc/j5gyMfSD/pp-3.jpg","https://i.postimg.cc/8CGdcDYz/pp-5.jpg",
             "https://i.postimg.cc/wvTh52gK/pp.jpg","https://i.postimg.cc/bvRx2WXH/pp-6.jpg","https://i.postimg.cc/NfWkhR7T/pp-1.jpg"]
var i=0 ;
          function NEXT()
          {
             i++ ;
              var numbers_of_family_members = 7 
              if (i>numbers_of_family_members)
              {
                  i=0;
              }
              var updated_image= images[i];
              var updated_name= family_name[i];
              document.getElementById("image_member").src=updated_image;
              document.getElementById("members_name").innerHTML =updated_name;
          }
   