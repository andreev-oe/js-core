let fileSizes = {
    testFile1: 65,
    testFile2: 48,
}

function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
    getFileSize(filename1, (fileSize1) => {
        getFileSize(filename2, (fileSize2) => {
            cb(fileSize1 + fileSize2)
        })
    })
}
