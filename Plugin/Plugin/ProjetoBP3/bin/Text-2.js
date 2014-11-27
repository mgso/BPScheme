//Definindo as chaves publicas das entidades - usando Curvas Elipticas
var ttp_publicKey = '{"x":{"limbs":[7296387,3635860,7308690,10182900,10793413,6882408,2036965,7555316,4019036,12922602,14912849,274822,6071145,15449049,14950740,5300500]},"y":{"limbs":[1076521,8591918,11265433,13292121,6348011,188105,5471092,7264486,6369423,11166595,2189263,9973930,4908328,12344003,3992360,15367403]},"point":[1356928228,559213499,-648240279,70354659,-1924020946,-365079716,1934160927,350578948,1755623877,-1688144785,-2054015110,-1804642941,-360912068,-349651878,-1018501848,-1741641183,1741662819,-2090782577,1859708499,2071200478,-916398869,-892184149,-442924262,772828457],"curve":384}';
var adn_publicKey = '{"x":{"limbs":[3827160,15051554,5479891,15644514,11427424,2084259,11997949,16677986,2614190,13296047,13351420,2545093,9027793,6238500,15744826,5977171]},"y":{"limbs":[5059475,1890736,9064256,15950300,914273,5943878,719802,12808148,2038761,3375767,2832976,15852116,12803468,13394457,15341110,12709448]},"point":[1530156016,1060790065,613007569,651544011,-1174615327,-1356340306,-25402697,318578637,-1548853664,-289971629,-1647057493,574252504,-1041348374,372690018,432233868,-236825557,978334594,-1759568919,-1016081398,-71673166,1175319393,-211690358,1329601753,-1337117805],"curve":384}';
var usr_publicKey = '{"x":{"limbs":[15864235,4610839,11169421,3441133,16739269,5677565,9142001,8424939,6025039,4630617,9142288,8696691,14860947,2975129,13262033,493540]},"y":{"limbs":[12440088,10752342,9747748,5221016,8858169,10845212,2648377,13360668,1318450,2155648,2914302,2046153,14041129,6746629,10267966,13284908]},"point":[126346442,1557212517,-1713192301,-2068614261,-2146416984,1499197263,-2138182773,2129745569,-33592379,880930218,1854752347,401740203,-894030692,-1388419342,97927209,523815212,2013143268,-2146165198,-874636248,1765385596,478620217,1336580244,-1121672175,1455280664],"curve":384}';

var  structuser = [];
var  binaryvector = [];
var  adsvector = [];
var  adsvectorbin = [];
var  cifrovector = [];

//chaves RSA
//USR - 512 bits
var usr_n="a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99\naf3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c06\n5168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4\nc2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
var usr_e="10001";
var usr_d="8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded\n4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c\n4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb1\n4bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
var usr_p="d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33\naec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
var usr_q="cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c996551\n03edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
var usr_dmp1="1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2c\nf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
var usr_dmq1="3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d\n914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
var usr_coeff="3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084\ndb1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";


//TTP - 512 bits
var ttp_n = "C4E3F7212602E1E396C0B6623CF11D26204ACE3E7D26685E037AD2507DCE82FC\n28F2D5F8A67FC3AFAB89A6D818D1F4C28CFA548418BD9F8E7426789A67E73E41";
var ttp_e = "10001";
var ttp_d = "7cd1745aec69096129b1f42da52ac9eae0afebbe0bc2ec89253598dcf454960e\n3e5e4ec9f8c87202b986601dd167253ee3fb3fa047e14f1dfd5ccd37e931b29d";
var ttp_p = "f0e4dd1eac5622bd3932860fc749bbc48662edabdf3d2826059acc0251ac0d3b";
var ttp_q = "d13cb38fbcd06ee9bca330b4000b3dae5dae12b27e5173e4d888c325cda61ab3";
var ttp_dmp1 = "b3d5571197fc31b0eb6b4153b425e24c033b054d22b9c8282254fe69d8c8c593";
var ttp_dmq1 = "968ffe89e50d7b72585a79b65cfdb9c1da0963cceb56c3759e57334de5a0ac3f";
var ttp_coeff = "d9bc4f420e93adad9f007d0e5744c2fe051c9ed9d3c9b65f439a18e13d6e3908";
    

//ADN - 512 bits
var adn_n = "cdb962ed66bc01be4569124f5b2cd29550acb33683ada008b045ad94b263f703\n05df449b50337397e6d886974fc6eb8a33cf1faa8e63025438670953969875bf";
var adn_e = "10001";
var adn_d = "ab63a25653fb979c33e97876a267f23cb14c5fb5aff84b5651bc8b0351a75496\n327ed89b6297727e5d12ffef8fbbd37abbfe51c2033143bb4b80acb2416aa3c1";
var adn_p = "ee1c4294fec5194eb3589803979d380dbeec1dccf5e4991f971de2ce0cdf16e1";
var adn_q = "dd2e384e166a304dceba5349cffe6fec71d7f038697484a1cd23bbc4d971409f";
var adn_dmp1 = "35864cc14973ecf870005e4b906d5b085bfe9fc44f121009b5e295f553976281";
var adn_dmq1 = "25538b85021b61937ff3c9e2870b756ffdb6677fddac2045fe0cadbf86c2aa19";
var adn_coeff = "b6927f960b3bf219c2c66eaa8559ec28dc3c282dd015e93c3ccf0f4b6f2b937e";


//the begin of the process
function sendInfo(){
    
    if (checkFilds() == 1) { //all info are ok
       window.alert("dentro da opcao igual"); 
    } else { //some info is missing
        window.alert("Parameters are not completed! Please return and enter with all information.");
    }

    //enviando pacote structuser para TTP
    window.open("https://localhost:8443/TTP/getInfoUser?" + montaString(structuser));
   
}

function montaString(estrutura) {
    var info = "tipo=" + estrutura[0] +"&email=" + estrutura[1] +"&update="+estrutura[2]+"&optout="+estrutura[3]+"&n="+estrutura[4]+"&m="+estrutura[5]+"&period="+estrutura[6]+"&pkuser="+estrutura[7]+"&pktag="+estrutura[8]+"&prefs="+estrutura[9]+"&ptag="+estrutura[10]+"&pkass="+estrutura[11]+"&asstag="+estrutura[12]+"&sign="+estrutura[13];
    
    console.log("info = " + info);
    return(info);
}

function WriteFile(arquivo, info)
{
    Components.utils.import("resource://gre/modules/NetUtil.jsm");
    Components.utils.import("resource://gre/modules/FileUtils.jsm");

    var data = info;
    
    var file = new FileUtils.File(arquivo);
    var ostream = FileUtils.openSafeFileOutputStream(file);

    var converter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"].
                createInstance(Components.interfaces.nsIScriptableUnicodeConverter);

    converter.charset = "UTF-8";

    var istream = converter.convertToInputStream(data);
    
    // The last argument (the callback) is optional.
    NetUtil.asyncCopy(istream, ostream, function(status) {
    if (!Components.isSuccessCode(status)) {
        // Handle error!
        return;
    }

    // Data has been written to the file.
    });
}

//funcao para encriptar ads com chave publica do usuario
function encryptAds(){
   
    var ad = "http://www.submarino.com.br/produto/116551912/dvd-breaking-bad-a-quimica-do-mal-a-temporada-final-3-discos-";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds1.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
      
    var ad = "http://www.americanas.com.br/produto/5115133/cd-zeca-pagodinho-samba-pras-mocas?DCSext.recom=Neemu_Departamento_lancamentos&nm_origem=rec_departamento_lancamentos-a&nm_ranking_rec=1";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds2.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
   
    var ad = "http://www.magazineluiza.com.br/selecao-produtos/11993/se/tb/?ordem=menor-preco&menu=false";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds3.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
    
    var ad = "http://www.pontofrio.com.br/Eletronicos/tvs/TVLED/TV-LED-46-Full-HD-Sony-KDL-46R485A-com-Motion-Flow-de-120Hz-Radio-FM-Conversor-Digital-e-Entradas-HDMI-e-USB-2411604.html?recsource=busca-int&rectype=busca-370";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds4.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
    
    var ad = "http://www.walmart.com.br/produto/Informatica/Notebooks-Windows-8/CCE/377633-Notebook-CCE-Intel-Celeron-847-Ultra-Thin-S23";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds5.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
    
    var ad = "http://www.submarino.com.br/produto/111804837/cadeira-presidente-office-andaluzia-preta-rivatti";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds6.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
    
    var ad = "http://www.americanas.com.br/produto/113681359/smartphone-samsung-i9300-galaxy-s-iii-metallic-blue-capa-flip-cover-preta-samsung-galaxy-siii";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds7.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
    
    var ad = "http://www.magazineluiza.com.br/smart-tv-led-32-lg-ln570b-hdtv-conversor-integrado-3-hdmi-3-usb-wi-fi/p/1933243/et/elit/";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds8.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
      
    var ad = "http://www.pontofrio.com.br/livros/BiografiasCartasMemorias/Biografias/Livro-A-Estrela-Que-Nunca-Vai-Se-Apagar-Esther-Earl-com-Lori-e-Wayne-Earl-2777041.html?recsource=busca-int&rectype=busca-548";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds9.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
    
    var ad = "http://www.walmart.com.br/produto/Bebes/Cadeirao/Burigotto/360902-Cadeira-para-Alimentacao-Chef-Garden-Pink---Burigo";
    var cifro_ad = BP_encryptMessage(ad, usr_publicKey);
    WriteFile("/Users/graca/keys/adsecrypteds10.txt", "tag=" +cifro_ad.tag + " " + cifro_ad.cipher);
}

//Função para geração dos pares de chaves das entidades do esquema para assinatura digital
function BP_assign_generateKeys() {
  
    
    //Gerando chave publica para USR
    var keys = sjcl.ecc.ecdsa.generateKeys(384, 0);

    WriteFile("/Users/graca/keys/usr_ass_pubkey.pub", JSON.stringify(keys.pub.serialize()));
    
    //Gerando chave privada para USR
    
    WriteFile("/Users/graca/keys/usr_ass_seckey.sec", JSON.stringify(keys.sec.serialize()));
    
    
    //Gerando chave publica Adnet    
    var keys = sjcl.ecc.ecdsa.generateKeys(384, 0);

    WriteFile("/Users/graca/keys/adn_ass_pubkey.pub", JSON.stringify(keys.pub.serialize()));
    
    //Gerando chave privada para Adnet
    WriteFile("/Users/graca/keys/adn_ass_seckey.sec", JSON.stringify(keys.sec.serialize()));
        
   
    //Gerando chave privada para TTP
    var keys = sjcl.ecc.ecdsa.generateKeys(384, 0);

    WriteFile("/Users/graca/keys/ttp_ass_pubkey.pub", JSON.stringify(keys.pub.serialize()));
    
    //Gerando chave privada para Adnet
    WriteFile("/Users/graca/keys/ttp_ass_seckey.sec", JSON.stringify(keys.sec.serialize()));
   
}

function teste() {
    
    var hmac1 = new sjcl.misc.hmac('thekey');
    var hmachash1 = hmac1.encrypt('foobar');
    
    console.log('hmachash1 = ' + hmachash1);
  
}

function BP_rsa_encryptMessage(msg, n, e) {

    var rsa = new RSAKey();
 
    rsa.setPublic(n, e);

    /*** encrypt */  
    var ciphertext = rsa.encrypt(msg);
    return(ciphertext);  
}

function BP_rsa_decryptMessage(ciphertext, n, e, d, p, q, dmp1, dmq1, coeff) {
    
    var rsa = new RSAKey();
    
    rsa.setPrivateEx(n, e, d, p, q, dmp1, dmq1, coeff);  
      
    /*** decrypt */  
    var plaintext  = rsa.decrypt(ciphertext);
   
    return(plaintext); 

}


//Função para geração dos pares de chaves das entidades do esquema
function BP_generateKeys() {
  
    
    //Gerando chave publica para USR
    var keys = sjcl.ecc.elGamal.generateKeys(384, 0);

    WriteFile("/Users/graca/keys/usr_pubkey.pub", JSON.stringify(keys.pub.serialize()));
    
    //Gerando chave privada para USR
    
    WriteFile("/Users/graca/keys/usr_seckey.sec", JSON.stringify(keys.sec.serialize()));
    
    
    //Gerando chave publica Adnet    
    var keys = sjcl.ecc.elGamal.generateKeys(384, 0);

    WriteFile("/Users/graca/keys/adn_pubkey.pub", JSON.stringify(keys.pub.serialize()));
    
    //Gerando chave privada para Adnet
    WriteFile("/Users/graca/keys/adn_seckey.sec", JSON.stringify(keys.sec.serialize()));
        
   
    //Gerando chave privada para TTP
    var keys = sjcl.ecc.elGamal.generateKeys(384, 0);

    WriteFile("/Users/graca/keys/ttp_pubkey.pub", JSON.stringify(keys.pub.serialize()));
    
    //Gerando chave privada para Adnet
    WriteFile("/Users/graca/keys/ttp_seckey.sec", JSON.stringify(keys.sec.serialize()));
   
}

function readKeys(arquivo) {
    
    Components.utils.import("resource://gre/modules/NetUtil.jsm");
    Components.utils.import("resource://gre/modules/FileUtils.jsm");

    // |file| is nsIFile
    var data = "";
    var file = new FileUtils.File(arquivo);
    var fstream = Components.classes["@mozilla.org/network/file-input-stream;1"].
              createInstance(Components.interfaces.nsIFileInputStream);
    var cstream = Components.classes["@mozilla.org/intl/converter-input-stream;1"].
              createInstance(Components.interfaces.nsIConverterInputStream);
    fstream.init(file, -1, 0, 0);
    cstream.init(fstream, "UTF-8", 0, 0); // you can use another encoding here if you wish

    let (str = {}) {
      let read = 0;
      do { 
        read = cstream.readString(0xffffffff, str); // read as much as we can and put it in str.value
        data += str.value;
      } while (read != 0);
    }
    cstream.close(); // this closes fstream

    return(data);
}

//Check the filds of forms options and preferences
function checkFilds(){
    var ret = 0;
    
    window.alert('structuser[1]' + structuser[1]);
   
    if (structuser[1] != "") ret = 1;
    return ret;
}

//funcao para processar os anuncios recebidos
function proccessAds(info, tag)
{
    var ads = [];
    var tags = [];
    var j = 0;
    var n = 10; //pegar do arquivo de preferencias
    var m = 5;  //pegar do arquivo de preferencias
    var posinicial =0;
    var posfinal = 0;
    var posinicialt =0;
    var posfinalt = 0;
    var selectedad=0;
  
  console.log('dentro proccessAds = ' + info);
    for (var i = 1; i <= m; i++ ) {
         selectedad = (Math.floor(Math.random() * (n - 1 + 1)) + 1); //Para futuro --> nao deixar que os numeros aleatorio se repitam
         alert('numero = ' + selectedad);
         if (selectedad < 10) {
            posinicial = (info.indexOf("ad" + selectedad))+4;
            posinicialt = (tag.indexOf("tag" + selectedad))+5;
            console.log('posinicial = ' +posinicial);
         } else {
            posinicial = (info.indexOf("ad" + selectedad))+5;
            posinicialt = (tag.indexOf("tag" + selectedad))+6;
         }
         
         adsvector[j] = selectedad; //vetor a converter para binario
         if (selectedad == n) {
            posfinal = info.length;
            posfinalt = tag.length;
         } else {
            posfinal = info.indexOf("ad" + (selectedad+1));
            posfinalt = tag.indexOf("tag" + (selectedad+1));
         }
         ads[j] = info.substring(posinicial, posfinal);
         tags[j] = tag.substring(posinicialt, posfinalt);
         console.log("ads[" + j +"] = " + ads[j]);
         console.log("tags[" + j +"] = " + tags[j]);
         j++;
         
    }
    
 
    var endereco;
    for(i =0; i<m; i++) {
        endereco = BP_decryptMessage(ads[i], tags[i], 1);
        endereco = endereco.substring(5, endereco.length);
        window.open("http" + endereco, "_blank");
    }
    
    //gerar vetor binario e enviar para a Adnet
    var k = 0;
    for (k=0; k< n; k++) {
        adsvectorbin[k] = 0;
        
    }

    for (j=0;j<m;j++) {
        adsvectorbin[adsvector[j]-1] = 1;
    }
    
    var cifro_vbin;
    for (i=0;i<n; i++) {
        cifro_vbin = BP_encryptMessage(adsvectorbin[i], adn_publicKey); //encriptando cada componente do vetor binario
        cifrovector[i] = cifro_vbin.cipher;
        cifrovector[i+n] = cifro_vbin.tag;
    }
    
    //enviando vetor binario para Adnet atraves da TTP
     window.open("https://localhost/info/?info=" + cifrovector);  
   
}

//
function BP_encryptMessage(message, pk) {
    
    var pub = JSON.parse(pk);
    var point = sjcl.ecc.curves["c384"].fromBits(pub.point);
    
    var pubkey = new sjcl.ecc.elGamal.publicKey(pub.curve, point.curve, point);
  
    var symkey_obj = pubkey.kem(0);

    var cipherMessage = sjcl.encrypt(symkey_obj.key, JSON.stringify(message));
    
    var tag_string = JSON.stringify(symkey_obj.tag);
    
    return {'cipher': cipherMessage, 'tag': tag_string};
}

//
function BP_decryptMessage(cipherMessage, tag, entity){
    
    var seckey;
    if (entity == 1) { //Chave secreta do usuario
       seckey = readKeys("/Users/graca/keys/usr_seckey.sec");
    } else if (entity == 2) { //Chave secreta da ttp
        seckey = readKeys("/Users/graca/keys/ttp_seckey.sec");
    } else if (entity == 3) { //Chave secreta da adnet
        seckey = readKeys("/Users/graca/keys/adn_seckey.sec");
    }
    
    
    var secret_key_string = seckey;
    
    var secret = JSON.parse(secret_key_string);
    var exponent = sjcl.bn.fromBits(secret.exponent);
    var secret_key = new sjcl.ecc.elGamal.secretKey(secret.curve,sjcl.ecc.curves['c'+secret.curve],exponent);
    
    console.log("tag = " + tag);
    
    var jtag = JSON.parse(tag);
    
    console.log("jtag = " + jtag);
    
    var symkey = secret_key.unkem(jtag);
    
    var decryptedData = sjcl.decrypt(symkey, cipherMessage);
    
    return(decryptedData);
}

function BP_assign(info, entity){
    var asec;
    if (entity == 1) { //Chave secreta do usuario
       asec = readKeys("/Users/graca/keys/usr_ass_seckey.sec");
    } else if (entity == 2) { //Chave secreta da ttp
        asec = readKeys("/Users/graca/keys/ttp_ass_seckey.sec");
    } else if (entity == 3) { //Chave secreta da adnet
        asec = readKeys("/Users/graca/keys/adn_ass_seckey.sec");
    }

    var skey = JSON.parse(asec);
    
    var exponent = sjcl.bn.fromBits(skey.exponent);
    
    var secret_key = new sjcl.ecc.ecdsa.secretKey(skey.curve, sjcl.ecc.curves['c'+skey.curve],exponent);
    console.log('secret_key.g = '+ secret_key);
    var signature = secret_key.sign(sjcl.hash.sha256.hash(info));
    console.log('signature sign = ' + signature);
    
    return signature;
}

function testeP(size, n, l) {
    //pubkeyP = '{"keySize":1024,"n":{"0":250926423,"1":227135021,"2":249607155,"3":212661005,"4":16277062,"5":27069012,"6":209689000,"7":194612095,"8":230655428,"9":137632571,"10":120670919,"11":85009165,"12":128145063,"13":182772135,"14":229035943,"15":200047512,"16":216967877,"17":83510070,"18":209713535,"19":144726332,"20":217732314,"21":219608359,"22":195464610,"23":49027834,"24":145631480,"25":267988566,"26":153440278,"27":103065729,"28":123480801,"29":85322152,"30":10666274,"31":230629679,"32":156089155,"33":6429768,"34":238725061,"35":127562871,"36":3472,"37":0,"t":37,"s":0},"n2":{"0":60941201,"1":75766884,"2":15375867,"3":46025550,"4":27175174,"5":34962046,"6":45519016,"7":139689680,"8":101919312,"9":104631681,"10":185361098,"11":61725921,"12":71463453,"13":173305625,"14":143947203,"15":130604441,"16":213424486,"17":39370840,"18":255956575,"19":27108787,"20":27524752,"21":157210403,"22":50094044,"23":137243068,"24":812293,"25":125213922,"26":71553149,"27":186079870,"28":48330487,"29":124610956,"30":4330181,"31":225560050,"32":184462277,"33":161738696,"34":49691880,"35":52909454,"36":5046468,"37":75919466,"38":104804974,"39":111215688,"40":147899441,"41":11315107,"42":81526506,"43":86931227,"44":153266590,"45":65269162,"46":202154257,"47":255475049,"48":111790494,"49":178249450,"50":51143722,"51":72775349,"52":6409955,"53":12880206,"54":196193242,"55":145680618,"56":66015335,"57":6702814,"58":243875223,"59":80339335,"60":143992466,"61":171482539,"62":220204566,"63":78020200,"64":239263760,"65":207950578,"66":152417369,"67":85827440,"68":11263406,"69":64646528,"70":179624616,"71":20196589,"72":12058084,"73":0,"t":73,"s":0},"np1":{"0":250926424,"1":227135021,"2":249607155,"3":212661005,"4":16277062,"5":27069012,"6":209689000,"7":194612095,"8":230655428,"9":137632571,"10":120670919,"11":85009165,"12":128145063,"13":182772135,"14":229035943,"15":200047512,"16":216967877,"17":83510070,"18":209713535,"19":144726332,"20":217732314,"21":219608359,"22":195464610,"23":49027834,"24":145631480,"25":267988566,"26":153440278,"27":103065729,"28":123480801,"29":85322152,"30":10666274,"31":230629679,"32":156089155,"33":6429768,"34":238725061,"35":127562871,"36":3472,"s":0,"t":37},"rnCache":[]}';
    //seckeyP = '{"lambda":{"0":99761548,"1":263353543,"2":3665954,"3":31681010,"4":113756361,"5":241039085,"6":7336783,"7":182944065,"8":136674652,"9":108544532,"10":227421304,"11":61793173,"12":221670205,"13":176001932,"14":260779874,"15":142436284,"16":101567156,"17":258792385,"18":190607711,"19":157171160,"20":27009320,"21":191157435,"22":189816115,"23":122028415,"24":187047608,"25":14888253,"26":262046835,"27":259248248,"28":215643176,"29":243349413,"30":254114945,"31":147030487,"32":38497781,"33":164401099,"34":117654069,"35":245696120,"36":192,"37":150994944,"t":37,"s":0},"pubKey":{"keySize":1024,"n":{"0":250926423,"1":227135021,"2":249607155,"3":212661005,"4":16277062,"5":27069012,"6":209689000,"7":194612095,"8":230655428,"9":137632571,"10":120670919,"11":85009165,"12":128145063,"13":182772135,"14":229035943,"15":200047512,"16":216967877,"17":83510070,"18":209713535,"19":144726332,"20":217732314,"21":219608359,"22":195464610,"23":49027834,"24":145631480,"25":267988566,"26":153440278,"27":103065729,"28":123480801,"29":85322152,"30":10666274,"31":230629679,"32":156089155,"33":6429768,"34":238725061,"35":127562871,"36":3472,"37":0,"t":37,"s":0},"n2":{"0":60941201,"1":75766884,"2":15375867,"3":46025550,"4":27175174,"5":34962046,"6":45519016,"7":139689680,"8":101919312,"9":104631681,"10":185361098,"11":61725921,"12":71463453,"13":173305625,"14":143947203,"15":130604441,"16":213424486,"17":39370840,"18":255956575,"19":27108787,"20":27524752,"21":157210403,"22":50094044,"23":137243068,"24":812293,"25":125213922,"26":71553149,"27":186079870,"28":48330487,"29":124610956,"30":4330181,"31":225560050,"32":184462277,"33":161738696,"34":49691880,"35":52909454,"36":5046468,"37":75919466,"38":104804974,"39":111215688,"40":147899441,"41":11315107,"42":81526506,"43":86931227,"44":153266590,"45":65269162,"46":202154257,"47":255475049,"48":111790494,"49":178249450,"50":51143722,"51":72775349,"52":6409955,"53":12880206,"54":196193242,"55":145680618,"56":66015335,"57":6702814,"58":243875223,"59":80339335,"60":143992466,"61":171482539,"62":220204566,"63":78020200,"64":239263760,"65":207950578,"66":152417369,"67":85827440,"68":11263406,"69":64646528,"70":179624616,"71":20196589,"72":12058084,"73":0,"t":73,"s":0},"np1":{"0":250926424,"1":227135021,"2":249607155,"3":212661005,"4":16277062,"5":27069012,"6":209689000,"7":194612095,"8":230655428,"9":137632571,"10":120670919,"11":85009165,"12":128145063,"13":182772135,"14":229035943,"15":200047512,"16":216967877,"17":83510070,"18":209713535,"19":144726332,"20":217732314,"21":219608359,"22":195464610,"23":49027834,"24":145631480,"25":267988566,"26":153440278,"27":103065729,"28":123480801,"29":85322152,"30":10666274,"31":230629679,"32":156089155,"33":6429768,"34":238725061,"35":127562871,"36":3472,"s":0,"t":37},"rnCache":[]},"mu":{"0":187478375,"1":152795535,"2":166570016,"3":220576497,"4":7924599,"5":267142171,"6":25159722,"7":218498826,"8":123439702,"9":196527177,"10":223825179,"11":96496952,"12":209420816,"13":225762567,"14":164238807,"15":254250486,"16":263936162,"17":116097493,"18":254290119,"19":95229311,"20":75153427,"21":252917579,"22":254580642,"23":95930817,"24":132084899,"25":91240871,"26":94064919,"27":52184076,"28":13864903,"29":177494383,"30":99875753,"31":195585167,"32":158432954,"33":203668780,"34":149614686,"35":250788409,"36":2824,"t":37,"s":0}}';
   
    console.log("size = " + size);
    console.log("n = " + n);
    console.log("lambda = " + l);
    
    var keypair = new Paillier.PublicKey(size, n);
    
    var encA = keypair.encrypt(2);
    var encB = keypair.encrypt(3);
    
    console.log("EncaA = " + encA);
    console.log("EncaB = " + encB);
    
    var encSum = keypair.add(encA, encB);
    
    console.log("soma encriptada = " + encSum);
    
    var kpair = new Paillier.PrivateKey(l, keypair);
    
    var decSum = kpair.decrypt(encSum);
    console.log("decSum = " + decSum);


}

function BP_verify(signature, info, entity) {
    
    var apub;
    if (entity == 1) { //Chave secreta do usuario
       apub = readKeys("/Users/graca/keys/usr_ass_pubkey.pub");
    } else if (entity == 2) { //Chave secreta da ttp
        apub = readKeys("/Users/graca/keys/ttp_ass_pubkey.pub");
    } else if (entity == 3) { //Chave secreta da adnet
        apub = readKeys("/Users/graca/keys/adn_ass_pubkey.pub");
    }
    console.log('signature verify = ' + signature);
    
    var pkey = JSON.parse(apub);
    //console.log('pkey = ' + pkey.point);
    var point = sjcl.ecc.curves["c384"].fromBits(pkey.point);
    
    var pubkey = new sjcl.ecc.ecdsa.publicKey(pkey.curve, point.curve, point);
    
    //verificacao da assinatura
    
    try{
        pubkey.verify(sjcl.hash.sha256.hash(info), signature);
       return true;
    } catch(e) {
        return false;
    }
}

//class User
function userClass(tipo, email, update, optout, n, m, period, pkx, preferences) {
    window.alert('Dentro de user');
            
    var tree = preferences;
    var cellIndex = 0;
    var cellText;
    var numRanges = tree.view.selection.getRangeCount();
    var prefs = new Array(numRanges);
    var aux = 0;
      
    for (var i = 0; i < tree.view.rowCount; i++) {
        cellText = tree.view.getCellText(i, tree.columns.getColumnAt(cellIndex));
        if (tree.view.selection.isSelected(i) == true) {
            prefs[aux] = cellText;
            aux++;
        }
        cellText = tree.view.getCellText(i, tree.columns.getColumnAt(cellIndex));
       // alert(tree.view.selection.isSelected(i));
       // alert(cellText);
    }
    /*
    var keys = Paillier.generateKeys(1024);
    
    var size = keys.pub.keySize;
    var n = keys.pub.n;
    var lambda = keys.sec.lambda;
    
    console.log("size = " + size);
    console.log("n = " + n);
    console.log("lambda = " + lambda);*/
    
    var size = 1024;
    var n = "11303503654178288782382533445198837815110135331747316690669304273050950633808081091942610011678969930551397047559218148420221995254456727458075039104579993424662185379222309958935210805134498799373245009166123558764955763622228956233985786631321093373193339338121270047581310315835286997847587200507550023703";
    var lambda = "1883917275696381463730422240866472969185022555291219448444884045508491772301346848657101668613161655091899507926536358070036999209076121243012506517429996951090093378487022386669794871536959373839986567892271575608459928096191981369395062144210549988506969175708272334365507249001640982187224401652904744480";
    var n2 = parseBigInt(n);
    var lambda2 = parseBigInt(lambda);
    
    console.log("n2 = " + n2);
    
    testeP(size, n2, lambda2);
   //testeP(keys.pub.keySize, keys.pub.n, keys.sec.lambda);
   
  // var resp1 = BP_assign('alomundo' , 2, 0x0e8279ad62ad3789e58d13d7e98d1465b499ec23aadd9db402eb51516d9794a4c424099febcf6f1096277d4e92aa48dff);
 //  "as2  = 2123411208,-1592309149,1109476048,-213086981,-1327893829,-418948669,306301068,1656566345,-1206781692,-1156475633,182306770,1816023291,1627473563,978122382,743101033,-1325007497,-276646166,-1740706749,-1621712364,-1807499610,968395471,-553068702,1756731406,946655738" bp.js:476
// "secret_key.g = [object Object]" bp.js:414
 //"k  sign = 0x0e8279ad62ad3789e58d13d7e98d1465b499ec23aadd9db402eb51516d9794a4c424099febcf6f1096277d4e92aa48dff"
   
   //console.log('as1  = ' + resp1);
   /*
   var resp2 = BP_assign('alomundo' , 2);
   console.log('as2  = ' + resp2);
   
   var resp3 = BP_assign('alomundo' , 2);
   console.log('as3  = ' + resp3);

   var r1 = BP_verify(JSON.parse(resp1), 'alomundo', 2);
   console.log('verify1 = ' + r1);
   
   var r2 = BP_verify(resp2, 'alomundo', 2);
   console.log('verify2 = ' + r2);
   
   var r3 = BP_verify(resp3, 'alomundo', 2);
   console.log('verify3 = ' + r3);*/
    
    /*
    var textocifrado = BP_rsa_encryptMessage("alo mundo", usr_n, usr_e);
    console.log('texto cifrado = ' + textocifrado);
    
    var textolimpo = BP_rsa_decryptMessage(textocifrado, usr_n, usr_e, usr_d, usr_p, usr_q, usr_dmp1, usr_dmq1, usr_coeff);
    console.log('texto limpo = ' + textolimpo);
    */
    
    /*
    //teste Paillier
    var keys = Paillier.generateKeys(1024);
    var keys2 = Paillier.generateKeys(1024);
    
    var kpubS = keys.pub.n.toString();
    
    console.log("n string = " + kpubS);
    
    var keypub = JSON.stringify(keys.pub);
    var keysec = JSON.stringify(keys.sec);
    
    console.log("keys.pub = "+ keypub);
    console.log("keys.sec = "+ keysec);
    
    var pkeypub = JSON.parse(keypub);
    
    console.log("key pub parse keysize = " + pkeypub.keySize);
    
    var encA = keys.pub.encrypt(2);
    var encB = keys.pub.encrypt(3);
    console.log('encA = ' + encA);
    console.log('encB = ' + encB);
   
    var encSum = keys2.pub.add(encA, encB);
    
    console.log("encSum = " + encSum);
    
    var decSum = keys.sec.decrypt(encSum);
    console.log("decSum = " + decSum);
    */
    //teste vetor binario
   // var binario = BP_encryptMessage("1", adn_publicKey);
   // var resbin = BP_decryptMessage(binario.cipher, binario.tag, 3);
   // console.log("binario = " + binario.cipher);
   // console.log("resultado decrypt binario = " + resbin);
    //binario = {"iv":"5LkhOEit/kmHyi6BxLoiHg==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","ct":"r4eb/LxQ5/0/4W0="}"
    //binario = {"iv":"UFq0kAMX0T5lb4UjApDsMA==","v":1,"iter":1000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","ct":"US+4vcT8g41+U50="}"
    
     //definicao pacote para de dados para envio a TTP
    structuser[0] = tipo;
    structuser[1] = email;
    structuser[2] = update;
    structuser[3] = optout;
    structuser[4] = n;
    structuser[5] = m;
    structuser[6] = period;

    //encriptando chave publica do usuario com a chave publica da TTP usando Curvas Elipticas
    var cifro_pkusr = BP_encryptMessage(usr_publicKey, ttp_publicKey);
    
    //encriptando chave publica da usuario com a chave publica da TTP usando RSA
   // var cifro_pkusr = BP_rsa_encryptMessage(usr_publicKey, ttp_n, ttp_e);
    
    structuser[7] = cifro_pkusr.cipher;
    structuser[8] = cifro_pkusr.tag;
    
    //encriptando preferencias com chave publica da adnet usando Curbas Elipticas
    var cifro_prefs = BP_encryptMessage(prefs, adn_publicKey);
    
    //encriptando preferencias com chave publica da adnet usando RSA
    //var cifro_prefs = BP_rsa_encryptMessage(prefs, adn_n, adn_e);
    
    structuser[9] = cifro_prefs.cipher;
    structuser[10] = cifro_prefs.tag;
    
    var dec = BP_decryptMessage(cifro_prefs.cipher, cifro_prefs.tag, 3);
    
    //encriptando chave publica do usuario para assinatura digital
    var pkassign = readKeys("/Users/graca/keys/usr_ass_pubkey.pub");
    var cifro_pkusrass = BP_encryptMessage(pkassign, ttp_publicKey);
    
    structuser[11] = cifro_pkusrass.cipher;
    structuser[12] = cifro_pkusrass.tag;
    
    //gerando assinatura de structuser[0-12]
    
    var signature = BP_assign(structuser, 1);
    
    structuser[13] = signature;

    //a funcao sendInfo chamada dentro de preferences.xul, apos chamada de userClass, enviar pacote structuser para a TTP
    
 }
 
 
 