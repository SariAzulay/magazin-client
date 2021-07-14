
export const saveFiles = (data) => {
    return new Promise((resolve, reject) => {
        HttpFile.post(`/uploadMultipleFiles`, data).then((res) => {
            const fileData = res.data.filesData;
            resolve(fileData);
        }).catch(error => {
            reject(error);
        })
    });
}
