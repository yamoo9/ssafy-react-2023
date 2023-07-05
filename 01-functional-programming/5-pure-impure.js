// ----------------------------------------------------------------------------
// 📌 [순수성(Purity) - 함수형 프로그래밍]
// ----------------------------------------------------------------------------
// - 함수형 프로그래밍에서 함수는 "순수(pure)"해야 합니다.
// - 순수 함수는 입력 값에의해서만 출력 값이 결정되며, "불순(impure)"한 것을 포함하지 않야아 합니다.
// - 동일한 입력 값에 대해 항상 동일한 출력 값을 보장하므로 코드의 예측 가능성을 높입니다.
// ----------------------------------------------------------------------------

// [순수 함수의 요건]
// 1. 동일한 입력이 주어지면 항상 동일한 출력을 반환해야 합니다.
// 2. 불순한 것을 포함해서는 안됩니다. (불순: side-effects)

// 아래 함수 중 순수하지 않은 것은 무엇일까요?

function printTopic(topic) {
  return `[printTopic] "${topic}"에 대해 관심을 갖고 학습합니다.`;
}

function renderTopic(topic, node) {
  const topicContent = `[renderTopic] "${topic}"에 대해 관심을 갖고 학습합니다.`;
  node.textContent = topicContent;
}

function fetchTopic(topic, size = 2) {
  fetch(`https://random-data-api.com/api/v2/beers?size=${size}`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((item) =>
        console.log(
          `[fetchTopic] "맥주 ${item.hop} 홉(hop)"과 "${topic}"에 대해 관심을 갖고 학습합니다.`
        )
      )
    )
    .catch((error) => console.error(error.message));
}

// --------------------------------------------------------------------------

function main() {
  const virtualElement = {
    type: 'div',
    props: { className: 'print' },
    textContent: '',
  };

  const TOPIC = '함수형 프로그래밍';

  const topicMessage = printTopic(TOPIC);
  console.log(topicMessage);

  fetchTopic(TOPIC, 3);
  renderTopic(TOPIC, virtualElement);
  console.log(virtualElement.textContent);
}

main();
