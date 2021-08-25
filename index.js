arr = [2, 3, 1, 4];

// awaitはasync内でしか使えない
(async (arr) => {
  for (let item of arr) {
    console.log(item);

    // 他の言語でいう sleep(time)
    // awaitの処理が終わるまで処理が先に進まないようにする
    await ((time) => {
      // Promise内の処理が終わったら、Promiseを返す
      return new Promise(
        // 時間が経つまでresolveが返ってこないので、
        // 実質Promiseの処理が終わるのは、その時間後
        resolve => setTimeout(resolve, time)
      );
    })(1000);
  }
})(arr);
