const express = require("express");
const router = express.Router();
const { bilgiEkle } = require("../controllers/BilgilerController");

router.get("/bilgiler", (req, res) => {
  //veri tabanındaki bütün paylaşılan bilgileri dönecek

  console.log("İstek geldi...", req);

  console.log(`Gelen Request ${req}`);
  res.status(200).send({
    data: "link",
    createdTime: "121212",
  });
});

// router.post("/bilgiekle", bilgiEkle); //controller metodu çağıracağız
router.route("/api/bilgiekle").post(bilgiEkle); //controller metodu çağıracağız

//değişecek
router.post("/bilgiduzenle/id", (req, res) => {
  //veri tabanında bilgi güncellenecek
  console.log("Bilgi düzenleme isteği geldi");
});

//silme
router.post("/bilgisil/id", (req, res) => {
  //veri tabanında bilgi güncellenecek
  console.log("Bilgi silme isteği geldi");
});

module.exports = router;
