import java.io.IOException;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.Reader;
import java.math.BigInteger;
import java.net.URL;
import org.junit.Test;
import org.mozilla.javascript.*;
import org.mozilla.javascript.tools.shell.Global;
 
/**
 *
 * @author ryan.ramage
 */
public class AppTest {
 String ttp_secKey = "{\"exponent\":[1069408656,271616104,62342418,600285951,972663950,-2074773771,-1602518654,1403204985,-806643808,-477271522,28566825,-850014992],\"curve\":384}";  
 String ttp_secKeyass = "{\"exponent\":[-1022314799,-2031895086,-992909950,-1204299856,793982034,716891647,-1832862321,-1373957474,457710169,627292972,-1665512999,2076094661],\"curve\":384}";
 String ttp_pubKeyass = "{\"x\":{\"limbs\":[9454958,15649492,499427,15679568,2821023,191710,1212294,13784543,12266124,4752717,2203925,7951903,6011513,7573749,11712423,5197268]},\"y\":{\"limbs\":[3858441,6659114,3319701,2837943,6525147,791023,13885119,4820761,1598782,14016718,10707345,6667787,15426629,4586060,11075085,1829476]},\"point\":[1330500786,-1213762672,-178537863,2035687201,-1592440699,1304111756,-766124270,2139489004,-567604321,-280997881,-1629229366,-728742546,468346024,-32684550,1290495045,1706953635,1636947424,-837262018,1234115027,-557904879,-278687525,726513458,-1483381348,708501513],\"curve\":384}";
 int size = 1024;
 String x = "11303503654178288782382533445198837815110135331747316690669304273050950633808081091942610011678969930551397047559218148420221995254456727458075039104579993424662185379222309958935210805134498799373245009166123558764955763622228956233985786631321093373193339338121270047581310315835286997847587200507550023703";
 BigInteger n = new BigInteger(x);
 String slambda = "1883917275696381463730422240866472969185022555291219448444884045508491772301346848657101668613161655091899507926536358070036999209076121243012506517429996951090093378487022386669794871536959373839986567892271575608459928096191981369395062144210549988506969175708272334365507249001640982187224401652904744480";
 BigInteger lambda = new BigInteger(slambda); 
 
 public AppTest() {
    }
 
    @Test
    public void test2() throws Exception {
        
        String ttp_publicKey = "{\"x\":{\"limbs\":[7296387,3635860,7308690,10182900,10793413,6882408,2036965,7555316,4019036,12922602,14912849,274822,6071145,15449049,14950740,5300500]},\"y\":{\"limbs\":[1076521,8591918,11265433,13292121,6348011,188105,5471092,7264486,6369423,11166595,2189263,9973930,4908328,12344003,3992360,15367403]},\"point\":[1356928228,559213499,-648240279,70354659,-1924020946,-365079716,1934160927,350578948,1755623877,-1688144785,-2054015110,-1804642941,-360912068,-349651878,-1018501848,-1741641183,1741662819,-2090782577,1859708499,2071200478,-916398869,-892184149,-442924262,772828457],\"curve\":384}";
        // String ttp_secKey = "{\"exponent\":[1069408656,271616104,62342418,600285951,972663950,-2074773771,-1602518654,1403204985,-806643808,-477271522,28566825,-850014992],\"curve\":384}";  
        String stag="";
        String json="";
        String ass="";
        String ver = "";
        
        ver = somaHomomorfica(size, x, slambda);
        
        
        //ass = BP_assign("alomundo");
        //System.out.println("ass = " + ass);
        //ass = "17978778,29005987,1858486101,-1209383545,1384637557,-1726516284,-2066189665,2045519581,189192888,-132202342,-541482795,1992163585,1174186595,1486056533,866081876,-60206660,-787695012,-5022241,855339885,178109936,1718800616,1747091463,-807367728,-183253151";
        //ver = BP_verify("alomundo", ass);
        //System.out.println("ver = " + ver);
        
        
        
        Global global = new Global();
        Context context  = createAndInitializeContext( global );
        Scriptable scope = context.initStandardObjects( global );
 
        URL url = new URL("http://localhost:8080/sjcl/sjcl.js");
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
        compileAndExec(in, "classpath:" + url.toString(), context, scope);
        in.close();
        
        System.out.println("ttp_publicKey ="  + ttp_publicKey);
        
        //Encriptando com ECC
        exec("var pub = JSON.parse('" + ttp_publicKey + "'); var point = sjcl.ecc.curves['c384'].fromBits(pub.point); var pubcurve = pub.curve; var pointcurve = point.curve; var pubkey = new sjcl.ecc.elGamal.publicKey(pubcurve, pointcurve, point); var symkey_obj = pubkey.kem(0); var tag = symkey_obj.tag; var cipherMessage = sjcl.encrypt(symkey_obj.key, JSON.stringify(\"alomundo\"));", "start", context, scope);
        Object result = scope.get("cipherMessage", scope);
        Object tag = scope.get("tag", scope);
        System.out.println("result = " + result);
        
        if (result != Scriptable.NOT_FOUND) {
            json =  Context.toString(result);
            stag = Context.toString(tag);
            System.out.println("json = " + json);
            System.out.println("tag = " + stag);
        }
        
        //Decriptando com ECC
        exec("var secret_key_string = '" + ttp_secKey + "'; var secret = JSON.parse(secret_key_string); var exponent = sjcl.bn.fromBits(secret.exponent); var secret_key = new sjcl.ecc.elGamal.secretKey(secret.curve,sjcl.ecc.curves['c'+secret.curve],exponent); var symkey = secret_key.unkem(JSON.parse('["+ stag +"]')); var decryptedData = sjcl.decrypt(symkey, '"+ json +"');", "start", context, scope);
        Object result2 = scope.get("decryptedData", scope);
        
        System.out.println("result = " + result2);       
        if (result2 != Scriptable.NOT_FOUND) {
            String json2 =  Context.toString(result2);       
            System.out.println("json2 = " + json2);           
        }
        
    }
    
    public String BP_verify(String info, String signature) throws Exception {
        Global global = new Global();
        Context context  = createAndInitializeContext( global );
        Scriptable scope = context.initStandardObjects( global );
        String json3 = "";
                
        URL url = new URL("http://localhost:8080/sjcl/sjcl.js");        
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));        
        compileAndExec(in, "classpath:" + url.toString(), context, scope);       
        in.close();
    
        exec("var pkey = JSON.parse('" + ttp_pubKeyass + "'); var point = sjcl.ecc.curves['c384'].fromBits(pkey.point); var pubkey = new sjcl.ecc.ecdsa.publicKey(pkey.curve, point.curve, point); try { var hs = sjcl.hash.sha256.hash('alomundo'); pubkey.verify(hs, " + signature + "); var val = 'true';} catch(e) { var val = 'false';}", "start", context, scope);
        
        Object result2 = scope.get("val", scope);
        
        System.out.println("result = " + result2);       
        if (result2 != Scriptable.NOT_FOUND) {
            json3 =  Context.toString(result2);       
            System.out.println("val = " + json3);           
        }
        return json3;
    }
    
    public String[] somaHomomorfica(int sizeh, String n, String lambda, String []vrecebido, 
            String []vbanco, int totalads) 
            throws Exception {
        Global global = new Global();
        Context context  = createAndInitializeContext( global );
        Scriptable scope = context.initStandardObjects( global );
        String json2 = "";
        BigInteger n2 = new BigInteger(n);
        int i=0;
        String []retorno = new String[totalads];
                
        URL url = new URL("http://localhost:8080/sjcl/paillier.js");        
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));        
        compileAndExec(in, "classpath:" + url.toString(), context, scope);       
        in.close();
        
        while (i < totalads) {
        
            exec("var keypair = new Paillier.PublicKey(" + sizeh + ", '" + n2 +"'); "
                + "var encSum = keypair.add("+vrecebido[i]+","+ vbanco[i]+");", "start", context, scope);
        
            Object result2 = scope.get("encSum", scope);
         
            if (result2 != Scriptable.NOT_FOUND) {
                json2 =  Context.toString(result2);                  
            }
            retorno[i] = json2;
            i++;
        }    
        return retorno;
    }
    
   /*
    
    var kpair = new Paillier.PrivateKey(l, keypair);
    
    var decSum = kpair.decrypt(encSum);
    console.log("decSum = " + decSum);*/

    public String BP_assign(String info) throws Exception {
        Global global = new Global();
        Context context  = createAndInitializeContext( global );
        Scriptable scope = context.initStandardObjects( global );
        String json2 = "";
                
        URL url = new URL("http://localhost:8080/sjcl/sjcl.js");        
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));        
        compileAndExec(in, "classpath:" + url.toString(), context, scope);       
        in.close();  
        
        
        //Assinando com ecdsa
        //var signature = secret_key.sign(hash); 
        //exec("var skey = JSON.parse('" + ttp_secKeyass + "'); var exponent = sjcl.bn.fromBits(skey.exponent); var secret_key = new sjcl.ecc.ecdsa.secretKey(skey.curve, sjcl.ecc.curves['c384'], exponent); var hs = sjcl.hash.sha256.hash('" +info+ "'); var signature = secret_key.sign(hs,0);", "start", context, scope);
        
        //var hmac1 = new sjcl.misc.hmac('thekey');
        //var hmachash1 = hmac1.encrypt('foobar');
        
        exec("var hmac1 = new sjcl.misc.hmac('thekey'); var hmachash1 = hmac1.encrypt('foobar2');", "start", context, scope);
        //exec("var skey = JSON.parse('" + ttp_secKeyass + "'); var exponent = sjcl.bn.fromBits(skey.exponent); var secret_key = new sjcl.ecc.ecdsa.secretKey(skey.curve, sjcl.ecc.curves['c384'], exponent); var hashOfPlainText = 'abc123'; var signature = secret_key.sign(hashOfPlainText,0);", "start", context, scope);
        
        Object result2 = scope.get("hmachash1", scope);
        
        System.out.println("hmachash1 = " + result2);       
        if (result2 != Scriptable.NOT_FOUND) {
            json2 =  Context.toString(result2);       
            System.out.println("hmachash1 = " + json2);           
        }
        return json2;
    }
    
    public static void exec(String script, String name, Context context, Scriptable scope) {
        context.compileString(script, name, 1, null).exec(context,scope);
    }
    public static void compileAndExec(Reader in, String name, Context rhinoContext, Scriptable scope) throws IOException {
        rhinoContext.compileReader(in, name, 1, null).exec(rhinoContext,scope);
    }
 
    private Context createAndInitializeContext(Global global) {
        Context context = ContextFactory.getGlobal().enterContext();
        global.init(context);
        context.setOptimizationLevel(-1);
        context.setLanguageVersion(Context.VERSION_1_5);
        return context;
    }
    
    public static void main(String[] args) {
        AppTest x = new AppTest();
    
        System.setProperty("jsse.enableSNIExtension", "false");
        try {
            x.test2();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}