
import java.io.FileReader;
import java.io.Reader;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.tools.shell.Global;


 
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author graca
 */
public class SJCLTeste {
    public static byte[] salt = {
        (byte)0xc8, (byte)0x73, (byte)0x41, (byte)0x8c,
        (byte)0x7e, (byte)0xd8, (byte)0xee, (byte)0x89
    };
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        Context context = Context.enter();
        Scriptable scope = context.initStandardObjects();
        
        ScriptEngineManager factory = new ScriptEngineManager();
        ScriptEngine jsEngine = factory.getEngineByName("javascript");
        jsEngine.put("out", System.out);
        
        
        try {
            Reader reader1 = null;
            Reader reader2 = null;
            Reader reader3 = null;
            Reader reader4 = null;
            Reader reader5 = null;
            Reader reader6 = null;
            Reader reader7 = null;
            Reader reader8 = null;
            Reader reader9 = null;
            Reader reader10 = null;
            Reader reader11 = null;
            Reader reader12 = null;
            Reader reader13 = null;
            Reader reader14 = null;
            Reader reader15 = null;
            Reader reader16 = null;
            Reader reader17 = null;
            Reader reader18 = null;
            Reader reader19 = null;
            Reader reader20 = null;
            Reader reader21 = null;
            
            //core
            Reader reader22 = null;
            Reader reader23 = null;
            Reader reader24 = null;
            Reader reader25 = null;
            Reader reader26 = null;
            Reader reader27 = null;
            Reader reader28 = null;
            Reader reader29 = null;
            Reader reader30 = null;
            Reader reader31 = null;
            Reader reader32 = null;
            Reader reader33 = null;
            Reader reader34 = null;
            Reader reader35 = null;
            Reader reader36 = null;
            Reader reader37 = null;
            Reader reader38 = null;
            Reader reader39 = null;
            Reader reader40 = null;
            Reader reader41 = null;
            Reader reader42 = null;
            Reader reader43 = null;
            Reader reader44 = null;
            Reader reader45 = null;
            Reader reader46 = null;
            Reader reader47 = null;
            Reader reader48 = null;
            Reader reader49 = null;
            Reader reader50 = null;
            
            
            reader1 = new FileReader("js/asn1.js");
            reader2 = new FileReader("js/asn1hex.js");
            reader3 = new FileReader("js/asn1x509.js");
            reader4 = new FileReader("js/base64.js");
            reader5 = new FileReader("js/core.js");
            reader6 = new FileReader("js/core_closure.js");
            reader7 = new FileReader("js/crypto.js");
            reader8 = new FileReader("js/cryptojs.js");
            reader9 = new FileReader("js/jsbn.js");
            reader10 = new FileReader("js/jsbn2.js");
            reader11 = new FileReader("js/pkcs5pkey.js");
            reader12 = new FileReader("js/prng4.js");
            reader13 = new FileReader("js/rng.js");
            reader14 = new FileReader("js/rsa.js");
            reader15 = new FileReader("js/rsa2.js");
            reader16 = new FileReader("js/rsapem.js");
            reader17 = new FileReader("js/rsasign.js");
            reader18 = new FileReader("js/sha1.js");
            reader19 = new FileReader("js/sha256.js");
            reader20 = new FileReader("js/sjcl.js");
            reader21 = new FileReader("js/x509.js");
            
            //core
            reader22 = new FileReader("js/core/aes.js");
            reader23 = new FileReader("js/core/base64.js");
            reader24 = new FileReader("js/core/bitArray.js");
            reader25 = new FileReader("js/core/bn.js");
            reader26 = new FileReader("js/core/cbc.js");
            reader27 = new FileReader("js/core/codecBase64.js");
            reader28 = new FileReader("js/core/codecBytes.js");
            reader29 = new FileReader("js/core/codecHex.js");
            reader30 = new FileReader("js/core/codecString.js");
            reader31 = new FileReader("js/core/convenience.js");
            reader32 = new FileReader("js/core/ecc.js");
            reader33 = new FileReader("js/core/gcm.js");
            reader34 = new FileReader("js/core/hmac.js");
            reader35 = new FileReader("js/core/jsbn.js");
            reader36 = new FileReader("js/core/jsbn2.js");
            reader37 = new FileReader("js/core/ocb2.js");
            reader38 = new FileReader("js/core/pbkdf2.js");
            reader39 = new FileReader("js/core/prng4.js");
            reader40 = new FileReader("js/core/random.js");
            reader41 = new FileReader("js/core/rng.js");
            reader42 = new FileReader("js/core/rsa.js");
            reader43 = new FileReader("js/core/rsa2.js");
            reader44 = new FileReader("js/core/sha1.js");
            reader45 = new FileReader("js/core/sha256.js");
            reader46 = new FileReader("js/core/sha512.js");
            reader47 = new FileReader("js/core/sjcl.js");
            reader48 = new FileReader("js/core/srp.js");
            reader49 = new FileReader("js/core/ccm.js");
            reader50 = new FileReader("teste1.js");
            System.out.println("passou1");
            
            //context.evaluateReader(scope, reader1, "reader1", 1, null);
            context.evaluateReader(scope, reader2, "reader2", 1, null);
            //context.evaluateReader(scope, reader3, "reader3", 1, null);
            context.evaluateReader(scope, reader4, "reader4", 1, null);
            context.evaluateReader(scope, reader5, "reader5", 1, null);
            context.evaluateReader(scope, reader6, "reader6", 1, null);
            context.evaluateReader(scope, reader7, "reader7", 1, null);
            context.evaluateReader(scope, reader8, "reader8", 1, null);
            //context.evaluateReader(scope, reader9, "reader9", 1, null);
            //context.evaluateReader(scope, reader10, "reader10", 1, null);
            context.evaluateReader(scope, reader11, "reader11", 1, null);
            context.evaluateReader(scope, reader12, "reader12", 1, null);
            
            //context.evaluateReader(scope, reader13, "reader13", 1, null);
            context.evaluateReader(scope, reader14, "reader14", 1, null);
            context.evaluateReader(scope, reader15, "reader15", 1, null);
            context.evaluateReader(scope, reader16, "reader16", 1, null);
            context.evaluateReader(scope, reader17, "reader17", 1, null);
            context.evaluateReader(scope, reader18, "reader18", 1, null);
            context.evaluateReader(scope, reader19, "reader19", 1, null);
            context.evaluateReader(scope, reader20, "reader20", 1, null);
            context.evaluateReader(scope, reader21, "reader21", 1, null);
            
            //core
            context.evaluateReader(scope, reader22, "reader22", 1, null);
            context.evaluateReader(scope, reader23, "reader23", 1, null);
            context.evaluateReader(scope, reader24, "reader24", 1, null);
            context.evaluateReader(scope, reader25, "reader25", 1, null);
            context.evaluateReader(scope, reader26, "reader26", 1, null);
            context.evaluateReader(scope, reader27, "reader27", 1, null);
            context.evaluateReader(scope, reader28, "reader28", 1, null);
            context.evaluateReader(scope, reader29, "reader29", 1, null);
            context.evaluateReader(scope, reader30, "reader30", 1, null);
            context.evaluateReader(scope, reader31, "reader31", 1, null);
            context.evaluateReader(scope, reader32, "reader32", 1, null);
            context.evaluateReader(scope, reader33, "reader33", 1, null);
            context.evaluateReader(scope, reader34, "reader34", 1, null);
            //context.evaluateReader(scope, reader35, "reader35", 1, null);
            //context.evaluateReader(scope, reader36, "reader36", 1, null);
            context.evaluateReader(scope, reader37, "reader37", 1, null);
            context.evaluateReader(scope, reader38, "reader38", 1, null);
            context.evaluateReader(scope, reader39, "reader39", 1, null);
            context.evaluateReader(scope, reader40, "reader40", 1, null);
            //context.evaluateReader(scope, reader41, "reader41", 1, null);
            context.evaluateReader(scope, reader42, "reader42", 1, null);
            context.evaluateReader(scope, reader43, "reader43", 1, null);
            context.evaluateReader(scope, reader44, "reader44", 1, null);
            context.evaluateReader(scope, reader45, "reader45", 1, null);
            context.evaluateReader(scope, reader46, "reader46", 1, null);
            context.evaluateReader(scope, reader47, "reader47", 1, null);
            context.evaluateReader(scope, reader48, "reader48", 1, null);
            context.evaluateReader(scope, reader49, "reader49", 1, null);
            context.evaluateReader(scope, reader50, "reader50", 1, null);        
          
            context.evaluateReader(scope, reader2, "reader2", 1, null);

            Object wrappedOut = Context.javaToJS(System.out, scope);
            ScriptableObject.putProperty(scope, "out", wrappedOut);
            String code = "function encode(plain_text){"
                + "var encoded_value = sjcl.encrypt('asdf',plain_text);"
                + "return(encoded_value);}";
            
            Boolean x = scope.has("ecc", scope);
            System.out.println("x = "+ x);
            Context.exit();
            
            /*
            Boolean x = scope.has("sjcl.encrypt", scope);
            System.out.println("x = "+ x);
            Function fct = (Function) scope.get("sjcl.encrypt", scope);
            System.out.println("passou5");
            
            Object params[] = {"12345","alomundo"};
            Object result = scope.get("result", scope);
            result = (String)fct.call(context, scope, scope, params);
            System.out.println("result = " + result);*/

        } catch(Exception e) {
            System.out.println("e = " + e);
        }
            
            
            
            
            
            
            
            
            
            
            
            
            
            /*
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            System.out.println("passou 1");
            KeySpec spec = new PBEKeySpec(("12345").toCharArray(), salt, 65536, 256);
            System.out.println("passou 2");
            SecretKey tmp = factory.generateSecret(spec);
            System.out.println("passou 3");
            SecretKey secret = new SecretKeySpec(tmp.getEncoded(), "AES");
            System.out.println("passou 4");
            System.out.println("secret = " +secret);*/
            
            /* Encrypt the message. */
            /*
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            System.out.println("passou 5");
            cipher.init(Cipher.ENCRYPT_MODE, secret);
            System.out.println("passou 6");
            AlgorithmParameters params = cipher.getParameters();
            System.out.println("passou 7");
            byte[] iv = params.getParameterSpec(IvParameterSpec.class).getIV();
            System.out.println("passou 8");
            System.out.println("iv =  " + iv.toString());
            System.out.println("passou 9");
            byte[] ciphertext = cipher.doFinal("Hello, World!".getBytes("UTF-8"));
            System.out.println("cipher =  " + ciphertext);*/
            
            /*
            SecretKeyFactory factory = SecretKeyFactory.getInstance("AES");
            //KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 1024, 256);
            KeySpec spec = new PBEKeySpec("12345", salt, 1024, 256);
            SecretKey tmp = factory.generateSecret(spec);
            SecretKey secret = new SecretKeySpec(tmp.getEncoded(), "AES");
 
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE, secret, new IvParameterSpec(iv));
            String plaintext = new String(cipher.doFinal(ciphertext), "UTF-8");
            System.out.println("plaintext = " + plaintext);*/
            
        /*}catch (Exception e) {
            System.out.println("catch");
        }*/
    }
    
    
    private Context createAndInitializeContext(Global global) {
    Context context = ContextFactory.getGlobal().enterContext();
    global.init(context);
    context.setOptimizationLevel(-1);
    context.setLanguageVersion(Context.VERSION_1_5);
    return context;
}
}
