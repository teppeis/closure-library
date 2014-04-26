declare module goog.ui {

    /**
     * This creates a TwoThumbSlider object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.SliderBase}
     */
    export class TwoThumbSlider extends goog.ui.SliderBase {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The prefix we use for the CSS class names for the slider and its elements.
         * @type {string}
         */
        static CSS_CLASS_PREFIX: string;
        
        /**
         * CSS class name for the value thumb element.
         * @type {string}
         */
        static VALUE_THUMB_CSS_CLASS: string;
        
        /**
         * CSS class name for the extent thumb element.
         * @type {string}
         */
        static EXTENT_THUMB_CSS_CLASS: string;
        
        /**
         * CSS class name for the range highlight element.
         * @type {string}
         */
        static RANGE_HIGHLIGHT_CSS_CLASS: string;
        
        /**
         * @param {goog.ui.SliderBase.Orientation} orient orientation of the slider.
         * @return {string} The CSS class applied to the twothumbslider element.
         * @protected
         * @override
         */
        getCssClass(orient: goog.ui.SliderBase.Orientation): string;
        
        /**
         * Creates the thumb members for a twothumbslider. If the
         * element contains a child with a class name 'goog-twothumbslider-value-thumb'
         * (or 'goog-twothumbslider-extent-thumb', respectively), then that will be used
         * as the valueThumb (or as the extentThumb, respectively). If the element
         * contains a child with a class name 'goog-twothumbslider-rangehighlight',
         * then that will be used as the range highlight.
         * @override
         */
        createThumbs(): void;
    }
}
