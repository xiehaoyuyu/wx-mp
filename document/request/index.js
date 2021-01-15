export const request = (aaa) => {
  return new Promise((resolve, reject) => {
    [...aaa],
      wx.request({
        success: (result) => {
          resolve(result);
        },
        fail: (err) => {
          reject(err);
        },
      });
  });
};
