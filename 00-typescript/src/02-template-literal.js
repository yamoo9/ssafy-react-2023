// --------------------------------------------------------------------------
// template literal

const koreanFoods = {
  caption: '한식 메뉴',
  rows: [
    { headline: '뚝배기 불고기', content: '8,000원' },
    { headline: '스팸치즈볶음밥', content: '7,500원' },
    { headline: '불고기낙지덮밥', content: '9,000원' },
  ],
};

function run() {
  const rendredResult = renderTable(koreanFoods);
  console.log(rendredResult);
}

function renderTable(data) {
  return [
    '<table class="table">',
    '<caption class="sr-only">' + data.caption + '</caption>',
    data.rows.reduce(function (htmlString, rowData) {
      const rowString = [
        '<tr>',
        '<th>' + rowData.headline + '</th>',
        '<td>' + rowData.content + '</td>',
        '</tr>',
      ].join('');
      return htmlString + rowString;
    }, ''),
    '</table>',
  ].join('');
}

run();
