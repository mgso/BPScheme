
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.Scriptable;
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
public class testeTempo {

    String ttp_publicKey = "{\"x\":{\"limbs\":[7296387,3635860,7308690,10182900,10793413,6882408,2036965,7555316,4019036,12922602,14912849,274822,6071145,15449049,14950740,5300500]},\"y\":{\"limbs\":[1076521,8591918,11265433,13292121,6348011,188105,5471092,7264486,6369423,11166595,2189263,9973930,4908328,12344003,3992360,15367403]},\"point\":[1356928228,559213499,-648240279,70354659,-1924020946,-365079716,1934160927,350578948,1755623877,-1688144785,-2054015110,-1804642941,-360912068,-349651878,-1018501848,-1741641183,1741662819,-2090782577,1859708499,2071200478,-916398869,-892184149,-442924262,772828457],\"curve\":384}";
    String ttp_secKey = "{\"exponent\":[1069408656,271616104,62342418,600285951,972663950,-2074773771,-1602518654,1403204985,-806643808,-477271522,28566825,-850014992],\"curve\":384}";  
    String usr_publicKey = "{\"x\":{\"limbs\":[15864235,4610839,11169421,3441133,16739269,5677565,9142001,8424939,6025039,4630617,9142288,8696691,14860947,2975129,13262033,493540]},\"y\":{\"limbs\":[12440088,10752342,9747748,5221016,8858169,10845212,2648377,13360668,1318450,2155648,2914302,2046153,14041129,6746629,10267966,13284908]},\"point\":[126346442,1557212517,-1713192301,-2068614261,-2146416984,1499197263,-2138182773,2129745569,-33592379,880930218,1854752347,401740203,-894030692,-1388419342,97927209,523815212,2013143268,-2146165198,-874636248,1765385596,478620217,1336580244,-1121672175,1455280664],\"curve\":384}";
    String adn_publicKey = "{\"x\":{\"limbs\":[3827160,15051554,5479891,15644514,11427424,2084259,11997949,16677986,2614190,13296047,13351420,2545093,9027793,6238500,15744826,5977171]},\"y\":{\"limbs\":[5059475,1890736,9064256,15950300,914273,5943878,719802,12808148,2038761,3375767,2832976,15852116,12803468,13394457,15341110,12709448]},\"point\":[1530156016,1060790065,613007569,651544011,-1174615327,-1356340306,-25402697,318578637,-1548853664,-289971629,-1647057493,574252504,-1041348374,372690018,432233868,-236825557,978334594,-1759568919,-1016081398,-71673166,1175319393,-211690358,1329601753,-1337117805],\"curve\":384}";
    String stag="";
    String json="";
    /**
     * @param args the command line arguments
     */
     public static void main(String[] args) {
        // TODO code application logic here
        
        //verificação tempo encriptacao
        try{
            long t1 = System.currentTimeMillis();
            data2 ad_enc2 = BPECC_encrypt2(usr_publicKey, 2);
            long t2 = System.currentTimeMillis();
            long t3 = t2 - t1;
            System.out.println("t3 = " + t3);
        } catch(Exception e){
            System.out.println("e = " + e);
        }
            
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
    
//Encripta usando Curvas Elipticas e a biblioteca SJCL
      public data2 BPECC_encrypt2(String msg, int entidade) throws Exception {
        Global global = new Global();
        Context context  = createAndInitializeContext( global );
        Scriptable scope = context.initStandardObjects( global );
        String pk="";
        data2 retorno = new data2();
        
 
        if (entidade == 1) pk = ttp_publicKey;
        else if (entidade == 2) pk = usr_publicKey;
        else if (entidade == 3) pk = adn_publicKey;
        URL url = new URL("http://localhost:8080/sjcl/sjcl.js");
        BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));
        compileAndExec(in, "classpath:" + url.toString(), context, scope);
        in.close();
        
        //Encriptando com ECC
        exec("var pub = JSON.parse('" + pk + "'); var point = sjcl.ecc.curves['c384'].fromBits(pub.point); var pubcurve = pub.curve; var pointcurve = point.curve; var pubkey = new sjcl.ecc.elGamal.publicKey(pubcurve, pointcurve, point); var symkey_obj = pubkey.kem(0); var tag = symkey_obj.tag; var cipherMessage = sjcl.encrypt(symkey_obj.key, JSON.stringify(\"" + msg + "\"));", "start", context, scope);
        Object result = scope.get("cipherMessage", scope);
        Object tag = scope.get("tag", scope);
        System.out.println("result = " + result);
        
        if (result != Scriptable.NOT_FOUND) {
            json =  Context.toString(result);
            stag = Context.toString(tag);
            System.out.println("json = " + json);
            System.out.println("tag = " + stag);
        }
        retorno.cifro = json;
        retorno.tag =stag;
        return retorno;
    }// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
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

    
}

class data2
{
    public String cifro; 
    public String tag;
};

