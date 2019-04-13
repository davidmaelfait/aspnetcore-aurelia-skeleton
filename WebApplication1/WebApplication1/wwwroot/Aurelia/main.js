var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import "jquery-ui-bundle/jquery-ui.js";
import "jquery-ui-bundle/jquery-ui.css";
import "jquery-ui-bundle/jquery-ui.theme.css";
import "jquery-ui-bundle/jquery-ui.structure.css";
import "moment/min/moment.min.js";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css";
import "aurelia-bootstrap-datetimepicker/dist/amd/bootstrap-datetimepicker-bs4.css";
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
// Import configs
//import { AuthConfig } from "./config/authConfig";
//import { HostingParameters } from "./config/hostingConfig";
//import { CustomLogAppender } from "./services/loggingService";
/**
 * Aurelia configuration + plugins
 * @param {Aurelia} aurelia - The aurelia framework
 */
export function configure(aurelia) {
    return __awaiter(this, void 0, void 0, function* () {
        // Get config
        // const auth = new AuthConfig(hosting);
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-bootstrap-datetimepicker', config => {
            // extra attributes, with config.extra
            // config.extra.iconBase = 'glyphicon';
            // config.extra.withDateIcon = true;
            // or any picker options, with config.options
            //config.options.allowInputToggle = true;
            config.extra.bootstrapVersion = 3;
            // you can also change the button class, default is shown below
            //config.extra.buttonClass = 'btn btn-outline-secondary';
        })
            .plugin("aurelia-validation");
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
    });
}
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7T0FNTywrQkFBK0I7T0FDL0IsZ0NBQWdDO09BQ2hDLHNDQUFzQztPQUN0QywwQ0FBMEM7T0FDMUMsMEJBQTBCO09BQzFCLG1DQUFtQztPQUNuQyxrQ0FBa0M7T0FDbEMsZ0NBQWdDO09BR2hDLDhFQUE4RTtPQUM5RSw0RUFBNEU7T0FFNUUsd0RBQXdEO09BQ3hELDBEQUEwRDtPQUMxRCw4Q0FBOEM7T0FDOUMsZ0RBQWdEO09BQ2hELDJDQUEyQztPQUMzQyxnREFBZ0Q7T0FDaEQsd0NBQXdDO09BQ3hDLDZDQUE2QztPQUM3QywrQ0FBK0M7T0FDL0Msb0RBQW9EO09BQ3BELGlEQUFpRDtPQUNqRCw0Q0FBNEM7T0FDNUMsNENBQTRDO09BQzVDLDRDQUE0QztPQUM1Qyw2Q0FBNkM7T0FDN0Msc0RBQXNEO09BQ3RELHlCQUF5QjtPQUN6Qiw0QkFBNEI7T0FDNUIsbUNBQW1DO0FBTzFDLGlCQUFpQjtBQUNqQixtREFBbUQ7QUFDbkQsNkRBQTZEO0FBQzdELGdFQUFnRTtBQUVoRTs7O0dBR0c7QUFDSCwwQkFBZ0MsT0FBZ0I7O1FBQzVDLGFBQWE7UUFDZCx3Q0FBd0M7UUFDdkMsT0FBTyxDQUFDLEdBQUc7YUFDTixxQkFBcUIsRUFBRTthQU12QixNQUFNLENBQUMsa0NBQWtDLEVBQUUsTUFBTTtZQUM5QyxzQ0FBc0M7WUFDdkMsdUNBQXVDO1lBQ3ZDLG9DQUFvQztZQUVuQyw2Q0FBNkM7WUFDN0MseUNBQXlDO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBRWxDLCtEQUErRDtZQUMvRCx5REFBeUQ7UUFDN0QsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDN0IseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixvQ0FBb0M7UUFDcEMsb0NBQW9DO1FBRXBDLGtEQUFrRDtRQUNsRCxpQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQiw2R0FBNkc7UUFDN0csZ0JBQWdCO1FBQ2hCLCtIQUErSDtRQUMvSCx3Q0FBd0M7UUFDeEMsbUNBQW1DO1FBQ25DLG1FQUFtRTtRQUNuRSwyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2QyxhQUFhO1FBQ2IsU0FBUztRQUViLFVBQVU7UUFDVixrREFBa0Q7UUFDbEQsbURBQW1EO1FBRW5ELGdCQUFnQjtRQUNoQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FBQTtBQUFBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiJBdXJlbGlhL1NvdXJjZS8ifQ==
