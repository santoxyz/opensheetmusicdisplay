import {ITextMeasurer} from "../../Interfaces/ITextMeasurer";
import {Fonts} from "../../../Common/Enums/Fonts";
import {FontStyles} from "../../../Common/Enums/FontStyles";
import {VexFlowConverter} from "./VexFlowConverter";
import {JSDOM} from "jsdom";

import { createCanvas, loadImage }  from "canvas";
const canvas = createCanvas(200, 200);
/**
 * Created by Matthias on 21.06.2016.
 */

const window: any = (new JSDOM("<html><body></body></html>")).window;
const document: HTMLDocument = window.document;

export class VexFlowTextMeasurer implements ITextMeasurer {
    constructor() {
        this.context = canvas.getContext("2d");
    }
    // The context of a canvas used internally to compute font sizes
    private context: CanvasRenderingContext2D;

    /**
     *
     * @param text
     * @param font
     * @param style
     * @returns {number}
     */
    public computeTextWidthToHeightRatio(text: string, font: Fonts, style: FontStyles): number {
        this.context.font = VexFlowConverter.font(20, style, font);
        return this.context.measureText(text).width / 20;
    }
}
