// --------------------------------------------------------------------------
// Promise, Async await

function main() {
  console.log('start!');

  // callback hell
  // 참고: https://bit.ly/3r5iUfe
  delay(() => {
    console.log('1s');
    delay(() => {
      console.log('2s');
      delay(() => {
        console.log('3s');
        delay(() => {
          console.log('4s');
        });
      });
    });
  });
}

function delay(callback, time = 1000) {
  setTimeout(callback, time);
}

main();
