import { Aurelia, LogManager } from "aurelia-framework";

// Translation
import XHR from "i18next-xhr-backend";

// Import node modules
import "jquery-ui-bundle/jquery-ui.js";
import "jquery-ui-bundle/jquery-ui.css";
import "jquery-ui-bundle/jquery-ui.theme.css";
import "jquery-ui-bundle/jquery-ui.structure.css";
import "moment/min/moment.min.js";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.js";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.css";
//import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'; Not Compatible with 4.0.0
import "bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js";
import "bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css";
import "bootstrap-select/dist/js/bootstrap-select.js";
import "bootstrap-select/dist/css/bootstrap-select.css";
import "bootstrap-slider/dist/bootstrap-slider.js";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "datatables.net/js/jquery.dataTables.js";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-select/js/dataTables.select.js";
import "datatables.net-select-dt/css/select.dataTables.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "toastr/build/toastr.css";
import "toastr/build/toastr.min.js";
import "svg-pan-zoom/dist/svg-pan-zoom.js";
import * as Cookies from 'js-Cookie';
// Import configs
//import { AuthConfig } from "./config/authConfig";
//import { HostingParameters } from "./config/hostingConfig";
//import { CustomLogAppender } from "./services/loggingService";

/**
 * Aurelia configuration + plugins
 * @param {Aurelia} aurelia - The aurelia framework
 */
export async function configure(aurelia: Aurelia) {
    // Get config
   // const auth = new AuthConfig(hosting);
    aurelia.use
        .standardConfiguration()
        //.plugin("aurelia-auth",
        //    (baseconfig) => {
        //        // use config
        //        baseconfig.configure(auth.config);
        //    })
        .plugin("aurelia-validation")
        //.plugin("aurelia-i18n",
        //    (instance) => {
        //        // register backend plugin
        //        instance.i18next.use(XHR);

        //        // see http://i18next.com/docs/options/)
        //        return instance.setup({
        //            backend: {
        //                loadPath:
        //                    "locales/{{lng}}/atresources.json", // <-- XHR settings for where to get the files from
        //            },
        //            lng: (Cookies.get('language') == undefined || Cookies.get('language') == '' ? 'en-GB' : Cookies.get('language')),
        //            attributes: ["t", "i18n"],
        //            fallbackLng: "en-GB",
        //            load: 'currentOnly', // will ignore the 'en' language
        //            debug: false,
        //            returnNull: false,
        //            returnEmptyString: false,
        //        });
        //    });

    // Logging
    //LogManager.addAppender(new CustomLogAppender());
    ////LogManager.setLevel(LogManager.logLevel.debug);

    // Start aurelia
    aurelia.start().then(() => aurelia.setRoot("views/shell"));
};