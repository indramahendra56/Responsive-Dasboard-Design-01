const requesPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Error.connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  try {
    let result = await requesPromise("movie.com");
    console.log(result);
  } catch (error) {
    console.log("Pesan Error", error);
  }
}

// ! allert 'jangan dihapus ya bro'
// ? ini apaan bro ?
// TODO iansdinaidnind
// * iadsinadinadinadin