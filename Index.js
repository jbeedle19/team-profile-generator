console.log("Hello, Josh")

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML file created! Take a look at the new file in the dist folder!'
            });   
        });
    });
};