/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package servTTP;

import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.Reader;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.spec.ECNamedCurveParameterSpec;
import org.bouncycastle.jce.spec.IEKeySpec;
import org.bouncycastle.jce.spec.IESParameterSpec;
import org.mozilla.javascript.*;
import org.mozilla.javascript.tools.shell.Global;


/**
 *
 * @author graca
 */
@WebServlet(name = "servTTP", urlPatterns = {"/servTTP"})
public class servTTP extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet servTTP</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet servTTP at " + request.getContextPath() + "</h1><br><br>");
            
            KeyPairGenerator g = KeyPairGenerator.getInstance("EC", "BC");
            out.println("<br> passou0");
            ECNamedCurveParameterSpec parameterSpec = ECNamedCurveTable.getParameterSpec("secp384r1");
            g.initialize(parameterSpec, new SecureRandom());

            KeyPair aKeyPair = g.generateKeyPair();
            PublicKey aPub = aKeyPair.getPublic();
            PrivateKey aPriv = aKeyPair.getPrivate();

            KeyPair bKeyPair = g.generateKeyPair();
            PublicKey bPub = bKeyPair.getPublic();
            PrivateKey bPriv = bKeyPair.getPrivate();
            out.println("<br> passou1");
            javax.crypto.Cipher c1 = javax.crypto.Cipher.getInstance("ECIES", "BC");
            out.println("<br> passou2");
            javax.crypto.Cipher c2 = javax.crypto.Cipher.getInstance("ECIES", "BC");

            IEKeySpec c1Key = new IEKeySpec(aPriv, bPub);
            IEKeySpec c2Key = new IEKeySpec(bPriv, aPub);

            byte[] derivation = new byte[]{1, 2, 3, 4, 5, 6, 7, 8}; // #1
            byte[] encoding = new byte[]{8, 7, 6, 5, 4, 3, 2, 1}; // #2
            int macKeySizeInBits = 128;
            IESParameterSpec param = new IESParameterSpec(derivation, encoding, macKeySizeInBits);

            c1.init(javax.crypto.Cipher.ENCRYPT_MODE, c1Key, param); // #3
            c2.init(javax.crypto.Cipher.DECRYPT_MODE, c2Key, param); // #4

            byte[] message = "hello world -- a nice day today".getBytes();
            byte[] out1 = c1.doFinal(message, 0, message.length);
            out.println("<br><br>length: " + out1.length);
            out.println(new String(out1));
            out.println("<br><br>");
            byte[] out2 = c2.doFinal(out1, 0, out1.length);
            out.println(new String(out2));
            
            
            
            
            
           /*
            X9ECParameters ecParams = NISTNamedCurves.getByName("B-163");
            BigInteger privKey = new BigInteger("38e1", 16);
            ECPoint pubKey = ecParams.getG().multiply(privKey);
            
            out.println("Available curves:<br>");
            
            int counter = 0;
            for ( Enumeration e = NISTNamedCurves.getNames(); e.hasMoreElements(); ){
            if (counter == 3) {
                counter = -1;
                out.println( e.nextElement().toString() );
                out.println("<br>");
            }else{
                out.print( e.nextElement().toString() + "    ");
                out.println("<br>");
            }
             counter++;
        }
        ECPoint pMsg = ecParams.getG().multiply(
                new BigInteger(Integer.toHexString(2), 16));
        
        out.println("<br>");
        out.println("<br>");
        out.println("--------------------------------------------------------------------------------------------------------------------------------------------------");

        out.println("<br>");
        out.println("Selected curve:");

        out.println("Curve:     " + ecParams.getCurve().getFieldSize());
        out.println("<br>");

        out.println("--------------------------------------------------------------------------------------------------------------------------------------------------");
        out.println("<br>");
        out.println("Point:     " + "X: " + pMsg.getX().toBigInteger().toString(16) + "<br>" + "           Y: " + pMsg.getY().toBigInteger().toString(16));
        out.println("<br>");

        out.println("--------------------------------------------------------------------------------------------------------------------------------------------------");

        ECPoint one;
        ECPoint two;
        
        BigInteger random = new BigInteger(16, new SecureRandom());*/
        
        /* g^r */
       // one = ecParams.getG().multiply(random);
        
        /* pk^r+m */
       // two = pMsg.add(pubKey.multiply(random));
        
        //encryptedData edM = new encryptedData(one, two);
        /*
        out.println("<br><br>Encrypted:<br><br>");

        out.println("One:      " + "X: " + one.getX().toBigInteger().toString(16) + "<br>" + "           Y: " + one.getY().toBigInteger().toString(16) + "<br>");
        out.println("Two:      " + "X: " + two.getX().toBigInteger().toString(16) + "<br>" + "           Y: " + two.getY().toBigInteger().toString(16) + "<br>");

        out.println("--------------------------------------------------------------------------------------------------------------------------------------------------");

        ECPoint decrypted = two.eData.subtract(two.gInR.multiply(privKey));

        out.println("Decrypted: " + "X: " + decrypted.getX().toBigInteger().toString(16) + "<br>" + "           Y: " + decrypted.getY().toBigInteger().toString(16) + "<br>");
        
        */
        
        
        
        
        
        
        
        
            
            /*
            KeyPairGenerator kpg;
            kpg = KeyPairGenerator.getInstance("EC","SunEC");
            
            
            Cipher cipher = Cipher.getInstance("DES");
            out.println("provider=" + cipher.getProvider());
            
            
            ECGenParameterSpec ecsp;
            ecsp = new ECGenParameterSpec("secp192r1");
            kpg.initialize(ecsp);
            
            
            
            KeyPair kp = kpg.genKeyPair();
            PrivateKey privKey = kp.getPrivate();
            PublicKey pubKey = kp.getPublic();
            out.println("privKey = "+ privKey);
            out.println("<br><br>publicKey = " + pubKey.toString() + "<br><br>");
            
            cipher.init(Cipher.ENCRYPT_MODE, pubKey);*/
            
            out.println("passou");
            
            /*
            Global global = new Global();
            out.println("passou1");
            Context context  = createAndInitializeContext(global);
            out.println("passou2");
            Scriptable scope = context.initStandardObjects(global);
            out.println("passou3");
            URL url = new URL("http://localhost:8080/sjcl/sjcl.js");
            out.println("passou4");
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
            out.println("passou5");
            compileAndExec(in, "classpath:" + url.toString(), context, scope);
            out.println("passou6");
            in.close();
            out.println("passou7");
            exec("var p = {mode : 'ccm',iv : '9VJFbwZs/HhyN81aKrKLZA',salt : 'FVj3L6Omt14'}; var result = sjcl.encrypt('password', 'data', p, {})", "start", context,scope);
            out.println("passou8");
            Object result = scope.get("result", scope);
            out.println("resultado = " + result);
            if (result != Scriptable.NOT_FOUND) {
                String json =  Context.toString(result);
                out.println(json);
            } 
            exec("var rp = {}; var result = sjcl.decrypt('Siva', {iv : '9VJFbwZs/HhyN81aKrKLZA',salt : 'FVj3L6Omt14' ,ct : 'zi1SfGfSZMY5Rcdx+DOzfiM'}, {}, rp)", "start", context,scope);
            //exec("var rp = {}; var result = sjcl.decrypt('password', "+result+" , {}, rp);", "start", context,scope);
            result = scope.get("result", scope);
            if (result != Scriptable.NOT_FOUND) {
                String json =  Context.toString(result);
                out.println(json);
            }  */
        } catch(Exception e) {
            out.println("catch");
        }
        out.println("</body>");
        out.println("</html>");
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

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

}
