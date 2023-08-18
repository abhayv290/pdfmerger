const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger('merger');

let mergePdfs=async (_p1 , _p2) => {
    await merger.add(_p1);
    await merger.add(_p2);
    // await merger.add(_p3);
    var d=new Date().getTime()
    await merger.save( `public/${d}.pdf`);
    return d;
}

module.exports={mergePdfs}


