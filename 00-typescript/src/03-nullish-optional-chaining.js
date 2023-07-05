// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

function run() {
  nullish();
  // optionalChaining();
}

function nullish() {
  let value = 0;

  let result = value || 100;
  console.log('|| : ', result);

  function isNullOrUndefined(value) {
    return value === null || value === undefined ? true : false;
  }

  result = !isNullOrUndefined(value) ? value : 100;
  console.log('isNullOrUndefined : ', result);

  // 코드를 작성합니다.
}

function optionalChaining() {
  const topic = {
    _title: '매년 업데이트 되는 ECMAScript',
    getTitle() {
      return this._title;
    },
    setTitle(value) {
      this._title = value;
    },
  };

  if (topic && typeof topic === 'object' && !Array.isArray(topic)) {
    let title, name;
    if (typeof topic.getTitle === 'function') {
      title = topic.getTitle();
    }
    if (typeof topic.getName === 'function') {
      name = topic.getName();
    }
    console.log('typeof : ', title);
    console.log('typeof : ', name);
  }

  let title, name;
  // 코드를 작성합니다.
}

run();
