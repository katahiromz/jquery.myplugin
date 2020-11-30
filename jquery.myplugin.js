;(function($) {
    var self = this;
    $.fn.myplugin = function(args) {
        var self = this;
        var defaults = {
            // TODO:
            width: "100%",
            height: "auto",
            border: "1px solid black",
            text: "Hello, jQuery plugin",
        };
        self.settings = {};
        var methods = {
            init: function(options) {
                self.settings = $.extend(true, {}, defaults, options);
                return self.each(function(index, element) {
                    // TODO:
                    $(element).text(self.settings['text']);
                    $(element).css('width', self.settings['width']);
                    $(element).css('height', self.settings['height']);
                    $(element).css('border', self.settings['border']);
                });
            },
            destroy: function() {
                alert("destroy");
            },
            text: function(value) {
                if (value == undefined)
                    return self.settings['text'];
                self.each(function(index, element) {
                    $(element).text(value);
                });
                self.settings['text'] = value;
                return self;
            },
            border: function(value) {
                if (value == undefined)
                    return self.settings['border'];
                self.each(function(index, element) {
                    $(element).css('border', value);
                });
                self.settings['border'] = value;
                return self;
            },
            width: function(value) {
                if (value == undefined)
                    return self.settings['width'];
                self.each(function(index, element) {
                    $(element).css('width', value);
                });
                self.settings['width'] = value;
                return self;
            },
            height: function(value) {
                if (value == undefined)
                    return self.settings['height'];
                self.each(function(index, element) {
                    $(element).css('height', value);
                });
                self.settings['height'] = value;
                return self;
            },
            option: function(key, value) {
                if (value == undefined)
                    return self.settings[key];
                self.settings[key] = value;
                return self;
            },
        };
        if (methods[args]) {
            return methods[args].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof args === 'object' || !args) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method '" + args + "' not found in myplugin");
        }
    };
})(jQuery);
