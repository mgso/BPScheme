
import java.io.File;
import java.io.FileReader;
import java.io.Reader;
import java.util.List;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
import javax.script.ScriptEngineManager;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author graca
 */
public class TesteEngine {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        try {
        ScriptEngineManager mgr = new ScriptEngineManager();
        List<ScriptEngineFactory> factories = mgr.getEngineFactories();
        System.out.println("Available script engines:");
        for (int i = 0; i < factories.size(); i++) {
            ScriptEngineFactory factory = factories.get(i);

            String engine = factory.getEngineName();
            String language = factory.getLanguageName();

            System.out.println("-------------------------------------------");
            System.out.println("Language: " + language);
            System.out.println("Engine: " + engine);
            System.out.println("-------------------------------------------");
        }
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("ECMAScript");
        File script_file = new File("js/sjcl.js");
        Reader reader = new FileReader(script_file);
        engine.eval(reader);
        
        String script = "function encode(plain_text){"
                + "var encoded_value = sjcl.encrypt('asdf',plain_text);"
                + "return encoded_value;}"
                + "function decode(encoded_value){"
                + "var decoded_value = sjcl.decrypt('asdf', encoded_value);"
                + "return decoded_value;}";
        

        
        String scriptecc = "function encode(plain_text){"
                + "var temp = sjcl.ecc.elGamal.generateKeys(384, 1);"
               // + "var pubjson = temp.pub.serialize();"
               // + "var point = sjcl.ecc.curves[\"c\" + pubjson.curve].fromBits(pubjson.point);"
               // + "var publicKey = new sjcl.ecc.elGamal.publicKey(pubjson.curve, point.curve, point);"
               // + "var symkey_obj = publicKey.kem(0);"
               // + "var ciphertext = sjcl.encrypt(symkey_obj.key, plain_text);"
                + "return ciphertext;}";
        
        
        engine.eval(scriptecc);
        Invocable invocableEngine = (Invocable) engine;

        String plain_text = "admin";
        String cypher_text = (String) invocableEngine.invokeFunction("encode",plain_text);
        System.out.println("cypher_text = " + cypher_text);
        //cypher_text = "{'iv':'Ryo7jzhvx6VaapAvBzA8sA==','v':1,'iter':1000,'ks':128,'ts':64,'mode':'ccm,'adata':'','cipher':'aes','ct':'fNFXcoaooinlhNx8WJjjpEJB5NEAibwhiHE='}";
        //String plain_text_return = (String) invocableEngine.invokeFunction("decode",cypher_text);
        //System.out.print("plain_text="+plain_text+"\ncypher_text=" +cypher_text + "\nplain_text_return=" +  plain_text_return + "\n");
    } catch (Exception e) {
        e.printStackTrace();
    }
    }
    
}
