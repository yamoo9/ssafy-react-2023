// ----------------------------------------------------------------------------
// 📌 [부수 효과(Side effects) - 함수형 프로그래밍]
// ----------------------------------------------------------------------------
// - 순수 함수는 불순(외부와 상호작용)한 것을 포함해서는 안됩니다.
// - 일반적으로 "부수 효과(Side effects)"란 다음의 것을 말합니다.
//   - 인풋 입력/변경
//   - DOM 쿼리 및 업데이트
//   - 글로벌 상태 읽기/쓰기
//   - 네트워크 요청/응답
//   - 로그
// ----------------------------------------------------------------------------

// 아래 코드는 여러 기능이 복합적으로 엉켜 있어 순수하지 못합니다.
// 코드를 "순수" 함수와 "부수 효과"를 처리하는 함수로 나눠 재구성합니다.

function render(node) {
  node.innerHTML = 'Loading...';

  fetch('https://random-data-api.com/api/v2/beers')
    .then((response) => response.json())
    .then((data) => {
      const { brand, name, style, hop, malts, alchol } = data;
      const beerElement = document.createElement('div');
      beerElement.classList.add('beer');
      beerElement.insertAdjacentHTML(
        'beforeend',
        /* html */ `
          <h2>${brand} ${name}</h2>
          <ul>
            <li><b>style</b>: ${style}</li>
            <li><b>hop</b>: ${hop}</li>
            <li><b>malts</b>: ${malts}</li>
            <li><b>alchol</b>: ${alchol}</li>
          </ul>
        `
      );
      node.innerHTML = '';
      node.append(beerElement);
    })
    .catch((error) => console.error(error.message));
}

const rootElement = document.getElementById('root');

render(rootElement);
