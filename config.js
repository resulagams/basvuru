const config = {
  TOKEN: "TOKEN", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "!",
  guild: "1088132307883401216", //Sunucu ID Yazın
  channel: "1090571370951356476", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "1088136591958102087", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "1090572849678385182" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["1088136591958102087"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "1088136591958102087", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "Hey Tebrikler Yetkili Oldun!", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "Üzgünüm Başvurun Bu Seferlik Reddedildi!", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 20000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "(Sunucu İsmi) Yetkili Başvurularımız Aktif!", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "RED", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "Başvurmak İçin Başvur Butonuna Basıp Formu Tam Doldurup Göndermen Yeterli. Senide Aramızda Görmekten Mutluluk Duyarız!"  //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["İsim Ve Yaşın Kaç?", "Günde Kaç Saat Aktifsin?", "Kod Bilgin Nedir? Yok/Orta/Yüksek/Baya İyi", "Neden Yetkili Olmak İstiyorsun?", "Neden Burası?", "Discord Ses Kanalında Günde Kaç Saat Aktif Kalabilirsin?", "Kendine Güveniyor Musun?"] //Sorulacak Sorular
};

module.exports = config;
