const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

const entries1=[];
var arrUsers=[];
var arrProducts=[];
var newUser=[];
var inc = 1;
var prodID = 20;

const Product = [
  {
          id: 7,
          type: "phone",
          website: "https://www.gsmarena.com/apple_iphone_xr-9320.php",
          name: "Apple iPhone XR",
          model: "XR",
          price: 70582.50 ,
          color: [
            "Black", "Red", "Yellow", "Blue", "Coral", "White"
          ],
          rating: "1",
    imagePath: "PROD-7.jpg",
          desc: "6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio) 828 x 1792 pixels, 19.5:9 ratio (~326 ppi density) 64GB 3GB RAM, 128GB 3GB RAM, 256GB 3GB RAM",
      },
  {
          id: 8,
          type: "phone",
          website: "https://www.gsmarena.com/apple_iphone_xr-9320.php",
          name: "Apple iPhone XR",
          model: "XR",
          price: 70582.50 ,
          color: [
            "Black", "Red", "Yellow", "Blue", "Coral", "White"
          ],
          rating: "1",
    imagePath: "PROD-8.jpg",
          desc: "6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio) 828 x 1792 pixels, 19.5:9 ratio (~326 ppi density) 64GB 3GB RAM, 128GB 3GB RAM, 256GB 3GB RAM",
      },
  {
          id: 9,
          type: "phone",
          website: "https://www.gsmarena.com/apple_iphone_7_plus-8065.php",
          name: "Apple iPhone 7 Plus",
          model: "7 Plus",
          price: 59755.53 ,
          color: [
            "Jet Black", "Black", "Silver", "Gold", "Rose Gold", "Red"
          ],
          rating: "1",
    imagePath: "PROD-9.jpg",
          desc: "158.2 x 77.9 x 7.3 mm (6.23 x 3.07 x 0.29 in) 5.5 inches, 83.4 cm2 (~67.7% screen-to-body ratio) 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
      },
  {
          id: 10,
          type: "phone",
          website: "https://www.gsmarena.com/apple_iphone_12_pro_max-10237.php",
          name: "Apple iPhone 12 Pro Max",
          model: "12 Pro Max",
          price: 172378.15 ,
          color: [
            "Silver", "Graphite", "Gold", "Pacific Blue"
          ],
          rating: "1",
    imagePath: "PROD-10.jpg",
          desc: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio), 1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density), 128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
      },
      {
          id: 11,
          type: "watch",
          website: "https://www.gsmarena.com/samsung_galaxy_watch3-10315.php",
          name: "Samsung Galaxy Watch3",
          model: "SM-R850",
          price: 38240.00 ,
          color: [
            "Mystic Bronze", "Mystic Black", "Mystic White"
          ],
          rating: "1",
    imagePath: "PROD-11.jpg",
          desc: "Accelerometer, gyro, heart rate, barometer, Natural language commands and dictation, Samsung Pay.  BATTERY	Type:	Li-Ion 340 mAh, non-removable, Charging	Qi wireless charging",
      },
      {
          id: 12,
          type: "tv",
          website: "https://www.shophive.com/samsung-55q70t-qled-smart-4k-tv-2020",
          name: "Samsung QLED Smart 4K TV (2020)",
          model: "55Q70T",
          price: 172999.00,
          color: [
              "black"
          ],
          rating: "1",
    imagePath: "PROD-12.jpg",
          desc: "Turn blank into beautiful. Ambient Mode: Beautifully integrate your TV's screen to suit your tastes and interior décor with Samsung’s Ambient Mode +. Display art, photos, time and weather or take a picture of the wall and set it on-screen, so your TV seamlessly blends in. Ambient Mode +: performance may vary depending on where the TV is installed including wall designs, patterns or colours. A customised entertainment experience. Intelligent Mode: Samsung's Intelligent Mode recognises its surroundings as well as the program you're watching. It then adapts the picture, sound and volume to give you an incredible entertainment experience. Picture and sound quality of upscaled content will vary depending on quality and resolution of source content.",
      },
      {
        id: 13,
        type: "tv",
        website: "https://www.shophive.com/samsung-55q70t-qled-smart-4k-tv-2020",
        name: "Samsung Crystal UHD 4K Smart TV (2020) With Official Warranty",
        model: "55TU7000",
        price: 114999.00,
        color: [
            "black"
        ],
        rating: "1",
  imagePath: "PROD-13.jpg",
        desc: "Get gaming faster. Game Enhancer: Get into the game faster with Game Enhancer, which optimizes your screen so you have more control with barely noticeable input lag. Experience smooth gaming in its most impressive form without motion blur and judder. Feature availability may vary by game console. Clean up the clutter! Clean cable solution: Samsung Crystal UHD offers a neat solution for keeping all your TV cables tidy, hiding them away right in the stand. This helps you reduce your clutter so you can fully enjoy your TV’s beautiful design. This feature does not apply for 43 inches.",
    },
    {
      id: 14,
      type: "phone",
      website: "https://www.gsmarena.com/samsung_galaxy_a22_5g-10873.php",
      name: "Samsung Galaxy A22 5G",
      model: "A22",
      price: 42916.00,
      color: [
          "Gray", "White", "Mint", "Violet"
      ],
      rating: "1",
  imagePath: "PROD-14.jpg",
      desc: "Dimensions:	167.2 x 76.4 x 9 mm (6.58 x 3.01 x 0.35 in). Size	6.6 inches, 105.2 cm2 (~82.3% screen-to-body ratio). Chipset	MediaTek MT6833 Dimensity 700 5G (7 nm).CPU	Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55). GPU	Mali-G57 MC2. Triple	48 MP, f/1.8, (wide), PDAF. 5 MP, f/2.2, (ultrawide), 1/5.0in, 1.12µm 2 MP, f/2.4, (depth). Features	LED flash, panorama, HDR. Video	1080p@30fps",
  },
  {
    id: 15,
    type: "phone",
    website: "https://www.gsmarena.com/samsung_galaxy_a52-10641.php",
    name: "Samsung Galaxy A52",
    model: "A52",
    price: 26385.00,
    color: [
        "Awesome Black", "Awesome White", "Awesome Violet", "Awesome Blue"
    ],
    rating: "1",
  imagePath: "PROD-15.jpg",
    desc: "Dimensions: 159.9 x 75.1 x 8.4 mm (6.30 x 2.96 x 0.33 in). Size: 6.5 inches, 101.0 cm2 (~84.1% screen-to-body ratio). Chipset: Qualcomm SM7125 Snapdragon 720G (8 nm).CPU: Octa-core (2x2.3 GHz Kryo 465 Gold & 6x1.8 GHz Kryo 465 Silver). GPU: Adreno 618. Features	LED flash, panorama, HDR. Video	4K@30fps, 1080p@30/60fps; gyro-EIS",
  },
  {
    id: 16,
    type: "phone",
    website: "https://www.gsmarena.com/oneplus_nord_n10_5g-10556.php",
    name: "OnePlus Nord N10 5G",
    model: "N10",
    price: 18588.00,
    color: [
        "Midnight Ice"
    ],
    rating: "1",
  imagePath: "PROD-16.jpg",
    desc: "Dimensions: 163 x 74.7 x 9 mm (6.42 x 2.94 x 0.35 in). Size: 6.49 inches, 101.7 cm2 (~83.5% screen-to-body ratio). Chipset: Qualcomm SM6350 Snapdragon 690 5G (8 nm).CPU: Octa-core (2x2.0 GHz Kryo 560 Gold & 6x1.7 GHz Kryo 560 Silver). GPU	Adreno 619L. Features	LED flash, panorama, HDR. Video	4K@30fps, 1080p@30/60fps; gyro-EIS",
  },
  {
    id: 17,
    type: "phone",
    website: "https://www.gsmarena.com/xiaomi_redmi_note_10_5g-10768.php",
    name: "Xiaomi Redmi Note 10 5G",
    model: "M2103K19G",
    price: 31213.00,
    color: [
        "Chrome Silver ", "Graphite Gray", "Nighttime Blue", "Aurora Green"
    ],
    rating: "1",
  imagePath: "PROD-17.jpg",
    desc: "Dimensions: 161.8 x 75.3 x 8.9 mm (6.37 x 2.96 x 0.35 in). Size: 6.5 inches, 102.0 cm2 (~83.7% screen-to-body ratio). Chipset: MediaTek MT6833 Dimensity 700 5G (7 nm). CPU	Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex. Features Dual-LED dual-tone flash, HDR, panorama. Video	1080p@30fps"
  },
  {
    id: 18,
    type: "phone",
    website: "https://www.gsmarena.com/xiaomi_redmi_note_10s-10769.php",
    name: "Xiaomi Redmi Note 10S",
    model: "M2101K7BG",
    price: 34350.00,
    color: [
        "Deep Sea Blue (Ocean Blue)", "Shadow Black (Onyx Gray)", "(Frost White) Pebble White"
    ],
    rating: "1",
  imagePath: "PROD-18.jpg",
    desc: "Dimensions: 160.5 x 74.5 x 8.3 mm (6.32 x 2.93 x 0.33 in). Size: 6.43 inches, 99.8 cm2 (~83.5% screen-to-body ratio). Chipset: Mediatek Helio G95 (12 nm). CPU	Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55). GPU	Mali-G76 MC4. Features LED flash, HDR, panorama. Video	4K@30fps, 1080p@30/60/120fps, 720p@960fps"
  },
  {
    id: 19,
    type: "phone",
    website: "https://www.gsmarena.com/xiaomi_poco_x3_nfc-10415.php",
    name: "Xiaomi Poco X3 NFC",
    model: "M2007J20CG",
    price: 34350.00,
    color: [
        "Cobalt Blue", "Shadow Gray"
    ],
    rating: "1",
  imagePath: "PROD-19.jpg",
    desc: "Dimensions: 165.3 x 76.8 x 9.4 mm (6.51 x 3.02 x 0.37 in). Size: 6.67 inches, 107.4 cm2 (~84.6% screen-to-body ratio). Chipset: Qualcomm SM7150-AC Snapdragon 732G (8 nm). CPU	Octa-core (2x2.3 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver). GPU	Adreno 618. Features Dual-LED flash, HDR, panorama. Video	4K@30fps, 1080p@30/120fps, 720p@960fps; gyro-EIS"
  },
  {
    id: 20,
    type: "tablet",
    website: "https://www.gsmarena.com/samsung_galaxy_tab_a_8_4_(2020)-10483.php",
    name: "Samsung Galaxy Tab A 8.4 (2020)",
    model: "SM-T307U",
    price: 44779.00,
    color: [
        "Mocha"
    ],
    rating: "1",
  imagePath: "PROD-.jpg",
    desc: "Dimensions: 202 x 125.2 x 7.1 mm (7.95 x 4.93 x 0.28 in). Size: 8.4 inches, 204.6 cm2 (~80.9% screen-to-body ratio). OS	Android 10. CPU	Octa-core 1.8 GHz. Features Accelerometer, ANT+. Single	5 MP. Video: nil. SOUND	Loudspeaker	with dual speakers 3.5mm jack"
  }
  ];

// << db setup >>
const db = require("./db");
const dbName = "Project";
const UserCollection = "User";
const ProductCollection = "Product";

function retriveAllUsers(){
  db.retrieveUserData(dbName, UserCollection, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
    
        if (err) throw err;
        arrUsers.push(result);
          // console.log(result);
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});


}



function addUser(User){
  db.add(dbName, UserCollection, User,function(dbCollection) { // successCallback

    dbCollection.find().toArray(function(err, result) {
      
      if (err) throw err;
      
        console.log(result);

  });
  }, function(err) { // failureCallback
    throw (err);
  });
}
function authenticateUser(email,pass){
  
  console.log(arrUsers);
  console.log(arrUsers[0][3]);
  const user = arrUsers[0].find((e) => (email == e.email));
  console.log(user);
    if(user){
      if(user.password == pass){
        return user;
      }else{
          return 0;
      }
    }

}

function addProduct(product){
  db.add(dbName, ProductCollection, product,function(dbCollection) { // successCallback

    dbCollection.find().toArray(function(err, result) {
      
      if (err) throw err;
      
        console.log(result);
  });
  }, function(err) { // failureCallback
    throw (err);
  });
}


function updateProduct(productID, updateJsonObj){
  db.update(dbName, ProductCollection, productID,updateJsonObj,function(dbCollection) { // successCallback

  
    }, function(err) { // failureCallback
          throw (err);
      });


}
  

function deleteProduct(productID){
  db.deleteRow(dbName, ProductCollection,productID,function(dbCollection) { // successCallback
    
    
    getAllProducts();
    console.log("serverprod: "+productID);

    }, function(err) { // failureCallback
      console.log("FAILURE!");
      throw (err);
    });

}

function getAllProducts(){
  db.retrieveUserData(dbName, ProductCollection, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
     
        if (err) throw err;
        arrProducts.push(result);
          console.log(result);
    });

    // << db CRUD routes >>

}, function(err) { // failureCallback
    throw (err);
});

}

getAllProducts(); //console log all products and store in arr!
retriveAllUsers();
// addProduct({});

const entries = [
    {
      id: 1,
      name: "John",
      message: "Hello!",
      date: "05/16/2021",
    },
    {
      id: 2,
      name: "Tom",
      message: "Nice site.",
      date: "03/10/2021",
    },
  ];
  
app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());
// Get Entries
app.get("/user-list", (req, res) => {
    console.log("== Get Entries ==");
    console.log(arrUsers);
    res.json(arrUsers);

  });

  app.get("/user-auth/:email/:pswrd", (req, res) => {
    console.log("IN LOGIN!");
    retriveAllUsers();
    console.log(req.params.email);
    console.log(req.params.pswrd);
    var user=authenticateUser(req.params.email,req.params.pswrd);
    

    if (user){
      console.log("Logged in!");
      return user ? res.json(user) : res.status(404).end();
    }
    else{
      console.log("Login failed!");
            res.json(0);
        }
    
    // if(user){
    //   if(user.password == req.params.pswrd){
    //     return user ? res.json(user) : res.status(404).end();
    //   }else{
    //       res.json(fail);
    //   }
    // }
    
    console.log(user);
    return res.status(404).end();

  });
  app.get("/user-registeration/:email/:pswrd/:role", (req, res) => {
    
    // const user = Person.find((e) => (e.email == req.params.email));
    // if(user){
    //   return res.json(fail);
    // }else{
      console.log("USER ADDEDD")
      const tmp = {
        id: inc,
        password: req.params.pswrd,
        fname: "",
        lname: "",
        email: req.params.email,
        address: "",
        number: "",
        role: req.params.role,
    };
    addUser(tmp);
      inc++;
      newUser.push(tmp);
      return res.json(tmp);
    //}
 
  });
app.get("/product-list", (req, res) => {
    console.log("== Get Entries ==");
    console.log(arrProducts);

    return res.json(arrProducts[0]);

  });
  
  app.get("/search-product-name/:prodname", (req, res) => {
    var tmp = req.params.prodname;
    var tmp1 = [];
    console.log(req.params.prodname);
    for(var p in Product){
      if(Product[p].name.includes(tmp)){
        console.log("== Get Entry ==");
        console.log(Product[p]);
        tmp1.push(Product[p]);
        
      }
      /*
        if(Product[p].color == req.params.prodcolor){
            tmp.push(Product[p]);
        }
        */
    }
    return tmp1 ? res.json(tmp1) : res.status(404).end();
    
    /*
    const entry = Product.find((e) => e.name == req.params.prodname);
    console.log("== Get Entry ==");
    console.log(entry);
    return entry ? res.json(entry) : res.status(404).end();
    */
  });
  
  // app.get("/delete-product/:proddID", (req, res) => {
    
    
  //   console.log("IN DELETE FUNCTION");
  //   // for(var p in Product){
  //   //   if(Product[p].model == (tmp) && Product[p].type == (tmp1)){
  //   //     Product.splice(p, 1)
  //   //     return Product[0];// Product ? res.json(Product) : res.status(404).end();
  //   //   }
      
  //   // }
  //   const tmp = {
  //     id: inc,
  //     password: "req.params.pswrd",
  //     fname: "",
  //     lname: "",
  //     email: "req.params.email",
  //     address: "",
  //     number: "",
  //     role: "req.params.role",
  // };
  //   deleteProduct(req.params.proddID);
  //   console.log("== deleting =="+req.params.proddID);
  //   console.log(">"+req.params.proddID);
  //   console.log("=="+req.params.proddID==="7");
  //   return res.json(tmp);
    
  // });

  app.post("/delete-product", (req, res) => {
    // if (!req.body.name) return res.status(400).end();
    const tmp = {
    
      desc: ""
  }
  // prodID++;
  deleteProduct(req.body.id);
  // Product.push(tmp);
    res.json(tmp);
  });

  app.post("/update-product/:proddID", (req, res) => {
    
    
    console.log("IN DELETE FUNCTION");
    // for(var p in Product){
    //   if(Product[p].model == (tmp) && Product[p].type == (tmp1)){
    //     Product.splice(p, 1)
    //     return Product[0];// Product ? res.json(Product) : res.status(404).end();
    //   }
      
    // }
    deleteProduct(req.params.proddID);
    console.log("== deleting =="+req.params.proddID);
    return 1;//res.status(404).end();
    
  });

  app.get("/search-product-by-price-less/:prodprice", (req, res) => {
    var tmp = [];
    for(var p in Product){
        if(Product[p].price <= req.params.prodprice){
            tmp.push(Product[p]);
        }
    }
    console.log("== Get Entry ==");
    console.log(tmp);
    return tmp ? res.json(tmp) : res.status(404).end();

  });
  
  app.get("/search-product-by-price-greater/:prodprice", (req, res) => {
    var tmp = [];
    for(var p in Product){
        if(Product[p].price >= req.params.prodprice){
            tmp.push(Product[p]);
        }
    }
    console.log("== Get Entry ==");
    console.log(tmp);
    return tmp ? res.json(tmp) : res.status(404).end();

  });
  app.get("/search-product-by-color/:prodcolor", (req, res) => {
    var tmp = [];
    for(var p in Product){
        if(Product[p].color == req.params.prodcolor){
            tmp.push(Product[p]);
        }
    }
    console.log("== Get Entry ==");
    console.log(tmp);
    return tmp ? res.json(tmp) : res.status(404).end();

  });
  app.get("/search-product-by-type/:prodtype", (req, res) => {
    var tmp = [];
    for(var p in Product){
        if(Product[p].type == req.params.prodtype){
            tmp.push(Product[p]);
        }
    }
    console.log("== Get Entry ==");
    console.log(tmp);
    return tmp ? res.json(tmp) : res.status(404).end();

  });

  app.post("/add-product", (req, res) => {
    if (!req.body.name) return res.status(400).end();
    const tmp = {
      id: prodID,
      type: req.body.type,
      website: req.body.website,
      name: req.body.name,
      model: req.body.model,
      price: req.body.price,
      color: [
          "black","white"
      ],
      rating: req.body.rating,
      desc: req.body.desc,
  }
  prodID++;
  addProduct(tmp);
  // Product.push(tmp);
    res.json(tmp);
  });



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


