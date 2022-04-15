import { jsPDF } from "jspdf";
import TekoBold from "./fonts/Teko-bold.js";
import TekoRegular from "./fonts/Teko-regular.js";
import MontserratNormal from "./fonts/Montserrat-normal.js";

var initialized = false;

var addFont = function (obj, encoded, postScriptName, id, style, weight) {
    obj.addFileToVFS(postScriptName, encoded);
    obj.addFont(postScriptName, id, style, weight);
};

var callAddFonts = function () {
    addFont(this, TekoBold, 'Teko-Bold.ttf', 'Teko', "normal", "bold");
    addFont(this, TekoRegular, 'Teko-Regular.ttf', 'Teko', "normal", "normal");
    addFont(this, MontserratNormal, 'Montserrat-normal.ttf', 'Montserrat', 'normal', "normal");
};

const initPdfFonts = function () {
    if (initialized) {
        console.log("Fonts already added");
        return;
    }

    initialized = true;
    jsPDF.API.events.push(['addFonts', callAddFonts]);
};

export default initPdfFonts;