﻿var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'GitHub',
    version:'0.3',
    prepareImgLinks:function (callback) {
        const res = [];
        
        $('a > img[data-canonical-src]').each(function () {
            let img = $(this);
            img.data('hoverZoomSrc', [img.attr('data-canonical-src')]);
            img.data('hoverZoomCaption', [img.attr('alt')]);
            res.push(img);
        });

        $('img[src*="private-user-images"]').each(function () {
            let img = $(this);
            img.data('hoverZoomSrc', [img.attr('src')]);
            res.push(img);
        });
        
        hoverZoom.urlReplace(res,
            'a[href*="/blob/"]',
            /\/github.com\/(.*)\/blob\/(.*\.(jpg|png|gif))/,
            '/raw.githubusercontent.com/$1/$2'
        );
        
        hoverZoom.urlReplace(res,
            'img[src]',
            /(.*)\?(.*)/,
            '$1'
        );
        
        callback($(res), this.name);
    }
});
